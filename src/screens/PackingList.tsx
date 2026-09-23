import React, { useState, useEffect, useMemo } from 'react';
import { 
  ChevronLeft, Check, Plus, Trash2, RotateCcw, 
  Sparkles, ShieldCheck, ThermometerSnowflake, Plane, 
  HelpCircle, CheckCircle2, Circle, AlertCircle, Copy, 
  Layers, User, Tag, Calendar, Luggage
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { 
  INITIAL_PACKING_ITEMS, 
  PACKING_CATEGORIES, 
  AIRLINE_BAGGAGE_RULES, 
  PackingItem 
} from '../data/packingListData';
import { cn } from '@/lib/utils';

const STORAGE_KEY_CHECKED = 'packing_list_checked_items_2026';
const STORAGE_KEY_CUSTOM = 'packing_list_custom_items_2026';

export function PackingList() {
  const navigate = useNavigate();

  // Checked state (Map of id -> boolean)
  const [checkedMap, setCheckedMap] = useState<{ [id: string]: boolean }>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_CHECKED);
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  // Custom items created by user
  const [customItems, setCustomItems] = useState<PackingItem[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_CUSTOM);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // UI Filter state
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedAssignee, setSelectedAssignee] = useState<string>('全部');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [showAirlineInfo, setShowAirlineInfo] = useState<boolean>(true);
  const [showClimateGuide, setShowClimateGuide] = useState<boolean>(true);
  const [showAddModal, setShowAddModal] = useState<boolean>(false);
  const [copyFeedback, setCopyFeedback] = useState<boolean>(false);

  // New item form
  const [newItemTitle, setNewItemTitle] = useState('');
  const [newItemSubtitle, setNewItemSubtitle] = useState('');
  const [newItemCategory, setNewItemCategory] = useState<PackingItem['category']>('carryon');
  const [newItemAssignee, setNewItemAssignee] = useState<PackingItem['assignee']>('全員');
  const [newItemIsMust, setNewItemIsMust] = useState(false);

  // Save checked map to localStorage
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY_CHECKED, JSON.stringify(checkedMap));
  }, [checkedMap]);

  // Save custom items to localStorage
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY_CUSTOM, JSON.stringify(customItems));
  }, [customItems]);

  // Combine initial items + custom items
  const allItems: PackingItem[] = useMemo(() => {
    return [...INITIAL_PACKING_ITEMS, ...customItems];
  }, [customItems]);

  // Filter items
  const filteredItems = useMemo(() => {
    return allItems.filter(item => {
      // Category filter
      if (selectedCategory !== 'all' && item.category !== selectedCategory) {
        return false;
      }
      // Assignee filter
      if (selectedAssignee !== '全部') {
        if (item.assignee !== selectedAssignee && item.assignee !== '全員') return false;
      }
      // Search query
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchTitle = item.title.toLowerCase().includes(query);
        const matchSub = (item.subtitle || '').toLowerCase().includes(query);
        const matchNotes = (item.notes || '').toLowerCase().includes(query);
        if (!matchTitle && !matchSub && !matchNotes) return false;
      }
      return true;
    });
  }, [allItems, selectedCategory, selectedAssignee, searchQuery]);

  // Stats calculation
  const totalCount = allItems.length;
  const completedCount = allItems.filter(item => !!checkedMap[item.id]).length;
  const progressPercent = totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0;

  // Toggle item status
  const toggleItem = (id: string) => {
    setCheckedMap(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  // Add custom item
  const handleAddCustomItem = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newItemTitle.trim()) return;

    const newItem: PackingItem = {
      id: `custom-${Date.now()}`,
      category: newItemCategory,
      title: newItemTitle.trim(),
      subtitle: newItemSubtitle.trim() || undefined,
      assignee: newItemAssignee,
      isMustHave: newItemIsMust,
    };

    setCustomItems(prev => [newItem, ...prev]);
    setNewItemTitle('');
    setNewItemSubtitle('');
    setShowAddModal(false);
  };

  // Delete custom item
  const handleDeleteCustomItem = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setCustomItems(prev => prev.filter(i => i.id !== id));
    setCheckedMap(prev => {
      const next = { ...prev };
      delete next[id];
      return next;
    });
  };

  // Mark all filtered as completed
  const handleMarkFilteredAll = () => {
    const next = { ...checkedMap };
    filteredItems.forEach(item => {
      next[item.id] = true;
    });
    setCheckedMap(next);
  };

  // Reset all
  const handleResetAll = () => {
    if (window.confirm('確定要重設所有行李項目的準備狀態嗎？')) {
      setCheckedMap({});
    }
  };

  // Copy summary to clipboard
  const handleCopySummary = () => {
    const lines = [
      '【2026 義大利 × 克羅埃西亞 28天 行李準備清單】',
      `整體準備進度：${completedCount}/${totalCount} (${progressPercent}%)`,
      '',
      '■ 待準備項目：',
      ...allItems
        .filter(item => !checkedMap[item.id])
        .map(item => `[ ] (${item.assignee}) ${item.title}`),
      '',
      '■ 已完成備妥：',
      ...allItems
        .filter(item => !!checkedMap[item.id])
        .map(item => `[V] (${item.assignee}) ${item.title}`)
    ];

    navigator.clipboard.writeText(lines.join('\n'));
    setCopyFeedback(true);
    setTimeout(() => setCopyFeedback(false), 2500);
  };

  return (
    <div className="mt-20 px-4 pb-44 max-w-4xl mx-auto">
      {/* Top Navigation & Sub-Tabs Switcher */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div className="flex items-center gap-3">
          <button 
            onClick={() => navigate('/todos')}
            className="p-2.5 rounded-xl bg-surface-container-lowest border border-outline-variant/10 shadow-sm hover:bg-surface-container-low transition-colors"
            title="返回待辦"
          >
            <ChevronLeft size={20} className="text-on-surface" />
          </button>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-black uppercase tracking-wider text-teal-700 bg-teal-50 px-2 py-0.5 rounded-md border border-teal-200">
                2026 義大利 · 斯 · 克 · 黑山 28天
              </span>
              <span className="text-xs text-on-surface-variant font-medium">5人專屬</span>
            </div>
            <h1 className="text-2xl font-black text-[#0d9488] tracking-tight mt-1">
              行李準備清單
            </h1>
          </div>
        </div>

        {/* View Switcher: Todos vs Packing */}
        <div className="inline-flex p-1 bg-surface-container-low rounded-2xl border border-outline-variant/20 self-start sm:self-auto shadow-inner">
          <button
            onClick={() => navigate('/todos')}
            className="px-3.5 py-1.5 rounded-xl text-xs font-bold text-on-surface-variant hover:text-on-surface transition-all cursor-pointer"
          >
            📋 行前待辦
          </button>
          <button
            className="px-3.5 py-1.5 rounded-xl text-xs font-bold bg-white text-[#0d9488] shadow-sm transition-all cursor-default"
          >
            🧳 五人行李清單
          </button>
        </div>
      </div>

      {/* Progress & Quick Actions Card */}
      <div className="bg-gradient-to-br from-[#0d9488] via-[#0f766e] to-[#115e59] text-white p-6 rounded-3xl shadow-lg mb-6 relative overflow-hidden">
        <div className="absolute right-[-15px] bottom-[-25px] opacity-10 pointer-events-none">
          <Luggage size={180} />
        </div>
        <div className="relative z-10">
          <div className="flex flex-wrap items-center justify-between gap-3 mb-2">
            <span className="text-[11px] font-extrabold uppercase tracking-widest bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
              行李整備進度 · 5人分工
            </span>
            <div className="flex items-center gap-2">
              <button
                onClick={handleCopySummary}
                className="text-[11px] font-bold bg-white/15 hover:bg-white/25 px-2.5 py-1 rounded-lg transition-colors flex items-center gap-1.5"
                title="複製文字清單到剪貼簿"
              >
                <Copy size={13} />
                {copyFeedback ? '已複製！' : '複製進度'}
              </button>
              <button
                onClick={handleResetAll}
                className="text-[11px] font-bold bg-white/15 hover:bg-white/25 px-2.5 py-1 rounded-lg transition-colors flex items-center gap-1.5"
                title="重設全部勾選狀態"
              >
                <RotateCcw size={13} />
                重設
              </button>
            </div>
          </div>

          <div className="flex justify-between items-end mt-3 mb-2">
            <div>
              <span className="text-4xl sm:text-5xl font-black tracking-tight">{progressPercent}%</span>
              <span className="text-xs font-bold ml-2 opacity-90">已打包備妥</span>
            </div>
            <div className="text-right">
              <span className="text-base font-extrabold">{completedCount}</span>
              <span className="text-xs opacity-80"> / {totalCount} 項物品</span>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="w-full h-2.5 bg-black/20 rounded-full overflow-hidden p-0.5">
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: `${progressPercent}%` }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="h-full bg-white rounded-full shadow-sm"
            />
          </div>

          <p className="text-[11px] mt-3 opacity-80">
            涵蓋春香、小許、麗安、頭家娘、小花五人出國隨身物品、自駕證件、多洛米蒂防寒與四航段行李限制。
          </p>
        </div>
      </div>

      {/* Special Notice 1: Dolomites Mountain Climate & Layering Guide */}
      <div className="mb-6 rounded-3xl border border-amber-200/80 bg-gradient-to-r from-amber-50/90 to-orange-50/50 p-5 shadow-sm overflow-hidden">
        <div 
          className="flex items-center justify-between cursor-pointer select-none"
          onClick={() => setShowClimateGuide(!showClimateGuide)}
        >
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-2xl bg-amber-500/20 text-amber-800 flex items-center justify-center shrink-0">
              <ThermometerSnowflake size={20} />
            </div>
            <div>
              <h3 className="text-sm font-black text-amber-950 flex items-center gap-2">
                多洛米蒂山區氣候防寒穿搭指引
                <span className="text-[10px] bg-amber-200/80 text-amber-900 font-bold px-2 py-0.5 rounded-full">
                  0°C ~ 12°C 洋蔥式三層
                </span>
              </h3>
              <p className="text-[11px] text-amber-900/70 font-medium">
                休斯高原、Seceda 刀鋒山、三尖峰高海拔山口防風抗低溫
              </p>
            </div>
          </div>
          <button className="text-xs text-amber-800 font-bold px-2 py-1 rounded-lg hover:bg-amber-100 transition-colors">
            {showClimateGuide ? '收起' : '展開'}
          </button>
        </div>

        {showClimateGuide && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="mt-4 pt-3 border-t border-amber-200/60 text-xs text-amber-950 space-y-3"
          >
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="bg-white/80 p-3 rounded-2xl border border-amber-200/50">
                <div className="font-black text-amber-900 flex items-center gap-1.5 mb-1">
                  <span className="w-5 h-5 rounded-full bg-amber-100 text-amber-800 flex items-center justify-center text-[10px]">1</span>
                  內層 (Base Layer)
                </div>
                <p className="text-[11px] text-amber-900/80 leading-relaxed">
                  <strong>美麗諾羊毛 / 排汗發熱衣</strong>。登山健走排出汗水不失溫，維持肌膚乾爽不發臭。
                </p>
              </div>

              <div className="bg-white/80 p-3 rounded-2xl border border-amber-200/50">
                <div className="font-black text-amber-900 flex items-center gap-1.5 mb-1">
                  <span className="w-5 h-5 rounded-full bg-amber-100 text-amber-800 flex items-center justify-center text-[10px]">2</span>
                  中層 (Mid Layer)
                </div>
                <p className="text-[11px] text-amber-900/80 leading-relaxed">
                  <strong>刷毛抓絨衣 (Fleece) 或輕羽絨</strong>。鎖住體溫的高效蓄熱層，登頂吹風時立即套上。
                </p>
              </div>

              <div className="bg-white/80 p-3 rounded-2xl border border-amber-200/50">
                <div className="font-black text-amber-900 flex items-center gap-1.5 mb-1">
                  <span className="w-5 h-5 rounded-full bg-amber-100 text-amber-800 flex items-center justify-center text-[10px]">3</span>
                  外層 (Outer Layer)
                </div>
                <p className="text-[11px] text-amber-900/80 leading-relaxed">
                  <strong>Gore-Tex 防風防水衝鋒衣</strong>。阻擋阿爾卑斯冷冽強風、突發陣雨與降雪，連帽設計必備。
                </p>
              </div>
            </div>

            <div className="p-3 bg-amber-100/60 rounded-2xl text-[11px] text-amber-900 flex items-start gap-2">
              <AlertCircle size={15} className="shrink-0 text-amber-700 mt-0.5" />
              <div>
                <strong>裝備提醒：</strong>三尖峰與 Seceda 步道多為高山碎石階梯，務必穿著<strong>防滑高筒/中筒健行鞋</strong>＋<strong>羊毛厚襪</strong>；登山杖具金屬杖尖，<strong>必須置入託運行李</strong>，不可隨身手提上機！
              </div>
            </div>
          </motion.div>
        )}
      </div>

      {/* Special Notice 2: Airline Baggage Allowance Matrix */}
      <div className="mb-6 rounded-3xl border border-blue-200/80 bg-gradient-to-r from-blue-50/90 to-sky-50/50 p-5 shadow-sm overflow-hidden">
        <div 
          className="flex items-center justify-between cursor-pointer select-none"
          onClick={() => setShowAirlineInfo(!showAirlineInfo)}
        >
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-2xl bg-blue-500/20 text-blue-800 flex items-center justify-center shrink-0">
              <Plane size={20} />
            </div>
            <div>
              <h3 className="text-sm font-black text-blue-950 flex items-center gap-2">
                四段國際航班與廉航行李重量規格表
                <span className="text-[10px] bg-blue-200/80 text-blue-900 font-bold px-2 py-0.5 rounded-full">
                  長榮 · 卡達 · 瑞安 · 阿提哈德
                </span>
              </h3>
              <p className="text-[11px] text-blue-900/70 font-medium">
                特別注意 10/21 瑞安航空手提限制 (40×30×20cm) 與託運配額
              </p>
            </div>
          </div>
          <button className="text-xs text-blue-800 font-bold px-2 py-1 rounded-lg hover:bg-blue-100 transition-colors">
            {showAirlineInfo ? '收起' : '展開'}
          </button>
        </div>

        {showAirlineInfo && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="mt-4 pt-3 border-t border-blue-200/60 space-y-3"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {AIRLINE_BAGGAGE_RULES.map((rule, idx) => (
                <div key={idx} className="bg-white/90 p-3.5 rounded-2xl border border-blue-200/60 shadow-xs">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-xs font-black text-blue-950">{rule.airline}</span>
                    <span className="text-[10px] font-extrabold bg-blue-100 text-blue-800 px-2 py-0.5 rounded-md">
                      {rule.date}
                    </span>
                  </div>
                  <div className="text-[11px] font-bold text-blue-900/90 mb-1">{rule.flight}</div>
                  <div className="text-[10px] text-blue-800/80 mb-2 font-medium">搭乘名單：{rule.members}</div>
                  <div className="space-y-1 text-[11px] bg-blue-50/60 p-2 rounded-xl border border-blue-100">
                    <div className="flex items-start gap-1">
                      <span className="font-bold text-blue-950 shrink-0">🧳 託運：</span>
                      <span className="text-blue-900">{rule.checked}</span>
                    </div>
                    <div className="flex items-start gap-1">
                      <span className="font-bold text-blue-950 shrink-0">🎒 手提：</span>
                      <span className="text-blue-900">{rule.carryon}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </div>

      {/* Member Filter Bar */}
      <div className="mb-4">
        <div className="text-[11px] font-black uppercase text-on-surface-variant tracking-wider mb-2 flex items-center gap-1.5">
          <User size={13} />
          成員分配篩選
        </div>
        <div className="flex flex-wrap gap-1.5">
          {['全部', '春香', '小許', '麗安', '頭家娘', '小花'].map((member) => (
            <button
              key={member}
              onClick={() => setSelectedAssignee(member)}
              className={cn(
                "px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer",
                selectedAssignee === member
                  ? "bg-[#0d9488] text-white shadow-sm"
                  : "bg-surface-container-low text-on-surface-variant hover:bg-surface-container hover:text-on-surface border border-outline-variant/10"
              )}
            >
              {member === '全部' ? '👥 全員項目' : member}
            </button>
          ))}
        </div>
      </div>

      {/* Category Pills & Search Bar */}
      <div className="space-y-3 mb-6">
        <div className="flex flex-wrap gap-2">
          {PACKING_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={cn(
                "px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer",
                selectedCategory === cat.id
                  ? "bg-slate-900 text-white shadow-sm"
                  : "bg-white text-on-surface-variant hover:bg-surface-container-low border border-outline-variant/20"
              )}
            >
              <span>{cat.icon}</span>
              <span>{cat.label}</span>
            </button>
          ))}
        </div>

        {/* Search input and action buttons */}
        <div className="flex flex-col sm:flex-row gap-2">
          <div className="relative flex-1">
            <input
              type="text"
              placeholder="搜尋行李物品名稱、關鍵字..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white border border-outline-variant/30 rounded-2xl px-4 py-2.5 text-xs text-on-surface focus:outline-none focus:ring-2 focus:ring-[#0d9488]/40 shadow-xs"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-2.5 text-xs text-outline hover:text-on-surface"
              >
                ✕
              </button>
            )}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleMarkFilteredAll}
              className="px-3.5 py-2.5 rounded-2xl bg-teal-50 hover:bg-teal-100 text-teal-800 border border-teal-200 text-xs font-bold transition-colors flex items-center gap-1.5 shrink-0"
              title="將目前篩選出的項目全部打勾"
            >
              <CheckCircle2 size={14} />
              勾選本頁全備妥
            </button>

            <button
              onClick={() => setShowAddModal(true)}
              className="px-3.5 py-2.5 rounded-2xl bg-[#0d9488] hover:bg-[#0f766e] text-white text-xs font-bold transition-colors flex items-center gap-1.5 shrink-0 shadow-sm"
            >
              <Plus size={14} />
              新增自訂物品
            </button>
          </div>
        </div>
      </div>

      {/* Main Checklist Items */}
      <div className="space-y-3">
        {filteredItems.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-3xl border border-dashed border-outline-variant/40 p-8">
            <Luggage size={48} className="mx-auto text-outline-variant mb-3 opacity-40" />
            <p className="text-sm font-bold text-on-surface-variant">找不到符合條件的行李項目</p>
            <p className="text-xs text-outline mt-1">請嘗試變更搜尋關鍵字或成員篩選條件</p>
          </div>
        ) : (
          filteredItems.map((item) => {
            const isChecked = !!checkedMap[item.id];
            const isCustom = item.id.startsWith('custom-');

            return (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                onClick={() => toggleItem(item.id)}
                className={cn(
                  "p-4 rounded-2xl border transition-all cursor-pointer flex items-start gap-3.5 shadow-xs select-none",
                  isChecked 
                    ? "bg-slate-50/70 border-slate-200 opacity-60" 
                    : "bg-white border-outline-variant/30 hover:border-[#0d9488]/40 hover:shadow-sm"
                )}
              >
                {/* Custom Checkbox */}
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleItem(item.id);
                  }}
                  className={cn(
                    "w-6 h-6 rounded-lg border-2 flex items-center justify-center transition-all shrink-0 mt-0.5",
                    isChecked 
                      ? "bg-[#0d9488] border-[#0d9488] text-white" 
                      : "border-outline hover:border-[#0d9488] bg-white"
                  )}
                >
                  {isChecked && <Check size={14} strokeWidth={3} />}
                </button>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <h4 className={cn(
                      "text-sm font-black text-on-surface tracking-tight",
                      isChecked && "line-through text-outline"
                    )}>
                      {item.title}
                    </h4>

                    {item.isMustHave && (
                      <span className="text-[10px] font-extrabold bg-rose-50 text-rose-700 border border-rose-200 px-1.5 py-0.5 rounded-md">
                        必備
                      </span>
                    )}

                    <span className="text-[10px] font-bold bg-slate-100 text-slate-700 px-2 py-0.5 rounded-md">
                      {item.assignee}
                    </span>

                    {isCustom && (
                      <span className="text-[10px] font-bold bg-amber-50 text-amber-700 border border-amber-200 px-1.5 py-0.5 rounded-md">
                        自訂
                      </span>
                    )}
                  </div>

                  {item.subtitle && (
                    <p className={cn(
                      "text-xs text-on-surface-variant font-medium",
                      isChecked && "text-outline"
                    )}>
                      {item.subtitle}
                    </p>
                  )}

                  {item.notes && (
                    <div className="mt-1.5 text-[11px] text-[#0f766e] bg-teal-50/60 border border-teal-100 px-2.5 py-1 rounded-xl inline-block font-medium">
                      💡 {item.notes}
                    </div>
                  )}
                </div>

                {/* Delete button if custom */}
                {isCustom && (
                  <button
                    onClick={(e) => handleDeleteCustomItem(item.id, e)}
                    className="p-1.5 text-outline hover:text-rose-600 rounded-lg transition-colors"
                    title="刪除此自訂項目"
                  >
                    <Trash2 size={15} />
                  </button>
                )}
              </motion.div>
            );
          })
        )}
      </div>

      {/* Add Custom Item Modal */}
      <AnimatePresence>
        {showAddModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-white rounded-3xl p-6 max-w-md w-full shadow-2xl border border-outline-variant/20"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-base font-black text-on-surface">新增專屬行李物品</h3>
                <button
                  onClick={() => setShowAddModal(false)}
                  className="p-1 rounded-lg text-outline hover:text-on-surface"
                >
                  ✕
                </button>
              </div>

              <form onSubmit={handleAddCustomItem} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-on-surface mb-1">
                    物品名稱 <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="例如：特定眼藥水、相機快門線、個人保健食品..."
                    value={newItemTitle}
                    onChange={(e) => setNewItemTitle(e.target.value)}
                    className="w-full bg-surface-container-lowest border border-outline-variant/40 rounded-xl px-3.5 py-2.5 text-xs text-on-surface focus:outline-none focus:ring-2 focus:ring-[#0d9488]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-on-surface mb-1">
                    規格或備註說明 (選填)
                  </label>
                  <input
                    type="text"
                    placeholder="例如：隨身攜帶、10/8 出發前放入背包..."
                    value={newItemSubtitle}
                    onChange={(e) => setNewItemSubtitle(e.target.value)}
                    className="w-full bg-surface-container-lowest border border-outline-variant/40 rounded-xl px-3.5 py-2.5 text-xs text-on-surface focus:outline-none focus:ring-2 focus:ring-[#0d9488]"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-on-surface mb-1">分類</label>
                    <select
                      value={newItemCategory}
                      onChange={(e) => setNewItemCategory(e.target.value as any)}
                      className="w-full bg-surface-container-lowest border border-outline-variant/40 rounded-xl px-3 py-2 text-xs text-on-surface focus:outline-none focus:ring-2 focus:ring-[#0d9488]"
                    >
                      <option value="docs">📄 重要證件與票券</option>
                      <option value="alpine">🏔️ 多洛米蒂山區衣物</option>
                      <option value="carryon">💊 隨身物品與常備藥</option>
                      <option value="electronics">🔌 3C電子與充電設備</option>
                      <option value="daily">👕 平地生活與日常</option>
                      <option value="custom">✍️ 私人專屬</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-on-surface mb-1">所屬成員</label>
                    <select
                      value={newItemAssignee}
                      onChange={(e) => setNewItemAssignee(e.target.value as any)}
                      className="w-full bg-surface-container-lowest border border-outline-variant/40 rounded-xl px-3 py-2 text-xs text-on-surface focus:outline-none focus:ring-2 focus:ring-[#0d9488]"
                    >
                      <option value="全員">👥 全員</option>
                      <option value="春香">春香</option>
                      <option value="小許">小許</option>
                      <option value="麗安">麗安</option>
                      <option value="頭家娘">頭家娘</option>
                      <option value="小花">小花</option>
                    </select>
                  </div>
                </div>

                <div className="flex items-center gap-2 pt-1">
                  <input
                    type="checkbox"
                    id="mustHave"
                    checked={newItemIsMust}
                    onChange={(e) => setNewItemIsMust(e.target.checked)}
                    className="w-4 h-4 rounded text-[#0d9488] focus:ring-[#0d9488]"
                  />
                  <label htmlFor="mustHave" className="text-xs font-bold text-on-surface">
                    標記為「必備 (Must Have)」物品
                  </label>
                </div>

                <div className="flex justify-end gap-2 pt-3 border-t border-outline-variant/20">
                  <button
                    type="button"
                    onClick={() => setShowAddModal(false)}
                    className="px-4 py-2 rounded-xl text-xs font-bold text-on-surface-variant hover:bg-surface-container"
                  >
                    取消
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2 rounded-xl text-xs font-bold bg-[#0d9488] text-white hover:bg-[#0f766e] shadow-sm"
                  >
                    確認加入清單
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
