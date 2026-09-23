import { CROATIA_ITINERARY_DAYS } from './croatiaItinerary';
import { DayItinerary, TimelineNode } from './itineraryTypes';

export type CategoryType = 'traffic' | 'spot' | 'food' | 'hotel' | 'alert';

export interface ItineraryItem {
  id: string;
  category: CategoryType;
  order?: number; // 先後順序編號 (1, 2, 3...)，表示那個先去
  time?: string;
  name: string;
  shortInfo?: string;
  hasDetail: boolean;
  detail?: {
    subtitle?: string;
    imageUrl?: string;
    categoryBadge?: string;
    hours?: string;
    ticket?: string;
    duration?: string;
    address?: string;
    phone?: string;
    recommendedDishes?: string;
    closedDays?: string;
    reservation?: string;
    reservationUrl?: string;
    parking?: string;
    bookingCode?: string;
    price?: string;
    description?: string;
    notice?: string;
    mapQuery?: string;
  };
}

export interface DayTwoLayer {
  dayNum: number;
  dateKey: string;     // e.g. "9/28"
  weekday: string;     // e.g. "一"
  city: string;        // e.g. "Limone"
  subRoute: string;    // e.g. "米蘭機場 ➜ Limone｜住 Aria Life Hotel"
  orderedItems: ItineraryItem[]; // 當日依造訪先後順序排列之完整項目 (編號 1, 2, 3...)
  trafficItems: ItineraryItem[];
  spotItems: ItineraryItem[];
  foodItems: ItineraryItem[];
  hotelItems: ItineraryItem[];
  alertItems: ItineraryItem[];
}

export type RawDayTwoLayer = Omit<DayTwoLayer, 'orderedItems'>;

