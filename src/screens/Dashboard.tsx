import { useState, useEffect, ElementType } from 'react';
import { 
  Plane, Hotel, Car, Calendar, ChevronRight, Wallet, ShieldAlert, 
  Sun, PiggyBank, Navigation, Sparkles, MapPin, Layers, Luggage, ClipboardList
} from 'lucide-react';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { db } from '../lib/firebase';
import { collection, onSnapshot } from 'firebase/firestore';
import { ITINERARY_DAYS } from '../data/itineraryData';
import { cn } from '../lib/utils';

export function Dashboard() {
  const navigate = useNavigate();
  const [balance, setBalance] = useState<number | null>(null);
  const [previewDayIndex, setPreviewDayIndex] = useState(0); // Default to Day 1 (9/28 Limone)

  const featuredDay = ITINERARY_DAYS[previewDayIndex] || ITINERARY_DAYS[0];

  // 監聽公積金記帳餘額
  useEffect(() => {
    try {
      const unsubscribe = onSnapshot(collection(db, 'transactions'), (snapshot) => {
        let totalIncome = 0;
        let totalExpense = 0;
        snapshot.docs.forEach(doc => {
          const data = doc.data();
          const amt = Number(data.amount) || 0;
          if (data.type === 'income') totalIncome += amt;
          else if (data.type === 'expense') totalExpense += amt;
        });
        if (snapshot.docs.length > 0) {
          setBalance(totalIncome - totalExpense);
        }
      }, () => {
        // Firebase 離線或未初始化時容錯
      });
      return () => unsubscribe();
    } catch {
      // 容錯
    }
  }, []);

  return (
    <div className="min-h-screen bg-[#faf8f5] pt-20 px-3.5 sm:px-4 pb-44 max-w-xl mx-auto space-y-4">
      {/* 頂部雜誌風標題 */}
      <section className="px-1 flex items-center justify-between gap-3">
        <div>
          <span className="text-primary font-black text-xs uppercase tracking-widest block font-mono mb-0.5">
            2026 AUTUMN GRAND TOUR
          </span>
          <h1 className="text-2xl font-black text-on-surface tracking-tight font-sans leading-[1.15]">
            <span className="block">ITALY ×</span>
            <span className="block">CROATIA</span>
          </h1>
        </div>
        <span className="text-[11px] font-mono font-bold bg-primary/10 text-primary px-2.5 py-1 rounded-full shrink-0 whitespace-nowrap">
          9/27 - 10/24 (28天)
        </span>
      </section>

      {/* 兩張並排資訊卡：今日天氣 + 公積金餘額 */}
      <div className="grid grid-cols-2 gap-3 pt-0.5">
        {/* 左：今日天氣 */}
        <div 
          className="bg-surface-container-lowest rounded-2xl p-4 flex flex-col justify-between border border-outline-variant/15 shadow-xs"
        >
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-on-surface-variant">多洛米蒂 / 加爾達湖</span>
            <Sun size={18} className="text-amber-500" />
          </div>
          <div className="my-1.5">
            <div className="text-2xl sm:text-3xl font-black text-on-surface font-mono tracking-tight">
              18°C
            </div>
            <div className="text-xs font-bold text-on-surface-variant mt-0.5">
              晴朗宜人 · 秋高氣爽
            </div>
          </div>
        </div>

        {/* 右：公積金餘額 */}
        <div 
          onClick={() => navigate('/budget')}
          className="bg-surface-container-lowest rounded-2xl p-4 flex flex-col justify-between border border-outline-variant/15 shadow-xs select-none cursor-pointer hover:border-primary/40 transition-colors"
        >
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-on-surface-variant">公積金餘額</span>
            <PiggyBank size={18} className="text-primary" />
          </div>
          <div className="my-1.5">
            <div className="text-2xl sm:text-3xl font-black text-primary font-mono tracking-tight">
              € {balance !== null ? balance.toLocaleString('en-US') : '0'}
            </div>
            <div className="text-xs font-bold text-on-surface-variant mt-0.5 flex items-center gap-1">
              <span>查看記帳明細</span>
              <ChevronRight size={12} />
            </div>
          </div>
        </div>
      </div>

      {/* ======================= DAY CARD 首頁精選卡片 ======================= */}
      <section className="space-y-2 pt-1">
        <div className="flex items-center justify-between px-1">
          <span className="text-xs font-black text-primary uppercase font-mono tracking-wider flex items-center gap-1.5">
            <Sparkles size={13} />
            <span>精選行程 DAY CARD</span>
          </span>
          <button
            onClick={() => navigate(`/itinerary?day=${featuredDay.dayNum}`)}
            className="text-xs font-bold text-on-surface-variant hover:text-primary flex items-center gap-0.5 transition-colors"
          >
            <span>完整日程</span>
            <ChevronRight size={13} />
          </button>
        </div>

        {/* 快速切換天數 (全 27 天) */}
        <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar pb-1">
          {ITINERARY_DAYS.map((d, index) => (
            <button
              key={d.dayNum}
              onClick={() => setPreviewDayIndex(index)}
              className={cn(
                "px-2.5 py-1 text-[11px] font-mono font-bold rounded-xl shrink-0 transition-all border",
                previewDayIndex === index 
                  ? "bg-primary text-white border-primary shadow-2xs" 
                  : "bg-surface-container-lowest text-on-surface-variant border-outline-variant/15 hover:border-primary/30"
              )}
            >
              D{d.dayNum} {d.month}/{d.day}
            </button>
          ))}
        </div>

        {/* 精選 Day Card 本體 */}
        <article className="rounded-3xl border border-outline-variant/20 bg-surface-container-lowest shadow-xs overflow-hidden">
          <div className="p-4 sm:p-5 space-y-3">
            <div className="flex items-start justify-between gap-3">
              {/* 左側：大型日期塊 (09 / 28 / MON) */}
              <div className="flex flex-col items-center justify-center bg-[#f7f2e9] text-[#22201e] px-3.5 py-2.5 rounded-2xl border border-[#e8dfcf] shrink-0 min-w-[64px]">
                <span className="font-mono font-black text-base leading-none text-[#b84534]">
                  {featuredDay.month}
                </span>
                <span className="font-mono font-black text-2xl sm:text-3xl leading-tight text-[#22201e]">
                  {featuredDay.day}
                </span>
                <span className="font-mono font-bold text-[10px] tracking-widest text-[#5e5852] uppercase mt-0.5">
                  {featuredDay.weekday}
                </span>
              </div>

              {/* 中間：目的地、副標題、住宿 */}
              <div className="flex-1 min-w-0 space-y-1.5 pt-0.5">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-md bg-primary/10 text-primary">
                    DAY {featuredDay.dayNum}
                  </span>
                  <span className="text-[11px] font-mono font-bold text-on-surface-variant">
                    {featuredDay.date}
                  </span>
                </div>

                <h3 className="font-mono font-black text-base sm:text-lg text-on-surface tracking-tight leading-snug">
                  {featuredDay.englishDestination}
                </h3>

                <p className="text-xs font-bold text-on-surface-variant leading-normal">
                  {featuredDay.chineseSubtitle}
                </p>

                {/* 住宿提示 */}
                <div className="flex items-center gap-1.5 text-xs text-emerald-800 font-bold bg-emerald-50 px-2.5 py-1 rounded-xl border border-emerald-200/60 inline-flex max-w-full truncate">
                  <Hotel size={13} className="shrink-0 text-emerald-700" />
                  <span className="truncate">住宿：{featuredDay.hotelName}</span>
                </div>
              </div>
            </div>

            {/* 亮點標籤列 & 查看今日行程按鈕 */}
            <div className="pt-3 border-t border-outline-variant/10 flex flex-wrap items-center justify-between gap-2">
              <div className="flex flex-wrap gap-1.5 items-center">
                {featuredDay.highlights.slice(0, 3).map((h, i) => (
                  <span 
                    key={i} 
                    className="text-[10px] font-medium text-on-surface-variant bg-surface-container-low px-2 py-0.5 rounded-md border border-outline-variant/10"
                  >
                    {h}
                  </span>
                ))}
              </div>

              <button 
                onClick={() => navigate(`/itinerary?day=${featuredDay.dayNum}`)}
                className="text-xs font-black px-3.5 py-2 rounded-xl bg-primary text-white hover:bg-primary-container active:scale-95 shadow-2xs transition-all flex items-center gap-1 min-h-[36px]"
              >
                <span>查看今日行程</span>
                <ChevronRight size={13} />
              </button>
            </div>
          </div>
        </article>
      </section>

      {/* 6 個精簡功能按鈕 */}
      <div className="grid grid-cols-1 gap-2.5 pt-1">
        {/* 1. 每日行程 */}
        <NavCard 
          icon={Calendar}
          label="每日行程"
          bgColor="#b84534"
          onClick={() => navigate('/itinerary')}
        />

        {/* 2. 交通 */}
        <NavCard 
          icon={Car}
          label="交通"
          bgColor="#2b6d86"
          onClick={() => navigate('/car-rental')}
        />

        {/* 3. 住宿 */}
        <NavCard 
          icon={Hotel}
          label="住宿"
          bgColor="#536838"
          onClick={() => navigate('/accommodation')}
        />

        {/* 4. 航班 */}
        <NavCard 
          icon={Plane}
          label="航班"
          bgColor="#1887C0"
          onClick={() => navigate('/flights')}
        />

        {/* 5. 旅費 */}
        <NavCard 
          icon={Wallet}
          label="旅費"
          bgColor="#8c3a30"
          onClick={() => navigate('/budget')}
        />

        {/* 6. 行李準備清單 */}
        <NavCard 
          icon={Luggage}
          label="五人行李清單"
          bgColor="#0d9488"
          onClick={() => navigate('/packing')}
        />

        {/* 7. 注意事項 */}
        <NavCard 
          icon={ShieldAlert}
          label="注意事項"
          bgColor="#4D7184"
          onClick={() => navigate('/airport-info')}
        />
      </div>
    </div>
  );
}

interface NavCardProps {
  icon: ElementType;
  label: string;
  bgColor: string;
  onClick: () => void;
}

function NavCard({ icon: Icon, label, bgColor, onClick }: NavCardProps) {
  return (
    <motion.button 
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className="relative flex items-center justify-between w-full text-left transition-all duration-100 min-h-[58px] rounded-2xl px-4 shadow-xs hover:brightness-105 active:scale-[0.99] cursor-pointer"
      style={{
        backgroundColor: bgColor,
      }}
    >
      <div className="flex items-center gap-3.5">
        <div 
          className="flex items-center justify-center shrink-0 w-10 h-10 rounded-xl"
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.2)',
          }}
        >
          <Icon size={20} className="text-white" strokeWidth={2.2} />
        </div>
        <span className="text-white text-base font-bold tracking-normal font-sans">
          {label}
        </span>
      </div>
      <ChevronRight size={18} className="text-white/80 shrink-0" strokeWidth={2.5} />
    </motion.button>
  );
}
