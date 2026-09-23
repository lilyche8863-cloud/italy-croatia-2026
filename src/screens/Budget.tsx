import React, { useState, useEffect, useMemo } from 'react';
import { 
  ChevronLeft, Plus, Trash2, Edit2, Check, X, 
  Wallet, PieChart, Users, ArrowUpRight, ArrowDownRight, 
  Calendar, Tag, HelpCircle, AlertCircle, BedDouble, 
  Car, Plane, CheckCircle2, Copy, RefreshCw, Calculator, 
  ArrowRight, ShieldCheck, ChevronDown, ChevronUp, Download, Info
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { db, auth } from '../lib/firebase';
import { 
  collection, onSnapshot, query, orderBy, 
  addDoc, deleteDoc, doc, updateDoc 
} from 'firebase/firestore';
import { cn } from '@/lib/utils';
import { 
  ACCOMMODATIONS, TRANSPORTS, ALL_MEMBERS, ITALY_3_MEMBERS, CROATIA_5_MEMBERS,
  AccommodationItem, TransportItem
} from '@/data/travelPlan';

// Core Types
export interface Transaction {
  id: string;
  amount: number;
  type: 'income' | 'expense';
  category: string;
  description: string;
  date: string;
  addedBy: string;
  payer: string;
  splitWith: string[];
}

export const CATEGORIES = [
  { label: '飯店住宿', value: 'Stay', icon: BedDouble, color: 'bg-teal-50 text-teal-700 border-teal-200 dark:bg-teal-950/30 dark:text-teal-400' },
  { label: '交通接駁', value: 'Transit', icon: Car, color: 'bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-950/30 dark:text-blue-400' },
  { label: '機票航段', value: 'Flight', icon: Plane, color: 'bg-indigo-50 text-indigo-700 border-indigo-200 dark:bg-indigo-950/30 dark:text-indigo-400' },
  { label: '餐飲美食', value: 'Food', icon: Tag, color: 'bg-orange-50 text-orange-700 border-orange-200 dark:bg-orange-950/30 dark:text-orange-400' },
  { label: '景點門票', value: 'Play', icon: Tag, color: 'bg-purple-50 text-purple-700 border-purple-200 dark:bg-purple-950/30 dark:text-purple-400' },
  { label: '購物紀念', value: 'Shopping', icon: Tag, color: 'bg-pink-50 text-pink-700 border-pink-200 dark:bg-pink-950/30 dark:text-pink-400' },
  { label: '其他雜項', value: 'Others', icon: Tag, color: 'bg-gray-50 text-gray-700 border-gray-200 dark:bg-gray-800/40 dark:text-gray-400' },
];

export interface PlannedBudgetItem {
  id: string;
  phase: 'italy' | 'croatia' | 'flight';
  category: 'Stay' | 'Transit' | 'Flight' | 'Ticket';
  title: string;
  datesText: string;
  totalEur: number;
  totalUsd?: number;
  currency: 'EUR' | 'USD';
  rawAmount: number;
  splitMembers: string[];
  notes: string;
  payerDefault: string;
  isConfirmed?: boolean;
}

// 建立預算明細項目：直接由 ACCOMMODATIONS 與 TRANSPORTS 動態映射，確保 100% 同步
export const PLANNED_BUDGET_ITEMS: PlannedBudgetItem[] = [
  // 住宿 12 處
  ...ACCOMMODATIONS.map(acc => ({
    id: acc.id,
    phase: acc.phase,
    category: 'Stay' as const,
    title: `${acc.name} (${acc.datesDisplay} · ${acc.nights}晚 · ${acc.guestsCount}人)`,
    datesText: acc.dates,
    totalEur: acc.currency === 'EUR' ? acc.totalAmount : 0,
    totalUsd: acc.currency === 'USD' ? acc.totalAmount : 0,
    currency: acc.currency,
    rawAmount: acc.totalAmount,
    splitMembers: acc.splitMembers,
    notes: `${acc.channel} 訂單 (${acc.bookingCode}) · ${acc.roomType} · ${acc.paymentStatus}`,
    payerDefault: '小花',
    isConfirmed: true,
  })),

  // 交通、航班與票券 7 項 (與手冊 Table II 完全同步)
  ...TRANSPORTS.map(tr => ({
    id: tr.id,
    phase: tr.phase,
    category: tr.category as 'Transit' | 'Flight' | 'Ticket',
    title: tr.title,
    datesText: tr.datesText,
    totalEur: tr.totalAmount,
    totalUsd: 0,
    currency: tr.currency,
    rawAmount: tr.totalAmount,
    splitMembers: tr.splitMembers,
    notes: tr.notes,
    payerDefault: tr.id === 'transit-unirent' ? '小許' : (tr.id === 'transit-hertz' || tr.id === 'transit-hertz-milan') ? '春香' : '小花',
    isConfirmed: true,
  }))
];

enum OperationType {
  CREATE = 'create',
  UPDATE = 'update',
  DELETE = 'delete',
  LIST = 'list',
  GET = 'get',
  WRITE = 'write',
}

interface FirestoreErrorInfo {
  error: string;
  operationType: OperationType;
  path: string | null;
  authInfo: {
    userId?: string | null;
    email?: string | null;
  }
}

function handleFirestoreError(error: unknown, operationType: OperationType, path: string | null) {
  const errInfo: FirestoreErrorInfo = {
    error: error instanceof Error ? error.message : String(error),
    authInfo: {
      userId: auth.currentUser?.uid,
      email: auth.currentUser?.email,
    },
    operationType,
    path
  };
  console.error('Firestore Error: ', JSON.stringify(errInfo));
  throw new Error(JSON.stringify(errInfo));
}

function cleanAmountInput(val: string): string {
  let cleaned = val.replace(/[€¥￥$nNtT\s,]/gi, '');
  const parts = cleaned.split('.');
  if (parts.length > 2) {
    cleaned = parts[0] + '.' + parts.slice(1).join('');
  }
  cleaned = cleaned.replace(/[^0-9.]/g, '');
  return cleaned;
}

export function Budget() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'planned' | 'ledger' | 'settlement'>('planned');
  const [currency, setCurrency] = useState<'EUR' | 'TWD'>('EUR');
  const EUR_TO_TWD = 37.3;
  const USD_TO_TWD = 30.95;

  // Realtime Ledger Transactions from Firestore
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [isClearing, setIsClearing] = useState(false);
  const [isImporting, setIsImporting] = useState(false);

  // Form State
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [amount, setAmount] = useState('');
  const [type, setType] = useState<'income' | 'expense'>('expense');
  const [category, setCategory] = useState('Food');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState(() => new Date().toISOString().split('T')[0]);
  const [payer, setPayer] = useState('小花');
  const [splitWith, setSplitWith] = useState<string[]>(CROATIA_5_MEMBERS);

  // Editing state
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editAmount, setEditAmount] = useState('');
  const [editType, setEditType] = useState<'income' | 'expense'>('expense');
  const [editCategory, setEditCategory] = useState('');
  const [editDescription, setEditDescription] = useState('');
  const [editDate, setEditDate] = useState('');
  const [editPayer, setEditPayer] = useState('');
  const [editSplitWith, setEditSplitWith] = useState<string[]>([]);

  // Expanded details state in planned tab
  const [expandedMember, setExpandedMember] = useState<string | null>(null);
  const [expandedPlannedItems, setExpandedPlannedItems] = useState<Record<string, boolean>>({});

  // Realtime subscription
  useEffect(() => {
    const q = query(collection(db, 'transactions'), orderBy('date', 'desc'));
    
    const unsubscribe = onSnapshot(
      q, 
      (snapshot) => {
        const list: Transaction[] = [];
        snapshot.forEach((doc) => {
          const data = doc.data();
          list.push({
            id: doc.id,
            amount: Number(data.amount || 0),
            type: data.type || 'expense',
            category: data.category || 'Others',
            description: data.description || '',
            date: data.date || '',
            addedBy: data.addedBy || '',
            payer: data.payer || '小花',
            splitWith: data.splitWith || CROATIA_5_MEMBERS,
          });
        });
        setTransactions(list);
        setLoading(false);
      },
      (error) => {
        handleFirestoreError(error, OperationType.LIST, 'transactions');
        setErrorMessage('載入帳目數據失敗');
        setLoading(false);
      }
    );

    return () => unsubscribe();
  }, []);

  const formatDualMoney = (eur: number, usd: number = 0) => {
    if (currency === 'TWD') {
      const twd = Math.round(eur * EUR_TO_TWD + usd * USD_TO_TWD);
      return `NT$${twd.toLocaleString()}`;
    }
    if (usd > 0 && eur > 0) {
      return `€${eur.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })} + US$${usd.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
    }
    if (usd > 0) {
      return `US$${usd.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
    }
    return `€${eur.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  };

  const formatMoney = (eur: number) => {
    if (currency === 'TWD') {
      const twd = Math.round(eur * EUR_TO_TWD);
      return `NT$${twd.toLocaleString()}`;
    }
    return `€${eur.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  };

  // Planned totals calculations (Strictly computed from items)
  const plannedStats = useMemo(() => {
    let stayEur = 0;
    let stayUsd = 0;
    let transitEur = 0;
    let flightEur = 0;
    let ticketEur = 0;

    let italyEur = 0;
    let croatiaEur = 0;
    let croatiaUsd = 0;

    const memberBreakdown: Record<string, {
      totalEur: number;
      totalUsd: number;
      italyEur: number;
      croatiaEur: number;
      croatiaUsd: number;
      flightEur: number;
      ticketEur: number;
      items: { title: string; shareAmount: number; currency: 'EUR' | 'USD'; phase: string; category: string }[];
    }> = {};

    ALL_MEMBERS.forEach(m => {
      memberBreakdown[m] = {
        totalEur: 0,
        totalUsd: 0,
        italyEur: 0,
        croatiaEur: 0,
        croatiaUsd: 0,
        flightEur: 0,
        ticketEur: 0,
        items: []
      };
    });

    PLANNED_BUDGET_ITEMS.forEach(item => {
      const eur = item.totalEur || 0;
      const usd = item.totalUsd || 0;

      if (item.category === 'Stay') {
        stayEur += eur;
        stayUsd += usd;
      } else if (item.category === 'Transit') {
        transitEur += eur;
      } else if (item.category === 'Flight') {
        flightEur += eur;
      } else if (item.category === 'Ticket') {
        ticketEur += eur;
      }

      if (item.phase === 'italy') {
        italyEur += eur;
      } else if (item.phase === 'croatia') {
        croatiaEur += eur;
        croatiaUsd += usd;
      }

      const sharerCount = item.splitMembers.length;
      if (sharerCount > 0) {
        const shareEur = eur / sharerCount;
        const shareUsd = usd / sharerCount;

        item.splitMembers.forEach(m => {
          if (memberBreakdown[m]) {
            memberBreakdown[m].totalEur += shareEur;
            memberBreakdown[m].totalUsd += shareUsd;
            if (item.phase === 'italy') memberBreakdown[m].italyEur += shareEur;
            if (item.phase === 'croatia') {
              memberBreakdown[m].croatiaEur += shareEur;
              memberBreakdown[m].croatiaUsd += shareUsd;
            }
            if (item.category === 'Flight') memberBreakdown[m].flightEur += shareEur;
            if (item.category === 'Ticket') memberBreakdown[m].ticketEur += shareEur;

            memberBreakdown[m].items.push({
              title: item.title,
              shareAmount: item.currency === 'USD' ? shareUsd : shareEur,
              currency: item.currency,
              phase: item.phase,
              category: item.category
            });
          }
        });
      }
    });

    const transportTicketsTotalEur = transitEur + flightEur + ticketEur;
    const grandTotalEur = stayEur + transportTicketsTotalEur;
    const grandTotalUsd = stayUsd;
    const referenceTwd = Math.round(grandTotalEur * EUR_TO_TWD + grandTotalUsd * USD_TO_TWD);

    return {
      grandTotalEur,
      grandTotalUsd,
      referenceTwd,
      stayEur,
      stayUsd,
      transitEur,
      flightEur,
      ticketEur,
      transportTicketsTotalEur,
      italyEur,
      croatiaEur,
      croatiaUsd,
      memberBreakdown
    };
  }, []);

  // Form submit handler
  const handleAddTransaction = async (e: React.FormEvent) => {
    e.preventDefault();
    const sanitizedAmount = cleanAmountInput(amount);
    if (!sanitizedAmount || isNaN(Number(sanitizedAmount)) || Number(sanitizedAmount) <= 0) {
      alert('請輸入有效的金額');
      return;
    }
    if (splitWith.length === 0) {
      alert('請至少選擇一位分攤人');
      return;
    }

    setIsSubmitting(true);
    setErrorMessage(null);

    const payload = {
      amount: Number(sanitizedAmount),
      type,
      category,
      description: description.trim() || category,
      date,
      addedBy: auth.currentUser?.email || 'Anonymous',
      payer,
      splitWith,
      createdAt: new Date().toISOString(),
    };

    try {
      await addDoc(collection(db, 'transactions'), payload);
      setAmount('');
      setDescription('');
      setSuccessMessage('成功新增一筆帳目！');
      setTimeout(() => setSuccessMessage(null), 3000);
    } catch (error) {
      handleFirestoreError(error, OperationType.CREATE, 'transactions');
      setErrorMessage('儲存失敗，請重試');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Import single planned item
  const handleImportSinglePlanned = async (item: PlannedBudgetItem) => {
    setErrorMessage(null);
    const amountVal = item.currency === 'USD' ? Number((item.rawAmount * (USD_TO_TWD / EUR_TO_TWD)).toFixed(2)) : item.rawAmount;
    const desc = item.currency === 'USD' ? `${item.title} (原幣 US$${item.rawAmount})` : item.title;

    try {
      await addDoc(collection(db, 'transactions'), {
        amount: amountVal,
        type: 'expense',
        category: item.category,
        description: desc,
        date: new Date().toISOString().split('T')[0],
        addedBy: 'Planned Import',
        payer: item.payerDefault,
        splitWith: item.splitMembers,
        createdAt: new Date().toISOString(),
      });
      setSuccessMessage(`已將「${item.title}」加入共同帳本！`);
      setTimeout(() => setSuccessMessage(null), 3000);
    } catch (error) {
      handleFirestoreError(error, OperationType.CREATE, 'transactions');
      setErrorMessage('匯入失敗');
    }
  };

  // Import all planned items
  const handleImportAllPlanned = async () => {
    if (isImporting) return;
    setIsImporting(true);
    setErrorMessage(null);

    try {
      for (const item of PLANNED_BUDGET_ITEMS) {
        const amountVal = item.currency === 'USD' ? Number((item.rawAmount * (USD_TO_TWD / EUR_TO_TWD)).toFixed(2)) : item.rawAmount;
        const desc = item.currency === 'USD' ? `${item.title} (原幣 US$${item.rawAmount})` : item.title;

        await addDoc(collection(db, 'transactions'), {
          amount: amountVal,
          type: 'expense',
          category: item.category,
          description: desc,
          date: new Date().toISOString().split('T')[0],
          addedBy: 'Planned Batch Import',
          payer: item.payerDefault,
          splitWith: item.splitMembers,
          createdAt: new Date().toISOString(),
        });
      }
      setSuccessMessage('🎉 已成功匯入全部行程固定預訂費用至記帳本！');
      setActiveTab('ledger');
      setTimeout(() => setSuccessMessage(null), 4000);
    } catch (error) {
      handleFirestoreError(error, OperationType.CREATE, 'transactions');
      setErrorMessage('批次匯入失敗');
    } finally {
      setIsImporting(false);
    }
  };

  // Delete transaction
  const handleDeleteTransaction = async (id: string) => {
    try {
      await deleteDoc(doc(db, 'transactions', id));
      setSuccessMessage('已刪除此筆帳目記錄');
      setTimeout(() => setSuccessMessage(null), 2500);
    } catch (error) {
      handleFirestoreError(error, OperationType.DELETE, `transactions/${id}`);
      setErrorMessage('刪除失敗');
    }
  };

  // Clear all transactions
  const handleClearAllTransactions = async () => {
    setIsClearing(true);
    setErrorMessage(null);
    try {
      const deletePromises = transactions.map((t) => deleteDoc(doc(db, 'transactions', t.id)));
      await Promise.all(deletePromises);
      setSuccessMessage('已清空所有帳本記錄');
      setTimeout(() => setSuccessMessage(null), 3000);
    } catch (error) {
      handleFirestoreError(error, OperationType.DELETE, 'transactions');
      setErrorMessage('清空失敗');
    } finally {
      setIsClearing(false);
    }
  };

  // Start edit
  const startEdit = (t: Transaction) => {
    setEditingId(t.id);
    setEditAmount(t.amount.toString());
    setEditType(t.type);
    setEditCategory(t.category);
    setEditDescription(t.description);
    setEditDate(t.date);
    setEditPayer(t.payer);
    setEditSplitWith(t.splitWith);
  };

  const cancelEdit = () => {
    setEditingId(null);
  };

  // Update transaction
  const handleUpdateTransaction = async (id: string) => {
    const sanitizedAmount = cleanAmountInput(editAmount);
    if (!sanitizedAmount || isNaN(Number(sanitizedAmount)) || Number(sanitizedAmount) <= 0) {
      alert('請輸入有效的金額');
      return;
    }
    if (editSplitWith.length === 0) {
      alert('請至少選擇一位分攤人');
      return;
    }

    try {
      await updateDoc(doc(db, 'transactions', id), {
        amount: Number(sanitizedAmount),
        type: editType,
        category: editCategory,
        description: editDescription.trim() || editCategory,
        date: editDate,
        payer: editPayer,
        splitWith: editSplitWith,
      });
      setEditingId(null);
      setSuccessMessage('已更新帳目');
      setTimeout(() => setSuccessMessage(null), 2000);
    } catch (error) {
      handleFirestoreError(error, OperationType.UPDATE, `transactions/${id}`);
      setErrorMessage('更新失敗');
    }
  };

  // Toggle split member in form
  const handleSplitToggle = (member: string, isEditingForm = false) => {
    if (isEditingForm) {
      setEditSplitWith(prev => 
        prev.includes(member) 
          ? prev.filter(m => m !== member)
          : [...prev, member]
      );
    } else {
      setSplitWith(prev => 
        prev.includes(member) 
          ? prev.filter(m => m !== member)
          : [...prev, member]
      );
    }
  };

  // Ledger calculation
  const totalExpenses = useMemo(() => {
    return transactions
      .filter(t => t.type === 'expense')
      .reduce((acc, t) => acc + t.amount, 0);
  }, [transactions]);

  // Member balance calculation
  const { memberPaid, memberShouldPay, memberBalances } = useMemo(() => {
    const paid: Record<string, number> = {};
    const shouldPay: Record<string, number> = {};
    const balances: Record<string, number> = {};

    ALL_MEMBERS.forEach(m => {
      paid[m] = 0;
      shouldPay[m] = 0;
      balances[m] = 0;
    });

    transactions.forEach(t => {
      if (t.type === 'expense') {
        paid[t.payer] = (paid[t.payer] || 0) + t.amount;

        const count = t.splitWith.length;
        if (count > 0) {
          const share = t.amount / count;
          t.splitWith.forEach(m => {
            shouldPay[m] = (shouldPay[m] || 0) + share;
          });
        }
      }
    });

    ALL_MEMBERS.forEach(m => {
      balances[m] = paid[m] - shouldPay[m];
    });

    return { memberPaid: paid, memberShouldPay: shouldPay, memberBalances: balances };
  }, [transactions]);

  // Smart Debt Matchmaker
  const calculateSettlements = () => {
    const balances = { ...memberBalances };
    const settlements: { from: string; to: string; amount: number }[] = [];

    let creditors = ALL_MEMBERS.filter(m => balances[m] > 0.01).sort((a, b) => balances[b] - balances[a]);
    let debtors = ALL_MEMBERS.filter(m => balances[m] < -0.01).sort((a, b) => balances[a] - balances[b]);

    while (creditors.length > 0 && debtors.length > 0) {
      const creditor = creditors[0];
      const debtor = debtors[0];

      const settleAmount = Math.min(balances[creditor], -balances[debtor]);

      if (settleAmount > 0.01) {
        settlements.push({
          from: debtor,
          to: creditor,
          amount: Number(settleAmount.toFixed(2))
        });
      }

      balances[debtor] += settleAmount;
      balances[creditor] -= settleAmount;

      creditors = ALL_MEMBERS.filter(m => balances[m] > 0.01).sort((a, b) => balances[b] - balances[a]);
      debtors = ALL_MEMBERS.filter(m => balances[m] < -0.01).sort((a, b) => balances[a] - balances[b]);
    }

    return settlements;
  };

  const settlements = calculateSettlements();

  return (
    <div className="mt-20 px-4 pb-44 max-w-4xl mx-auto space-y-6">
      {/* Top Navigation & Actions */}
      <div className="flex items-center justify-between">
        <div>
          <span className="text-primary font-black text-xs uppercase tracking-widest block font-mono">
            BUDGET & EXPENSES
          </span>
          <h1 className="text-2xl sm:text-3xl font-black text-on-surface tracking-tight">
            旅費總覽與分攤試算
          </h1>
        </div>
        
        {/* Currency Switcher & Home Button */}
        <div className="flex items-center gap-2">
          <div className="bg-surface-container-high p-1 rounded-xl flex items-center border border-outline-variant/15 text-xs font-bold font-mono">
            <button
              onClick={() => setCurrency('EUR')}
              className={cn(
                "px-2.5 py-1 rounded-lg transition-all",
                currency === 'EUR' ? "bg-primary text-white shadow-xs" : "text-on-surface-variant hover:text-on-surface"
              )}
            >
              € EUR / USD (原幣)
            </button>
            <button
              onClick={() => setCurrency('TWD')}
              className={cn(
                "px-2.5 py-1 rounded-lg transition-all",
                currency === 'TWD' ? "bg-primary text-white shadow-xs" : "text-on-surface-variant hover:text-on-surface"
              )}
            >
              NT$ 台幣
            </button>
          </div>

          <button 
            onClick={() => navigate('/')}
            className="p-2.5 rounded-2xl bg-surface-container-lowest border border-outline-variant/10 shadow-xs hover:bg-surface-container-low transition-colors"
            title="回首頁"
          >
            <ChevronLeft size={18} className="text-on-surface" />
          </button>
        </div>
      </div>

      {/* Segmented Rules Notice */}
      <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-secondary/10 p-4 rounded-2xl border border-primary/20 space-y-2">
        <div className="flex items-center justify-between">
          <span className="text-xs font-black text-primary flex items-center gap-1.5 font-mono">
            <ShieldCheck size={16} /> 核心拆帳原則（分段人數配置）
          </span>
          <span className="text-[11px] text-on-surface-variant font-mono">
            匯率參考 1 EUR ≈ {EUR_TO_TWD} TWD · 1 USD ≈ {USD_TO_TWD} TWD
          </span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
          <div className="bg-white/80 dark:bg-surface-container/60 p-2.5 rounded-xl border border-primary/15">
            <span className="font-black text-amber-900 bg-amber-100 px-2 py-0.5 rounded-md text-[11px] mr-1.5">
              🇮🇹 義大利段
            </span>
            <strong className="text-on-surface">3 人均攤</strong>
            <p className="text-on-surface-variant text-[11px] mt-0.5">
              成員：<strong>春香、麗安、小許</strong>（09/28 - 10/06 住宿、租車與接駁）
            </p>
          </div>
          <div className="bg-white/80 dark:bg-surface-container/60 p-2.5 rounded-xl border border-primary/15">
            <span className="font-black text-emerald-900 bg-emerald-100 px-2 py-0.5 rounded-md text-[11px] mr-1.5">
              🇭🇷 克羅埃西亞及後續
            </span>
            <strong className="text-on-surface">5 人全員均攤</strong>
            <p className="text-on-surface-variant text-[11px] mt-0.5">
              成員：<strong>小許、春香、麗安、頭家娘、小花</strong>（10/06起住宿、租車與航班）
            </p>
          </div>
        </div>
      </div>

      {/* Main Feature Tabs */}
      <div className="grid grid-cols-3 border-b border-outline-variant/15">
        <button
          onClick={() => setActiveTab('planned')}
          className={cn(
            "py-2.5 sm:py-3 text-[14px] sm:text-sm font-bold flex items-center justify-center gap-1 sm:gap-1.5 border-b-2 transition-all whitespace-nowrap",
            activeTab === 'planned'
              ? "border-primary text-primary font-black"
              : "border-transparent text-on-surface-variant hover:text-on-surface"
          )}
        >
          <PieChart size={15} className="shrink-0" />
          <span className="sm:hidden">固定旅費</span>
          <span className="hidden sm:inline">三大固定旅費試算</span>
        </button>
        <button
          onClick={() => setActiveTab('ledger')}
          className={cn(
            "py-2.5 sm:py-3 text-[14px] sm:text-sm font-bold flex items-center justify-center gap-1 sm:gap-1.5 border-b-2 transition-all whitespace-nowrap",
            activeTab === 'ledger'
              ? "border-primary text-primary font-black"
              : "border-transparent text-on-surface-variant hover:text-on-surface"
          )}
        >
          <Wallet size={15} className="shrink-0" />
          <span className="sm:hidden">共同記帳 ({transactions.length})</span>
          <span className="hidden sm:inline">即時共同記帳 ({transactions.length})</span>
        </button>
        <button
          onClick={() => setActiveTab('settlement')}
          className={cn(
            "py-2.5 sm:py-3 text-[14px] sm:text-sm font-bold flex items-center justify-center gap-1 sm:gap-1.5 border-b-2 transition-all whitespace-nowrap",
            activeTab === 'settlement'
              ? "border-primary text-primary font-black"
              : "border-transparent text-on-surface-variant hover:text-on-surface"
          )}
        >
          <Users size={15} className="shrink-0" />
          <span className="sm:hidden">代墊結算</span>
          <span className="hidden sm:inline">代墊平帳與結算</span>
        </button>
      </div>

      {/* Alerts */}
      {errorMessage && (
        <div className="bg-red-50 text-red-900 p-4 rounded-xl border border-red-200 flex gap-2.5 items-start">
          <AlertCircle className="shrink-0 mt-0.5 text-red-600" size={18} />
          <div className="text-xs font-medium">{errorMessage}</div>
        </div>
      )}
      {successMessage && (
        <div className="bg-emerald-50 text-emerald-900 p-4 rounded-xl border border-emerald-200 flex gap-2.5 items-start">
          <CheckCircle2 className="shrink-0 mt-0.5 text-emerald-600" size={18} />
          <div className="text-xs font-bold">{successMessage}</div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* TAB 1: PLANNED FIXED BUDGET (ACCOMMODATION + TRANSPORT + FLIGHTS + TICKETS) */}
      {/* ========================================================================= */}
      {activeTab === 'planned' && (
        <div className="space-y-6">
          {/* ★ 手冊總預算 17,501.51 歐元對照專區 (包含 112 人天每日預算 5,040 歐元) */}
          <div className="bg-gradient-to-br from-amber-50 via-surface-container-lowest to-blue-50 dark:from-amber-950/20 dark:via-surface-container-lowest dark:to-blue-950/20 rounded-2xl sm:rounded-3xl p-4 sm:p-5 border border-amber-300/60 dark:border-amber-700/40 shadow-xs space-y-4">
            <div className="flex items-center justify-between flex-wrap gap-2.5">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-1 rounded-lg bg-amber-600 text-white font-black text-xs font-mono shadow-xs">
                  官方手冊對照
                </span>
                <div>
                  <h3 className="font-black text-base sm:text-lg text-on-surface leading-snug">
                    手冊總預算 17,501.51 歐元對照
                  </h3>
                  <p className="text-[11px] text-slate-500 font-medium">
                    含固定已購支出 €12,461.51 ＋ 112 人天每日預算 €5,040.00
                  </p>
                </div>
              </div>
              <div className="text-right">
                <div className="text-2xl sm:text-3xl font-black text-amber-700 dark:text-amber-400 font-mono leading-none">
                  €17,501.51
                </div>
                <div className="text-[11px] text-slate-500 font-mono font-bold mt-1">
                  手冊基準約 NT$ 637,029 (@ 36.3985)
                </div>
              </div>
            </div>

            {/* 核心架構三欄卡片 */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-1">
              {/* ① 住宿逐筆 */}
              <div className="p-3.5 rounded-xl bg-white dark:bg-surface-container-low border border-teal-200 dark:border-teal-900/50 space-y-1">
                <div className="text-[11px] font-bold text-teal-800 dark:text-teal-300 flex items-center justify-between">
                  <span>🏨 住宿 (12 處)</span>
                  <span className="font-mono text-[10px] bg-teal-50 dark:bg-teal-950 px-1.5 py-0.5 rounded text-teal-700">25 晚</span>
                </div>
                <div className="text-lg font-black font-mono text-on-surface">
                  €8,659.44
                </div>
                <div className="text-[10px] text-slate-500 leading-tight">
                  義大利 3人 €2,897.64 ＋ 克國 5人 €5,761.80
                </div>
              </div>

              {/* ② 租車交通門票 */}
              <div className="p-3.5 rounded-xl bg-white dark:bg-surface-container-low border border-blue-200 dark:border-blue-900/50 space-y-1">
                <div className="text-[11px] font-bold text-blue-800 dark:text-blue-300 flex items-center justify-between">
                  <span>🚗 交通/航班/門票 (7 筆)</span>
                  <span className="font-mono text-[10px] bg-blue-50 dark:bg-blue-950 px-1.5 py-0.5 rounded text-blue-700">Table II</span>
                </div>
                <div className="text-lg font-black font-mono text-on-surface">
                  €3,802.07
                </div>
                <div className="text-[10px] text-slate-500 leading-tight">
                  租車 3段 + FlixBus + 瑞安機票 €659.15 + 門票 €265
                </div>
              </div>

              {/* ③ 每日預算 */}
              <div className="p-3.5 rounded-xl bg-white dark:bg-surface-container-low border border-amber-200 dark:border-amber-900/50 space-y-1">
                <div className="text-[11px] font-bold text-amber-800 dark:text-amber-300 flex items-center justify-between">
                  <span>🍽️ 每日預算 (112 人天)</span>
                  <span className="font-mono text-[10px] bg-amber-50 dark:bg-amber-950 px-1.5 py-0.5 rounded text-amber-700">€45 /人天</span>
                </div>
                <div className="text-lg font-black font-mono text-on-surface">
                  €5,040.00
                </div>
                <div className="text-[10px] text-slate-500 leading-tight">
                  餐費 (112人天×€30=€3,360) ＋ 雜支 (€15=€1,680)
                </div>
              </div>
            </div>

            {/* 人天計算公式詳細展開 */}
            <div className="text-xs bg-surface-container-lowest/80 dark:bg-surface-container-low/40 p-3 rounded-xl border border-outline-variant/10 space-y-1.5 text-slate-600 dark:text-slate-300">
              <div className="font-mono text-[11px] flex flex-wrap items-center gap-x-2">
                <span className="font-bold text-slate-800 dark:text-slate-100">📌 112 人天計算方式：</span>
                <span>義大利段 (3人 × 9天 = 27人天) ＋ 克羅埃西亞段 (5人 × 17天 = 85人天) ＝ <strong>112 人天</strong></span>
              </div>
              <div className="font-mono text-[11px] flex flex-wrap items-center gap-x-2">
                <span className="font-bold text-slate-800 dark:text-slate-100">💰 總額核算算式：</span>
                <span>固定已購支出 <strong>€12,461.51</strong>（住宿 €8,659.44 ＋ 交通門票 €3,802.07）＋ 每日公積預算 <strong>€5,040.00</strong> ＝ <strong className="text-primary font-black">€17,501.51</strong></span>
              </div>
              <div className="text-[10px] text-slate-400 pt-0.5">
                * 每日預算（餐費與雜支）可在旅途中隨時透過下方「即時記帳」登記實際支出，由公積金或刷卡代墊自動分攤核銷。
              </div>
            </div>
          </div>

          {/* ① 頂部固定支出卡片 */}
          <div className="bg-surface-container-lowest rounded-2xl sm:rounded-3xl p-4 sm:p-5 border border-outline-variant/15 shadow-xs space-y-4">
            <div className="space-y-1">
              <span className="text-[12px] sm:text-xs font-bold text-slate-500 uppercase tracking-wider block font-mono">
                行程預估固定總支出 (住宿 ＋ 交通 ＋ 航班 ＋ 門票)
              </span>
              <div className="text-[24px] sm:text-3xl font-black text-on-surface tracking-tight font-mono leading-tight pt-0.5">
                {formatDualMoney(plannedStats.grandTotalEur, plannedStats.grandTotalUsd)}
              </div>
              <div className="text-xs text-slate-500 font-medium pt-1 flex flex-wrap items-center gap-2">
                <span>12 處住宿 · 25 晚 · 3 趟租車 · 跨國巴士 · 瑞安航空 · 十六湖與杜城門票</span>
                <span className="text-slate-300">|</span>
                <span className="text-primary font-bold font-mono">參考折合 NT$ {plannedStats.referenceTwd.toLocaleString()}</span>
              </div>
            </div>

            <div>
              <button
                onClick={handleImportAllPlanned}
                disabled={isImporting}
                className="flex items-center justify-center gap-1.5 w-full sm:w-auto px-4 py-2.5 rounded-xl bg-primary text-white text-xs font-bold hover:bg-primary/95 shadow-sm active:scale-95 transition-all cursor-pointer whitespace-nowrap"
              >
                <Download size={14} />
                <span>{isImporting ? '匯入中...' : '一鍵匯入全行程至記帳本'}</span>
              </button>
            </div>

            {/* ② 住宿／交通／航班／門票摘要：淡色背景＋深色文字＋分類色標題 (嚴格符合 CSS 規則) */}
            <div className="space-y-2.5 pt-2 border-t border-outline-variant/10">
              {/* 🏨 住宿 */}
              <div 
                className="grid grid-cols-[1fr_auto] items-center gap-3 p-3.5 rounded-xl"
                style={{
                  backgroundColor: '#E8F7F3',
                  border: '1px solid #A8DDD3',
                }}
              >
                <div className="min-w-0">
                  <div className="flex items-center gap-1.5" style={{ color: '#087F73' }}>
                    <span className="text-base">🏨</span>
                    <span className="text-sm font-extrabold">住宿 (12 處)</span>
                  </div>
                  <div className="text-[11px] font-medium pl-6 mt-0.5" style={{ color: '#536273' }}>
                    12 處住宿 · 25 晚 (含多洛米蒂、盧比安納、十六湖、杜城等)
                  </div>
                </div>
                <div className="text-right">
                  <div 
                    className="text-base sm:text-lg font-extrabold font-mono whitespace-nowrap"
                    style={{ color: '#17212B', opacity: 1 }}
                  >
                    {formatDualMoney(plannedStats.stayEur, plannedStats.stayUsd)}
                  </div>
                </div>
              </div>

              {/* 🚗 交通 */}
              <div 
                className="grid grid-cols-[1fr_auto] items-center gap-3 p-3.5 rounded-xl"
                style={{
                  backgroundColor: '#EDF4FC',
                  border: '1px solid #BED3EA',
                }}
              >
                <div className="min-w-0">
                  <div className="flex items-center gap-1.5" style={{ color: '#17699A' }}>
                    <span className="text-base">🚗</span>
                    <span className="text-sm font-extrabold">交通租車 (4 筆)</span>
                  </div>
                  <div className="text-[11px] font-medium pl-6 mt-0.5" style={{ color: '#536273' }}>
                    Hertz義大利(€883.37) + FlixBus(€62.13) + UNI RENT(€1,596) + Hertz米蘭(€336.42)
                  </div>
                </div>
                <div className="text-right">
                  <div 
                    className="text-base sm:text-lg font-extrabold font-mono whitespace-nowrap"
                    style={{ color: '#17212B', opacity: 1 }}
                  >
                    {formatMoney(plannedStats.transitEur)}
                  </div>
                </div>
              </div>

              {/* ✈️ 跨國航班 */}
              <div 
                className="grid grid-cols-[1fr_auto] items-center gap-3 p-3.5 rounded-xl"
                style={{
                  backgroundColor: '#F3F0FB',
                  border: '1px solid #D2C8E9',
                }}
              >
                <div className="min-w-0">
                  <div className="flex items-center gap-1.5" style={{ color: '#5D55A5' }}>
                    <span className="text-base">✈️</span>
                    <span className="text-sm font-extrabold">跨國航班 (1 筆)</span>
                  </div>
                  <div className="text-[11px] font-medium pl-6 mt-0.5" style={{ color: '#536273' }}>
                    Ryanair FR5935 · DBV ➜ BGY (5人全含 20kg 托運行李)
                  </div>
                </div>
                <div className="text-right">
                  <div 
                    className="text-base sm:text-lg font-extrabold font-mono whitespace-nowrap"
                    style={{ color: '#17212B', opacity: 1 }}
                  >
                    {formatMoney(plannedStats.flightEur)}
                  </div>
                </div>
              </div>

              {/* 🎫 門票票券 */}
              <div 
                className="grid grid-cols-[1fr_auto] items-center gap-3 p-3.5 rounded-xl"
                style={{
                  backgroundColor: '#FAF5FF',
                  border: '1px solid #E9D5FF',
                }}
              >
                <div className="min-w-0">
                  <div className="flex items-center gap-1.5" style={{ color: '#7E22CE' }}>
                    <span className="text-base">🎫</span>
                    <span className="text-sm font-extrabold">門票票券 (2 筆)</span>
                  </div>
                  <div className="text-[11px] font-medium pl-6 mt-0.5" style={{ color: '#536273' }}>
                    十六湖國家公園 Entrance 2 (€115/5人) ＋ 杜布羅夫尼克三日卡 (€150/3人)
                  </div>
                </div>
                <div className="text-right">
                  <div 
                    className="text-base sm:text-lg font-extrabold font-mono whitespace-nowrap"
                    style={{ color: '#17212B', opacity: 1 }}
                  >
                    {formatMoney(plannedStats.ticketEur)}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ③ 每人分攤標題 */}
          <div className="space-y-3 pt-1">
            <div className="space-y-0.5">
              <h2 className="text-2xl font-black text-on-surface tracking-tight">
                每人分攤
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 font-medium">
                義大利 3 人分攤 · 克國 5 人分攤
              </p>
              <div className="flex items-center gap-1 text-[11px] text-slate-400 font-medium pt-0.5">
                <Info size={12} className="shrink-0 text-slate-400" />
                <span>點擊成員查看費用明細</span>
              </div>
            </div>

            {/* ④ & ⑤ & ⑥ 成員卡片 (上下分層結構，徹底解決手機版擠壓與直排跑版) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {ALL_MEMBERS.map(m => {
                const data = plannedStats.memberBreakdown[m];
                const isExpanded = expandedMember === m;
                const isItalyGroup = ITALY_3_MEMBERS.includes(m);

                return (
                  <div 
                    key={m}
                    className="w-full min-w-0 bg-surface-container-lowest rounded-2xl border border-outline-variant/15 p-4 sm:p-5 shadow-xs hover:border-primary/40 transition-all select-none"
                  >
                    {/* 卡片頂部可點擊區域 */}
                    <div 
                      className="cursor-pointer"
                      onClick={() => setExpandedMember(isExpanded ? null : m)}
                    >
                      {/* 【第一列】姓名 ＋ 展開箭頭 */}
                      <div className="flex items-center justify-between w-full">
                        <h3 
                          className="font-bold text-2xl text-on-surface whitespace-nowrap"
                          style={{ wordBreak: 'keep-all', whiteSpace: 'nowrap' }}
                        >
                          {m}
                        </h3>
                        <div className="text-slate-400 p-1 flex items-center justify-center shrink-0">
                          {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                        </div>
                      </div>

                      {/* 【第二列】分攤說明 */}
                      <div 
                        className="block w-full text-[15px] leading-relaxed text-slate-500 font-medium mt-1.5"
                        style={{ wordBreak: 'keep-all', overflowWrap: 'normal', whiteSpace: 'normal' }}
                      >
                        {isItalyGroup ? '義大利＋克國' : '克國'} · {data.items.length}筆費用
                      </div>

                      {/* 【第三列】金額 */}
                      <div className="block w-full mt-4">
                        <div 
                          className="text-2xl font-bold text-primary font-mono tracking-tight leading-snug flex flex-wrap items-baseline gap-x-1.5"
                          style={{ wordBreak: 'keep-all' }}
                        >
                          {currency === 'TWD' ? (
                            <span>{formatDualMoney(data.totalEur, data.totalUsd)}</span>
                          ) : data.totalUsd > 0 && data.totalEur > 0 ? (
                            <>
                              <span className="whitespace-nowrap">€{data.totalEur.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                              <span className="text-primary/75 font-semibold text-lg">+</span>
                              <span className="whitespace-nowrap">US${data.totalUsd.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                            </>
                          ) : data.totalUsd > 0 ? (
                            <span className="whitespace-nowrap">US${data.totalUsd.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                          ) : (
                            <span className="whitespace-nowrap">€{data.totalEur.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* 點擊展開後顯示計算分段與明細清單 */}
                    {isExpanded && (
                      <div 
                        className="space-y-3 pt-3.5 mt-3.5 border-t border-outline-variant/10 cursor-default animate-in fade-in"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                          {isItalyGroup ? (
                            <>
                              <div className="bg-amber-50/60 dark:bg-amber-950/20 p-2.5 rounded-xl border border-amber-200/50">
                                <span className="text-amber-900 dark:text-amber-300 font-bold block text-[11px]">🇮🇹 義大利段 (3人)</span>
                                <strong className="text-on-surface font-black text-sm block mt-0.5">{formatMoney(data.italyEur)}</strong>
                              </div>
                              <div className="bg-emerald-50/60 dark:bg-emerald-950/20 p-2.5 rounded-xl border border-emerald-200/50">
                                <span className="text-emerald-900 dark:text-emerald-300 font-bold block text-[11px]">🇭🇷 克國段 (5人)</span>
                                <strong className="text-on-surface font-black text-sm block mt-0.5">{formatDualMoney(data.croatiaEur, data.croatiaUsd)}</strong>
                              </div>
                            </>
                          ) : (
                            <div className="col-span-2 bg-emerald-50/60 dark:bg-emerald-950/20 p-2.5 rounded-xl border border-emerald-200/50">
                              <span className="text-emerald-900 dark:text-emerald-300 font-bold block text-[11px]">🇭🇷 克國段＋航班 (5人)</span>
                              <strong className="text-on-surface font-black text-sm block mt-0.5">{formatDualMoney(data.totalEur, data.totalUsd)}</strong>
                            </div>
                          )}
                        </div>

                        <div className="pt-2 border-t border-outline-variant/10">
                          <div className="text-xs font-bold text-slate-600 mb-2">
                            應分攤項目：{data.items.length} 筆
                          </div>

                          <div className="space-y-1.5 max-h-60 overflow-y-auto pr-1">
                            {data.items.map((it, idx) => (
                              <div key={idx} className="flex items-center justify-between py-1.5 px-2 rounded-lg bg-surface-container-low/60 text-xs">
                                <span className="text-on-surface truncate pr-2 font-medium">{it.title}</span>
                                <span className="font-mono font-bold text-primary shrink-0 whitespace-nowrap">
                                  {it.currency === 'USD' ? `US$${it.shareAmount.toFixed(2)}` : `€${it.shareAmount.toFixed(2)}`}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* ⑧ & ⑦ 義大利自駕段 (3 人分攤) */}
          <div className="space-y-3 pt-2">
            {/* 義大利段 Section Header */}
            <div className="bg-surface-container-low/60 rounded-2xl p-4 border border-outline-variant/10 space-y-1.5">
              <div className="flex items-center justify-between">
                <span className="text-sm font-black text-amber-900 bg-amber-100 px-2.5 py-1 rounded-lg border border-amber-300">
                  🇮🇹 義大利
                </span>
                <span className="text-xs font-bold text-slate-500 font-mono">09/28 – 10/06</span>
              </div>
              <div className="text-xs text-slate-600 font-medium pt-0.5 space-y-0.5">
                <div>3 人分攤</div>
                <div className="flex items-center gap-3 font-mono">
                  <span>小計 <strong>{formatMoney(plannedStats.italyEur)}</strong></span>
                  <span>·</span>
                  <span>每人 <strong>{formatMoney(plannedStats.italyEur / 3)}</strong></span>
                </div>
              </div>
            </div>

            {/* 義大利預訂費用項目清單 (Progressive Disclosure) */}
            <div className="space-y-2.5">
              {PLANNED_BUDGET_ITEMS.filter(item => item.phase === 'italy').map(item => {
                const isItemExpanded = !!expandedPlannedItems[item.id];
                const sharers = item.splitMembers.length;
                const shareAmount = item.rawAmount / sharers;

                return (
                  <div 
                    key={item.id}
                    className="bg-surface-container-lowest rounded-2xl p-4 border border-outline-variant/15 shadow-xs space-y-2.5 hover:border-primary/30 transition-all"
                  >
                    {/* 頂部標題與日期 */}
                    <div className="flex items-start justify-between gap-2">
                      <div className="min-w-0">
                        <div className="flex items-center gap-1.5">
                          <span className={cn(
                            "text-[10px] font-black px-2 py-0.5 rounded-md shrink-0",
                            item.category === 'Stay' ? "bg-teal-100 text-teal-800" : "bg-blue-100 text-blue-800"
                          )}>
                            {item.category === 'Stay' ? '🏨 住宿' : '🚗 交通'}
                          </span>
                          <h4 className="font-black text-sm text-on-surface truncate">{item.title}</h4>
                        </div>
                        <div className="text-[11px] text-slate-500 font-mono mt-1">
                          {item.datesText}
                        </div>
                      </div>
                    </div>

                    {/* 金額、分攤與記帳按鈕 */}
                    <div className="flex items-center justify-between pt-1 border-t border-outline-variant/10">
                      <div>
                        <div className="text-base sm:text-lg font-black text-on-surface font-mono leading-none">
                          {formatMoney(item.rawAmount)}
                        </div>
                        <div className="text-[11px] text-slate-500 font-medium mt-1">
                          義大利 3 人分攤 · <span className="text-primary font-bold font-mono">每人 {formatMoney(shareAmount)}</span>
                        </div>
                      </div>

                      <button
                        onClick={() => handleImportSinglePlanned(item)}
                        className="px-3 py-1.5 rounded-xl bg-surface-container hover:bg-primary hover:text-white text-on-surface text-xs font-bold border border-outline-variant/20 transition-all active:scale-95 shrink-0 cursor-pointer"
                        title="匯入此筆到共同記帳"
                      >
                        + 記帳
                      </button>
                    </div>

                    {/* 查看明細 Toggle */}
                    <div className="pt-1 border-t border-outline-variant/5">
                      <button
                        onClick={() => setExpandedPlannedItems(prev => ({ ...prev, [item.id]: !prev[item.id] }))}
                        className="text-[11px] font-bold text-slate-500 hover:text-primary flex items-center gap-1 cursor-pointer"
                      >
                        <span>{isItemExpanded ? '收起明細' : '查看明細'}</span>
                        {isItemExpanded ? <ChevronUp size={12} /> : <ChevronDown size={12} />}
                      </button>

                      {isItemExpanded && (
                        <div className="mt-2 p-2.5 rounded-xl bg-slate-50 dark:bg-surface-container/40 text-[11px] text-slate-600 dark:text-slate-300 space-y-1 animate-in fade-in">
                          <p className="font-medium text-slate-700 dark:text-slate-200">{item.notes}</p>
                          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-slate-500 font-mono pt-1">
                            <span>分攤名單: <strong>{item.splitMembers.join('、')}</strong></span>
                            <span>預設付款人: <strong>{item.payerDefault}</strong></span>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* ⑧ & ⑦ 2. Croatia Phase (5 people split) */}
          <div className="space-y-3 pt-2">
            {/* 克國段 Section Header */}
            <div className="bg-surface-container-low/60 rounded-2xl p-4 border border-outline-variant/10 space-y-1.5">
              <div className="flex items-center justify-between">
                <span className="text-sm font-black text-emerald-900 bg-emerald-100 px-2.5 py-1 rounded-lg border border-emerald-300">
                  🇭🇷 克羅埃西亞及後續
                </span>
                <span className="text-xs font-bold text-slate-500 font-mono">10/06 – 10/23</span>
              </div>
              <div className="text-xs text-slate-600 font-medium pt-0.5 space-y-0.5">
                <div>5 人分攤（含跨國航班與門票）</div>
                <div className="flex items-center gap-3 font-mono">
                  <span>小計 <strong>{formatDualMoney(plannedStats.croatiaEur, plannedStats.croatiaUsd)}</strong></span>
                  <span>·</span>
                  <span>每人 <strong>{formatDualMoney(plannedStats.croatiaEur / 5, plannedStats.croatiaUsd / 5)}</strong></span>
                </div>
              </div>
            </div>

            {/* 克國預訂費用項目清單 (Progressive Disclosure) */}
            <div className="space-y-2.5">
              {PLANNED_BUDGET_ITEMS.filter(item => item.phase === 'croatia' || item.phase === 'flight').map(item => {
                const isItemExpanded = !!expandedPlannedItems[item.id];
                const sharers = item.splitMembers.length;
                const shareAmount = item.rawAmount / sharers;

                return (
                  <div 
                    key={item.id}
                    className="bg-surface-container-lowest rounded-2xl p-4 border border-outline-variant/15 shadow-xs space-y-2.5 hover:border-primary/30 transition-all"
                  >
                    {/* 頂部標題與日期 */}
                    <div className="flex items-start justify-between gap-2">
                      <div className="min-w-0">
                        <div className="flex items-center gap-1.5">
                          <span className={cn(
                            "text-[10px] font-black px-2 py-0.5 rounded-md shrink-0",
                            item.category === 'Stay' ? "bg-teal-100 text-teal-800" :
                            item.category === 'Transit' ? "bg-blue-100 text-blue-800" :
                            item.category === 'Flight' ? "bg-indigo-100 text-indigo-800" : "bg-purple-100 text-purple-800"
                          )}>
                            {item.category === 'Stay' ? '🏨 住宿' : item.category === 'Transit' ? '🚗 交通' : item.category === 'Flight' ? '✈️ 航班' : '🎫 門票'}
                          </span>
                          <h4 className="font-black text-sm text-on-surface truncate">{item.title}</h4>
                        </div>
                        <div className="text-[11px] text-slate-500 font-mono mt-1">
                          {item.datesText}
                        </div>
                      </div>
                    </div>

                    {/* 金額、分攤與記帳按鈕 */}
                    <div className="flex items-center justify-between pt-1 border-t border-outline-variant/10">
                      <div>
                        <div className="text-base sm:text-lg font-black text-on-surface font-mono leading-none">
                          {item.currency === 'USD' ? `US$ ${item.rawAmount.toFixed(2)}` : formatMoney(item.rawAmount)}
                        </div>
                        <div className="text-[11px] text-slate-500 font-medium mt-1">
                          5 人分攤 · <span className="text-primary font-bold font-mono">每人 {item.currency === 'USD' ? `US$ ${shareAmount.toFixed(2)}` : formatMoney(shareAmount)}</span>
                        </div>
                      </div>

                      <button
                        onClick={() => handleImportSinglePlanned(item)}
                        className="px-3 py-1.5 rounded-xl bg-surface-container hover:bg-primary hover:text-white text-on-surface text-xs font-bold border border-outline-variant/20 transition-all active:scale-95 shrink-0 cursor-pointer"
                        title="匯入此筆到共同記帳"
                      >
                        + 記帳
                      </button>
                    </div>

                    {/* 查看明細 Toggle */}
                    <div className="pt-1 border-t border-outline-variant/5">
                      <button
                        onClick={() => setExpandedPlannedItems(prev => ({ ...prev, [item.id]: !prev[item.id] }))}
                        className="text-[11px] font-bold text-slate-500 hover:text-primary flex items-center gap-1 cursor-pointer"
                      >
                        <span>{isItemExpanded ? '收起明細' : '查看明細'}</span>
                        {isItemExpanded ? <ChevronUp size={12} /> : <ChevronDown size={12} />}
                      </button>

                      {isItemExpanded && (
                        <div className="mt-2 p-2.5 rounded-xl bg-slate-50 dark:bg-surface-container/40 text-[11px] text-slate-600 dark:text-slate-300 space-y-1 animate-in fade-in">
                          <p className="font-medium text-slate-700 dark:text-slate-200">{item.notes}</p>
                          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-slate-500 font-mono pt-1">
                            <span>分攤名單: <strong>全員 5 位</strong></span>
                            <span>預設付款人: <strong>{item.payerDefault}</strong></span>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* TAB 2: REALTIME LEDGER & TRANSACTIONS (FIRESTORE)                          */}
      {/* ========================================================================= */}
      {activeTab === 'ledger' && (
        <div className="space-y-6">
          {/* Dashboard Summary Statistics */}
          <div className="bg-surface-container-high rounded-2xl p-5 border border-outline-variant/15 flex justify-between items-center shadow-xs">
            <div>
              <span className="text-[11px] font-bold text-outline uppercase tracking-wider block font-mono">
                即時帳本總支出 (EUR)
              </span>
              <span className="text-3xl font-black text-on-surface mt-1 block font-mono">
                {formatMoney(totalExpenses)}
              </span>
              <p className="text-[11px] text-on-surface-variant mt-1 font-medium">
                已記錄 {transactions.length} 筆共同帳目
              </p>
            </div>
            <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
              <Wallet size={24} />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Column 1: Add Transaction (1 Span) */}
            <div className="lg:col-span-1 space-y-4">
              <div className="bg-surface-container-low rounded-2xl p-5 border border-outline-variant/10 space-y-4">
                <h3 className="font-black text-base text-on-surface flex items-center gap-2">
                  <Plus size={18} className="text-primary" />
                  新增共同花費
                </h3>

                <form onSubmit={handleAddTransaction} className="space-y-3.5 pt-1">
                  {/* Amount */}
                  <div className="space-y-1">
                    <label className="text-[11px] font-bold text-outline uppercase">金額 (€ 歐元)</label>
                    <div className="relative">
                      <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-on-surface-variant font-bold text-sm">€</span>
                      <input 
                        type="text" 
                        inputMode="decimal"
                        placeholder="0.00"
                        value={amount}
                        onChange={(e) => setAmount(cleanAmountInput(e.target.value))}
                        className="w-full bg-white border border-outline-variant/40 rounded-xl py-2.5 pl-8 pr-4 text-sm font-bold text-on-surface focus:outline-none focus:border-primary font-mono"
                        required
                      />
                    </div>
                  </div>

                  {/* Category selection */}
                  <div className="space-y-1">
                    <label className="text-[11px] font-bold text-outline uppercase">消費種類</label>
                    <select 
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                      className="w-full bg-white border border-outline-variant/40 rounded-xl py-2 px-3 text-xs font-bold text-on-surface focus:outline-none focus:border-primary"
                    >
                      {CATEGORIES.map((cat) => (
                        <option key={cat.value} value={cat.value}>{cat.label}</option>
                      ))}
                    </select>
                  </div>

                  {/* Payer selection */}
                  <div className="space-y-1">
                    <label className="text-[11px] font-bold text-outline uppercase">付款人 (代墊人)</label>
                    <select 
                      value={payer}
                      onChange={(e) => setPayer(e.target.value)}
                      className="w-full bg-white border border-outline-variant/40 rounded-xl py-2 px-3 text-xs font-bold text-on-surface focus:outline-none focus:border-primary"
                    >
                      {ALL_MEMBERS.map((m) => (
                        <option key={m} value={m}>{m}</option>
                      ))}
                    </select>
                  </div>

                  {/* Split With (Who shares) */}
                  <div className="space-y-1.5">
                    <div className="flex justify-between items-center">
                      <label className="text-[11px] font-bold text-outline uppercase">分攤成員</label>
                      <div className="flex gap-1.5">
                        <button 
                          type="button" 
                          onClick={() => setSplitWith(ITALY_3_MEMBERS)}
                          className="text-[10px] text-amber-800 bg-amber-50 px-2 py-0.5 rounded border border-amber-200 font-bold hover:bg-amber-100"
                        >
                          🇮🇹 義大利3人
                        </button>
                        <button 
                          type="button" 
                          onClick={() => setSplitWith(CROATIA_5_MEMBERS)}
                          className="text-[10px] text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 font-bold hover:bg-emerald-100"
                        >
                          🇭🇷 5人全員
                        </button>
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-1.5">
                      {ALL_MEMBERS.map((m) => {
                        const selected = splitWith.includes(m);
                        return (
                          <button
                            key={m}
                            type="button"
                            onClick={() => handleSplitToggle(m, false)}
                            className={cn(
                              "py-2 px-2 rounded-xl border text-xs font-bold transition-all flex items-center justify-center gap-1",
                              selected 
                                ? "bg-primary text-white border-primary shadow-2xs" 
                                : "bg-white text-on-surface-variant border-outline-variant/40 opacity-60 hover:bg-surface-container-high"
                            )}
                          >
                            {m}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Date */}
                  <div className="space-y-1">
                    <label className="text-[11px] font-bold text-outline uppercase">消費日期</label>
                    <input 
                      type="date" 
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      className="w-full bg-white border border-outline-variant/40 rounded-xl py-2 px-3 text-xs font-bold text-on-surface focus:outline-none focus:border-primary font-mono"
                      required
                    />
                  </div>

                  {/* Description */}
                  <div className="space-y-1">
                    <label className="text-[11px] font-bold text-outline uppercase">備註說明</label>
                    <input 
                      type="text" 
                      placeholder="例如：威尼斯貢多拉、超市買菜..."
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      className="w-full bg-white border border-outline-variant/40 rounded-xl py-2 px-3 text-xs text-on-surface focus:outline-none focus:border-primary"
                    />
                  </div>

                  {/* Submit button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary hover:bg-primary/95 text-white py-2.5 rounded-xl font-bold text-xs shadow-sm transition-all active:scale-98 disabled:opacity-50 flex items-center justify-center gap-2 mt-2"
                  >
                    <Plus size={16} />
                    {isSubmitting ? '儲存中...' : '確認新增共同帳目'}
                  </button>
                </form>
              </div>
            </div>

            {/* Column 2 & 3: History List (2 Spans) */}
            <div className="lg:col-span-2 space-y-4">
              <div className="flex justify-between items-center">
                <h3 className="font-black text-base text-on-surface flex items-center gap-2">
                  <Calendar size={18} className="text-primary" />
                  共同帳目明細 ({transactions.length} 筆)
                </h3>
                {transactions.length > 0 && (
                  <button
                    onClick={handleClearAllTransactions}
                    disabled={isClearing}
                    className="flex items-center gap-1.5 text-xs font-bold text-red-600 hover:text-white hover:bg-red-600 transition-all bg-red-50 px-3 py-1.5 rounded-xl border border-red-200 active:scale-95 disabled:opacity-50"
                  >
                    <Trash2 size={13} />
                    {isClearing ? '清除中...' : '清空帳本'}
                  </button>
                )}
              </div>

              {loading ? (
                <div className="bg-surface-container-low border border-outline-variant/10 rounded-2xl p-10 text-center text-xs text-on-surface-variant">
                  帳目數據加載中...
                </div>
              ) : transactions.length === 0 ? (
                <div className="bg-surface-container-lowest border border-outline-variant/15 rounded-3xl p-10 text-center space-y-3">
                  <p className="text-sm font-bold text-on-surface">目前暫無共同帳目記錄</p>
                  <p className="text-xs text-on-surface-variant max-w-sm mx-auto">
                    可從左側表單手動新增，或在「三大固定旅費試算」頁面一鍵匯入已確認的住宿與交通項目！
                  </p>
                  <button
                    onClick={handleImportAllPlanned}
                    className="mt-2 px-4 py-2 rounded-xl bg-primary text-white text-xs font-bold hover:bg-primary/95 shadow-sm inline-flex items-center gap-1.5"
                  >
                    <Download size={14} />
                    <span>立即匯入行程預訂費用</span>
                  </button>
                </div>
              ) : (
                <div className="space-y-2.5">
                  <AnimatePresence initial={false}>
                    {transactions.map((t) => {
                      const catConfig = CATEGORIES.find(c => c.value === t.category) || CATEGORIES[6];
                      const isEditing = editingId === t.id;

                      if (isEditing) {
                        return (
                          <motion.div 
                            key={t.id}
                            initial={{ opacity: 0, y: -8 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 8 }}
                            className="bg-surface-container-high rounded-2xl p-5 border border-primary/20 space-y-4 shadow-sm"
                          >
                            <div className="flex justify-between items-center">
                              <span className="text-xs font-black uppercase text-primary">修改帳目</span>
                              <button onClick={cancelEdit} className="text-on-surface-variant hover:text-on-surface"><X size={16} /></button>
                            </div>

                            <div className="grid grid-cols-2 gap-3">
                              <div className="space-y-1">
                                <label className="text-[10px] font-bold text-outline">金額 (€)</label>
                                <input 
                                  type="text" 
                                  inputMode="decimal"
                                  value={editAmount}
                                  onChange={(e) => setEditAmount(cleanAmountInput(e.target.value))}
                                  className="w-full bg-white border border-outline-variant/40 rounded-lg p-2 text-xs font-bold text-on-surface font-mono"
                                />
                              </div>

                              <div className="space-y-1">
                                <label className="text-[10px] font-bold text-outline">類別</label>
                                <select 
                                  value={editCategory}
                                  onChange={(e) => setEditCategory(e.target.value)}
                                  className="w-full bg-white border border-outline-variant/40 rounded-lg p-2 text-xs font-bold text-on-surface"
                                >
                                  {CATEGORIES.map(cat => (
                                    <option key={cat.value} value={cat.value}>{cat.label}</option>
                                  ))}
                                </select>
                              </div>
                            </div>

                            <div className="grid grid-cols-2 gap-3">
                              <div className="space-y-1">
                                <label className="text-[10px] font-bold text-outline">付款人</label>
                                <select 
                                  value={editPayer}
                                  onChange={(e) => setEditPayer(e.target.value)}
                                  className="w-full bg-white border border-outline-variant/40 rounded-lg p-2 text-xs font-bold text-on-surface"
                                >
                                  {ALL_MEMBERS.map(m => (
                                    <option key={m} value={m}>{m}</option>
                                  ))}
                                </select>
                              </div>

                              <div className="space-y-1">
                                <label className="text-[10px] font-bold text-outline">日期</label>
                                <input 
                                  type="date" 
                                  value={editDate}
                                  onChange={(e) => setEditDate(e.target.value)}
                                  className="w-full bg-white border border-outline-variant/40 rounded-lg p-2 text-xs text-on-surface font-mono"
                                />
                              </div>
                            </div>

                            {/* Edit Split With */}
                            <div className="space-y-1.5">
                              <label className="text-[10px] font-bold text-outline block">分攤成員</label>
                              <div className="flex flex-wrap gap-1.5">
                                {ALL_MEMBERS.map((m) => {
                                  const checked = editSplitWith.includes(m);
                                  return (
                                    <button
                                      key={m}
                                      type="button"
                                      onClick={() => handleSplitToggle(m, true)}
                                      className={cn(
                                        "px-2.5 py-1 rounded-lg border text-xs font-bold transition-all",
                                        checked 
                                          ? "bg-primary text-white border-primary" 
                                          : "bg-white text-on-surface-variant border-outline-variant/40 opacity-50"
                                      )}
                                    >
                                      {m}
                                    </button>
                                  );
                                })}
                              </div>
                            </div>

                            <div className="space-y-1">
                              <label className="text-[10px] font-bold text-outline">備註說明</label>
                              <input 
                                type="text" 
                                value={editDescription}
                                onChange={(e) => setEditDescription(e.target.value)}
                                className="w-full bg-white border border-outline-variant/40 rounded-lg p-2 text-xs text-on-surface"
                              />
                            </div>

                            <div className="flex justify-end gap-2 pt-2">
                              <button 
                                onClick={cancelEdit} 
                                className="bg-surface-container text-on-surface-variant px-3 py-1.5 rounded-lg text-xs font-bold hover:bg-surface-container-high transition-colors"
                              >
                                取消
                              </button>
                              <button 
                                onClick={() => handleUpdateTransaction(t.id)} 
                                className="bg-primary text-white px-3 py-1.5 rounded-lg text-xs font-bold hover:bg-primary/95 transition-colors flex items-center gap-1"
                              >
                                <Check size={14} />
                                儲存
                              </button>
                            </div>
                          </motion.div>
                        );
                      }

                      return (
                        <motion.div 
                          key={t.id}
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -8 }}
                          className="bg-surface-container-lowest rounded-2xl p-4 border border-outline-variant/15 flex items-center justify-between hover:border-primary/30 transition-colors shadow-xs"
                        >
                          <div className="flex items-center gap-3.5">
                            {/* Category badge */}
                            <div className={cn("w-10 h-10 rounded-xl flex items-center justify-center font-bold text-xs shrink-0 border", catConfig.color)}>
                              <catConfig.icon size={18} />
                            </div>
                            
                            {/* Info */}
                            <div className="space-y-0.5">
                              <div className="flex items-center gap-2">
                                <span className="font-black text-sm text-on-surface">{t.description || catConfig.label}</span>
                                <span className="text-[10px] text-on-surface-variant font-mono flex items-center gap-1 bg-surface-container px-2 py-0.5 rounded-md">
                                  <Calendar size={10} />
                                  {t.date}
                                </span>
                              </div>
                              <div className="flex items-center gap-2 text-[11px] text-on-surface-variant">
                                <span>付款：<strong className="text-on-surface">{t.payer}</strong></span>
                                <span>•</span>
                                <span>分攤：<strong className="text-on-surface">{t.splitWith.join('、')}</strong> ({t.splitWith.length}人)</span>
                              </div>
                            </div>
                          </div>

                          {/* Right Action buttons */}
                          <div className="flex items-center gap-3">
                            <div className="text-right">
                              <span className="text-base font-black text-on-surface font-mono">
                                {formatMoney(t.amount)}
                              </span>
                              {t.splitWith && t.splitWith.length > 0 && (
                                <p className="text-[10px] text-primary font-bold font-mono">
                                  每人 {formatMoney(t.amount / t.splitWith.length)}
                                </p>
                              )}
                            </div>

                            <div className="flex items-center gap-1 border-l border-outline-variant/10 pl-2">
                              <button 
                                onClick={() => startEdit(t)}
                                className="p-1.5 rounded-lg text-on-surface-variant hover:text-primary hover:bg-primary/5 transition-colors"
                                title="修改"
                              >
                                <Edit2 size={13} />
                              </button>
                              <button 
                                onClick={() => handleDeleteTransaction(t.id)}
                                className="p-1.5 rounded-lg text-on-surface-variant hover:text-red-600 hover:bg-red-50 transition-colors"
                                title="刪除"
                              >
                                <Trash2 size={13} />
                              </button>
                            </div>
                          </div>
                        </motion.div>
                      );
                    })}
                  </AnimatePresence>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* TAB 3: SETTLEMENT & DEBT RESOLUTION (BALANCES)                             */}
      {/* ========================================================================= */}
      {activeTab === 'settlement' && (
        <div className="space-y-6">
          {/* Member Balance Summary Cards */}
          <div className="space-y-3">
            <h3 className="font-black text-base text-on-surface flex items-center gap-2">
              <Users size={18} className="text-primary" />
              成員收支差額總覽（已付代墊 vs 應付分擔）
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {ALL_MEMBERS.map(m => {
                const paid = memberPaid[m] || 0;
                const shouldPay = memberShouldPay[m] || 0;
                const balance = memberBalances[m] || 0;
                const isCreditor = balance > 0.01;
                const isDebtor = balance < -0.01;

                return (
                  <div 
                    key={m}
                    className="bg-surface-container-lowest rounded-2xl border border-outline-variant/15 p-4 shadow-xs space-y-3"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-black text-base text-on-surface">{m}</span>
                      <span className={cn(
                        "text-[11px] font-black px-2.5 py-0.5 rounded-full border font-mono",
                        isCreditor 
                          ? "bg-emerald-50 text-emerald-800 border-emerald-200"
                          : isDebtor
                          ? "bg-red-50 text-red-800 border-red-200"
                          : "bg-gray-100 text-gray-700 border-gray-200"
                      )}>
                        {isCreditor ? `應收款 +${formatMoney(balance)}` : isDebtor ? `應補繳 ${formatMoney(balance)}` : '結清'}
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-2 text-xs font-mono pt-1">
                      <div className="bg-surface-container-low/60 p-2 rounded-xl">
                        <span className="text-on-surface-variant block text-[10px]">已代墊支付</span>
                        <strong className="text-on-surface font-black">{formatMoney(paid)}</strong>
                      </div>
                      <div className="bg-surface-container-low/60 p-2 rounded-xl">
                        <span className="text-on-surface-variant block text-[10px]">實際應分擔</span>
                        <strong className="text-on-surface font-black">{formatMoney(shouldPay)}</strong>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Smart Debt Matchmaker Transfer Suggestions */}
          <div className="bg-surface-container-lowest rounded-3xl p-5 sm:p-6 border border-outline-variant/15 shadow-xs space-y-4">
            <div>
              <span className="text-primary font-black text-xs uppercase tracking-widest block font-mono">
                SMART SETTLEMENT
              </span>
              <h3 className="text-lg font-black text-on-surface">
                最少轉帳筆數結算建議
              </h3>
              <p className="text-xs text-on-surface-variant mt-0.5">
                系統已自動計算出多退少補最佳平帳路徑，只需依照下列指引轉帳即可完全結清所有款項：
              </p>
            </div>

            {settlements.length === 0 ? (
              <div className="p-6 bg-emerald-50 rounded-2xl border border-emerald-200 text-center space-y-1">
                <CheckCircle2 size={24} className="text-emerald-600 mx-auto" />
                <p className="text-sm font-black text-emerald-950">全體帳目已平衡結清！</p>
                <p className="text-xs text-emerald-800">目前沒有需要轉帳或找補的款項。</p>
              </div>
            ) : (
              <div className="space-y-2.5 pt-1">
                {settlements.map((s, idx) => (
                  <div 
                    key={idx}
                    className="p-4 rounded-2xl bg-surface-container-low/80 border border-outline-variant/20 flex items-center justify-between gap-3"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-red-100 text-red-800 font-black text-xs flex items-center justify-center shrink-0">
                        {idx + 1}
                      </div>
                      <div className="text-xs sm:text-sm text-on-surface font-medium">
                        <strong className="text-base font-black text-red-700 mr-1.5">{s.from}</strong>
                        應轉帳給
                        <strong className="text-base font-black text-emerald-700 ml-1.5">{s.to}</strong>
                      </div>
                    </div>

                    <div className="text-right font-mono">
                      <span className="text-lg sm:text-xl font-black text-primary block">
                        {formatMoney(s.amount)}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