const ITALY_TWO_LAYER_DAYS: RawDayTwoLayer[] = [
  // ==========================================
  // 9/28 (一) ｜ Limone
  // ==========================================
  {
    dayNum: 1,
    dateKey: '9/28',
    weekday: '一',
    city: 'Limone',
    subRoute: '米蘭機場 ➜ Limone｜住 Aria Life Hotel',
    trafficItems: [
      {
        id: '928-t1',
        category: 'traffic',
        time: '07:35',
        name: '抵達 MXP (米蘭馬爾彭薩 T1)',
        shortInfo: '長榮航空 BR95',
        hasDetail: true,
        detail: {
          subtitle: '長榮航空 BR95 航班抵達 · 第一航廈',
          hours: '預計抵達 07:35',
          ticket: '已開票 (旅客：春香、小許、麗安)',
          address: 'Malpensa Airport Terminal 1, Ferno VA, Italy',
          description: '搭乘長榮 BR95 抵達 MXP T1。領完托運行李後，依指標搭乘手扶梯或電梯下至 Floor -1 (地下一樓) 租車專區辦理取車手續。',
          mapQuery: 'Aeroporto di Milano-Malpensa Terminal 1'
        }
      },
      {
        id: '928-t2',
        category: 'traffic',
        time: '09:30',
        name: 'Hertz 取車',
        shortInfo: 'MXP T1 Floor -1 租車中心',
        hasDetail: true,
        detail: {
          subtitle: 'Hertz 自駕車輛提領 · 合約號 L661E7E0321',
          hours: '取車時間 09:30',
          bookingCode: 'L661E7E0321',
          address: 'Malpensa Airport Terminal 1, Floor -1, Italy',
          phone: '+39 02 5858 1081',
          description: '抵達 Floor -1 Hertz 櫃檯辦理手續。必備文件：主駕駛人護照、台灣駕照正本、國際駕照、同名國際信用卡。取車時請繞車一周錄影檢查外觀及滿油狀態。',
          notice: '義大利高速公路需開啟車燈；導航至 Aria Life Hotel 請避開 Limone 徒步區。',
          mapQuery: 'Hertz Malpensa Airport Terminal 1'
        }
      },
      {
        id: '928-t3',
        category: 'traffic',
        time: '10:15',
        name: '前往 Limone',
        shortInfo: '約 190 km｜約 2.5 小時',
        hasDetail: true,
        detail: {
          subtitle: '自駕路線：米蘭機場 ➜ 加爾達湖 Limone',
          duration: '約 190 km (約 2 小時 15 分～2.5 小時)',
          description: '自 MXP 走 A4 高速公路東行，經 Brescia 東轉 SS45bis 湖濱公路北上。湖區隧道密集，依法規需全程開啟大燈。A4 過路費約 €14～16（支援感應信用卡或現金）。',
          parking: '直達 Aria Life Hotel 免費私人停車場 (免預約)',
          mapQuery: 'Aria Life Hotel Limone sul Garda'
        }
      }
    ],
    spotItems: [
      {
        id: '928-s1',
        category: 'spot',
        time: '15:30',
        name: '舊港口／碼頭 (Porto Vecchio)',
        shortInfo: '湖畔石板路 · 彩色木船',
        hasDetail: true,
        detail: {
          subtitle: '加爾達湖歷史舊港口與湖岸步道',
          duration: '停留約 45 分鐘',
          address: 'Lungolago Marconi, 25010 Limone sul Garda BS, Italy',
          description: '從飯店漫步至加爾達湖畔。欣賞停泊水畔的彩色木船、岸邊檸檬圖騰陶磚，感受加爾達湖北部的微風與悠閒度假氛圍。',
          notice: '老城石板路有起伏與階梯，建議穿著好走平底鞋。',
          mapQuery: 'Porto Vecchio Limone sul Garda'
        }
      },
      {
        id: '928-s2',
        category: 'spot',
        time: '16:15',
        name: 'Limonaia del Castèl',
        shortInfo: '歷史梯田檸檬園景觀溫室',
        hasDetail: true,
        detail: {
          subtitle: '18 世紀古老梯田檸檬園與湖景制高點',
          hours: '10:00–18:00 (每日開放)',
          ticket: '成人約 €2～3 (現場購票，可刷卡/現金)',
          duration: '建議停留 1 小時',
          address: 'Via Orti, 25010 Limone sul Garda BS, Italy',
          phone: '+39 0365 954720',
          description: '依陡峭山崖修築的多層梯田檸檬溫室。園內引水道精密，種滿黃澄澄檸檬與柑橘，頂層平台可俯瞰整座 Limone 小鎮紅瓦屋頂與加爾達湖全景。',
          mapQuery: 'Limonaia del Castel Limone sul Garda'
        }
      }
    ],
    foodItems: [],
    hotelItems: [
      {
        id: '928-h1',
        category: 'hotel',
        name: 'Aria Life Hotel',
        shortInfo: '9/28–9/30 · 2晚連住｜含早餐 · 免費停車',
        hasDetail: true,
        detail: {
          subtitle: 'Suite 小型套房 · 加爾達湖景觀露台與泳池',
          hours: '入住 14:00–22:00 / 退房 10:30 前 (早餐 07:30–10:30)',
          address: 'Via Einaudi 4, 25010 Limone sul Garda, Italy',
          phone: '+39 0365 189 6773',
          parking: '飯店專屬室內/室外私人停車場，免費且不需預約',
          price: '房費已包含每日豐盛義式自助早餐',
          description: '座落於山腰景觀區，享有開闊湖景露台與室外泳池。步行至老城區約 8–10 分鐘。',
          mapQuery: 'Aria Life Hotel Limone sul Garda'
        }
      }
    ],
    alertItems: [
      {
        id: '928-a1',
        category: 'alert',
        name: 'Limone 老城 ZTL 徒步禁行區',
        shortInfo: '請直接導航至飯店停車，切勿駛入石板步道',
        hasDetail: true,
        detail: {
          subtitle: 'ZTL 限行區注意 · 全日嚴格拍照管制',
          description: 'Limone sul Garda 老城核心區為全日行人徒步區 (ZTL)。Aria Life Hotel 位於山腰專用公路，請直接將導航設為飯店地址，切勿開入老街石板窄巷以免受罰。',
          mapQuery: 'Aria Life Hotel Limone sul Garda'
        }
      }
    ]
  },

  // ==========================================
  // 9/29 (二) ｜ Malcesine
  // ==========================================
  {
    dayNum: 2,
    dateKey: '9/29',
    weekday: '二',
    city: 'Malcesine',
    subRoute: '跨湖渡輪 ➜ 巴爾多山旋轉纜車 ➜ 斯卡利傑城堡｜住 Aria Life Hotel',
    trafficItems: [
      {
        id: '929-t1',
        category: 'traffic',
        time: '11:00',
        name: '加爾達湖渡輪跨湖',
        shortInfo: 'Limone ➜ Malcesine｜航程約 20 分鐘',
        hasDetail: true,
        detail: {
          subtitle: '橫渡加爾達湖水心巡航',
          hours: '08:00–19:30 (每 30–60 分鐘一班)',
          ticket: '往返船票約 €9～12/成人 (碼頭售票亭隨到隨買)',
          address: 'Porto di Limone, Lungolago Marconi, Limone sul Garda',
          description: '由 Limone 碼頭登船橫渡加爾達湖最壯闊湖段。從湖面上回望 Limone 的陡峭岩壁與檸檬梯田，迎向對岸矗立水畔的 Malcesine 古堡。',
          mapQuery: 'Porto di Limone sul Garda'
        }
      },
      {
        id: '929-t2',
        category: 'traffic',
        time: '11:45',
        name: '巴爾多山 360° 旋轉纜車',
        shortInfo: '直上海拔 1,760m 阿爾卑斯觀景台',
        hasDetail: true,
        detail: {
          subtitle: 'Funivia Malcesine-Monte Baldo 全景旋轉吊廂',
          hours: '08:00–18:45 (末班下山纜車約 19:00)',
          ticket: '往返票約 €25～27/成人 (支援現場刷卡)',
          phone: '+39 045 740 0206',
          address: 'Via Navene Vecchia 10, 37018 Malcesine VR, Italy',
          description: '從 Malcesine 搭乘兩段纜車登頂。第二段為世界首創 360 度自轉全景吊廂，全方位無死角俯瞰整個加爾達湖長條壯闊水域與連綿山脈。',
          notice: '山頂海拔高風勢大，氣溫比湖面低約 8～10°C，務必帶防風保暖外套。',
          mapQuery: 'Funivia Malcesine Monte Baldo'
        }
      },
      {
        id: '929-t3',
        category: 'traffic',
        time: '17:00',
        name: '渡輪返回 Limone',
        shortInfo: 'Malcesine ➜ Limone｜航程約 20 分鐘',
        hasDetail: true,
        detail: {
          subtitle: '搭乘跨湖渡輪返程',
          address: 'Porto di Malcesine, 37018 Malcesine VR, Italy',
          description: '於 Malcesine 碼頭憑往返票搭船返回 Limone。夕陽斜射下的湖面金光粼粼。',
          mapQuery: 'Porto di Malcesine'
        }
      }
    ],
    spotItems: [
      {
        id: '929-s1',
        category: 'spot',
        time: '09:15',
        name: 'Ciclopedonale del Garda',
        shortInfo: '加爾達湖懸空單車水上木棧道',
        hasDetail: true,
        detail: {
          subtitle: '全球最美懸空步道 · 依傍垂直石灰岩壁',
          hours: '全天免費開放',
          duration: '停留約 1.5 小時 (全長約 2.5 km)',
          address: 'SS45bis, 25010 Limone sul Garda BS, Italy',
          parking: 'Parcheggio Capo Reamol (收費停車場，車位有限建議早到)',
          description: '被譽為歐洲最震撼的水上懸空木棧道。棧道鋼構固定於垂直石灰岩壁上，腳下即是深邃透明的碧綠湖水，視野無比開闊。',
          mapQuery: 'Ciclopedonale del Garda Limone sul Garda'
        }
      },
      {
        id: '929-s2',
        category: 'spot',
        time: '12:15',
        name: 'Monte Baldo 高山草甸全景散步',
        shortInfo: '海拔 1,760m · 俯瞰整座加爾達湖',
        hasDetail: true,
        detail: {
          subtitle: '阿爾卑斯空中陽台與高山牧場',
          duration: '散步約 1 小時',
          description: '山頂為開闊的阿爾卑斯高山草甸，常有放牧牛群與滑翔翼起飛。沿著步道漫步，俯瞰如藍寶石般的加爾達湖全貌。',
          mapQuery: 'Monte Baldo Malcesine'
        }
      },
      {
        id: '929-s3',
        category: 'spot',
        time: '15:15',
        name: 'Castello Scaligero (斯卡利傑城堡)',
        shortInfo: '湖畔中世紀古堡 · 登頂全景',
        hasDetail: true,
        detail: {
          subtitle: 'Malcesine 歷史水岸城堡地標',
          hours: '09:30–18:30',
          ticket: '成人約 €6',
          duration: '停留約 1 小時',
          address: 'Via Castello, 37018 Malcesine VR, Italy',
          description: '矗立在加爾達湖岬角上的中世紀城堡，歌德曾在此駐足素描。登上最高塔樓可將古城紅瓦與蔚藍湖水盡收眼底。',
          mapQuery: 'Castello Scaligero Malcesine'
        }
      }
    ],
    foodItems: [],
    hotelItems: [
      {
        id: '929-h1',
        category: 'hotel',
        name: 'Aria Life Hotel',
        shortInfo: '續住第 2 晚｜含早餐 · 免費停車',
        hasDetail: true,
        detail: {
          subtitle: 'Suite 小型套房 · 明日準備啟程前往多洛米蒂',
          address: 'Via Einaudi 4, 25010 Limone sul Garda, Italy',
          phone: '+39 0365 189 6773',
          description: '在陽台享受加爾達湖微風，收拾隨身行李，準備明日啟程前往多洛米蒂核心：休斯高原 (Alpe di Siusi)。',
          mapQuery: 'Aria Life Hotel Limone sul Garda'
        }
      }
    ],
    alertItems: [
      {
        id: '929-a1',
        category: 'alert',
        name: '巴爾多山頂低溫強風注意',
        shortInfo: '山頂氣溫低約 8～10°C，請備妥防風保暖外套',
        hasDetail: true,
        detail: {
          subtitle: '海拔 1,760m 高山氣候提醒',
          description: 'Monte Baldo 山頂海拔高風勢強勁，若遇瞬間強風纜車可能短暫減班，請隨身攜帶防風外套與圍巾。',
          mapQuery: 'Funivia Malcesine Monte Baldo'
        }
      }
    ]
  },

  // ==========================================
  // 9/30 (三) ｜ Bolzano → Hotel Santner
  // ==========================================
  {
    dayNum: 3,
    dateKey: '9/30',
    weekday: '三',
    city: 'Bolzano → Hotel Santner',
    subRoute: 'Limone 退房 ➜ Bolzano ➜ WaltherPark ➜ 主教座堂 ➜ Piazza Walther ➜ Via dei Portici ➜ Piazza delle Erbe ➜ Esselunga ➜ 加油 ➜ Hotel Santner｜住 Hotel Santner',
    trafficItems: [
      {
        id: '930-t1',
        category: 'traffic',
        time: '09:00',
        name: 'Limone 退房 ＆ 自駕前往 Bolzano',
        shortInfo: '約 120 km｜車程約 1 小時 45 分',
        hasDetail: true,
        detail: {
          subtitle: '自駕北上南蒂羅爾山谷首府',
          duration: '約 120 km (約 1 小時 45 分)',
          description: '自 Aria Life Hotel 退房後，沿 SS45bis 繞過湖泊最北端 Riva del Garda，由 Rovereto 轉入 A22 布倫納高速公路一路北上直達 Bolzano。過路費約 €8～10。',
          parking: '導航直達 WaltherPark 地下停車場 (避開 ZTL)',
          mapQuery: 'Parking WaltherPark Bolzano'
        }
      },
      {
        id: '930-t2',
        category: 'traffic',
        time: '11:00',
        name: 'WaltherPark 停車',
        shortInfo: '現代化地下停車場 (避開 ZTL)',
        hasDetail: true,
        detail: {
          subtitle: '波札諾市中心智慧地下停車場',
          address: 'Via Stazione 1, 39100 Bolzano BZ, Italy',
          description: '車輛直接停入 WaltherPark 地下停車場，搭乘電梯上至地面步行 3 分鐘即達瓦爾特廣場與主教座堂，安全避開老城拍照 ZTL。',
          mapQuery: 'Parking WaltherPark Bolzano'
        }
      },
      {
        id: '930-t3',
        category: 'traffic',
        time: '14:00',
        name: 'Esselunga 超市採買補給',
        shortInfo: '波札諾大型超市 · 水果零食乾糧補給',
        hasDetail: true,
        detail: {
          subtitle: '上休斯高原前的大型生鮮超市',
          duration: '約 30 分鐘',
          address: 'Via Galileo Galilei 20, 39100 Bolzano BZ, Italy',
          description: '在進入高山自然保護區前，前往 Esselunga 大型超市採買隨身高山健行水果、堅果零食、礦泉水與隨身飲料。',
          mapQuery: 'Esselunga Bolzano'
        }
      },
      {
        id: '930-t4',
        category: 'traffic',
        time: '14:45',
        name: '自駕加油',
        shortInfo: '上山前加滿油箱 (ENI / Q8 加油站)',
        hasDetail: true,
        detail: {
          subtitle: '休斯高原山路行駛前油料補滿',
          description: '在出波札諾市區或前往 Castelrotto 途中加油站將油箱加滿，確保高山行程油料充裕。',
          mapQuery: 'Gas Station Bolzano'
        }
      },
      {
        id: '930-t5',
        category: 'traffic',
        time: '15:15',
        name: '開車前往休斯高原 Hotel Santner',
        shortInfo: '約 35 km｜盤山路約 50 分鐘',
        hasDetail: true,
        detail: {
          subtitle: '盤山公路進入休斯高原自然保護區',
          duration: '約 35 km (約 50 分鐘)',
          description: '經 Castelrotto 上山。休斯高原每日 09:00–17:00 管制外來車輛，但已預訂 Hotel Santner，飯店已通報車號，出示訂房單即可在管制閘門通行直達地下車庫！',
          parking: 'Hotel Santner 免費地下車庫',
          mapQuery: 'Hotel Santner Alpine Sport & Relax Alpe di Siusi'
        }
      }
    ],
    spotItems: [
      {
        id: '930-s1',
        category: 'spot',
        time: '11:45',
        name: 'Piazza Walther (瓦爾特廣場)',
        shortInfo: '南蒂羅爾核心客廳 · 瓦爾特雕像',
        hasDetail: true,
        detail: {
          subtitle: '融合德義風情的波札諾歷史心臟',
          duration: '停留約 30 分鐘',
          address: 'Piazza Walther, 39100 Bolzano BZ, Italy',
          description: '廣場佇立著中世紀德語詩人瓦爾特（Walther von der Vogelweide）大理石雕像，氣氛悠閒典雅。',
          mapQuery: 'Piazza Walther Bolzano'
        }
      }
    ],
    foodItems: [],
    hotelItems: [
      {
        id: '930-h1',
        category: 'hotel',
        name: 'Hotel Santner Alpine Sport & Relax',
        shortInfo: '9/30–10/3 · 3晚連住｜一泊二食 (HB) · 附車輛許可',
        hasDetail: true,
        detail: {
          subtitle: '雙人景觀房 2 間 · 休斯高原核心保護區',
          hours: '入住 14:00 起 / 退房 11:00 前',
          phone: '+39 0471 727913',
          address: 'Via Joch 6, 39040 Alpe di Siusi, Italy',
          parking: '專屬免費地下車庫，附住客專用通行許可證',
          price: '房費包含每日自助早餐與五道式主廚晚宴 (HB)',
          description: '座落於歐洲最大高山草原休斯高原中央，門前即是健行步道系統，享有施盧恩峰無敵壯闊景致。',
          mapQuery: 'Hotel Santner Alpine Sport & Relax Alpe di Siusi'
        }
      }
    ],
    alertItems: [
      {
        id: '930-a1',
        category: 'alert',
        name: 'Bolzano 市中心電子拍照 ZTL',
        shortInfo: '請務必直接設定停車場為「Parking WaltherPark」',
        hasDetail: true,
        detail: {
          subtitle: '波札諾老城嚴格電子拍照限行區',
          description: 'Bolzano 市區老城為 ZTL 禁區。導航請直接輸入 Parking WaltherPark，切勿駛入老城街道以免被拍照處高額罰單。',
          mapQuery: 'Parking WaltherPark Bolzano'
        }
      },
      {
        id: '930-a2',
        category: 'alert',
        name: '休斯高原保護區車輛通行證',
        shortInfo: '向山下管制閘門出示 Hotel Santner 訂房確認信通行',
        hasDetail: true,
        detail: {
          subtitle: 'Alpe di Siusi 09:00–17:00 車輛管制說明',
          description: '休斯高原為自然保護區，日間禁止外車駛入。因已預訂 Hotel Santner，飯店已通報車號，閘門警衛查驗訂房確認單後即可放行直達飯店地下車庫。',
          mapQuery: 'Hotel Santner Alpine Sport & Relax Alpe di Siusi'
        }
      }
    ]
  },

  // ==========================================
  // 10/1 (四) ｜ Alpe di Siusi 休斯高原
  // ==========================================
  {
    dayNum: 4,
    dateKey: '10/1',
    weekday: '四',
    city: 'Alpe di Siusi 休斯高原',
    subRoute: 'Hotel Santner ➜ 休斯高原輕鬆健行 ➜ 30號步道 / Hans & Paula Steger Trail ➜ Panorama / Mont Piz ➜ 山屋 ➜ Hotel Santner｜住 Hotel Santner',
    trafficItems: [
      {
        id: '101-t1',
        category: 'traffic',
        name: '今日全日不需開車！',
        shortInfo: '車輛全程停放於 Hotel Santner 免費地下車庫',
        hasDetail: true,
        detail: {
          subtitle: '休斯高原徒步健行日',
          duration: '0 km 自駕',
          description: '飯店門口即是休斯高原核心步道系統交會點，全天輕鬆徒步健行，完全不需挪動車輛。',
          mapQuery: 'Hotel Santner Alpine Sport & Relax Alpe di Siusi'
        }
      }
    ],
    spotItems: [
      {
        id: '101-s1',
        category: 'spot',
        time: '09:30',
        name: '30號步道 / Hans & Paula Steger Trail',
        shortInfo: '歐洲最大高山草原 · 仙境牧場畫卷',
        hasDetail: true,
        detail: {
          subtitle: '平緩起伏的阿爾卑斯綠毯與古老木穀倉',
          duration: '健行約 2 小時 (難度低，平緩好走)',
          ticket: '全線免費開放',
          address: 'Compatsch, 39040 Alpe di Siusi BZ, Italy',
          description: '自飯店出發沿 30 號步道（Hans & Paula Steger Trail），兩側盡是翠綠起伏的高山牧草地、放牧牛鈴與阿爾卑斯古老木造穀倉。遠方施盧恩峰（Schlern）如巨大石壁屏障矗立眼前。',
          mapQuery: 'Hans and Paula Steger Trail Alpe di Siusi'
        }
      },
      {
        id: '101-s2',
        category: 'spot',
        time: '14:00',
        name: 'Panorama / Mont Piz 全景步道',
        shortInfo: '360° 多洛米蒂群山 · 直面 Sassolungo 巨石',
        hasDetail: true,
        detail: {
          subtitle: '明信片級全景草甸環狀步道',
          duration: '步行約 1.5 小時',
          description: '沿起伏平緩的 Panorama / Mont Piz 全景步道悠閒漫步。空氣甘洌，牛鈴清脆，可盡情拍攝如畫的草原山屋與多洛米蒂雪峰壯景。',
          mapQuery: 'Panorama Alpe di Siusi'
        }
      }
    ],
    foodItems: [],
    hotelItems: [
      {
        id: '101-h1',
        category: 'hotel',
        name: 'Hotel Santner Alpine Sport & Relax',
        shortInfo: '續住第 2 晚｜一泊二食 (HB)',
        hasDetail: true,
        detail: {
          subtitle: '雙人景觀房 2 間 · 靜謐草原之夜',
          address: 'Via Joch 6, 39040 Alpe di Siusi, Italy',
          phone: '+39 0471 727913',
          mapQuery: 'Hotel Santner Alpine Sport & Relax Alpe di Siusi'
        }
      }
    ],
    alertItems: [
      {
        id: '101-a1',
        category: 'alert',
        name: '高原健行裝備提醒',
        shortInfo: '海拔約 2,000m，備防風外套、健行鞋與防曬',
        hasDetail: true,
        detail: {
          subtitle: '高山健行安全與防曬注意',
          description: '休斯高原海拔約 1,850m～2,050m，紫外線強烈且山區天候變化快。出發請著防滑健行鞋，備防風保暖外套、遮陽帽與太陽眼鏡。'
        }
      }
    ]
  },

  // ==========================================
  // 10/2 (五) ｜ Seceda＋Ortisei
  // ==========================================
  {
    dayNum: 5,
    dateKey: '10/2',
    weekday: '五',
    city: 'Seceda＋Ortisei',
    subRoute: 'Hotel Santner ➜ Ortisei ➜ Seceda 纜車 ➜ Furnes ➜ Seceda ➜ Pieralongia ➜ 原路返回 ➜ Ortisei ➜ Hotel Santner｜住 Hotel Santner',
    trafficItems: [
      {
        id: '102-t1',
        category: 'traffic',
        time: '08:45',
        name: '自駕前往 Ortisei (奧蒂塞伊)',
        shortInfo: '約 25 km｜車程約 35 分鐘',
        hasDetail: true,
        detail: {
          subtitle: '開車下山前往 Seceda 纜車站',
          duration: '約 25 km (約 35 分鐘)',
          description: '開車下山穿過山谷抵達 Val Gardena 名鎮 Ortisei，直達 Seceda 纜車站地下專屬停車場。',
          parking: 'Parcheggio Seceda 大型地下停車場 (約 €2.5/小時)',
          mapQuery: 'Parcheggio Seceda Ortisei'
        }
      },
      {
        id: '102-t2',
        category: 'traffic',
        time: '09:30',
        name: 'Seceda 纜車登頂 (經 Furnes 中繼站)',
        shortInfo: 'Ortisei ➜ Furnes ➜ Seceda (海拔 2,518m)',
        hasDetail: true,
        detail: {
          subtitle: 'Funivie Seceda 登上世界級斜切絕壁',
          hours: '08:30–17:30',
          ticket: '往返約 €39.50/人',
          phone: '+39 0471 796531',
          address: 'Via Val d\'Anna 2, 39046 Ortisei BZ, Italy',
          description: '由 Ortisei 搭乘兩段全景纜車：第一段為小箱型纜車抵達中繼站 Furnes，第二段換乘大型全景吊箱纜車直達海拔 2,518m 刀鋒山頂觀景台。',
          mapQuery: 'Funivie Seceda Ortisei'
        }
      },
      {
        id: '102-t3',
        category: 'traffic',
        time: '15:00',
        name: '原路搭乘纜車返回 Ortisei',
        shortInfo: 'Seceda ➜ Furnes ➜ Ortisei 纜車站',
        hasDetail: true,
        detail: {
          subtitle: '原路纜車下山至 Ortisei 小鎮',
          duration: '約 25 分鐘',
          description: '結束 Seceda 健行後，由山頂搭乘纜車經 Furnes 原路返回 Ortisei 纜車站地面。',
          mapQuery: 'Funivie Seceda Ortisei'
        }
      },
      {
        id: '102-t4',
        category: 'traffic',
        time: '17:30',
        name: '自駕返回 Hotel Santner',
        shortInfo: '約 25 km｜車程約 35 分鐘',
        hasDetail: true,
        detail: {
          subtitle: '返回休斯高原飯店地下車庫',
          duration: '約 25 km (約 35 分鐘)',
          parking: 'Hotel Santner 免費地下車庫',
          mapQuery: 'Hotel Santner Alpine Sport & Relax Alpe di Siusi'
        }
      }
    ],
    spotItems: [
      {
        id: '102-s1',
        category: 'spot',
        time: '10:00',
        name: 'Seceda 刀鋒山斜切絕壁觀景健行',
        shortInfo: '國家地理經典畫面 · 海拔 2,518m 絕壁',
        hasDetail: true,
        detail: {
          subtitle: '如同巨斧斜削般垂直拔起的巨石奇觀',
          duration: '健行停留約 2 小時',
          description: '多洛米蒂最標誌性的封面絕景！綠色如絲絨的高山草坡瞬間切斷，轉為深不見底的垂直落差絕壁，氣勢恢宏無比。',
          mapQuery: 'Seceda Viewpoint Ortisei'
        }
      },
      {
        id: '102-s2',
        category: 'spot',
        time: '13:00',
        name: 'Pieralongia 巨石木屋漫步',
        shortInfo: '雙尖石塔巨岩 · 傳統木屋手作輕食',
        hasDetail: true,
        detail: {
          subtitle: '平緩草地步道漫步約 30 分鐘抵達',
          duration: '停留約 45 分鐘',
          address: 'Pieralongia, 39046 Ortisei BZ, Italy',
          description: '兩根直插雲霄的雙尖巨石矗立在綠茵草地上，小木屋販售牧場新鮮手作酸奶與輕食。欣賞完畢後原路漫步返回纜車站。',
          mapQuery: 'Baita Pieralongia Seceda'
        }
      }
    ],
    foodItems: [],
    hotelItems: [
      {
        id: '102-h1',
        category: 'hotel',
        name: 'Hotel Santner Alpine Sport & Relax',
        shortInfo: '續住第 3 晚｜一泊二食 (HB)',
        hasDetail: true,
        detail: {
          subtitle: '雙人景觀房 2 間 · 明日準備啟程前往布萊埃斯湖與木屋',
          address: 'Via Joch 6, 39040 Alpe di Siusi, Italy',
          phone: '+39 0471 727913',
          mapQuery: 'Hotel Santner Alpine Sport & Relax Alpe di Siusi'
        }
      }
    ],
    alertItems: [
      {
        id: '102-a1',
        category: 'alert',
        name: 'Seceda 末班纜車下山時間',
        shortInfo: '末班下山纜車通常為 17:30，請務必提早原路返回',
        hasDetail: true,
        detail: {
          subtitle: '纜車營運時間提醒',
          description: 'Seceda 纜車山頂末班回程通常為 17:30。自 Pieralongia 步行回纜車站約需 30–40 分鐘，請掌握時間避免錯過班次。'
        }
      },
      {
        id: '102-a2',
        category: 'alert',
        name: '刀鋒山脊高山防風防滑注意',
        shortInfo: '海拔超過 2,500m 風大氣溫低，請著防滑健行鞋與防風外套',
        hasDetail: true,
        detail: {
          subtitle: '高山懸崖安全注意',
          description: 'Seceda 山頂山脊步道旁即為垂直斷崖，請切勿跨越防護欄或站立於土石邊緣拍照。風勢強勁，務必戴好防風保暖衣物。'
        }
      }
    ]
  },

  // ==========================================
  // 10/3 (六) ｜ Lago di Braies
  // ==========================================
  {
    dayNum: 6,
    dateKey: '10/3',
    weekday: '六',
    city: 'Lago di Braies',
    subRoute: 'Hotel Santner 退房 ➜ Brunico / San Lorenzo ➜ INTERSPAR 補給 ➜ Lago di Braies 布萊埃斯湖 ➜ Dobbiaco ➜ Vodo Cadore ➜ Chalet del Capriolo｜住 Chalet del Capriolo',
    trafficItems: [
      {
        id: '103-t1',
        category: 'traffic',
        time: '09:00',
        name: 'Hotel Santner 退房 ＆ 翻越 Passo Gardena',
        shortInfo: '加爾狄納山口 (海拔 2,136m) · 景觀公路',
        hasDetail: true,
        detail: {
          subtitle: 'Sella 群峰景觀公路翻越山口',
          duration: '約 1 小時 (盤山景觀路)',
          description: '自 Hotel Santner 退房，駕車穿過 Selva di Val Gardena 爬升至著名的加爾狄納山口。左側 Cir 群峰、右側 Sella 巨岩台地，視野無比開闊。',
          parking: 'Passo Gardena 山口大型觀景停車場 (約 €2)',
          mapQuery: 'Passo Gardena Viewpoint'
        }
      },
      {
        id: '103-t2',
        category: 'traffic',
        time: '11:15',
        name: '自駕前往 Brunico / San Lorenzo (INTERSPAR 補給)',
        shortInfo: '經 Val Badia 抵達南蒂羅爾門戶 · 車程約 50 分鐘',
        hasDetail: true,
        detail: {
          subtitle: '南蒂羅爾生鮮旗艦超市採買',
          duration: '約 45 km (約 50 分鐘)',
          parking: 'INTERSPAR Brunico 大型免費停車場',
          mapQuery: 'Interspar Brunico'
        }
      },
      {
        id: '103-t3',
        category: 'traffic',
        time: '14:15',
        name: '自駕前往布萊埃斯湖 (Lago di Braies)',
        shortInfo: '約 28 km · 車程約 30 分鐘',
        hasDetail: true,
        detail: {
          subtitle: '前往多洛米蒂綠寶石仙境湖泊',
          duration: '約 28 km (約 30 分鐘)',
          parking: 'P3 / P4 湖邊大型收費停車場 (約 €10～12/次)',
          description: '沿 SS49 景觀公路轉入 Braies 山谷直達湖畔停車場。10 月份夏季管制多已解除，車輛可直接駛入。',
          mapQuery: 'Lago di Braies Parking P3'
        }
      },
      {
        id: '103-t4',
        category: 'traffic',
        time: '16:30',
        name: '自駕經 Dobbiaco 前往 Vodo Cadore',
        shortInfo: '約 50 km · 車程約 1 小時 10 分',
        hasDetail: true,
        detail: {
          subtitle: '經 Dobbiaco 與 Cortina 南下前往木屋公寓',
          duration: '約 50 km (約 1 小時 10 分)',
          parking: 'Chalet del Capriolo 專屬私人免費停車位 (免預約)',
          mapQuery: 'Chalet del Capriolo 108 Via Nazionale Vodo Cadore'
        }
      }
    ],
    spotItems: [
      {
        id: '103-s1',
        category: 'spot',
        time: '10:15',
        name: 'Passo Gardena 山口觀景台',
        shortInfo: '海拔 2,136m 頂點 · 俯瞰山谷喝熱咖啡',
        hasDetail: true,
        detail: {
          subtitle: '阿爾卑斯頂點全景觀景台',
          duration: '停留約 40 分鐘',
          description: '在山口觀景平台深呼吸純淨的高山空氣，欣賞如同月球表面般的巨大白色石灰岩岩壁，在小木屋喝一杯熱 Espresso。',
          mapQuery: 'Passo Gardena Viewpoint'
        }
      },
      {
        id: '103-s2',
        category: 'spot',
        time: '12:00',
        name: 'INTERSPAR Brunico / San Lorenzo 補給採買',
        shortInfo: '生鮮旗艦店 · 採買 3 天木屋自煮食材',
        hasDetail: true,
        detail: {
          subtitle: '南蒂羅爾頂級生鮮旗艦超市',
          hours: '08:00–19:30 (週六營業，週日休業)',
          phone: '+39 0474 553011',
          address: 'Via Bastioni 22, 39031 Brunico BZ, Italy',
          description: '採買未來 3 天在木屋自煮所需的頂級熟成牛排、新鮮莫札瑞拉起司、帕瑪火腿、義大利麵、沙拉與 Alto Adige DOC 紅白葡萄酒。生鮮可請店員真空包裝。',
          mapQuery: 'Interspar Brunico'
        }
      },
      {
        id: '103-s3',
        category: 'spot',
        time: '14:45',
        name: 'Lago di Braies (布萊埃斯湖)',
        shortInfo: '翡翠湖光倒影 ＆ 著名木造船屋漫步',
        hasDetail: true,
        detail: {
          subtitle: '多洛米蒂最著名的仙境之湖',
          duration: '湖畔漫步約 1.5 小時',
          ticket: '步道免費開放',
          address: 'Lago di Braies, 39030 Braies BZ, Italy',
          description: '被巍峨石灰岩群峰環抱的翡翠色高山湖泊。古老木造船屋與停泊在湖畔的一艘艘木划船倒映在翠綠湖水上，寧靜典雅至極。',
          mapQuery: 'Lago di Braies Braies'
        }
      }
    ],
    foodItems: [],
    hotelItems: [
      {
        id: '103-h1',
        category: 'hotel',
        name: 'Chalet del Capriolo',
        shortInfo: '10/3–10/6 · 3晚連住｜頂樓原木公寓 · 廚房洗烘全齊',
        hasDetail: true,
        detail: {
          subtitle: '頂樓原木景觀公寓 (Penthouse Apartment · 3位成人)',
          hours: '入住時間：16:00–19:00 / 退房時間：08:00–09:00',
          phone: '+39 0435 489207',
          address: '108 Via Nazionale, 32040 Vodo Cadore, Italy',
          bookingCode: 'Booking.com: 5916.383.549 (住客：CHEN CHIUNG HUA)',
          parking: '公寓專屬私人免費停車位 (免預約)',
          price: 'EUR 856.20 (已含清潔費與城市稅)；信用卡支付 EUR 200 損壞押金',
          description: '附設全套現代化廚房（烤箱、洗碗機）、免治馬桶、洗衣機與獨立烘衣機。請注意嚴格入住時間 16:00–19:00。',
          mapQuery: 'Chalet del Capriolo 108 Via Nazionale Vodo Cadore'
        }
      }
    ],
    alertItems: [
      {
        id: '103-a1',
        category: 'alert',
        name: 'Chalet 嚴格入住時間 (16:00–19:00)',
        shortInfo: '需信用卡刷 EUR 200 押金 (退房 7 天後無損原卡退回)',
        hasDetail: true,
        detail: {
          subtitle: '公寓接待處入住規定',
          description: 'Chalet del Capriolo 規定入住接待時間為 16:00–19:00。請備妥主要住客信用卡刷 EUR 200 押金，並攜帶護照登記。'
        }
      },
      {
        id: '103-a2',
        category: 'alert',
        name: '週末超市採買注意',
        shortInfo: '義大利週日許多大型超市休業，今日在 Brunico 買齊 3 天份食材',
        hasDetail: true,
        detail: {
          subtitle: '週日超市公休提醒',
          description: '義大利週日多數大型超市縮短或休業。今日週六特地安排 INTERSPAR 旗艦店，請備齊牛排、蔬菜、蛋奶與紅酒。'
        }
      }
    ]
  },

  // ==========================================
  // 10/4 (日) ｜ Cortina d'Ampezzo
  // ==========================================
  {
    dayNum: 7,
    dateKey: '10/4',
    weekday: '日',
    city: 'Cortina d\'Ampezzo',
    subRoute: 'Chalet del Capriolo ➜ Cortina d\'Ampezzo ➜ 老城 ➜ La Cooperativa di Cortina ➜ 逛街／午餐／咖啡 ➜ 返回 Vodo Cadore｜住 Chalet del Capriolo',
    trafficItems: [
      {
        id: '104-t1',
        category: 'traffic',
        time: '10:00',
        name: '自駕前往 Cortina d\'Ampezzo',
        shortInfo: '約 16 km｜車程約 20 分鐘',
        hasDetail: true,
        detail: {
          subtitle: '沿 SS51 景觀公路前往冬奧名城',
          duration: '約 16 km (約 20 分鐘)',
          parking: 'Parcheggio Cortina / Parcheggio Funivia Faloria (約 €2/小時)',
          description: '駕車向北穿行山谷，進入被群山環抱的 2026 冬奧主辦城 Cortina。將車停入鎮中心外圍專用停車場。',
          mapQuery: 'Parcheggio Cortina d\'Ampezzo'
        }
      },
      {
        id: '104-t2',
        category: 'traffic',
        time: '16:30',
        name: '自駕返回 Vodo Cadore',
        shortInfo: '約 16 km｜車程約 20 分鐘',
        hasDetail: true,
        detail: {
          subtitle: '返回木屋公寓',
          mapQuery: 'Chalet del Capriolo 108 Via Nazionale Vodo Cadore'
        }
      }
    ],
    spotItems: [
      {
        id: '104-s1',
        category: 'spot',
        time: '10:30',
        name: 'Cortina 老城 ＆ Corso Italia 步行街漫步',
        shortInfo: 'Cortina 標誌性石板街 · 名品與木雕店',
        hasDetail: true,
        detail: {
          subtitle: '阿爾卑斯時尚名城核心步行區',
          duration: '停留約 1.5 小時',
          address: 'Corso Italia, 32043 Cortina d\'Ampezzo BL, Italy',
          description: 'Cortina 最熱鬧的核心步行街，精品名店、傳統木雕藝品店與珠寶櫥窗林立，身後聳立著 Cristallo 群峰壯麗雪山背景。',
          mapQuery: 'Corso Italia Cortina d\'Ampezzo'
        }
      },
      {
        id: '104-s2',
        category: 'spot',
        time: '11:45',
        name: 'La Cooperativa di Cortina (百年名店百貨)',
        shortInfo: '百年歷史名店百貨 · 高山選品 · 戶外品牌 · 地下超市',
        hasDetail: true,
        detail: {
          subtitle: 'Cortina 最具代表性的綜合購物商場',
          hours: '09:00–19:30',
          address: 'Corso Italia 40, 32043 Cortina d\'Ampezzo BL, Italy',
          description: '創立於 1893 年的百年老牌百貨公司，集結義大利奢華羊絨、頂級登山戶外裝備、南蒂羅爾手工藝品與生鮮超市，是逛街購物必訪之處。',
          mapQuery: 'La Cooperativa di Cortina'
        }
      }
    ],
    foodItems: [],
    hotelItems: [
      {
        id: '104-h1',
        category: 'hotel',
        name: 'Chalet del Capriolo',
        shortInfo: '續住第 2 晚｜頂樓原木景觀公寓',
        hasDetail: true,
        detail: {
          subtitle: '頂樓原木景觀公寓 · 專屬私人停車',
          address: '108 Via Nazionale, 32040 Vodo Cadore, Italy',
          phone: '+39 0435 489207',
          mapQuery: 'Chalet del Capriolo 108 Via Nazionale Vodo Cadore'
        }
      }
    ],
    alertItems: [
      {
        id: '104-a1',
        category: 'alert',
        name: 'Cortina 老城步行街禁止車輛駛入',
        shortInfo: 'Corso Italia 為徒步區，請停放於鎮中心外圍專用停車場',
        hasDetail: true,
        detail: {
          subtitle: 'Cortina 行人專用區管制',
          description: 'Corso Italia 核心街區嚴格禁止所有車輛進入，請直接停放於外圍 Parcheggio 停車場，切勿跟隨舊導航駛入徒步步行街。'
        }
      }
    ]
  },

  // ==========================================
  // 10/5 (一) ｜ Tre Cime＋Lago di Misurina
  // ==========================================
  {
    dayNum: 8,
    dateKey: '10/5',
    weekday: '一',
    city: 'Tre Cime di Lavaredo ＆ Lago di Misurina',
    subRoute: 'Vodo Cadore ➜ 三峰山 (Tre Cime di Lavaredo) ➜ 米蘇里納湖 (Lago di Misurina) ➜ 返回 Vodo Cadore｜住 Chalet del Capriolo',
    trafficItems: [
      {
        id: '105-t1',
        category: 'traffic',
        time: '07:45',
        name: '自駕出發：Vodo Cadore ➜ 三峰山 (Auronzo 停車場)',
        shortInfo: '約 42 km｜車程約 50 分鐘 · 經 Misurina 收費站',
        hasDetail: true,
        detail: {
          subtitle: '清晨出發直達海拔 2,320m Auronzo 停車場',
          duration: '約 42 km (約 50 分鐘)',
          ticket: '景觀收費公路通行與停車費約 €30/小客車',
          parking: 'Rifugio Auronzo 海拔 2,320m 專屬大型收費停車場',
          description: '清晨自駕出發，抵達 Misurina 湖畔收費站購票進入盤山收費公路，直達三峰山大健行起點 Auronzo 停車場。',
          mapQuery: 'Rifugio Auronzo Tre Cime di Lavaredo'
        }
      },
      {
        id: '105-t2',
        category: 'traffic',
        time: '14:30',
        name: '自駕前往：三峰山 ➜ 米蘇里納湖 (Lago di Misurina)',
        shortInfo: '約 10 km｜車程約 15 分鐘',
        hasDetail: true,
        detail: {
          subtitle: '下山前往米蘇里納湖',
          duration: '約 10 km (約 15 分鐘)',
          parking: '湖畔專屬收費停車場 (約 €2/小時)',
          mapQuery: 'Lago di Misurina Auronzo di Cadore'
        }
      },
      {
        id: '105-t3',
        category: 'traffic',
        time: '16:30',
        name: '自駕返回：米蘇里納湖 ➜ Vodo Cadore (Chalet del Capriolo)',
        shortInfo: '約 38 km｜車程約 40 分鐘',
        hasDetail: true,
        detail: {
          subtitle: '返回木屋公寓休息',
          duration: '約 38 km (約 40 分鐘)',
          mapQuery: 'Chalet del Capriolo 108 Via Nazionale Vodo Cadore'
        }
      }
    ],
    spotItems: [
      {
        id: '105-s1',
        category: 'spot',
        time: '08:45',
        name: '三峰山 (Tre Cime di Lavaredo)',
        shortInfo: '多洛米蒂地標三尖峰 · 世界自然遺產經典環狀健行',
        hasDetail: true,
        detail: {
          subtitle: '經典環狀步道 (全程約 9.5 km)',
          duration: '步行約 3.5～4.5 小時',
          description: '由 Auronzo 停車場出發，直面三座垂直巍峨之石灰岩尖峰巨壁，飽覽多洛米蒂最具代表性之磅礡世界自然遺產全景。',
          mapQuery: 'Tre Cime di Lavaredo Auronzo di Cadore'
        }
      },
      {
        id: '105-s2',
        category: 'spot',
        time: '14:45',
        name: '米蘇里納湖 (Lago di Misurina)',
        shortInfo: '多洛米蒂高山湖泊 · 湖光山色倒影',
        hasDetail: true,
        detail: {
          subtitle: '米蘇里納高山湖泊景觀',
          duration: '停留約 1 小時',
          address: 'Lago di Misurina, 32041 Auronzo di Cadore BL, Italy',
          description: '坐落於三峰山山腳下的清澈高山湖泊，水面映照雄偉群峰倒影。',
          mapQuery: 'Lago di Misurina Auronzo di Cadore'
        }
      }
    ],
    foodItems: [],
    hotelItems: [
      {
        id: '105-h1',
        category: 'hotel',
        name: 'Chalet del Capriolo',
        shortInfo: '續住第 3 晚 (義大利最後一夜)｜明日 08:00 退房',
        hasDetail: true,
        detail: {
          subtitle: '頂樓原木景觀公寓 · 專屬私人停車',
          address: '108 Via Nazionale, 32040 Vodo Cadore, Italy',
          phone: '+39 0435 489207',
          description: '續住第 3 晚。明日 08:00–08:30 退房，經 A27 高速自駕前往 Trieste Hertz 還車，銜接 12:20 FlixBus 跨國巴士前往克羅埃西亞 Zagreb。',
          mapQuery: 'Chalet del Capriolo 108 Via Nazionale Vodo Cadore'
        }
      }
    ],
    alertItems: [
      {
        id: '105-a1',
        category: 'alert',
        name: '三峰山收費公路管制守則',
        shortInfo: '山頂車位有限一旦飽和將封閉，務必 07:45 出發、08:30 前通過收費站！',
        hasDetail: true,
        detail: {
          subtitle: '三峰山景觀公路通行守則',
          description: '由 Misurina 上山的收費公路（約 €30/車）一旦山頂停車場飽和，收費站將立即封閉閘門禁止車輛上行。請務必於 07:45 準時出發！'
        }
      },
      {
        id: '105-a2',
        category: 'alert',
        name: '明日跨國前往克羅埃西亞整備',
        shortInfo: '明日 08:00 退房出發，11:15 前至 Trieste Hertz 還車，銜接 12:20 跨國巴士',
        hasDetail: true,
        detail: {
          subtitle: '10/06 跨國交通銜接注意',
          description: '明日需於 08:00–08:30 完成退房，經 A27 高速自駕前往 Trieste 還車（需滿油），步行至巴士總站搭乘 12:20 FlixBus N544 前往克羅埃西亞 Zagreb 與另外 2 位夥伴全員會合！'
        }
      }
    ]
  }
];

