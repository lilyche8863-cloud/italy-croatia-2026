import React from 'react';
import { Home, ChevronRight, Plane, Clock, Users } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface FlightOverviewItem {
  date: string;
  weekday: string;
  code: string;
  fromCode: string;
  toCode: string;
  depTime: string;
  arrTime: string;
  nextDay?: boolean;
  flightNumbers: string;
  type: '直飛' | '聯程';
  duration?: string;
  transfer?: string;
  passengers: string;
}

export function FlightOverview() {
  const navigate = useNavigate();

  const journeyList: FlightOverviewItem[] = [
    {
      date: '09/27',
      weekday: '週日',
      code: 'BR95',
      fromCode: 'TPE',
      toCode: 'MXP',
      depTime: '23:45',
      arrTime: '07:35',
      nextDay: true,
      flightNumbers: 'BR95',
      type: '直飛',
      duration: '13h 50m',
      passengers: '春香・麗安・許振宏'
    },
    {
      date: '10/05',
      weekday: '週一',
      code: 'KHH-ZAG',
      fromCode: 'KHH',
      toCode: 'ZAG',
      depTime: '13:40',
      arrTime: '06:55',
      nextDay: true,
      flightNumbers: 'CX423 → QR817 → QR215',
      type: '聯程',
      transfer: 'HKG 4h15m ・ DOH 3h05m',
      passengers: '小花・WU HSIUPI'
    },
    {
      date: '10/21',
      weekday: '週三',
      code: 'FR5935',
      fromCode: 'DBV',
      toCode: 'BGY',
      depTime: '14:25',
      arrTime: '16:00',
      nextDay: false,
      flightNumbers: 'FR5935',
      type: '直飛',
      duration: '1h 35m',
      passengers: '5人全員'
    },
    {
      date: '10/23',
      weekday: '週五',
      code: 'EY82',
      fromCode: 'MXP',
      toCode: 'TPE',
      depTime: '11:40',
      arrTime: '10:00',
      nextDay: true,
      flightNumbers: 'EY82 → EY898',
      type: '聯程',
      transfer: 'AUH 1h40m',
      passengers: 'WU HSIUPI・春香・麗安・許振宏'
    }
  ];

  return (
    <div className="mt-20 px-4 pb-44 max-w-xl mx-auto space-y-5">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <span className="text-primary font-black text-[11px] uppercase tracking-widest block">FLIGHTS</span>
          <h1 className="text-2xl font-black text-on-surface tracking-tight">航班總覽</h1>
        </div>
        <button 
          onClick={() => navigate('/')}
          className="p-2.5 rounded-2xl bg-surface-container-lowest border border-outline-variant/10 shadow-sm hover:bg-surface-container-low active:scale-95 transition-all"
          title="回首頁"
        >
          <Home size={18} className="text-on-surface" />
        </button>
      </div>

      {/* Flight Journey Cards */}
      <div className="space-y-3.5">
        {journeyList.map((item) => (
          <div 
            key={item.code}
            onClick={() => navigate(`/flights/${item.code}`)}
            className="cursor-pointer bg-surface-container-lowest p-4 sm:p-5 rounded-2xl shadow-xs border border-outline-variant/15 hover:border-primary/40 active:scale-[0.99] transition-all space-y-3"
          >
            {/* Top Row: Date & Type Badge */}
            <div className="flex items-center justify-between">
              <div className="flex items-baseline gap-1.5">
                <span className="text-base sm:text-lg font-black text-on-surface font-mono">{item.date}</span>
                <span className="text-xs font-bold text-on-surface-variant">{item.weekday}</span>
              </div>
              <span className={`text-[11px] font-black px-2.5 py-0.5 rounded-full border ${
                item.type === '直飛'
                  ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
                  : 'bg-primary/5 text-primary border-primary/20'
              }`}>
                {item.type}
              </span>
            </div>

            {/* Main Time & Route Row */}
            <div className="grid grid-cols-[minmax(0,1fr)_56px_minmax(0,1fr)] items-center pt-0.5">
              {/* Departure */}
              <div className="min-w-0 text-left">
                <div className="text-[clamp(24px,6.8vw,34px)] font-black text-on-surface tracking-tight font-mono leading-none truncate">
                  {item.depTime}
                </div>
                <div className="text-sm font-black text-primary mt-1 font-mono tracking-wide truncate">
                  {item.fromCode}
                </div>
              </div>

              {/* Middle Plane & Flight Path */}
              <div className="w-[56px] min-w-[56px] shrink-0 flex flex-col items-center justify-center text-center mx-auto">
                {item.duration && (
                  <div className="flex flex-col items-center justify-center font-mono text-[13px] sm:text-[15px] font-bold text-outline leading-[1.1] uppercase">
                    {item.duration.replace(/\(.*\)/, '').trim().toUpperCase().split(/\s+/).filter(Boolean).map((p, idx) => (
                      <span key={idx}>{p}</span>
                    ))}
                  </div>
                )}
                <Plane className={`text-primary rotate-90 ${item.duration ? 'mt-2' : ''}`} size={14} fill="currentColor" />
              </div>

              {/* Arrival */}
              <div className="min-w-0 text-right">
                <div className="flex items-center justify-end gap-1.5 leading-none">
                  <span className="text-[clamp(24px,6.8vw,34px)] font-black text-on-surface tracking-tight font-mono">
                    {item.arrTime}
                  </span>
                  {item.nextDay && (
                    <span className="shrink-0 text-[10px] font-black bg-amber-100 text-amber-900 border border-amber-300 px-1 py-0.5 rounded leading-none">
                      +1
                    </span>
                  )}
                </div>
                <div className="text-sm font-black text-primary mt-1 font-mono tracking-wide">
                  {item.toCode}
                </div>
              </div>
            </div>

            {/* Flight Numbers & Transfers */}
            <div className="pt-2 border-t border-outline-variant/10 flex flex-col gap-1.5 text-xs">
              <div className="flex items-center justify-between text-on-surface-variant">
                <span className="font-mono font-bold text-primary tracking-wide text-xs">
                  {item.flightNumbers}
                </span>
                <ChevronRight size={16} className="text-outline" />
              </div>

              {/* Transfer Info (if connecting flight) */}
              {item.transfer && (
                <div className="flex items-center gap-1.5 text-[11px] font-medium text-amber-900 bg-amber-500/10 px-2 py-1 rounded-lg w-fit">
                  <Clock size={12} className="text-amber-700 shrink-0" />
                  <span>{item.transfer}</span>
                </div>
              )}

              {/* Passengers */}
              <div className="flex items-center gap-1.5 text-[11px] font-medium text-on-surface-variant pt-0.5">
                <Users size={12} className="text-outline shrink-0" />
                <span>{item.passengers}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
