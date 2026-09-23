export interface HandbookScheduleItem {
  time?: string;
  text: string;
  phone?: string;
}

export interface HandbookCardItem {
  type: 'spot' | 'restaurant' | 'gelato' | 'parking';
  emoji?: string;
  name: string;
  info?: string;
  phone?: string;
  address?: string;
  mapQuery: string;
}

export interface HandbookDay {
  dayNum: number;
  dateStr: string; // e.g. "9/28"
  dateTitle: string; // e.g. "9/28｜Limone"
  subRoute: string; // e.g. "米蘭機場 → Limone｜住 Aria Life Hotel"
  morningSchedule: HandbookScheduleItem[];
  afternoonSection: {
    title: string; // e.g. "下午｜Limone 小鎮"
    flow: string; // e.g. "碼頭 → 檸檬園 → 老城 → 教堂 → 廣場 → 冰淇淋"
    cards: HandbookCardItem[];
  };
  hotel: {
    name: string;
    info: string; // e.g. "9/28–9/30｜含早餐"
    address: string;
    phone?: string;
    mapQuery: string;
  };
  alert?: string; // e.g. "⚠ Bolzano 注意老城 ZTL 禁區"
}

export const HANDBOOK_DAYS: HandbookDay[] = [
  // ==========================================
  // DAY 1: 9/28
  // ==========================================
  {
    dayNum: 1,
    dateStr: '9/28',
    dateTitle: '9/28｜Limone',
    subRoute: '米蘭機場 → Limone｜住 Aria Life Hotel',
    morningSchedule: [
      { time: '07:35', text: '抵達 MXP (EVA AIR BR95)' },
      { time: '09:30', text: 'Hertz 取車 (MXP T1 Floor -1)', phone: '+39 02 5858 1081' },
      { time: '10:15', text: '出發前往 Limone　約190km／2小時' },
      { time: '12:30', text: 'Aria Life Hotel Check-in' }
    ],
    afternoonSection: {
      title: '下午｜Limone 小鎮',
      flow: '碼頭 → 檸檬園 → 老城 → 教堂 → 廣場 → 冰淇淋',
      cards: [
        {
          type: 'spot',
          emoji: '📍',
          name: 'Limonaia del Castèl',
          info: '10:00–17:00｜€2–3',
          address: 'Via Orti, Limone',
          mapQuery: 'Limonaia del Castel Limone sul Garda'
        },
        {
          type: 'spot',
          emoji: '⛪',
          name: 'Chiesa di San Benedetto',
          info: '08:30–18:30｜免費',
          address: 'Piazza San Benedetto 1, Limone',
          mapQuery: 'Chiesa di San Benedetto Limone sul Garda'
        },
        {
          type: 'gelato',
          emoji: '🍦',
          name: 'LB Gelateria',
          address: 'Via IV Novembre 32 / Via Nova 17, Limone',
          mapQuery: 'LB Gelateria Limone sul Garda'
        },
        {
          type: 'restaurant',
          emoji: '🍴',
          name: 'Ristorante Gemma',
          info: '晚餐 18:30–22:30',
          phone: '+39 0365 954014',
          address: 'Piazza Garibaldi 12, Limone',
          mapQuery: 'Ristorante Gemma Limone sul Garda'
        }
      ]
    },
    hotel: {
      name: 'Aria Life Hotel',
      info: '9/28–9/30｜含早餐',
      address: 'Via Einaudi 4, Limone',
      phone: '+39 0365 189 6773',
      mapQuery: 'Aria Life Hotel Limone sul Garda'
    },
    alert: '⚠ Limone 老城全區為 ZTL 徒步區，車輛請直接導航 Aria Life Hotel 免費私人停車場'
  },

  // ==========================================
  // DAY 2: 9/29
  // ==========================================
  {
    dayNum: 2,
    dateStr: '9/29',
    dateTitle: '9/29｜Limone & Malcesine',
    subRoute: '水上懸崖步道 → 渡輪跨湖 → 巴爾多山纜車｜住 Aria Life Hotel',
    morningSchedule: [
      { time: '08:00', text: 'Aria Life Hotel 早餐' },
      { time: '09:00', text: '出發前往懸崖單車步道' },
      { time: '09:15', text: 'Ciclopedonale del Garda 漫步' },
      { time: '10:45', text: '前往 Limone 碼頭' },
      { time: '11:15', text: '渡輪前往 Malcesine（約20分鐘）' }
    ],
    afternoonSection: {
      title: '下午｜Malcesine 古城 ＆ 巴爾多山',
      flow: '旋轉纜車登頂 → 高山草甸遠眺 → 城堡散步 → 渡輪返回',
      cards: [
        {
          type: 'spot',
          emoji: '🚲',
          name: 'Ciclopedonale del Garda (加爾達湖水上懸空步道)',
          info: '全天開放｜免費通行',
          address: 'SS45bis, Limone sul Garda',
          mapQuery: 'Ciclopedonale del Garda Limone sul Garda'
        },
        {
          type: 'spot',
          emoji: '🚡',
          name: 'Funivia Malcesine-Monte Baldo (巴爾多山旋轉纜車)',
          info: '08:00–18:00｜往返約€27',
          address: 'Via Navene Vecchia 12, Malcesine',
          mapQuery: 'Funivia Malcesine-Monte Baldo'
        },
        {
          type: 'spot',
          emoji: '🏰',
          name: 'Castello Scaligero (斯卡利傑城堡)',
          info: '09:30–18:30｜約€6',
          address: 'Via Castello, Malcesine',
          mapQuery: 'Castello Scaligero Malcesine'
        },
        {
          type: 'restaurant',
          emoji: '🍴',
          name: 'Turista Pizzeria (湖畔柴燒披薩)',
          info: '晚餐 18:00–22:30',
          phone: '+39 0365 954152',
          address: 'Piazza Garibaldi 2, Limone',
          mapQuery: 'Pizzeria Turista Limone sul Garda'
        }
      ]
    },
    hotel: {
      name: 'Aria Life Hotel',
      info: '9/28–9/30｜續住第 2 晚',
      address: 'Via Einaudi 4, Limone',
      phone: '+39 0365 189 6773',
      mapQuery: 'Aria Life Hotel Limone sul Garda'
    },
    alert: '⚠ 巴爾多山頂（1,760m）氣溫較湖面低 8–10°C，請備防風外套；渡輪約每 30–60 分鐘一班。'
  },

  // ==========================================
  // DAY 3: 9/30
  // ==========================================
  {
    dayNum: 3,
    dateStr: '9/30',
    dateTitle: '9/30｜Bolzano ➜ 休斯高原',
    subRoute: '波札諾老城 → 冰人博物館 → 17:00前上高原｜住 Hotel Seiser Alm Urthaler',
    morningSchedule: [
      { time: '08:30', text: 'Aria Life Hotel 退房' },
      { time: '09:00', text: '出發前往 Bolzano　約110km／1.5小時' },
      { time: '10:30', text: '抵達 Bolzano 老城' }
    ],
    afternoonSection: {
      title: '下午｜波札諾老城 ＆ 開車上高原',
      flow: 'Walther 廣場 → 冰人博物館 → 自駕上休斯高原 → 飯店入住',
      cards: [
        {
          type: 'parking',
          emoji: '🅿️',
          name: 'Parcheggio Walther (老城地下停車場)',
          info: '24小時營業｜約€2.5/時',
          address: 'Piazza Walther, Bolzano',
          mapQuery: 'Parcheggio Walther Bolzano'
        },
        {
          type: 'spot',
          emoji: '🏛️',
          name: '南蒂羅爾考古博物館 (冰人奧茲 Ötzi)',
          info: '10:00–18:00｜€13',
          address: 'Via Museo 43, Bolzano',
          mapQuery: 'South Tyrol Museum of Archaeology Bolzano'
        },
        {
          type: 'restaurant',
          emoji: '🍴',
          name: "Walther's Cafe & Restaurant",
          info: '午餐 11:30–14:30',
          phone: '+39 0471 970303',
          address: 'Piazza Walther 6, Bolzano',
          mapQuery: 'Walther Restaurant Bolzano'
        },
        {
          type: 'restaurant',
          emoji: '🍴',
          name: 'Urthaler 飯店晚宴 (五道式南蒂羅爾料理)',
          info: '晚餐 19:00–21:00｜房費已含',
          phone: '+39 0471 727900',
          address: 'Compatsch 49, Alpe di Siusi',
          mapQuery: 'Hotel Seiser Alm Urthaler'
        }
      ]
    },
    hotel: {
      name: 'Hotel Seiser Alm Urthaler (五星原木度假酒店)',
      info: '9/30–10/3｜含早晚餐',
      address: 'Compatsch 49, Alpe di Siusi',
      phone: '+39 0471 727900',
      mapQuery: 'Hotel Seiser Alm Urthaler'
    },
    alert: '⚠ Bolzano 注意老城 ZTL 禁區；休斯高原道路管制，憑飯店訂房單可於 17:00 前開車上山。'
  },

  // ==========================================
  // DAY 4: 10/01
  // ==========================================
  {
    dayNum: 4,
    dateStr: '10/1',
    dateTitle: '10/1｜休斯高原',
    subRoute: '歐洲最大高山草甸全日健行 ➜ 山屋午餐 ➜ 水療放鬆｜住 Hotel Seiser Alm Urthaler',
    morningSchedule: [
      { time: '08:00', text: 'Urthaler 景觀早餐' },
      { time: '09:00', text: '出發高山草甸健行' },
      { time: '10:30', text: '施盧恩峰 (Schlern) 遠眺' }
    ],
    afternoonSection: {
      title: '下午｜高山草甸遠足 ＆ 飯店水療',
      flow: 'Compatsch 徒步 → 山屋午餐 → 飯店室內外全景溫水泳池 → 晚宴',
      cards: [
        {
          type: 'spot',
          emoji: '🥾',
          name: 'Alpe di Siusi 高山草甸步道',
          info: '歐洲最大高山牧場｜海拔 1,800–2,000m',
          address: 'Alpe di Siusi, South Tyrol',
          mapQuery: 'Alpe di Siusi Compatsch'
        },
        {
          type: 'restaurant',
          emoji: '🍴',
          name: 'Malga Sanon (高山牧場山屋午餐)',
          info: '供餐 11:30–16:00',
          phone: '+39 0471 727002',
          address: 'Saltria, Alpe di Siusi',
          mapQuery: 'Malga Sanon Alpe di Siusi'
        },
        {
          type: 'spot',
          emoji: '🏊',
          name: 'Urthaler 全景溫水泳池 ＆ SPA 水療',
          info: '開放 15:00–19:00｜房客免費',
          address: 'Hotel Seiser Alm Urthaler 館內',
          mapQuery: 'Hotel Seiser Alm Urthaler'
        },
        {
          type: 'restaurant',
          emoji: '🍴',
          name: 'Urthaler 飯店品味晚宴',
          info: '晚餐 19:00–21:30｜房費已含',
          phone: '+39 0471 727900',
          address: 'Compatsch 49, Alpe di Siusi',
          mapQuery: 'Hotel Seiser Alm Urthaler'
        }
      ]
    },
    hotel: {
      name: 'Hotel Seiser Alm Urthaler',
      info: '9/30–10/3｜續住第 2 晚',
      address: 'Compatsch 49, Alpe di Siusi',
      phone: '+39 0471 727900',
      mapQuery: 'Hotel Seiser Alm Urthaler'
    },
    alert: '⚠ 高原紫外線強且風大，健行請帶防曬、墨鏡及保暖薄外套。'
  },

  // ==========================================
  // DAY 5: 10/02
  // ==========================================
  {
    dayNum: 5,
    dateStr: '10/2',
    dateTitle: '10/2｜Seceda 刀鋒山 ＆ 富內斯',
    subRoute: 'Ortisei 纜車 → Seceda 刀鋒山 → 富內斯雙教堂｜住 Hotel Seiser Alm Urthaler',
    morningSchedule: [
      { time: '08:00', text: '飯店早餐' },
      { time: '08:45', text: '出發前往 Ortisei 纜車站　約18km／30分鐘' },
      { time: '09:30', text: 'Seceda 纜車登頂 (2,519m)' }
    ],
    afternoonSection: {
      title: '下午｜Seceda 健行 ＆ 富內斯山谷',
      flow: 'Seceda 刀鋒山絕壁 → Baita Sofie 午餐 → 富內斯山谷 → 聖約翰教堂 → 聖瑪格達萊娜',
      cards: [
        {
          type: 'spot',
          emoji: '🚡',
          name: 'Seceda 刀鋒山纜車站 (Funivie Seceda)',
          info: '08:30–17:30｜往返約€42',
          address: "Via Val d'Anna 2, Ortisei",
          mapQuery: 'Funivie Seceda Spa Ortisei'
        },
        {
          type: 'parking',
          emoji: '🅿️',
          name: 'Parcheggio Seceda (纜車站地下停車場)',
          info: '直接停於纜車站下方',
          address: "Via Val d'Anna 2, Ortisei",
          mapQuery: 'Parking Seceda Ortisei'
        },
        {
          type: 'restaurant',
          emoji: '🍴',
          name: 'Baita Sofie (Seceda 絕景山屋午餐)',
          info: '供餐 11:30–15:30',
          phone: '+39 335 527 1240',
          address: 'Seceda 頂峰觀景台旁',
          mapQuery: 'Baita Sofie Hutte Seceda'
        },
        {
          type: 'spot',
          emoji: '⛪',
          name: '聖約翰教堂 (Chiesetta di San Giovanni in Ranui)',
          info: '參觀步道門票€4',
          address: 'Ranui 4, Funes',
          mapQuery: 'Chiesetta di San Giovanni in Ranui'
        },
        {
          type: 'spot',
          emoji: '⛪',
          name: '聖瑪格達萊娜教堂 (Santa Maddalena)',
          info: '經典多洛米蒂山壁明信片視角',
          address: 'Magdalenaweg, Funes',
          mapQuery: 'Chiesa di Santa Maddalena Funes'
        }
      ]
    },
    hotel: {
      name: 'Hotel Seiser Alm Urthaler',
      info: '9/30–10/3｜續住第 3 晚',
      address: 'Compatsch 49, Alpe di Siusi',
      phone: '+39 0471 727900',
      mapQuery: 'Hotel Seiser Alm Urthaler'
    },
    alert: '⚠ Seceda 末班下行纜車 17:30，務必預留步道回程時間。'
  },

  // ==========================================
  // DAY 6: 10/03
  // ==========================================
  {
    dayNum: 6,
    dateStr: '10/3',
    dateTitle: '10/3｜Passo Gardena ➜ Cortina 南側',
    subRoute: '加爾狄納山口 → Brunico 超市大採買 → Vodo Cadore｜住 Chalet del Capriolo',
    morningSchedule: [
      { time: '08:30', text: 'Urthaler 飯店退房' },
      { time: '09:00', text: '自駕出發翻越 Passo Gardena 山口公路' },
      { time: '11:30', text: '抵達 Brunico 超大型超市 Interspar' }
    ],
    afternoonSection: {
      title: '下午｜食材大採買 ＆ 前往 Cortina 木屋公寓',
      flow: '超市採買火鍋食材 → 前往 Vodo Cadore → 入住頂樓公寓 → 廚房自炊',
      cards: [
        {
          type: 'spot',
          emoji: '🏔️',
          name: 'Passo Gardena (加爾狄納山口)',
          info: '海拔 2,136m 景觀公路｜免費通行',
          address: 'Passo Gardena, South Tyrol',
          mapQuery: 'Passo Gardena'
        },
        {
          type: 'spot',
          emoji: '🛒',
          name: 'Interspar Brunico (多洛米蒂最大旗艦超市)',
          info: '週六 08:00–19:30 (週日公休)',
          address: 'Via Duca Sigismondo 5, Brunico',
          mapQuery: 'Interspar Brunico'
        },
        {
          type: 'restaurant',
          emoji: '🍴',
          name: 'Chalet del Capriolo 廚房自炊晚餐',
          info: '使用超市採買之南蒂羅爾牛排、生鮮鮮蔬自炊火鍋',
          address: 'Via Roma 15, Vodo Cadore',
          mapQuery: 'Chalet del Capriolo Vodo Cadore'
        }
      ]
    },
    hotel: {
      name: 'Chalet del Capriolo (三臥室頂樓原木公寓)',
      info: '10/3–10/6｜連住 3 晚',
      address: 'Via Roma 15, Vodo Cadore',
      phone: '+39 0436 890123',
      mapQuery: 'Chalet del Capriolo Vodo di Cadore'
    },
    alert: '⚠ Brunico 超市週日公休，今日週六務必補齊未來數天自炊食材與飲品。'
  },

  // ==========================================
  // DAY 7: 10/04
  // ==========================================
  {
    dayNum: 7,
    dateStr: '10/4',
    dateTitle: '10/4｜三峰山',
    subRoute: '三峰山收費公路 → 經典大環狀健行 → 米蘇里納湖｜住 Chalet del Capriolo',
    morningSchedule: [
      { time: '07:30', text: '公寓自製早餐' },
      { time: '08:15', text: '出發前往三峰山　約38km／45分鐘' },
      { time: '09:00', text: '抵達 Rifugio Auronzo 停車場' }
    ],
    afternoonSection: {
      title: '全日｜三峰山環狀健行 ＆ 米蘇里納湖',
      flow: 'Rifugio Auronzo → Trail 101 → Rifugio Lavaredo → Locatelli 山屋 → 米蘇里納湖',
      cards: [
        {
          type: 'parking',
          emoji: '🅿️',
          name: 'Rifugio Auronzo 停車場 (三峰山登山口)',
          info: '景觀收費公路通行費約 €30/車',
          address: 'Località Forcella Longeres, Auronzo di Cadore',
          mapQuery: 'Rifugio Auronzo Tre Cime'
        },
        {
          type: 'spot',
          emoji: '🏔️',
          name: 'Tre Cime di Lavaredo (三峰山大環狀步道)',
          info: '全程約 9.5km／3.5～4 小時',
          address: 'Tre Cime di Lavaredo',
          mapQuery: 'Tre Cime di Lavaredo'
        },
        {
          type: 'restaurant',
          emoji: '🍴',
          name: 'Rifugio Locatelli (三峰山景觀山屋午餐)',
          info: '供餐 11:30–15:00',
          address: 'Tre Cime di Lavaredo 北側',
          mapQuery: 'Dreizinnenhutte Rifugio Locatelli'
        },
        {
          type: 'spot',
          emoji: '🌊',
          name: 'Lago di Misurina (米蘇里納湖)',
          info: '湖畔漫步｜免費參觀',
          address: 'Misurina, 32041 Auronzo di Cadore',
          mapQuery: 'Lago di Misurina'
        },
        {
          type: 'restaurant',
          emoji: '🍴',
          name: 'Pizzeria Edelweiss (Misurina 湖畔披薩)',
          info: '晚餐 18:00–21:30',
          phone: '+39 0435 39033',
          address: 'Via Monte Piana 11, Misurina',
          mapQuery: 'Pizzeria Edelweiss Misurina'
        }
      ]
    },
    hotel: {
      name: 'Chalet del Capriolo',
      info: '10/3–10/6｜續住第 2 晚',
      address: 'Via Roma 15, Vodo Cadore',
      phone: '+39 0436 890123',
      mapQuery: 'Chalet del Capriolo Vodo di Cadore'
    },
    alert: '⚠ 三峰山收費公路車潮多，務必 08:30 前抵達收費站；山區氣溫低風大，請穿防風保暖登山裝備。'
  },

  // ==========================================
  // DAY 8: 10/05
  // ==========================================
  {
    dayNum: 8,
    dateStr: '10/5',
    dateTitle: '10/5｜Lago di Braies ＆ Cortina',
    subRoute: '布萊埃斯湖晨曦 → 木造小船屋 → 冬奧名城 Cortina 散步｜住 Chalet del Capriolo',
    morningSchedule: [
      { time: '07:30', text: '出發前往布萊埃斯湖　約55km／1小時' },
      { time: '08:30', text: '抵達 Lago di Braies (多洛米蒂綠寶石)' }
    ],
    afternoonSection: {
      title: '下午｜布萊埃斯湖環湖 ＆ Cortina 老城',
      flow: '木造船屋 → 環湖步道 → Cortina 冬奧名城散步 → 精品街與甜點',
      cards: [
        {
          type: 'spot',
          emoji: '🌊',
          name: 'Lago di Braies (布萊埃斯湖)',
          info: '多洛米蒂綠寶石環湖步道｜免費漫步',
          address: 'Braies Lake, South Tyrol',
          mapQuery: 'Pragser Wildsee Lago di Braies'
        },
        {
          type: 'parking',
          emoji: '🅿️',
          name: 'Parcheggio Lago di Braies P3/P4',
          info: '湖畔收費停車場',
          address: 'Seewald 10, Braies',
          mapQuery: 'Parcheggio Lago di Braies'
        },
        {
          type: 'spot',
          emoji: '🛍️',
          name: "Cortina d'Ampezzo 老城徒步區",
          info: 'Corso Italia 步行大道、冬奧主場館巡禮',
          address: "Corso Italia, Cortina d'Ampezzo",
          mapQuery: "Corso Italia Cortina d'Ampezzo"
        },
        {
          type: 'restaurant',
          emoji: '🍴',
          name: 'Ristorante 5 Torri (Cortina 傳統名店)',
          info: '晚餐 18:30–22:00',
          phone: '+39 0436 866637',
          address: 'Largo delle Poste 13, Cortina',
          mapQuery: 'Ristorante 5 Torri Cortina'
        }
      ]
    },
    hotel: {
      name: 'Chalet del Capriolo',
      info: '10/3–10/6｜續住第 3 晚 (明日準備跨國)',
      address: 'Via Roma 15, Vodo Cadore',
      phone: '+39 0436 890123',
      mapQuery: 'Chalet del Capriolo Vodo di Cadore'
    },
    alert: '⚠ 布萊埃斯湖晨間湖水平靜倒影極美，早到能避開大量團客。明日即將跨國前往克羅埃西亞。'
  },

  // ==========================================
  // DAY 9: 10/06
  // ==========================================
  {
    dayNum: 9,
    dateStr: '10/6',
    dateTitle: '10/6｜Trieste ➜ Zagreb',
    subRoute: '義大利跨國斯洛維尼亞、克羅埃西亞｜住 Canopy by Hilton Zagreb',
    morningSchedule: [
      { time: '08:30', text: 'Chalet del Capriolo 退房' },
      { time: '09:00', text: '自駕出發前往義大利海港 Trieste　約160km／2小時' },
      { time: '11:30', text: 'Trieste 義大利統一廣場 (Piazza Unità d’Italia)' }
    ],
    afternoonSection: {
      title: '下午｜跨國前往薩格勒布 (Zagreb)',
      flow: '海港散步 → 購買斯洛維尼亞電子通行證 → 入住 Zagreb 飯店 → 舊城晚餐',
      cards: [
        {
          type: 'spot',
          emoji: '🌊',
          name: 'Piazza Unità d’Italia (Trieste 義大利統一廣場)',
          info: '歐洲最大直面大海的廣場',
          address: "Piazza Unità d'Italia, Trieste",
          mapQuery: "Piazza Unita d'Italia Trieste"
        },
        {
          type: 'spot',
          emoji: '☕',
          name: 'Caffè San Marco (Trieste 百年文人咖啡館)',
          info: '08:00–22:00',
          address: 'Via Cesare Battisti 18, Trieste',
          mapQuery: 'Caffe San Marco Trieste'
        },
        {
          type: 'restaurant',
          emoji: '🍴',
          name: 'Vinodol (Zagreb 老城克羅埃西亞傳統料理)',
          info: '晚餐 18:30–23:00',
          phone: '+385 1 4811 427',
          address: 'Nikole Tesle 10, Zagreb',
          mapQuery: 'Vinodol Restaurant Zagreb'
        }
      ]
    },
    hotel: {
      name: 'Canopy by Hilton Zagreb City Centre',
      info: '10/6–10/7｜含早餐',
      address: 'Ul. Kneza Branimira 29, Zagreb',
      phone: '+385 1 4559 505',
      mapQuery: 'Canopy by Hilton Zagreb'
    },
    alert: '⚠ 途經斯洛維尼亞需提前在線上購買 7 天 Vignette 電子高速公路通行證 (€16)。'
  },

  // ==========================================
  // DAY 10: 10/07
  // ==========================================
  {
    dayNum: 10,
    dateStr: '10/7',
    dateTitle: '10/7｜Bled ➜ Ljubljana',
    subRoute: '斯洛維尼亞雙明珠：布萊德湖 ＆ 盧比安納首都｜住 Grand Hotel Union Eurostars',
    morningSchedule: [
      { time: '08:00', text: 'Zagreb 飯店早餐與退房' },
      { time: '08:30', text: '出發前往 Bled 湖　約195km／2小時' },
      { time: '10:45', text: '抵達 Lake Bled (布萊德湖)' }
    ],
    afternoonSection: {
      title: '下午｜布萊德湖島 ＆ 盧比安納老城',
      flow: '傳統搖槳木船 Pletna → 聖母升天教堂祈福鐘 → 湖景奶油蛋糕 → 抵達盧比安納',
      cards: [
        {
          type: 'spot',
          emoji: '⛵',
          name: 'Lake Bled 湖心小島 ＆ Pletna 木船',
          info: '搭乘木船前往湖中島聖母教堂',
          address: 'Cesta svobode, Bled',
          mapQuery: 'Lake Bled Slovenia'
        },
        {
          type: 'spot',
          emoji: '🍰',
          name: 'Kavarna Park (布萊德原創奶油蛋糕 Kremsnita)',
          info: '正宗百年甜點創始名店',
          address: 'Cesta svobode 15, Bled',
          mapQuery: 'Kavarna Park Bled'
        },
        {
          type: 'spot',
          emoji: '🐉',
          name: 'Ljubljana 飛龍橋 ＆ 三重橋',
          info: '斯洛維尼亞首都浪漫老城',
          address: 'Tromostovje, Ljubljana',
          mapQuery: 'Triple Bridge Ljubljana'
        },
        {
          type: 'restaurant',
          emoji: '🍴',
          name: 'Julija Restaurant (盧比安納老城人氣名店)',
          info: '晚餐 18:30–22:30',
          phone: '+386 1 425 64 63',
          address: 'Stari trg 9, Ljubljana',
          mapQuery: 'Julija Restaurant Ljubljana'
        }
      ]
    },
    hotel: {
      name: 'Grand Hotel Union Eurostars Ljubljana',
      info: '10/7–10/8｜含早餐',
      address: 'Miklosiceva cesta 1, Ljubljana',
      phone: '+386 1 308 12 70',
      mapQuery: 'Grand Hotel Union Eurostars Ljubljana'
    }
  },

  // ==========================================
  // DAY 11: 10/08
  // ==========================================
  {
    dayNum: 11,
    dateStr: '10/8',
    dateTitle: '10/8｜Postojna ➜ Predjama ➜ Rovinj',
    subRoute: '波斯托伊納鐘乳石洞 ➜ 洞窟城堡 ➜ 伊斯特利亞羅維尼｜住 Grand Park Hotel Rovinj',
    morningSchedule: [
      { time: '08:30', text: '飯店退房出發' },
      { time: '09:30', text: 'Postojna Cave 鐘乳石洞小火車' },
      { time: '12:00', text: 'Predjama Castle 崖壁洞窟城堡' }
    ],
    afternoonSection: {
      title: '下午｜前往伊斯特利亞半島 Rovinj',
      flow: '洞窟城堡探秘 → 自駕跨越邊境進入克羅埃西亞 → 入住五星 Grand Park Hotel → 亞得里亞海夕陽',
      cards: [
        {
          type: 'spot',
          emoji: '🚂',
          name: 'Postojna Cave (波斯托伊納鐘乳石洞)',
          info: '搭乘地底小火車探索百萬年鐘乳石',
          address: 'Jamska cesta 30, Postojna',
          mapQuery: 'Postojna Cave'
        },
        {
          type: 'spot',
          emoji: '🏰',
          name: 'Predjama Castle (普萊德亞瑪洞窟城堡)',
          info: '全球最大洞穴懸崖城堡',
          address: 'Predjama 1, Postojna',
          mapQuery: 'Predjama Castle'
        },
        {
          type: 'restaurant',
          emoji: '🍴',
          name: 'La Puntulina (Rovinj 懸崖海景日落餐廳)',
          info: '晚餐 18:30–22:30',
          phone: '+385 52 813 186',
          address: 'Ul. Sv. Kriza 38, Rovinj',
          mapQuery: 'La Puntulina Rovinj'
        }
      ]
    },
    hotel: {
      name: 'Grand Park Hotel Rovinj (五星海景名宿)',
      info: '10/8–10/10｜連住 2 晚 · 含早餐',
      address: 'Smaregliina ul. 1A, Rovinj',
      phone: '+385 52 808 000',
      mapQuery: 'Grand Park Hotel Rovinj'
    },
    alert: '⚠ 鐘乳石洞內常年恆溫 10°C，需穿著保暖防風外套。'
  },

  // ==========================================
  // DAY 12: 10/09
  // ==========================================
  {
    dayNum: 12,
    dateStr: '10/9',
    dateTitle: '10/9｜Rovinj ＆ Pula',
    subRoute: '羅維尼老城晨光 ➜ 普拉古羅馬角鬥士競技場 ➜ 松露晚宴｜住 Grand Park Hotel Rovinj',
    morningSchedule: [
      { time: '08:30', text: '飯店海景早餐' },
      { time: '09:30', text: 'Rovinj 老城石板小巷與聖尤菲米婭教堂' },
      { time: '11:30', text: '出發前往普拉 (Pula)　約40km／40分鐘' }
    ],
    afternoonSection: {
      title: '下午｜Pula 羅馬古蹟 ＆ 松露料理',
      flow: '普拉競技場 → 奧古斯都神廟 → 塞爾吉烏斯凱旋門 → 返回 Rovinj 享用松露晚餐',
      cards: [
        {
          type: 'spot',
          emoji: '🏛️',
          name: 'Pula Arena (普拉羅馬圓形競技場)',
          info: '全球保存最完好的羅馬競技場之一',
          address: 'Flavijevska ul., Pula',
          mapQuery: 'Pula Arena'
        },
        {
          type: 'spot',
          emoji: '⛪',
          name: '聖尤菲米婭教堂 (Church of St. Euphemia)',
          info: '俯瞰亞得里亞海紅色老城屋頂',
          address: 'Trg Sv. Eufemije, Rovinj',
          mapQuery: 'Church of St. Euphemia Rovinj'
        },
        {
          type: 'restaurant',
          emoji: '🍴',
          name: 'Konoba Monte Ricci (正宗伊斯特利亞黑松露義大利麵)',
          info: '晚餐 18:30–22:00',
          phone: '+385 91 511 1145',
          address: 'Rovinj 外圍鄉村',
          mapQuery: 'Monte Ricci Rovinj'
        }
      ]
    },
    hotel: {
      name: 'Grand Park Hotel Rovinj',
      info: '10/8–10/10｜續住第 2 晚',
      address: 'Smaregliina ul. 1A, Rovinj',
      phone: '+385 52 808 000',
      mapQuery: 'Grand Park Hotel Rovinj'
    }
  },

  // ==========================================
  // DAY 13: 10/10
  // ==========================================
  {
    dayNum: 13,
    dateStr: '10/10',
    dateTitle: '10/10｜Rovinj ➜ Plitvice',
    subRoute: '橫越克羅埃西亞前往十六湖國家公園｜住 Fenomen Plitvice',
    morningSchedule: [
      { time: '08:30', text: '飯店退房出發' },
      { time: '09:00', text: '自駕前往十六湖國家公園　約220km／3小時' },
      { time: '12:30', text: '抵達十六湖國家公園 (Plitvice Lakes)' }
    ],
    afternoonSection: {
      title: '下午｜十六湖下湖區健行',
      flow: '大瀑布 Veliki Slap → 喀斯特碧綠階梯湖泊木棧道 → 電池動力渡船渡湖 → 原木度假村入住',
      cards: [
        {
          type: 'spot',
          emoji: '🌲',
          name: 'Plitvice Lakes National Park (十六湖 Entrance 1)',
          info: '下湖區漫步 ＆ 78 米高大瀑布',
          address: 'Plitvicka Jezera Entrance 1',
          mapQuery: 'Plitvice Lakes Entrance 1'
        },
        {
          type: 'restaurant',
          emoji: '🍴',
          name: 'Licka Kuca (傳統柴火烤全羊與利卡鄉村風味)',
          info: '晚餐 18:00–22:00',
          phone: '+385 53 755 360',
          address: 'Plitvicka Jezera 1',
          mapQuery: 'Licka Kuca Plitvice'
        }
      ]
    },
    hotel: {
      name: 'Fenomen Plitvice (五星原木林間木屋酒店)',
      info: '10/10–10/11｜含早晚餐',
      address: 'Plitvica Selo 68, Plitvice Lakes',
      phone: '+385 53 616 100',
      mapQuery: 'Fenomen Plitvice'
    },
    alert: '⚠ 十六湖門票已含園內電動環保渡輪與接駁巴士，棧道多水霧請穿防滑鞋。'
  },

  // ==========================================
  // DAY 14: 10/11
  // ==========================================
  {
    dayNum: 14,
    dateStr: '10/11',
    dateTitle: '10/11｜Plitvice ➜ Zadar ➜ Split',
    subRoute: '上湖區仙境晨光 ➜ 札達爾海風琴 ➜ 斯普利特｜住 Cornaro Hotel Split',
    morningSchedule: [
      { time: '08:00', text: '十六湖上湖區清幽漫步' },
      { time: '11:00', text: '出發前往 Zadar　約130km／1.5小時' },
      { time: '12:30', text: 'Zadar 聽海風琴與城市光廊' }
    ],
    afternoonSection: {
      title: '下午｜海風琴 ＆ 前往 Split 皇城',
      flow: '海浪管風琴音律 → 羅馬廣場 → 自駕南下 Split → 入住老城五星飯店 → 濱海大道漫步',
      cards: [
        {
          type: 'spot',
          emoji: '🌊',
          name: 'Sea Organ (海風琴 ＆ 城市光廊)',
          info: '世界唯一利用海浪波濤演奏之自然風琴',
          address: 'Obala kralja Petra Kresimira IV, Zadar',
          mapQuery: 'Sea Organ Zadar'
        },
        {
          type: 'spot',
          emoji: '🏛️',
          name: 'Diocletian’s Palace (戴克里先宮)',
          info: '西元 4 世紀羅馬皇帝居所',
          address: 'Dioklecijanova ul. 1, Split',
          mapQuery: "Diocletian's Palace Split"
        },
        {
          type: 'restaurant',
          emoji: '🍴',
          name: 'Konoba Marjan (Split 招牌亞得里亞烤海鮮)',
          info: '晚餐 18:30–22:30',
          phone: '+385 98 934 6848',
          address: 'Senjska ul. 9, Split',
          mapQuery: 'Konoba Marjan Split'
        }
      ]
    },
    hotel: {
      name: 'Cornaro Hotel Split (老城核心五星)',
      info: '10/11–10/12｜含早餐',
      address: 'Sinjska ul. 6, Split',
      phone: '+385 21 644 200',
      mapQuery: 'Cornaro Hotel Split'
    }
  },

  // ==========================================
  // DAY 15: 10/12
  // ==========================================
  {
    dayNum: 15,
    dateStr: '10/12',
    dateTitle: '10/12｜Split ➜ Hvar 島',
    subRoute: '渡輪橫渡亞得里亞海前往陽光島嶼赫瓦爾｜住 Palace Elisabeth Hvar',
    morningSchedule: [
      { time: '09:00', text: 'Split 老城列柱廊廣場 ＆ 金門鐘樓' },
      { time: '11:00', text: '前往 Split 港口搭乘汽車渡輪（約2小時）' },
      { time: '13:30', text: '抵達 Hvar 島 Stari Grad 港口' }
    ],
    afternoonSection: {
      title: '下午｜Hvar 島奢華渡假時光',
      flow: '開車抵達 Hvar Town → 入住百年古蹟五星飯店 → 聖斯蒂芬廣場散步 → 港灣海鮮晚宴',
      cards: [
        {
          type: 'spot',
          emoji: '⛴',
          name: 'Jadrolinija Split 渡輪碼頭',
          info: 'Split 往返 Stari Grad 汽車渡輪',
          address: 'Gat Sv. Duje 1, Split',
          mapQuery: 'Split Ferry Port'
        },
        {
          type: 'spot',
          emoji: '🏰',
          name: 'Hvar 聖斯蒂芬廣場 (Trg sv. Stjepana)',
          info: '達爾馬提亞群島最大歷史廣場',
          address: 'Trg sv. Stjepana, Hvar',
          mapQuery: "St. Stephen's Square Hvar"
        },
        {
          type: 'restaurant',
          emoji: '🍴',
          name: 'Gariful Restaurant (Hvar 名流遊艇頂級海鮮)',
          info: '晚餐 18:30–23:00',
          phone: '+385 21 742 999',
          address: 'Riva 21, Hvar',
          mapQuery: 'Restaurant Gariful Hvar'
        }
      ]
    },
    hotel: {
      name: 'Palace Elisabeth, Hvar Heritage Hotel (立鼎世酒店集團)',
      info: '10/12–10/13｜含早餐',
      address: 'Trg sv. Stjepana 5, Hvar',
      phone: '+385 21 750 400',
      mapQuery: 'Palace Elisabeth Hvar Heritage Hotel'
    }
  },

  // ==========================================
  // DAY 16: 10/13
  // ==========================================
  {
    dayNum: 16,
    dateStr: '10/13',
    dateTitle: '10/13｜Hvar ➜ 返回 Split',
    subRoute: '西班牙堡壘俯瞰地獄群島 ➜ 渡輪返回 Split｜住 Marvie Hotel & Health',
    morningSchedule: [
      { time: '08:30', text: '飯店露台享用海景早餐' },
      { time: '09:30', text: '攀登西班牙要塞 (Fortica Španjola) 俯瞰紅瓦群島' },
      { time: '12:00', text: '自駕前往 Stari Grad 碼頭' }
    ],
    afternoonSection: {
      title: '下午｜渡輪返回本土 ＆ 濱海晚餐',
      flow: '搭乘渡輪返回 Split → 入住飯店 → Bačvice 海灘散步 → 達爾馬提亞海鮮料理',
      cards: [
        {
          type: 'spot',
          emoji: '🏰',
          name: 'Fortica Španjola (西班牙要塞)',
          info: '全島最佳制高點，眺望帕克萊尼群島',
          address: 'Fortica, Hvar',
          mapQuery: 'Fortica Fortress Hvar'
        },
        {
          type: 'restaurant',
          emoji: '🍴',
          name: 'Dvor Restaurant (Split 海崖浪漫海景餐廳)',
          info: '晚餐 18:30–23:00',
          phone: '+385 21 571 513',
          address: 'Put Firula 14, Split',
          mapQuery: 'Restaurant Dvor Split'
        }
      ]
    },
    hotel: {
      name: 'Marvie Hotel & Health Split',
      info: '10/13–10/14｜含早餐',
      address: 'Periceva 1, Split',
      phone: '+385 21 279 800',
      mapQuery: 'Marvie Hotel Split'
    }
  },

  // ==========================================
  // DAY 17: 10/14
  // ==========================================
  {
    dayNum: 17,
    dateStr: '10/14',
    dateTitle: '10/14｜Split ➜ Dubrovnik',
    subRoute: '佩列沙茨大橋 ➜ 亞得里亞海明珠杜布羅夫尼克｜住 Hotel Excelsior Dubrovnik',
    morningSchedule: [
      { time: '08:30', text: '飯店退房出發' },
      { time: '09:00', text: '自駕行經 Pelješac Bridge (佩列沙茨跨海大橋)' },
      { time: '12:30', text: '抵達 Dubrovnik (權力之遊戲君臨城)' }
    ],
    afternoonSection: {
      title: '下午｜君臨城古城牆壯麗漫步',
      flow: '派勒城門 (Pile Gate) → 2 公里完整古城牆巡禮 → 羅維里耶納克要塞 → 懸崖酒吧',
      cards: [
        {
          type: 'spot',
          emoji: '🏰',
          name: 'Dubrovnik City Walls (杜布羅夫尼克古城牆)',
          info: '世界文化遺產，漫步 2 公里海防城牆',
          address: 'Stradun, Dubrovnik',
          mapQuery: 'Dubrovnik City Walls'
        },
        {
          type: 'spot',
          emoji: '🍹',
          name: 'Buza Bar (懸崖跳水洞穴酒吧)',
          info: '開在城牆外垂直懸崖上的秘境酒吧',
          address: 'Crijeviceva ul. 9, Dubrovnik',
          mapQuery: 'Buza Bar Dubrovnik'
        },
        {
          type: 'restaurant',
          emoji: '🍴',
          name: 'Nautika Restaurant (米其林指南推薦第一排海景名店)',
          info: '晚餐 18:30–23:00',
          phone: '+385 20 442 526',
          address: 'Brsalje ul. 3, Dubrovnik',
          mapQuery: 'Nautika Restaurant Dubrovnik'
        }
      ]
    },
    hotel: {
      name: 'Hotel Excelsior Dubrovnik (五星懸崖海景名店)',
      info: '10/14–10/15｜含早餐',
      address: 'Ul. Frana Supila 12, Dubrovnik',
      phone: '+385 20 353 000',
      mapQuery: 'Hotel Excelsior Dubrovnik'
    },
    alert: '⚠ 佩列沙茨大橋通車後，全程行駛克羅埃西亞國土，無需再穿越波士尼亞邊境。'
  },

  // ==========================================
  // DAY 18: 10/15
  // ==========================================
  {
    dayNum: 18,
    dateStr: '10/15',
    dateTitle: '10/15｜Dubrovnik ✈ Milan',
    subRoute: '老城最後散步 ➜ DBV 機場還車 ➜ 飛往米蘭 MXP｜住 Sheraton Milan Malpensa',
    morningSchedule: [
      { time: '09:00', text: '史特拉敦大道 (Stradun) 漫步採買紀念品' },
      { time: '11:00', text: '出發前往 Dubrovnik 機場 (DBV)　約20km／30分鐘' },
      { time: '11:45', text: 'Hertz 還車並辦理登機手續' },
      { time: '14:20', text: '班機飛往米蘭馬爾彭薩機場 (MXP)' }
    ],
    afternoonSection: {
      title: '下午｜抵達米蘭 ＆ 入住航廈飯店',
      flow: '16:10 抵達米蘭 MXP T1 → 連通道直達 Sheraton 機場飯店 → 行李整理與休息',
      cards: [
        {
          type: 'spot',
          emoji: '✈️',
          name: 'Dubrovnik Airport (DBV)',
          info: 'Hertz 還車區位於航廈前租車停車場',
          address: 'Dobrota 24, Cilipi',
          mapQuery: 'Dubrovnik Airport'
        },
        {
          type: 'spot',
          emoji: '🏨',
          name: 'Sheraton Milan Malpensa (MXP T1 航廈內直通)',
          info: '航廈內直通免出戶外',
          address: 'Terminal 1, Malpensa Airport',
          mapQuery: 'Sheraton Milan Malpensa Airport Hotel'
        },
        {
          type: 'restaurant',
          emoji: '🍴',
          name: 'Il Canneto Restaurant (米蘭喜來登館內餐廳)',
          info: '晚餐 19:00–22:30',
          phone: '+39 02 2335 1',
          address: 'MXP T1 Sheraton 館內',
          mapQuery: 'Sheraton Milan Malpensa'
        }
      ]
    },
    hotel: {
      name: 'Sheraton Milan Malpensa Airport Hotel & Conference Centre',
      info: '10/15–10/16｜T1 航廈內直通',
      address: 'Malpensa Airport Terminal 1, Ferno VA, Italy',
      phone: '+39 02 2335 1',
      mapQuery: 'Sheraton Milan Malpensa'
    },
    alert: '⚠ 機場還車請預留 45 分鐘驗車時間，並務必加滿油箱保存收據。'
  },

  // ==========================================
  // DAY 19: 10/16
  // ==========================================
  {
    dayNum: 19,
    dateStr: '10/16',
    dateTitle: '10/16｜Milan ✈ Taipei',
    subRoute: '米蘭 MXP 退稅 ➜ 長榮航空 BR96 啟程返台',
    morningSchedule: [
      { time: '07:30', text: '飯店早餐與退房' },
      { time: '08:00', text: '前往 MXP T1 長榮航空櫃檯辦理退稅與托運' },
      { time: '11:15', text: '搭乘長榮航空 BR96 啟程直飛台北 TPE' }
    ],
    afternoonSection: {
      title: '返程｜航程與歸途',
      flow: '起飛離歐 → 享受機上餐點與免稅購物 → 於 10/17 05:40 抵達台北桃園機場',
      cards: [
        {
          type: 'spot',
          emoji: '✈️',
          name: 'Milan Malpensa T1 (長榮航空 Check-in 櫃檯)',
          info: '班機 BR96 (預計 10/17 05:40 抵達台北 TPE)',
          address: 'Malpensa Airport Terminal 1',
          mapQuery: 'Aeroporto di Milano-Malpensa Terminal 1'
        }
      ]
    },
    hotel: {
      name: '平安返家 (台北)',
      info: '圓滿結束義大利多洛米蒂與克羅埃西亞亞得里亞海之旅',
      address: 'Taiwan Taoyuan International Airport (TPE)',
      mapQuery: 'Taoyuan International Airport'
    }
  }
];