// ==========================================
// Day 0: 9/27 (日) ｜ 台北 ✈ 米蘭 出發日
// ==========================================
export const DAY_0: RawDayTwoLayer = {
  dayNum: 0,
  dateKey: '9/27',
  weekday: '日',
  city: '台北 ✈ 米蘭',
  subRoute: '桃園機場 T2 ➜ 長榮航空 BR95 直飛米蘭 MXP',
  trafficItems: [
    {
      id: '927-t1',
      category: 'traffic',
      time: '20:30',
      name: '抵達桃園機場 T2 長榮櫃檯報到',
      shortInfo: '班機 BR95 (23:45 起飛)，預先報到與托運行李',
      hasDetail: true,
      detail: {
        subtitle: '桃園國際機場第二航廈 (TPE T2)',
        description: '提早 3 小時抵達機場長榮航空櫃檯辦理托運行李與領取登機證。檢查護照有效期 6 個月以上與申根免簽資格。',
        notice: '班機出發時間 23:45，登機門預計 23:05 開放登機，請提早完成安檢'
      }
    },
    {
      id: '927-t2',
      category: 'traffic',
      time: '23:45',
      name: '長榮航空 BR95 直飛米蘭 (MXP T1)',
      shortInfo: '直飛 13h 50m，預計明日 09/28 07:35 抵達米蘭',
      hasDetail: true,
      detail: {
        subtitle: '長榮航空 EVA AIR BR95 (波音 777-300ER)',
        description: '23:45 由桃園機場 T2 起飛，直飛義大利米蘭馬爾彭薩機場 (MXP T1)。機上提供兩次正餐與各類飲料點心，飛行時間約 13 小時 50 分。',
        hours: '23:45 (TPE) ➜ 07:35+1 (MXP)'
      }
    }
  ],
  spotItems: [],
  foodItems: [],
  hotelItems: [
    {
      id: '927-h1',
      category: 'hotel',
      name: '長榮班機夜航（機上休息）',
      shortInfo: '直飛米蘭，明日清晨抵達',
      hasDetail: false
    }
  ],
  alertItems: [
    {
      id: '927-a1',
      category: 'alert',
      name: '出境與入境義大利重要提醒',
      shortInfo: '確認護照、國際駕照本、歐洲網卡及保險單',
      hasDetail: true,
      detail: {
        subtitle: '重要文件清點',
        notice: '護照效期需在離開申根區後仍有 3 個月以上；確認隨身攜帶國際駕照與台灣駕照正本；確認歐洲 eSIM 已安裝完畢，降落開機即可聯網。'
      }
    }
  ]
};

