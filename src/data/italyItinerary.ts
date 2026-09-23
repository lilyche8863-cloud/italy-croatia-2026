import { DayItinerary } from './itineraryTypes';

export const ITALY_ITINERARY_DAYS: DayItinerary[] = [
  // ==========================================
  // DAY 1: 2026/09/28 (MON) ｜ LIMONE SUL GARDA
  // ==========================================
  {
    dayNum: 1,
    date: '2026/09/28',
    dateDisplay: '09/28 (一)',
    month: '09',
    day: '28',
    weekday: '星期一 / MON',
    cityRegion: 'Limone sul Garda · 加爾達湖',
    themeTitle: '抵達義大利 ＋ 取車自駕前往檸檬小鎮 ＋ 湖畔漫步',
    hotelName: 'Aria Life Hotel',
    hotelRoomType: 'Suite (小型套房 · 2 晚連住 · 含早餐)',
    hotelAddress: 'Via Einaudi 4, 25010 Limone sul Garda, Italy',
    hotelNote: '加爾達湖景觀套房 · 專屬免費私人停車場 (免預約)',
    region: 'italy',
    highlights: ['長榮航空直飛 MXP', 'Hertz 機場取車', '自駕加爾達湖 (190km)', 'Aria Life Hotel', 'Limonaia 檸檬園', '老城小巷與聖本篤教堂', 'Ristorante Gemma 湖景晚餐'],
    todayRoute: [
      'TPE ✈ MXP (EVA AIR BR95)',
      'Hertz 取車 (MXP T1 Floor -1)',
      '自駕前往 Limone (約 190km)',
      'Aria Life Hotel Check-in',
      'Limone 湖畔漫步',
      '舊港口／碼頭 (Porto Vecchio)',
      'Limonaia del Castèl (歷史檸檬園)',
      '老城小巷漫步',
      'Chiesa di San Benedetto',
      '湖畔廣場 (Piazza Garibaldi)',
      'LB Gelateria 義式冰淇淋',
      'Ristorante Gemma 湖畔晚餐',
      '返回 Aria Life Hotel 休息'
    ],
    drivingRoute: {
      from: '米蘭馬爾彭薩機場 (MXP T1)',
      to: 'Limone sul Garda (Aria Life Hotel)',
      distance: '約 190 km',
      duration: '約 2 小時 15 分～2.5 小時',
      parkingSpot: 'Aria Life Hotel 私人專屬停車場 (免費免預約，附電車充電設施)',
      routeNote: '自 MXP 走 A4 高速公路東行，經 Brescia 東轉 SS45bis 湖濱公路北上。湖區隧道多，依義大利法規需全程開啟大燈。',
      tollNote: 'A4 高速公路過路費約 €14～16 (支援感應信用卡或現金支付)'
    },
    importantAlerts: [
      {
        title: '✈️ 航班抵達與機場租車提醒',
        type: 'traffic',
        content: '長榮航空 BR95 班機預計 07:35 抵達 MXP T1。領完行李後跟隨 Car Rental 指標前往 Floor -1 (地下一樓) 租車中心辦理 Hertz 取車手續（預計 09:30 取車，合約號：L661E7E0321）。'
      },
      {
        title: '🅿️ 檸檬小鎮停車與 ZTL 管制注意',
        type: 'parking',
        content: 'Limone sul Garda 老城核心區為全日行人徒步 ZTL 禁區。Aria Life Hotel 位於山腰景觀區，提供專屬私人免費停車場，請直接導航至飯店停車，切勿駕車駛入老城石板步道。'
      }
    ],
    timeline: [
      {
        time: '07:35',
        type: 'transport',
        title: '🛬 抵達米蘭馬爾彭薩機場第一航廈 (MXP T1)',
        badge: '入境通關 · EVA AIR BR95',
        description: '搭乘長榮航空 BR95（09/27 23:45 台北桃園 T2 出發 ➜ 09/28 07:35 抵達米蘭 MXP T1）。依序辦理非歐盟護照查驗、提領托運行李。',
        duration: '約 1.5 小時 (入境與提領行李)',
        address: 'Malpensa Airport Terminal 1, 21010 Ferno VA, Italy',
        mapQuery: 'Aeroporto di Milano-Malpensa Terminal 1',
        ticketPrice: '機票已開票 (旅客：春香、小許、麗安)',
        importantNotice: '提領行李後，搭乘手扶梯或電梯下至 Floor -1 租車櫃檯專區。'
      },
      {
        time: '09:30',
        type: 'transport',
        title: '🚗 Hertz 櫃檯辦理取車手續 (MXP T1)',
        badge: 'Hertz · Floor -1 租車專區',
        description: '前往 Hertz 門市辦理租車手續。車型：Opel Corsa 或同級自排車，已包含 Super Cover 全額零自負額保險、跨國通行許可與異地還車。',
        duration: '約 30～45 分鐘',
        address: 'Malpensa Airport Terminal 1, Floor -1, 21010 Ferno VA, Italy',
        mapQuery: 'Hertz Rent a Car Milano Malpensa Airport Terminal 1',
        openingHours: '07:00–23:59 (每日營業)',
        phone: '+39 02 5858 1081',
        importantNotice: '取車時請務必出示台灣駕照正本、國際駕照與預訂用信用卡，並於停車場仔細檢查車身外觀與胎壓。'
      },
      {
        time: '10:15',
        type: 'transport',
        title: '🛣️ 自駕出發：MXP 機場 ➜ 加爾達湖 Limone sul Garda',
        badge: '開車約 190 km · 車程約 2.5 小時',
        description: '沿 A4 高速公路前往 Brescia，隨後切換至著名的西加爾達湖濱景觀公路 (Gardesana Occidentale - SS45bis)，沿途穿過岩壁開鑿的隧道群，遠眺碧藍浩瀚的加爾達湖。',
        duration: '約 2 小時 15 分～2.5 小時',
        address: 'Limone sul Garda, 25010 Brescia, Italy',
        mapQuery: 'Aria Life Hotel Limone sul Garda',
        parkingInfo: '直接導航至 Aria Life Hotel 專屬私人停車場',
        importantNotice: '義大利高速公路需開大燈。進入收費站取票，出口插卡或感應信用卡付費。'
      },
      {
        time: '14:00',
        type: 'accommodation',
        title: '🏨 入住：Aria Life Hotel (2 晚連住)',
        badge: 'Suite 小型套房 · 含早餐 · 免費私人停車',
        description: '抵達加爾達湖畔風景秀麗的 Aria Life Hotel。辦理入住手續，卸下大型行李，稍作梳洗休息。飯店享有開闊湖景露台與室外泳池。',
        duration: '建議停留 1～1.5 小時 (休息梳洗)',
        address: 'Via Einaudi 4, 25010 Limone sul Garda, Italy',
        mapQuery: 'Aria Life Hotel Limone sul Garda',
        openingHours: '入住 14:00–22:00 / 退房 10:30 前 (櫃檯 07:30–23:00)',
        phone: '+39 0365 189 6773',
        parkingInfo: '飯店專屬室內/室外私人停車場，免費且不需預約',
        ticketPrice: '房費已包含每日豐盛義式自助早餐',
        actionLabel: '住宿詳情',
        actionRoute: '/accommodation'
      },
      {
        time: '15:30',
        type: 'walk',
        title: '🚶 Limone 湖畔漫步 ➜ 舊港口碼頭 (Porto Vecchio)',
        badge: '加爾達湖經典風光 · 徒步探索',
        description: '從飯店步行下行至加爾達湖畔長廊。途經依偎湖岸的舊港口（Porto Vecchio），欣賞停泊的彩色木船、岸邊檸檬圖騰陶磚，感受加爾達湖北部的微風與悠閒度假氛圍。',
        duration: '建議停留 45 分鐘',
        address: 'Lungolago Marconi / Porto Vecchio, 25010 Limone sul Garda BS, Italy',
        mapQuery: 'Porto Vecchio Limone sul Garda',
        ticketPrice: '免費漫步',
        parkingInfo: '徒步區無停車位，車輛請停放於 Aria Life Hotel',
        importantNotice: '老城石板路高低起伏有階梯，建議穿著防滑好走平底鞋。'
      },
      {
        time: '16:15',
        type: 'activity',
        title: '🍋 Limonaia del Castèl (歷史檸檬園景觀溫室)',
        badge: '必訪名勝 · 18 世紀古老梯田檸檬園',
        description: '參觀依陡峭崖壁修築的多層梯田檸檬溫室。園內引水道精密，種植著結實纍纍的黃澄澄檸檬、香櫞與柑橘，登上頂層可俯瞰整座 Limone 小鎮紅瓦屋頂與無邊無際的湛藍湖面。',
        duration: '建議停留 1 小時',
        address: 'Via Orti, 25010 Limone sul Garda BS, Italy',
        mapQuery: 'Limonaia del Castel Limone sul Garda',
        openingHours: '10:00–18:00 (每日開放，2026 最新)',
        ticketPrice: '成人約 €2～3 (現場購票，支援現金/信用卡)',
        parkingInfo: '景點位於徒步區內，僅能步行到達',
        phone: '+39 0365 954720',
        importantNotice: '園內階梯較多，但步道維護良好，頂層為拍攝湖景與檸檬溫室的最佳制高點。'
      },
      {
        time: '20:30',
        type: 'accommodation',
        title: '🏨 散步返回 Aria Life Hotel 休憩',
        badge: '夜宿 Limone · 調整時差',
        description: '伴隨微涼湖風與老城昏黃街燈，悠閒漫步返回飯店。泡澡放鬆，消除長途越洋飛行與首日駕駛疲勞，迎接明日加爾達湖的精彩旅程。',
        duration: '夜間休息',
        address: 'Via Einaudi 4, 25010 Limone sul Garda, Italy',
        mapQuery: 'Aria Life Hotel Limone sul Garda',
        phone: '+39 0365 189 6773'
      }
    ]
  },

  // ==========================================
  // DAY 2: 2026/09/29 (TUE) ｜ LIMONE & MALCESINE
  // ==========================================
  {
    dayNum: 2,
    date: '2026/09/29',
    dateDisplay: '09/29 (二)',
    month: '09',
    day: '29',
    weekday: '星期二 / TUE',
    cityRegion: 'Limone & Malcesine · 加爾達湖',
    themeTitle: '懸崖水上自行車步道 ＋ 渡輪跨湖 ＋ 巴爾多山旋轉纜車俯瞰湖景',
    hotelName: 'Aria Life Hotel',
    hotelRoomType: 'Suite (小型套房 · 續住第 2 晚 · 含早餐)',
    hotelAddress: 'Via Einaudi 4, 25010 Limone sul Garda, Italy',
    hotelNote: '加爾達湖景觀套房 · 專屬免費私人停車場',
    region: 'italy',
    highlights: ['加爾達湖懸空步道', '加爾達湖跨湖渡輪', 'Malcesine 湖畔古城', 'Monte Baldo 360°旋轉纜車', '斯卡利傑城堡', 'Turista 柴燒披薩'],
    todayRoute: [
      'Aria Life Hotel 早餐',
      'Ciclopedonale del Garda (懸崖水上步道)',
      'Porto di Limone (渡輪碼頭)',
      '加爾達湖渡輪跨湖 (往 Malcesine)',
      'Porto di Malcesine 抵達',
      'Funivia Malcesine-Monte Baldo 纜車登頂 (1760m)',
      'Monte Baldo 阿爾卑斯高山草甸全景散步',
      'Ristorante Al Gondoliere (城堡旁午餐)',
      'Castello Scaligero (斯卡利傑城堡)',
      '渡輪返回 Limone sul Garda',
      'Turista Pizzeria 湖畔柴燒披薩晚餐',
      'Aria Life Hotel 休息'
    ],
    drivingRoute: {
      from: 'Aria Life Hotel',
      to: 'Ciclopedonale del Garda 步道入口',
      distance: '約 3.5 km',
      duration: '約 8 分鐘 (亦可直接由小鎮租單車騎乘前往)',
      parkingSpot: 'Parcheggio Capo Reamol / Parcheggio Limone Centro',
      routeNote: '單車步道入口處停車位極其有限，旺季建議直接自飯店租借單車或由老城碼頭搭乘接駁小巴前往。'
    },
    importantAlerts: [
      {
        title: '🚡 巴爾多山纜車營運與天氣確認',
        type: 'cablecar',
        content: 'Monte Baldo 旋轉纜車海拔升至 1,760 公尺，山頂氣溫較湖面低約 8～10°C。若遇強風可能減班或停駛，出發前請於售票口確認營運狀態並備妥防風保暖外套。'
      },
      {
        title: '⛴ 跨湖渡輪班次與票務須知',
        type: 'ferry',
        content: 'Limone 往返 Malcesine 之渡輪約每 30–60 分鐘一班，單程航程約 20 分鐘，往返船票約 €9–11/人，碼頭售票亭隨到隨買即可。'
      }
    ],
    timeline: [
      {
        time: '09:15',
        type: 'activity',
        title: '🚲 Ciclopedonale del Garda (加爾達湖水上懸空單車步道)',
        badge: '全球最美單車道 · 懸崖凌空棧道',
        description: '參觀被譽為歐洲最震撼的懸空單車木棧道。棧道鋼構懸空固定於加爾達湖垂直石灰岩壁上，腳下即是深邃透明的碧綠湖水，視野毫無阻隔。',
        duration: '建議停留 1.5 小時',
        address: 'SS45bis, 25010 Limone sul Garda BS, Italy',
        mapQuery: 'Ciclopedonale del Garda Limone sul Garda',
        ticketPrice: '免費通行 (步道對行人和單車全天開放)',
        parkingInfo: 'Parcheggio Capo Reamol (收費停車場，車位有限，建議早到)',
        importantNotice: '步道全長約 2.5 km，行人與單車共用，步行時請靠右側行走並留意疾駛單車。'
      },
      {
        time: '11:00',
        type: 'ferry',
        title: '⛴ 加爾達湖渡輪跨湖：Limone ➜ Malcesine (馬爾切西內)',
        badge: '湖心巡航 · 航程約 20 分鐘',
        description: '由 Limone 碼頭登船橫渡加爾達湖最壯闊的湖段。從湖面上回望 Limone 的陡峭岩壁與檸檬梯田，並迎向對岸 Malcesine 矗立水畔的中世紀城堡。',
        duration: '約 25 分鐘 (航程與候船)',
        address: 'Porto di Limone, Lungolago Marconi, 25010 Limone sul Garda BS, Italy',
        mapQuery: 'Porto di Limone sul Garda',
        ticketPrice: '往返船票約 €9～12/成人 (現場售票亭購買)',
        openingHours: '08:00–19:30 (每 30–60 分鐘一班)'
      },
      {
        time: '11:45',
        type: 'cablecar',
        title: '🚡 Monte Baldo (巴爾多山) 360°旋轉纜車登頂',
        badge: '直達海拔 1,760m · 阿爾卑斯景觀台',
        description: '從 Malcesine 搭乘兩段階梯式纜車，第二段車廂為世界首創的 360 度自轉全景吊廂，全方位無死角俯瞰整個加爾達湖長條壯闊水域與連綿山巒。',
        duration: '建議停留 1.5～2 小時 (含山頂散步與拍照)',
        address: 'Via Navene Vecchia 10, 37018 Malcesine VR, Italy',
        mapQuery: 'Funivia Malcesine Monte Baldo',
        ticketPrice: '往返票約 €25～27/成人 (支援現場刷卡)',
        openingHours: '08:00–18:45 (末班下山纜車約 19:00)',
        phone: '+39 045 740 0206',
        importantNotice: '山頂海拔高風勢強勁，氣溫偏涼，務必隨身攜帶防風外套與圍巾。'
      },
      {
        time: '15:15',
        type: 'activity',
        title: '🏰 Castello Scaligero (斯卡利傑城堡) 歷史探索',
        badge: '中世紀湖畔要塞 · 歌德歷史足跡',
        description: '登上矗立在岩岬上的 13 世紀斯卡利傑防禦城堡。參觀城內歌德博物館、攀上高聳的主塔樓瞭望台，360 度眺望對岸的 Limone 崖壁與波光粼粼的湖面。',
        duration: '建議停留 1 小時',
        address: 'Via Castello, 37018 Malcesine VR, Italy',
        mapQuery: 'Castello Scaligero di Malcesine',
        openingHours: '09:30–19:30 (每日開放，最後入場 19:00)',
        ticketPrice: '成人 €6 (學生/敬老 €5)',
        phone: '+39 045 658 9904',
        importantNotice: '塔樓階梯較陡峭且狹窄，攀登時請握緊扶手扶梯。'
      },
      {
        time: '16:45',
        type: 'ferry',
        title: '⛴ 搭乘渡輪返回 Limone sul Garda',
        badge: '暮光回航 · 航程 20 分鐘',
        description: '在 Malcesine 碼頭搭船橫越湖面返回 Limone。傍晚陽光斜射在西岸懸崖上，呈現金黃燦爛的岩壁光澤。',
        duration: '約 25 分鐘',
        address: 'Porto di Malcesine, 37018 Malcesine VR, Italy',
        mapQuery: 'Porto di Malcesine',
        ticketPrice: '使用已購買之往返船票登船'
      },
      {
        time: '20:30',
        type: 'accommodation',
        title: '🏨 返回 Aria Life Hotel 整理行李',
        badge: '收拾裝備 · 明日啟程多洛米蒂',
        description: '在套房陽台享受加爾達湖的微風，整理隨身行李，準備明日啟程前往多洛米蒂山區核心：休斯高原 (Alpe di Siusi)。',
        duration: '夜宿',
        address: 'Via Einaudi 4, 25010 Limone sul Garda, Italy',
        mapQuery: 'Aria Life Hotel Limone sul Garda',
        phone: '+39 0365 189 6773'
      }
    ]
  },

  // ==========================================
  // DAY 3: 2026/09/30 (WED) ｜ BOLZANO → HOTEL SANTNER
  // ==========================================
  {
    dayNum: 3,
    date: '2026/09/30',
    dateDisplay: '09/30 (三)',
    month: '09',
    day: '30',
    weekday: '星期三 / WED',
    cityRegion: 'Bolzano (博爾扎諾) ➜ Hotel Santner (休斯高原)',
    themeTitle: 'Limone 退房 ➜ Bolzano 老城巡禮 ➜ Esselunga 補給加油 ➜ 入住 Hotel Santner',
    hotelName: 'Hotel Santner Alpine Sport & Relax',
    hotelRoomType: '雙人景觀房 2 間 · 一泊二食 HB (含早餐與五道式主廚晚宴)',
    hotelAddress: 'Via Joch 6, 39040 Alpe di Siusi, Italy',
    hotelNote: '休斯高原保護區核心 · 附住客通行許可證 · 免費地下車庫',
    region: 'italy',
    highlights: ['Limone 退房', '自駕多洛米蒂景觀路', 'Bolzano 老城巡禮', '主教座堂 ＆ 瓦爾特廣場', '拱廊街與草藥廣場市集', 'Esselunga 超市採買補給', '入住 Hotel Santner (一泊二食)'],
    todayRoute: [
      'Limone 退房',
      '自駕前往 Bolzano',
      'WaltherPark 停車',
      '主教座堂 (Duomo di Bolzano)',
      'Piazza Walther (瓦爾特廣場)',
      'Via dei Portici (拱廊街)',
      'Piazza delle Erbe (草藥廣場 / 市集)',
      'Esselunga 超市採買補給',
      '加油站補滿油箱',
      '開車前往休斯高原',
      '入住 Hotel Santner'
    ],
    drivingRoute: {
      from: 'Limone sul Garda (Aria Life Hotel)',
      to: 'Bolzano ➜ Hotel Santner (Alpe di Siusi)',
      distance: '約 155 km',
      duration: '約 2.5～3 小時 (中途停留 Bolzano)',
      parkingSpot: 'Bolzano: WaltherPark 現代化地下停車場；休斯高原: Hotel Santner 專屬免費地下車庫',
      routeNote: '自 Limone 北上經 Riva del Garda 轉至 Rovereto 南進入 A22 羅馬高速公路直達 Bolzano。上休斯高原為盤山公路，坡度較大，請保持平穩車速。',
      tollNote: 'A22 高速公路過路費約 €8～10'
    },
    importantAlerts: [
      {
        title: '⚠️ Bolzano 市中心 ZTL 嚴格電子拍照管制',
        type: 'traffic',
        content: 'Bolzano 市中心為全區電子拍照的 ZTL 限行區。導航請直接設定目的地為「Parking WaltherPark」或「Parcheggio Piazza Walther」，切勿誤入標有 Zona Traffico Limitato 的老城街道以免受罰。'
      },
      {
        title: '🏔️ 休斯高原車輛管制與 Driving Permit',
        type: 'permit',
        content: '休斯高原為國家級自然保護區，每日 09:00–17:00 嚴禁一般車輛上山。因已預訂 Hotel Santner，飯店已向管制站通報登記車號，可憑訂房確認信在管制閘門安心通行直達飯店！'
      }
    ],
    timeline: [
      {
        time: '08:30',
        type: 'accommodation',
        title: '🏨 Limone Aria Life Hotel 辦理退房 ＆ 行李上車',
        badge: '告別加爾達湖',
        description: '享用完早餐後辦理退房，將行李裝載至車輛後車廂，開車出發北上前往 Bolzano。',
        duration: '30 分鐘',
        address: 'Via Einaudi 4, 25010 Limone sul Garda, Italy',
        phone: '+39 0365 189 6773'
      },
      {
        time: '09:00',
        type: 'transport',
        title: '🚗 自駕北上：Limone ➜ Bolzano (博爾扎諾)',
        badge: '距離約 120 km · 車程約 1 小時 45 分',
        description: '沿著 SS45bis 繞過湖泊最北端的 Riva del Garda，隨後由 Rovereto 轉入 A22 布倫納高速公路一路北上，進入南蒂羅爾山谷首府 Bolzano。',
        duration: '約 1 小時 45 分',
        address: 'Parcheggio WaltherPark, Via Stazione, 39100 Bolzano BZ, Italy',
        mapQuery: 'Parking WaltherPark Bolzano',
        parkingInfo: '直接停入 WaltherPark 大型智慧地下停車場 (避開 ZTL)'
      },
      {
        time: '10:45',
        type: 'parking',
        title: '🅿️ 抵達 Bolzano：WaltherPark 停車',
        badge: '安全避開 ZTL · 步行 3 分鐘至廣場',
        description: '車輛順利停入 WaltherPark 現代化地下停車場。乘電梯上至地面層，直接抵達綠樹成蔭的市中心步行街。',
        duration: '15 分鐘',
        address: 'Via Stazione 1, 39100 Bolzano BZ, Italy',
        mapQuery: 'Parking WaltherPark Bolzano',
        ticketPrice: '每小時約 €2.80～3.20'
      },
      {
        time: '11:00',
        type: 'activity',
        title: '⛪ 主教座堂 (Duomo di Bolzano / 聖母升天主教座堂)',
        badge: '羅曼式與哥德式瑰寶 · 綠金花磚屋頂',
        description: '建於 14–15 世紀的南蒂羅爾地標座堂，擁有標誌性菱形花紋彩瓷瓦屋頂與 65 公尺高鏤空哥德鐘樓，內部莊嚴神聖。',
        duration: '約 30 分鐘',
        address: 'Piazza della Parrocchia 27, 39100 Bolzano BZ, Italy',
        mapQuery: 'Duomo di Bolzano'
      },
      {
        time: '11:30',
        type: 'activity',
        title: '🚶 瓦爾特廣場 (Piazza Walther)',
        badge: '南蒂羅爾首府客廳 · 瓦爾特詩人雕像',
        description: '博爾扎諾最優雅的核心廣場，四周環繞戶外露天咖啡座與阿爾卑斯風格建築，中央矗立中古高地德語吟遊詩人 Walther von der Vogelweide 雕像。',
        duration: '約 30 分鐘',
        address: 'Piazza Walther, 39100 Bolzano BZ, Italy',
        mapQuery: 'Piazza Walther Bolzano'
      },
      {
        time: '12:00',
        type: 'activity',
        title: '🛍️ 拱廊商業街 (Via dei Portici / Lauben)',
        badge: '800 年歷史拱廊街 · 德義交融精品名店',
        description: '博爾扎諾最具特色的中世紀連綿拱廊街，精緻櫥窗、戶外名品店、傳統糕餅舖與南蒂羅爾選品林立，雨天也能舒適逛街漫步。',
        duration: '約 45 分鐘',
        address: 'Via dei Portici, 39100 Bolzano BZ, Italy',
        mapQuery: 'Via dei Portici Bolzano'
      },
      {
        time: '12:45',
        type: 'activity',
        title: '🍏 草藥廣場 (Piazza delle Erbe) 市集 ＆ 午餐',
        badge: '五彩蔬果市集 · 海王星噴泉 · 老城午餐',
        description: '繽紛熱鬧的每日生鮮市集，擺滿新鮮高山蘋果、無花果、南蒂羅爾燻火腿（Speck）、阿爾卑斯起司與鮮花；隨後在廣場周邊餐館享用道地義式午餐。',
        duration: '約 1.5 小時',
        address: 'Piazza delle Erbe, 39100 Bolzano BZ, Italy',
        mapQuery: 'Piazza delle Erbe Bolzano'
      },
      {
        time: '14:30',
        type: 'shopping',
        title: '🛒 Esselunga 超市大採買補給',
        badge: '生鮮旗艦超市 · 充足補給',
        description: '前往 Esselunga 大型超市，採買瓶裝水、新鮮水果、高山零食與必備日用品，準備上山入住休斯高原。',
        duration: '約 40 分鐘',
        address: 'Via Galilei 20, 39100 Bolzano BZ, Italy',
        mapQuery: 'Esselunga Bolzano'
      },
      {
        time: '15:15',
        type: 'gas',
        title: '⛽ 加油站將油箱補滿',
        badge: '上山前燃油充足',
        description: '在進入休斯高原前將車輛油箱加滿，確保高山行駛與連日山區自駕無後顧之憂。',
        duration: '15 分鐘',
        mapQuery: 'Distributore di benzina Bolzano'
      },
      {
        time: '15:30',
        type: 'transport',
        title: '🚗 自駕啟程：Bolzano ➜ 休斯高原 (Hotel Santner)',
        badge: '車程約 45 分鐘 · 進入自然保護區',
        description: '經 SS12 與 SP24 盤山公路上升至多洛米蒂最核心的自然保護區休斯高原。出示 Hotel Santner 訂房確認信通過 San Valentino 管制站。',
        duration: '約 45～50 分鐘',
        address: 'Via Joch 6, 39040 Alpe di Siusi BZ, Italy',
        mapQuery: 'Hotel Santner Alpine Sport & Relax',
        parkingInfo: '直接停入 Hotel Santner 專屬地下免費車庫'
      },
      {
        time: '16:30',
        type: 'accommodation',
        title: '🏨 入住：Hotel Santner Alpine Sport & Relax (3 晚連住)',
        badge: '休斯高原核心奢華飯店 · 一泊二食 (HB)',
        description: '抵達位於休斯高原核心海拔 1,850m 的奢華度假飯店。辦理入住 2 間雙人景觀房。房內即可遠眺標誌性的施盧恩峰 (Schlern) 磅礡絕壁。',
        duration: '入住手續與放鬆',
        address: 'Via Joch 6, 39040 Alpe di Siusi, Italy',
        mapQuery: 'Hotel Santner Alpine Sport & Relax',
        openingHours: '入住 15:00–21:00 / 退房 11:00 前',
        phone: '+39 0471 727913',
        parkingInfo: '飯店專屬地下免費暖氣車庫，配備電動車充電樁',
        ticketPrice: '房價已包含每日阿爾卑斯全景早餐與精緻五道式晚宴',
        actionLabel: '住宿詳情',
        actionRoute: '/accommodation'
      }
    ]
  },

  // ==========================================
  // DAY 4: 2026/10/01 (THU) ｜ ALPE DI SIUSI 全日草原健行
  // ==========================================
  {
    dayNum: 4,
    date: '2026/10/01',
    dateDisplay: '10/01 (四)',
    month: '10',
    day: '01',
    weekday: '星期四 / THU',
    cityRegion: 'Alpe di Siusi (多洛米蒂休斯高原)',
    themeTitle: '歐洲最大高山牧場草原健行 ＋ 仰望施盧恩峰 (Schlern) 壯麗絕壁',
    hotelName: 'Hotel Santner Alpine Sport & Relax',
    hotelRoomType: '雙人景觀房 2 間 · 續住第 2 晚 · 一泊二食 HB',
    hotelAddress: 'Via Joch 6, 39040 Alpe di Siusi, Italy',
    hotelNote: '休斯高原核心 · 門前即是起點步道 · 免費地下車庫',
    region: 'italy',
    highlights: ['休斯高原全日健行', 'Compatsch 放牧草場', '30號全景步道', 'Rifugio Sanon 山屋午餐', 'Sassolungo 巨石背景', 'Hotel Santner 桑拿晚宴'],
    todayRoute: [
      'Hotel Santner 景觀早餐',
      '步行出發至 Compatsch 步道起點',
      '漫步 30 號高山草甸全景步道',
      '抵達 Rifugio Sanon 高山景觀山屋',
      'Rifugio Sanon 戶外露台享用高山午餐',
      '欣賞阿爾卑斯放牧牛鈴與 Sassolungo 巨峰',
      '經由 Panorama 步道環狀漫步返回',
      'Hotel Santner 露天溫水泳池放鬆',
      '飯店五道式主廚晚宴'
    ],
    drivingRoute: {
      from: 'Hotel Santner',
      to: '今日全日不需開車！',
      distance: '0 km (全日健行徒步)',
      duration: '0 分鐘',
      parkingSpot: '車輛全程安全停放於 Hotel Santner 免費地下車庫',
      routeNote: '飯店門口即是休斯高原核心健行步道系統交會點，無需挪動車輛。'
    },
    importantAlerts: [
      {
        title: '🥾 高原全日健行裝備提醒',
        type: 'warning',
        content: '休斯高原平均海拔約 1,850m～2,050m，紫外線強烈且山區天候變化迅速。出發請務必著防滑登山健行鞋、攜帶登山杖、防風保暖外套、遮陽帽與太陽眼鏡。'
      }
    ],
    timeline: [
      {
        time: '09:30',
        type: 'walk',
        title: '🚶 漫步出發：Compatsch ➜ 30 號全景草甸步道',
        badge: '歐洲最大高山草原 · 仙境畫卷',
        description: '自飯店徒步出發，步道兩側盡是翠綠起伏的高山牧草地、錯落有致的阿爾卑斯古老木造穀倉與放牧牛群。遠方施盧恩峰（Schlern）如巨大石壁屏障矗立眼前。',
        duration: '建議健行 2 小時 (坡度平緩好走)',
        address: 'Compatsch, 39040 Alpe di Siusi BZ, Italy',
        mapQuery: 'Compatsch Alpe di Siusi',
        ticketPrice: '步道全線免費開放'
      },
      {
        time: '14:00',
        type: 'walk',
        title: '📷 Panorama 全景步道環狀散步返回',
        badge: '360° 多洛米蒂群山環繞',
        description: '沿著起伏平緩的環狀步道悠閒漫步回程。沿途空氣清新甘冽，牛鈴聲清脆悅耳，可盡情停下腳步拍攝如明信片般的草原山屋大景。',
        duration: '建議步行 1.5～2 小時',
        mapQuery: 'Panorama Alpe di Siusi'
      }
    ]
  },

  // ==========================================
  // DAY 5: 2026/10/02 (FRI) ｜ SECEDA ＋ ORTISEI
  // ==========================================
  {
    dayNum: 5,
    date: '2026/10/02',
    dateDisplay: '10/02 (五)',
    month: '10',
    day: '02',
    weekday: '星期五 / FRI',
    cityRegion: 'Seceda ＋ Ortisei',
    themeTitle: 'Seceda 刀鋒山斜切絕壁登頂 ＋ Pieralongia 巨石漫步 ＋ Ortisei 木雕老城',
    hotelName: 'Hotel Santner Alpine Sport & Relax',
    hotelRoomType: '雙人景觀房 2 間 · 續住第 3 晚 · 一泊二食 HB',
    hotelAddress: 'Via Joch 6, 39040 Alpe di Siusi, Italy',
    hotelNote: '休斯高原核心 · 免費地下車庫',
    region: 'italy',
    highlights: ['Ortisei 木雕小鎮', 'Seceda 雙段景觀纜車', '海拔 2,518m 刀鋒山絕壁', 'Baita Sofie 山頂景觀餐廳', 'Pieralongia 雙尖巨石原路返回', 'Hotel Santner 一泊二食晚宴'],
    todayRoute: [
      'Hotel Santner 出發',
      '開車前往 Ortisei (奧蒂塞伊)',
      'Parcheggio Seceda 停車場',
      '搭乘兩段纜車 (Ortisei ➜ Furnes ➜ Seceda)',
      'Seceda 刀鋒山脊健行',
      '漫步前往 Pieralongia 巨石山屋',
      '原路返回 Seceda 纜車站',
      '搭乘纜車下山返回 Ortisei',
      'Ortisei 木雕老城散步',
      '返回 Hotel Santner 享受水療與晚宴'
    ],
    drivingRoute: {
      from: 'Hotel Santner (Alpe di Siusi)',
      to: 'Ortisei (Seceda 纜車站) 往返',
      distance: '約 35 km (往返總計)',
      duration: '約 30 分鐘單程',
      parkingSpot: 'Parcheggio Seceda (纜車站地下/地面大型專用收費停車場)',
      routeNote: '下山至 Ortisei 為下坡山路，請善用引擎低速檔減速。'
    },
    importantAlerts: [
      {
        title: '🚡 Seceda 刀鋒山纜車營運須知',
        type: 'cablecar',
        content: 'Seceda 纜車由兩段構成（Ortisei-Furnes 吊廂 ➜ Furnes-Seceda 大型纜車），往返票價成人約 €39.50。山頂海拔高達 2,518m，上午光線最佳且風勢最穩，強烈建議 09:30 前抵達纜車站。末班下山纜車約 17:30，請注意回程時間。'
      }
    ],
    timeline: [
      {
        time: '09:00',
        type: 'transport',
        title: '🚗 自駕前往 Ortisei (奧蒂塞伊) ＆ 停放 Seceda 停車場',
        badge: '車程約 25 分鐘',
        description: '開車自高原下山抵達著名的木雕小鎮 Ortisei，直接駛入 Seceda 纜車站專屬大型停車場。',
        duration: '約 25 分鐘',
        address: 'Via Val d\'Anna 2, 39046 Ortisei BZ, Italy',
        mapQuery: 'Parcheggio Funivie Seceda Ortisei',
        parkingInfo: 'Parcheggio Seceda 大型收費停車場 (約 €12/天，支援信用卡)'
      },
      {
        time: '09:40',
        type: 'cablecar',
        title: '🚡 搭乘 Seceda 雙段高空纜車直達山頂 (Ortisei ➜ Furnes ➜ Seceda)',
        badge: '高空跨越 · 海拔落差逾 1,200m',
        description: '搭乘現代化吊廂至 Furnes 中繼站，再換乘大型全景纜車凌空飛躍壯麗峽谷直達 Seceda 山頂（海拔 2,518m）。出站瞬間，刀鋒山如巨型綠浪斬向天空的奇景震撼呈現。',
        duration: '約 20 分鐘 (纜車行程)',
        address: 'Seceda 2518m, 39046 Ortisei BZ, Italy',
        mapQuery: 'Seceda Top Station Ortisei',
        ticketPrice: '往返票約 €39.50/成人 (現場櫃檯或自動售票機)',
        openingHours: '08:30–17:30 (每日營運，最後下山約 17:30)'
      },
      {
        time: '10:15',
        type: 'activity',
        title: '📷 Seceda 刀鋒山脊健行 ＆ 世界級地理奇觀攝影',
        badge: '多洛米蒂地標 · 斜切綠茵絕壁',
        description: '沿著刀尖般的山脊步道前行。左側是近乎垂直墜落千米的懸崖絕壁，右側是順勢傾斜的無垠綠色草甸，遠方蓋斯勒群峰（Odle / Geisler）如鋸齒般刺破蒼穹。',
        duration: '建議停留 1.5 小時',
        address: 'Seceda Ridge Trail, 39046 Ortisei BZ, Italy',
        mapQuery: 'Seceda Viewpoint Ortisei',
        ticketPrice: '免費漫步'
      },
      {
        time: '13:30',
        type: 'walk',
        title: '🚶 漫步至 Baita Pieralongia 巨石山屋',
        badge: '雙尖石塔巨岩 · 傳統高山農莊',
        description: '由 Sofie 沿著平緩草地步道漫步約 20 分鐘抵達著名的 Pieralongia 巨石。兩根直插雲霄的巨岩矗立在草地上，一旁的傳統小木屋供應新鮮手作原味酸奶。',
        duration: '建議停留 1 小時',
        address: 'Pieralongia, 39046 Ortisei BZ, Italy',
        mapQuery: 'Baita Pieralongia Seceda',
        openingHours: '09:30–17:00'
      },
      {
        time: '14:45',
        type: 'walk',
        title: '🚶 原路返回 Seceda 纜車站 ＆ 纜車下山返回 Ortisei',
        badge: '原路返回 · 平穩下山',
        description: '自 Pieralongia 原路漫步返回 Seceda 山頂纜車站，搭乘纜車下行經 Furnes 返回 Ortisei 纜車站。',
        duration: '約 1 小時',
        address: 'Via Val d\'Anna 2, 39046 Ortisei BZ, Italy'
      },
      {
        time: '15:45',
        type: 'activity',
        title: '🪵 Ortisei (奧蒂塞伊) 木雕老城散步',
        badge: '阿爾卑斯木雕之都 · 繽紛步行街',
        description: '漫步於 Ortisei 充滿色彩的木造房舍與石板行人街道，欣賞精緻的木雕櫥窗，走訪傳統咖啡館品嚐義式咖啡與冰淇淋。',
        duration: '約 1 小時',
        address: 'Ortisei, 39046 BZ, Italy',
        mapQuery: 'Ortisei Val Gardena'
      },
      {
        time: '17:00',
        type: 'transport',
        title: '🚗 自駕返回 Hotel Santner (休斯高原)',
        badge: '車程約 30 分鐘',
        description: '開車返回休斯高原 Hotel Santner，將車輛停入地下車庫。',
        duration: '約 30 分鐘',
        address: 'Via Joch 6, 39040 Alpe di Siusi, Italy'
      }
    ]
  },

  // ==========================================
  // DAY 6: 2026/10/03 (SAT) ｜ LAGO DI BRAIES
  // ==========================================
  {
    dayNum: 6,
    date: '2026/10/03',
    dateDisplay: '10/03 (六)',
    month: '10',
    day: '03',
    weekday: '星期六 / SAT',
    cityRegion: 'Lago di Braies (布萊埃斯湖)',
    themeTitle: 'Hotel Santner 退房 ➜ Brunico 補給 ➜ 布萊埃斯湖仙境 ➜ Dobbiaco ➜ 入住木屋',
    hotelName: 'Chalet del Capriolo',
    hotelRoomType: '頂樓原木景觀公寓 · 3 晚連住 · 附全套現代廚房與洗烘衣設備',
    hotelAddress: '108 Via Nazionale, 32040 Vodo Cadore, Italy',
    hotelNote: 'Booking.com 確認碼：5916.383.549 · 專屬免費私人停車位',
    region: 'italy',
    highlights: ['告別休斯高原', '翻越加爾狄納山口 (Passo Gardena 2,136m)', 'Brunico / San Lorenzo INTERSPAR 超市大採買', 'Lago di Braies (布萊埃斯湖翡翠倒影)', 'Dobbiaco 小鎮漫步', '入住 Chalet del Capriolo', '木屋現代廚房自煮晚餐'],
    todayRoute: [
      'Hotel Santner 退房',
      '自駕翻越 Passo Gardena (海拔 2,136m)',
      'Passo Gardena 山口觀景台喝咖啡拍照',
      '自駕前往 Brunico / San Lorenzo',
      'INTERSPAR 大型旗艦超市採買 3 天自煮食材',
      'Brunico 老城輕食午餐',
      '自駕前往布萊埃斯湖 (Lago di Braies)',
      'Lago di Braies 木造船屋與環湖漫步',
      'Dobbiaco (多比亞科) 山谷小鎮中繼漫步',
      '自駕前往 Vodo Cadore',
      '入住 Chalet del Capriolo (3 晚連住)',
      '木屋公寓自煮牛排晚宴 ＆ 洗烘衣物'
    ],
    drivingRoute: {
      from: 'Hotel Santner (休斯高原)',
      to: 'Passo Gardena ➜ Brunico ➜ Lago di Braies ➜ Dobbiaco ➜ Vodo Cadore',
      distance: '約 140 km (總行程)',
      duration: '約 3 小時總車程',
      parkingSpot: 'Passo Gardena 山口觀景停車場；INTERSPAR Brunico 大型免費停車場；Lago di Braies: P3/P4 湖畔專屬收費停車場；Chalet del Capriolo 專屬私人免費停車場 (免預約)',
      routeNote: '翻越 Passo Gardena 山口彎道多且坡度較大，自駕時請降入低速檔善用引擎煞車。10 月份布萊埃斯湖夏季交通管制多已結束，車輛可直接通行至湖畔停車場。'
    },
    importantAlerts: [
      {
        title: '🏨 Chalet del Capriolo 入住時間與押金重要規定',
        type: 'warning',
        content: 'Chalet del Capriolo 嚴格規定入住時間為 16:00～19:00（退房時間為 08:00～09:00）。入住時需以信用卡支付 EUR 200 損壞押金（退房後 7 天內經檢查無損全額原卡退款）。預訂代號：5916.383.549，主要住客：CHEN CHIUNG HUA。'
      },
      {
        title: '🥩 週末超市採買注意',
        type: 'shopping',
        content: '義大利週日許多大型超市縮短營業或休業。今日週六特地安排前往 Brunico 最大旗艦店 INTERSPAR，請備齊未來 3 天在木屋公寓自煮所需的牛排、生鮮蔬菜、義大利麵、蛋奶起司與葡萄酒！'
      }
    ],
    timeline: [
      {
        time: '08:30',
        type: 'accommodation',
        title: '🏨 Hotel Santner 早餐 ＆ 退房出發',
        badge: '告別休斯高原',
        description: '享用完最後一次高山早餐，辦理退房手續，所有行李妥善安置於車輛後行李廂。',
        duration: '1 小時',
        address: 'Via Joch 6, 39040 Alpe di Siusi, Italy',
        phone: '+39 0471 727913'
      },
      {
        time: '09:30',
        type: 'transport',
        title: '🚗 自駕翻越：Passo Gardena (加爾狄納山口，海拔 2,136m)',
        badge: '經典多洛米蒂 Sella 群峰景觀公路',
        description: '駕車穿過 Selva di Val Gardena，沿著盤旋山路爬升至著名的加爾狄納山口。左側是峭拔的 Cir 群峰，右側是宏偉的 Sella 巨岩台地，視野無比遼闊。',
        duration: '約 1 小時',
        address: 'Passo Gardena, 39048 Selva di Val Gardena BZ, Italy',
        mapQuery: 'Passo Gardena Viewpoint',
        parkingInfo: '山口大型觀景停車場 (短停約 €2)'
      },
      {
        time: '10:30',
        type: 'activity',
        title: '📷 Passo Gardena 山口全景觀景台賞景 ＆ 咖啡小歇',
        badge: '海拔 2,136m 頂點 · 俯瞰科瓦拉山谷',
        description: '在山口觀景平台深呼吸純淨的高山空氣，欣賞如同月球表面般的巨大白色石灰岩岩壁，在小木屋喝一杯暖身熱 Espresso。',
        duration: '建議停留 40 分鐘',
        address: 'Passo Gardena 2136m, Italy',
        mapQuery: 'Passo Gardena Viewpoint'
      },
      {
        time: '11:15',
        type: 'transport',
        title: '🚗 自駕前往南蒂羅爾門戶大城：Brunico / San Lorenzo',
        badge: '經 Corvara 與 Val Badia · 車程約 50 分鐘',
        description: '由山口下坡穿過風景如畫的 Corvara 小鎮，沿著 SS244 公路一路北上抵達南蒂羅爾東部繁華重鎮 Brunico。',
        duration: '約 50 分鐘',
        address: 'Via Bastioni 22, 39031 Brunico BZ, Italy',
        mapQuery: 'Interspar Brunico'
      },
      {
        time: '12:05',
        type: 'shopping',
        title: '🛒 INTERSPAR Brunico / San Lorenzo 大型旗艦超市食材大採買',
        badge: '南蒂羅爾頂級生鮮旗艦店 · 採買 3 天食材',
        description: '在設備極其完善的 INTERSPAR 採購：義大利頂級熟成牛排、松露奶油、新鮮莫札瑞拉起司、帕瑪火腿、自製義大利麵、蔬菜沙拉與特選南蒂羅爾 Alto Adige DOC 紅白葡萄酒。',
        duration: '建議採買 1 小時',
        address: 'Via Bastioni 22, 39031 Brunico BZ, Italy',
        mapQuery: 'Interspar Brunico',
        openingHours: '08:00–19:30 (週六營業，週日公休)',
        phone: '+39 0474 553011',
        parkingInfo: '超市地下與平面大型免費停車場 (消費顧客專屬)'
      },
      {
        time: '14:00',
        type: 'transport',
        title: '🚗 自駕前往：布萊埃斯湖 (Lago di Braies)',
        badge: '車程約 30 分鐘 · 28 km',
        description: '自 Brunico 出發，沿 SS49 公路東行轉入 Braies 山谷直達湖畔停車場。',
        duration: '約 30 分鐘',
        address: 'Lago di Braies, 39030 Braies BZ, Italy',
        mapQuery: 'Lago di Braies Parking P3',
        parkingInfo: 'P3 / P4 湖邊大型收費停車場 (約 €10～12/次)'
      },
      {
        time: '14:30',
        type: 'activity',
        title: '📷 Lago di Braies (布萊埃斯湖)：著名木造船屋與環湖漫步',
        badge: '多洛米蒂綠寶石 · 翡翠倒影',
        description: '踏入這座被高聳白色石灰岩群峰環抱的高山湖泊。古老木造船屋與停泊在湖畔的木划船倒映在翠綠透明的水面上，寧靜典雅至極；順時針沿著湖畔步道緩步漫步。',
        duration: '建議停留 1.5 小時',
        address: 'Lago di Braies, 39030 Braies BZ, Italy',
        mapQuery: 'Lago di Braies Braies',
        ticketPrice: '湖區步道免費參觀'
      },
      {
        time: '16:00',
        type: 'activity',
        title: '🚶 Dobbiaco (多比亞科) 山谷小鎮中繼漫步',
        badge: '普斯特里亞山谷重鎮 · 阿爾卑斯山居風情',
        description: '前往 Vodo Cadore 途經 Dobbiaco 小鎮，短暫停留感受高山木造建築與馬勒音樂小鎮的悠閒氛圍。',
        duration: '停留約 30 分鐘',
        address: 'Dobbiaco / Toblach, 39034 BZ, Italy',
        mapQuery: 'Dobbiaco Toblach'
      },
      {
        time: '16:45',
        type: 'transport',
        title: '🚗 自駕前往 Vodo Cadore (多洛米蒂東側木屋)',
        badge: '行經 Cortina · 車程約 1 小時',
        description: '沿 SS51 景觀公路一路南下，穿過著名冬奧名城 Cortina d\'Ampezzo，抵達南側安寧祥和的阿爾卑斯小鎮 Vodo Cadore。',
        duration: '約 1 小時',
        address: '108 Via Nazionale, 32040 Vodo Cadore BL, Italy',
        mapQuery: 'Chalet del Capriolo 108 Via Nazionale Vodo Cadore'
      },
      {
        time: '17:45',
        type: 'accommodation',
        title: '🏨 入住：Chalet del Capriolo (3 晚連住)',
        badge: '頂樓原木景觀公寓 · 專屬私人停車 · 廚房洗烘齊全',
        description: '抵達位於 Vodo Cadore 的頂樓景觀木屋公寓。公寓附設全套現代化廚房、洗碗機、烤箱、免治馬桶、洗衣機與獨立烘衣機。Booking.com 確認碼：5916.383.549。',
        duration: '辦理入住與安頓裝備',
        address: '108 Via Nazionale, 32040 Vodo Cadore, Italy',
        mapQuery: 'Chalet del Capriolo 108 Via Nazionale Vodo Cadore',
        openingHours: '入住時間：16:00–19:00 / 退房時間：08:00–09:00',
        phone: '+39 0435 489207',
        parkingInfo: '公寓專屬私人免費停車位，免預約',
        ticketPrice: '總金額 EUR 856.20 (已含清潔費與城市稅)；信用卡支付 EUR 200 損壞押金',
        actionLabel: '住宿詳情',
        actionRoute: '/accommodation'
      }
    ]
  },

  // ==========================================
  // DAY 7: 2026/10/04 (SUN) ｜ CORTINA D'AMPEZZO
  // ==========================================
  {
    dayNum: 7,
    date: '2026/10/04',
    dateDisplay: '10/04 (日)',
    month: '10',
    day: '04',
    weekday: '星期日 / SUN',
    cityRegion: 'Cortina d\'Ampezzo',
    themeTitle: '冬奧名城巡禮 ➜ Corso Italia 步行街 ➜ 百年百貨 La Cooperativa ➜ 逛街午餐咖啡',
    hotelName: 'Chalet del Capriolo',
    hotelRoomType: '頂樓原木景觀公寓 · 續住第 2 晚',
    hotelAddress: '108 Via Nazionale, 32040 Vodo Cadore, Italy',
    hotelNote: 'Booking.com 確認碼：5916.383.549 · 專屬免費私人停車位',
    region: 'italy',
    highlights: ['Cortina d\'Ampezzo 冬奧名城', 'Corso Italia 精品步行街', 'La Cooperativa di Cortina (百年歷史名店百貨)', '歷史主教堂鐘樓', '老城人氣披薩午餐', 'Pasticceria Alverà 甜點下午茶', '木屋放鬆晚宴'],
    todayRoute: [
      'Chalet del Capriolo 早餐',
      '自駕前往 Cortina d\'Ampezzo (約 16 km)',
      'Parcheggio Cortina 停車',
      'Cortina 老城漫步',
      'Corso Italia 精品步行街',
      'La Cooperativa di Cortina (百年百貨購物)',
      'Cortina 老城人氣義大利料理午餐',
      'Basilica dei Santi Filippo e Giacomo (歷史主教堂)',
      'Pasticceria Alverà 手工甜點下午茶',
      '自駕返回 Vodo Cadore',
      'Chalet del Capriolo 休息放鬆自煮'
    ],
    drivingRoute: {
      from: 'Vodo Cadore (Chalet del Capriolo)',
      to: 'Cortina d\'Ampezzo (往返)',
      distance: '約 16 km (單程) · 來回約 32 km',
      duration: '約 20 分鐘單程',
      parkingSpot: 'Parcheggio Cortina / Parcheggio Funivia Faloria (約 €2/小時)',
      routeNote: '沿 SS51 國道行駛路況良好平順。Cortina 鎮中心 Corso Italia 為全線步行專用區，嚴禁車輛駛入，請停放在外圍專屬停車場。'
    },
    importantAlerts: [
      {
        title: '🚶 Cortina 老城步行街禁止車輛駛入',
        type: 'traffic',
        content: 'Corso Italia 核心街區嚴格禁止所有車輛進入，請直接停放於外圍 Parcheggio 停車場，切勿跟隨舊導航駛入徒步步行街。'
      }
    ],
    timeline: [
      {
        time: '10:00',
        type: 'transport',
        title: '🚗 自駕前往：Cortina d\'Ampezzo (科爾蒂納)',
        badge: '車程約 20 分鐘 · 16 km',
        description: '沿 SS51 國道向北行駛，進入被群山環抱的 2026 冬奧主辦城 Cortina。將車停入鎮中心外圍專用停車場。',
        duration: '約 20 分鐘',
        address: 'Cortina d\'Ampezzo, 32043 BL, Italy',
        mapQuery: 'Parcheggio Cortina d\'Ampezzo',
        parkingInfo: 'Parcheggio Cortina / Parcheggio Funivia Faloria (約 €2/小時)'
      },
      {
        time: '10:30',
        type: 'activity',
        title: '🛍️ Cortina 老城 ＆ Corso Italia 步行街漫步',
        badge: '阿爾卑斯時尚名城 · 名品木雕街',
        description: 'Cortina 最熱鬧的核心步行街，精品名店、傳統木雕藝品店與珠寶櫥窗林立，身後聳立著 Cristallo 群峰壯麗雪山背景。',
        duration: '建議停留 1.5 小時',
        address: 'Corso Italia, 32043 Cortina d\'Ampezzo BL, Italy',
        mapQuery: 'Corso Italia Cortina d\'Ampezzo',
        ticketPrice: '徒步區自由參觀'
      },
      {
        time: '11:45',
        type: 'shopping',
        title: '🏬 La Cooperativa di Cortina (百年名店百貨)',
        badge: '百年歷史名店百貨 · 高山選品 · 戶外品牌',
        description: '創立於 1893 年的百年老牌百貨公司，集結義大利奢華羊絨、頂級登山戶外裝備、南蒂羅爾手工藝品與生鮮超市，是逛街購物必訪之處。',
        duration: '建議逛街 1 小時',
        address: 'Corso Italia 40, 32043 Cortina d\'Ampezzo BL, Italy',
        mapQuery: 'La Cooperativa di Cortina',
        openingHours: '09:00–19:30'
      },
      {
        time: '16:30',
        type: 'transport',
        title: '🚗 自駕返回：Cortina ➜ Vodo Cadore',
        badge: '車程約 20 分鐘 · 16 km',
        description: '沿 SS51 國道返回 Vodo Cadore，將車輛停入專屬停車位。',
        duration: '約 20 分鐘',
        address: '108 Via Nazionale, 32040 Vodo Cadore BL, Italy'
      },
      {
        time: '17:00',
        type: 'accommodation',
        title: '🏨 返回 Chalet del Capriolo 休息放鬆',
        badge: '木屋休息時光',
        description: '回到溫暖木屋公寓休息放鬆，整理健行裝備，準備明日的三峰山（Tre Cime di Lavaredo）壯麗健行。',
        duration: '晚間休息',
        address: '108 Via Nazionale, 32040 Vodo Cadore, Italy'
      }
    ]
  },

  // ==========================================
  // DAY 8: 2026/10/05 (MON) ｜ TRE CIME ＋ LAGO DI MISURINA
  // ==========================================
  {
    dayNum: 8,
    date: '2026/10/05',
    dateDisplay: '10/05 (一)',
    month: '10',
    day: '05',
    weekday: '星期一 / MON',
    cityRegion: 'Tre Cime di Lavaredo ＆ Lago di Misurina',
    themeTitle: '三峰山世界自然遺產 ＋ 米蘇里納湖',
    hotelName: 'Chalet del Capriolo',
    hotelRoomType: '頂樓原木景觀公寓 · 續住第 3 晚 (義大利最後一夜)',
    hotelAddress: '108 Via Nazionale, 32040 Vodo Cadore, Italy',
    hotelNote: 'Booking.com 確認碼：5916.383.549 · 明日 08:00 退房前往 Trieste 還車',
    region: 'italy',
    highlights: ['三峰山 (Tre Cime di Lavaredo)', 'Lago di Misurina (米蘇里納湖)', 'Chalet del Capriolo 住宿'],
    todayRoute: [
      '自駕前往三峰山 (Rifugio Auronzo 停車場)',
      '三峰山 (Tre Cime di Lavaredo)',
      '自駕前往 Lago di Misurina (米蘇里納湖)',
      '米蘇里納湖 (Lago di Misurina)',
      '自駕返回 Vodo Cadore (Chalet del Capriolo)'
    ],
    drivingRoute: {
      from: 'Vodo Cadore (Chalet del Capriolo)',
      to: 'Tre Cime di Lavaredo (Rifugio Auronzo 停車場) ➜ Lago di Misurina ➜ Vodo Cadore',
      distance: '約 42 km (去程) ＋ 10 km ＋ 38 km (回程)',
      duration: '約 50 分鐘 (單程去程)',
      parkingSpot: 'Rifugio Auronzo 三峰山專屬高山收費停車場 (約 €30)；Lago di Misurina 湖畔收費停車場',
      routeNote: '通往 Auronzo 停車場的收費公路車位有限，為避免遇車流管制封閉，建議上午 08:30 前通過山下收費站！'
    },
    importantAlerts: [
      {
        title: '🏔️ 三峰山收費路管制重要守則',
        type: 'traffic',
        content: '由 Misurina 上山的收費公路（約 €30/車）一旦山頂停車場飽和，收費站將立即封閉閘門禁止車輛上行。請務必依時間表於清晨 07:45 準時出發！'
      },
      {
        title: '🧳 明日跨國前往克羅埃西亞整備提醒',
        type: 'warning',
        content: '今晚為義大利段最後一夜！明日需於 08:00–08:30 完成退房出發，經由 A27 高速自駕前往 Trieste Hertz 提前還車，銜接 12:20 FlixBus N544 跨國巴士前往克羅埃西亞 Zagreb！'
      }
    ],
    timeline: [
      {
        time: '07:45',
        type: 'transport',
        title: '🚗 自駕出發：Vodo Cadore ➜ 三峰山 (Rifugio Auronzo)',
        badge: '車程約 50 分鐘 · 約 42 km',
        description: '清晨自駕出發，經 Misurina 湖畔三峰山收費站，購票進入盤山收費公路直達 Auronzo 停車場。',
        duration: '約 50 分鐘',
        address: 'Rifugio Auronzo, 32041 Auronzo di Cadore BL, Italy',
        mapQuery: 'Rifugio Auronzo Tre Cime di Lavaredo',
        ticketPrice: '景觀收費公路通行與停車費約 €30/小客車',
        parkingInfo: 'Rifugio Auronzo 海拔 2,320m 專屬大型收費停車場'
      },
      {
        time: '08:45',
        type: 'activity',
        title: '🏔️ 三峰山 (Tre Cime di Lavaredo)',
        badge: '世界自然遺產 · 多洛米蒂地標',
        description: '由 Auronzo 停車場出發之經典環狀健行步道（約 9.5 km），直面三座垂直巍峨之石灰岩尖峰，飽覽磅礡世界自然遺產全貌。',
        duration: '約 3.5～4.5 小時',
        address: 'Tre Cime di Lavaredo, Italy',
        mapQuery: 'Tre Cime di Lavaredo Auronzo di Cadore'
      },
      {
        time: '14:30',
        type: 'transport',
        title: '🚗 自駕前往：三峰山 ➜ Lago di Misurina (米蘇里納湖)',
        badge: '車程約 15 分鐘 · 約 10 km',
        description: '駕車平穩下山前往米蘇里納湖畔。',
        duration: '約 15 分鐘',
        address: 'Lago di Misurina, 32041 Auronzo di Cadore BL, Italy',
        mapQuery: 'Lago di Misurina Auronzo di Cadore',
        parkingInfo: '湖畔專屬收費停車場 (約 €2/小時)'
      },
      {
        time: '14:45',
        type: 'activity',
        title: '🌊 米蘇里納湖 (Lago di Misurina)',
        badge: '多洛米蒂高山湖泊 · 湖光倒影',
        description: '坐落於三峰山山腳下的高山湖泊，水面清澈，倒映 Lavaredo 群峰壯麗景致。',
        duration: '停留約 1 小時',
        address: 'Lago di Misurina, 32041 Misurina BL, Italy',
        mapQuery: 'Lago di Misurina Auronzo di Cadore'
      },
      {
        time: '16:30',
        type: 'transport',
        title: '🚗 自駕返回：米蘇里納湖 ➜ Vodo Cadore (Chalet del Capriolo)',
        badge: '車程約 40 分鐘 · 約 38 km',
        description: '駕車返回 Vodo Cadore 木屋公寓休息。',
        duration: '約 40 分鐘',
        address: '108 Via Nazionale, 32040 Vodo Cadore BL, Italy',
        mapQuery: 'Chalet del Capriolo 108 Via Nazionale Vodo Cadore'
      },
      {
        time: '17:30',
        type: 'accommodation',
        title: '🏨 返回 Chalet del Capriolo',
        badge: '續住第 3 晚 (義大利最後一夜)',
        description: '返回木屋公寓休息，整理明日跨國行李。明日 08:00 退房前往 Trieste 還車。',
        duration: '晚間休息',
        address: '108 Via Nazionale, 32040 Vodo Cadore, Italy',
        phone: '+39 0435 489207',
        mapQuery: 'Chalet del Capriolo 108 Via Nazionale Vodo Cadore'
      }
    ]
  }
];
