import React, { useState, useEffect } from 'react';
import { 
  ChevronLeft, Plus, Trash2, Check, X, 
  CheckSquare, Filter, Calendar, Tag, User, AlertCircle, RefreshCw, ClipboardList, CheckCircle2,
  ShieldAlert, Car, Mail, FileText, ChevronDown, ChevronUp, ExternalLink, Sparkles, Luggage
} from 'lucide-react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { db, auth } from '../lib/firebase';
import { 
  collection, onSnapshot, query, 
  addDoc, deleteDoc, doc, updateDoc 
} from 'firebase/firestore';
import { cn } from '@/lib/utils';
import { PackingList } from './PackingList';

// Core Types
interface TodoItem {
  id: string;
  title: string;
  completed: boolean;
  assignee: string;
  category: string;
  date: string;
  addedBy: string;
}

const MEMBERS = ['小許', '春香', '麗安', '頭家娘', '小花', '全員'];

const CATEGORIES = [
  { label: '準備物品', value: 'Packing', color: 'bg-emerald-50 text-emerald-700 border-emerald-100 dark:bg-emerald-950/20 dark:text-emerald-400 dark:border-emerald-900/30' },
  { label: '證件機票', value: 'Docs', color: 'bg-blue-50 text-blue-700 border-blue-100 dark:bg-blue-950/20 dark:text-blue-400 dark:border-blue-900/30' },
  { label: '生活日常', value: 'Life', color: 'bg-amber-50 text-amber-700 border-amber-100 dark:bg-amber-950/20 dark:text-amber-400 dark:border-amber-900/30' },
  { label: '其他雜項', value: 'Others', color: 'bg-gray-50 text-gray-700 border-gray-100 dark:bg-gray-800/50 dark:text-gray-400 dark:border-gray-700/50' },
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

export function Todos() {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const currentTab = searchParams.get('tab') === 'packing' ? 'packing' : 'todos';

  const [todos, setTodos] = useState<TodoItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // Undo Toast state
  const [toastMessage, setToastMessage] = useState<{
    text: string;
    actionLabel?: string;
    onAction?: () => void;
  } | null>(null);

  // Modal State for Clearing All
  const [showClearConfirmModal, setShowClearConfirmModal] = useState(false);

  // Form State
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [title, setTitle] = useState('');
  const [assignee, setAssignee] = useState('未分配');
  const [category, setCategory] = useState('Packing');
  const [date, setDate] = useState('');

  // Filtering / Search State
  const [filterStatus, setFilterStatus] = useState<'all' | 'active' | 'completed'>('all');
  const [filterAssignee, setFilterAssignee] = useState<string>('全部');
  const [searchQuery, setSearchQuery] = useState('');

  // Special Pre-departure Hotel Santner Permit State (persisted locally)
  const [santnerPermitCompleted, setSantnerPermitCompleted] = useState<boolean>(() => {
    return localStorage.getItem('hotel_santner_permit_checked') === 'true';
  });
  const [santnerSteps, setSantnerSteps] = useState<{ [key: string]: boolean }>(() => {
    try {
      const saved = localStorage.getItem('hotel_santner_permit_steps');
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });
  const [santnerExpanded, setSantnerExpanded] = useState<boolean>(true);

  const showToast = (text: string, actionLabel?: string, onAction?: () => void, duration = 4000) => {
    setToastMessage({ text, actionLabel, onAction });
    setTimeout(() => {
      setToastMessage((prev) => (prev?.text === text ? null : prev));
    }, duration);
  };

  const toggleSantnerPermit = () => {
    const next = !santnerPermitCompleted;
    setSantnerPermitCompleted(next);
    localStorage.setItem('hotel_santner_permit_checked', String(next));
    showToast(
      next ? '已標記通行證任務為「已完成」' : '已取消通行證「完成」狀態（恢復為待辦）',
      '復原',
      () => {
        setSantnerPermitCompleted(!next);
        localStorage.setItem('hotel_santner_permit_checked', String(!next));
      }
    );
  };

  const toggleSantnerStep = (stepKey: string) => {
    const next = { ...santnerSteps, [stepKey]: !santnerSteps[stepKey] };
    setSantnerSteps(next);
    localStorage.setItem('hotel_santner_permit_steps', JSON.stringify(next));
  };

  // Realtime subscription
  useEffect(() => {
    const q = query(collection(db, 'todos'));
    
    const unsubscribe = onSnapshot(
      q, 
      (snapshot) => {
        const list: TodoItem[] = [];
        snapshot.forEach((doc) => {
          const data = doc.data();
          list.push({
            id: doc.id,
            title: data.title || '',
            completed: !!data.completed,
            assignee: data.assignee || '未分配',
            category: data.category || 'Packing',
            date: data.date || '',
            addedBy: data.addedBy || '',
          });
        });
        setTodos(list);
        setLoading(false);
      },
      (error) => {
        console.warn('Firestore subscription fallback:', error);
        setLoading(false);
      }
    );

    return () => unsubscribe();
  }, []);

  const handleAddTodo = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;

    setIsSubmitting(true);
    setErrorMessage(null);

    const payload = {
      title: title.trim(),
      completed: false,
      assignee,
      category,
      date: date || '無期限',
      addedBy: auth.currentUser?.email || 'Anonymous',
    };

    try {
      await addDoc(collection(db, 'todos'), payload);
      setTitle('');
      setAssignee('未分配');
      setCategory('Packing');
      setDate('');
      showToast(`已新增待辦事項「${payload.title}」`);
    } catch (err) {
      setErrorMessage('新增待辦事項失敗，請重試');
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Toggle completed status (支援打勾完成與取消打勾/復原)
  const handleToggleTodo = async (id: string, currentStatus: boolean, itemTitle: string) => {
    setErrorMessage(null);
    const newStatus = !currentStatus;

    // Optimistic update
    setTodos((prev) =>
      prev.map((t) => (t.id === id ? { ...t, completed: newStatus } : t))
    );

    showToast(
      newStatus ? `已完成「${itemTitle}」` : `已取消完成「${itemTitle}」（恢復為待辦）`,
      '復原',
      () => {
        handleToggleTodo(id, newStatus, itemTitle);
      }
    );

    try {
      const todoRef = doc(db, 'todos', id);
      await updateDoc(todoRef, { completed: newStatus });
    } catch (err) {
      console.error('Update todo failed:', err);
      // Revert optimistic update
      setTodos((prev) =>
        prev.map((t) => (t.id === id ? { ...t, completed: currentStatus } : t))
      );
      setErrorMessage('更新待辦狀態失敗');
    }
  };

  // Delete / Cancel todo item (無 window.confirm 阻擋，附帶可立即復原的 Undo 提示)
  const handleDeleteTodo = async (todoToDelete: TodoItem) => {
    setErrorMessage(null);
    const prevTodos = [...todos];

    // Optimistic removal
    setTodos((prev) => prev.filter((t) => t.id !== todoToDelete.id));

    showToast(
      `已刪除「${todoToDelete.title}」`,
      '復原',
      async () => {
        try {
          await addDoc(collection(db, 'todos'), {
            title: todoToDelete.title,
            completed: todoToDelete.completed,
            assignee: todoToDelete.assignee,
            category: todoToDelete.category,
            date: todoToDelete.date,
            addedBy: todoToDelete.addedBy,
          });
        } catch (e) {
          console.error('Failed to undo delete', e);
        }
      }
    );

    try {
      await deleteDoc(doc(db, 'todos', todoToDelete.id));
    } catch (err) {
      console.error('Delete todo failed:', err);
      setTodos(prevTodos);
      setErrorMessage('刪除待辦事項失敗');
    }
  };

  const handleSeedDefaultTodos = async () => {
    setIsSubmitting(true);
    setErrorMessage(null);
    const defaults = [
      { title: '檢查護照效期 (至少 6 個月以上，至 2027 年 4 月後)', category: 'Docs', assignee: '全員', date: '09/15' },
      { title: '申購申根醫療保險 (包含 30,000 歐元保額與列印英文證明)', category: 'Docs', assignee: '全員', date: '09/20' },
      { title: '申辦國際駕照 (IDP) + 攜帶台灣駕照正本 (小許、春香必備兩證正本)', category: 'Docs', assignee: '小許', date: '09/20' },
      { title: 'Hotel Santner｜Alpe di Siusi 開車通行證 (確認車牌與廠牌 Email 飯店取得 Driving Permit)', category: 'Docs', assignee: '小許', date: '09/27' },
      { title: '10/05 三尖峰 Rifugio Auronzo 線上預約繳費證明 QR (春香義大利自駕車位預約)', category: 'Docs', assignee: '春香', date: '09/25' },
      { title: '10/08 Postojna 鐘乳石洞 14:00 預約確認憑證 (€44 方案含小火車)', category: 'Life', assignee: '全員', date: '09/28' },
      { title: '10/10 Livade 13:30 松露獵犬尋松露預約確認 (伊斯特利亞森林)', category: 'Life', assignee: '全員', date: '09/30' },
      { title: '10/12 十六湖國家公園 Entrance 2 09:00-10:00 門票 (5人已購，區分 St1-St3 與 P1-P3)', category: 'Life', assignee: '全員', date: '10/01' },
      { title: 'Dubrovnik 3-Day Pass (3人已購，首搭市區公車向司機掃碼換紙本 QR 票)', category: 'Docs', assignee: '小花', date: '10/05' },
      { title: '購買斯洛維尼亞公路 e-Vignette 電子通行證 (小許 UNI-RENT 8人座取車確認)', category: 'Docs', assignee: '小許', date: '10/07' },
      { title: '換匯歐元現鈔 (EUR) 小額硬幣 (投幣廁所、布萊埃斯湖 P3 停車現場現金 €10)', category: 'Life', assignee: '全員', date: '09/22' },
      { title: '購買歐洲跨國 5G eSIM / SIM 卡 (涵蓋義大利、斯洛維尼亞、克羅埃西亞、黑山)', category: 'Packing', assignee: '全員', date: '09/25' },
      { title: '準備歐洲規格圓柱轉接頭 (Type C/F/L) & 行動電源 (不可託運)', category: 'Packing', assignee: '全員', date: '09/26' },
      { title: '整理五人行李打包清單 (隨身小包、多洛米蒂山區洋蔥式三層穿搭、健行鞋)', category: 'Packing', assignee: '全員', date: '09/25' },
    ];

    try {
      const promises = defaults.map(item => addDoc(collection(db, 'todos'), {
        ...item,
        completed: false,
        addedBy: 'System'
      }));
      await Promise.all(promises);
      showToast('已載入 13 項行前建議清單');
    } catch (err) {
      setErrorMessage('初始化預設清單失敗');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleConfirmClearAll = async () => {
    setShowClearConfirmModal(false);
    if (todos.length === 0) return;
    setErrorMessage(null);
    const backupTodos = [...todos];
    setTodos([]);

    showToast('已清空所有待辦事項', '復原全部', async () => {
      try {
        for (const item of backupTodos) {
          await addDoc(collection(db, 'todos'), {
            title: item.title,
            completed: item.completed,
            assignee: item.assignee,
            category: item.category,
            date: item.date,
            addedBy: item.addedBy,
          });
        }
      } catch (e) {
        console.error('Failed to restore all todos', e);
      }
    });

    try {
      const deletePromises = backupTodos.map(todo => deleteDoc(doc(db, 'todos', todo.id)));
      await Promise.all(deletePromises);
    } catch (err) {
      console.error('Clear all todos failed:', err);
      setTodos(backupTodos);
      setErrorMessage('清空待辦事項失敗');
    }
  };

  // Filtering logic
  const filteredTodos = todos.filter(todo => {
    const matchesStatus = 
      filterStatus === 'all' ? true :
      filterStatus === 'active' ? !todo.completed :
      todo.completed;

    const matchesAssignee = 
      filterAssignee === '全部' ? true : 
      todo.assignee === filterAssignee;

    const matchesSearch = 
      todo.title.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesStatus && matchesAssignee && matchesSearch;
  });

  // Stats
  const totalCount = todos.length;
  const completedCount = todos.filter(t => t.completed).length;
  const progressPercent = totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0;

  if (currentTab === 'packing') {
    return <PackingList />;
  }

  return (
    <div className="mt-20 px-4 pb-44 max-w-3xl mx-auto">
      {/* Top Header & Switcher */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div className="flex items-center gap-3">
          <button 
            onClick={() => navigate('/')}
            className="p-2.5 rounded-xl bg-surface-container-lowest border border-outline-variant/10 shadow-sm hover:bg-surface-container-low transition-colors"
          >
            <ChevronLeft size={20} className="text-on-surface" />
          </button>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-black uppercase tracking-wider text-teal-700 bg-teal-50 px-2 py-0.5 rounded-md border border-teal-200">
                2026 行前籌備
              </span>
              <span className="text-xs text-on-surface-variant font-medium">5人行程協同</span>
            </div>
            <h1 className="text-2xl font-black text-[#0d9488] tracking-tight mt-0.5">行前待辦事項</h1>
          </div>
        </div>

        {/* View Switcher: Todos vs Packing List */}
        <div className="inline-flex p-1 bg-surface-container-low rounded-2xl border border-outline-variant/20 shadow-inner self-start sm:self-auto">
          <button
            className="px-3.5 py-1.5 rounded-xl text-xs font-bold bg-white text-[#0d9488] shadow-sm transition-all cursor-default"
          >
            📋 行前待辦
          </button>
          <button
            onClick={() => setSearchParams({ tab: 'packing' })}
            className="px-3.5 py-1.5 rounded-xl text-xs font-bold text-on-surface-variant hover:text-on-surface transition-all cursor-pointer flex items-center gap-1.5"
          >
            🧳 五人行李清單
          </button>
        </div>
      </div>

      {/* Action Buttons Bar */}
      <div className="flex items-center justify-between gap-2 mb-4">
        <div className="text-xs text-on-surface-variant font-bold">
          待辦任務進度：{completedCount} / {totalCount}
        </div>

        {todos.length > 0 ? (
          <button
            onClick={() => setShowClearConfirmModal(true)}
            className="flex items-center gap-1.5 text-xs text-red-600 bg-red-50 hover:bg-red-100 border border-red-200 px-3 py-1.5 rounded-xl font-bold transition-colors cursor-pointer"
          >
            <Trash2 size={14} />
            清空所有
          </button>
        ) : (
          <button
            onClick={handleSeedDefaultTodos}
            className="flex items-center gap-1.5 text-xs text-[#0d9488] bg-[#0d9488]/10 hover:bg-[#0d9488]/20 border border-[#0d9488]/30 px-3 py-1.5 rounded-xl font-extrabold transition-colors cursor-pointer"
          >
            <Plus size={14} />
            載入 2026 行前建議清單
          </button>
        )}
      </div>

      {/* Quick Entry Banner to Packing List */}
      <div 
        onClick={() => setSearchParams({ tab: 'packing' })}
        className="mb-6 p-4 rounded-3xl bg-gradient-to-r from-teal-50 via-emerald-50 to-teal-50/50 border border-teal-200/80 shadow-xs cursor-pointer hover:shadow-sm hover:border-teal-300 transition-all flex items-center justify-between gap-3 group select-none"
      >
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-[#0d9488]/15 text-[#0d9488] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
            <Luggage size={22} />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-xs font-black text-teal-950">五人行李準備清單已建立</h3>
              <span className="text-[10px] font-extrabold bg-[#0d9488] text-white px-2 py-0.5 rounded-full">
                必看
              </span>
            </div>
            <p className="text-[11px] text-teal-900/70 font-medium mt-0.5">
              隨身重要證件、3C快充、多洛米蒂山區防寒穿搭 (0°C~12°C)、各航司行李限制一覽
            </p>
          </div>
        </div>
        <button className="text-xs font-bold text-[#0d9488] bg-white px-3 py-1.5 rounded-xl border border-teal-200/60 shadow-2xs group-hover:bg-[#0d9488] group-hover:text-white transition-all shrink-0">
          查看清單 ➜
        </button>
      </div>

      {/* Error Message */}
      {errorMessage && (
        <div className="mb-6 p-4 rounded-2xl bg-error-container/20 border border-error/20 flex items-start gap-3">
          <AlertCircle className="text-error mt-0.5 shrink-0" size={18} />
          <p className="text-xs text-error font-medium">{errorMessage}</p>
        </div>
      )}

      {/* Progress Card */}
      <div className="bg-gradient-to-br from-[#0d9488] to-[#0f766e] text-white p-6 rounded-3xl shadow-md mb-6 relative overflow-hidden">
        <div className="absolute right-[-20px] bottom-[-20px] opacity-10">
          <ClipboardList size={180} />
        </div>
        <div className="relative z-10">
          <span className="text-[10px] font-bold uppercase tracking-widest bg-white/20 px-2.5 py-1 rounded-full">
            準備進度
          </span>
          <div className="flex justify-between items-end mt-4 mb-2">
            <div>
              <span className="text-4xl font-extrabold tracking-tight">{progressPercent}%</span>
              <span className="text-xs font-semibold ml-2 opacity-90">已完成</span>
            </div>
            <div className="text-xs font-bold opacity-80">
              {completedCount} / {totalCount} 項任務
            </div>
          </div>
          
          {/* Custom Sleek Progress Bar */}
          <div className="w-full h-2.5 bg-white/20 rounded-full overflow-hidden">
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: `${progressPercent}%` }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="h-full bg-white rounded-full"
            />
          </div>
        </div>
      </div>

      {/* Special Essential Pre-departure Item: Hotel Santner Driving Permit */}
      <div className={cn(
        "rounded-2xl border transition-all duration-300 mb-8 overflow-hidden shadow-sm",
        santnerPermitCompleted 
          ? "bg-emerald-50/80 border-emerald-200/80" 
          : "bg-amber-50/70 border-amber-200"
      )}>
        {/* Header bar of Special Card */}
        <div className="p-4 sm:p-5 flex items-start justify-between gap-3">
          <div className="flex items-start gap-3 flex-1">
            <button
              type="button"
              onClick={toggleSantnerPermit}
              className={cn(
                "w-6 h-6 rounded-lg border-2 flex items-center justify-center transition-all shrink-0 mt-0.5",
                santnerPermitCompleted 
                  ? "bg-emerald-600 border-emerald-600 text-white" 
                  : "border-amber-400 bg-white hover:border-amber-600"
              )}
            >
              {santnerPermitCompleted && <Check size={14} strokeWidth={3} />}
            </button>

            <div className="flex-1 min-w-0">
              <div className="flex flex-wrap items-center gap-2 mb-1">
                <span className={cn(
                  "text-[10px] font-extrabold px-2 py-0.5 rounded-full uppercase tracking-wider",
                  santnerPermitCompleted 
                    ? "bg-emerald-200 text-emerald-900" 
                    : "bg-amber-200 text-amber-900 flex items-center gap-1"
                )}>
                  <Car size={11} />
                  出發前重要待辦 · 駕駛必備
                </span>
                <span className="text-[10px] font-bold text-slate-500 bg-white/80 px-2 py-0.5 rounded-md border border-slate-200">
                  9/27～9/30 執行
                </span>
              </div>
              <h3 className={cn(
                "text-base font-black tracking-tight",
                santnerPermitCompleted ? "line-through text-slate-500" : "text-slate-900"
              )}>
                Hotel Santner｜Alpe di Siusi 開車通行證 (Driving Permit)
              </h3>
            </div>
          </div>

          <button
            type="button"
            onClick={() => setSantnerExpanded(!santnerExpanded)}
            className="p-1.5 rounded-lg text-slate-500 hover:bg-black/5 transition-colors shrink-0"
          >
            {santnerExpanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
          </button>
        </div>

        {/* Expandable Step Details & Warning */}
        <AnimatePresence>
          {santnerExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="px-4 sm:px-5 pb-5 pt-1 border-t border-amber-200/50 space-y-4"
            >
              {/* Highlight Warning Banner */}
              <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-400/40 flex items-start gap-2.5 text-amber-950">
                <ShieldAlert className="text-amber-600 shrink-0 mt-0.5" size={18} />
                <div className="text-xs leading-relaxed font-bold">
                  ⚠️ 重要：Alpe di Siusi 09:00–17:00 有私人車輛交通管制。Hotel Santner 住宿旅客取得 Driving Permit 後，可開車前往飯店。
                </div>
              </div>

              {/* Sub-steps checklist */}
              <div className="space-y-2 text-xs font-medium text-slate-800 bg-white/90 p-3.5 rounded-xl border border-slate-200/80">
                <div className="font-extrabold text-[11px] text-slate-500 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <FileText size={13} className="text-[#0d9488]" />
                  執行步驟清單（可逐步勾選）：
                </div>

                {/* Step 1 */}
                <label className="flex items-start gap-2.5 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={!!santnerSteps.step1}
                    onChange={() => toggleSantnerStep('step1')}
                    className="mt-0.5 accent-[#0d9488] rounded"
                  />
                  <span className={cn(santnerSteps.step1 && "line-through text-slate-400")}>
                    <strong>9/27</strong> 取得義大利租車後，確認「車輛廠牌（Make）」與「車牌號碼（License Plate Number）」。
                  </span>
                </label>

                {/* Step 2 & Email Link */}
                <label className="flex items-start gap-2.5 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={!!santnerSteps.step2}
                    onChange={() => toggleSantnerStep('step2')}
                    className="mt-0.5 accent-[#0d9488] rounded"
                  />
                  <div className="flex-1">
                    <span className={cn(santnerSteps.step2 && "line-through text-slate-400")}>
                      將車輛廠牌及車牌 Email 給 Hotel Santner。
                    </span>
                    <div className="mt-1 flex items-center gap-2">
                      <a 
                        href="mailto:info@hotelsantner.com?subject=Driving%20Permit%20Request%20-%20Booking%20R2635/2026%20-%20HSU%20CHEN%20HUNG&body=Dear%20Hotel%20Santner%20Team,%0A%0AWe%20have%20picked%20up%20our%20rental%20car%20for%20our%20upcoming%20stay%20(Booking%20R2635/2026,%20Guest:%20HSU%20CHEN%20HUNG,%20Check-in:%20Sep%2030,%202026).%0A%0APlease%20issue%20our%20Driving%20Permit%20for%20Alpe%20di%20Siusi:%0A- Car Make / Model:%20%0A- License Plate Number:%20%0A%0AThank%20you%20very%20much!%0ABest%20regards,"
                        className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#0d9488] text-white rounded-lg font-bold text-[11px] hover:bg-[#0f766e] transition-colors"
                      >
                        <Mail size={12} />
                        Email 飯店 (info@hotelsantner.com)
                      </a>
                    </div>
                  </div>
                </label>

                {/* Step 3 */}
                <label className="flex items-start gap-2.5 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={!!santnerSteps.step3}
                    onChange={() => toggleSantnerStep('step3')}
                    className="mt-0.5 accent-[#0d9488] rounded"
                  />
                  <span className={cn(santnerSteps.step3 && "line-through text-slate-400")}>
                    請 Hotel Santner 回傳 <strong>Driving Permit</strong>。
                  </span>
                </label>

                {/* Step 4 */}
                <label className="flex items-start gap-2.5 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={!!santnerSteps.step4}
                    onChange={() => toggleSantnerStep('step4')}
                    className="mt-0.5 accent-[#0d9488] rounded"
                  />
                  <span className={cn(santnerSteps.step4 && "line-through text-slate-400")}>
                    收到 Driving Permit 後，儲存在手機中，並建議另外保留 PDF／截圖離線版本。
                  </span>
                </label>

                {/* Step 5 */}
                <label className="flex items-start gap-2.5 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={!!santnerSteps.step5}
                    onChange={() => toggleSantnerStep('step5')}
                    className="mt-0.5 accent-[#0d9488] rounded"
                  />
                  <span className={cn(santnerSteps.step5 && "line-through text-slate-400")}>
                    <strong>9/30</strong> 開車前再次確認 Driving Permit 已經收到。
                  </span>
                </label>
              </div>

              {/* Toggle Completion button */}
              <button
                type="button"
                onClick={toggleSantnerPermit}
                className={cn(
                  "w-full py-2.5 rounded-xl font-extrabold text-xs flex items-center justify-center gap-2 transition-all active:scale-[0.98]",
                  santnerPermitCompleted
                    ? "bg-emerald-600 text-white shadow-sm"
                    : "bg-slate-900 text-white hover:bg-slate-800"
                )}
              >
                {santnerPermitCompleted ? (
                  <>
                    <CheckCircle2 size={16} />
                    已完成通行證申辦與確認（點擊取消）
                  </>
                ) : (
                  <>
                    <Check size={16} />
                    標記此通行證待辦為「已完成」
                  </>
                )}
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Create Todo Form */}
      <form onSubmit={handleAddTodo} className="bg-white rounded-2xl border border-outline-variant/10 shadow-sm p-5 mb-8">
        <h3 className="text-sm font-extrabold text-on-surface mb-4 flex items-center gap-2">
          <Plus size={16} className="text-[#0d9488]" />
          新增待辦事項
        </h3>

        <div className="grid grid-cols-1 gap-4">
          <div>
            <label className="block text-[11px] font-bold text-on-surface-variant mb-1.5">
              任務名稱 <span className="text-red-500">*</span>
            </label>
            <input 
              type="text"
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="例如：準備雨傘、列印機票存根..."
              className="w-full text-sm px-4 py-3 bg-surface-container-lowest border border-outline-variant/10 rounded-xl focus:outline-none focus:border-[#0d9488] transition-colors"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <div>
              <label className="block text-[11px] font-bold text-on-surface-variant mb-1.5">
                分配給
              </label>
              <select
                value={assignee}
                onChange={(e) => setAssignee(e.target.value)}
                className="w-full text-sm px-3 py-2.5 bg-surface-container-lowest border border-outline-variant/10 rounded-xl focus:outline-none focus:border-[#0d9488] transition-colors"
              >
                <option value="未分配">未分配</option>
                {MEMBERS.map(m => (
                  <option key={m} value={m}>{m}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-[11px] font-bold text-on-surface-variant mb-1.5">
                任務類別
              </label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full text-sm px-3 py-2.5 bg-surface-container-lowest border border-outline-variant/10 rounded-xl focus:outline-none focus:border-[#0d9488] transition-colors"
              >
                <option value="Packing">準備物品</option>
                <option value="Docs">證件機票</option>
                <option value="Life">生活日常</option>
                <option value="Others">其他雜項</option>
              </select>
            </div>

            <div>
              <label className="block text-[11px] font-bold text-on-surface-variant mb-1.5">
                目標日期 (選填)
              </label>
              <input 
                type="text"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                placeholder="例如：7/25 前"
                className="w-full text-sm px-3 py-2 bg-surface-container-lowest border border-outline-variant/10 rounded-xl focus:outline-none focus:border-[#0d9488] transition-colors"
              />
            </div>
          </div>

          <button 
            type="submit"
            disabled={isSubmitting || !title.trim()}
            className="w-full mt-2 py-3 rounded-xl bg-[#0d9488] text-white font-bold text-sm shadow-sm hover:bg-[#0f766e] transition-all disabled:opacity-50 flex items-center justify-center gap-2"
          >
            {isSubmitting ? (
              <>
                <RefreshCw className="animate-spin" size={16} />
                正在新增...
              </>
            ) : (
              <>
                <Plus size={16} />
                加到待辦清單
              </>
            )}
          </button>
        </div>
      </form>

      {/* Filtering Toolbar */}
      <div className="mb-6 space-y-3">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
          {/* Status Tabs */}
          <div className="flex bg-surface-container-low p-1 rounded-xl border border-outline-variant/5">
            <button
              onClick={() => setFilterStatus('all')}
              className={cn(
                "px-4 py-1.5 rounded-lg text-xs font-bold transition-all",
                filterStatus === 'all' ? "bg-white text-[#0d9488] shadow-sm" : "text-outline hover:text-on-surface"
              )}
            >
              全部
            </button>
            <button
              onClick={() => setFilterStatus('active')}
              className={cn(
                "px-4 py-1.5 rounded-lg text-xs font-bold transition-all",
                filterStatus === 'active' ? "bg-white text-[#0d9488] shadow-sm" : "text-outline hover:text-on-surface"
              )}
            >
              未完成
            </button>
            <button
              onClick={() => setFilterStatus('completed')}
              className={cn(
                "px-4 py-1.5 rounded-lg text-xs font-bold transition-all",
                filterStatus === 'completed' ? "bg-white text-[#0d9488] shadow-sm" : "text-outline hover:text-on-surface"
              )}
            >
              已完成
            </button>
          </div>

          {/* Search bar */}
          <input 
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="搜尋待辦事項..."
            className="text-xs px-4 py-2 bg-white border border-outline-variant/15 rounded-xl focus:outline-none focus:border-[#0d9488] w-full md:w-48"
          />
        </div>

        {/* Assignee selection */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
          <span className="text-[10px] font-bold text-on-surface-variant uppercase tracking-wider shrink-0 mr-1 flex items-center gap-1">
            <Filter size={10} />
            負責人:
          </span>
          {['全部', '未分配', ...MEMBERS].map((m) => (
            <button
              key={m}
              onClick={() => setFilterAssignee(m)}
              className={cn(
                "px-3 py-1 rounded-full text-xs font-bold transition-all border shrink-0",
                filterAssignee === m 
                  ? "bg-primary/10 text-primary border-primary/20" 
                  : "bg-white text-outline border-outline-variant/15 hover:border-outline"
              )}
            >
              {m}
            </button>
          ))}
        </div>
      </div>

      {/* Todo List Container */}
      {loading ? (
        <div className="flex flex-col items-center justify-center py-20">
          <RefreshCw className="animate-spin text-primary mb-3" size={24} />
          <span className="text-xs font-semibold text-outline">正在載入待辦事項...</span>
        </div>
      ) : filteredTodos.length === 0 ? (
        <div className="bg-white border border-outline-variant/10 rounded-2xl p-12 text-center flex flex-col items-center justify-center">
          <div className="w-12 h-12 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mb-3">
            <CheckSquare size={22} />
          </div>
          <h4 className="text-sm font-bold text-on-surface mb-1">無待辦事項</h4>
          <p className="text-xs text-outline">沒有符合當前篩選條件的任務</p>
        </div>
      ) : (
        <div className="space-y-3">
          <AnimatePresence mode="popLayout">
            {filteredTodos.map((todo) => {
              const catConfig = CATEGORIES.find(c => c.value === todo.category) || CATEGORIES[3];
              return (
                <motion.div
                  key={todo.id}
                  layout
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className={cn(
                    "bg-white border rounded-2xl p-4 flex items-center justify-between gap-4 transition-all duration-300",
                    todo.completed ? "border-emerald-100 opacity-70" : "border-outline-variant/10 shadow-sm"
                  )}
                >
                  <div className="flex items-center gap-3.5 flex-1 min-w-0">
                    {/* Checkbox button */}
                    <button
                      type="button"
                      onClick={() => handleToggleTodo(todo.id, todo.completed, todo.title)}
                      className={cn(
                        "w-6 h-6 rounded-lg border-2 flex items-center justify-center transition-all shrink-0 cursor-pointer",
                        todo.completed 
                          ? "bg-emerald-600 border-emerald-600 text-white" 
                          : "border-outline-variant hover:border-[#0d9488]"
                      )}
                      title={todo.completed ? "點擊取消完成（恢復為待辦）" : "標記為完成"}
                    >
                      {todo.completed && <Check size={14} strokeWidth={3} />}
                    </button>

                    <div 
                      className="min-w-0 flex-1 cursor-pointer select-none"
                      onClick={() => handleToggleTodo(todo.id, todo.completed, todo.title)}
                    >
                      <div className="flex items-center justify-between gap-2">
                        <p className={cn(
                          "text-sm font-bold leading-tight break-words",
                          todo.completed ? "line-through text-outline" : "text-on-surface"
                        )}>
                          {todo.title}
                        </p>
                        {todo.completed && (
                          <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-md shrink-0">
                            已完成 · 點擊可取消
                          </span>
                        )}
                      </div>

                      {/* Meta information tags */}
                      <div className="flex flex-wrap gap-1.5 mt-2">
                        {/* Category tag */}
                        <span className={cn("text-[10px] font-bold px-2 py-0.5 rounded-full border", catConfig.color)}>
                          {catConfig.label}
                        </span>

                        {/* Assignee tag */}
                        <span className="text-[10px] font-bold text-on-surface-variant bg-surface-container-low px-2 py-0.5 rounded-full border border-outline-variant/5 inline-flex items-center gap-1">
                          <User size={9} />
                          {todo.assignee}
                        </span>

                        {/* Date tag */}
                        {todo.date && todo.date !== '無期限' && (
                          <span className="text-[10px] font-bold text-[#b45309] bg-amber-50 px-2 py-0.5 rounded-full border border-amber-100 dark:bg-amber-950/20 dark:text-amber-400 dark:border-amber-900/30 inline-flex items-center gap-1">
                            <Calendar size={9} />
                            {todo.date}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Delete button */}
                  <button
                    type="button"
                    onClick={() => handleDeleteTodo(todo)}
                    title="刪除/取消此待辦"
                    className="p-2 text-outline-variant hover:text-error hover:bg-error/5 rounded-xl transition-colors shrink-0 cursor-pointer"
                  >
                    <Trash2 size={16} />
                  </button>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      )}

      {/* Floating Undo Toast Banner */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-24 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-md bg-slate-900/95 text-white backdrop-blur-md px-4 py-3 rounded-2xl shadow-xl border border-white/10 flex items-center justify-between gap-3"
          >
            <span className="text-xs font-medium truncate">{toastMessage.text}</span>
            {toastMessage.actionLabel && toastMessage.onAction && (
              <button
                type="button"
                onClick={() => {
                  toastMessage.onAction?.();
                  setToastMessage(null);
                }}
                className="text-xs font-black text-amber-400 bg-amber-400/10 hover:bg-amber-400/20 px-3 py-1.5 rounded-xl border border-amber-400/30 shrink-0 transition-colors cursor-pointer"
              >
                {toastMessage.actionLabel}
              </button>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Clear All In-App Confirmation Modal (Bypasses window.confirm iframe restrictions) */}
      <AnimatePresence>
        {showClearConfirmModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-white rounded-3xl p-6 max-w-sm w-full shadow-2xl border border-outline-variant/10 text-center"
            >
              <div className="w-12 h-12 rounded-full bg-red-100 text-red-600 flex items-center justify-center mx-auto mb-4">
                <Trash2 size={24} />
              </div>
              <h3 className="text-base font-bold text-on-surface mb-2">確定要清空所有待辦事項？</h3>
              <p className="text-xs text-on-surface-variant mb-6 leading-relaxed">
                此動作將會清除目前清單中的所有項目（清空後仍有 4 秒可點擊「復原」按鈕取消）。
              </p>
              <div className="flex gap-2.5">
                <button
                  type="button"
                  onClick={() => setShowClearConfirmModal(false)}
                  className="flex-1 py-2.5 rounded-xl border border-outline-variant/20 text-xs font-bold text-on-surface hover:bg-surface-container-low transition-colors cursor-pointer"
                >
                  取消
                </button>
                <button
                  type="button"
                  onClick={handleConfirmClearAll}
                  className="flex-1 py-2.5 rounded-xl bg-red-600 hover:bg-red-700 text-white text-xs font-bold transition-colors shadow-sm cursor-pointer"
                >
                  確認清空
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