// ==========================================
// 10/6 (二) ｜ Trieste (還車) ➜ Zagreb (巴士跨國)
// ==========================================
export const DAY_9: RawDayTwoLayer = {
  dayNum: 9,
  dateKey: '10/6',
  weekday: '二',
  city: 'Trieste ➜ Zagreb',
  subRoute: 'Chalet del Capriolo ➜ 自駕前往 Trieste ➜ Hertz 還車 ➜ FlixBus 跨國巴士 ➜ 抵達 Zagreb｜住 MANDA Heritage Hotel',
  trafficItems: [
    {
      id: '106-t1',
      category: 'traffic',
      time: '08:30',
      name: '自駕移動：Vodo Cadore ➜ Trieste (第里雅斯特)',
      shortInfo: '約 185 km｜車程約 2 小時 20 分 · 經 A27 / A4 高速',
      hasDetail: true,
      detail: {
        subtitle: '告別多洛米蒂，前往義大利東北海港',
        duration: '約 185 km (約 2 小時 20 分)',
        description: '由 Chalet del Capriolo 退房，經 A27 / A4 高速公路自駕直達 Trieste。',
        mapQuery: 'Trieste Piazza della Liberta'
      }
    },
    {
      id: '106-t2',
      category: 'traffic',
      time: '10:45',
      name: 'Trieste 市區前加滿油箱 (滿油還車政策)',
      shortInfo: '滿油還車整備',
      hasDetail: true,
      detail: {
        subtitle: '進城前加滿油箱',
        description: '於進城前將油箱加滿以符合租車滿油還車規定。',
        mapQuery: 'Gas Station Trieste Miramare'
      }
    },
    {
      id: '106-t3',
      category: 'traffic',
      time: '11:15',
      name: 'Hertz Trieste 提前還車 (銜接 12:20 跨國巴士)',
      shortInfo: 'Piazza della Libertà 9 / Via Valdirivo 42',
      hasDetail: true,
      detail: {
        subtitle: '提前於 11:15 完成還車手續，安心銜接巴士',
        address: 'Via Valdirivo 42, 34132 Trieste TS, Italy',
        phone: '+39 040 370420',
        description: '在 Piazza della Libertà 9 巴士總站旁 Hertz 專用車道辦理還車手續。完成車輛檢查後步行 3 分鐘即達 Trieste 巴士總站。',
        mapQuery: 'Hertz Trieste Via Valdirivo'
      }
    },
    {
      id: '106-t4',
      category: 'traffic',
      time: '12:20',
      name: 'FlixBus N544 跨國巴士：Trieste ➜ Zagreb',
      shortInfo: '12:20 出發 ➜ 15:50 抵達 Zagreb 總站｜車票確認號：338 494 7118',
      hasDetail: true,
      detail: {
        subtitle: '跨國長途冷氣巴士 (約 3 小時 30 分)',
        hours: '12:20–15:50',
        ticket: '3 人車票確認號: 338 494 7118',
        address: 'Autobusni Kolodvor Zagreb, Avenija Marina Držića 4, 10000 Zagreb, Croatia',
        description: '12:20 從 Trieste 準時發車，舒適跨越斯洛維尼亞邊界，15:50 準時抵達克羅埃西亞首都 Zagreb 巴士總站。',
        mapQuery: 'Autobusni Kolodvor Zagreb'
      }
    }
  ],
  spotItems: [],
  foodItems: [],
  hotelItems: [
    {
      id: '106-h1',
      category: 'hotel',
      name: 'MANDA Heritage Hotel (Zagreb)',
      shortInfo: '全員 5 人大會合！｜含早餐 · 2間套房',
      hasDetail: true,
      detail: {
        subtitle: 'Two-Bedroom Suite (4人) ＋ One-Bedroom Suite (1人) · 含早餐',
        address: 'Vlaška ulica 88, 10000 Zagreb, Croatia',
        phone: '+385 1 4875 555',
        description: '入住札格雷布下城區典雅歷史精品飯店，頭家娘與小花抵達大會合！Agoda 訂單：#1765100933、#1765102246。',
        mapQuery: 'Manda Heritage Hotel Zagreb'
      }
    }
  ],
  alertItems: [
    {
      id: '106-a1',
      category: 'alert',
      name: 'FlixBus 跨國巴士發車時間嚴格確認',
      shortInfo: '12:20 準時發車，請備妥申根護照及車票 QR Code',
      hasDetail: true,
      detail: {
        subtitle: 'FlixBus N544 跨國乘車確認',
        notice: 'FlixBus N544 於 12:20 準時由 Trieste 發車（確認號：338 494 7118）。請務必隨身攜帶有效護照，提早於月台候車。'
      }
    }
  ]
};

