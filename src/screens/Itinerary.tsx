import React, { useState, useRef, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ChevronLeft, ChevronRight, CalendarDays, X, Compass, Check } from 'lucide-react';
import { TWO_LAYER_DAYS, DayTwoLayer, ItineraryItem, CATEGORY_CONFIG, CategoryType } from '../data/twoLayerItineraryData';
import { ItineraryDetailSheet } from '../components/ItineraryDetailSheet';

export function Itinerary() {
  const [searchParams, setSearchParams] = useSearchParams();
  const dayParam = searchParams.get('day');
  
  // 依據 URL 參數初始化選取天數 (預設第 1 天 9/28，或 URL 指定 day)
  const initialIndex = (() => {
    if (dayParam !== null) {
      const parsedDayNum = parseInt(dayParam, 10);
      const idx = TWO_LAYER_DAYS.findIndex(d => d.dayNum === parsedDayNum);
      if (idx !== -1) return idx;
    }
    return 0; // 預設第 1 個有效天數
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
      const idx = TWO_LAYER_DAYS.findIndex(d => d.dayNum === parsed);
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
        inline: 'center'
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

    const matchIdx = TWO_LAYER_DAYS.findIndex(d => d.dateKey === todayKey);
    if (matchIdx !== -1) {
      handleSelectDay(matchIdx);
    } else {
      // 若目前不在旅遊期間內，預設跳至第 1 個行程日
      handleSelectDay(0);
    }
  };

  // 渲染單個分類區塊 (交通 / 景點 / 餐飲 / 住宿 / 提醒)
  const renderCategoryBlock = (category: CategoryType, items: ItineraryItem[]) => {
    if (!items || items.length === 0) return null;
    const config = CATEGORY_CONFIG[category];

    return (
      <section
        className="rounded-xl overflow-hidden shadow-2xs border transition-all"
        style={{
          backgroundColor: config.bg,
          borderColor: config.border,
        }}
      >
        {/* 分類標題列 */}
        <div
          className="px-3.5 py-2 font-bold text-xs sm:text-sm tracking-wide flex items-center justify-between"
          style={{ color: config.text }}
        >
          <span>{config.label}</span>
          <span className="text-[11px] font-medium opacity-80">
            {items.length} 項
          </span>
        </div>

        {/* 項目直式清單 */}
        <div className="flex flex-col">
          {items.map((item, idx) => {
            const isClickable = item.hasDetail;

            return (
              <div
                key={item.id || idx}
                onClick={() => isClickable && setActiveItem(item)}
                className={`px-3.5 py-2.5 flex items-center justify-between gap-3 text-xs sm:text-sm border-t transition-colors ${
                  isClickable
                    ? 'cursor-pointer hover:bg-black/4 active:bg-black/8'
                    : 'cursor-default'
                }`}
                style={{
                  borderTopColor: config.divider,
                }}
              >
                {/* 左側：編號 (表示那個先去) + 名稱 + 關鍵短註 */}
                <div className="flex items-baseline gap-2.5 min-w-0 flex-1">
                  {item.order && (category !== 'hotel' || items.length > 1) && (
                    <span className="font-mono font-bold text-xs shrink-0 w-5 h-5 rounded-full bg-stone-900 text-white flex items-center justify-center shadow-2xs">
                      {item.order}
                    </span>
                  )}
                  <div className="flex flex-wrap items-baseline gap-x-2 gap-y-0.5 min-w-0 flex-1">
                    <span
                      className="font-bold tracking-tight text-stone-900 truncate"
                    >
                      {item.name}
                    </span>
                    {item.shortInfo && (
                      <span className="text-xs text-stone-600 font-medium truncate">
                        {item.shortInfo}
                      </span>
                    )}
                  </div>
                </div>

                {/* 右側：小箭頭符號 › (整行可點擊) */}
                {isClickable && (
                  <span
                    className="text-base sm:text-lg font-bold shrink-0 leading-none select-none pl-1 transition-transform group-hover:translate-x-0.5"
                    style={{ color: config.chevron }}
                  >
                    ›
                  </span>
                )}
              </div>
            );
          })}
        </div>
      </section>
    );
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] pt-14 sm:pt-16 pb-24 text-stone-900">
      {/* 頂部快速日期切換列 (黏性吸頂，緊貼在固定 TopBar 56px/64px 之下) */}
      <div className="sticky top-14 sm:top-16 z-30 bg-[#FAF8F5]/95 backdrop-blur-md border-b border-stone-200/90 shadow-2xs px-2.5 sm:px-4 py-2">
        <div className="max-w-3xl mx-auto flex items-center gap-1.5 sm:gap-2">
          {/* 天數速選按鈕 (彈出 27 天完整目錄) */}
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

          {/* 橫向滑動日期標籤 (所有 27 天按鍵) */}
          <div
            ref={scrollContainerRef}
            className="flex-1 flex gap-1.5 overflow-x-auto no-scrollbar py-0.5 scroll-smooth"
          >
            {TWO_LAYER_DAYS.map((day, idx) => {
              const isSelected = idx === selectedDayIndex;
              return (
                <button
                  key={day.dayNum}
                  ref={el => (buttonRefs.current[idx] = el)}
                  onClick={() => handleSelectDay(idx)}
                  className={`px-2.5 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap transition-all flex items-center gap-1.5 shrink-0 shadow-2xs cursor-pointer ${
                    isSelected
                      ? 'bg-stone-900 text-white shadow-xs scale-102 ring-2 ring-stone-900/20'
                      : 'bg-white text-stone-700 hover:bg-stone-100 hover:text-stone-950 border border-stone-200/90'
                  }`}
                >
                  <span className={`text-[10px] px-1 py-0.2 rounded font-mono font-black ${
                    isSelected ? 'bg-white/20 text-white' : 'bg-stone-100 text-stone-600'
                  }`}>
                    D{day.dayNum}
                  </span>
                  <span className="font-mono">{day.dateKey}</span>
                  <span className="text-[11px] opacity-75">({day.weekday})</span>
                  <span className="font-medium text-xs truncate max-w-[70px]">
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

      {/* 主要行程區塊 (第一層：極簡資訊，點擊打開第二層) */}
      <div className="max-w-2xl mx-auto px-4 pt-4 sm:pt-6 space-y-4">
        {/* 日期與主要路線頭部 */}
        <div className="border-b border-stone-200/90 pb-3">
          <div className="flex items-baseline justify-between gap-2">
            <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-stone-900 font-serif">
              {activeDay.dateKey} ({activeDay.weekday})｜{activeDay.city}
            </h1>
            <span className="text-xs font-mono text-stone-500 shrink-0 font-bold px-2 py-0.5 rounded bg-stone-200/60">
              DAY {activeDay.dayNum}
            </span>
          </div>
          <p className="text-xs sm:text-sm text-stone-600 font-medium mt-1 leading-snug">
            {activeDay.subRoute}
          </p>
        </div>

        {/* 固定五大分類區塊 (藍＝交通、黃＝景點、橘＝餐飲、綠＝住宿、紅＝注意) */}
        <div className="space-y-3 pt-1">
          {/* 🚗 交通 */}
          {renderCategoryBlock('traffic', activeDay.trafficItems)}

          {/* 📍 景點 (依 1, 2, 3... 標示造訪先後順序) */}
          {renderCategoryBlock('spot', activeDay.spotItems)}

          {/* 🍴 餐廳／咖啡／冰淇淋 */}
          {renderCategoryBlock('food', activeDay.foodItems)}

          {/* 🏨 住宿 */}
          {renderCategoryBlock('hotel', activeDay.hotelItems)}

          {/* ⚠ 重要提醒／預約／ZTL */}
          {renderCategoryBlock('alert', activeDay.alertItems)}
        </div>

        {/* 底部小提示 */}
        <div className="pt-3 text-center text-[11px] text-stone-400">
          點擊任一項目查看詳細資訊、營業時間、電話與導航
        </div>
      </div>

      {/* 天數速查目錄彈窗 (方便直接跳到指定那一天) */}
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
                      <span className={`font-mono text-xs font-black px-2 py-0.5 rounded ${
                        isSelected ? 'bg-white/20 text-white' : 'bg-stone-200 text-stone-700'
                      }`}>
                        DAY {d.dayNum}
                      </span>
                      <div className="min-w-0">
                        <div className="flex items-center gap-1.5 font-bold text-xs sm:text-sm">
                          <span className="font-mono">{d.dateKey}</span>
                          <span className="text-[11px] opacity-80">({d.weekday})</span>
                          <span className="truncate">{d.city}</span>
                        </div>
                        <p className={`text-[11px] truncate ${isSelected ? 'text-stone-300' : 'text-stone-500'}`}>
                          {d.subRoute}
                        </p>
                      </div>
                    </div>
                    {isSelected && (
                      <Check className="w-4 h-4 shrink-0 text-white" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* 第二層：彈出式詳細資料抽屜 (Slide-over Drawer / Bottom Sheet) */}
      <ItineraryDetailSheet
        item={activeItem}
        onClose={() => setActiveItem(null)}
      />
    </div>
  );
}
