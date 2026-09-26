import React, { useState, useRef, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import {
  ChevronLeft,
  ChevronRight,
  CalendarDays,
  X,
  Compass,
  Check,
  Ship,
  Car,
  Hotel,
  MapPin,
  UtensilsCrossed,
  Ticket,
  AlertTriangle,
  Clock,
  ArrowRight,
  FileText,
  ExternalLink,
  Info,
  ShieldAlert,
  Navigation,
} from 'lucide-react';
import {
  TWO_LAYER_DAYS,
  DayTwoLayer,
  ItineraryItem,
  PriceTicketItem,
  CATEGORY_CONFIG,
  CategoryType,
} from '../data/twoLayerItineraryData';
import { ACCOMMODATIONS, AccommodationItem } from '../data/travelPlan';
import { ItineraryDetailSheet } from '../components/ItineraryDetailSheet';

function getStayDetails(hotelName?: string, dateKey?: string): { stay: AccommodationItem; nightIndex: number } | null {
  if (!dateKey || !dateKey.includes('/')) return null;
  const parts = dateKey.split('/');
  const mm = parts[0].padStart(2, '0');
  const dd = parts[1].padStart(2, '0');
  const targetDate = `2026/${mm}/${dd}`;

  let stay: AccommodationItem | undefined;
  if (hotelName) {
    const clean = hotelName.replace(/入住：|回到住宿：|返回住宿：|回到\s*|（.*?）|\(.*?\)/g, '').trim().toLowerCase();
    const cleanNoSuffix = clean.replace(/hotel|house|villa|apartment/g, '').trim();
    stay = ACCOMMODATIONS.find(a => {
      const aLower = a.name.toLowerCase();
      return aLower.includes(clean) || clean.includes(aLower) ||
        (cleanNoSuffix.length >= 3 && aLower.includes(cleanNoSuffix));
    });
  }
  if (!stay) {
    stay = ACCOMMODATIONS.find(a => targetDate >= a.checkInDate && targetDate < a.checkOutDate);
  }
  if (!stay) return null;

  const checkInTime = new Date(stay.checkInDate.replace(/\//g, '-')).getTime();
  const currentTime = new Date(targetDate.replace(/\//g, '-')).getTime();
  const nightIndex = Math.max(1, Math.round((currentTime - checkInTime) / (1000 * 60 * 60 * 24)) + 1);

  return { stay, nightIndex };
}

export function Itinerary() {
  const [searchParams, setSearchParams] = useSearchParams();
  const dayParam = searchParams.get('day');

  // 依據 URL 參數初始化選取天數 (預設第 1 天 9/28，或 URL 指定 day)
  const initialIndex = (() => {
    if (dayParam !== null) {
      const parsedDayNum = parseInt(dayParam, 10);
      const idx = TWO_LAYER_DAYS.findIndex((d) => d.dayNum === parsedDayNum);
      if (idx !== -1) return idx;
    }
    return 0; // 預設第 1 個有效天數 (9/28)
  })();

  const [selectedDayIndex, setSelectedDayIndex] = useState<number>(initialIndex);
  const [activeItem, setActiveItem] = useState<ItineraryItem | null>(null);
  const [isDayPickerOpen, setIsDayPickerOpen] = useState<boolean>(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const buttonRefs = useRef<(HTMLButtonElement | null)[]>([]);

  // 同步 URL 參數變更
  useEffect(() => {
    if (dayParam !== null) {
      const parsed = parseInt(dayParam, 10);
      const idx = TWO_LAYER_DAYS.findIndex((d) => d.dayNum === parsed);
      if (idx !== -1 && idx !== selectedDayIndex) {
        setSelectedDayIndex(idx);
      }
    }
  }, [dayParam]);

  // 當切換天數時，自動讓水平切換按鈕滾動至可視中央
  useEffect(() => {
    const activeBtn = buttonRefs.current[selectedDayIndex];
    if (activeBtn && scrollContainerRef.current) {
      activeBtn.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center',
      });
    }
  }, [selectedDayIndex]);

  const activeDay: DayTwoLayer = TWO_LAYER_DAYS[selectedDayIndex] || TWO_LAYER_DAYS[0];

  const handleSelectDay = (idx: number) => {
    setSelectedDayIndex(idx);
    const targetDay = TWO_LAYER_DAYS[idx];
    if (targetDay) {
      setSearchParams({ day: targetDay.dayNum.toString() }, { replace: true });
    }
    setIsDayPickerOpen(false);
  };

  const handlePrevDay = () => {
    if (selectedDayIndex > 0) {
      handleSelectDay(selectedDayIndex - 1);
    }
  };

  const handleNextDay = () => {
    if (selectedDayIndex < TWO_LAYER_DAYS.length - 1) {
      handleSelectDay(selectedDayIndex + 1);
    }
  };

  // 跳至今天按鍵
  const handleJumpToToday = () => {
    const now = new Date();
    const month = now.getMonth() + 1;
    const date = now.getDate();
    const todayKey = `${month}/${date}`;

    const matchIdx = TWO_LAYER_DAYS.findIndex((d) => d.dateKey === todayKey);
    if (matchIdx !== -1) {
      handleSelectDay(matchIdx);
    } else {
      // 若目前不在旅遊期間內，預設跳至第 1 個行程日 (9/28)
      handleSelectDay(0);
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] pt-14 sm:pt-16 pb-28 text-stone-900">
      {/* 頂部快速日期切換列 (黏性吸頂，緊貼在固定 TopBar 之下) */}
      <div className="sticky top-14 sm:top-16 z-30 bg-[#FAF8F5]/95 backdrop-blur-md border-b border-stone-200/90 shadow-2xs px-2.5 sm:px-4 py-2">
        <div className="max-w-4xl mx-auto flex items-center gap-1.5 sm:gap-2">
          {/* 天數速選按鈕 (彈出完整目錄) */}
          <button
            onClick={() => setIsDayPickerOpen(true)}
            className="px-2 py-1.5 rounded-lg border border-stone-300 bg-white text-stone-800 hover:bg-stone-100 active:scale-95 transition-all shrink-0 shadow-2xs flex items-center gap-1 text-xs font-bold"
            title="開啟全部天數清單"
            aria-label="開啟全部天數清單"
          >
            <CalendarDays className="w-3.5 h-3.5 text-stone-700" />
            <span className="font-mono text-[11px]">D{activeDay.dayNum}</span>
          </button>

          {/* 上一天 */}
          <button
            onClick={handlePrevDay}
            disabled={selectedDayIndex === 0}
            className="p-1.5 rounded-lg border border-stone-200 bg-white text-stone-600 hover:text-stone-900 hover:bg-stone-50 disabled:opacity-25 disabled:pointer-events-none transition-colors shrink-0 shadow-2xs"
            aria-label="前一天"
            title="前一天"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          {/* 橫向滑動日期標籤 */}
          <div
            ref={scrollContainerRef}
            className="flex-1 flex gap-1.5 overflow-x-auto no-scrollbar py-0.5 scroll-smooth"
          >
            {TWO_LAYER_DAYS.map((day, idx) => {
              const isSelected = idx === selectedDayIndex;
              return (
                <button
                  key={day.dayNum}
                  ref={(el) => (buttonRefs.current[idx] = el)}
                  onClick={() => handleSelectDay(idx)}
                  className={`px-2.5 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap transition-all flex items-center gap-1.5 shrink-0 shadow-2xs cursor-pointer ${
                    isSelected
                      ? 'bg-stone-900 text-white shadow-xs scale-102 ring-2 ring-stone-900/20'
                      : 'bg-white text-stone-700 hover:bg-stone-100 hover:text-stone-950 border border-stone-200/90'
                  }`}
                >
                  <span
                    className={`text-[10px] px-1 py-0.2 rounded font-mono font-black ${
                      isSelected ? 'bg-white/20 text-white' : 'bg-stone-100 text-stone-600'
                    }`}
                  >
                    D{day.dayNum}
                  </span>
                  <span className="font-mono">{day.dateKey}</span>
                  <span className="text-[11px] opacity-75">({day.weekday})</span>
                  <span className="font-medium text-xs truncate max-w-[75px]">
                    {day.city.split(' ')[0]}
                  </span>
                </button>
              );
            })}
          </div>

          {/* 下一天 */}
          <button
            onClick={handleNextDay}
            disabled={selectedDayIndex === TWO_LAYER_DAYS.length - 1}
            className="p-1.5 rounded-lg border border-stone-200 bg-white text-stone-600 hover:text-stone-900 hover:bg-stone-50 disabled:opacity-25 disabled:pointer-events-none transition-colors shrink-0 shadow-2xs"
            aria-label="後一天"
            title="後一天"
          >
            <ChevronRight className="w-4 h-4" />
          </button>

          {/* 今天捷徑按鈕 */}
          <button
            onClick={handleJumpToToday}
            className="hidden sm:flex px-2 py-1.5 rounded-lg border border-stone-200 bg-white text-stone-700 hover:bg-stone-100 active:scale-95 transition-all shrink-0 shadow-2xs text-[11px] font-bold items-center gap-1"
            title="跳至今日"
          >
            <Compass className="w-3 h-3 text-stone-600" />
            <span>今天</span>
          </button>
        </div>
      </div>

      {/* 主要行程頁面容器：工具書排版風格 (白底、清楚分區、適量留白) */}
      <div className="max-w-3xl mx-auto px-4 pt-5 sm:pt-7 space-y-6">
        {/* 日期與主要路線頭部標題 */}
        <header className="bg-white rounded-2xl p-5 border border-stone-200/90 shadow-2xs">
          <div className="flex items-center justify-between gap-3">
            <div className="inline-flex items-center gap-2">
              <span className="font-mono text-xs font-black px-2.5 py-1 rounded-md bg-stone-900 text-white tracking-wider">
                DAY {activeDay.dayNum}
              </span>
              <span className="font-mono text-sm sm:text-base font-bold text-stone-600">
                {activeDay.dateKey} ({activeDay.weekday})
              </span>
            </div>
            <span className="text-xs sm:text-sm font-bold text-stone-700 bg-stone-100 px-2.5 py-1 rounded-full border border-stone-200">
              {activeDay.city}
            </span>
          </div>
          <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-stone-900 font-serif mt-2.5">
            {activeDay.subRoute}
          </h1>
        </header>

        {/* ======================================================== */}
        {/* 區塊 1: 當日行程摘要 (Summary Section)                   */}
        {/* ======================================================== */}
        <section className="bg-white rounded-2xl p-4 sm:p-5 border border-stone-200/90 shadow-2xs">
          <div className="flex items-center justify-between pb-3 border-b border-stone-100">
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 rounded-md bg-amber-100 text-amber-800 flex items-center justify-center">
                <FileText className="w-3.5 h-3.5" />
              </span>
              <h2 className="font-bold text-sm sm:text-base text-stone-900 tracking-tight">
                1. 當日行程摘要
              </h2>
            </div>
            <span className="text-[11px] font-semibold text-stone-400">當日概要</span>
          </div>

          {/* 總覽說明文字 */}
          <div className="mt-3 text-xs sm:text-sm text-stone-700 leading-relaxed">
            {activeDay.summarySection?.overview || activeDay.subRoute}
          </div>

          {/* 重點標籤 Pills */}
          {activeDay.summarySection?.badges && activeDay.summarySection.badges.length > 0 && (
            <div className="mt-3 flex flex-wrap gap-1.5">
              {activeDay.summarySection.badges.map((b, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-stone-100 text-stone-700 border border-stone-200/80"
                >
                  {b}
                </span>
              ))}
            </div>
          )}

          {/* 建議行程順序 / 建議步行動線 (清晰步驟流動圖) */}
          {activeDay.summarySection?.suggestedFlow && activeDay.summarySection.suggestedFlow.length > 0 && (
            <div className="mt-4 pt-3.5 border-t border-stone-100">
              <div className="flex items-center gap-1.5 text-xs font-bold text-stone-900 mb-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                <span>
                  {activeDay.dayNum === 1 ? '建議步行動線（老城）' : '建議行程順序'}
                </span>
              </div>
              <div className="flex flex-wrap items-center gap-1.5 text-xs">
                {activeDay.summarySection.suggestedFlow.map((step, idx) => (
                  <React.Fragment key={idx}>
                    <div className="flex items-center gap-1.5 bg-stone-50 border border-stone-200 px-2.5 py-1 rounded-lg text-stone-800 shadow-2xs font-medium">
                      <span className="w-4 h-4 rounded-full bg-stone-200 text-stone-700 text-[10px] font-mono font-bold flex items-center justify-center shrink-0">
                        {idx + 1}
                      </span>
                      <span>{step}</span>
                    </div>
                    {idx < (activeDay.summarySection?.suggestedFlow?.length || 0) - 1 && (
                      <ArrowRight className="w-3.5 h-3.5 text-stone-400 shrink-0 hidden sm:inline-block" />
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          )}
        </section>

        {/* ======================================================== */}
        {/* 區塊 2: 交通 (Traffic Section，含渡輪專屬交通卡)          */}
        {/* ======================================================== */}
        <section className="bg-white rounded-2xl p-4 sm:p-5 border border-stone-200/90 shadow-2xs space-y-3.5">
          <div className="flex items-center justify-between pb-3 border-b border-stone-100">
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 rounded-md bg-sky-100 text-sky-800 flex items-center justify-center">
                <Car className="w-3.5 h-3.5" />
              </span>
              <h2 className="font-bold text-sm sm:text-base text-stone-900 tracking-tight">
                2. 交通
              </h2>
            </div>
            <span className="text-[11px] font-semibold text-stone-500 bg-sky-50 px-2 py-0.5 rounded border border-sky-100">
              {activeDay.trafficItems.length} 項
            </span>
          </div>

          {/* 交通卡片列表 */}
          <div className="space-y-3">
            {activeDay.trafficItems.map((item, idx) => {
              const isClickable = item.hasDetail;

              // 特別醒目渲染：渡輪專屬交通卡 (9/29 Limone ↔ Malcesine)
              if (item.isFerryCard) {
                return (
                  <div
                    key={item.id || idx}
                    onClick={() => isClickable && setActiveItem(item)}
                    className="group relative rounded-xl border-2 border-sky-200 bg-linear-to-b from-sky-50/70 to-white p-4 shadow-xs transition-all hover:border-sky-400 hover:shadow-md cursor-pointer"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="space-y-1 min-w-0 flex-1">
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-bold bg-sky-600 text-white shadow-2xs">
                            <Ship className="w-3.5 h-3.5" />
                            <span>渡輪專屬交通卡</span>
                          </span>
                          <span className="text-xs font-semibold text-sky-900 bg-sky-100 px-2 py-0.5 rounded">
                            跨湖航線 · 來回約 €15
                          </span>
                        </div>
                        <h3 className="text-base sm:text-lg font-bold text-stone-900 pt-1">
                          {item.name}
                        </h3>
                        <p className="text-xs text-stone-600 leading-relaxed font-medium">
                          {item.shortInfo}
                        </p>
                      </div>
                      <span className="text-xl font-bold text-sky-600 shrink-0 group-hover:translate-x-1 transition-transform">
                        ›
                      </span>
                    </div>

                    {/* 渡輪規格網格 */}
                    <div className="mt-3 grid grid-cols-2 sm:grid-cols-4 gap-2 pt-3 border-t border-sky-100 text-xs">
                      <div className="bg-white/80 p-2 rounded-lg border border-sky-100">
                        <span className="text-[10px] text-stone-400 block font-bold">出發碼頭</span>
                        <span className="font-bold text-stone-800">Limone Centro</span>
                      </div>
                      <div className="bg-white/80 p-2 rounded-lg border border-sky-100">
                        <span className="text-[10px] text-stone-400 block font-bold">單程航程</span>
                        <span className="font-bold text-stone-800">約 25 分鐘</span>
                      </div>
                      <div className="bg-white/80 p-2 rounded-lg border border-sky-100">
                        <span className="text-[10px] text-stone-400 block font-bold">回程船班 (母版明確)</span>
                        <span className="font-bold text-sky-800">約 18:05</span>
                      </div>
                      <div className="bg-white/80 p-2 rounded-lg border border-sky-100">
                        <span className="text-[10px] text-stone-400 block font-bold">去程班次確認</span>
                        <span className="font-bold text-amber-700">出發前再次確認</span>
                      </div>
                    </div>

                    {/* 渡輪去程班次重要提醒 callout */}
                    <div className="mt-2.5 p-2.5 rounded-lg bg-amber-50/90 border border-amber-200/90 text-amber-900 text-xs flex items-start gap-2 leading-relaxed">
                      <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                      <span>
                        <strong>注意：</strong>
                        目前母版只有明確記錄回程 18:05，沒有完整記錄去程確切班次時間。因此「早上搭船前往 Malcesine，實際班次出發前再次確認」。
                      </span>
                    </div>
                  </div>
                );
              }

              // 特別醒目渲染：Hertz 租車專屬交通卡 (9/28)
              if (item.isCarRentalCard) {
                return (
                  <div
                    key={item.id || idx}
                    onClick={() => isClickable && setActiveItem(item)}
                    className="group relative rounded-xl border border-amber-300 bg-linear-to-b from-amber-50/50 to-white p-4 shadow-xs transition-all hover:border-amber-400 hover:shadow-md cursor-pointer"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="space-y-1 min-w-0 flex-1">
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-bold bg-amber-600 text-white shadow-2xs">
                            <Car className="w-3.5 h-3.5" />
                            <span>Hertz 租車專屬交通卡</span>
                          </span>
                          <span className="text-xs font-mono font-bold text-amber-950 bg-amber-100 px-2 py-0.5 rounded">
                            合約號：L661E7E0321
                          </span>
                          <span className="text-xs font-bold text-stone-700 bg-stone-100 px-2 py-0.5 rounded">
                            預估租金：€883.37
                          </span>
                        </div>
                        <h3 className="text-base sm:text-lg font-bold text-stone-900 pt-1">
                          {item.name}
                        </h3>
                        <p className="text-xs text-stone-600 leading-relaxed font-medium">
                          {item.shortInfo}
                        </p>
                      </div>
                      <span className="text-xl font-bold text-amber-600 shrink-0 group-hover:translate-x-1 transition-transform">
                        ›
                      </span>
                    </div>

                    {/* Hertz 規格網格 */}
                    <div className="mt-3 grid grid-cols-2 sm:grid-cols-4 gap-2 pt-3 border-t border-amber-100 text-xs">
                      <div className="bg-white/80 p-2 rounded-lg border border-amber-100">
                        <span className="text-[10px] text-stone-400 block font-bold">取車地點 (09:30)</span>
                        <span className="font-bold text-stone-800">MXP T1 Floor -1</span>
                      </div>
                      <div className="bg-white/80 p-2 rounded-lg border border-amber-100">
                        <span className="text-[10px] text-stone-400 block font-bold">車型規格</span>
                        <span className="font-bold text-stone-800">Opel Corsa 自排/無限里程</span>
                      </div>
                      <div className="bg-white/80 p-2 rounded-lg border border-amber-100">
                        <span className="text-[10px] text-stone-400 block font-bold">還車地點</span>
                        <span className="font-bold text-stone-800">Trieste Downtown Silos</span>
                      </div>
                      <div className="bg-white/80 p-2 rounded-lg border border-amber-100">
                        <span className="text-[10px] text-stone-400 block font-bold">還車日期</span>
                        <span className="font-bold text-stone-800">2026/10/06</span>
                      </div>
                    </div>

                    {/* 取車四寶必備證件 callout */}
                    <div className="mt-2.5 p-2 rounded-lg bg-stone-100/90 text-stone-800 text-xs flex items-center gap-2">
                      <ShieldAlert className="w-4 h-4 text-amber-700 shrink-0" />
                      <span>
                        <strong>取車必備：</strong>護照、台灣駕照正本、國際駕照、主駕駛人信用卡（缺一不可）
                      </span>
                    </div>
                  </div>
                );
              }

              // 特別醒目渲染：Monte Baldo 纜車交通卡 (9/29)
              if (item.isCableCarCard) {
                return (
                  <div
                    key={item.id || idx}
                    onClick={() => isClickable && setActiveItem(item)}
                    className="group relative rounded-xl border border-sky-200 bg-sky-50/30 p-4 shadow-2xs transition-all hover:border-sky-300 hover:shadow-xs cursor-pointer"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="space-y-1 min-w-0 flex-1">
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-bold bg-sky-700 text-white shadow-2xs">
                            <span>🚡 Monte Baldo 纜車專屬卡</span>
                          </span>
                          <span className="text-xs font-bold text-sky-900 bg-sky-100 px-2 py-0.5 rounded">
                            360° 旋轉纜車 · 來回約 €28 起
                          </span>
                        </div>
                        <h3 className="text-base sm:text-lg font-bold text-stone-900 pt-1">
                          {item.name}
                        </h3>
                        <p className="text-xs text-stone-600 leading-relaxed font-medium">
                          {item.shortInfo}
                        </p>
                      </div>
                      <span className="text-xl font-bold text-sky-700 shrink-0 group-hover:translate-x-1 transition-transform">
                        ›
                      </span>
                    </div>

                    <div className="mt-2.5 grid grid-cols-2 sm:grid-cols-3 gap-2 pt-2 border-t border-sky-100 text-xs">
                      <div className="bg-white p-2 rounded border border-sky-100">
                        <span className="text-[10px] text-stone-400 block font-bold">纜車站地址</span>
                        <span className="font-bold text-stone-800 truncate block">Via Navene Vecchia 12</span>
                      </div>
                      <div className="bg-white p-2 rounded border border-sky-100">
                        <span className="text-[10px] text-stone-400 block font-bold">特色亮點</span>
                        <span className="font-bold text-stone-800">360° 旋轉纜車俯瞰加爾達湖</span>
                      </div>
                      <div className="bg-white p-2 rounded border border-sky-100">
                        <span className="text-[10px] text-stone-400 block font-bold">行程建議</span>
                        <span className="font-bold text-stone-800">觀景拍照為主，不長距離健行</span>
                      </div>
                    </div>
                  </div>
                );
              }

              // 一般交通項目卡片
              return (
                <div
                  key={item.id || idx}
                  onClick={() => isClickable && setActiveItem(item)}
                  className={`p-3.5 rounded-xl border border-stone-200 bg-stone-50/40 hover:bg-stone-50 transition-all flex items-center justify-between gap-3 text-xs sm:text-sm ${
                    isClickable ? 'cursor-pointer hover:border-stone-300' : 'cursor-default'
                  }`}
                >
                  <div className="flex items-baseline gap-2.5 min-w-0 flex-1">
                    <span className="font-mono font-bold text-xs shrink-0 w-5 h-5 rounded-full bg-sky-900 text-white flex items-center justify-center shadow-2xs">
                      {item.order || idx + 1}
                    </span>
                    <div className="space-y-0.5 min-w-0 flex-1">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="font-bold text-stone-900">{item.name}</span>
                        {item.cardBadge && (
                          <span className="text-[10px] px-2 py-0.5 rounded bg-sky-100 text-sky-800 font-bold">
                            {item.cardBadge}
                          </span>
                        )}
                      </div>
                      {item.shortInfo && (
                        <p className="text-xs text-stone-600 font-medium leading-relaxed">
                          {item.shortInfo}
                        </p>
                      )}
                    </div>
                  </div>
                  {isClickable && (
                    <span className="text-lg font-bold text-sky-700 shrink-0 select-none pl-1">
                      ›
                    </span>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* ======================================================== */}
        {/* 區塊 3: 住宿 (Lodging Section)                           */}
        {/* ======================================================== */}
        {(() => {
          const stayInfo = getStayDetails(activeDay.hotelItems[0]?.name, activeDay.dateKey);
          const hasHotels = activeDay.hotelItems.length > 0 || !!stayInfo;
          if (!hasHotels) return null;

          const displayHotels: ItineraryItem[] = activeDay.hotelItems.length > 0
            ? activeDay.hotelItems
            : stayInfo
            ? [{
                id: `d${activeDay.dayNum}-stay-fallback`,
                category: 'hotel' as const,
                name: `續住：${stayInfo.stay.name}`,
                shortInfo: `續住第 ${stayInfo.nightIndex} 晚 · ${stayInfo.stay.roomType}`,
                hasDetail: true,
                detail: {
                  subtitle: `${stayInfo.stay.roomType} · ${stayInfo.stay.guestsText}`,
                  hours: `入住 ${stayInfo.stay.checkInTime} / 退房 ${stayInfo.stay.checkOutTime}`,
                  address: stayInfo.stay.address,
                  phone: stayInfo.stay.phone,
                  parking: stayInfo.stay.hasParking ? '設有私人專屬停車設施' : '詳見訂房資訊',
                  bookingCode: `${stayInfo.stay.channel} (${stayInfo.stay.bookingCode})`,
                  description: stayInfo.stay.desc,
                  price: `${stayInfo.stay.paymentStatus} ｜ ${stayInfo.stay.meals || ''}`,
                  notice: stayInfo.stay.notice,
                }
              }]
            : [];

          const badgeText = stayInfo
            ? (stayInfo.stay.nights > 1
                ? (stayInfo.nightIndex > 1 ? `續住第 ${stayInfo.nightIndex} 晚 · 不換飯店` : `入住首晚 · 共 ${stayInfo.stay.nights} 晚連住`)
                : '入住 1 晚')
            : (displayHotels[0]?.shortInfo || '住宿安排');

          return (
            <section className="bg-white rounded-2xl p-4 sm:p-5 border border-stone-200/90 shadow-2xs space-y-3.5">
              <div className="flex items-center justify-between pb-3 border-b border-stone-100">
                <div className="flex items-center gap-2">
                  <span className="w-6 h-6 rounded-md bg-emerald-100 text-emerald-800 flex items-center justify-center">
                    <Hotel className="w-3.5 h-3.5" />
                  </span>
                  <h2 className="font-bold text-sm sm:text-base text-stone-900 tracking-tight">
                    3. 住宿
                  </h2>
                </div>
                <span className="text-[11px] font-semibold text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded border border-emerald-100">
                  {badgeText}
                </span>
              </div>

              {/* 住宿卡片 */}
              <div className="space-y-3">
                {displayHotels.map((hotel, idx) => {
                  const itemStayInfo = getStayDetails(hotel.name, activeDay.dateKey);
                  const stay = itemStayInfo?.stay || stayInfo?.stay;
                  const nightIndex = itemStayInfo?.nightIndex || stayInfo?.nightIndex || 1;
                  const isClickable = hotel.hasDetail || !!stay;

                  // 若為機上飛行或無特定飯店安排 (如 Day 0)
                  if (!stay) {
                    return (
                      <div
                        key={hotel.id || idx}
                        onClick={() => isClickable && setActiveItem(hotel)}
                        className="rounded-xl border border-stone-200 bg-stone-50/50 p-4"
                      >
                        <h3 className="text-base font-bold text-stone-900">{hotel.name}</h3>
                        <p className="text-xs text-stone-600 mt-1">{hotel.shortInfo || '長榮直飛夜航班機，機上過夜休息'}</p>
                      </div>
                    );
                  }

                  const stayBadge = stay.nights > 1
                    ? (nightIndex > 1 ? `續住第 ${nightIndex} 晚 · 不換飯店` : `連住 ${stay.nights} 晚 · ${stay.guestsText}`)
                    : `入住 1 晚 · ${stay.guestsText}`;

                  const itemWithStayDetail: ItineraryItem = {
                    ...hotel,
                    name: hotel.name,
                    detail: {
                      ...hotel.detail,
                      subtitle: `${stay.roomType} · ${stay.guestsText}`,
                      hours: `入住 ${stay.checkInTime} / 退房 ${stay.checkOutTime}`,
                      address: stay.address || hotel.detail?.address,
                      phone: stay.phone || hotel.detail?.phone,
                      parking: stay.hasParking ? '設有私人專屬停車設施' : (hotel.detail?.parking || '詳見訂房資訊'),
                      bookingCode: stay.bookingCode ? `${stay.channel} (${stay.bookingCode})` : hotel.detail?.bookingCode,
                      description: stay.desc || hotel.detail?.description,
                      price: `${stay.paymentStatus} ｜ ${stay.meals || ''}`,
                      notice: stay.notice || hotel.detail?.notice,
                    }
                  };

                  return (
                    <div
                      key={hotel.id || idx}
                      onClick={() => isClickable && setActiveItem(itemWithStayDetail)}
                      className="rounded-xl border border-emerald-200 bg-linear-to-b from-emerald-50/40 to-white p-4 shadow-2xs hover:border-emerald-300 transition-all cursor-pointer group"
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div className="space-y-1 min-w-0 flex-1">
                          <div className="flex items-center gap-2 flex-wrap">
                            <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-700 text-white shadow-2xs">
                              {stayBadge}
                            </span>
                            <span className="text-xs font-bold text-emerald-900 bg-emerald-100 px-2 py-0.5 rounded">
                              {stay.roomType}
                            </span>
                            {stay.meals && (
                              <span className="text-xs font-bold text-amber-900 bg-amber-100/90 px-2 py-0.5 rounded">
                                {stay.meals.split('(')[0].trim()}
                              </span>
                            )}
                            {stay.hasParking && (
                              <span className="text-xs font-bold text-stone-700 bg-stone-100 px-2 py-0.5 rounded">
                                免費私人停車
                              </span>
                            )}
                          </div>
                          <h3 className="text-base sm:text-lg font-bold text-stone-900 pt-1">
                            {hotel.name}
                          </h3>
                          <p className="text-xs text-stone-600 font-medium">
                            地址：{stay.address || hotel.detail?.address || ''}
                          </p>
                        </div>
                        <span className="text-xl font-bold text-emerald-700 shrink-0 group-hover:translate-x-1 transition-transform">
                          ›
                        </span>
                      </div>

                      {/* 房型特色標籤 */}
                      {stay.amenityHighlights && stay.amenityHighlights.length > 0 && (
                        <div className="mt-3 flex flex-wrap gap-2 text-xs">
                          {stay.amenityHighlights.map((amenity, aIdx) => (
                            <span
                              key={aIdx}
                              className="px-2.5 py-1 rounded-md bg-white border border-emerald-200 text-emerald-900 font-bold"
                            >
                              {amenity}
                            </span>
                          ))}
                        </div>
                      )}

                      {/* 入住時間與特別提示 */}
                      <div className="mt-3 pt-3 border-t border-emerald-100 text-xs text-stone-700 grid grid-cols-1 sm:grid-cols-2 gap-2">
                        <div>
                          <span className="text-[10px] text-stone-400 block font-bold">入住與退房時間</span>
                          <span className="font-semibold text-stone-900">
                            入住：{stay.checkInTime} ｜ 退房：{stay.checkOutTime}
                          </span>
                          {stay.nights > 1 && (
                            <span className="text-[11px] text-emerald-700 block font-medium mt-0.5">
                              {nightIndex > 1
                                ? `續住第 ${nightIndex} 晚 · 不換飯店免搬行李`
                                : `首晚入住 · 共 ${stay.nights} 晚連住`}
                            </span>
                          )}
                        </div>
                        <div>
                          <span className="text-[10px] text-stone-400 block font-bold">訂單確認資訊</span>
                          <div className="font-semibold text-emerald-900 flex items-center gap-1.5 flex-wrap">
                            <span>{stay.channel} #{stay.bookingCode}</span>
                            <span className="text-xs text-emerald-700 font-medium">({stay.paymentStatus})</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>
          );
        })()}

        {/* ======================================================== */}
        {/* 區塊 4: 景點 (Spots Section)                            */}
        {/* ======================================================== */}
        <section className="bg-white rounded-2xl p-4 sm:p-5 border border-stone-200/90 shadow-2xs space-y-3.5">
          <div className="flex items-center justify-between pb-3 border-b border-stone-100">
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 rounded-md bg-amber-100 text-amber-800 flex items-center justify-center">
                <MapPin className="w-3.5 h-3.5" />
              </span>
              <h2 className="font-bold text-sm sm:text-base text-stone-900 tracking-tight">
                4. 景點
              </h2>
            </div>
            <span className="text-[11px] font-semibold text-amber-800 bg-amber-50 px-2 py-0.5 rounded border border-amber-100">
              {activeDay.spotItems.length} 處景點
            </span>
          </div>

          {/* 景點項目清單 */}
          {activeDay.spotItems.length > 0 ? (
            <div className="space-y-2.5">
              {activeDay.spotItems.map((item, idx) => {
                const isClickable = item.hasDetail;

                return (
                  <div
                    key={item.id || idx}
                    onClick={() => isClickable && setActiveItem(item)}
                    className={`p-3.5 rounded-xl border border-stone-200 bg-stone-50/40 hover:bg-stone-50 transition-all flex items-start justify-between gap-3 text-xs sm:text-sm ${
                      isClickable ? 'cursor-pointer hover:border-stone-300' : 'cursor-default'
                    }`}
                  >
                    <div className="flex items-start gap-2.5 min-w-0 flex-1">
                      <span className="font-mono font-bold text-xs shrink-0 w-5 h-5 rounded-full bg-amber-700 text-white flex items-center justify-center shadow-2xs mt-0.5">
                        {item.order || idx + 1}
                      </span>
                      <div className="space-y-1 min-w-0 flex-1">
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="font-bold text-stone-900 text-sm">{item.name}</span>
                          {item.cardBadge && (
                            <span className="text-[10px] px-2 py-0.5 rounded bg-amber-100 text-amber-900 font-bold">
                              {item.cardBadge}
                            </span>
                          )}
                        </div>
                        {item.shortInfo && (
                          <p className="text-xs text-stone-600 font-medium leading-relaxed">
                            {item.shortInfo}
                          </p>
                        )}
                      </div>
                    </div>
                    {isClickable && (
                      <span className="text-lg font-bold text-amber-700 shrink-0 select-none pl-1 mt-0.5">
                        ›
                      </span>
                    )}
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="p-3.5 rounded-xl border border-stone-200 bg-stone-50/60 text-xs text-stone-600 font-medium">
              今日主要為城際交通接駁、航班或機場辦理手續，行程景致請參閱上方「交通」與「住宿」完整指引。
            </div>
          )}
        </section>

        {/* ======================================================== */}
        {/* 區塊 5: 餐廳／甜點 (Dining Section)                      */}
        {/* ======================================================== */}
        <section className="bg-white rounded-2xl p-4 sm:p-5 border border-stone-200/90 shadow-2xs space-y-3.5">
          <div className="flex items-center justify-between pb-3 border-b border-stone-100">
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 rounded-md bg-orange-100 text-orange-800 flex items-center justify-center">
                <UtensilsCrossed className="w-3.5 h-3.5" />
              </span>
              <h2 className="font-bold text-sm sm:text-base text-stone-900 tracking-tight">
                5. 餐廳／甜點
              </h2>
            </div>
            <span className="text-[11px] font-semibold text-orange-800 bg-orange-50 px-2 py-0.5 rounded border border-orange-100">
              {activeDay.foodItems.length} 項
            </span>
          </div>

          {/* 9/29 特別母版店家說明提醒 */}
          {activeDay.dayNum === 2 && (
            <div className="p-3 rounded-xl bg-orange-50/70 border border-orange-200 text-orange-950 text-xs leading-relaxed flex items-start gap-2">
              <Info className="w-4 h-4 text-orange-600 shrink-0 mt-0.5" />
              <span>
                <strong>母版備註：</strong>
                目前母版沒有正式指定 9/29 Malcesine 的餐廳與冰淇淋店，因此網站不要自行填入未確認店家。午餐可在老城或湖畔依喜好挑選（推薦湖魚、海鮮、義麵、披薩）；晚餐若回 Limone 後再吃，也可以使用前一天備選：Ristorante Gemma 或 La Mela d'Oro。
              </span>
            </div>
          )}

          {/* 餐廳／甜點卡片清單 */}
          {activeDay.foodItems.length > 0 ? (
            <div className="space-y-2.5">
              {activeDay.foodItems.map((item, idx) => {
                const isClickable = item.hasDetail;

                return (
                  <div
                    key={item.id || idx}
                    onClick={() => isClickable && setActiveItem(item)}
                    className={`p-3.5 rounded-xl border border-stone-200 bg-stone-50/40 hover:bg-stone-50 transition-all flex items-start justify-between gap-3 text-xs sm:text-sm ${
                      isClickable ? 'cursor-pointer hover:border-stone-300' : 'cursor-default'
                    }`}
                  >
                    <div className="flex items-start gap-2.5 min-w-0 flex-1">
                      <span className="font-mono font-bold text-xs shrink-0 w-5 h-5 rounded-full bg-orange-800 text-white flex items-center justify-center shadow-2xs mt-0.5">
                        {item.order || idx + 1}
                      </span>
                      <div className="space-y-1 min-w-0 flex-1">
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="font-bold text-stone-900 text-sm">{item.name}</span>
                          {item.cardBadge && (
                            <span className="text-[10px] px-2 py-0.5 rounded bg-orange-100 text-orange-900 font-bold">
                              {item.cardBadge}
                            </span>
                          )}
                        </div>
                        {item.shortInfo && (
                          <p className="text-xs text-stone-600 font-medium leading-relaxed">
                            {item.shortInfo}
                          </p>
                        )}
                      </div>
                    </div>
                    {isClickable && (
                      <span className="text-lg font-bold text-orange-700 shrink-0 select-none pl-1 mt-0.5">
                        ›
                      </span>
                    )}
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="p-3.5 rounded-xl border border-stone-200 bg-stone-50/60 text-xs text-stone-600 font-medium">
              今日餐飲依行程節奏彈性安排（可於下榻住宿、市區廣場露天咖啡座或沿途精選小館自由享用）。
            </div>
          )}
        </section>

        {/* ======================================================== */}
        {/* 區塊 6: 停車／碼頭／票價 (Logistics, Parking & Tickets)  */}
        {/* ======================================================== */}
        <section className="bg-white rounded-2xl p-4 sm:p-5 border border-stone-200/90 shadow-2xs space-y-3.5">
          <div className="flex items-center justify-between pb-3 border-b border-stone-100">
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 rounded-md bg-purple-100 text-purple-800 flex items-center justify-center">
                <Ticket className="w-3.5 h-3.5" />
              </span>
              <h2 className="font-bold text-sm sm:text-base text-stone-900 tracking-tight">
                6. 停車／碼頭／票價
              </h2>
            </div>
            <span className="text-[11px] font-semibold text-purple-800 bg-purple-50 px-2 py-0.5 rounded border border-purple-100">
              {activeDay.priceTicketItems ? activeDay.priceTicketItems.length : 0} 項
            </span>
          </div>

          {/* 票價與停車資訊清單 */}
          {activeDay.priceTicketItems && activeDay.priceTicketItems.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {activeDay.priceTicketItems.map((p, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-xl border border-stone-200 bg-stone-50/50 flex flex-col justify-between space-y-1.5"
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-bold text-xs sm:text-sm text-stone-900">{p.title}</span>
                    <span className="font-mono text-xs font-black text-purple-800 bg-purple-100 px-2 py-0.5 rounded shrink-0">
                      {p.cost}
                    </span>
                  </div>
                  {p.detail && (
                    <p className="text-[11px] text-stone-600 font-medium leading-relaxed">
                      {p.detail}
                    </p>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <div className="text-xs text-stone-500 py-2">
              詳情請參閱各項交通與景點備註。
            </div>
          )}
        </section>

        {/* ======================================================== */}
        {/* 區塊 7: 重要提醒 (Important Alerts Section)              */}
        {/* ======================================================== */}
        <section className="bg-white rounded-2xl p-4 sm:p-5 border border-stone-200/90 shadow-2xs space-y-3.5">
          <div className="flex items-center justify-between pb-3 border-b border-stone-100">
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 rounded-md bg-rose-100 text-rose-800 flex items-center justify-center">
                <AlertTriangle className="w-3.5 h-3.5" />
              </span>
              <h2 className="font-bold text-sm sm:text-base text-stone-900 tracking-tight">
                7. 重要提醒
              </h2>
            </div>
            <span className="text-[11px] font-semibold text-rose-800 bg-rose-50 px-2 py-0.5 rounded border border-rose-100">
              {activeDay.alertItems.length} 條提醒
            </span>
          </div>

          {/* 提醒項目：醒目分開呈現，不塞進正文 */}
          <div className="space-y-3">
            {activeDay.alertItems.map((alert, idx) => (
              <div
                key={alert.id || idx}
                className="p-3.5 rounded-xl border-l-4 border-l-rose-500 border-stone-200 border bg-rose-50/30 space-y-1.5"
              >
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="font-bold text-xs sm:text-sm text-stone-900">
                    {alert.name}
                  </span>
                  {alert.cardBadge && (
                    <span className="text-[10px] px-2 py-0.2 rounded bg-rose-100 text-rose-800 font-bold">
                      {alert.cardBadge}
                    </span>
                  )}
                </div>
                <p className="text-xs text-stone-700 leading-relaxed font-medium">
                  {alert.detail?.description || alert.shortInfo}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 頁尾提示 */}
        <div className="text-center text-[11px] text-stone-400 py-3">
          旅遊工具書格式 · 點擊任一卡片可展開完整第二層地圖與詳細資訊
        </div>
      </div>

      {/* 天數速查目錄彈窗 */}
      {isDayPickerOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs">
          <div className="bg-white w-full max-w-lg max-h-[85vh] rounded-2xl shadow-xl flex flex-col overflow-hidden border border-stone-200">
            {/* 彈窗標題列 */}
            <div className="px-4 py-3 border-b border-stone-200 flex items-center justify-between bg-stone-50">
              <div className="flex items-center gap-2">
                <CalendarDays className="w-4 h-4 text-stone-700" />
                <h3 className="text-sm font-black text-stone-900">
                  選擇行程天數 (共 {TWO_LAYER_DAYS.length} 天)
                </h3>
              </div>
              <button
                onClick={() => setIsDayPickerOpen(false)}
                className="p-1 rounded-lg text-stone-500 hover:text-stone-900 hover:bg-stone-200 transition-colors"
                aria-label="關閉選單"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* 天數清單直列滾動 */}
            <div className="p-3 overflow-y-auto space-y-1.5 divide-y divide-stone-100">
              {TWO_LAYER_DAYS.map((d, idx) => {
                const isSelected = idx === selectedDayIndex;
                return (
                  <button
                    key={d.dayNum}
                    onClick={() => handleSelectDay(idx)}
                    className={`w-full text-left p-2.5 rounded-xl transition-all flex items-center justify-between gap-3 ${
                      isSelected
                        ? 'bg-stone-900 text-white shadow-xs'
                        : 'hover:bg-stone-100 text-stone-800'
                    }`}
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <span
                        className={`font-mono text-xs font-black px-2 py-0.5 rounded ${
                          isSelected ? 'bg-white/20 text-white' : 'bg-stone-200 text-stone-700'
                        }`}
                      >
                        DAY {d.dayNum}
                      </span>
                      <div className="min-w-0">
                        <div className="flex items-center gap-1.5 font-bold text-xs sm:text-sm">
                          <span className="font-mono">{d.dateKey}</span>
                          <span className="text-[11px] opacity-80">({d.weekday})</span>
                          <span className="truncate">{d.city}</span>
                        </div>
                        <p
                          className={`text-[11px] truncate ${
                            isSelected ? 'text-stone-300' : 'text-stone-500'
                          }`}
                        >
                          {d.subRoute}
                        </p>
                      </div>
                    </div>
                    {isSelected && <Check className="w-4 h-4 shrink-0 text-white" />}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* 第二層：彈出式詳細資料抽屜 (Slide-over Drawer / Bottom Sheet) */}
      <ItineraryDetailSheet item={activeItem} onClose={() => setActiveItem(null)} />
    </div>
  );
}