// 將克羅埃西亞行程 (Day 9 ~ 26) 動態轉換為二層式結構
const CROATIA_TWO_LAYER_DAYS: RawDayTwoLayer[] = CROATIA_ITINERARY_DAYS.map((d: DayItinerary) => {
  const trafficItems: ItineraryItem[] = [];
  const spotItems: ItineraryItem[] = [];
  const foodItems: ItineraryItem[] = [];
  const hotelItems: ItineraryItem[] = [];
  const alertItems: ItineraryItem[] = [];

  if (d.importantAlerts && d.importantAlerts.length > 0) {
    d.importantAlerts.forEach((alert, aIdx) => {
      alertItems.push({
        id: `d${d.dayNum}-alert-${aIdx}`,
        category: 'alert',
        name: alert.title.replace(/^[^\w\u4e00-\u9fa5]+/u, '').trim() || alert.title,
        shortInfo: '重要提醒／預約注意',
        hasDetail: true,
        detail: {
          subtitle: alert.title,
          description: alert.content,
          notice: alert.content
        }
      });
    });
  }

  d.timeline.forEach((node: TimelineNode, idx: number) => {
    let cat: CategoryType = 'spot';
    if (['transport', 'gas', 'walk', 'ferry', 'cablecar'].includes(node.type)) {
      cat = 'traffic';
    } else if (node.type === 'food') {
      cat = 'food';
    } else if (node.type === 'accommodation') {
      cat = 'hotel';
    } else if (node.type === 'warning' || node.type === 'parking') {
      cat = 'alert';
    } else {
      cat = 'spot';
    }

    const cleanTitle = node.title.replace(/^[^\w\u4e00-\u9fa5\(\)（）]+/u, '').trim();

    const item: ItineraryItem = {
      id: `d${d.dayNum}-item-${idx}`,
      category: cat,
      time: node.time,
      name: cleanTitle || node.title,
      shortInfo: node.badge || (node.restaurantCard?.recommendedDishes ? `推薦：${node.restaurantCard.recommendedDishes}` : undefined) || node.duration,
      hasDetail: true,
      detail: {
        subtitle: node.badge || node.title,
        hours: node.openingHours || node.restaurantCard?.businessHours,
        ticket: node.ticketPrice,
        duration: node.duration,
        address: node.address || node.restaurantCard?.address,
        phone: node.phone || node.restaurantCard?.phone,
        recommendedDishes: node.restaurantCard?.recommendedDishes,
        closedDays: node.restaurantCard?.closedDays,
        reservation: node.restaurantCard?.reservationInfo,
        reservationUrl: node.restaurantCard?.reservationUrl,
        parking: node.parkingInfo,
        description: node.description,
        notice: node.importantNotice,
        mapQuery: node.mapQuery || node.restaurantCard?.googleMapsQuery
      }
    };

    if (cat === 'traffic') trafficItems.push(item);
    else if (cat === 'spot') spotItems.push(item);
    else if (cat === 'food') foodItems.push(item);
    else if (cat === 'hotel') hotelItems.push(item);
    else alertItems.push(item);
  });

  const cityShort = d.cityRegion.split('➜')[0].split('·')[0].split('(')[0].trim();
  const weekdayShort = d.weekday.split(' ')[0].replace('星期', '');

  return {
    dayNum: d.dayNum,
    dateKey: `${parseInt(d.month)}/${parseInt(d.day)}`,
    weekday: weekdayShort,
    city: cityShort,
    subRoute: `${d.cityRegion}｜住 ${d.hotelName}`,
    trafficItems,
    spotItems,
    foodItems,
    hotelItems,
    alertItems
  };
});

