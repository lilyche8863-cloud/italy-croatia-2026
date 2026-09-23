import { useState } from 'react';
import { 
  Navigation, Copy, CheckCircle2, ChevronDown, ChevronUp, Bus, Ship, Car, Users, Luggage
} from 'lucide-react';

export function CarRental() {
  const [copied, setCopied] = useState<string | null>(null);
  const [showHertzMore, setShowHertzMore] = useState(false);
  const [showFlixbusMore, setShowFlixbusMore] = useState(false);
  const [showUniRentMore, setShowUniRentMore] = useState(false);
  const [showJadroMore, setShowJadroMore] = useState(false);
  const [showHertzMilanMore, setShowHertzMilanMore] = useState(false);
  const [jadroVoyage, setJadroVoyage] = useState<'outbound' | 'inbound'>('inbound');

  const copyToClipboard = (text: string, label: string) => {
    if (!text) return;
    navigator.clipboard.writeText(text);
    setCopied(label);
    setTimeout(() => setCopied(null), 2000);
  };

  const openGoogleMaps = (query: string) => {
    window.open(`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`, '_blank');
  };

  return (
    <div className="mt-20 px-4 pb-44 max-w-xl mx-auto space-y-6">
      {/* 頁面標題 */}
      <div className="space-y-1">
        <h1 className="text-2xl sm:text-3xl font-black text-on-surface tracking-tight font-mono">
          租車與接駁交通
        </h1>
        <p className="text-xs font-bold text-on-surface-variant font-mono">
          HERTZ (北義) → FLIXBUS → UNI RENT → JADROLINIJA → HERTZ (米蘭)
        </p>
      </div>

      {/* ======================= ① HERTZ · 義大利租車 ======================= */}
      <div className="space-y-2.5">
        <section className="bg-surface-container-lowest rounded-3xl p-5 border border-outline-variant/15 shadow-xs space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-xs font-black text-primary font-mono tracking-wide">
              HERTZ · 義大利租車
            </span>
            <span className="text-[11px] font-bold text-primary bg-primary/10 px-2.5 py-0.5 rounded-full font-mono">
              09/28 → 10/06
            </span>
          </div>

          {/* 垂直 Timeline */}
          <div className="relative pl-6 space-y-6 before:absolute before:left-2 before:top-3 before:bottom-3 before:w-0.5 before:bg-outline-variant/30">
            {/* 取車 */}
            <div className="relative flex items-start justify-between">
              <div className="absolute -left-6 top-1.5 w-4 h-4 rounded-full bg-primary/20 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-primary" />
              </div>
              <div>
                <div className="text-xs font-bold text-on-surface-variant font-mono">09/28</div>
                <div className="text-2xl sm:text-3xl font-black text-on-surface font-mono leading-none my-0.5">
                  09:30
                </div>
                <div className="text-xs font-bold text-on-surface-variant">取車</div>
              </div>
              <div className="text-right">
                <div className="text-lg font-black text-primary font-mono leading-tight">
                  MXP T1
                </div>
                <div className="text-xs font-bold text-on-surface-variant mt-0.5">
                  米蘭機場第一航廈
                </div>
              </div>
            </div>

            {/* 還車 */}
            <div className="relative flex items-start justify-between">
              <div className="absolute -left-6 top-1.5 w-4 h-4 rounded-full bg-primary/20 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-primary" />
              </div>
              <div>
                <div className="text-xs font-bold text-on-surface-variant font-mono">10/06 (二)</div>
                <div className="text-xl sm:text-2xl font-black text-on-surface font-mono leading-none my-0.5">
                  提前還車
                </div>
                <div className="text-xs font-bold text-primary">配合 12:20 FlixBus</div>
              </div>
              <div className="text-right">
                <div className="text-lg font-black text-primary font-mono leading-tight">
                  TRIESTE
                </div>
                <div className="text-xs font-bold text-on-surface-variant mt-0.5">
                  的里雅斯特市區
                </div>
              </div>
            </div>
          </div>

          {/* 下方車型與價格 */}
          <div className="pt-3 border-t border-outline-variant/10 flex items-baseline justify-between">
            <div>
              <div className="text-sm font-black text-on-surface">
                Opel Corsa 或同級 · 自排
              </div>
              <div className="text-[11px] font-bold text-emerald-700 mt-0.5">
                含 Super Cover 全險 ＋ 異地還車費
              </div>
            </div>
            <div className="text-right">
              <div className="text-xl font-black text-on-surface font-mono">
                €883.37
              </div>
              <div className="text-[10px] font-bold text-on-surface-variant">
                3人分攤 €294.46/人
              </div>
            </div>
          </div>

          {/* 按鈕組 */}
          <div className="flex items-center gap-2 pt-1">
            <button 
              onClick={() => openGoogleMaps('Malpensa Airport Terminal 1, FERNO Milan, IT 21010')}
              className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-primary text-white text-xs font-bold active:scale-[0.98] transition-all min-h-[44px]"
            >
              <Navigation size={13} />
              <span>取車導航 (MXP)</span>
            </button>
            <button 
              onClick={() => openGoogleMaps('Piazza della Liberta 9, Trieste, IT 34135')}
              className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-surface-container-low hover:bg-surface-container text-on-surface text-xs font-bold border border-outline-variant/20 active:scale-[0.98] transition-all min-h-[44px]"
            >
              <Navigation size={13} />
              <span>還車導航 (Trieste)</span>
            </button>
            <button 
              onClick={() => setShowHertzMore(!showHertzMore)}
              className="flex items-center justify-center gap-1 py-2.5 px-3.5 rounded-xl bg-surface-container-low hover:bg-surface-container text-on-surface text-xs font-bold border border-outline-variant/20 active:scale-[0.98] transition-all min-h-[44px]"
            >
              <span>更多</span>
              {showHertzMore ? <ChevronUp size={13} /> : <ChevronDown size={13} />}
            </button>
          </div>
        </section>

        {/* HERTZ 更多資訊展開卡片 */}
        {showHertzMore && (
          <section className="p-4.5 space-y-3.5 text-xs border border-outline-variant/15 rounded-3xl bg-surface-container-lowest shadow-xs animate-in fade-in duration-150">
            <div className="flex items-center justify-between">
              <span className="font-mono font-black text-sm text-primary">HERTZ · 赫茲租車訂單</span>
              <span className="text-[11px] font-bold text-on-surface-variant bg-surface-container px-2 py-0.5 rounded-md">
                義大利段自駕 (3人)
              </span>
            </div>

            <div className="flex items-center justify-between min-h-[40px] bg-surface-container-low/60 p-3 rounded-2xl border border-outline-variant/10">
              <div>
                <span className="text-on-surface-variant text-[11px] block">預訂確認號 (Confirmation)</span>
                <span className="font-mono font-black text-base text-primary">L661E7E0321</span>
              </div>
              <button 
                onClick={() => copyToClipboard('L661E7E0321', 'hertz-code')}
                className="flex items-center gap-1 text-xs font-bold text-primary hover:bg-primary/10 px-3 py-1.5 rounded-xl border border-primary/20 transition-colors bg-white shadow-2xs"
              >
                {copied === 'hertz-code' ? <CheckCircle2 size={12} className="text-emerald-600" /> : <Copy size={12} />}
                <span>{copied === 'hertz-code' ? '已複製' : '複製'}</span>
              </button>
            </div>

            <div className="grid grid-cols-2 gap-3 pt-1">
              <div>
                <span className="text-on-surface-variant text-[11px] block">主駕駛人</span>
                <span className="font-bold text-on-surface text-xs sm:text-sm">春香 (CHANG CHUN HSIANG)</span>
              </div>
              <div>
                <span className="text-on-surface-variant text-[11px] block">費用支付</span>
                <span className="font-mono font-bold text-on-surface text-xs sm:text-sm">€883.37 (到店付款)</span>
                <span className="text-[10px] text-emerald-700 font-bold block mt-0.5">3人平攤每人 €294.46</span>
              </div>
            </div>

            <div>
              <span className="text-on-surface-variant text-[11px] block">預訂車型</span>
              <span className="text-on-surface font-medium">Opel Corsa 或同級 · 自排 5 人座</span>
            </div>

            <div className="pt-2.5 border-t border-outline-variant/10 space-y-2">
              <div className="bg-surface-container-low/40 p-2.5 rounded-xl space-y-0.5">
                <span className="text-primary font-bold block">📍 取車：米蘭馬爾彭薩機場第一航廈 (MXP T1)</span>
                <p className="text-on-surface-variant">09/28 (日) 09:30 · 地下一樓 (Floor -1) 租車專區</p>
                <p className="text-[11px] text-outline">Malpensa Airport Terminal 1, FERNO Milan, IT 21010</p>
              </div>

              <div className="bg-surface-container-low/40 p-2.5 rounded-xl space-y-0.5">
                <span className="text-primary font-bold block">📍 還車：的里雅斯特市區 (Trieste Downtown)</span>
                <p className="text-on-surface-variant"><strong>實際行程：</strong>10/06 (二) 提前於 11:15 完成還車 (配合 12:20 FlixBus N544 出發)</p>
                <p className="text-[11px] text-outline">原始合約預約時間：17:30 (提早還車不收額外費用) · Piazza della Liberta 9, Trieste, IT 34135</p>
              </div>
            </div>

            <div className="pt-2 border-t border-outline-variant/10 space-y-1">
              <span className="font-bold text-on-surface block">取車必備證件：</span>
              <p className="text-on-surface-variant">護照正本 · 台灣駕照正本 · 國際駕照 (IDP) · 主駕駛實體信用卡</p>
            </div>

            <div className="p-3 bg-emerald-500/10 rounded-2xl border border-emerald-300/40 text-emerald-950 font-bold text-xs space-y-1">
              <p>💡 <strong>行程銜接提示</strong>：</p>
              <p className="font-normal text-[11px] leading-relaxed">
                10/06 上午從 Vodo Cadore 自駕抵達 Trieste 後，直接在火車站旁的 Silos 專用道辦理還車，步行 3 分鐘即可抵達 FlixBus 乘車月台搭乘 12:20 班車前往 Zagreb。
              </p>
            </div>
          </section>
        )}
      </div>

      {/* ======================= ② FLIXBUS · 接駁巴士 ======================= */}
      <div className="space-y-2.5">
        <section className="bg-surface-container-lowest rounded-3xl p-5 border border-outline-variant/15 shadow-xs space-y-4">
          {/* 卡片上方標籤 */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-on-surface-variant font-mono">10/06 (二)</span>
              <span className="text-xs font-black text-[#58a01a] font-mono tracking-wide">
                FLIXBUS · N544
              </span>
            </div>
            <span className="text-[11px] font-bold text-slate-800 bg-[#70c922]/20 px-2.5 py-0.5 rounded-full font-mono">
              3人搭乘
            </span>
          </div>

          {/* 橫向交通路線 */}
          <div className="py-1">
            <div className="flex items-center justify-between">
              {/* Trieste */}
              <div>
                <div className="text-2xl sm:text-3xl font-black text-on-surface font-mono leading-none">
                  12:20
                </div>
                <div className="text-base sm:text-lg font-black text-on-surface mt-1">
                  TRIESTE
                </div>
                <div className="text-[11px] font-bold text-on-surface-variant">
                  的里雅斯特 巴士總站
                </div>
              </div>

              {/* 橫向路線指示線 */}
              <div className="flex-1 px-3 flex flex-col items-center">
                <div className="w-full flex items-center gap-1.5 my-1">
                  <div className="flex-1 h-0.5 bg-outline-variant/30" />
                  <div className="w-7 h-7 rounded-full bg-[#70c922]/15 flex items-center justify-center text-[#58a01a] shrink-0 shadow-2xs">
                    <Bus size={14} />
                  </div>
                  <div className="flex-1 h-0.5 bg-outline-variant/30" />
                </div>
              </div>

              {/* Zagreb */}
              <div className="text-right">
                <div className="text-2xl sm:text-3xl font-black text-on-surface font-mono leading-none">
                  15:50
                </div>
                <div className="text-base sm:text-lg font-black text-on-surface mt-1">
                  ZAGREB
                </div>
                <div className="text-[11px] font-bold text-on-surface-variant">
                  薩格勒布 巴士總站
                </div>
              </div>
            </div>
          </div>

          {/* 旅客與行李 */}
          <div className="pt-3 border-t border-outline-variant/10 space-y-1.5 text-xs">
            <div className="text-on-surface font-medium">
              許振宏 <strong className="font-mono font-bold text-primary">4B</strong> · 春香 <strong className="font-mono font-bold text-primary">4D</strong> · 麗安 <strong className="font-mono font-bold text-primary">4C</strong>
            </div>
            <div className="text-on-surface-variant">
              🧳 每人 20kg 託運 ＋ 🎒 7kg 隨身
            </div>
          </div>

          {/* 按鈕組 */}
          <div className="flex items-center gap-2 pt-1">
            <button 
              onClick={() => openGoogleMaps('Piazza della Libertà 9, 34135 Trieste, Italy')}
              className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-[#58a01a] text-white text-xs font-bold active:scale-[0.98] transition-all min-h-[44px]"
            >
              <Navigation size={13} />
              <span>上車導航</span>
            </button>
            <button 
              onClick={() => setShowFlixbusMore(!showFlixbusMore)}
              className="flex items-center justify-center gap-1 py-2.5 px-4 rounded-xl bg-surface-container-low hover:bg-surface-container text-on-surface text-xs font-bold border border-outline-variant/20 active:scale-[0.98] transition-all min-h-[44px]"
            >
              <span>更多</span>
              {showFlixbusMore ? <ChevronUp size={13} /> : <ChevronDown size={13} />}
            </button>
          </div>
        </section>

        {/* FLIXBUS 更多資訊展開卡片 */}
        {showFlixbusMore && (
          <section className="p-4.5 space-y-3.5 text-xs border border-outline-variant/15 rounded-3xl bg-surface-container-lowest shadow-xs animate-in fade-in duration-150">
            <div className="flex items-center justify-between">
              <span className="font-mono font-black text-sm text-[#58a01a]">FlixBus N544 · 跨國接駁</span>
              <span className="text-[11px] font-bold text-on-surface-variant bg-surface-container px-2 py-0.5 rounded-md">
                義大利 ➜ 克羅埃西亞
              </span>
            </div>

            <div className="flex items-center justify-between min-h-[40px] bg-surface-container-low/60 p-3 rounded-2xl border border-outline-variant/10">
              <div>
                <span className="text-on-surface-variant text-[11px] block">訂位代號 (Booking Number)</span>
                <span className="font-mono font-black text-base text-primary">3384947118</span>
              </div>
              <button 
                onClick={() => copyToClipboard('3384947118', 'flixbus-code')}
                className="flex items-center gap-1 text-xs font-bold text-primary hover:bg-primary/10 px-3 py-1.5 rounded-xl border border-primary/20 transition-colors bg-white shadow-2xs"
              >
                {copied === 'flixbus-code' ? <CheckCircle2 size={12} className="text-emerald-600" /> : <Copy size={12} />}
                <span>{copied === 'flixbus-code' ? '已複製' : '複製'}</span>
              </button>
            </div>

            <div className="grid grid-cols-2 gap-3 pt-1">
              <div>
                <span className="text-on-surface-variant text-[11px] block">乘車日期</span>
                <span className="font-mono font-bold text-on-surface text-xs sm:text-sm">2026/10/06 (二)</span>
              </div>
              <div>
                <span className="text-on-surface-variant text-[11px] block">票價總計</span>
                <span className="font-mono font-bold text-on-surface text-xs sm:text-sm">€62.13 (3人)</span>
              </div>
            </div>

            <div className="pt-2.5 border-t border-outline-variant/10 space-y-2">
              <div className="bg-surface-container-low/40 p-2.5 rounded-xl space-y-0.5">
                <span className="text-[#58a01a] font-bold block">📍 上車：的里雅斯特巴士總站 Trieste (Autostazione)</span>
                <p className="text-on-surface font-medium">12:20 發車 · 上車位置：FlixBus 月台 2</p>
                <p className="text-on-surface-variant text-[11px]">Piazza della Libertà 9 (Autostazione Silos), 34135 Trieste</p>
              </div>

              <div className="bg-surface-container-low/40 p-2.5 rounded-xl space-y-0.5">
                <span className="text-[#58a01a] font-bold block">📍 下車：薩格勒布巴士總站 Zagreb Bus Station</span>
                <p className="text-on-surface font-medium">15:50 預計抵達</p>
                <p className="text-on-surface-variant text-[11px]">Avenija Marina Držića 4, 10000 Zagreb</p>
              </div>
            </div>

            <div className="pt-2 border-t border-outline-variant/10 space-y-1">
              <span className="font-bold text-on-surface block">座位與旅客名單：</span>
              <div className="grid grid-cols-3 gap-2 pt-0.5">
                <div className="bg-white p-2 rounded-xl border border-outline-variant/15 text-center">
                  <span className="text-[10px] text-on-surface-variant block">Seat 4B</span>
                  <span className="font-bold text-on-surface">許振宏</span>
                </div>
                <div className="bg-white p-2 rounded-xl border border-outline-variant/15 text-center">
                  <span className="text-[10px] text-on-surface-variant block">Seat 4D</span>
                  <span className="font-bold text-on-surface">春香</span>
                </div>
                <div className="bg-white p-2 rounded-xl border border-outline-variant/15 text-center">
                  <span className="text-[10px] text-on-surface-variant block">Seat 4C</span>
                  <span className="font-bold text-on-surface">麗安</span>
                </div>
              </div>
            </div>

            <div className="p-3 bg-amber-500/10 rounded-2xl border border-amber-300/40 text-amber-950 font-bold text-xs">
              💡 提醒：跨國巴士建議至少提前 15-20 分鐘抵達月台核對護照上車。
            </div>
          </section>
        )}
      </div>

      {/* ======================= ③ UNI RENT · 克羅埃西亞租車 ======================= */}
      <div className="space-y-2.5">
        <section className="bg-surface-container-lowest rounded-3xl p-5 border border-outline-variant/15 shadow-xs space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-xs font-black text-primary font-mono tracking-wide">
              UNI RENT · 克羅埃西亞租車
            </span>
            <span className="text-[11px] font-bold text-primary bg-primary/10 px-2.5 py-0.5 rounded-full font-mono">
              10/07 → 10/21 (14天)
            </span>
          </div>

          {/* 垂直 Timeline */}
          <div className="relative pl-6 space-y-6 before:absolute before:left-2 before:top-3 before:bottom-3 before:w-0.5 before:bg-outline-variant/30">
            {/* 取車 */}
            <div className="relative flex items-start justify-between">
              <div className="absolute -left-6 top-1.5 w-4 h-4 rounded-full bg-primary/20 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-primary" />
              </div>
              <div>
                <div className="text-xs font-bold text-on-surface-variant font-mono">10/07 (三)</div>
                <div className="text-2xl sm:text-3xl font-black text-on-surface font-mono leading-none my-0.5">
                  13:01
                </div>
                <div className="text-xs font-bold text-on-surface-variant">取車 (營業 08:00-20:00)</div>
              </div>
              <div className="text-right">
                <div className="text-lg font-black text-primary font-mono leading-tight">
                  ZAGREB · ZGD
                </div>
                <div className="text-xs font-bold text-on-surface-variant mt-0.5">
                  薩格勒布市中心門市
                </div>
              </div>
            </div>

            {/* 還車 */}
            <div className="relative flex items-start justify-between">
              <div className="absolute -left-6 top-1.5 w-4 h-4 rounded-full bg-primary/20 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-primary" />
              </div>
              <div>
                <div className="text-xs font-bold text-on-surface-variant font-mono">10/21 (三)</div>
                <div className="text-2xl sm:text-3xl font-black text-on-surface font-mono leading-none my-0.5">
                  13:01
                </div>
                <div className="text-xs font-bold text-on-surface-variant">還車 (營業 07:00-21:00)</div>
              </div>
              <div className="text-right">
                <div className="text-lg font-black text-primary font-mono leading-tight">
                  DUBROVNIK · DBA
                </div>
                <div className="text-xs font-bold text-on-surface-variant mt-0.5">
                  杜布羅夫尼克機場
                </div>
              </div>
            </div>
          </div>

          {/* 下方車型與價格 */}
          <div className="pt-3 border-t border-outline-variant/10 flex items-baseline justify-between">
            <div>
              <div className="text-sm font-black text-on-surface">
                Mercedes V-Class (LVAR) 7+1人座 · 自排
              </div>
              <div className="text-[11px] font-bold text-primary mt-0.5">
                Premium 零自負額 €0 · 含綠卡跨境與渡輪許可
              </div>
            </div>
            <div className="text-xl font-black text-on-surface font-mono">
              €1,596.00
            </div>
          </div>

          {/* 按鈕組 */}
          <div className="flex items-center gap-2 pt-1">
            <button 
              onClick={() => openGoogleMaps('Kranjčevićeva 46, 10000 Zagreb, Croatia')}
              className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-primary text-white text-xs font-bold active:scale-[0.98] transition-all min-h-[44px]"
            >
              <Navigation size={13} />
              <span>取車導航</span>
            </button>
            <button 
              onClick={() => openGoogleMaps('Zračna Luka Dubrovnik, Mocici, Dobrota 24, 20213 Čilipi, Croatia')}
              className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-surface-container-low hover:bg-surface-container text-on-surface text-xs font-bold border border-outline-variant/20 active:scale-[0.98] transition-all min-h-[44px]"
            >
              <Navigation size={13} />
              <span>還車導航</span>
            </button>
            <button 
              onClick={() => setShowUniRentMore(!showUniRentMore)}
              className="flex items-center justify-center gap-1 py-2.5 px-3.5 rounded-xl bg-surface-container-low hover:bg-surface-container text-on-surface text-xs font-bold border border-outline-variant/20 active:scale-[0.98] transition-all min-h-[44px]"
            >
              <span>更多</span>
              {showUniRentMore ? <ChevronUp size={13} /> : <ChevronDown size={13} />}
            </button>
          </div>
        </section>

        {/* UNI RENT 更多資訊展開卡片 */}
        {showUniRentMore && (
          <section className="p-4.5 space-y-3.5 text-xs border border-outline-variant/15 rounded-3xl bg-surface-container-lowest shadow-xs animate-in fade-in duration-150">
            <div className="flex items-center justify-between">
              <span className="font-mono font-black text-sm text-primary">UNI RENT · 克羅埃西亞租車</span>
              <span className="text-[11px] font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded-md">
                Mercedes 7+1商務車 · 14天自駕
              </span>
            </div>

            <div className="flex items-center justify-between min-h-[40px] bg-surface-container-low/60 p-3 rounded-2xl border border-outline-variant/10">
              <div>
                <span className="text-on-surface-variant text-[11px] block">預訂單號 (Rezervacija / Booking ID)</span>
                <span className="font-mono font-black text-base text-primary">26-ZGD-1544</span>
              </div>
              <button 
                onClick={() => copyToClipboard('26-ZGD-1544', 'unirent-code')}
                className="flex items-center gap-1 text-xs font-bold text-primary hover:bg-primary/10 px-3 py-1.5 rounded-xl border border-primary/20 transition-colors bg-white shadow-2xs"
              >
                {copied === 'unirent-code' ? <CheckCircle2 size={12} className="text-emerald-600" /> : <Copy size={12} />}
                <span>{copied === 'unirent-code' ? '已複製' : '複製'}</span>
              </button>
            </div>

            <div className="grid grid-cols-2 gap-3 pt-1">
              <div>
                <span className="text-on-surface-variant text-[11px] block">主駕駛人 / 承租人</span>
                <span className="font-bold text-on-surface text-xs sm:text-sm">許振宏 (CHEN-HUNG HSU)</span>
              </div>
              <div>
                <span className="text-on-surface-variant text-[11px] block">總額 / 現場付款</span>
                <span className="font-mono font-bold text-primary text-xs sm:text-sm">€1,596.00 (押金 €2,746)</span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              <div>
                <span className="text-on-surface-variant text-[11px] block">預訂車型 (Category LVAR)</span>
                <span className="text-on-surface font-medium">Mercedes V-Class 7+1 或同級 · 自排</span>
              </div>
              <div>
                <span className="text-on-surface-variant text-[11px] block">全險保障 (Insurance)</span>
                <span className="text-primary font-bold">Premium Coverage · 自負額 €0</span>
              </div>
            </div>

            <div className="pt-2.5 border-t border-outline-variant/10 space-y-2">
              <div className="bg-surface-container-low/40 p-2.5 rounded-xl space-y-0.5">
                <span className="text-primary font-bold block">📍 取車：薩格勒布市中心門市 (Zagreb Downtown ZGD)</span>
                <p className="text-on-surface-variant font-medium">10/07 (三) 13:01 · 營業時間 08:00 - 20:00</p>
                <p className="text-[11px] text-outline">Kranjčevićeva 46, Zagreb, Croatia · 電話: +385 99 499 9135</p>
                <p className="text-[11px] text-outline">Email: zagreb@uni-rent.hr</p>
              </div>

              <div className="bg-surface-container-low/40 p-2.5 rounded-xl space-y-0.5">
                <span className="text-primary font-bold block">📍 還車：杜布羅夫尼克機場門市 (Dubrovnik Airport DBA)</span>
                <p className="text-on-surface-variant font-medium">10/21 (三) 13:01 · 營業時間 07:00 - 21:00</p>
                <p className="text-[11px] text-outline">Zračna Luka Dubrovnik, Mocici, Dobrota 24, Čilipi · 電話: +385 99 829 5829</p>
                <p className="text-[11px] text-outline">Email: dubrovnik-airport@uni-rent.hr</p>
              </div>
            </div>

            <div className="pt-2 border-t border-outline-variant/10 space-y-1">
              <span className="font-bold text-on-surface block">費用明細與免費包含項目：</span>
              <ul className="list-disc pl-4 space-y-0.5 text-on-surface-variant text-[11px]">
                <li><strong>車輛租金 (LVAR 14天)</strong>：€966.00 (含稅)</li>
                <li><strong>SCDW 超級車損與竊盜險</strong>：€420.00 (含稅 · 零自負額 €0)</li>
                <li><strong>WUG 輪胎、底盤與玻璃險</strong>：€210.00 (含稅)</li>
                <li><strong>Green card 綠卡 / 跨境手續</strong>：€0.00 (免費包含)</li>
                <li><strong>Cross border fee 跨國境費用 (斯洛維尼亞/波赫)</strong>：€0.00 (免費包含)</li>
                <li><strong>Ferry fee 渡輪許可費用</strong>：€0.00 (免費包含)</li>
                <li><strong>One way fee 薩格勒布取➜杜布羅夫尼克還 異地還車費</strong>：€0.00 (免費包含)</li>
                <li><strong>5人分攤</strong>：€1,596.00 ÷ 5 = <strong>€319.20 / 人</strong></li>
              </ul>
            </div>

            <div className="pt-2 border-t border-outline-variant/10 space-y-1">
              <span className="font-bold text-on-surface block">取車必備證件與押金：</span>
              <p className="text-on-surface-variant">護照正本 · 台灣駕照正本 · 國際駕照 (IDP) · 主駕駛實體信用卡（需預留信用卡預授權押金 €2,746.00 額度）</p>
            </div>

            <div className="space-y-2 pt-1">
              <div className="p-3 bg-amber-500/10 rounded-2xl border border-amber-300/40 text-amber-950 font-bold text-xs">
                💡 重要：自駕跨國境（斯洛維尼亞、波赫）及搭乘渡輪均已免費取得許可；如遇事故務必報警並取得 Police Report 以便保險全額理賠。
              </div>
              <div className="p-3 bg-surface-container-high/60 rounded-2xl text-on-surface font-medium text-xs">
                🏢 還車說明：於杜布羅夫尼克機場 (DBV) 航廈租車專區 UNI RENT 櫃檯辦理還車手續，點交無誤後解除預授權押金。
              </div>
            </div>
          </section>
        )}
      </div>

      {/* ======================= ④ JADROLINIJA · 汽車渡輪 (去程 & 回程) ======================= */}
      <div className="space-y-2.5">
        <section className="bg-surface-container-lowest rounded-3xl p-5 border border-outline-variant/15 shadow-xs space-y-4">
          {/* 卡片上方標籤與航段切換器 */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
            <div className="flex items-center gap-2">
              <span className="text-xs font-black text-[#00508F] font-mono tracking-wide flex items-center gap-1.5">
                <Ship size={15} />
                JADROLINIJA · 汽車渡輪
              </span>
              <span className="text-[11px] font-bold text-[#00508F] bg-[#00508F]/10 px-2.5 py-0.5 rounded-full font-mono">
                人車同行 · 5人+車
              </span>
            </div>

            {/* 去程 / 回程 切換 Tab */}
            <div className="flex items-center bg-surface-container-low p-1 rounded-xl border border-outline-variant/15 text-xs font-bold">
              <button
                type="button"
                onClick={() => setJadroVoyage('outbound')}
                className={`px-3 py-1 rounded-lg transition-all ${
                  jadroVoyage === 'outbound'
                    ? 'bg-[#00508F] text-white shadow-2xs font-black'
                    : 'text-on-surface-variant hover:text-on-surface'
                }`}
              >
                去程 10/15 (四)
              </button>
              <button
                type="button"
                onClick={() => setJadroVoyage('inbound')}
                className={`px-3 py-1 rounded-lg transition-all ${
                  jadroVoyage === 'inbound'
                    ? 'bg-[#00508F] text-white shadow-2xs font-black'
                    : 'text-on-surface-variant hover:text-on-surface'
                }`}
              >
                回程 10/17 (六)
              </button>
            </div>
          </div>

          {/* 航線內容：去程 vs 回程 */}
          {jadroVoyage === 'outbound' ? (
            /* 去程：Split -> Stari Grad */
            <div className="space-y-4 animate-in fade-in duration-150">
              <div className="py-1">
                <div className="flex items-center justify-between">
                  {/* Split */}
                  <div>
                    <div className="text-2xl sm:text-3xl font-black text-on-surface font-mono leading-none">
                      08:30
                    </div>
                    <div className="text-base sm:text-lg font-black text-on-surface mt-1">
                      SPLIT
                    </div>
                    <div className="text-[11px] font-bold text-on-surface-variant">
                      斯普利特 渡輪碼頭
                    </div>
                  </div>

                  {/* 橫向路線指示線 */}
                  <div className="flex-1 px-3 flex flex-col items-center">
                    <span className="text-[11px] font-bold text-on-surface-variant font-mono mb-0.5">
                      1 h 50 min
                    </span>
                    <div className="w-full flex items-center gap-1.5 my-0.5">
                      <div className="flex-1 h-0.5 bg-outline-variant/30" />
                      <div className="w-7 h-7 rounded-full bg-[#00508F]/15 flex items-center justify-center text-[#00508F] shrink-0 shadow-2xs">
                        <Ship size={14} />
                      </div>
                      <div className="flex-1 h-0.5 bg-outline-variant/30" />
                    </div>
                    <span className="text-[10px] text-outline font-mono">
                      直達渡輪 · 去程
                    </span>
                  </div>

                  {/* Stari Grad */}
                  <div className="text-right">
                    <div className="text-2xl sm:text-3xl font-black text-on-surface font-mono leading-none">
                      10:20
                    </div>
                    <div className="text-base sm:text-lg font-black text-on-surface mt-1">
                      STARI GRAD
                    </div>
                    <div className="text-[11px] font-bold text-on-surface-variant">
                      斯塔里格勒 (赫瓦爾島)
                    </div>
                  </div>
                </div>
              </div>

              {/* 票價明細 (去程) */}
              <div className="pt-3 border-t border-outline-variant/10 space-y-2 text-xs">
                <div className="grid grid-cols-2 gap-2">
                  <div className="flex items-center justify-between bg-surface-container-low/50 p-2 rounded-xl">
                    <div className="flex items-center gap-1.5 text-on-surface font-medium">
                      <Users size={13} className="text-primary" />
                      <span>5 × Adult (成人票)</span>
                    </div>
                    <span className="font-mono font-bold text-on-surface">€29.50</span>
                  </div>
                  <div className="flex items-center justify-between bg-surface-container-low/50 p-2 rounded-xl">
                    <div className="flex items-center gap-1.5 text-on-surface font-medium">
                      <Car size={13} className="text-primary" />
                      <span>1 × Car &le;5M (自小客)</span>
                    </div>
                    <span className="font-mono font-bold text-on-surface">€35.60</span>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-1">
                  <div className="flex items-center gap-1 text-[11px] text-on-surface-variant">
                    <Luggage size={12} className="text-outline" />
                    <span>隨身行李 20kg 內免申報</span>
                  </div>
                  <div className="text-right">
                    <span className="text-[11px] text-on-surface-variant mr-1.5">去程單程</span>
                    <span className="text-xl font-black text-[#00508F] font-mono">€65.10</span>
                  </div>
                </div>
              </div>

              {/* 按鈕組 (去程) */}
              <div className="flex items-center gap-2 pt-1">
                <button 
                  type="button"
                  onClick={() => openGoogleMaps('Gat Sv. Duje 1, 21000 Split, Croatia')}
                  className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-[#00508F] text-white text-xs font-bold active:scale-[0.98] transition-all min-h-[44px]"
                >
                  <Navigation size={13} />
                  <span>斯普利特碼頭導航</span>
                </button>
                <button 
                  type="button"
                  onClick={() => openGoogleMaps('Trajektna luka Stari Grad, 21460 Stari Grad, Croatia')}
                  className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-surface-container-low hover:bg-surface-container text-on-surface text-xs font-bold border border-outline-variant/20 active:scale-[0.98] transition-all min-h-[44px]"
                >
                  <Navigation size={13} />
                  <span>抵達港口導航</span>
                </button>
                <button 
                  type="button"
                  onClick={() => setShowJadroMore(!showJadroMore)}
                  className="flex items-center justify-center gap-1 py-2.5 px-4 rounded-xl bg-surface-container-low hover:bg-surface-container text-on-surface text-xs font-bold border border-outline-variant/20 active:scale-[0.98] transition-all min-h-[44px]"
                >
                  <span>更多</span>
                  {showJadroMore ? <ChevronUp size={13} /> : <ChevronDown size={13} />}
                </button>
              </div>
            </div>
          ) : (
            /* 回程：Sućuraj -> Drvenik */
            <div className="space-y-4 animate-in fade-in duration-150">
              <div className="py-1">
                <div className="flex items-center justify-between">
                  {/* Sućuraj */}
                  <div>
                    <div className="text-2xl sm:text-3xl font-black text-on-surface font-mono leading-none">
                      09:30
                    </div>
                    <div className="text-base sm:text-lg font-black text-on-surface mt-1">
                      SUĆURAJ
                    </div>
                    <div className="text-[11px] font-bold text-on-surface-variant">
                      蘇丘拉伊 (赫瓦爾島東端)
                    </div>
                  </div>

                  {/* 橫向路線指示線 */}
                  <div className="flex-1 px-3 flex flex-col items-center">
                    <span className="text-[11px] font-bold text-on-surface-variant font-mono mb-0.5">
                      30 min
                    </span>
                    <div className="w-full flex items-center gap-1.5 my-0.5">
                      <div className="flex-1 h-0.5 bg-outline-variant/30" />
                      <div className="w-7 h-7 rounded-full bg-[#00508F]/15 flex items-center justify-center text-[#00508F] shrink-0 shadow-2xs">
                        <Ship size={14} />
                      </div>
                      <div className="flex-1 h-0.5 bg-outline-variant/30" />
                    </div>
                    <span className="text-[10px] text-outline font-mono">
                      直達渡輪 · 回程
                    </span>
                  </div>

                  {/* Drvenik */}
                  <div className="text-right">
                    <div className="text-2xl sm:text-3xl font-black text-on-surface font-mono leading-none">
                      10:00
                    </div>
                    <div className="text-base sm:text-lg font-black text-on-surface mt-1">
                      DRVENIK
                    </div>
                    <div className="text-[11px] font-bold text-on-surface-variant">
                      德爾韋尼克 (克國本土)
                    </div>
                  </div>
                </div>
              </div>

              {/* 票價明細 (回程) */}
              <div className="pt-3 border-t border-outline-variant/10 space-y-2 text-xs">
                <div className="grid grid-cols-2 gap-2">
                  <div className="flex items-center justify-between bg-surface-container-low/50 p-2 rounded-xl">
                    <div className="flex items-center gap-1.5 text-on-surface font-medium">
                      <Users size={13} className="text-primary" />
                      <span>5 × Adult (成人票)</span>
                    </div>
                    <span className="font-mono font-bold text-on-surface">€12.00</span>
                  </div>
                  <div className="flex items-center justify-between bg-surface-container-low/50 p-2 rounded-xl">
                    <div className="flex items-center gap-1.5 text-on-surface font-medium">
                      <Car size={13} className="text-primary" />
                      <span>1 × Car &le;5M (自小客)</span>
                    </div>
                    <span className="font-mono font-bold text-on-surface">€13.50</span>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-1">
                  <div className="flex items-center gap-1 text-[11px] text-on-surface-variant">
                    <Luggage size={12} className="text-outline" />
                    <span>隨身行李 20kg 內免申報</span>
                  </div>
                  <div className="text-right">
                    <span className="text-[11px] text-on-surface-variant mr-1.5">回程單程</span>
                    <span className="text-xl font-black text-[#00508F] font-mono">€25.50</span>
                  </div>
                </div>
              </div>

              {/* 按鈕組 (回程) */}
              <div className="flex items-center gap-2 pt-1">
                <button 
                  type="button"
                  onClick={() => openGoogleMaps('Trajektno pristanište Sućuraj, 21469 Sućuraj, Croatia')}
                  className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-[#00508F] text-white text-xs font-bold active:scale-[0.98] transition-all min-h-[44px]"
                >
                  <Navigation size={13} />
                  <span>蘇丘拉伊碼頭導航</span>
                </button>
                <button 
                  type="button"
                  onClick={() => openGoogleMaps('Trajektno pristanište Drvenik, 21328 Drvenik, Croatia')}
                  className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-surface-container-low hover:bg-surface-container text-on-surface text-xs font-bold border border-outline-variant/20 active:scale-[0.98] transition-all min-h-[44px]"
                >
                  <Navigation size={13} />
                  <span>抵達港口導航</span>
                </button>
                <button 
                  type="button"
                  onClick={() => setShowJadroMore(!showJadroMore)}
                  className="flex items-center justify-center gap-1 py-2.5 px-4 rounded-xl bg-surface-container-low hover:bg-surface-container text-on-surface text-xs font-bold border border-outline-variant/20 active:scale-[0.98] transition-all min-h-[44px]"
                >
                  <span>更多</span>
                  {showJadroMore ? <ChevronUp size={13} /> : <ChevronDown size={13} />}
                </button>
              </div>
            </div>
          )}
        </section>

        {/* JADROLINIJA 更多資訊展開卡片 */}
        {showJadroMore && (
          <section className="p-4.5 space-y-3.5 text-xs border border-outline-variant/15 rounded-3xl bg-surface-container-lowest shadow-xs animate-in fade-in duration-150">
            <div className="flex items-center justify-between">
              <span className="font-mono font-black text-sm text-[#00508F]">JADROLINIJA · 汽車渡輪 (Ferry)</span>
              <span className="text-[11px] font-bold text-on-surface-variant bg-surface-container px-2 py-0.5 rounded-md">
                {jadroVoyage === 'outbound' ? 'Split ➜ Stari Grad' : 'Sućuraj ➜ Drvenik'}
              </span>
            </div>

            <div className="flex items-center justify-between min-h-[40px] bg-surface-container-low/60 p-3 rounded-2xl border border-outline-variant/10">
              <div>
                <span className="text-on-surface-variant text-[11px] block">預訂平台 (Official Booking)</span>
                <span className="font-mono font-black text-sm text-[#00508F]">shop.jadrolinija.hr</span>
              </div>
              <span className="text-xs font-bold text-slate-700 bg-white px-2.5 py-1 rounded-lg border border-outline-variant/20 font-mono shadow-2xs">
                {jadroVoyage === 'outbound' ? '航程 1h 50m · 單程 €65.10' : '航程 30m · 單程 €25.50'}
              </span>
            </div>

            <div className="grid grid-cols-2 gap-3 pt-1">
              <div>
                <span className="text-on-surface-variant text-[11px] block">乘船日期</span>
                <span className="font-mono font-bold text-on-surface text-xs sm:text-sm">
                  {jadroVoyage === 'outbound' ? '2026/10/15 (四)' : '2026/10/17 (六)'}
                </span>
              </div>
              <div>
                <span className="text-on-surface-variant text-[11px] block">票價總計 (5人+1車)</span>
                <span className="font-mono font-bold text-[#00508F] text-xs sm:text-sm">
                  {jadroVoyage === 'outbound' ? '€65.10 (單程)' : '€25.50 (單程)'}
                </span>
              </div>
            </div>

            <div className="pt-2.5 border-t border-outline-variant/10 space-y-2">
              {jadroVoyage === 'outbound' ? (
                <>
                  <div className="bg-surface-container-low/40 p-2.5 rounded-xl space-y-0.5">
                    <span className="text-[#00508F] font-bold block">📍 去程登船：斯普利特渡輪港口 (Split Ferry Port)</span>
                    <p className="text-on-surface font-medium">08:30 出發 · 登船碼頭：Gat Sv. Duje</p>
                    <p className="text-on-surface-variant text-[11px]">Gat Sv. Duje 1, 21000 Split, Croatia</p>
                  </div>

                  <div className="bg-surface-container-low/40 p-2.5 rounded-xl space-y-0.5">
                    <span className="text-[#00508F] font-bold block">📍 去程下船：赫瓦爾斯塔里格勒港口 (Stari Grad Port)</span>
                    <p className="text-on-surface font-medium">10:20 預計抵達 · 開車下船直接展開赫瓦爾島行程</p>
                    <p className="text-on-surface-variant text-[11px]">Trajektno pristanište, 21460 Stari Grad, Hvar Island</p>
                  </div>
                </>
              ) : (
                <>
                  <div className="bg-surface-container-low/40 p-2.5 rounded-xl space-y-0.5">
                    <span className="text-[#00508F] font-bold block">📍 回程登船：蘇丘拉伊渡輪港口 (Sućuraj Ferry Port)</span>
                    <p className="text-on-surface font-medium">09:30 出發 · 位於赫瓦爾島最東端碼頭</p>
                    <p className="text-on-surface-variant text-[11px]">Trajektno pristanište Sućuraj, 21469 Sućuraj, Hvar, Croatia</p>
                  </div>

                  <div className="bg-surface-container-low/40 p-2.5 rounded-xl space-y-0.5">
                    <span className="text-[#00508F] font-bold block">📍 回程下船：德爾韋尼克港口 (Drvenik Port)</span>
                    <p className="text-on-surface font-medium">10:00 預計抵達 · 開車下船接亞德里亞公路南下</p>
                    <p className="text-on-surface-variant text-[11px]">Trajektno pristanište Drvenik, 21328 Drvenik, Croatia</p>
                  </div>
                </>
              )}
            </div>

            <div className="pt-2 border-t border-outline-variant/10 space-y-1">
              <span className="font-bold text-on-surface block">購票明細與行李規範：</span>
              <ul className="list-disc pl-4 space-y-1 text-on-surface-variant">
                {jadroVoyage === 'outbound' ? (
                  <>
                    <li><strong>成人票</strong>：5 位成人 (5 × €5.90 = €29.50)</li>
                    <li><strong>車輛票</strong>：1 輛長度 5 公尺以下自小客車 (€35.60)</li>
                  </>
                ) : (
                  <>
                    <li><strong>成人票</strong>：5 位成人 (€12.00)</li>
                    <li><strong>車輛票</strong>：1 輛長度 5 公尺以下自小客車 (€13.50)</li>
                  </>
                )}
                <li><strong>隨身行李</strong>：人車同行，每人隨身行李 20kg 以內無需額外申報</li>
                <li><strong>雙程合計</strong>：去程 €65.10 + 回程 €25.50 = <strong>€90.60</strong> (5人平攤約 €18.12/人)</li>
              </ul>
            </div>

            <div className="p-3 bg-amber-500/10 rounded-2xl border border-amber-300/40 text-amber-950 font-bold text-xs space-y-1">
              <p>💡 <strong>排隊登船重要提醒</strong>：</p>
              <p className="font-normal text-[11px] leading-relaxed">
                汽車渡輪即使已預先購票，車輛上船仍依現場排隊順序為準。建議在<strong>啟航前 30–45 分鐘</strong>抵達港口專用車道排隊。
              </p>
            </div>
          </section>
        )}
      </div>

      {/* ======================= ⑤ HERTZ · 米蘭短租自駕 (返程 · 手冊正式合約) ======================= */}
      <div className="space-y-2.5">
        <section className="bg-surface-container-lowest rounded-3xl p-5 border border-outline-variant/15 shadow-xs space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-xs font-black text-primary font-mono tracking-wide">
              HERTZ · 米蘭短租自駕 (手冊正式合約)
            </span>
            <span className="text-[11px] font-bold text-primary bg-primary/10 px-2.5 py-0.5 rounded-full font-mono">
              10/21 17:00 → 10/23 13:30 (2天)
            </span>
          </div>

          {/* 垂直 Timeline */}
          <div className="relative pl-6 space-y-6 before:absolute before:left-2 before:top-3 before:bottom-3 before:w-0.5 before:bg-outline-variant/30">
            {/* 取車 */}
            <div className="relative flex items-start justify-between">
              <div className="absolute -left-6 top-1.5 w-4 h-4 rounded-full bg-primary/20 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-primary" />
              </div>
              <div>
                <div className="text-xs font-bold text-on-surface-variant font-mono">10/21 (三)</div>
                <div className="text-2xl sm:text-3xl font-black text-on-surface font-mono leading-none my-0.5">
                  17:00
                </div>
                <div className="text-xs font-bold text-on-surface-variant">取車 (BGY P3)</div>
              </div>
              <div className="text-right">
                <div className="text-lg font-black text-primary font-mono leading-tight">
                  BGY P3
                </div>
                <div className="text-xs font-bold text-on-surface-variant mt-0.5">
                  貝加莫機場 P3 停車場
                </div>
              </div>
            </div>

            {/* 還車 */}
            <div className="relative flex items-start justify-between">
              <div className="absolute -left-6 top-1.5 w-4 h-4 rounded-full bg-primary/20 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-primary" />
              </div>
              <div>
                <div className="text-xs font-bold text-on-surface-variant font-mono">10/23 (五)</div>
                <div className="text-2xl sm:text-3xl font-black text-on-surface font-mono leading-none my-0.5">
                  13:30
                </div>
                <div className="text-xs font-bold text-on-surface-variant">還車 (MXP T1)</div>
              </div>
              <div className="text-right">
                <div className="text-lg font-black text-primary font-mono leading-tight">
                  MXP T1
                </div>
                <div className="text-xs font-bold text-on-surface-variant mt-0.5">
                  米蘭馬爾彭薩機場第一航廈
                </div>
              </div>
            </div>
          </div>

          {/* 下方車型與價格 */}
          <div className="pt-3 border-t border-outline-variant/10 flex items-baseline justify-between">
            <div>
              <div className="text-sm font-black text-on-surface">
                Standard Elite · PEUGEOT E-5008 或同級
              </div>
              <div className="text-[11px] font-bold text-emerald-700 mt-0.5">
                SuperCover (SC) 零自負額全險 ＋ 碰撞竊盜全保 ＋ 無限免費里程
              </div>
            </div>
            <div className="text-right">
              <div className="text-xl font-black text-on-surface font-mono">
                €336.42
              </div>
              <div className="text-[10px] font-bold text-on-surface-variant">
                5人分攤 €67.28/人
              </div>
            </div>
          </div>

          {/* 按鈕組 */}
          <div className="flex items-center gap-2 pt-1">
            <button 
              onClick={() => openGoogleMaps('Orio Al Serio Airport P3 Bergamo')}
              className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-primary text-white text-xs font-bold active:scale-[0.98] transition-all min-h-[44px]"
            >
              <Navigation size={13} />
              <span>取車導航 (BGY P3)</span>
            </button>
            <button 
              onClick={() => openGoogleMaps('Malpensa Airport Terminal 1, FERNO Milan, IT 21010')}
              className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-surface-container text-on-surface text-xs font-bold active:scale-[0.98] transition-all min-h-[44px] border border-outline-variant/20"
            >
              <Navigation size={13} />
              <span>還車導航 (MXP T1)</span>
            </button>
            <button 
              onClick={() => setShowHertzMilanMore(!showHertzMilanMore)}
              className="flex items-center justify-center gap-1 py-2.5 px-3.5 rounded-xl bg-surface-container-low hover:bg-surface-container text-on-surface text-xs font-bold border border-outline-variant/20 active:scale-[0.98] transition-all min-h-[44px]"
            >
              <span>更多</span>
              {showHertzMilanMore ? <ChevronUp size={13} /> : <ChevronDown size={13} />}
            </button>
          </div>
        </section>

        {/* HERTZ 米蘭更多資訊展開卡片 */}
        {showHertzMilanMore && (
          <section className="p-4.5 space-y-3.5 text-xs border border-outline-variant/15 rounded-3xl bg-surface-container-lowest shadow-xs animate-in fade-in duration-150">
            <div className="flex items-center justify-between">
              <span className="font-mono font-black text-sm text-primary">HERTZ · 手冊正式租車合約</span>
              <span className="text-[11px] font-bold text-primary bg-primary/10 px-2 py-0.5 rounded-md font-mono">
                Gold Plus Rewards
              </span>
            </div>

            <div className="flex items-center justify-between min-h-[40px] bg-surface-container-low/60 p-3 rounded-2xl border border-outline-variant/10">
              <div>
                <span className="text-on-surface-variant text-[11px] block">手冊正式訂單確認號 (Confirmation #)</span>
                <span className="font-mono font-black text-base text-primary">L717EEC42A9</span>
              </div>
              <button 
                onClick={() => copyToClipboard('L717EEC42A9', 'hertz-milan-code')}
                className="flex items-center gap-1 text-xs font-bold text-primary hover:bg-primary/10 px-3 py-1.5 rounded-xl border border-primary/20 transition-colors bg-white shadow-2xs cursor-pointer"
              >
                {copied === 'hertz-milan-code' ? <CheckCircle2 size={12} className="text-emerald-600" /> : <Copy size={12} />}
                <span>{copied === 'hertz-milan-code' ? '已複製' : '複製'}</span>
              </button>
            </div>

            <div className="grid grid-cols-2 gap-3 pt-1">
              <div>
                <span className="text-on-surface-variant text-[11px] block">主駕駛人 / 承租人</span>
                <span className="font-bold text-on-surface text-xs sm:text-sm">CHANG CHUN HSIANG (春香)</span>
                <span className="text-[10px] text-on-surface-variant block mt-0.5">CDP: ASIA GOLD MEMBERS (10% 折扣)</span>
              </div>
              <div>
                <span className="text-on-surface-variant text-[11px] block">合約總額 (已含稅)</span>
                <span className="font-mono font-bold text-on-surface text-xs sm:text-sm">€336.42</span>
                <span className="text-[10px] text-emerald-700 font-bold block mt-0.5">5人平攤每人 €67.28</span>
              </div>
            </div>

            <div>
              <span className="text-on-surface-variant text-[11px] block">預訂車型 (Vehicle Class)</span>
              <span className="text-on-surface font-bold">Standard Elite · PEUGEOT E-5008 或同級 (電動自排 · 車隊 G1)</span>
            </div>

            <div className="pt-2.5 border-t border-outline-variant/10 space-y-2">
              <div className="bg-surface-container-low/40 p-2.5 rounded-xl space-y-0.5">
                <span className="text-primary font-bold block">📍 取車：貝加莫機場 P3 (BGY)</span>
                <p className="text-on-surface-variant">10/21 (三) 17:00 · 配合瑞安航空 FR5935 16:00 抵達領取行李後取車</p>
                <p className="text-[11px] text-outline">Orio Al Serio Airport, P3, 24050 Bergamo, Italy</p>
              </div>

              <div className="bg-surface-container-low/40 p-2.5 rounded-xl space-y-0.5">
                <span className="text-primary font-bold block">📍 還車：米蘭馬爾彭薩機場第一航廈 (MXP T1 異地還車)</span>
                <p className="text-on-surface-variant">10/23 (五) 13:30 · 機場 T1 租車還車中心，銜接返台長榮航空 BR96 航班</p>
                <p className="text-[11px] text-outline">Malpensa Airport Terminal 1, Ferno, 21010 Milan, Italy</p>
              </div>
            </div>

            <div className="pt-2 border-t border-outline-variant/10 space-y-1.5">
              <span className="font-bold text-on-surface block">包含項目與安心保障 (Add-ons Included)：</span>
              <ul className="list-disc pl-4 space-y-1 text-on-surface-variant">
                <li><strong>SuperCover (SC) 全險</strong>：零自負額安心防護，碰撞與車損完全豁免</li>
                <li><strong>Theft Protection 竊盜險</strong>：車輛遭竊損失全額保障</li>
                <li><strong>無限免費里程 (Unlimited Free Kilometers)</strong>：米蘭貝加莫至馬爾彭薩無里程限制</li>
                <li><strong>跨站異地還車許可 (One-way Fee Included)</strong>：BGY 取車、MXP 還車</li>
              </ul>
            </div>

            <div className="p-3 bg-amber-500/10 rounded-2xl border border-amber-300/40 text-amber-950 font-bold text-xs space-y-1">
              <p>💡 <strong>取車提醒</strong>：</p>
              <p className="font-normal text-[11px] leading-relaxed">
                取車時請主駕駛人（春香）備妥：護照、台灣駕照正本、國際駕照 (IDP) 以及預訂時登記之信用卡。同行副駕駛小許亦請備齊證件。
              </p>
            </div>
          </section>
        )}
      </div>
    </div>
  );
}

