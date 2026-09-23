import React, { useEffect } from 'react';
import { X, Navigation, Phone, ExternalLink, Clock, Ticket, MapPin, AlertCircle, Info, Calendar, Utensils, ShieldAlert } from 'lucide-react';
import { ItineraryItem, CATEGORY_CONFIG } from '../data/twoLayerItineraryData';

interface ItineraryDetailSheetProps {
  item: ItineraryItem | null;
  onClose: () => void;
}

export const ItineraryDetailSheet: React.FC<ItineraryDetailSheetProps> = ({ item, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (item) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [item, onClose]);

  if (!item) return null;

  const detail = item.detail || {};
  const config = CATEGORY_CONFIG[item.category];

  const handleOpenMap = () => {
    const query = detail.mapQuery || detail.address || item.name;
    window.open(`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4">
      {/* 背景遮罩 */}
      <div
        className="fixed inset-0 bg-stone-900/60 backdrop-blur-xs transition-opacity animate-in fade-in duration-200"
        onClick={onClose}
      />

      {/* 彈出抽屜 / 底部滑出面板 */}
      <div
        className="relative w-full max-w-lg bg-[#FAF8F5] rounded-t-2xl sm:rounded-2xl shadow-2xl flex flex-col max-h-[90vh] sm:max-h-[85vh] z-10 overflow-hidden animate-in slide-in-from-bottom duration-250 border border-stone-200/80"
      >
        {/* 移動端頂部拖拽條 */}
        <div className="sm:hidden pt-3 pb-1 flex justify-center cursor-pointer" onClick={onClose}>
          <div className="w-12 h-1.5 bg-stone-300 rounded-full" />
        </div>

        {/* 頂部標題列 */}
        <div className="px-5 pt-3 pb-3 border-b border-stone-200/80 flex items-start justify-between gap-3 bg-white/70">
          <div className="space-y-1 min-w-0 flex-1">
            <div className="flex items-center gap-2 flex-wrap">
              {item.order && item.category !== 'hotel' && (
                <span className="font-mono text-xs font-bold px-2 py-0.5 bg-stone-900 text-white rounded-md shadow-2xs">
                  順序 {item.order}
                </span>
              )}
              <span
                className="px-2.5 py-0.5 rounded-md text-xs font-bold"
                style={{ backgroundColor: config.bg, color: config.text }}
              >
                {config.badge}
              </span>
            </div>
            <h2 className="text-lg sm:text-xl font-bold text-stone-900 leading-snug tracking-tight">
              {item.name}
            </h2>
            {detail.subtitle && (
              <p className="text-xs sm:text-sm text-stone-600 font-medium">
                {detail.subtitle}
              </p>
            )}
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-stone-400 hover:text-stone-700 hover:bg-stone-100 rounded-full transition-colors shrink-0"
            aria-label="關閉"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* 滾動內容區 */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4 text-sm text-stone-800">
          {/* 照片 (若有) */}
          {detail.imageUrl && (
            <div className="rounded-xl overflow-hidden shadow-xs border border-stone-200/80 aspect-video max-h-48 w-full bg-stone-100">
              <img
                src={detail.imageUrl}
                alt={item.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>
          )}

          {/* 簡短說明 (2~3行，精確旅遊資訊) */}
          {detail.description && (
            <div className="bg-white rounded-xl p-3.5 border border-stone-200/70 shadow-2xs leading-relaxed text-stone-700 text-xs sm:text-sm">
              {detail.description}
            </div>
          )}

          {/* 結構化資訊清單 */}
          <div className="bg-white rounded-xl divide-y divide-stone-100 border border-stone-200/70 shadow-2xs overflow-hidden text-xs sm:text-sm">
            {/* 營業時間 / 時段 */}
            {detail.hours && (
              <div className="p-3 flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-stone-400 shrink-0 mt-0.5" />
                <div className="flex-1">
                  <div className="text-[11px] font-semibold text-stone-400">營業／開放時間</div>
                  <div className="font-medium text-stone-800">{detail.hours}</div>
                </div>
              </div>
            )}

            {/* 門票 / 費用 */}
            {detail.ticket && (
              <div className="p-3 flex items-start gap-2.5">
                <Ticket className="w-4 h-4 text-stone-400 shrink-0 mt-0.5" />
                <div className="flex-1">
                  <div className="text-[11px] font-semibold text-stone-400">門票／費用</div>
                  <div className="font-medium text-stone-800">{detail.ticket}</div>
                </div>
              </div>
            )}

            {/* 建議停留時間 */}
            {detail.duration && (
              <div className="p-3 flex items-start gap-2.5">
                <Calendar className="w-4 h-4 text-stone-400 shrink-0 mt-0.5" />
                <div className="flex-1">
                  <div className="text-[11px] font-semibold text-stone-400">建議停留／車程</div>
                  <div className="font-medium text-stone-800">{detail.duration}</div>
                </div>
              </div>
            )}

            {/* 推薦餐點 */}
            {detail.recommendedDishes && (
              <div className="p-3 flex items-start gap-2.5">
                <Utensils className="w-4 h-4 text-stone-400 shrink-0 mt-0.5" />
                <div className="flex-1">
                  <div className="text-[11px] font-semibold text-stone-400">推薦餐點／招牌菜</div>
                  <div className="font-medium text-stone-800 leading-snug">{detail.recommendedDishes}</div>
                </div>
              </div>
            )}

            {/* 地址 */}
            {detail.address && (
              <div className="p-3 flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-stone-400 shrink-0 mt-0.5" />
                <div className="flex-1">
                  <div className="text-[11px] font-semibold text-stone-400">地址</div>
                  <div className="font-medium text-stone-800 select-all">{detail.address}</div>
                </div>
              </div>
            )}

            {/* 訂房／訂單編號 */}
            {detail.bookingCode && (
              <div className="p-3 flex items-start gap-2.5">
                <Info className="w-4 h-4 text-stone-400 shrink-0 mt-0.5" />
                <div className="flex-1">
                  <div className="text-[11px] font-semibold text-stone-400">預約編號／訂單資訊</div>
                  <div className="font-mono font-bold text-stone-900 select-all">{detail.bookingCode}</div>
                </div>
              </div>
            )}

            {/* 停車說明 */}
            {detail.parking && (
              <div className="p-3 flex items-start gap-2.5">
                <Info className="w-4 h-4 text-stone-400 shrink-0 mt-0.5" />
                <div className="flex-1">
                  <div className="text-[11px] font-semibold text-stone-400">停車建議</div>
                  <div className="font-medium text-stone-800">{detail.parking}</div>
                </div>
              </div>
            )}

            {/* 電話 */}
            {detail.phone && (
              <div className="p-3 flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-stone-400 shrink-0 mt-0.5" />
                <div className="flex-1">
                  <div className="text-[11px] font-semibold text-stone-400">聯絡電話</div>
                  <a
                    href={`tel:${detail.phone.replace(/\s+/g, '')}`}
                    className="font-medium text-emerald-700 hover:underline flex items-center gap-1"
                  >
                    {detail.phone}
                  </a>
                </div>
              </div>
            )}

            {/* 訂位提示 */}
            {detail.reservation && (
              <div className="p-3 flex items-start gap-2.5">
                <AlertCircle className="w-4 h-4 text-stone-400 shrink-0 mt-0.5" />
                <div className="flex-1">
                  <div className="text-[11px] font-semibold text-stone-400">訂位建議</div>
                  <div className="font-medium text-stone-800">{detail.reservation}</div>
                </div>
              </div>
            )}
          </div>

          {/* 注意事項 (若有) */}
          {detail.notice && (
            <div className="rounded-xl p-3 bg-red-50/80 border border-red-200/80 text-xs sm:text-sm text-red-900 flex items-start gap-2.5">
              <ShieldAlert className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
              <div className="leading-relaxed">
                <span className="font-bold">重要提醒：</span>
                {detail.notice}
              </div>
            </div>
          )}
        </div>

        {/* 底部固定操作按鈕欄 */}
        <div className="p-3 sm:p-4 bg-white border-t border-stone-200/80 flex items-center gap-2 shrink-0 shadow-lg">
          {/* 導航按鈕 (必有) */}
          <button
            onClick={handleOpenMap}
            className="flex-1 py-2.5 px-4 bg-primary text-white font-bold rounded-xl text-sm hover:bg-primary/90 active:scale-[0.99] transition-all flex items-center justify-center gap-1.5 shadow-sm"
          >
            <Navigation className="w-4 h-4" />
            <span>【導航】Google Maps</span>
          </button>

          {/* 電話撥打按鈕 (若有) */}
          {detail.phone && (
            <a
              href={`tel:${detail.phone.replace(/\s+/g, '')}`}
              className="py-2.5 px-4 bg-emerald-600 text-white font-bold rounded-xl text-sm hover:bg-emerald-700 active:scale-[0.99] transition-all flex items-center justify-center gap-1.5 shadow-sm shrink-0"
            >
              <Phone className="w-4 h-4" />
              <span>【電話】</span>
            </a>
          )}

          {/* 訂位連結 (若有) */}
          {detail.reservationUrl && (
            <a
              href={detail.reservationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="py-2.5 px-4 bg-amber-600 text-white font-bold rounded-xl text-sm hover:bg-amber-700 active:scale-[0.99] transition-all flex items-center justify-center gap-1.5 shadow-sm shrink-0"
            >
              <ExternalLink className="w-4 h-4" />
              <span>【訂位】</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