// 解析時間字串為分鐘數以供排序
function parseTimeToMinutes(t?: string): number {
  if (!t) return 9999;
  const match = t.match(/(\d{1,2}):(\d{2})/);
  if (match) {
    return parseInt(match[1], 10) * 60 + parseInt(match[2], 10);
  }
  return 9999;
}

// 依先後順序為各分類項目賦予順序編號 (1, 2, 3...)，表示先去哪裡
export function buildOrderedDay(day: RawDayTwoLayer): DayTwoLayer {
  // 交通先後順序
  day.trafficItems.sort((a, b) => parseTimeToMinutes(a.time) - parseTimeToMinutes(b.time));
  day.trafficItems.forEach((item, idx) => {
    item.order = idx + 1;
  });

  // 景點先後順序 (先去哪一個景點)
  day.spotItems.sort((a, b) => parseTimeToMinutes(a.time) - parseTimeToMinutes(b.time));
  day.spotItems.forEach((item, idx) => {
    item.order = idx + 1;
  });

  // 餐飲先後順序
  day.foodItems.sort((a, b) => parseTimeToMinutes(a.time) - parseTimeToMinutes(b.time));
  day.foodItems.forEach((item, idx) => {
    item.order = idx + 1;
  });

  // 住宿
  day.hotelItems.forEach((item, idx) => {
    item.order = idx + 1;
  });

  return {
    ...day,
    orderedItems: [
      ...day.trafficItems,
      ...day.spotItems,
      ...day.foodItems,
      ...day.hotelItems
    ]
  };
}

