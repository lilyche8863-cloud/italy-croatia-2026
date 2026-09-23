import React from 'react';
import { 
  Utensils, Clock, MapPin, Phone, Globe, CalendarCheck, 
  AlertCircle, ChefHat, Navigation, ExternalLink 
} from 'lucide-react';
import { RestaurantCardData } from '../data/itineraryTypes';

interface RestaurantCardProps {
  data: RestaurantCardData;
}

export const RestaurantCard: React.FC<RestaurantCardProps> = ({ data }) => {
  const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(data.googleMapsQuery || data.address || data.name)}`;

  return (
    <div className="bg-[#fffdfa] border-2 border-amber-900/15 rounded-2xl p-4 sm:p-5 shadow-sm space-y-3.5 my-2">
      {/* 頂部：餐廳名稱與標籤 */}
      <div className="flex items-start justify-between gap-3 border-b border-amber-900/10 pb-3">
        <div>
          <div className="flex items-center gap-1.5 text-xs font-bold text-amber-800 uppercase tracking-wide">
            <ChefHat size={14} className="text-amber-700" />
            <span>【推薦餐飲資訊】</span>
          </div>
          <h4 className="text-lg font-black text-on-surface mt-0.5 tracking-tight flex items-center gap-2">
            <span>{data.name}</span>
          </h4>
          <span className="inline-block mt-1 text-xs font-semibold px-2.5 py-0.5 rounded-full bg-amber-100/70 text-amber-900 border border-amber-200">
            {data.type}
          </span>
        </div>

        {/* 快速導航按鈕 */}
        <a
          href={mapUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-shrink-0 inline-flex items-center gap-1.5 bg-primary text-on-primary text-xs font-bold px-3 py-2 rounded-xl shadow-sm hover:bg-primary/90 active:scale-95 transition-all"
        >
          <Navigation size={13} />
          <span>導航</span>
        </a>
      </div>

      {/* 推薦料理 */}
      <div className="bg-amber-50/60 rounded-xl p-3 border border-amber-200/50">
        <span className="text-[11px] font-bold text-amber-900 block mb-1 flex items-center gap-1">
          <Utensils size={12} className="text-amber-700" />
          <span>【推薦料理 / 招牌餐點】</span>
        </span>
        <p className="text-xs text-on-surface font-medium leading-relaxed">
          {data.recommendedDishes || '待確認'}
        </p>
      </div>

      {/* 營業時間與供餐時間 (依規定分開明確展示) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
        <div className="bg-surface-container-lowest p-2.5 rounded-xl border border-outline-variant/20 space-y-1">
          <span className="font-bold text-on-surface flex items-center gap-1 text-[11px]">
            <Clock size={12} className="text-primary" />
            <span>【店家營業時間】</span>
          </span>
          <p className="text-on-surface font-semibold pl-4">
            {data.businessHours || '2026 營業時間待確認'}
          </p>
        </div>

        <div className="bg-surface-container-lowest p-2.5 rounded-xl border border-outline-variant/20 space-y-1">
          <span className="font-bold text-amber-800 flex items-center gap-1 text-[11px]">
            <Utensils size={12} className="text-amber-700" />
            <span>【廚房供餐時間】</span>
          </span>
          <div className="pl-4 space-y-0.5 text-on-surface font-medium">
            <div><span className="text-on-surface-variant text-[11px]">午餐：</span>{data.lunchHours || '待確認'}</div>
            <div><span className="text-on-surface-variant text-[11px]">晚餐：</span>{data.dinnerHours || '待確認'}</div>
          </div>
        </div>
      </div>

      {/* 休息日、電話與訂位 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
        <div className="flex items-center gap-2 text-on-surface-variant">
          <span className="font-bold text-on-surface">【公休日】：</span>
          <span className="font-semibold text-on-surface">{data.closedDays || '待確認'}</span>
        </div>

        {data.phone && data.phone !== '待確認' ? (
          <div className="flex items-center gap-2">
            <span className="font-bold text-on-surface text-xs">【電話】：</span>
            <a 
              href={`tel:${data.phone.replace(/\s+/g, '')}`} 
              className="font-mono text-primary font-bold hover:underline flex items-center gap-1"
            >
              <Phone size={12} />
              <span>{data.phone}</span>
            </a>
          </div>
        ) : (
          <div className="flex items-center gap-2 text-on-surface-variant">
            <span className="font-bold text-on-surface">【電話】：</span>
            <span>待確認</span>
          </div>
        )}
      </div>

      {/* 訂位資訊與官網 */}
      <div className="flex flex-wrap items-center justify-between gap-2 pt-1 border-t border-outline-variant/10 text-xs">
        <div className="flex items-center gap-1.5 text-on-surface font-medium">
          <CalendarCheck size={13} className="text-emerald-600" />
          <span className="font-bold">【訂位】：</span>
          <span>{data.reservationInfo || '建議提前預約 / 現場候位'}</span>
        </div>

        {data.websiteUrl && (
          <a
            href={data.websiteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-primary hover:underline font-bold text-[11px]"
          >
            <Globe size={12} />
            <span>【餐廳官網】</span>
            <ExternalLink size={10} />
          </a>
        )}
      </div>

      {/* 地址 */}
      <div className="flex items-start gap-1.5 text-xs text-on-surface-variant pt-0.5">
        <MapPin size={13} className="text-rose-600 flex-shrink-0 mt-0.5" />
        <div>
          <span className="font-bold text-on-surface">【地址】：</span>
          <span className="select-all">{data.address}</span>
        </div>
      </div>

      {/* 備註 (若有) */}
      {data.notes && (
        <div className="bg-amber-100/40 rounded-xl p-2.5 text-[11px] text-amber-950 flex items-start gap-1.5 border border-amber-200/50">
          <AlertCircle size={13} className="text-amber-700 flex-shrink-0 mt-0.5" />
          <div>
            <span className="font-bold">【備註】：</span>
            <span>{data.notes}</span>
          </div>
        </div>
      )}
    </div>
  );
};
