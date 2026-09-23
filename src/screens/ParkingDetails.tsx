import { ShieldAlert, Car, MapPin, Navigation, Home, ExternalLink } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export function ParkingDetails() {
  const navigate = useNavigate();

  const openGoogleMaps = (query: string) => {
    window.open(`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`, '_blank');
  };

  const italyDolomitesParkings = [
    {
      title: 'Bolzano 波爾札諾 · WaltherPark 停車場',
      tag: '避開 ZTL 核心停車點',
      address: 'Parcheggio WaltherPark, Bolzano, Italy',
      price: '約 €2.50 / 小時',
      note: '⚠️ 切勿直接導航進入老城區！導航目的地請務必設為 WaltherPark 停車場，停妥後步行 3 分鐘即可抵達瓦爾特廣場與拱廊街，完全避開 ZTL 禁區。',
      mapQuery: 'Parcheggio WaltherPark Bolzano'
    },
    {
      title: 'Lago di Braies 布萊埃斯湖 · P3 / P4 停車場',
      tag: '高山明珠環湖必停',
      address: 'Lago di Braies Parking P3/P4, 39030 Braies, Italy',
      price: '約 €8 – €10 / 次',
      note: '湖畔最近的指定收費停車場，停好後沿著湖畔木棧道輕鬆散步拍照，無難度。',
      mapQuery: 'Parcheggio Lago di Braies P3'
    },
    {
      title: 'Ortisei 奧爾蒂塞伊 · Seceda 刀鋒山纜車站停車場',
      tag: '刀鋒山登頂起點',
      address: 'Seceda Cableways Parking, Via Val d\'Anna 2, Ortisei, Italy',
      price: '約 €10 – €15 / 天',
      note: '直接停在 Seceda 纜車站專屬停車場，搭乘兩段式纜車直上海拔 2,500m 刀鋒山頂。',
      mapQuery: 'Seceda Cableways Parking Ortisei'
    },
    {
      title: 'Tre Cime 三峰山 · Rifugio Auronzo 收費景觀公路停車場',
      tag: '三峰山景觀公路頂端',
      address: 'Rifugio Auronzo, 32041 Auronzo di Cadore, Italy',
      price: '通行收費約 €30 / 車',
      note: '經收費閘門沿全景公路直達 Rifugio Auronzo，步行至 Forcella Lavaredo 賞三峰壯景。',
      mapQuery: 'Rifugio Auronzo Parking'
    },
    {
      title: 'Lago di Misurina 米蘇里納湖 · 湖畔停車場',
      tag: '多洛米蒂珍珠湖畔',
      address: 'Parcheggio Lago di Misurina, Auronzo di Cadore, Italy',
      price: '計時收費約 €2 / 小時',
      note: '停妥後可沿著湖畔步道散步、拍照、喝咖啡，眺望三峰倒影。',
      mapQuery: 'Parcheggio Lago di Misurina'
    },
    {
      title: 'Cortina d\'Ampezzo · Parcheggio Cortina 外圍停車場',
      tag: '渡假名城外圍停車',
      address: 'Parcheggio Cortina d\'Ampezzo, Italy',
      price: '計時收費',
      note: '停在外圍停車場，步行進入 Corso Italia 步行街購物與散步，避免誤闖市區管制區。',
      mapQuery: 'Parcheggio Cortina d\'Ampezzo'
    }
  ];

  return (
    <div className="mt-20 px-4 pb-44 max-w-3xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <span className="text-primary font-black text-xs uppercase tracking-widest block font-mono">
            🇮🇹🇭🇷 自駕導航與停車指南
          </span>
          <h1 className="text-2xl sm:text-3xl font-black text-on-surface tracking-tight">
            停車導航・ZTL 禁行區防護
          </h1>
        </div>
        <button 
          onClick={() => navigate('/')}
          className="p-2.5 rounded-2xl bg-surface-container-lowest border border-outline-variant/10 shadow-xs hover:bg-surface-container-low transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
        >
          <Home size={18} className="text-on-surface" />
        </button>
      </div>

      {/* ZTL Italy Warning */}
      <section className="bg-amber-500/10 p-5 rounded-3xl border border-amber-500/30 space-y-3 relative overflow-hidden">
        <div className="flex items-center gap-2 text-amber-900 font-black text-xs uppercase tracking-wider">
          <ShieldAlert size={18} className="text-amber-600" />
          <span>🇮🇹 義大利 ZTL (Zona a Traffico Limitato) 禁行區防護</span>
        </div>

        <h3 className="text-lg sm:text-xl font-black text-amber-950">
          ⚠️ 導航嚴禁直接設為老城中心！請一律導航至指定停車場
        </h3>
        <p className="text-xs text-amber-900 leading-relaxed font-medium">
          義大利城市（如 Bolzano 老城、Cortina 中心）設有 ZTL 電子監控。未經授權開入紅圈 ZTL 每次罰款 €110 – €350 歐元。本行程所有導航按鈕皆已直連合法外圍停車場。
        </p>
      </section>

      {/* Italy & Dolomites Parking Shortcuts */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-black text-on-surface flex items-center gap-2">
            <MapPin size={18} className="text-primary" />
            <span>義大利 ＆ 多洛米蒂重點停車導航</span>
          </h2>
          <span className="text-xs font-bold text-on-surface-variant">共 6 處精選車場</span>
        </div>

        <div className="space-y-3">
          {italyDolomitesParkings.map((p, i) => (
            <div 
              key={i} 
              className="p-4.5 bg-surface-container-lowest rounded-3xl border border-outline-variant/15 shadow-xs space-y-2.5"
            >
              <div className="flex items-start justify-between gap-2">
                <div>
                  <span className="text-[11px] font-bold text-primary bg-primary/10 px-2 py-0.5 rounded-md inline-block mb-1">
                    {p.tag}
                  </span>
                  <h4 className="text-sm font-black text-on-surface">{p.title}</h4>
                </div>
                <span className="text-xs font-mono font-bold text-on-surface-variant shrink-0">
                  {p.price}
                </span>
              </div>

              <p className="text-xs text-on-surface-variant leading-relaxed">
                {p.note}
              </p>

              <div className="pt-2 border-t border-outline-variant/10 flex items-center justify-between">
                <span className="text-[11px] text-on-surface-variant font-mono truncate max-w-[200px] sm:max-w-xs">
                  {p.address}
                </span>
                <button
                  onClick={() => openGoogleMaps(p.mapQuery)}
                  className="flex items-center gap-1 text-xs font-bold text-white bg-primary hover:bg-primary-container px-3.5 py-2 rounded-xl active:scale-95 transition-all shadow-2xs shrink-0 min-h-[40px]"
                >
                  <Navigation size={13} />
                  <span>Google 導航</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Croatia Parking Rules */}
      <section className="bg-surface-container-lowest p-5 rounded-3xl border border-outline-variant/15 shadow-xs space-y-4">
        <div className="flex items-center gap-2 text-secondary font-black text-xs uppercase tracking-wider">
          <Car size={16} />
          <span>🇭🇷 克羅埃西亞 停車格分區規範</span>
        </div>

        <h3 className="text-lg font-black text-on-surface">克羅埃西亞三大 Zone 停車收費標示</h3>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
          <div className="p-3.5 bg-red-500/10 rounded-2xl border border-red-500/20 space-y-1">
            <span className="font-extrabold text-red-950 block">Zone 1 (紅區)</span>
            <p className="text-red-900 text-[11px]">最靠近古城核心區。費率約 €2-€4/小時，通常限制最長停 2 小時。</p>
          </div>

          <div className="p-3.5 bg-amber-500/10 rounded-2xl border border-amber-500/20 space-y-1">
            <span className="font-extrabold text-amber-950 block">Zone 2 (黃區)</span>
            <p className="text-amber-900 text-[11px]">次核心商業區。費率約 €1.5-€2.5/小時，無停車時間限制。</p>
          </div>

          <div className="p-3.5 bg-blue-500/10 rounded-2xl border border-blue-500/20 space-y-1">
            <span className="font-extrabold text-blue-950 block">Zone 3 (綠/藍區)</span>
            <p className="text-blue-900 text-[11px]">距離古城步行 10-15 分鐘。費率最實惠（約 €1/小時或全天 €8）。</p>
          </div>
        </div>

        <div className="p-4 bg-surface-container-high/40 rounded-2xl text-xs space-y-1">
          <span className="font-black text-on-surface block">Plitvice 十六湖國家公園停車：</span>
          <p className="text-on-surface-variant leading-relaxed text-[11px]">
             Entrance 1 與 Entrance 2 皆備有大型林蔭停車場 P1 & P2，每小時約 €1.50 歐元，駛離時於自動繳費機以信用卡付款即可。
          </p>
        </div>
      </section>
    </div>
  );
}