// 只保留 9/27 - 10/6 日行程 (共 10 天，Day 0 ~ Day 9)，其餘日期全部排除，並徹底刪除所有 AI 推薦之餐廳/冰淇淋/小巷教堂/散步點
export const TWO_LAYER_DAYS: DayTwoLayer[] = [
  buildOrderedDay(DAY_0),
  ...ITALY_TWO_LAYER_DAYS.map(buildOrderedDay),
  buildOrderedDay(DAY_9)
];

export const CATEGORY_CONFIG = {
  traffic: {
    label: '🚗 交通',
    badge: '交通',
    bg: '#EAF4F8',
    text: '#27647A',
    border: 'rgba(39, 100, 122, 0.18)',
    divider: 'rgba(39, 100, 122, 0.12)',
    chevron: '#27647A'
  },
  spot: {
    label: '📍 景點',
    badge: '景點',
    bg: '#FFF6DF',
    text: '#72521F',
    border: 'rgba(114, 82, 31, 0.18)',
    divider: 'rgba(114, 82, 31, 0.12)',
    chevron: '#72521F'
  },
  food: {
    label: '🍴 餐廳／咖啡／冰淇淋',
    badge: '餐飲',
    bg: '#FCECE6',
    text: '#A94732',
    border: 'rgba(169, 71, 50, 0.18)',
    divider: 'rgba(169, 71, 50, 0.12)',
    chevron: '#A94732'
  },
  hotel: {
    label: '🏨 住宿',
    badge: '住宿',
    bg: '#EDF3E7',
    text: '#526B3D',
    border: 'rgba(82, 107, 61, 0.18)',
    divider: 'rgba(82, 107, 61, 0.12)',
    chevron: '#526B3D'
  },
  alert: {
    label: '⚠ 重要提醒／預約／ZTL',
    badge: '重要提醒',
    bg: '#FBE9E7',
    text: '#A43A32',
    border: 'rgba(164, 58, 50, 0.18)',
    divider: 'rgba(164, 58, 50, 0.12)',
    chevron: '#A43A32'
  }
} as const;
