import { CROATIA_ITINERARY_DAYS } from './croatiaItinerary';
import { DayItinerary, TimelineNode } from './itineraryTypes';

export type CategoryType = 'traffic' | 'spot' | 'food' | 'hotel' | 'alert';

export interface PriceTicketItem {
  title: string;
  cost: string;
  detail?: string;
}

export interface DaySummarySection {
  overview?: string;
  badges?: string[];
  suggestedFlow?: string[];
}

export interface ItineraryItem {
  id: string;
  category: CategoryType;
  order?: number; // 先後順序編號 (1, 2, 3...)，表示那個先去
  time?: string;
  name: string;
  shortInfo?: string;
  cardBadge?: string;
  isFerryCard?: boolean;
  isCarRentalCard?: boolean;
  isCableCarCard?: boolean;
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
    pinCode?: string;
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
  summarySection?: DaySummarySection;
  priceTicketItems?: PriceTicketItem[];
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
        shortInfo: '湖畔石板路 · 彩色木船 · 碼頭廣場',
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
        shortInfo: '歷史梯田檸檬園景觀溫室 (門票 €2)',
        hasDetail: true,
        detail: {
          subtitle: '18 世紀古老梯田檸檬園與湖景制高點',
          hours: '10:00–18:00 (每日開放)',
          ticket: '成人票 €2～3，兒童 €1～2 (現場購票，可刷卡/現金)',
          duration: '建議停留 1 小時',
          address: 'Via Orti, 25010 Limone sul Garda BS, Italy',
          phone: '+39 0365 954720',
          description: '依陡峭山崖修築的多層梯田檸檬溫室。園內引水道精密，種滿黃澄澄檸檬與柑橘，頂層平台可俯瞰整座 Limone 小鎮紅瓦屋頂與加爾達湖全景。',
          mapQuery: 'Limonaia del Castel Limone sul Garda'
        }
      },
      {
        id: '928-s3',
        category: 'spot',
        time: '17:15',
        name: '中世紀老城區散步 ＆ 聖貝內代托教堂',
        shortInfo: '碼頭 ➜ 檸檬園 ➜ 小巷 ➜ 教堂 ➜ 回廣場',
        hasDetail: true,
        detail: {
          subtitle: '老城健步約 2.3 km (約 33 分鐘，停留約 1.5～2 小時)',
          hours: '教堂開放時間 09:00–18:00',
          address: 'Piazza Don Angelo Ghezzi, 25010 Limone sul Garda BS, Italy',
          description: '穿梭在 Limone 的中世紀石板窄巷與石階梯間，走訪聖貝內代托教堂 (Chiesa di San Benedetto)，隨後漫步返回湖畔廣場。',
          mapQuery: 'Chiesa di San Benedetto Limone sul Garda'
        }
      }
    ],
    foodItems: [
      {
        id: '928-f1',
        category: 'food',
        time: '16:45',
        name: 'LB GELATERIA 義式冰淇淋',
        shortInfo: '檸檬特色冰淇淋 · 湖畔必嚐甜品',
        hasDetail: true,
        detail: {
          subtitle: '小鎮人氣義式冰淇淋 (Gelateria)',
          address: 'Via IV Novembre, 32, 25010 Limone sul Garda BS, Italy',
          description: '推薦 Limone 當地特產新鮮檸檬口味冰淇淋（同場亦推薦 Gelateria Qciari / Gelateria L\'Aura），酸甜沁涼。',
          mapQuery: 'LB Gelateria Limone sul Garda'
        }
      },
      {
        id: '928-f2',
        category: 'food',
        time: '18:00',
        name: 'TURISTA PIZZERIA 披薩屋',
        shortInfo: '經典義大利窯烤披薩 · 湖畔小鎮風味',
        hasDetail: true,
        detail: {
          subtitle: '老城平價人氣披薩館',
          hours: '07:00–22:00',
          address: 'Via IV Novembre, 50, 25010 Limone sul Garda BS, Italy',
          description: '提供現烤薄皮義式披薩、義大利麵與冷熱飲品，位置便利鄰近老街。',
          mapQuery: 'Turista Pizzeria Limone sul Garda'
        }
      },
      {
        id: '928-f3',
        category: 'food',
        time: '19:00',
        name: 'Ristorante Gemma 湖畔餐廳',
        shortInfo: '加爾達湖海鮮 · 手工義大利麵 · 露天湖景',
        hasDetail: true,
        detail: {
          subtitle: 'Garibaldi 廣場湖畔精緻海鮮義式料理',
          hours: '11:30–14:30 / 18:30–21:30',
          phone: '+39 0365 954014',
          address: 'Piazza Garibaldi 11, 25010 Limone sul Garda BS, Italy',
          description: '臨湖露天景觀餐廳，供應新鮮加爾達湖魚、亞得里亞海海鮮燉飯與手工義大利麵，伴隨微風享受加爾達湖第一晚。',
          mapQuery: 'Ristorante Gemma Limone sul Garda'
        }
      },
      {
        id: '928-f4',
        category: 'food',
        time: '17:45',
        name: 'Margherita Conad 瑪格麗特超市',
        shortInfo: '採買礦泉水、水果零食與飲料 (建議17:00前)',
        hasDetail: true,
        detail: {
          subtitle: 'Limone 老城生鮮超市補給',
          hours: '07:30–19:30',
          address: 'Via IV Novembre 13, 25010 Limone sul Garda BS, Italy',
          description: '回飯店前採買大瓶礦泉水、新鮮水果、優格與義大利餅乾，建議提早於 17:00 前採買以免人潮擁擠。',
          mapQuery: 'Margherita Conad Limone sul Garda'
        }
      }
    ],
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
        name: '加爾達湖渡輪跨湖 (Garda Express)',
        shortInfo: 'Limone ➜ Malcesine｜來回 €15 · 航程約 25 分',
        hasDetail: true,
        detail: {
          subtitle: '橫渡加爾達湖水心巡航 (Garda Express)',
          hours: '去程 10:00 起約每小時一班；回程可搭 18:05 班次',
          ticket: '來回票 €15 / 人 (Limone Centro 碼頭購票)',
          address: 'Porto di Limone Centro, Lungolago Marconi, Limone sul Garda',
          description: '由 Limone Centro 碼頭搭乘 Garda Express 橫渡加爾達湖最壯闊湖段。從湖面上回望 Limone 的陡峭岩壁與檸檬梯田，迎向對岸矗立水畔的 Malcesine 古堡。',
          mapQuery: 'Porto di Limone sul Garda'
        }
      },
      {
        id: '929-t2',
        category: 'traffic',
        time: '11:45',
        name: '巴爾多山 360° 旋轉纜車 (Monte Baldo)',
        shortInfo: '直上海拔 1,760m｜線上預約 €28 · 現場 €30',
        hasDetail: true,
        detail: {
          subtitle: 'Funivia Malcesine-Monte Baldo 全景 360° 自轉吊廂',
          hours: '08:15 起營運，末班上山 18:00 / 最後下山 18:45',
          ticket: '來回票：線上預約 €28 / 現場 €30 (Junior 兒童線上 €16 / 現場 €18；身高 1.2m 以下免費)',
          phone: '+39 045 740 0206',
          address: 'Via Navene Vecchia 12, 37018 Malcesine VR, Italy',
          parking: '設有地下收費停車場；旺季建議提前線上購票避開排隊',
          description: '從 Malcesine 搭乘兩段纜車登頂。第二段為世界首創 360 度自轉全景吊廂，全方位無死角俯瞰整個加爾達湖長條壯闊水域與連綿山脈。',
          notice: '山頂海拔高風勢大，氣溫比湖面低約 8～10°C，務必備妥防風保暖外套。',
          mapQuery: 'Funivia Malcesine Monte Baldo'
        }
      },
      {
        id: '929-t3',
        category: 'traffic',
        time: '17:30',
        name: '渡輪返回 Limone',
        shortInfo: 'Malcesine ➜ Limone｜可搭 18:05 班次 · 航程約 25 分',
        hasDetail: true,
        detail: {
          subtitle: '搭乘跨湖渡輪返程',
          address: 'Porto di Malcesine, 37018 Malcesine VR, Italy',
          description: '於 Malcesine 碼頭憑往返票搭船返回 Limone（末班船前後可搭 18:05 班次）。夕陽斜射下的湖面金光粼粼。',
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
        shortInfo: '加爾達湖水上懸空木棧道',
        hasDetail: true,
        detail: {
          subtitle: '懸空木棧道 (全長約 2.5 km)',
          hours: '全天開放',
          duration: '停留約 1.5 小時 (全長約 2.5 km)',
          address: 'SS45bis, 25010 Limone sul Garda BS, Italy',
          parking: 'Parcheggio Capo Reamol (收費停車場，車位有限建議早到)',
          description: '木棧道鋼構固定於湖畔岩壁上，沿湖岸延伸約 2.5 km，可漫步欣賞加爾達湖景色。',
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
        shortInfo: '湖畔中世紀古堡 · 登頂 360° 湖景 (門票 €7)',
        hasDetail: true,
        detail: {
          subtitle: 'Malcesine 歷史水岸城堡地標',
          hours: '每日 09:30–18:30 (旺季可能延至 19:30)',
          ticket: '成人 €7，兒童 (6-13歲) €3，6歲以下免費',
          duration: '停留約 1 小時',
          address: 'Via Castello 1, 37018 Malcesine VR, Italy',
          description: '矗立在加爾達湖岬角上的中世紀要塞城堡，歌德曾在此駐足素描。登上最高塔樓可將古城紅瓦與蔚藍湖水盡收眼底。',
          mapQuery: 'Castello Scaligero Malcesine'
        }
      },
      {
        id: '929-s4',
        category: 'spot',
        time: '16:30',
        name: 'Malcesine 湖畔步道散步 ＆ 日落漫步',
        shortInfo: '中世紀石板小巷 ➜ 湖畔步道',
        hasDetail: true,
        detail: {
          subtitle: '中世紀小巷漫步與湖岸日落風光',
          duration: '停留約 45 分鐘',
          address: 'Lungolago di Malcesine, 37018 Malcesine VR, Italy',
          description: '沿著 Malcesine 水岸步道悠閒漫步，欣賞金黃落日灑落加爾達湖面。',
          mapQuery: 'Lungolago Malcesine'
        }
      },
      {
        id: '929-s5',
        category: 'spot',
        time: '16:45',
        name: 'DATCH MALCESINE 時裝精品店',
        shortInfo: '老城特色服飾精品店 · 散步逛街',
        hasDetail: true,
        detail: {
          subtitle: '義大利風格男女服飾選品',
          address: 'Via Navene 25, 37018 Malcesine VR, Italy',
          description: '位於 Malcesine 老城區熱鬧街道上的義式休閒時裝店，適合順路逛街尋寶。',
          mapQuery: 'Datch Malcesine'
        }
      }
    ],
    foodItems: [
      {
        id: '929-f1',
        category: 'food',
        time: '13:30',
        name: 'Malcesine 湖畔景觀午餐 / 咖啡',
        shortInfo: '小鎮義大利麵 · 披薩 · 湖畔咖啡座',
        hasDetail: true,
        detail: {
          subtitle: '下山後於 Malcesine 老城悠閒享用午餐',
          description: '下山後在斯卡利傑城堡旁或老城石板巷弄挑選戶外露天座位，品嚐手工千層麵、生火腿披薩與特調義式濃縮咖啡。',
          mapQuery: 'Ristorante Malcesine'
        }
      }
    ],
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
        name: 'WaltherPark 停車場 (避開 ZTL)',
        shortInfo: 'Walther Tunnel 入口 ➜ 圓環右轉下 B2',
        hasDetail: true,
        detail: {
          subtitle: '波札諾智慧地下停車場 (避開老城 ZTL 攝影機)',
          address: 'Piazzetta Alto Adige 1, 39100 Bolzano BZ, Italy',
          description: '導航設為 Walther Tunnel，由 Via Josef Mayr Nusser 進入隧道後依 WaltherPark Parking 指標右轉直下 B2 車庫。注意：切勿走 Via Alto Adige (該處有 ZTL 執法攝影機)！',
          mapQuery: 'WaltherPark Parking Bolzano'
        }
      },
      {
        id: '930-t3',
        category: 'traffic',
        time: '14:00',
        name: 'ESSELUNGA 超市採買補給',
        shortInfo: 'WaltherPark 內 · 消費滿 €50 折抵 1 小時停車',
        hasDetail: true,
        detail: {
          subtitle: '上休斯高原前的大型生鮮超市',
          hours: '週一至週六 08:00–21:00',
          address: 'Piazza Alto Adige 1, 39100 Bolzano BZ, Italy',
          description: '在 WaltherPark 內的 ESSELUNGA 超市採買高山水果、堅果零食、大瓶礦泉水。超市消費滿 €50 可折抵 1 小時停車費。',
          mapQuery: 'Esselunga Bolzano WaltherPark'
        }
      },
      {
        id: '930-t4',
        category: 'traffic',
        time: '14:45',
        name: 'ESSO 加油站 (上山前加滿油箱)',
        shortInfo: 'Distributore Esso · Via Innsbruck 15',
        hasDetail: true,
        detail: {
          subtitle: '休斯高原山路行駛前油料加滿',
          hours: '07:00–19:00',
          address: 'Via Innsbruck 15, 39100 Bolzano BZ, Italy',
          description: '出波爾札諾市區上山前將車輛油箱加滿，確保高山行程油料充裕。',
          mapQuery: 'Esso Via Innsbruck Bolzano'
        }
      },
      {
        id: '930-t5',
        category: 'traffic',
        time: '15:15',
        name: '開車前往休斯高原 Hotel Santner',
        shortInfo: '約 43 km｜盤山路約 1 小時 10 分 · 憑特許通行',
        hasDetail: true,
        detail: {
          subtitle: '盤山公路進入休斯高原自然保護區',
          duration: '約 43 km (約 1 小時 10 分)',
          description: '經 Castelrotto 上山。休斯高原日間管制外來車輛，但已預訂 Hotel Santner，車牌已由飯店通報特許，出示訂房確認信在管制閘門通行直達地下車庫！',
          parking: 'Hotel Santner 免費地下車庫',
          mapQuery: 'Hotel Santner Alpine Sport & Relax Alpe di Siusi'
        }
      }
    ],
    spotItems: [
      {
        id: '930-s1',
        category: 'spot',
        time: '11:15',
        name: '波爾札諾主教座堂 (Duomo di Bolzano)',
        shortInfo: '綠金花磚哥德式教堂 · 歷史地標',
        hasDetail: true,
        detail: {
          subtitle: '聖母升天主教座堂 (14–15 世紀瑰寶)',
          address: 'Piazza della Parrocchia 27, 39100 Bolzano BZ, Italy',
          description: '擁有標誌性菱形花紋彩瓷瓦屋頂與 65 公尺高鏤空哥德鐘樓，內部莊嚴典雅。',
          mapQuery: 'Duomo di Bolzano'
        }
      },
      {
        id: '930-s2',
        category: 'spot',
        time: '11:45',
        name: 'Piazza Walther (瓦爾特廣場)',
        shortInfo: '南蒂羅爾核心客廳 · 瓦爾特詩人雕像',
        hasDetail: true,
        detail: {
          subtitle: '融合德義風情的波札諾歷史心臟',
          duration: '停留約 30 分鐘',
          address: 'Piazza Walther, 39100 Bolzano BZ, Italy',
          description: '廣場佇立著中世紀德語詩人瓦爾特（Walther von der Vogelweide）大理石雕像，氣氛悠閒典雅。',
          mapQuery: 'Piazza Walther Bolzano'
        }
      },
      {
        id: '930-s3',
        category: 'spot',
        time: '12:15',
        name: '拱廊街 VIA DEI PORTICI ＆ Tschager Art',
        shortInfo: '800 年歷史拱廊街 · 南蒂羅爾藝術工藝',
        hasDetail: true,
        detail: {
          subtitle: 'Laubengasse 連綿拱廊街漫步',
          address: 'Via dei Portici 2, 39100 Bolzano BZ, Italy (Tschager Art)',
          description: '漫步於中世紀連綿拱廊街，精緻櫥窗林立。走訪 Tschager Art 欣賞傳統南蒂羅爾木雕與工藝品。',
          mapQuery: 'Via dei Portici Bolzano'
        }
      },
      {
        id: '930-s4',
        category: 'spot',
        time: '12:45',
        name: '香草市集 PIAZZA DELLE ERBE (Obstplatz)',
        shortInfo: '熱鬧蔬果香草市集 · 海王星噴泉',
        hasDetail: true,
        detail: {
          subtitle: '每日生鮮與香草乾酪市集',
          hours: '07:00–19:00 (週六至 13:00，週日休市)',
          address: 'Piazza delle Erbe, 39100 Bolzano BZ, Italy',
          description: '擺滿新鮮阿爾卑斯蘋果、無花果、特產火腿與乾酪的傳統露天市集，充滿生活氣息。',
          mapQuery: 'Piazza delle Erbe Bolzano'
        }
      }
    ],
    foodItems: [
      {
        id: '930-f1',
        category: 'food',
        time: '12:00',
        name: 'Loacker Café 威化甜點店',
        shortInfo: '瓦爾特廣場經典點心 · 熱可可與脆餅',
        hasDetail: true,
        detail: {
          subtitle: '世界知名義大利威化餅品牌專門店',
          address: 'Piazza Walther 11, 39100 Bolzano BZ, Italy',
          description: '坐落於瓦爾特廣場邊，提供香濃熱巧克力、義式咖啡與各式剛出爐的手工威化甜品。',
          mapQuery: 'Loacker Cafe Bolzano Piazza Walther'
        }
      },
      {
        id: '930-f2',
        category: 'food',
        time: '13:00',
        name: 'Torgglhaus 傳統餐廳 (午餐)',
        shortInfo: '南蒂羅爾鄉村料理 · 義大利菜 · 柴燒披薩',
        hasDetail: true,
        detail: {
          subtitle: '波札諾老城著名歷史餐館',
          hours: '11:30–22:00',
          address: 'Via Museo 2/A, 39100 Bolzano BZ, Italy',
          description: '供應道地南蒂羅爾 Knödel 麵丸子、烤豬膝、煙燻火腿拼盤與現烤脆皮披薩，份量扎實美味。',
          mapQuery: 'Torgglhaus Bolzano'
        }
      }
    ],
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
        name: '休斯高原輕鬆健走環線 (3.6 km · 約 50 分)',
        shortInfo: 'Hotel Santner ➜ 全景點 ➜ Constrin ➜ Sanon ➜ Compatsch',
        hasDetail: true,
        detail: {
          subtitle: '歐洲最大高山草原經典平緩健行路線',
          duration: '約 2 小時 (含拍照與休息)',
          ticket: '步道全線免費開放',
          address: 'Alpe di Siusi, 39040 BZ, Italy',
          description: '自 Hotel Santner 徒步出發，經高原全景拍照點、Constrin 山屋，漫步至風景如畫的 Sanon 山屋，最後經 Compatsch 環狀返回。沿途藍天白雲、翠綠草甸與放牧牛群。',
          mapQuery: 'Compatsch Alpe di Siusi'
        }
      },
      {
        id: '101-s2',
        category: 'spot',
        time: '14:30',
        name: 'Panorama / Col Raiser 景觀遠眺',
        shortInfo: '看 Odle 鋸齒峰與施盧恩峰 (Schlern)',
        hasDetail: true,
        detail: {
          subtitle: '360° 多洛米蒂群山環繞視野',
          duration: '散步約 1.5 小時',
          description: '午後在飯店周邊 Panorama 步道漫步，或遠眺對面 Col Raiser 及 Odle 鋸齒奇峰，享受高山純淨空氣與寧靜草原。',
          mapQuery: 'Panorama Alpe di Siusi'
        }
      }
    ],
    foodItems: [
      {
        id: '101-f1',
        category: 'food',
        time: '11:30',
        name: 'Rifugio Sanon 高山山屋咖啡館',
        shortInfo: '招牌蘋果捲 (Apfelstrudel) ＋ 咖啡套餐 €7',
        hasDetail: true,
        detail: {
          subtitle: '休斯高原超人氣木造景觀山屋',
          hours: '09:00–17:00',
          address: 'Sanon Hütte, 39040 Castelrotto BZ, Italy',
          description: '坐落於草原正中央，坐在露天木椅上直面 Sassolungo 巨峰，品嚐熱騰騰的道地南蒂羅爾肉桂蘋果捲搭配香濃卡布奇諾 (套餐僅 7 歐)。',
          mapQuery: 'Rifugio Sanon Alpe di Siusi'
        }
      }
    ],
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
        time: '08:30',
        name: 'Hotel Santner 出發 ➜ Mont Sëuc 纜車站',
        shortInfo: '步行 6.5 km (約 1:35) ➜ 搭纜車下 Ortisei',
        hasDetail: true,
        detail: {
          subtitle: '徒步穿越高原至 Mont Sëuc 纜車站',
          duration: '約 1 小時 35 分',
          description: '08:30 自 Hotel Santner 出發徒步前往 Mont Sëuc 纜車站山上站（約 10:05 抵達），搭乘 Telecabina 景觀纜車下至 Ortisei 小鎮。亦可選擇自駕開車前往（Seceda 停車場約 €8/天）。',
          parking: 'Seceda 纜車站專屬停車場 (約 €8/天)',
          mapQuery: 'Telecabina Mont Seuc Ortisei'
        }
      },
      {
        id: '102-t2',
        category: 'traffic',
        time: '10:30',
        name: 'Ortisei 步行至 Seceda 纜車站',
        shortInfo: '步行約 7 分鐘 (Str. Val d\'Anna 2)',
        hasDetail: true,
        detail: {
          subtitle: '轉乘 Seceda 登山纜車',
          duration: '約 7 分鐘',
          address: 'Str. Val d\'Anna 2, 39046 Ortisei BZ, Italy',
          description: '穿過 Ortisei 小鎮步行街前往 Seceda 纜車站。',
          mapQuery: 'Funivie Seceda Ortisei'
        }
      },
      {
        id: '102-t3',
        category: 'traffic',
        time: '11:00',
        name: 'Seceda 雙段纜車登頂 (Ortisei ➜ Furnes ➜ Seceda)',
        shortInfo: '直上海拔 2,518m｜來回票約 €74 (線上預約)',
        hasDetail: true,
        detail: {
          subtitle: 'Funivie Seceda 兩段階梯纜車直達刀鋒絕壁',
          hours: '08:30–17:30 (每日營運，最後下山約 17:30)',
          ticket: '來回票約 €74/人 (建議提前線上預約)',
          phone: '+39 0471 796531',
          address: 'Str. Val d\'Anna 2, 39046 Ortisei BZ, Italy',
          parking: '纜車站停車場約 €8/天',
          description: '由 Ortisei 搭乘箱型纜車至 Furnes 中繼站，再換乘大型全景吊車凌空飛躍峽谷直達 Seceda 山頂（海拔 2,518m）。',
          mapQuery: 'Funivie Seceda Ortisei'
        }
      },
      {
        id: '102-t4',
        category: 'traffic',
        time: '14:45',
        name: '原路搭乘纜車返回 Ortisei ＆ 回飯店',
        shortInfo: '建議 14:45 離開刀鋒原路返回｜末班 17:30',
        hasDetail: true,
        detail: {
          subtitle: '原路下山並徒步返回休斯高原',
          duration: '下山約 25 分鐘，回飯店預留約 1:35',
          description: '結束健行後由 Seceda 搭乘纜車返回 Ortisei，逛街後搭乘 Mont Sëuc 纜車並漫步返回 Hotel Santner。',
          mapQuery: 'Funivie Seceda Ortisei'
        }
      }
    ],
    spotItems: [
      {
        id: '102-s1',
        category: 'spot',
        time: '11:30',
        name: 'Seceda 刀鋒山脊健行 ＆ Fermeda 觀景',
        shortInfo: '刀鋒山脊步道 · 20–30 分抵 Fermeda 觀景點',
        hasDetail: true,
        detail: {
          subtitle: 'Seceda 刀鋒山脊健行',
          duration: '約 1.5 小時',
          description: '自 Seceda 上站出發沿山脊步道健行，俯瞰千米垂直斷崖與草甸，遠眺 Odle 鋸齒峰。',
          mapQuery: 'Seceda Viewpoint Ortisei'
        }
      },
      {
        id: '102-s2',
        category: 'spot',
        time: '12:30',
        name: 'Pieralongia 雙尖巨石木屋漫步',
        shortInfo: '奇特大石頭 · 單程 2 km 來回 4 km',
        hasDetail: true,
        detail: {
          subtitle: '草甸巨岩地標與高山農莊',
          duration: '單程約 2 km (約 30 分鐘)',
          address: 'Pieralongia, 39046 Ortisei BZ, Italy',
          description: '沿平緩步道抵達聳立草地的兩根巨尖岩石，木屋供應手作鮮奶優格與飲品。欣賞後建議於 14:45 前原路返回纜車站。',
          mapQuery: 'Baita Pieralongia Seceda'
        }
      },
      {
        id: '102-s3',
        category: 'spot',
        time: '15:30',
        name: 'Ortisei (奧蒂塞伊) 徒步街漫步',
        shortInfo: '木雕工藝之都 · 繽紛房舍街道',
        hasDetail: true,
        detail: {
          subtitle: 'Ortisei 行人步行街',
          duration: '約 1 小時',
          address: 'Ortisei, 39046 BZ, Italy',
          description: '漫步在 Ortisei 石板行人街道，欣賞木雕藝品櫥窗與傳統阿爾卑斯建築。',
          mapQuery: 'Ortisei Val Gardena'
        }
      }
    ],
    foodItems: [
      {
        id: '102-f1',
        category: 'food',
        time: '17:30',
        name: 'Mauriz Keller 餐廳',
        shortInfo: '南蒂羅爾鄉村料理 · 人氣披薩 · +39 0471 797301',
        hasDetail: true,
        detail: {
          subtitle: 'Ortisei 老城知名人氣地窖餐廳',
          hours: '11:30–14:00 / 17:00–21:30',
          phone: '+39 0471 797301',
          address: 'Streda Rezia 32, 39046 Ortisei BZ, Italy',
          description: '供應道地義大利窯烤披薩、南蒂羅爾烤肉排與手工義大利麵，下山後若在鎮上用餐首推此處！',
          mapQuery: 'Mauriz Keller Ortisei'
        }
      }
    ],
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
  // 10/3 (六) ｜ 藍柯弗爾山 16/17/18 纜車 ➜ 前往 Vodo Cadore
  // ==========================================
  {
    dayNum: 6,
    dateKey: '10/3',
    weekday: '六',
    city: '藍柯弗爾山 ➜ Vodo Cadore',
    subRoute: 'Hotel Santner 退房 ➜ Plan de Gralba 停車 ➜ 16/17/18 纜車 ➜ 石頭城步道 ➜ Arabba 超市 ➜ 加油 ➜ 入住 Chalet del Capriolo｜住 Chalet del Capriolo',
    trafficItems: [
      {
        id: '103-t1',
        category: 'traffic',
        time: '08:30',
        name: 'Hotel Santner 退房 ＆ 前往 Plan de Gralba 停車場',
        shortInfo: '停車場 €2.50/小時 · Selva di Val Gardena',
        hasDetail: true,
        detail: {
          subtitle: '自駕前往藍柯弗爾山纜車站停車場',
          duration: '約 30 分鐘',
          address: 'Streda Plan de Gralba, 39048 Selva di Val Gardena BZ, Italy',
          parking: 'Parking Plan de Gralba (收費約 €2.50/小時)',
          description: '自 Hotel Santner 退房後，自駕前往 Plan de Gralba 停車場，在此搭乘纜車系統前往藍柯弗爾山。',
          mapQuery: 'Parking Plan de Gralba'
        }
      },
      {
        id: '103-t2',
        category: 'traffic',
        time: '09:30',
        name: '16 號 Piz Seteur 1 ➜ 17 號 Gran Paradiso 纜車',
        shortInfo: '10人座車廂 ➜ 8人有罩座椅 · 前往 Passo Sella',
        hasDetail: true,
        detail: {
          subtitle: '兩段纜車銜接石頭城步道',
          hours: '09:00–17:00',
          ticket: '建議購買 Eco Pass 三線套票約 €50/人 (若單買分開約 €79/人)',
          description: '搭乘 16 號 Piz Seteur 1（10人座大型車廂），接著轉乘 17 號 Gran Paradiso（8人有防風罩座椅）。出站後銜接 526 號健行步道。',
          mapQuery: 'Piz Seteur Gondola'
        }
      },
      {
        id: '103-t3',
        category: 'traffic',
        time: '11:00',
        name: '18 號 Forcella Sassolungo 雙人站立纜車',
        shortInfo: '直上海拔 2,685m Toni Demetz 山屋 · 全程站立',
        hasDetail: true,
        detail: {
          subtitle: '雙人站立式纜車 (往返)',
          hours: '09:00–16:45',
          description: '兩人一艙全程站立，移動中由人員協助迅速上下車。直達海拔 2,685m Toni Demetz 山屋與峽谷隘口。',
          notice: '雙人站立纜車需站立約 15 分鐘，移動中上下車請遵從工作人員指示。',
          mapQuery: 'Forcella Sassolungo Telecabina'
        }
      },
      {
        id: '103-t4',
        category: 'traffic',
        time: '14:30',
        name: '自駕前往 Arabba 超市補給 ＆ ENI 加油',
        shortInfo: 'DESPAR 超市 ➜ ENI 加油站 ➜ 前往 Vodo Cadore',
        hasDetail: true,
        detail: {
          subtitle: '沿途採買木屋料理食材與油料補滿',
          description: '下山後驅車前往 Arabba 的 DESPAR DOLOMITES 超市採買未來 3 天木屋自煮所需生鮮與紅酒，並在 ENI STATION 加滿油箱後南下前往木屋。',
          mapQuery: 'Despar Dolomites Arabba'
        }
      },
      {
        id: '103-t5',
        category: 'traffic',
        time: '16:30',
        name: '自駕前往 Vodo Cadore (木屋公寓)',
        shortInfo: '抵達 Chalet del Capriolo｜專屬私人免費停車位',
        hasDetail: true,
        detail: {
          subtitle: '抵達多洛米蒂東側木屋公寓',
          address: '108 Via Nazionale, 32040 Vodo Cadore, Italy',
          parking: '公寓專屬私人免費停車位 (免預約)',
          mapQuery: 'Chalet del Capriolo 108 Via Nazionale Vodo Cadore'
        }
      }
    ],
    spotItems: [
      {
        id: '103-s1',
        category: 'spot',
        time: '10:15',
        name: '526 號健行步道 (石頭城 Cidade dei Sassi)',
        shortInfo: '穿過石頭城巨岩怪石 · 1.3 km 約 25 分鐘',
        hasDetail: true,
        detail: {
          subtitle: '石頭城自然步道',
          duration: '步行約 25 分鐘 (1.3 km)',
          description: '由 17 號纜車站出發，沿 526 號步道穿越石頭城（Cidade dei Sassi），巨石錯落林立，一路朝 Passo Sella 前進。',
          mapQuery: 'Citta dei Sassi Passo Sella'
        }
      },
      {
        id: '103-s2',
        category: 'spot',
        time: '11:15',
        name: 'Toni Demetz 高山山屋與隘口 (海拔 2,685m)',
        shortInfo: 'Sassolungo 鞍部隘口 · 海拔 2,685m',
        hasDetail: true,
        detail: {
          subtitle: 'Toni Demetz 高山山屋與隘口',
          duration: '停留約 40 分鐘',
          description: '矗立於隘口風口處的高山山屋，四周為白色垂直石灰岩壁，可在此休息拍照，隨後搭纜車原路返回。',
          mapQuery: 'Rifugio Toni Demetz'
        }
      }
    ],
    foodItems: [
      {
        id: '103-f1',
        category: 'food',
        time: '14:45',
        name: 'DESPAR DOLOMITES 超市 (Arabba)',
        shortInfo: '採買牛排、蔬菜、蛋奶起司與葡萄酒',
        hasDetail: true,
        detail: {
          subtitle: '前往木屋前之重要生鮮採買站',
          address: 'Via Mesdi Arabba 45, 32020 Arabba BL, Italy',
          description: '採買未來 3 天在 Chalet del Capriolo 自煮所需新鮮牛排、松露義大利麵醬、新鮮蔬菜、蛋奶起司與 Alto Adige DOC 紅白葡萄酒。',
          mapQuery: 'Despar Dolomites Arabba'
        }
      },
      {
        id: '103-f2',
        category: 'food',
        time: '15:30',
        name: 'ENI STATION 加油站 (Ortisei / Val Gardena)',
        shortInfo: '加滿油箱 · 備足長途油料',
        hasDetail: true,
        detail: {
          subtitle: '高山途經加油整備',
          address: 'Streda Tresval Valgardena, 39046 Ortisei BZ, Italy',
          description: '在進入 Cadore 山區前將車輛油箱補滿。',
          mapQuery: 'Eni Station Streda Tresval'
        }
      }
    ],
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
          bookingCode: 'Booking.com: 5468.211.528 / PIN: 3570 (CHEN CHIUNG HUA)',
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
        name: 'Forcella Sassolungo 雙人站立纜車注意事項',
        shortInfo: '移動中由工作人員協助上下車，需全程站立約 15 分鐘',
        hasDetail: true,
        detail: {
          subtitle: '站立式纜車安全須知',
          description: '18 號纜車為無座椅站立式車廂，車速不慢，上下車需手腳敏捷配合引導。高空風大，山頂氣溫偏低，請備防風外套。'
        }
      },
      {
        id: '103-a2',
        category: 'alert',
        name: 'Chalet 嚴格入住時間 (16:00–19:00)',
        shortInfo: 'Booking 確認碼: 5468.211.528 / PIN: 3570 · 信用卡 EUR 200 押金',
        hasDetail: true,
        detail: {
          subtitle: '公寓接待處入住規定',
          description: 'Chalet del Capriolo 規定入住接待時間為 16:00–19:00。請備妥主要住客信用卡刷 EUR 200 押金，並出示訂單 PIN 碼 3570。'
        }
      }
    ]
  },

  // ==========================================
  // 10/4 (日) ｜ 布萊埃斯湖 ➜ 科爾蒂納·丹佩佐
  // ==========================================
  {
    dayNum: 7,
    dateKey: '10/4',
    weekday: '日',
    city: 'Lago di Braies ➜ Cortina',
    subRoute: 'Chalet del Capriolo ➜ 布萊埃斯湖 (木划船/環湖) ➜ Cortina 老城 ➜ La Cooperativa 百貨 ➜ 返回木屋｜住 Chalet del Capriolo',
    trafficItems: [
      {
        id: '104-t1',
        category: 'traffic',
        time: '09:00',
        name: '自駕前往布萊埃斯湖 (Lago di Braies)',
        shortInfo: '約 55 km｜車程約 1 小時 · P3 停車場 (現金 €10/天)',
        hasDetail: true,
        detail: {
          subtitle: '前往布萊埃斯湖 P3 停車場',
          duration: '約 55 km (約 1 小時)',
          parking: 'P3 停車場 (收現金 €10/天，繳費收據請放前車窗，GPS: P32P+F3 布拉伊埃斯)',
          description: '駕車北上穿過 Cortina 經 SS51/SS49 進入 Braies 山谷直達湖畔 P3 停車場。',
          mapQuery: 'Lago di Braies Parking P3'
        }
      },
      {
        id: '104-t2',
        category: 'traffic',
        time: '14:00',
        name: '自駕前往 Cortina d\'Ampezzo',
        shortInfo: '約 45 km｜車程約 45 分鐘',
        hasDetail: true,
        detail: {
          subtitle: '前往 Cortina 小鎮',
          duration: '約 45 km (約 45 分鐘)',
          parking: 'Parcheggio Cortina / Parcheggio Funivia Faloria (約 €2/小時)',
          description: '駕車南下前往 Cortina，將車輛停入老城外圍專用停車場。',
          mapQuery: 'Parcheggio Cortina d\'Ampezzo'
        }
      },
      {
        id: '104-t3',
        category: 'traffic',
        time: '17:30',
        name: '自駕返回 Vodo Cadore (Chalet del Capriolo)',
        shortInfo: '約 16 km｜車程約 20 分鐘',
        hasDetail: true,
        detail: {
          subtitle: '返回木屋公寓休息自煮',
          description: '自 Cortina 沿 SS51 國道返回 Vodo Cadore，將車輛停入專屬停車位。',
          mapQuery: 'Chalet del Capriolo 108 Via Nazionale Vodo Cadore'
        }
      }
    ],
    spotItems: [
      {
        id: '104-s1',
        category: 'spot',
        time: '10:15',
        name: 'Lago di Braies (布萊埃斯湖) 環湖步道 ＆ 木划船',
        shortInfo: '木划船 (45分 €15 / 私人 €55) · 湖畔步道',
        hasDetail: true,
        detail: {
          subtitle: '湖畔步道與木划船租借',
          duration: '停留約 2.5～3 小時',
          ticket: '步道免費；木划船 45 分鐘 €15 / 私人船 €55',
          address: 'Lago di Braies, 39030 Braies BZ, Italy',
          description: '高山湖泊環湖步道與木造船屋，可租借木划船划向湖心，或沿著湖畔平緩步道散步拍照。',
          mapQuery: 'Lago di Braies Braies'
        }
      },
      {
        id: '104-s2',
        category: 'spot',
        time: '14:45',
        name: 'Cortina 老城 ＆ Corso Italia 步行街漫步',
        shortInfo: 'Corso Italia 步行街 · 木雕藝品名店',
        hasDetail: true,
        detail: {
          subtitle: 'Corso Italia 步行街',
          duration: '漫步約 1.5 小時',
          address: 'Corso Italia, 32043 Cortina d\'Ampezzo BL, Italy',
          description: '精品名店、傳統木雕藝品店與珠寶櫥窗林立，背景為雪山群峰。',
          mapQuery: 'Corso Italia Cortina d\'Ampezzo'
        }
      },
      {
        id: '104-s3',
        category: 'spot',
        time: '15:45',
        name: 'La Cooperativa di Cortina (六層百年百貨)',
        shortInfo: '1F 超市 · 4F 景觀餐廳 The Roof · 戶外品牌',
        hasDetail: true,
        detail: {
          subtitle: 'Cortina 綜合商場百貨',
          hours: '1F 超市 15:00–19:30；4F 景觀餐廳 09:00–23:00',
          address: 'Corso Italia 40, 32043 Cortina d\'Ampezzo BL, Italy',
          description: '創立於 1893 年的百年老牌百貨公司，集結義大利羊絨、登山戶外裝備、南蒂羅爾手工藝品與生鮮超市，4F 設有景觀露台餐酒館 The Roof。',
          mapQuery: 'La Cooperativa di Cortina'
        }
      }
    ],
    foodItems: [
      {
        id: '104-f1',
        category: 'food',
        time: '12:30',
        name: 'Ristorante Lago di Braies 湖畔餐廳',
        shortInfo: '湖畔熱食 12:00–14:00 · 咖啡可頌 · 發票可免費上廁所',
        hasDetail: true,
        detail: {
          subtitle: '布萊埃斯湖畔經典木造景觀餐廳',
          hours: '熟食熱餐 12:00–14:00；咖啡點心全天供應',
          address: 'San Vito 27, 39030 Braies BZ, Italy',
          description: '緊鄰湖畔，提供熱騰騰的義大利麵、燉牛肉、咖啡與可頌。發票務必留著，憑發票可免費使用餐廳洗手間！',
          mapQuery: 'Ristorante Lago di Braies'
        }
      },
      {
        id: '104-f2',
        category: 'food',
        time: '16:30',
        name: 'The Roof Bistrot & Lounge Bar (4F 百貨景觀餐廳)',
        shortInfo: 'La Cooperativa 4F · 俯瞰 Cortina 雪山群峰下午茶',
        hasDetail: true,
        detail: {
          subtitle: '百年百貨頂樓全景餐酒館',
          hours: '09:00–23:00',
          address: 'Corso Italia 40 (4F), 32043 Cortina d\'Ampezzo BL, Italy',
          description: '逛街小歇絕佳去處，享受義式濃縮咖啡、Spritz 調酒與精緻小點，眺望阿爾卑斯壯麗雪山。',
          mapQuery: 'The Roof Bistrot Cortina'
        }
      }
    ],
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
        name: 'Lago di Braies P3 停車收現金注意',
        shortInfo: 'P3 停車場收現金 €10/天，繳費收據請務必放置前車窗',
        hasDetail: true,
        detail: {
          subtitle: '湖區停車注意事項',
          description: 'P3 湖畔收費停車場需準備 €10 現金。繳費後請將收據放置在擋風玻璃明顯處以供查驗。'
        }
      },
      {
        id: '104-a2',
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
    subRoute: 'Vodo Cadore ➜ 三峰山 (Auronzo 停車場) ➜ 101步道健行 ➜ 米蘇里納湖 ➜ 農場生鮮店 ➜ 返回木屋自煮大餐｜住 Chalet del Capriolo',
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
          ticket: '私人收費道路與停車 €40/小客車 (有效 12小時，2025起必須事先線上預約刷卡填入車牌，閘門車牌辨識放行)',
          parking: 'Rifugio Auronzo 海拔 2,320m 專屬大型停車場 (GPS: 46.6128 N, 12.2933 E)',
          description: '清晨自駕出發，抵達 Misurina 湖畔收費站憑預約車牌進入盤山收費公路，直達三峰山大健行起點 Auronzo 停車場。',
          mapQuery: 'Rifugio Auronzo Tre Cime di Lavaredo'
        }
      },
      {
        id: '105-t2',
        category: 'traffic',
        time: '14:30',
        name: '自駕前往：三峰山 ➜ 米蘇里納湖 (Lago di Misurina)',
        shortInfo: '約 10 km｜車程約 15 分鐘 (GPS: 46.536092, 12.139349)',
        hasDetail: true,
        detail: {
          subtitle: '下山前往米蘇里納湖畔',
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
          subtitle: '返回木屋公寓休息自煮',
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
        name: '三峰山經典健行 (Rifugio Auronzo ➜ Lavaredo 隘口)',
        shortInfo: '101 步道 ➜ Cappella degli Alpini ➜ Rifugio Lavaredo',
        hasDetail: true,
        detail: {
          subtitle: '101 步道健行 (全程約 3.5～4 小時)',
          duration: '健行約 3.5～4 小時',
          address: 'Tre Cime di Lavaredo, 32041 Auronzo di Cadore BL, Italy',
          description: '由 Auronzo 停車場出發，沿 101 號步道經 Cappella degli Alpini 到達 Rifugio Lavaredo，再登上 Forcella Lavaredo 隘口觀景。',
          mapQuery: 'Tre Cime di Lavaredo Auronzo di Cadore'
        }
      },
      {
        id: '105-s2',
        category: 'spot',
        time: '14:45',
        name: '米蘇里納湖 (Lago di Misurina) 湖畔散步賞景',
        shortInfo: '湖畔散步 · 停留約 1 小時 · GPS: 46.536092, 12.139349',
        hasDetail: true,
        detail: {
          subtitle: '湖畔步道與咖啡館',
          duration: '停留約 1 小時',
          address: 'Lago di Misurina, 32041 Auronzo di Cadore BL, Italy (GPS: 46.536092, 12.139349)',
          description: '湖面可觀賞山峰倒影，步道平緩好走，設有木椅與咖啡座，適合停留散步拍照。',
          mapQuery: 'Lago di Misurina Auronzo di Cadore'
        }
      },
      {
        id: '105-s3',
        category: 'spot',
        time: '17:15',
        name: 'Azienda agricola Paolo Rossa 農場生鮮店',
        shortInfo: '木屋後方步行即達 · 新鮮高山蔬菜、雞蛋、起司與冷肉',
        hasDetail: true,
        detail: {
          subtitle: 'Vodo Cadore 在地高山農場直營店',
          hours: '營業至 20:30',
          address: 'Località Volto, 32040 Vodo Cadore BL, Italy',
          description: '緊鄰 Chalet del Capriolo 民宿後方，步行數分鐘即達。供應當天新鮮採摘蔬菜、土雞蛋、手工起司與風乾冷肉，是今晚自煮慶祝大餐的絕佳補給點！',
          mapQuery: 'Azienda agricola Paolo Rossa Vodo Cadore'
        }
      }
    ],
    foodItems: [
      {
        id: '105-f1',
        category: 'food',
        time: '18:30',
        name: '木屋原木廚房自煮慶祝晚餐',
        shortInfo: '農場鮮蔬、香煎牛排、起司沙拉與 DOC 紅酒',
        hasDetail: true,
        detail: {
          subtitle: '義大利多洛米蒂告別豐盛晚餐',
          address: 'Chalet del Capriolo 廚房',
          description: '利用頂樓公寓現代化廚房料理農場鮮蔬與牛排，共飲美酒，慶祝義大利山區壯遊圓滿，並整理跨國行李。',
          mapQuery: 'Chalet del Capriolo 108 Via Nazionale Vodo Cadore'
        }
      }
    ],
    hotelItems: [
      {
        id: '105-h1',
        category: 'hotel',
        name: 'Chalet del Capriolo',
        shortInfo: '續住第 3 晚 (義大利最後一夜)｜明日 08:30 退房',
        hasDetail: true,
        detail: {
          subtitle: '頂樓原木景觀公寓 · 專屬私人停車',
          address: '108 Via Nazionale, 32040 Vodo Cadore, Italy',
          phone: '+39 0435 489207',
          description: '續住第 3 晚。明日 08:30 退房，經 A27 高速自駕前往 Trieste Hertz 還車，銜接 12:20 FlixBus 跨國巴士前往克羅埃西亞 Zagreb。',
          mapQuery: 'Chalet del Capriolo 108 Via Nazionale Vodo Cadore'
        }
      }
    ],
    alertItems: [
      {
        id: '105-a1',
        category: 'alert',
        name: '三峰山收費公路 2025 線上預約管制',
        shortInfo: '收費 €40/小客車，2025 起須事先線上預約刷卡填入車牌，閘門辨識放行！',
        hasDetail: true,
        detail: {
          subtitle: '三峰山景觀公路通行新制守則',
          description: '由 Misurina 上山的收費公路（約 €40/車）實施車流總量管制。2025 年起必須事先於官網預約刷卡填入車牌，山頂車位額滿即封閉。請務必 07:45 出發！'
        }
      },
      {
        id: '105-a2',
        category: 'alert',
        name: '明日跨國前往克羅埃西亞整備',
        shortInfo: '明日 08:30 退房，11:15 前至 Trieste Hertz 還車，銜接 12:20 跨國巴士',
        hasDetail: true,
        detail: {
          subtitle: '10/06 跨國交通銜接注意',
          description: '明日需於 08:30 完成退房，經 A27 高速自駕前往 Trieste 還車（需滿油），步行至巴士總站搭乘 12:20 FlixBus N544 前往克羅埃西亞 Zagreb 與另外 2 位夥伴全員會合！'
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
  city: 'Trieste ➜ Zagreb (全員 5 人大會合)',
  subRoute: 'Chalet del Capriolo 退房 ➜ 自駕至 Trieste ➜ Hertz 還車 ➜ FlixBus 跨國巴士 ➜ 抵達 Zagreb ➜ 亞得里亞海鮮晚餐｜住 MANDA Heritage Hotel',
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
      shortInfo: 'Bus Station Silos, Piazza della Libertà 9',
      hasDetail: true,
      detail: {
        subtitle: '提前於 11:15 完成還車手續，安心銜接巴士',
        address: 'Piazza della Libertà 9 (Bus Station Silos) / Via Valdirivo 42, 34132 Trieste TS, Italy',
        phone: '+39 040 370420',
        description: '在 Piazza della Libertà 9 巴士總站旁的 Hertz 專用車道辦理還車手續。完成車輛檢查後步行 3 分鐘即達 Trieste 巴士總站。',
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
        subtitle: '跨國長途冷氣巴士 (約 3 小時 30 分 · 座位 4B, 4C, 4D)',
        hours: '12:20–15:50',
        ticket: '3 人車票確認號: 338 494 7118 (總額 €62.13)',
        address: 'Autobusni Kolodvor Zagreb, Avenija Marina Držića 4, 10000 Zagreb, Croatia',
        description: '12:20 從 Trieste 準時發車，舒適跨越斯洛維尼亞邊界，15:50 準時抵達克羅埃西亞首都 Zagreb 巴士總站。出站後使用 Bolt 叫車前往 MANDA Heritage Hotel。',
        mapQuery: 'Autobusni Kolodvor Zagreb'
      }
    },
    {
      id: '106-t5',
      category: 'traffic',
      time: '06:55',
      name: '高雄 2 人組：班機抵達 Zagreb ＆ 飯店會合',
      shortInfo: '卡達 QR215 06:55 抵達 Zagreb 機場 ➜ Bolt 叫車至飯店',
      hasDetail: true,
      detail: {
        subtitle: '高雄夥伴順利抵達克羅埃西亞首都',
        description: '10/5 由高雄出發，10/6 06:55 搭乘卡達航空 QR215 飛抵 Zagreb 機場，入境後搭乘 Bolt 叫車前往 MANDA Heritage Hotel 寄放行李並稍作休息，等待義大利 3 人組抵達！',
        mapQuery: 'Zagreb Airport'
      }
    }
  ],
  spotItems: [
    {
      id: '106-s1',
      category: 'spot',
      time: '17:00',
      name: '札格雷布歷史下城區漫步 ＆ 耶拉齊恰廣場',
      shortInfo: 'Ban Jelačić Square · 奧匈帝國優雅街景',
      hasDetail: true,
      detail: {
        subtitle: '全員 5 人首次漫步克羅埃西亞首都心臟',
        duration: '散步約 1 小時',
        address: 'Trg bana Josipa Jelačića, 10000 Zagreb, Croatia',
        description: '漫步於札格雷布最熱鬧的班·耶拉齊恰廣場，欣賞黃色古典路面電車與奧匈帝國風格建築，感受巴爾幹半島的獨特人文魅力。',
        mapQuery: 'Ban Jelacic Square Zagreb'
      }
    }
  ],
  foodItems: [
    {
      id: '106-f1',
      category: 'food',
      time: '18:30',
      name: 'Restoran Korčula 亞得里亞海鮮慶祝晚宴',
      shortInfo: '全員 5 人相見歡慶祝大餐 · 藍鰭金槍魚塔塔 · 黑墨魚燉飯',
      hasDetail: true,
      detail: {
        subtitle: '札格雷布市中心著名亞得里亞海鮮老字號',
        hours: '12:00–00:00',
        phone: '+385 1 4872 181',
        address: 'ul. Nikole Tesle 17, 10000 Zagreb, Croatia',
        description: '全員 5 人抵達克羅埃西亞首晚盛大慶祝晚宴！招牌推薦：亞得里亞海藍鰭金槍魚塔塔、傳統達爾馬提亞黑墨魚汁燉飯、香煎鱸魚排佐松露手工寬麵，搭配克羅埃西亞在地白葡萄酒。',
        mapQuery: 'Restoran Korcula Zagreb'
      }
    }
  ],
  hotelItems: [
    {
      id: '106-h1',
      category: 'hotel',
      name: 'MANDA Heritage Hotel (Zagreb)',
      shortInfo: '全員 5 人大會合！｜含早餐 · 2間套房',
      hasDetail: true,
      detail: {
        subtitle: 'Two-Bedroom Suite (4人) ＋ One-Bedroom Suite (1人) · 含早餐',
        address: 'Draškovićeva ulica 15a, 10000 Zagreb, Croatia',
        phone: '+385 1 4875 555',
        description: '入住札格雷布下城區典雅歷史精品飯店，高雄組與義大利組全員順利大會合！Agoda 訂單：#1765100933、#1765102246。',
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

// ==========================================
// 克羅埃西亞行程 (Day 10 ~ Day 17，10/7 ~ 10/14)
// 由 croatiaItinerary.ts 統一維護並動態轉換為二層結構
// ==========================================

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

  const CITY_DISPLAY_MAP: Record<number, string> = {
    10: 'Bled',
    11: 'Motovun',
    12: 'Pula',
    13: 'Motovun',
    14: 'Plitvice',
    15: 'Plitvice',
    16: 'Split',
    17: 'Split',
    18: 'Hvar',
    19: 'Tivat',
    20: 'Kotor',
    21: 'Dubrovnik',
    22: 'Dubrovnik',
    23: 'Dubrovnik',
    24: 'Malpensa',
    25: 'Milan',
    26: 'Malpensa'
  };
  const cityShort = CITY_DISPLAY_MAP[d.dayNum] || d.cityRegion.split('➜')[0].split('·')[0].split('(')[0].trim();
  const weekdayShort = d.weekday.split(' ')[0].replace('星期', '');

  const summarySection: DaySummarySection = {
    overview: d.chineseSubtitle || d.themeTitle || d.cityRegion,
    badges: d.highlights || [],
    suggestedFlow: d.todayRoute || []
  };

  const priceTicketItems: PriceTicketItem[] = [];
  if (d.dayNum === 10) {
    priceTicketItems.push(
      { title: '斯洛維尼亞 e-vinjeta (2A)', cost: '€16.00', detail: '一般轎車、SUV、多數小客車每週通行票' },
      { title: '斯洛維尼亞 e-vinjeta (2B)', cost: '€32.00', detail: '前軸高度超過 1.3 m 高車／部分 MPV' },
      { title: 'Hotel Park Bled 停車費', cost: '約 €12/天', detail: '布萊德湖畔私人停車場' }
    );
  } else if (d.dayNum === 11) {
    priceTicketItems.push(
      { title: 'Ljubljana 城堡纜車來回票', cost: '約 €6～12', detail: '中央市場 Krekov trg 搭乘' },
      { title: 'Villa Benvenuti 現金押金', cost: 'EUR 300', detail: '入住時收取現金，退房全額退還' }
    );
  } else if (d.dayNum === 12) {
    priceTicketItems.push(
      { title: '普拉競技場門票', cost: '約 €10/人', detail: '入內參觀古羅馬角鬥士場與地下博物館' },
      { title: 'Parking Riva 停車費', cost: '約 €1.50/小時', detail: 'Zone 2A，停 5～6 小時約 €7.50～9' }
    );
  } else if (d.dayNum === 13) {
    priceTicketItems.push(
      { title: 'Livade 松露獵尋活動', cost: '已預約 13:30', detail: '獵人與松露犬森林尋寶' }
    );
  } else if (d.dayNum === 14) {
    priceTicketItems.push(
      { title: '里耶卡 Parkiralište Delta', cost: '約 €0.80/小時', detail: '市中心大型收費停車場' },
      { title: 'Rastoke 水車村停車費', cost: '約 €2.00/小時', detail: 'Zone 1 景區停車場' }
    );
  } else if (d.dayNum === 15) {
    priceTicketItems.push(
      { title: '十六湖國家公園門票 (Entrance 2)', cost: '€23.00/人', detail: '預約 09:00～10:00 入園，含接駁車與渡輪 (票號 26439385626)' },
      { title: 'Entrance 2 停車場', cost: '約 €1.50/小時', detail: '國家公園第二入口停車場' }
    );
  } else if (d.dayNum === 16) {
    priceTicketItems.push(
      { title: '扎達爾老城停車 (Parking Ravnice)', cost: '約 €1.50/小時', detail: '陸門與老城外圍停車場' }
    );
  } else if (d.dayNum === 17) {
    priceTicketItems.push(
      { title: '特羅吉爾 T1 Parking', cost: '計時收費', detail: '24 小時開放，步行過木橋即入老城' },
      { title: '聖勞倫斯大教堂門票', cost: '約 €5/人', detail: 'UNESCO 核心建築與 Radovan 雕刻大門' }
    );
  } else if (d.dayNum === 18) {
    priceTicketItems.push(
      { title: 'Jadrolinija 635 渡輪 (Split ➜ Stari Grad)', cost: '已預訂', detail: '08:30 → 10:20 (航程 110 分鐘)' },
      { title: '聖史蒂芬主教座堂門票', cost: '€2.00/人', detail: '09:00–12:30、17:00–19:30' },
      { title: '特弗爾達利堡 Tvrdalj 門票', cost: '€5.00/人', detail: '詩人 Petar Hektorović 文藝復興宅邸' },
      { title: 'Dolac 1 公共停車場', cost: '計時收費', detail: '老城外圍 Dolac 停車場 (座標 5CFW+72)' }
    );
  } else if (d.dayNum === 19) {
    priceTicketItems.push(
      { title: 'Jadrolinija 632 渡輪 (Sućuraj ➜ Drvenik)', cost: '已含車輛', detail: '09:30 → 10:00 (航程 30 分鐘)' },
      { title: 'Mali Ston 歐洲扁牡蠣品嚐', cost: '依點餐計費', detail: '珍貴 OSTREA EDULIS 歐洲扁牡蠣' },
      { title: 'Kamenari–Lepetane 車渡', cost: '約 €5/車', detail: 'Verige 海峽汽車渡輪 (航程約 10 分鐘)' }
    );
  } else if (d.dayNum === 20) {
    priceTicketItems.push(
      { title: '岩上聖母島往返接駁船', cost: '約 €5～10/人', detail: 'Perast 碼頭搭乘小船往返 (島上 30～45 分)' },
      { title: 'Perast 北側停車費', cost: '計時收費', detail: 'Parking Hotel Heritage Grand Perast' }
    );
  } else if (d.dayNum === 21) {
    priceTicketItems.push(
      { title: 'Cavtat Parking Lot 停車費', cost: '€2.00/小時', detail: '隔壁 Studenac 商店購物可抵一小時' },
      { title: 'Dubrovnik Pass 三日卡', cost: '€50.00/人', detail: '含城牆、總督宮、斯邦札宮與公車乘車券' }
    );
  } else if (d.dayNum === 22) {
    priceTicketItems.push(
      { title: 'Dubrovnik Pass 三日券', cost: '已購買', detail: '涵蓋城牆、總督宮、修道院博物館與 Libertas 公車' },
      { title: 'Fort Lovrijenac 洛夫里耶納茨要塞', cost: 'Pass 免費', detail: '憑城牆門票或 Dubrovnik Pass 免費入內' },
      { title: 'Dubrovnik Cable Car / Uber', cost: '來回 €30 / Uber約€25', detail: '登 Srd 山頂俯瞰老城海天夕陽' }
    );
  } else if (d.dayNum === 23) {
    priceTicketItems.push(
      { title: '杜布羅夫尼克古城牆 (City Walls)', cost: 'Pass 涵蓋', detail: '全長 2 公里 · 最高 25 公尺 · 敏雀塔巡禮' },
      { title: 'Sponza Palace 斯邦札宮', cost: 'Pass 涵蓋', detail: '1667 大地震倖存建築 · 文藝復興迴廊' },
      { title: 'Rector’s Palace 總督宮', cost: 'Pass 涵蓋', detail: '拉古薩共和國行政中心與總督官邸' }
    );
  } else if (d.dayNum === 24) {
    priceTicketItems.push(
      { title: 'UNI RENT 還車手續', cost: '已付清', detail: '12:30 DBV 杜布羅夫尼克機場完成驗收還車' },
      { title: '瑞安航空 FR5935 (DBV ➜ BGY)', cost: '已付清', detail: '14:25 起飛 16:00 抵達 (直飛 1h35m · 5人含行李)' },
      { title: 'Hertz BGY 機場取車', cost: '已付清', detail: '17:00 取車 · 合約單號: L717EEC42A9 (含全險)' }
    );
  } else if (d.dayNum === 25) {
    priceTicketItems.push(
      { title: 'Serravalle Designer Outlet', cost: '免費入場', detail: '義大利最大 OUTLET · 300+ 品牌 30%～70% 折扣' },
      { title: '購物退稅 (滿 €70 可退)', cost: '退稅單記得拿', detail: '結帳主動索取 Tax Free 單據與核對姓名護照' }
    );
  } else if (d.dayNum === 26) {
    priceTicketItems.push(
      { title: 'MXP T1 Hertz 還車', cost: 'P2 Floor -1', detail: '跟隨 Autonoleggi 指標駛入 P2 停車場 Floor -1' },
      { title: '米蘭機場 12 號櫃檯退稅', cost: '先退稅再托運', detail: '滿 €70 退稅 · Global Blue / Planet 蓋章驗證' }
    );
  }

  return {
    dayNum: d.dayNum,
    dateKey: `${parseInt(d.month, 10)}/${parseInt(d.day, 10)}`,
    weekday: weekdayShort,
    city: cityShort,
    subRoute: `${d.themeTitle || d.cityRegion}｜住 ${d.hotelName}`,
    summarySection,
    priceTicketItems,
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
    summarySection: day.summarySection,
    priceTicketItems: day.priceTicketItems,
    orderedItems: [
      ...day.trafficItems,
      ...day.spotItems,
      ...day.foodItems,
      ...day.hotelItems
    ]
  };
}

// 包含 9/27 - 10/23 完整行程 (共 27 天，Day 0 ~ Day 26)
export const TWO_LAYER_DAYS: DayTwoLayer[] = [
  buildOrderedDay(DAY_0),
  ...ITALY_TWO_LAYER_DAYS.map(buildOrderedDay),
  buildOrderedDay(DAY_9),
  ...CROATIA_TWO_LAYER_DAYS.filter((d) => d.dayNum >= 10 && d.dayNum <= 26).map(buildOrderedDay)
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
