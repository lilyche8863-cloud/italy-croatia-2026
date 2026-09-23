import { DayItinerary } from './itineraryTypes';

export const CROATIA_ITINERARY_DAYS: DayItinerary[] = [
  // ==========================================
  // Day 9 / 10: 10/06 (TUE) ｜ VODO CADORE → TRIESTE → ZAGREB
  // ==========================================
  {
    dayNum: 9,
    date: '2026/10/06',
    dateDisplay: '10/06 (二)',
    month: '10',
    day: '06',
    weekday: '星期二 / TUE',
    cityRegion: 'Trieste (第里雅斯特) ➜ Zagreb (札格雷布)',
    themeTitle: '義大利提前還車 ＋ 跨國巴士前往札格雷布 ＋ 全員5人會合',
    englishDestination: 'TRIESTE → ZAGREB',
    chineseSubtitle: '義大利提前還車 ＋ 跨國巴士前往札格雷布 ＋ 全員5人會合',
    hotelName: 'MANDA Heritage Hotel',
    hotelRoomType: 'Two-Bedroom Suite (4人) ＋ One-Bedroom Suite (1人) · 含早餐',
    hotelAddress: 'Vlaška ulica 88, 10000 Zagreb, Croatia',
    hotelNote: '札格雷布下城區 · 5人2間套房 · 含早餐',
    region: 'italy',
    highlights: ['Chalet 退房', '自駕至 Trieste', 'Hertz 提前還車', 'FlixBus N544 (12:20 ➜ 15:50)', '入住 MANDA (全員會合)'],
    todayRoute: [
      'Chalet del Capriolo 08:00 退房',
      '自駕沿 A27 / A4 高速前往 Trieste (約 2.5 小時)',
      'Trieste 市區前 ENI 加油站滿油',
      '11:15 Hertz Trieste 提前還車 (Piazza della Libertà 9)',
      '步行至 Trieste Bus Station 候車',
      '12:20 FlixBus N544 跨國巴士出發',
      '15:50 抵達 Zagreb Central Bus Station',
      '入住 MANDA Heritage Hotel (與頭家娘/小花會合)'
    ],
    drivingRoute: {
      from: 'Vodo Cadore (Chalet del Capriolo)',
      to: 'Trieste (Hertz 門市)',
      distance: '約 185 km',
      duration: '約 2 小時 20 分',
      parkingSpot: 'Hertz Trieste 專用還車道 (Via Valdirivo 42 / Piazza della Libertà 9)',
      routeNote: '高速公路路況良好，注意 11:15 前務必抵達還車，以預留充裕時間搭乘 12:20 FlixBus。'
    },
    importantAlerts: [
      {
        title: '🚌 FlixBus 跨國巴士發車時間嚴格確認',
        type: 'traffic',
        content: 'FlixBus N544 於 12:20 準時由 Trieste 發車前往 Zagreb（確認號：338 494 7118）。請務必攜帶有效申根護照，預先準備好電子車票 QR Code 供司機查驗。'
      }
    ],
    timeline: [
      {
        time: '08:00',
        type: 'accommodation',
        title: '🏨 Chalet del Capriolo 整理行李與退房',
        badge: '告別多洛米蒂 (退房 08:00–09:00)',
        description: '收拾全套行李辦理退房，自駕啟程前往義大利東北部邊境海港第里雅斯特 (Trieste)。',
        duration: '30 分鐘',
        address: '108 Via Nazionale, 32040 Vodo Cadore BL, Italy',
        mapQuery: 'Chalet del Capriolo 108 Via Nazionale Vodo Cadore',
        phone: '+39 0435 489207'
      },
      {
        time: '08:30',
        type: 'transport',
        title: '🚗 自駕移動：Vodo Cadore ➜ Trieste (第里雅斯特)',
        badge: '車程約 2.5 小時 · 185 km',
        description: '沿著 A27 / A4 高速公路行駛，直達亞德里亞海濱門戶 Trieste 火車站旁 Silos 交通樞紐。',
        duration: '約 2 小時 20 分',
        address: 'Piazza della Libertà 9, 34135 Trieste TS, Italy',
        mapQuery: 'Trieste Piazza della Liberta'
      },
      {
        time: '10:45',
        type: 'gas',
        title: '⛽ Trieste 市區前加滿油箱 (滿油還車政策)',
        badge: '滿油還車整備',
        description: '於進城前將油箱加滿以符合租車滿油還車規定。',
        duration: '15 分鐘',
        address: 'Viale Miramare, 34136 Trieste TS, Italy',
        mapQuery: 'Gas Station Trieste Miramare',
        openingHours: '24 小時自助加油'
      },
      {
        time: '11:15',
        type: 'transport',
        title: '🚗 Hertz｜Trieste 提前還車 (銜接 12:20 跨國巴士)',
        badge: '提早還車無額外手續費',
        description: '在 Piazza della Libertà 9 巴士總站旁的 Hertz 專用車道辦理還車（為配合跨國巴士提早於 11:15 完成還車手續，安心銜接巴士）。',
        duration: '25 分鐘',
        address: 'Via Valdirivo 42, 34132 Trieste TS, Italy',
        mapQuery: 'Hertz Trieste Via Valdirivo',
        openingHours: '08:30–12:30, 15:00–18:30',
        phone: '+39 040 370420',
        actionLabel: '租車詳情',
        actionRoute: '/car-rental'
      },
      {
        time: '11:45',
        type: 'walk',
        title: '🚶 步行前往 Trieste Bus Station 候車月台',
        badge: '步行 3 分鐘',
        description: '提取全部行李前往 Trieste Bus Station Silos 候車區，備妥護照與車票 QR Code 準備登車。',
        duration: '30 分鐘候車',
        address: 'Piazza della Libertà 9, 34132 Trieste TS, Italy',
        mapQuery: 'Trieste Autostazione'
      },
      {
        time: '12:20 → 15:50',
        type: 'transport',
        title: '🚌 FlixBus N544 跨國巴士：Trieste ➜ Zagreb (札格雷布)',
        badge: '3 人車票確認號: 338 494 7118',
        description: '12:20 從 Trieste Bus Station 準時發車，舒適跨越斯洛維尼亞邊界，於 15:50 準時抵達克羅埃西亞首都 Zagreb Central Bus Station。',
        duration: '約 3 小時 30 分 (跨國行車)',
        address: 'Autobusni Kolodvor Zagreb, Avenija Marina Držića 4, 10000 Zagreb, Croatia',
        mapQuery: 'Autobusni Kolodvor Zagreb',
        openingHours: '巴士 12:20 準時發車'
      },
      {
        time: '16:20',
        type: 'accommodation',
        title: '🏨 入住：MANDA Heritage Hotel (全員 5 人大會合！)',
        badge: '5位成人 · 2間套房 · 含早餐',
        description: '入住札格雷布下城區典雅歷史精品飯店（Two-Bedroom Suite 4人 ＋ One-Bedroom Suite 1人，均含早餐）。頭家娘與小花抵達會合！Agoda 訂單：#1765100933、#1765102246。',
        duration: '入住休息',
        address: 'Draškovićeva ulica 15a, 10000 Zagreb, Croatia',
        mapQuery: 'Manda Heritage Hotel Zagreb',
        openingHours: '24 小時接待櫃檯 / 入住 15:00 後',
        phone: '+385 1 4875 555',
        actionLabel: '住宿詳情',
        actionRoute: '/accommodation'
      }
    ]
  },

  // ==========================================
  // Day 10 / 11: 10/07 (WED) ｜ ZAGREB → BLED (SLOVENIA)
  // ==========================================
  {
    dayNum: 10,
    date: '2026/10/07',
    dateDisplay: '10/07 (三)',
    month: '10',
    day: '07',
    weekday: '星期三 / WED',
    cityRegion: 'Zagreb ➜ Bled (斯洛維尼亞 布萊德湖)',
    themeTitle: '札格雷布取車 🚘 跨國自駕前往斯洛維尼亞・布萊德湖',
    englishDestination: 'ZAGREB → BLED (SLOVENIA)',
    chineseSubtitle: '札格雷布取車 🚘 跨國自駕前往斯洛維尼亞・布萊德湖',
    hotelName: 'Mia Dream',
    hotelRoomType: '景觀露台公寓 · 2晚連住 · 5位成人',
    hotelAddress: '4 Polje, 4260 Bled, Slovenia',
    hotelNote: '景觀露台公寓 · 2晚連住 · 5位成人',
    region: 'croatia',
    highlights: ['MANDA 早餐退房', 'Uni Rent 取車自駕', '布萊德傳統奶油蛋糕', '入住 Mia Dream', '布萊德湖畔夕陽'],
    todayRoute: [
      'MANDA Heritage 早餐',
      '辦理退房並前往 Uni Rent',
      '13:00 取 Mercedes V-Class 8人座',
      '自駕跨越邊境前往斯洛維尼亞 (約 2 小時)',
      '入住 Mia Dream 露台公寓',
      '漫步布萊德湖畔品嚐傳奇奶油蛋糕'
    ],
    timeline: [
      {
        time: '07:30',
        type: 'food',
        title: '🍴 MANDA Heritage 早餐時光',
        badge: '含 5 位現作早餐',
        description: '在下城區歷史精品飯店享用精緻早餐，補充自駕出發能量。'
      },
      {
        time: '08:30',
        type: 'accommodation',
        title: '🏨 MANDA Heritage Hotel 辦理退房',
        badge: 'Check-out',
        description: '行李收拾齊全，辦理退房並前往 Uni Rent 租車門市。'
      },
      {
        time: '13:00',
        type: 'transport',
        title: '🚘 Uni Rent 取車自駕 ➜ 跨國前往斯洛維尼亞 布萊德 (Bled)',
        badge: 'Mercedes V-Class 7+1人座',
        description: '前往 Kranjčevićeva 46 取車，裝載全員行李後出發，沿風景公路跨國前往斯洛維尼亞度假仙境布萊德湖 (車程約 2 小時)。',
        address: 'Kranjčevićeva 46, 10000 Zagreb, Croatia',
        mapQuery: 'Uni Rent Zagreb Kranjceviceva 46',
        actionLabel: '租車詳情',
        actionRoute: '/car-rental'
      },
      {
        time: '15:30',
        type: 'accommodation',
        title: '🏨 入住：Mia Dream (布萊德景觀露台公寓 · 2晚連住)',
        badge: '5位成人 · 景觀露台 · 免費停車',
        description: '入住 4 Polje 景觀公寓，附完整廚房、露台與免費私人停車。訂單確認碼：5707.826.567。',
        address: '4 Polje, 4260 Bled, Slovenia',
        mapQuery: '4 Polje 4260 Bled Slovenia',
        actionLabel: '住宿詳情',
        actionRoute: '/accommodation'
      },
      {
        time: '17:00',
        type: 'activity',
        title: '📷 布萊德湖畔漫步 ＆ 品嚐正統布萊德奶油蛋糕',
        badge: 'Kremna Rezina',
        description: '漫步於翡翠般的湖畔散步道，並在湖畔露天咖啡座享用傳奇千層奶油蛋糕。',
        address: 'Lake Bled, 4260 Bled, Slovenia'
      }
    ]
  },

  // ==========================================
  // Day 11 / 12: 10/08 (THU) ｜ BLED (SLOVENIA)
  // ==========================================
  {
    dayNum: 11,
    date: '2026/10/08',
    dateDisplay: '10/08 (四)',
    month: '10',
    day: '08',
    weekday: '星期四 / THU',
    cityRegion: 'Lake Bled & Vintgar (布萊德湖 ＆ 文特加峽谷)',
    themeTitle: '湖心聖母島 🛶 懸崖古堡 ＆ 文特加峽谷健行',
    englishDestination: 'LAKE BLED & VINTGAR GORGE',
    chineseSubtitle: '湖心聖母島 🛶 懸崖古堡 ＆ 文特加峽谷健行',
    hotelName: 'Mia Dream',
    hotelRoomType: '景觀露台公寓 · 續住第 2 晚',
    hotelAddress: '4 Polje, 4260 Bled, Slovenia',
    hotelNote: '續住第 2 晚 · 景觀露台公寓',
    region: 'croatia',
    highlights: ['Pletna 木船湖心島', '布萊德城堡 Bled Castle', '文特加峽谷 Vintgar', '夜宿 Mia Dream'],
    todayRoute: [
      'Pletna 傳統木船登湖心島',
      '敲響聖母升天教堂祈福鐘',
      '登布萊德懸崖古堡俯瞰全景',
      '文特加峽谷木棧道健行',
      '夜宿 Mia Dream'
    ],
    timeline: [
      {
        time: '09:00',
        type: 'activity',
        title: '🛶 搭乘傳統 Pletna 搖櫓木船登布萊德湖心島 (Bled Island)',
        badge: '敲響許願鐘',
        description: '搭乘無污染木造小船登上湖心島，走過 99 階石梯，在聖母升天教堂親手敲響祈福鐘。',
        address: 'Blejski otok, 4260 Bled, Slovenia'
      },
      {
        time: '11:30',
        type: 'activity',
        title: '📷 布萊德城堡 (Bled Castle) 懸崖俯瞰全景',
        badge: '千年古堡',
        description: '矗立於 130 公尺高的陡峭懸崖上，居高臨下將整座布萊德湖與雪山美景盡收眼底。',
        address: 'Grajska cesta 61, 4260 Bled, Slovenia'
      },
      {
        time: '14:00',
        type: 'walk',
        title: '🚶 文特加峽谷 (Vintgar Gorge) 清幽木棧道健行',
        badge: '自然奇觀',
        description: '穿梭於 Radovna 河切鑿出的壯麗峽谷木棧道，欣賞清澈碧綠激流與 13 公尺高的 Šum 瀑布。',
        address: 'Podhom 80, 4260 Bled, Slovenia'
      }
    ]
  },

  // ==========================================
  // Day 12 / 13: 10/09 (FRI) ｜ BLED → ISTRIA
  // ==========================================
  {
    dayNum: 12,
    date: '2026/10/09',
    dateDisplay: '10/09 (五)',
    month: '10',
    day: '09',
    weekday: '星期五 / FRI',
    cityRegion: 'Bled ➜ Istria (伊斯特利亞半島 · 布耶 ＆ 莫托文)',
    themeTitle: '布萊德 🚘 跨國自駕前往伊斯特利亞半島・布耶 & 莫托文',
    englishDestination: 'BLED → ISTRIA (BUJE & MOTOVUN)',
    chineseSubtitle: '布萊德 🚘 跨國自駕前往伊斯特利亞半島・布耶 & 莫托文',
    hotelName: 'Villa Linda by Rent Istria',
    hotelRoomType: '3臥室獨棟泳池Villa · 2晚連住 · 私人泳池',
    hotelAddress: 'Brolo 2, 52460 Buje, Croatia',
    hotelNote: '3臥室獨棟泳池Villa · 2晚連住 · 私人泳池',
    region: 'croatia',
    highlights: ['Mia Dream 退房', '跨國自駕', '莫托文松露山城', '入住 Villa Linda'],
    todayRoute: [
      'Mia Dream 退房出發',
      '跨越邊境前往克羅埃西亞伊斯特利亞半島',
      '莫托文 (Motovun) 山城享用松露饗宴',
      '入住 Villa Linda 獨棟泳池別墅'
    ],
    timeline: [
      {
        time: '09:00',
        type: 'accommodation',
        title: '🏨 Mia Dream 退房出發',
        badge: '跨國自駕',
        description: '整理行李辦理退房，自駕南下跨越斯洛維尼亞－克羅埃西亞邊境，前往伊斯特利亞半島。'
      },
      {
        time: '12:30',
        type: 'food',
        title: '🍴 莫托文 (Motovun) 山城品嚐伊斯特利亞黑松露料理',
        badge: '松露之鄉',
        description: '中世紀山城莫托文以頂級松露聞名，在景觀餐廳品嚐現刨松露手工寬麵 (Fuži) 與松露料理。',
        address: 'Motovun, Croatia'
      },
      {
        time: '15:30',
        type: 'accommodation',
        title: '🏨 入住：Villa Linda by Rent Istria (獨棟泳池Villa · 2晚連住)',
        badge: '5位成人 · 私人泳池 · 洗衣機',
        description: '入住布耶橄欖林間的三臥室獨立別墅，附私人泳池、戶外露台與完整廚房。Booking.com 確認碼：6322.114.495。',
        address: 'Brolo 2, 52460 Buje, Croatia',
        mapQuery: 'Brolo 2 52460 Buje Croatia',
        actionLabel: '住宿詳情',
        actionRoute: '/accommodation'
      }
    ]
  },

  // ==========================================
  // Day 13 / 14: 10/10 (SAT) ｜ ROVINJ & PULA
  // ==========================================
  {
    dayNum: 13,
    date: '2026/10/10',
    dateDisplay: '10/10 (六)',
    month: '10',
    day: '10',
    weekday: '星期六 / SAT',
    cityRegion: 'Rovinj & Pula (羅維尼 ＆ 普拉)',
    themeTitle: '伊斯特利亞精華：羅維尼蔚藍漁港 ＆ 普拉羅馬競技場',
    englishDestination: 'ROVINJ & PULA',
    chineseSubtitle: '伊斯特利亞精華：羅維尼蔚藍漁港 ＆ 普拉羅馬競技場',
    hotelName: 'Villa Linda by Rent Istria',
    hotelRoomType: '續住第 2 晚 · 泳池別墅',
    hotelAddress: 'Brolo 2, 52460 Buje, Croatia',
    hotelNote: '續住第 2 晚 · 泳池別墅',
    region: 'croatia',
    highlights: ['羅維尼 Rovinj', '聖尤菲米亞教堂', '普拉競技場 Pula Arena', '夜宿 Villa Linda'],
    todayRoute: [
      '自駕至威尼斯風格古城羅維尼 (Rovinj)',
      '登頂聖尤菲米亞教堂俯瞰 360° 蔚藍海景',
      '開車前往普拉 (Pula)',
      '參觀普拉圓形競技場 (Pula Arena)',
      '返回 Villa Linda 休息'
    ],
    timeline: [
      {
        time: '09:30',
        type: 'activity',
        title: '📷 羅維尼 (Rovinj) 舊城彩色石板巷弄與聖尤菲米亞教堂',
        badge: '亞德里亞海明珠',
        description: '威尼斯風格彩色老城，登頂聖尤菲米亞教堂俯瞰 360 度蔚藍海景。',
        address: 'Rovinj Old Town, Croatia'
      },
      {
        time: '14:30',
        type: 'activity',
        title: '📷 普拉圓形競技場 (Pula Arena) 古羅馬角鬥士劇場',
        badge: '世界六大羅馬競技場',
        description: '建於西元一世紀，全球保存最完整的全石造外牆羅馬競技場。',
        address: 'Flavijevska ul. bb, 52100 Pula, Croatia'
      }
    ]
  },

  // ==========================================
  // Day 14 / 15: 10/11 (SUN) ｜ ISTRIA → PLITVICE LAKES
  // ==========================================
  {
    dayNum: 14,
    date: '2026/10/11',
    dateDisplay: '10/11 (日)',
    month: '10',
    day: '11',
    weekday: '星期日 / SUN',
    cityRegion: 'Istria ➜ Plitvice Lakes (十六湖國家公園區)',
    themeTitle: '伊斯特利亞 🚘 十六湖國家公園區 (Plitvice / Rakovica)',
    englishDestination: 'ISTRIA → PLITVICE LAKES',
    chineseSubtitle: '伊斯特利亞 🚘 十六湖國家公園區 (Plitvice / Rakovica)',
    hotelName: 'Charming house Maša',
    hotelRoomType: '雙臥室森林別墅 · 2晚連住 · 5位成人',
    hotelAddress: 'Čatrnja 168, 47245 Rakovica, Croatia',
    hotelNote: '雙臥室森林別墅 · 2晚連住 · 5位成人',
    region: 'croatia',
    highlights: ['Villa Linda 退房', '十六湖下湖區探訪', '大瀑布 Veliki Slap', '入住 Charming house Maša'],
    todayRoute: [
      'Villa Linda 退房出發',
      '自駕前往十六湖國家公園區 (約 2.5 小時)',
      '入住 Rakovica 森林別墅 Charming house Maša'
    ],
    timeline: [
      {
        time: '08:30',
        type: 'accommodation',
        title: '🏨 Villa Linda 退房出發',
        badge: '前往十六湖',
        description: '退房後啟程前往世界自然遺產十六湖國家公園區 (車程約 2.5 小時)。'
      },
      {
        time: '15:30',
        type: 'accommodation',
        title: '🏨 入住：Charming house Maša (2晚連住)',
        badge: '雙臥室森林別墅 · 廚房/洗衣機',
        description: '入住 Rakovica 寧靜森林木屋，附全套廚房與私人庭院。Booking.com 確認碼：5045.281.332。',
        address: 'Čatrnja 168, 47245 Rakovica, Croatia',
        mapQuery: 'Catrnja 168 Rakovica Croatia',
        actionLabel: '住宿詳情',
        actionRoute: '/accommodation'
      }
    ]
  },

  // ==========================================
  // Day 15 / 16: 10/12 (MON) ｜ PLITVICE LAKES
  // ==========================================
  {
    dayNum: 15,
    date: '2026/10/12',
    dateDisplay: '10/12 (一)',
    month: '10',
    day: '12',
    weekday: '星期一 / MON',
    cityRegion: 'Plitvice Lakes (十六湖國家公園)',
    themeTitle: '十六湖國家公園 · 上下湖群與大瀑布全日健行',
    englishDestination: 'PLITVICE LAKES NATIONAL PARK',
    chineseSubtitle: '十六湖國家公園 · 上下湖群與大瀑布全日健行',
    hotelName: 'Charming house Maša',
    hotelRoomType: '續住第 2 晚 · 森林別墅',
    hotelAddress: 'Čatrnja 168, 47245 Rakovica, Croatia',
    hotelNote: '續住第 2 晚 · 森林別墅',
    region: 'croatia',
    highlights: ['十六湖全景健行', '搭乘環保電船', '大瀑布 Veliki Slap', '木屋星空夜'],
    todayRoute: [
      '十六湖下湖區木棧道健行',
      '大瀑布 (Veliki Slap) 壯觀全景',
      '搭乘環保電動接駁船橫渡湖面',
      '漫步上湖區階梯湖泊群',
      '返回 Charming house Maša'
    ],
    timeline: [
      {
        time: '08:30',
        type: 'walk',
        title: '🚶 十六湖國家公園全景木棧道健行',
        badge: '世界自然遺產',
        description: '搭乘景觀電動接駁船與高山全景列車，漫步上湖群與下湖群十六座階梯狀碧綠湖泊與瀑布群。',
        address: 'Plitvice Lakes National Park, Croatia'
      }
    ]
  },

  // ==========================================
  // Day 16 / 17: 10/13 (TUE) ｜ PLITVICE → ZADAR → SPLIT
  // ==========================================
  {
    dayNum: 16,
    date: '2026/10/13',
    dateDisplay: '10/13 (二)',
    month: '10',
    day: '13',
    weekday: '星期二 / TUE',
    cityRegion: 'Plitvice ➜ Zadar ➜ Split (斯普利特)',
    themeTitle: '十六湖 🚘 札達爾海風琴 ➜ 斯普利特',
    englishDestination: 'PLITVICE → ZADAR → SPLIT',
    chineseSubtitle: '十六湖 🚘 札達爾海風琴 ➜ 斯普利特',
    hotelName: 'Apartment Blue & White',
    hotelRoomType: '海景露台公寓 · 1晚 · 5位成人',
    hotelAddress: 'Put Radoševca 11, 21000 Split, Croatia',
    hotelNote: '海景露台公寓 · 1晚 · 5位成人',
    region: 'croatia',
    highlights: ['扎達爾海風琴', '城市光廊', '抵達斯普利特', '入住 Blue & White'],
    todayRoute: [
      'Charming house Maša 退房出發',
      '自駕前往札達爾海港 (Zadar)',
      '聆聽世界唯一「海風琴」海浪樂章',
      '自駕南下抵達斯普利特 (Split)',
      '入住 Apartment Blue & White 海景公寓'
    ],
    timeline: [
      {
        time: '09:00',
        type: 'accommodation',
        title: '🏨 Charming house Maša 退房出發',
        badge: '南下達爾馬提亞',
        description: '整理行李啟程前往亞德里亞海港札達爾 (Zadar)。'
      },
      {
        time: '11:00',
        type: 'activity',
        title: '📷 札達爾 (Zadar) 海風琴 (Sea Organ) 與太陽敬禮',
        badge: '世界唯一大自然樂器',
        description: '坐在海邊石階上聆聽海浪推動管風琴演奏出的悠揚天籟。',
        address: 'Zadar Sea Organ, Croatia'
      },
      {
        time: '16:00',
        type: 'accommodation',
        title: '🏨 入住：Apartment Blue & White (斯普利特 · 1晚)',
        badge: '海景露台 · 5位成人',
        description: '入住斯普利特現代化海景公寓。Booking.com 確認碼：5508.850.157。',
        address: 'Put Radoševca 11, 21000 Split, Croatia',
        mapQuery: 'Put Radosevca 11 21000 Split Croatia',
        actionLabel: '住宿詳情',
        actionRoute: '/accommodation'
      }
    ]
  },

  // ==========================================
  // Day 17 / 18: 10/14 (WED) ｜ SPLIT → HVAR
  // ==========================================
  {
    dayNum: 17,
    date: '2026/10/14',
    dateDisplay: '10/14 (三)',
    month: '10',
    day: '14',
    weekday: '星期三 / WED',
    cityRegion: 'Split ➜ Hvar Island (赫瓦爾島)',
    themeTitle: '斯普利特 ⛴ 汽車渡輪前往陽光薰衣草之島・赫瓦爾島',
    englishDestination: 'SPLIT → HVAR ISLAND',
    chineseSubtitle: '斯普利特 ⛴ 汽車渡輪前往陽光薰衣草之島・赫瓦爾島',
    hotelName: 'Pharos Hvar Bayhill Hotel',
    hotelRoomType: '海灣度假酒店 · 2間客房 · 含早餐 · 2晚連住',
    hotelAddress: 'Ulica Dinka Kovacevica 10, 21450 Hvar, Croatia',
    hotelNote: '海灣度假酒店 · 2間客房 · 含早餐 · 2晚連住',
    region: 'croatia',
    highlights: ['Jadrolinija 汽車渡輪', '赫瓦爾島', '入住 Pharos Hvar', '赫瓦爾城堡日落'],
    todayRoute: [
      'Split 港口搭乘 Jadrolinija 汽車渡輪',
      '抵達 Stari Grad 港口',
      '自駕至赫瓦爾城入住 Pharos Hvar Bayhill Hotel',
      '古城與遊艇海灣夕陽漫步'
    ],
    timeline: [
      {
        time: '11:00',
        type: 'ferry',
        title: '⛴ Jadrolinija 汽車渡輪：Split ➜ Stari Grad (Hvar)',
        badge: '汽車連人登船',
        description: '搭乘大型汽車渡輪橫跨亞德里亞海抵達赫瓦爾島舊城港 (車程約 2 小時)。',
        address: 'Split Ferry Port',
        actionLabel: '船班詳情',
        actionRoute: '/car-rental'
      },
      {
        time: '15:00',
        type: 'accommodation',
        title: '🏨 入住：Pharos Hvar Bayhill Hotel (2晚連住)',
        badge: '2間客房 · 5位成人 · 含早餐',
        description: '入住赫瓦爾海灣時尚度假酒店，附戶外泳池、酒吧與花園。Booking.com 確認碼：5094.498.423。',
        address: 'Ulica Dinka Kovacevica 10, 21450 Hvar, Croatia',
        mapQuery: 'Pharos Hvar Bayhill Hotel',
        actionLabel: '住宿詳情',
        actionRoute: '/accommodation'
      }
    ]
  },

  // ==========================================
  // Day 18 / 19: 10/15 (THU) ｜ HVAR ISLAND
  // ==========================================
  {
    dayNum: 18,
    date: '2026/10/15',
    dateDisplay: '10/15 (四)',
    month: '10',
    day: '15',
    weekday: '星期四 / THU',
    cityRegion: 'Hvar Island (赫瓦爾島)',
    themeTitle: '赫瓦爾島探索 ＆ 西班牙要塞全景',
    englishDestination: 'HVAR ISLAND & PAKLENI',
    chineseSubtitle: '赫瓦爾島探索 ＆ 西班牙要塞全景',
    hotelName: 'Pharos Hvar Bayhill Hotel',
    hotelRoomType: '續住第 2 晚 · 含早餐',
    hotelAddress: 'Ulica Dinka Kovacevica 10, 21450 Hvar, Croatia',
    hotelNote: '續住第 2 晚 · 含早餐',
    region: 'croatia',
    highlights: ['西班牙要塞 Fortica', '赫瓦爾大廣場', '聖史蒂芬大教堂', '帕克萊尼群島'],
    todayRoute: [
      '登上西班牙要塞 (Fortica Španjola)',
      '眺望紅瓦海灣與外海帕克萊尼群島',
      '漫步赫瓦爾大廣場與歷史古城石巷',
      '享受島嶼咖啡與海邊悠閒時光'
    ],
    timeline: [
      {
        time: '09:30',
        type: 'activity',
        title: '📷 登上西班牙要塞 (Fortica Španjola) 俯瞰紅瓦海灣',
        badge: '赫瓦爾最美視角',
        description: '登上 16 世紀山頂要塞，俯瞰赫瓦爾古城、遊艇碼頭與外海帕克萊尼群島。',
        address: 'Fortica Španjola, Hvar, Croatia'
      }
    ]
  },

  // ==========================================
  // Day 19 / 20: 10/16 (FRI) ｜ HVAR → DUBROVNIK
  // ==========================================
  {
    dayNum: 19,
    date: '2026/10/16',
    dateDisplay: '10/16 (五)',
    month: '10',
    day: '16',
    weekday: '星期五 / FRI',
    cityRegion: 'Hvar ➜ Pelješac ➜ Dubrovnik (杜布羅夫尼克)',
    themeTitle: '赫瓦爾島 ⛴ 杜布羅夫尼克「亞德里亞海之珠」',
    englishDestination: 'HVAR → DUBROVNIK',
    chineseSubtitle: '赫瓦爾島 ⛴ 杜布羅夫尼克「亞德里亞海之珠」',
    hotelName: 'Boutique Villa V Lux',
    hotelRoomType: '3間客房 · 5位成人 · 4晚連住',
    hotelAddress: 'Cavtatska 17, Gornji Kono, 20000 Dubrovnik, Croatia',
    hotelNote: '3間客房 · 5位成人 · 4晚連住',
    region: 'croatia',
    highlights: ['Sućuraj 渡輪', '佩萊沙治大橋', '抵達杜布羅夫尼克', '入住 Villa V Lux'],
    todayRoute: [
      '搭乘 Sućuraj 渡輪回到克國本土',
      '自駕跨越佩萊沙治大橋 (Pelješac Bridge)',
      '抵達君臨城杜布羅夫尼克',
      '入住 Boutique Villa V Lux (4晚連住)'
    ],
    timeline: [
      {
        time: '10:00',
        type: 'ferry',
        title: '⛴ 渡輪：Sućuraj ➜ Drvenik 回到克國本土',
        badge: '短程渡輪',
        description: '搭乘渡輪 35 分鐘返回本土，經佩萊沙治大橋 (Pelješac Bridge) 前往杜布羅夫尼克。'
      },
      {
        time: '16:00',
        type: 'accommodation',
        title: '🏨 入住：Boutique Villa V Lux (4晚連住)',
        badge: '3間客房 · 5位成人 · 近老城',
        description: '入住杜布羅夫尼克老城旁精品別墅。Booking.com 確認碼：5874.195.032。',
        address: 'Cavtatska 17, Gornji Kono, 20000 Dubrovnik, Croatia',
        mapQuery: 'Cavtatska 17 20000 Dubrovnik Croatia',
        actionLabel: '住宿詳情',
        actionRoute: '/accommodation'
      }
    ]
  },

  // ==========================================
  // Day 20 / 21: 10/17 (SAT) ｜ DUBROVNIK OLD TOWN
  // ==========================================
  {
    dayNum: 20,
    date: '2026/10/17',
    dateDisplay: '10/17 (六)',
    month: '10',
    day: '17',
    weekday: '星期六 / SAT',
    cityRegion: 'Dubrovnik (杜布羅夫尼克老城)',
    themeTitle: '杜布羅夫尼克 · 千年古城牆漫步 ＆ 君臨城巡禮',
    englishDestination: 'DUBROVNIK OLD TOWN',
    chineseSubtitle: '杜布羅夫尼克 · 千年古城牆漫步 ＆ 君臨城巡禮',
    hotelName: 'Boutique Villa V Lux',
    hotelRoomType: '續住第 2 晚 · 3間客房',
    hotelAddress: 'Cavtatska 17, Gornji Kono, 20000 Dubrovnik, Croatia',
    hotelNote: '續住第 2 晚 · 3間客房',
    region: 'croatia',
    highlights: ['杜布羅夫尼克古城牆', '史特拉敦大道', '總督宮', '洛夫里耶奈克要塞'],
    todayRoute: [
      '杜布羅夫尼克 2 公里古城牆巡禮',
      '俯瞰紅瓦屋頂與無垠亞德里亞海',
      '漫步史特拉敦大道 (Stradun)',
      '參觀總督宮與洛夫里耶奈克要塞'
    ],
    timeline: [
      {
        time: '09:00',
        type: 'walk',
        title: '🚶 杜布羅夫尼克古城牆 (City Walls) 壯麗巡禮',
        badge: '世界文化遺產',
        description: '漫步全長 2 公里的古城牆，俯瞰壯闊的亞德里亞海與整齊的紅色屋瓦屋頂。',
        address: 'Dubrovnik Old Town Walls'
      }
    ]
  },

  // ==========================================
  // Day 21 / 22: 10/18 (SUN) ｜ DUBROVNIK & MT. SRĐ
  // ==========================================
  {
    dayNum: 21,
    date: '2026/10/18',
    dateDisplay: '10/18 (日)',
    month: '10',
    day: '18',
    weekday: '星期日 / SUN',
    cityRegion: 'Dubrovnik & Mt. Srđ (塞爾德山)',
    themeTitle: '塞爾德山纜車夕陽 ＆ 洛夫里耶奈克要塞',
    englishDestination: 'DUBROVNIK & MT. SRĐ',
    chineseSubtitle: '塞爾德山纜車夕陽 ＆ 洛夫里耶奈克要塞',
    hotelName: 'Boutique Villa V Lux',
    hotelRoomType: '續住第 3 晚 · 3間客房',
    hotelAddress: 'Cavtatska 17, Gornji Kono, 20000 Dubrovnik, Croatia',
    hotelNote: '續住第 3 晚 · 3間客房',
    region: 'croatia',
    highlights: ['塞爾德山觀景台 Mt. Srđ', '杜布羅夫尼克纜車', '夕陽全景', '海鮮晚宴'],
    todayRoute: [
      '搭乘纜車登上海拔 412m 塞爾德山頂',
      '俯瞰古城、洛克魯姆島與落日餘暉',
      '老城海鮮餐廳享用豐盛晚宴'
    ],
    timeline: [
      {
        time: '16:00',
        type: 'cablecar',
        title: '🚡 搭乘纜車登塞爾德山頂 (Mt. Srđ) 眺望亞德里亞海夕陽',
        badge: '經典全景',
        description: '在海拔 412 公尺的觀景台飽覽杜布羅夫尼克古城、洛克魯姆島與落日金光。',
        address: 'Dubrovnik Cable Car'
      }
    ]
  },

  // ==========================================
  // Day 22 / 23: 10/19 (MON) ｜ DUBROVNIK 自由慢遊
  // ==========================================
  {
    dayNum: 22,
    date: '2026/10/19',
    dateDisplay: '10/19 (一)',
    month: '10',
    day: '19',
    weekday: '星期一 / MON',
    cityRegion: 'Dubrovnik (自由探索 / 科托爾一日遊)',
    themeTitle: '杜布羅夫尼克自由漫步 / 黑山科托爾灣一日遊',
    englishDestination: 'DUBROVNIK (自由探索 / 科托爾一日遊)',
    chineseSubtitle: '杜布羅夫尼克自由漫步 / 黑山科托爾灣一日遊',
    hotelName: 'Boutique Villa V Lux',
    hotelRoomType: '續住第 4 晚 · 3間客房',
    hotelAddress: 'Cavtatska 17, Gornji Kono, 20000 Dubrovnik, Croatia',
    hotelNote: '續住第 4 晚 · 3間客房',
    region: 'croatia',
    highlights: ['老城悠閒漫步', '洛克魯姆島 Lokrum', '紀念品採購', '最後一晚夜宿杜城'],
    todayRoute: [
      '杜布羅夫尼克老城深度漫步',
      '採買在地橄欖油、蜂蜜與伴手禮',
      '海景咖啡座度過悠閒下午'
    ],
    timeline: [
      {
        time: '全日',
        type: 'activity',
        title: '📷 杜布羅夫尼克老城深度探索與海邊放鬆',
        badge: '自由慢遊',
        description: '穿梭古老石板小徑，品嚐冰淇淋與海邊咖啡，享受杜城最後的悠閒時光。'
      }
    ]
  },

  // ==========================================
  // Day 23 / 24: 10/20 (TUE) ｜ DUBROVNIK → ZAGREB
  // ==========================================
  {
    dayNum: 23,
    date: '2026/10/20',
    dateDisplay: '10/20 (二)',
    month: '10',
    day: '20',
    weekday: '星期二 / TUE',
    cityRegion: 'Dubrovnik ➜ Zagreb (札格雷布)',
    themeTitle: '自駕北返札格雷布 ＋ 還車 ＋ 全員圓滿完成巴爾幹自駕',
    englishDestination: 'DUBROVNIK → ZAGREB',
    chineseSubtitle: '自駕北返札格雷布 ＋ 還車 ＋ 全員圓滿完成巴爾幹自駕',
    hotelName: 'Hotel Dubrovnik',
    hotelRoomType: '市中心總督廣場旁 · 2間客房 · 含早餐',
    hotelAddress: 'Ljudevita Gaja 1, 10000 Zagreb, Croatia',
    hotelNote: '市中心總督廣場旁 · 2間客房 · 含早餐',
    region: 'croatia',
    highlights: ['Villa V Lux 退房', '北返自駕', 'Uni Rent 還車', '入住 Hotel Dubrovnik'],
    todayRoute: [
      'Villa V Lux 退房出發',
      '自駕北上返回札格雷布 (Zagreb)',
      'Uni Rent 門市完成還車',
      '入住總督廣場旁 Hotel Dubrovnik'
    ],
    timeline: [
      {
        time: '08:30',
        type: 'transport',
        title: '🚘 自駕北返札格雷布 ➜ Uni Rent 還車',
        badge: '圓滿完成自駕',
        description: '抵達 Zagreb 門市順利完成還車手續。',
        address: 'Kranjčevićeva 46, Zagreb'
      },
      {
        time: '17:30',
        type: 'accommodation',
        title: '🏨 入住：Hotel Dubrovnik (市中心總督廣場旁 · 1晚)',
        badge: '2間客房 · 5位成人 · 含早餐',
        description: '入住歷史核心四星級飯店。Booking.com 確認碼：5709.845.850。',
        address: 'Ljudevita Gaja 1, 10000 Zagreb, Croatia',
        mapQuery: 'Hotel Dubrovnik Zagreb',
        actionLabel: '住宿詳情',
        actionRoute: '/accommodation'
      }
    ]
  },

  // ==========================================
  // Day 24 / 25: 10/21 (WED) ｜ ZAGREB → MILAN (MXP)
  // ==========================================
  {
    dayNum: 24,
    date: '2026/10/21',
    dateDisplay: '10/21 (三)',
    month: '10',
    day: '21',
    weekday: '星期三 / WED',
    cityRegion: 'Zagreb ✈ Milan (米蘭)',
    themeTitle: '搭機飛往米蘭 ＋ Hertz 短租 ＋ 機場周邊住宿',
    englishDestination: 'ZAGREB → MILAN (MXP)',
    chineseSubtitle: '搭機飛往米蘭 ＋ Hertz 短租 ＋ 機場周邊住宿',
    hotelName: 'Sleep & Fly Malpensa',
    hotelRoomType: '機場周邊公寓 · 2間公寓 · 5位成人',
    hotelAddress: 'Via Giuseppe Garibaldi 3, 21010 Cardano al Campo, Italy',
    hotelNote: '機場周邊公寓 · 2間公寓 · 5位成人',
    region: 'italy',
    highlights: ['札格雷布搭機', '抵達米蘭 MXP', 'Hertz 米蘭短租取車', '入住 Sleep & Fly'],
    todayRoute: [
      'Zagreb 機場搭機飛往米蘭 (MXP)',
      'Hertz MXP T1 櫃檯取短租車',
      '入住 Sleep & Fly Malpensa 公寓'
    ],
    timeline: [
      {
        time: '15:30',
        type: 'transport',
        title: '✈ 班機抵達米蘭馬爾彭薩機場 (MXP)',
        badge: '抵達米蘭',
        description: '抵達 MXP 機場領取行李。'
      },
      {
        time: '17:00',
        type: 'transport',
        title: '🚗 Hertz 米蘭短租取車 (MXP T1 門市)',
        badge: 'Confirmation: L679F128639',
        description: '辦理 10/21–10/22 短租取車（Ford Puma 自排，€86.73）。',
        address: 'Malpensa Airport Terminal 1',
        actionLabel: '租車詳情',
        actionRoute: '/car-rental'
      },
      {
        time: '18:00',
        type: 'accommodation',
        title: '🏨 入住：Sleep & Fly Malpensa (2間公寓 · 5人)',
        badge: '機場周邊住宿',
        description: '入住離機場僅 5 分鐘車程的公寓。Booking.com 確認碼：5048.910.150。',
        address: 'Via Giuseppe Garibaldi 3, 21010 Cardano al Campo, Italy',
        mapQuery: 'Via Giuseppe Garibaldi 3 Cardano al Campo Italy',
        actionLabel: '住宿詳情',
        actionRoute: '/accommodation'
      }
    ]
  },

  // ==========================================
  // Day 25 / 26: 10/22 (THU) ｜ MILAN → TAIPEI (返程)
  // ==========================================
  {
    dayNum: 25,
    date: '2026/10/22',
    dateDisplay: '10/22 (四)',
    month: '10',
    day: '22',
    weekday: '星期四 / THU',
    cityRegion: 'Milan ✈ Taipei (返程)',
    themeTitle: '米蘭機場 Hertz 還車 ＋ 搭乘長榮/阿提哈德班機返台',
    englishDestination: 'MILAN → TAIPEI',
    chineseSubtitle: '米蘭機場 Hertz 還車 ＋ 搭乘長榮/阿提哈德班機返台',
    hotelName: '機上過夜 (EVA AIR / ETIHAD)',
    hotelRoomType: '長榮航空 BR96 / 阿提哈德航空',
    hotelAddress: 'Milano Malpensa Airport Terminal 1',
    hotelNote: '平安返航',
    region: 'italy',
    highlights: ['Hertz 米蘭機場還車', '退稅辦理', '長榮 BR96 直飛返台 (春香/小許/麗安)', '阿提哈德返台 (頭家娘/小花)'],
    todayRoute: [
      'Sleep & Fly 退房前往 MXP T1',
      'Hertz 機場門市還車',
      '海關蓋章與退稅手續',
      '搭乘長榮 BR96 / 阿提哈德航空返台'
    ],
    timeline: [
      {
        time: '08:30',
        type: 'transport',
        title: '🚗 Hertz 米蘭馬爾彭薩機場 T1 順利還車',
        badge: '短租還車',
        description: '前往 MXP T1 租車專區完成還車手續。'
      },
      {
        time: '11:00',
        type: 'transport',
        title: '✈ 長榮航空 BR96 直飛起飛 (MXP ➜ TPE)',
        badge: '長榮航空直飛',
        description: '春香、小許、麗安搭乘長榮航空 BR96 直飛班機返台。',
        address: 'Milano Malpensa Airport Terminal 1'
      }
    ]
  },

  // ==========================================
  // Day 26 / 27: 10/23-10/24 ｜ HOME SWEET HOME
  // ==========================================
  {
    dayNum: 26,
    date: '2026/10/23',
    dateDisplay: '10/23 (五)',
    month: '10',
    day: '23',
    weekday: '星期五 / FRI',
    cityRegion: 'Taipei (台北桃園 TPE T2)',
    themeTitle: '平安抵達台北 ＋ 義大利・多洛米蒂・克羅埃西亞 27 日圓滿落幕',
    englishDestination: 'TAIPEI (HOME)',
    chineseSubtitle: '平安抵達台北 ＋ 義大利・多洛米蒂・克羅埃西亞 27 日圓滿落幕',
    hotelName: '溫暖的家',
    hotelRoomType: '溫暖的家',
    hotelAddress: 'Taipei, Taiwan',
    hotelNote: '旅程圓滿成功',
    region: 'croatia',
    highlights: ['抵達桃園機場 T2', '滿滿美好回憶', '旅程平安圓滿'],
    todayRoute: [
      '班機抵達桃園國際機場 T2',
      '領取行李通關入境',
      '平安返回溫暖的家'
    ],
    timeline: [
      {
        time: '06:30',
        type: 'activity',
        title: '🛬 抵達桃園國際機場 (TPE T2)',
        badge: '平安歸國',
        description: '提取行李順利通關，帶著滿滿的義大利與克羅埃西亞精彩回憶平安返家！'
      }
    ]
  }
];
