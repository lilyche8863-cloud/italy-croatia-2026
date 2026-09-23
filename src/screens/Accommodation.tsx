import { useState } from 'react';
import { 
  MapPin, Utensils, CreditCard, Navigation, 
  ChevronDown, ChevronUp, Building, Copy, Check, 
  FileText, Mail, Phone, Sparkles, CheckCircle2
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '@/lib/utils';
import { ACCOMMODATIONS, AccommodationItem, BookingChannel } from '@/data/travelPlan';

export function Accommodation() {
  const [expandedIds, setExpandedIds] = useState<Record<string, boolean>>({});
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedIds(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const expandAll = () => {
    const all: Record<string, boolean> = {};
    ACCOMMODATIONS.forEach((item) => {
      all[item.id] = true;
    });
    setExpandedIds(all);
  };

  const collapseAll = () => {
    setExpandedIds({});
  };

  const allExpanded = ACCOMMODATIONS.length > 0 && 
    ACCOMMODATIONS.every(item => expandedIds[item.id]);

  // Copy helper
  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedCode(text);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  // Channel badge styling
  const getChannelBadge = (channel: BookingChannel) => {
    switch (channel) {
      case 'Booking.com':
        return {
          label: 'Booking.com',
          className: 'bg-sky-50 text-sky-800 border-sky-200/70 dark:bg-sky-950/40 dark:text-sky-300'
        };
      case 'Agoda':
        return {
          label: 'Agoda',
          className: 'bg-rose-50 text-rose-800 border-rose-200/70 dark:bg-rose-950/40 dark:text-rose-300'
        };
      case 'Marriott':
        return {
          label: 'Marriott 官網',
          className: 'bg-amber-50 text-amber-900 border-amber-200/70 dark:bg-amber-950/40 dark:text-amber-300'
        };
      case 'Hotel Direct':
        return {
          label: '飯店直接訂房',
          className: 'bg-emerald-50 text-emerald-800 border-emerald-200/70 dark:bg-emerald-950/40 dark:text-emerald-300'
        };
      default:
        return {
          label: channel,
          className: 'bg-slate-50 text-slate-700 border-slate-200 dark:bg-slate-800 dark:text-slate-300'
        };
    }
  };

  // Format money
  const formatItemPrice = (item: AccommodationItem) => {
    if (item.currency === 'USD') {
      return `US$ ${item.totalAmount.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
    }
    return `€ ${item.totalAmount.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  };

  // Region styling helper
  const getRegionInfo = (item: AccommodationItem) => {
    if (item.phase === 'italy') {
      return {
        country: '義大利',
        stripeColor: 'bg-teal-700',
      };
    }
    if (item.location.includes('布萊德') || item.location.includes('斯洛維尼亞')) {
      return {
        country: '斯洛維尼亞',
        stripeColor: 'bg-emerald-600',
      };
    }
    if (item.location.includes('黑山') || item.location.includes('Montenegro') || item.location.includes('蒂瓦特')) {
      return {
        country: '黑山',
        stripeColor: 'bg-slate-700',
      };
    }
    return {
      country: '克羅埃西亞',
      stripeColor: 'bg-[#b45309]',
    };
  };

  // Accommodation Subtotals
  const eurSubtotal = ACCOMMODATIONS
    .filter(a => a.currency === 'EUR')
    .reduce((sum, a) => sum + a.totalAmount, 0);
  const usdSubtotal = ACCOMMODATIONS
    .filter(a => a.currency === 'USD')
    .reduce((sum, a) => sum + a.totalAmount, 0);

  return (
    <div className="mt-20 px-3.5 sm:px-4 pb-44 max-w-3xl mx-auto space-y-4">
      {/* 頂部 Header */}
      <div className="pt-2 pb-1 space-y-2">
        <div className="text-[clamp(11px,3.1vw,12px)] font-medium text-slate-500 tracking-wide whitespace-nowrap truncate">
          🇮🇹 義大利 · 🇸🇮 斯洛維尼亞 · 🇭🇷 克羅埃西亞 · 🇲🇪 黑山
        </div>
        <div className="flex items-center justify-between gap-3">
          <h1 className="text-2xl font-black text-slate-900 tracking-tight shrink-0">
            住宿明細
          </h1>
          <button 
            onClick={allExpanded ? collapseAll : expandAll}
            className="shrink-0 text-xs sm:text-sm font-bold text-slate-700 bg-slate-100 hover:bg-slate-200/80 px-3.5 py-1.5 rounded-full transition-colors cursor-pointer whitespace-nowrap min-w-max"
            style={{ writingMode: 'horizontal-tb' }}
          >
            {allExpanded ? '全部收合' : '全部展開'}
          </button>
        </div>
        
        {/* 住宿統計摘要 */}
        <div className="flex flex-wrap items-center justify-between gap-2 p-3 bg-surface-container-low/70 rounded-2xl border border-outline-variant/15 text-xs text-slate-600">
          <div>
            <span className="font-bold text-slate-800">12 處住宿 · 25 晚</span>
            <span className="text-slate-400 mx-1.5">|</span>
            <span className="text-slate-500 font-mono">09/28 – 10/23</span>
          </div>
          <div className="font-mono font-bold text-primary flex items-center gap-1.5">
            <span>€{eurSubtotal.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
            <span className="text-slate-400">+</span>
            <span className="text-emerald-700">US${usdSubtotal.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
          </div>
        </div>
      </div>

      {/* 住宿卡片列表 (Vertical Card List) */}
      <div className="space-y-4">
        {ACCOMMODATIONS.map((item) => {
          const isExpanded = !!expandedIds[item.id];
          const region = getRegionInfo(item);
          const channelBadge = getChannelBadge(item.channel);
          const secondaryBadge = item.secondaryChannel ? getChannelBadge(item.secondaryChannel) : null;

          return (
            <div 
              key={item.id} 
              id={item.id}
              className="bg-white rounded-[20px] border border-slate-200/80 shadow-xs hover:shadow-sm transition-all duration-200 overflow-hidden relative"
            >
              {/* 卡片左側 6px 地區識別細色條 */}
              <div 
                className={cn("absolute left-0 top-0 bottom-0 w-[6px]", region.stripeColor)} 
                title={region.country}
              />

              {/* 第一層：簡潔極簡卡片 (地點、早餐、洗衣、晚數·人數·房數、價格) */}
              <div 
                onClick={() => toggleExpand(item.id)}
                className="pl-5 sm:pl-7 pr-4 sm:pr-5 py-4 sm:py-5 cursor-pointer select-none transition-colors hover:bg-slate-50/40"
              >
                {/* 1. 日期區間 ＋ 晚數 Pill */}
                <div className="flex items-center justify-between gap-2.5 mb-1">
                  <div className="flex items-center gap-2">
                    <span className="text-[14px] sm:text-[15px] font-bold text-slate-700 tracking-tight font-sans whitespace-nowrap">
                      {item.datesDisplay}
                    </span>
                    <span className="text-xs text-slate-300">·</span>
                    <span className="text-xs font-semibold text-slate-600 bg-slate-100 px-2 py-0.5 rounded-full whitespace-nowrap">
                      {item.nights} 晚
                    </span>
                  </div>
                </div>

                {/* 2. 住宿名稱 */}
                <h2 className="text-[19px] sm:text-[22px] font-black text-slate-900 leading-[1.25] tracking-tight mb-1.5 break-words">
                  {item.name}
                </h2>

                {/* 3. 地點 ＋ 人數/房型 ＋ 早餐/早晚餐/洗衣 標籤 */}
                <div className="flex flex-wrap items-center gap-x-2 gap-y-1.5 text-[13px] sm:text-[14px] text-slate-600 font-medium mb-2.5">
                  <span className="inline-flex items-center gap-1 text-slate-800 font-semibold">
                    <span className="text-slate-400">📍</span>
                    <span>{item.shortLocation || item.location}</span>
                  </span>
                  <span className="text-slate-300">·</span>
                  <span className="text-slate-600">
                    {item.roomSummary || `${item.guestsCount}人 · ${item.roomsCount > 1 ? `${item.roomsCount}間房` : (item.roomType.includes('Villa') ? '1 Villa' : '1房/公寓')}`}
                  </span>

                  {/* 早餐／早晚餐標籤 */}
                  {item.mealType === 'half_board' && (
                    <span className="inline-flex items-center gap-1 text-[11px] sm:text-[12px] font-bold text-amber-800 bg-amber-50 border border-amber-200/80 px-2 py-0.5 rounded-md">
                      🍳 早晚餐
                    </span>
                  )}
                  {item.mealType === 'breakfast' && (
                    <span className="inline-flex items-center gap-1 text-[11px] sm:text-[12px] font-bold text-emerald-800 bg-emerald-50 border border-emerald-200/80 px-2 py-0.5 rounded-md">
                      🍳 早餐
                    </span>
                  )}

                  {/* 洗衣機標籤 */}
                  {item.hasWasher && (
                    <span className="inline-flex items-center gap-1 text-[11px] sm:text-[12px] font-bold text-sky-800 bg-sky-50 border border-sky-200/80 px-2 py-0.5 rounded-md">
                      🧺 洗衣
                    </span>
                  )}
                </div>

                {/* 4. 底列：價格 ＋ 展開箭頭 */}
                <div className="flex items-center justify-between pt-2 border-t border-slate-100/90">
                  <div className="text-[18px] sm:text-[20px] font-black text-[#A83240] font-mono leading-none">
                    {formatItemPrice(item)}
                  </div>

                  <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-400 hover:text-slate-700 transition-colors">
                    <span className="hidden sm:inline">{isExpanded ? '收起明細' : '展開明細'}</span>
                    <div className="w-7 h-7 flex items-center justify-center rounded-full bg-slate-100/80 text-slate-600 shrink-0">
                      {isExpanded ? (
                        <ChevronUp size={16} className="text-slate-800 transition-transform" />
                      ) : (
                        <ChevronDown size={16} className="text-slate-500 transition-transform" />
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* 第二層：點擊展開詳細資料 (符合第十七、十八項規則) */}
              <AnimatePresence initial={false}>
                {isExpanded && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className="pl-6 sm:pl-7 pr-5 pb-6 pt-2 space-y-4 border-t border-slate-100 text-slate-800">
                      
                      {/* 一、基本資訊 */}
                      <div className="space-y-1.5">
                        <div className="flex items-center gap-1.5 text-xs font-black text-slate-800 tracking-wide uppercase">
                          <Building size={14} className="text-slate-500" />
                          <span>基本資訊</span>
                        </div>
                        <div className="bg-slate-50/80 rounded-xl p-3.5 space-y-2 text-[13px] sm:text-[14px]">
                          <div className="flex items-start justify-between gap-3 py-1 border-b border-slate-200/50">
                            <span className="text-slate-400 font-medium shrink-0 w-24">入住時間</span>
                            <span className="text-right font-bold text-slate-900 font-mono">
                              {item.checkInDate} {item.checkInTime}
                            </span>
                          </div>
                          <div className="flex items-start justify-between gap-3 py-1 border-b border-slate-200/50">
                            <span className="text-slate-400 font-medium shrink-0 w-24">退房時間</span>
                            <span className="text-right font-bold text-slate-900 font-mono">
                              {item.checkOutDate} {item.checkOutTime}
                            </span>
                          </div>
                          <div className="flex items-start justify-between gap-3 py-1 border-b border-slate-200/50">
                            <span className="text-slate-400 font-medium shrink-0 w-24">晚數 · 人數</span>
                            <span className="text-right font-medium text-slate-900">
                              {item.nights} 晚 · {item.guestsText} ({item.roomsCount} 間客房/格局)
                            </span>
                          </div>
                          <div className="flex items-start justify-between gap-3 py-1 border-b border-slate-200/50">
                            <span className="text-slate-400 font-medium shrink-0 w-24">預訂房型</span>
                            <span className="text-right font-bold text-slate-900">{item.roomType}</span>
                          </div>
                          {item.nameEn && (
                            <div className="flex items-start justify-between gap-3 py-1 border-b border-slate-200/50 text-[12px] sm:text-[13px]">
                              <span className="text-slate-400 font-medium shrink-0 w-24">英文名稱</span>
                              <span className="text-right text-slate-600">{item.nameEn}</span>
                            </div>
                          )}
                          {item.guestName && (
                            <div className="flex items-start justify-between gap-3 py-1 border-b border-slate-200/50 text-[12px] sm:text-[13px]">
                              <span className="text-slate-400 font-medium shrink-0 w-24">住客姓名</span>
                              <span className="text-right font-bold text-slate-900">{item.guestName}</span>
                            </div>
                          )}
                          <div className="flex items-start justify-between gap-3 py-1 border-b border-slate-200/50 text-[12px] sm:text-[13px]">
                            <span className="text-slate-400 font-medium shrink-0 w-24">詳細地址</span>
                            <span className="text-right text-slate-700">{item.address}</span>
                          </div>
                          {item.gpsCoords && (
                            <div className="flex items-start justify-between gap-3 py-1 border-b border-slate-200/50 text-[12px] sm:text-[13px]">
                              <span className="text-slate-400 font-medium shrink-0 w-24">GPS 座標</span>
                              <span className="text-right font-mono text-slate-800 font-medium">{item.gpsCoords}</span>
                            </div>
                          )}
                          {item.phone && (
                            <div className="flex items-start justify-between gap-3 py-1 border-b border-slate-200/50 text-[12px] sm:text-[13px]">
                              <span className="text-slate-400 font-medium shrink-0 w-24">電話</span>
                              <span className="text-right font-mono text-slate-800">{item.phone}</span>
                            </div>
                          )}
                          {item.email && (
                            <div className="flex items-start justify-between gap-3 py-1 border-b border-slate-200/50 text-[12px] sm:text-[13px]">
                              <span className="text-slate-400 font-medium shrink-0 w-24">Email</span>
                              <a href={`mailto:${item.email}`} className="text-right font-mono text-primary font-bold hover:underline">
                                {item.email}
                              </a>
                            </div>
                          )}
                        </div>
                      </div>

                      {/* 二、訂房資訊與單號 */}
                      <div className="space-y-1.5">
                        <div className="flex items-center gap-1.5 text-xs font-black text-slate-800 tracking-wide uppercase">
                          <FileText size={14} className="text-slate-500" />
                          <span>訂房資訊</span>
                        </div>
                        <div className="bg-slate-50/80 rounded-xl p-3.5 space-y-2 text-[13px] sm:text-[14px]">
                          <div className="flex items-center justify-between gap-3 py-1 border-b border-slate-200/50">
                            <span className="text-slate-400 font-medium shrink-0 w-24">訂房管道</span>
                            <div className="flex items-center gap-1.5">
                              <span className={cn("text-xs font-bold px-2 py-0.5 rounded-md border", channelBadge.className)}>
                                {channelBadge.label}
                              </span>
                              {secondaryBadge && (
                                <span className={cn("text-xs font-bold px-2 py-0.5 rounded-md border", secondaryBadge.className)}>
                                  {secondaryBadge.label}
                                </span>
                              )}
                            </div>
                          </div>

                          <div className="flex items-center justify-between gap-3 py-1 border-b border-slate-200/50">
                            <span className="text-slate-400 font-medium shrink-0 w-24">訂單確認碼</span>
                            <div className="flex items-center gap-2">
                              <span className="font-mono font-bold text-slate-900 text-right">{item.bookingCode}</span>
                              <button 
                                onClick={() => handleCopy(item.bookingCode)}
                                className="text-slate-400 hover:text-slate-700 p-1 rounded-md transition-colors"
                                title="複製單號"
                              >
                                {copiedCode === item.bookingCode ? <Check size={14} className="text-emerald-600" /> : <Copy size={14} />}
                              </button>
                            </div>
                          </div>

                          {item.pinCode && (
                            <div className="flex items-center justify-between gap-3 py-1 border-b border-slate-200/50 text-xs">
                              <span className="text-slate-400 font-medium shrink-0 w-24">PIN 碼</span>
                              <div className="flex items-center gap-2">
                                <span className="font-mono font-bold text-slate-800 text-right">{item.pinCode}</span>
                                <button 
                                  onClick={() => handleCopy(item.pinCode!)}
                                  className="text-slate-400 hover:text-slate-700 p-1 rounded-md transition-colors"
                                  title="複製 PIN"
                                >
                                  {copiedCode === item.pinCode ? <Check size={14} className="text-emerald-600" /> : <Copy size={14} />}
                                </button>
                              </div>
                            </div>
                          )}

                          {item.bookingRef && (
                            <div className="flex items-center justify-between gap-3 py-1 border-b border-slate-200/50 text-xs">
                              <span className="text-slate-400 font-medium shrink-0 w-24">Reference 號</span>
                              <span className="font-mono font-bold text-slate-700">{item.bookingRef}</span>
                            </div>
                          )}

                          {item.refundableDeposit && (
                            <div className="flex items-start justify-between gap-3 py-1 border-b border-slate-200/50 text-xs">
                              <span className="text-amber-700 font-medium shrink-0 w-24">損壞押金</span>
                              <span className="text-right font-medium text-amber-800">{item.refundableDeposit}</span>
                            </div>
                          )}

                          <div className="flex items-start justify-between gap-3 py-1 border-b border-slate-200/50">
                            <span className="text-slate-400 font-medium shrink-0 w-24">付款狀態</span>
                            <span className="text-right font-medium text-emerald-800">{item.paymentStatus}</span>
                          </div>

                          <div className="flex items-start justify-between gap-3 py-1 text-xs">
                            <span className="text-slate-400 font-medium shrink-0 w-24">付款方式說明</span>
                            <span className="text-right text-slate-600 leading-relaxed">{item.paymentMethod}</span>
                          </div>
                        </div>
                      </div>

                      {/* 三、多房訂單明細 (第十八項規則：MANDA / AC Hotel Split / Holiday Inn Express MXP) */}
                      {item.subRooms && item.subRooms.length > 0 && (
                        <div className="space-y-1.5">
                          <div className="flex items-center justify-between">
                            <span className="text-xs font-black text-slate-800 tracking-wide uppercase flex items-center gap-1.5">
                              <Sparkles size={14} className="text-primary" />
                              <span>{item.subRooms.length} 筆客房／訂單明細 (第二層)</span>
                            </span>
                            <span className="text-xs font-mono font-bold text-[#A83240]">
                              小計：{formatItemPrice(item)}
                            </span>
                          </div>

                          <div className="space-y-2">
                            {item.subRooms.map((sub, sIdx) => {
                              const subBadge = getChannelBadge(sub.channel);
                              return (
                                <div key={sIdx} className="bg-white p-3 rounded-xl border border-slate-200 shadow-2xs space-y-1.5 text-xs">
                                  <div className="flex items-center justify-between gap-2">
                                    <div className="flex items-center gap-1.5">
                                      <span className={cn("text-[10px] font-bold px-1.5 py-0.5 rounded border", subBadge.className)}>
                                        {subBadge.label}
                                      </span>
                                      <span className="font-bold text-slate-900">{sub.roomName}</span>
                                    </div>
                                    <span className="font-mono font-black text-sm text-[#A83240]">
                                      {sub.currency === 'USD' ? `US$ ${sub.price.toFixed(2)}` : `€${sub.price.toFixed(2)}`}
                                    </span>
                                  </div>

                                  <div className="grid grid-cols-2 gap-2 text-slate-600 pt-1 border-t border-slate-100">
                                    <div>
                                      <span className="text-slate-400">訂單號：</span>
                                      <span className="font-mono font-bold text-slate-800">#{sub.confirmationCode}</span>
                                    </div>
                                    <div className="text-right">
                                      <span className="text-slate-400">房型人數：</span>
                                      <span className="text-slate-800 font-medium">{sub.guests}</span>
                                    </div>
                                  </div>

                                  <div className="flex items-center justify-between text-slate-500 pt-0.5">
                                    <span>餐飲：{sub.breakfast}</span>
                                    {sub.ratePlan && <span className="font-mono text-[11px] text-slate-400">{sub.ratePlan}</span>}
                                  </div>

                                  {sub.notes && (
                                    <div className="text-[11px] text-slate-500 bg-slate-50 p-1.5 rounded-lg mt-1">
                                      {sub.notes}
                                    </div>
                                  )}
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      )}

                      {/* 四、餐飲與旅行核心設備 (第十七項規則：只顯示停車、洗衣機、烘衣機、廚房、電梯、輪椅友善) */}
                      <div className="space-y-1.5">
                        <div className="flex items-center gap-1.5 text-xs font-black text-slate-800 tracking-wide uppercase">
                          <Utensils size={14} className="text-slate-500" />
                          <span>餐飲與旅行必備設施</span>
                        </div>
                        <div className="bg-slate-50/80 rounded-xl p-3.5 space-y-2 text-[13px] sm:text-[14px]">
                          <div className="flex items-start justify-between gap-3 py-1 border-b border-slate-200/50">
                            <span className="text-slate-400 font-medium shrink-0 w-24">餐飲方案</span>
                            <span className="text-right font-bold text-slate-900">{item.meals}</span>
                          </div>

                          <div className="flex items-start justify-between gap-3 py-1 border-b border-slate-200/50">
                            <span className="text-slate-400 font-medium shrink-0 w-24">洗衣／烘衣</span>
                            <span className="text-right font-medium text-slate-900">
                              {item.hasWasher 
                                ? (item.hasDryer ? '洗衣機 ＋ 獨立烘衣機' : '附洗衣機')
                                : '無洗衣機'}
                            </span>
                          </div>

                          <div className="flex items-start justify-between gap-3 py-1 border-b border-slate-200/50">
                            <span className="text-slate-400 font-medium shrink-0 w-24">廚房／料理</span>
                            <span className="text-right font-medium text-slate-900">
                              {item.hasKitchen ? '全套獨立廚房與用餐設備' : '無獨立廚房 (提供熱水壺/冰箱)'}
                            </span>
                          </div>

                          <div className="flex items-start justify-between gap-3 py-1 border-b border-slate-200/50">
                            <span className="text-slate-400 font-medium shrink-0 w-24">私人停車</span>
                            <span className="text-right font-medium text-slate-900">
                              {item.hasParking ? '附設免費私人停車場' : '無附設停車場 (市中心周邊停車)'}
                            </span>
                          </div>

                          <div className="flex items-start justify-between gap-3 py-1 border-b border-slate-200/50">
                            <span className="text-slate-400 font-medium shrink-0 w-24">電梯／無障礙</span>
                            <span className="text-right font-medium text-slate-900">
                              {item.hasElevator ? '有電梯直達' : '無電梯 (低樓層或獨立Villa)'}
                              {item.isWheelchairAccessible ? ' · 輪椅友善通行' : ''}
                            </span>
                          </div>

                          {item.amenityHighlights && item.amenityHighlights.length > 0 && (
                            <div className="flex items-start justify-between gap-3 py-1 text-xs">
                              <span className="text-slate-400 font-medium shrink-0 w-24">設施亮點</span>
                              <span className="text-right text-slate-700 font-medium">
                                {item.amenityHighlights.join(' · ')}
                              </span>
                            </div>
                          )}
                        </div>
                      </div>

                      {/* 五、費用明細 (金額與分攤成本) */}
                      <div className="space-y-1.5">
                        <div className="flex items-center gap-1.5 text-xs font-black text-slate-800 tracking-wide uppercase">
                          <CreditCard size={14} className="text-slate-500" />
                          <span>費用與成本明細</span>
                        </div>
                        <div className="bg-slate-50/80 rounded-xl p-3.5 space-y-2 text-[13px] sm:text-[14px]">
                          <div className="flex items-center justify-between gap-3 py-1 border-b border-slate-200/50">
                            <span className="text-slate-400 font-medium shrink-0 w-24">計入旅費總額</span>
                            <span className="text-right text-[18px] sm:text-[20px] font-black text-[#A83240] font-mono">
                              {formatItemPrice(item)}
                            </span>
                          </div>

                          {item.cityTaxAmount !== undefined && (
                            <div className="flex items-start justify-between gap-3 py-1 border-b border-slate-200/50 text-xs">
                              <span className="text-slate-400 font-medium shrink-0 w-24">必要城市稅</span>
                              <span className="text-right text-slate-700">
                                {item.cityTaxNote || `€${item.cityTaxAmount.toFixed(2)}`}
                              </span>
                            </div>
                          )}

                          {item.paidAmount !== undefined && item.paidAmount > 0 && (
                            <div className="flex items-start justify-between gap-3 py-1 border-b border-slate-200/50 text-xs">
                              <span className="text-slate-400 font-medium shrink-0 w-24">已付款項</span>
                              <span className="text-right font-mono font-bold text-slate-800">
                                {item.currency === 'USD' ? `US$ ${item.paidAmount.toFixed(2)}` : `€${item.paidAmount.toFixed(2)}`}
                              </span>
                            </div>
                          )}

                          {item.remainingAmount !== undefined && item.remainingAmount > 0 && (
                            <div className="flex items-start justify-between gap-3 py-1 border-b border-slate-200/50 text-xs">
                              <span className="text-slate-400 font-medium shrink-0 w-24">現場待付</span>
                              <span className="text-right font-mono font-bold text-amber-900">
                                {item.currency === 'USD' ? `US$ ${item.remainingAmount.toFixed(2)}` : `€${item.remainingAmount.toFixed(2)}`}
                              </span>
                            </div>
                          )}

                          {item.refundableDeposit && (
                            <div className="flex items-start justify-between gap-3 py-1 border-b border-slate-200/50 text-xs">
                              <span className="text-slate-400 font-medium shrink-0 w-24">損壞押金</span>
                              <span className="text-right font-medium text-amber-900 leading-relaxed">{item.refundableDeposit}</span>
                            </div>
                          )}

                          <div className="flex items-start justify-between gap-3 py-1 text-xs">
                            <span className="text-slate-400 font-medium shrink-0 w-24">每人分攤 ({item.splitMembers.length}人)</span>
                            <span className="text-right font-mono font-bold text-primary">
                              {item.currency === 'USD' 
                                ? `US$ ${(item.totalAmount / item.splitMembers.length).toFixed(2)} /人` 
                                : `€${(item.totalAmount / item.splitMembers.length).toFixed(2)} /人`}
                            </span>
                          </div>

                          {item.notice && (
                            <div className="pt-2 border-t border-slate-200/50 text-xs text-slate-600 leading-relaxed">
                              <span className="font-bold text-slate-700 block mb-0.5">特別提醒：</span>
                              {item.notice}
                            </div>
                          )}
                        </div>
                      </div>

                      {/* 六、地圖導航按鈕 */}
                      <button 
                        onClick={() => window.open(item.mapUrl, '_blank')}
                        className="flex items-center justify-center gap-2 w-full py-3 bg-slate-900 hover:bg-slate-800 text-white rounded-xl font-bold text-xs sm:text-sm transition-colors shadow-xs cursor-pointer"
                      >
                        <Navigation size={15} />
                        開啟 Google 地圖導航 ({item.name})
                      </button>

                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </div>
  );
}
