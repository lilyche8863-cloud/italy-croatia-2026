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
  // Day 10: 10/07 (WED) ｜ ZAGREB → BLED (SLOVENIA)
  // ==========================================
  {
    dayNum: 10,
    date: '2026/10/07',
    dateDisplay: '10/07 (三)',
    month: '10',
    day: '07',
    weekday: '星期三 / WED',
    cityRegion: 'Zagreb ➜ Bled (斯洛維尼亞 布萊德湖)',
    themeTitle: '札格勒布市區巡禮 ＋ 跨國自駕前往斯洛維尼亞・布萊德湖',
    englishDestination: 'ZAGREB → BLED (SLOVENIA)',
    chineseSubtitle: '札格勒布市區巡禮 ＋ 跨國自駕前往斯洛維尼亞・布萊德湖',
    hotelName: 'Hotel Park Bled',
    hotelRoomType: '湖畔首排客房 · 3間客房/5人 · 含早餐',
    hotelAddress: 'Cesta svobode 15, 4260 Bled, Slovenia',
    hotelNote: '湖畔首排 · 含早餐 · 原創奶油蛋糕發源地',
    region: 'croatia',
    highlights: ['Dolac 紅傘市場', 'BROOM44 咖啡', '薩格勒布大教堂', '聖馬可教堂彩色屋頂', '自駕前往 Bled', 'Original Bled Cream Cake', '入住 Hotel Park Bled'],
    todayRoute: [
      'Dolac Market 紅傘廣場與新鮮農產品',
      'BROOM44 精品咖啡時光',
      '薩格勒布大教堂 (聖母升天大教堂)',
      '聖馬可教堂彩色琉璃瓦屋頂',
      '取車並購買斯洛維尼亞 e-vinjeta',
      '自駕前往 Bled 布萊德湖',
      'Hotel Park / Kavarna Park 正宗布萊德奶油蛋糕',
      '入住 Hotel Park Bled'
    ],
    drivingRoute: {
      from: 'Zagreb (札格勒布)',
      to: 'Bled (斯洛維尼亞 布萊德湖)',
      distance: '約 195 km',
      duration: '約 2 小時 15 分',
      parkingSpot: 'Hotel Park Bled 附設/周邊停車場',
      routeNote: '進入斯洛維尼亞前務必購買 e-vinjeta 高速公路電子通行證 (2A: €16 / 2B: €32)。'
    },
    importantAlerts: [
      {
        title: '🇸🇮 斯洛維尼亞 e-vinjeta 電子過路費票券',
        type: 'permit',
        content: '斯洛維尼亞高速公路全面採取電子車牌攝影取締 (每週票 2A：€16－一般轎車、SUV、多數小客車；2B：€32－前軸高度超過 1.3 m 的高車／部分 MPV、廂型車)。進入斯國境內高速公路前必須先於官網或邊境加油站購買並綁定車牌！'
      }
    ],
    timeline: [
      {
        time: '08:00',
        type: 'food',
        title: '☕ BROOM44 咖啡廳',
        badge: 'Zagreb 人氣精品咖啡',
        description: '扎格勒布深受喜愛的質感咖啡館與早午餐，享受手沖咖啡與晨光美味。',
        duration: '約 45 分鐘',
        address: 'Preradovićeva ul. 44, Zagreb',
        mapQuery: 'BROOM44 Zagreb',
        openingHours: '08:00～16:00'
      },
      {
        time: '09:00',
        type: 'activity',
        title: '🍎 Dolac Market (多拉克農夫市集)',
        badge: '紅傘廣場 · 城市廚房',
        description: '紅傘廣場：整齊的紅色大陽傘，是 Dolac 市場的招牌景觀。新鮮農產品：水果、蔬菜、蜂蜜、乳酪、橄欖油、葡萄酒。地下市場：販售肉類、魚、乳製品，夏天也涼爽。在地小吃：推薦試試新鮮乳酪＋奶油（sir i vrhnje），是 Zagreb 人的經典點心。',
        duration: '約 1 小時',
        address: 'Dolac 9, 10000, Zagreb',
        mapQuery: 'Dolac Market Zagreb',
        openingHours: '07:00～15:00'
      },
      {
        time: '10:15',
        type: 'activity',
        title: '⛪ 薩格勒布大教堂 (聖母升天大教堂)',
        badge: '最高建築 · 哥德式雙塔',
        description: '正式名稱：聖母升天大教堂（Cathedral of the Assumption of the Blessed Virgin Mary）。薩格勒布大教堂是克羅埃西亞最高建築，哥德式雙塔雄偉壯觀，始建於 11 世紀，歷經地震重建，是城市地標與宗教中心。',
        duration: '約 45 分鐘',
        address: 'Kaptol 31, 10000 Zagreb',
        mapQuery: 'Zagreb Cathedral'
      },
      {
        time: '11:15',
        type: 'activity',
        title: '🏛 聖馬可教堂 (St. Mark’s Church)',
        badge: '彩色琉璃瓦屋頂 · 國家政經中心',
        description: '屋頂最有名，鋪著彩色琉璃瓦，拼出克羅埃西亞國徽與 Zagreb 市徽。建於 13 世紀，歷經哥德式與羅馬式風格改建。位於克羅埃西亞議會與政府大樓旁，是國家重要政治中心。',
        duration: '約 45 分鐘',
        address: 'Trg Sv. Marka 5, 10000 Zagreb',
        mapQuery: 'St. Mark\'s Church Zagreb'
      },
      {
        time: '12:30',
        type: 'transport',
        title: '🚗 取車 ＋ 購買斯洛維尼亞 e-vinjeta ＋ 前往 Bled',
        badge: '約 195 km · 車程約 2～2.5 小時',
        description: '取車並確認已備妥斯洛維尼亞 e-vinjeta 電子通行證（2A：€16 / 2B：€32），自駕沿高速公路跨越邊境前往斯洛維尼亞布萊德湖 (Bled)。',
        duration: '約 2 小時 15 分'
      },
      {
        time: '15:30',
        type: 'accommodation',
        title: '🏨 入住：Hotel Park Bled',
        badge: '湖畔首排 · Booking: 5467.373.177',
        description: '坐落於斯洛維尼亞布萊德湖正前方第一排水岸，享有布萊德城堡與阿爾卑斯湖景。館內提供全景室內溫泉泳池。5位成人、3間客房均含早餐。',
        address: 'Cesta svobode 15, 4260 Bled, Slovenia',
        phone: '+386 4 579 18 00',
        mapQuery: 'Hotel Park Bled Cesta Svobode'
      },
      {
        time: '16:30',
        type: 'food',
        title: '🍰 布萊德奶油蛋糕 Bled Cream Cake (Hotel Park／Kavarna Park)',
        badge: 'Original Bled Cream Cake 發源地',
        description: '正宗 Original Bled Cream Cake 原創誕生地。千層香酥派皮夾入黃金比例的天然香草卡士達與鮮奶油，香濃不甜膩，在湖畔露天座品嚐最經典的國寶甜點。',
        address: 'Cesta svobode 15, Bled',
        mapQuery: 'Kavarna Park Bled',
        openingHours: '10 月約 11:00～19:00'
      }
    ]
  },

  // ==========================================
  // Day 11: 10/08 (THU) ｜ BLED → LJUBLJANA → MOTOVUN
  // ==========================================
  {
    dayNum: 11,
    date: '2026/10/08',
    dateDisplay: '10/08 (四)',
    month: '10',
    day: '08',
    weekday: '星期四 / THU',
    cityRegion: 'Bled ➜ Ljubljana (盧比安納) ➜ Motovun (莫托文)',
    themeTitle: '布萊德湖晨光 ➜ 盧比安納城堡全景 ➜ 開車前往莫托文',
    englishDestination: 'BLED → LJUBLJANA → MOTOVUN',
    chineseSubtitle: '布萊德湖晨光 ➜ 盧比安納城堡全景 ➜ 開車前往莫托文',
    hotelName: 'Villa Benvenuti',
    hotelRoomType: '豪華獨棟 Villa 包棟 · 3晚連住 · 私人泳池',
    hotelAddress: 'Kaldir 7, 52424 Motovun, Croatia',
    hotelNote: '5人包棟 · 3晚連住 · 私人泳池 · 廚房洗衣機',
    region: 'croatia',
    highlights: ['布萊德湖湖畔', '盧比安納老城', 'Moji Štruklji 麵卷', 'Gostilna Sokol 斯國料理', '盧比安納城堡纜車', 'Vino & Ribe 海鮮', '龍橋 Dragon Bridge', '入住 Villa Benvenuti'],
    todayRoute: [
      '布萊德湖晨景散步',
      '前往首都 Ljubljana 盧比安納',
      '品嚐 Moji Štruklji Slovenije 或 Gostilna Sokol 在地料理',
      '搭纜車登 Ljubljana Castle 俯瞰紅瓦全景',
      'Vino & Ribe 海鮮或老城散步',
      '參觀龍橋 (Dragon Bridge)',
      '開車前往克羅埃西亞 Motovun 莫托文',
      '入住 Villa Benvenuti'
    ],
    drivingRoute: {
      from: 'Bled (布萊德)',
      to: 'Motovun (莫托文)',
      distance: '約 190 km',
      duration: '約 2 小時 30 分 (含中停 Ljubljana)',
      parkingSpot: 'Villa Benvenuti 私人免費停車位',
      routeNote: 'Bled 至 Ljubljana 約 55 km (45 分鐘)；Ljubljana 經高速公路至 Motovun 約 135 km (1 小時 45 分)。'
    },
    importantAlerts: [
      {
        title: '💶 Villa Benvenuti 現金押金 EUR 300 提醒',
        type: 'warning',
        content: 'Villa Benvenuti 入住時房東規定現場收取 EUR 300 現金作為損壞押金，退房檢查無誤後全額歸還，請提前備妥歐元現金。'
      }
    ],
    timeline: [
      {
        time: '08:30',
        type: 'activity',
        title: '🌊 布萊德湖 (Bled) 湖畔晨間散步與退房',
        badge: '高山湖泊晨光',
        description: '早晨在 Hotel Park 湖景前散步，欣賞波光粼粼的湖水與崖頂古堡晨霧，辦理退房準備出發前往盧比安納。',
        duration: '約 1 小時',
        address: 'Bled, Slovenia'
      },
      {
        time: '09:30',
        type: 'transport',
        title: '🚗 自駕前往斯洛維尼亞首都 Ljubljana (盧比安納)',
        badge: '約 55 km · 車程約 45 分鐘',
        description: '沿 A2 高速公路舒適行駛，抵達首都盧比安納中央市場／老城周邊停車。',
        duration: '約 45 分鐘'
      },
      {
        time: '10:30',
        type: 'food',
        title: '🍴 Moji Štruklji Slovenije (傳統斯洛維尼亞麵卷名店)',
        badge: 'Plecnikove Arkade · 傳統經典',
        description: '位於普列赤涅克拱廊下的傳統麵卷專賣店，提供甜鹹多種口味的斯洛維尼亞國寶美食 Štruklji。',
        address: 'Adamič-Lundrovo nabrežje 1, Ljubljana',
        mapQuery: 'Moji Struklji Slovenije Ljubljana',
        openingHours: '約 07:30～20:00／部分日期至 22:00'
      },
      {
        time: '11:15',
        type: 'cablecar',
        title: '🏰 Ljubljana Castle (盧比安納城堡) 纜車與觀景塔',
        badge: '市區制高點 · 360° 全景',
        description: '城堡在老城的山丘上，是看城市全景最好的地方。直接在中央市場旁的 Krekov trg 搭纜車上去；城牆、觀景塔和紅瓦屋頂都很適合拍照。10 月城堡與纜車通常開到 18:00。',
        duration: '約 1.5 小時',
        address: 'Grajska planota 1, 1000 Ljubljana',
        mapQuery: 'Ljubljana Castle Funicular'
      },
      {
        time: '13:00',
        type: 'food',
        title: '🍴 盧比安納午餐推薦：Gostilna Sokol 或 Vino & Ribe',
        badge: '道地斯洛維尼亞料理 ＆ 新鮮海鮮',
        description: '【Gostilna Sokol】(Ciril-Metodov trg 18, 07:00～23:00) 推薦斯國五大名菜：Štruklji (麵卷)、Kranjska klobasa (香腸)、Gobova juha (牛肝菌菇湯)、Jota (酸菜豆湯)、Potica (核桃蛋糕)。【Vino & Ribe 海鮮】(Stari trg 28, 12:00～22:00) 則提供高性價比現烤海魚與花枝。',
        duration: '約 1 小時 15 分'
      },
      {
        time: '14:30',
        type: 'activity',
        title: '🐉 龍橋 (Dragon Bridge / Zmajski most) ＆ 老城漫步',
        badge: '盧比安納地標',
        description: '新藝術風格著名橋樑，橋頭守護著栩栩如生的綠龍青銅雕像，是盧比安納最重要的象徵地標。',
        duration: '約 45 分鐘',
        address: 'Resljeva cesta, 1000 Ljubljana',
        mapQuery: 'Dragon Bridge Ljubljana'
      },
      {
        time: '15:30',
        type: 'transport',
        title: '🚗 自駕前往克羅埃西亞 Motovun (莫托文)',
        badge: '約 135 km · 車程約 1 小時 45 分',
        description: '南下穿越邊界進入克羅埃西亞伊斯特利亞半島，開車前往山城山丘下的包棟別墅 Villa Benvenuti。',
        duration: '約 1 小時 45 分'
      },
      {
        time: '17:30',
        type: 'accommodation',
        title: '🏨 入住：Villa Benvenuti (3晚連住)',
        badge: '5位成人 · 獨棟包棟 · 私人泳池',
        description: '入住莫托文山丘果園環繞之豪華獨棟莊園，配備私人泳池、全套廚房與洗衣設施。Booking.com 訂單：5942.025.866。請備妥 EUR 300 現金押金。',
        address: 'Kaldir 7, 52424 Motovun, Croatia',
        phone: '+385 98 707 017',
        mapQuery: 'Villa Benvenuti Kaldir 7 Motovun'
      }
    ]
  },

  // ==========================================
  // Day 12: 10/09 (FRI) ｜ PULA 普拉一日遊
  // ==========================================
  {
    dayNum: 12,
    date: '2026/10/09',
    dateDisplay: '10/09 (五)',
    month: '10',
    day: '09',
    weekday: '星期五 / FRI',
    cityRegion: 'Motovun ➜ Pula (普拉) ➜ Motovun',
    themeTitle: '普拉古羅馬競技場與歷史舊城深度一日遊',
    englishDestination: 'PULA DAY TRIP',
    chineseSubtitle: '普拉古羅馬競技場與歷史舊城深度一日遊',
    hotelName: 'Villa Benvenuti',
    hotelRoomType: '續住第 2 晚 · 獨棟包棟',
    hotelAddress: 'Kaldir 7, 52424 Motovun, Croatia',
    hotelNote: '續住第 2 晚 · 獨棟包棟',
    region: 'croatia',
    highlights: ['Parking Riva', '普拉競技場 Pula Arena', '聖母升天大教堂', 'Forum 奧古斯都神殿', 'Pizzeria Jupiter', 'Bistro Alighieri', '塞爾吉烏斯凱旋門', 'Villa Benvenuti'],
    todayRoute: [
      '09:00 Villa Benvenuti 出發自駕前往 Pula',
      '約 10:15 抵達 Parking Riva (海濱停車場)',
      '10:30 ① 普拉競技場 Pula Arena (入內 45～60 分鐘)',
      '11:40 ② 沿 Kandlerova 漫步至聖母升天大教堂',
      '12:10 ③ Forum 廣場・奧古斯都神殿拍照休息',
      '13:00 午餐時間 (Pizzeria Jupiter 或 Bistro Alighieri)',
      '14:15 ④ Sergijevaca・塞爾吉烏斯凱旋門 (逛街後返回海濱)',
      '15:15～15:30 開車返回',
      '約 16:30～17:00 回到住宿 Villa Benvenuti'
    ],
    drivingRoute: {
      from: 'Villa Benvenuti (Kaldir, Motovun)',
      to: 'Pula (普拉 Parking Riva)',
      distance: '約 70 km',
      duration: '約 1 小時 15 分',
      parkingSpot: 'Parking Riva (Ulica Riva, Pula)',
      routeNote: '導航設 Parking Riva，Riva 2 / Zone 2A 約 €1.50/小時，停 5～6 小時約 €7.50～9。'
    },
    timeline: [
      {
        time: '09:00',
        type: 'transport',
        title: '🚗 Villa Benvenuti → Pula (出發自駕)',
        badge: '車程約 1 小時 15 分 · 70 km',
        description: '由 Kaldir 出發南下伊斯特利亞半島公路前往古羅馬海港城市普拉。',
        duration: '約 1 小時 15 分'
      },
      {
        time: '10:15',
        type: 'parking',
        title: '🅿 抵達 Parking Riva (停車與步行至競技場)',
        badge: 'Riva 2／Zone 2A：約 €1.50／小時',
        description: '導航：Parking Riva, Pula。位置：Ulica Riva 海濱一帶。停 5～6 小時約 €7.50～9。停妥車輛後步行前往競技場。',
        duration: '15 分鐘',
        address: 'Ulica Riva, 52100 Pula',
        mapQuery: 'Parking Riva Pula'
      },
      {
        time: '10:30',
        type: 'activity',
        title: '🏛 ① 普拉競技場 (Pula Arena)',
        badge: '入內約 45～60 分鐘 · 世界六大羅馬鬥獸場',
        description: '建於西元 1 世紀，是世界上現存保存最完整的古羅馬全石造外牆圓形競技場。入內參觀競技場看台與地下走廊博物館（展示古羅馬橄欖油與製陶器具）。',
        duration: '約 1 小時',
        address: 'Flavijevska ul. bb, 52100 Pula',
        mapQuery: 'Pula Arena'
      },
      {
        time: '11:40',
        type: 'activity',
        title: '⛪ ② 聖母升天大教堂 (Cathedral of the Assumption)',
        badge: '歷史老街慢步',
        description: '沿著石板古道 Kandlerova 慢慢漫步，參觀具百年歷史的聖母升天大教堂及其獨立鐘樓。',
        duration: '約 30 分鐘',
        address: 'Trg sv. Tome 1, 52100 Pula',
        mapQuery: 'Pula Cathedral'
      },
      {
        time: '12:10',
        type: 'activity',
        title: '🏛 ③ Forum 廣場・奧古斯都神殿',
        badge: '拍照 · 咖啡休息',
        description: '抵達古羅馬時代普拉的核心廣場 (Forum)，欣賞建於西元前供奉羅馬開國皇帝的奧古斯都神殿 (Temple of Augustus) 與市政廳，在此拍照與咖啡休息。',
        duration: '約 50 分鐘',
        address: 'Forum 1, 52100 Pula',
        mapQuery: 'Temple of Augustus Pula'
      },
      {
        time: '13:00',
        type: 'food',
        title: '🍴 午餐時間：Pizzeria Jupiter 或 Bistro Alighieri',
        badge: '普拉老城人氣名店',
        description: '【Pizzeria Jupiter】(Castropola 42, 52100 Pula, 約 12:00～23:00) 普拉最著名的老牌手工烤爐披薩與海鮮義大利麵；【Bistro Alighieri】(Danteov trg 3, 52100 Pula, 約 08:00～22:30) 位於但丁廣場，氣氛優雅的地中海精緻小館。',
        duration: '約 1 小時 15 分'
      },
      {
        time: '14:15',
        type: 'activity',
        title: '🏛 ④ Sergijevaca・塞爾吉烏斯凱旋門 (Arch of the Sergii)',
        badge: '逛街後散步返回海濱',
        description: '漫步普拉最熱鬧的步行街 Ulica Sergijevaca，欣賞建於西元前 29 年的古羅馬塞爾吉烏斯凱旋門（又稱黃金之門），逛老街特色商店後悠閒散步返回海濱停車場取車。',
        duration: '約 1 小時',
        address: 'Ulica Sergijevaca, 52100 Pula',
        mapQuery: 'Arch of the Sergii Pula'
      },
      {
        time: '15:15～15:30',
        type: 'transport',
        title: '🚗 開車返回 Motovun 住宿',
        badge: '車程約 1 小時 15 分',
        description: '由 Parking Riva 出發啟程返回莫托文 Kaldir 別墅。',
        duration: '約 1 小時 15 分'
      },
      {
        time: '16:30～17:00',
        type: 'accommodation',
        title: '🏡 回到住宿：Villa Benvenuti (續住第 2 晚)',
        badge: '泳池放鬆與別墅自煮',
        description: '約 16:30～17:00 回到住宿 Villa Benvenuti，享受私人泳池、庭院美景與舒適晚間休憩。',
        address: 'Kaldir 7, 52424 Motovun, Croatia'
      }
    ]
  },

  // ==========================================
  // Day 13: 10/10 (SAT) ｜ MOTOVUN 莫托文・松露節
  // ==========================================
  {
    dayNum: 13,
    date: '2026/10/10',
    dateDisplay: '10/10 (六)',
    month: '10',
    day: '10',
    weekday: '星期六 / SAT',
    cityRegion: 'Motovun ＆ Livade (利瓦代)',
    themeTitle: '莫托文山城散步 ＋ Livade 松露節活動 ＆ 13:30 松露獵尋',
    englishDestination: 'MOTOVUN & LIVADE TRUFFLE DAYS',
    chineseSubtitle: '莫托文山城散步 ＋ Livade 松露節活動 ＆ 13:30 松露獵尋',
    hotelName: 'Villa Benvenuti',
    hotelRoomType: '續住第 3 晚 · 泳池別墅',
    hotelAddress: 'Kaldir 7, 52424 Motovun, Croatia',
    hotelNote: '續住第 3 晚 · 泳池別墅',
    region: 'croatia',
    highlights: ['Villa Benvenuti 出發', 'Livade 松露節', '13:30 松露獵尋 Truffle Hunting', 'Motovun 山城漫步', 'Mama Maria', '夜宿 Villa Benvenuti'],
    todayRoute: [
      '住宿出發：Villa Benvenuti',
      'Livade 松露節活動 (前往 Livade／Motovun 一帶參加松露市集)',
      '13:30 專屬安排 Truffle Hunting 松露獵尋',
      'Motovun 山城散步、松露相關活動',
      '品嚐在地推薦 Mama Maria',
      '返回住宿：Villa Benvenuti'
    ],
    timeline: [
      {
        time: '10:00',
        type: 'activity',
        title: '🍄 Livade 松露節攻略 (Livade／Motovun 一帶)',
        badge: '世界白松露之都節慶',
        description: '由 Villa Benvenuti 出發前往松露重鎮 Livade 參加一年一度的秋季松露盛會（Dani Tartufa）。現場展示剛出土的頂級白松露與黑松露、松露美酒起司品嚐與熱鬧慶典活動。',
        duration: '約 2.5 小時',
        address: 'Livade, 52427, Croatia',
        mapQuery: 'Livade Truffle Festival Croatia'
      },
      {
        time: '13:30',
        type: 'activity',
        title: '🐕 Truffle Hunting 松露獵尋 (已安排約 13:30)',
        badge: '已安排 13:30 專屬活動',
        description: '已預先安排約 13:30 展開的沉浸式松露尋寶體驗！在經驗豐富的松露獵人與靈敏松露獵犬帶領下深入莫托文橡樹森林，親眼見證珍貴松露被挖掘出土的激動時刻。',
        duration: '約 1.5～2 小時',
        address: 'Motovun / Livade Forest'
      },
      {
        time: '15:30',
        type: 'activity',
        title: '🏰 Motovun 莫托文山城散步與松露相關活動',
        badge: '海拔 277m 中世紀山城',
        description: '漫步莫托文古老石板路與 13 世紀城牆，居高臨下俯瞰米爾納河谷葡萄園美景，走訪老街各具特色的松露工坊、橄欖油行與紀念品店。',
        duration: '約 2 小時',
        address: '52424, Motovun, Croatia',
        mapQuery: 'Motovun Old Town'
      },
      {
        time: '18:00',
        type: 'food',
        title: '🍴 美味晚餐：Mama Maria',
        badge: '在地特色推薦餐廳',
        description: '在熱情溫馨的在地餐館 Mama Maria 享用傳統伊斯特利亞手作料理，搭配新鮮松露與在地佳釀。',
        address: 'Motovun 周邊',
        mapQuery: 'Mama Maria Motovun'
      },
      {
        time: '20:00',
        type: 'accommodation',
        title: '🏡 返回住宿：Villa Benvenuti (續住第 3 晚)',
        badge: '莫托文連住最後一晚',
        description: '返回 Villa Benvenuti 休息，整理明日跨區前往水車村與十六湖的行李。明日退房時記得辦理 EUR 300 押金退還手續。',
        address: 'Kaldir 7, 52424 Motovun, Croatia'
      }
    ]
  },

  // ==========================================
  // Day 14: 10/11 (SUN) ｜ MOTOVUN → RIJEKA → RASTOKE → PLITVICE
  // ==========================================
  {
    dayNum: 14,
    date: '2026/10/11',
    dateDisplay: '10/11 (日)',
    month: '10',
    day: '11',
    weekday: '星期日 / SUN',
    cityRegion: 'Motovun ➜ Rijeka (里耶卡) ➜ Rastoke (水車村) ➜ Rakovica',
    themeTitle: '里耶卡海濱長廊 ➜ 水車村穿屋瀑布 ➜ 入住十六湖度假木屋',
    englishDestination: 'MOTOVUN → RIJEKA → RASTOKE → PLITVICE',
    chineseSubtitle: '里耶卡海濱長廊 ➜ 水車村穿屋瀑布 ➜ 入住十六湖度假木屋',
    hotelName: 'Charming house Maša',
    hotelRoomType: '雙臥室森林別墅 · 2晚連住 · 5位成人 · Jacuzzi 桑拿',
    hotelAddress: 'Korita 39, 47245 Rakovica, Croatia',
    hotelNote: '雙臥室森林別墅 · 2晚連住 · 5位成人 · 戶外 Jacuzzi 桑拿',
    region: 'croatia',
    highlights: ['Villa Benvenuti 出發', 'Rijeka 里耶卡 Korzo', 'Parkiralište Delta 停車', 'Rastoke 水車村三大亮點', 'Konoba Pod rastockim krovom', '入住 Charming house Maša'],
    todayRoute: [
      '由 Villa Benvenuti (Kaldir 7, Motovun) 出發',
      '約 1 小時 10～30 分抵達 Rijeka 里耶卡',
      '里耶卡市區漫步：Korzo 步行街、Riva 海濱',
      '停放於 Parkiralište Delta (約 €0.80／小時)',
      '前往 Rastoke 水車村 (車程約 2 小時～2 小時 20 分)',
      '水車村三大散步亮點：入口石橋、溪流穿屋、木橋觀景點',
      '午餐推薦：Konoba Pod rastockim krovom',
      '停留約 25～35 分鐘後前往住宿',
      '入住 Charming house Maša (Korita 39, Rakovica)'
    ],
    drivingRoute: {
      from: 'Motovun (莫托文)',
      to: 'Rakovica (十六湖 Charming house Maša)',
      distance: '約 220 km (全日累計)',
      duration: '約 3.5 小時 (分段行駛)',
      parkingSpot: 'Rijeka: Parkiralište Delta / Rastoke: Zone 1 / 木屋免費停車',
      routeNote: 'Motovun 到 Rijeka 約 1 小時 15 分；Rijeka 到 Rastoke 約 2 小時 10 分；Rastoke 到木屋約 25 分鐘。'
    },
    importantAlerts: [
      {
        title: '🎫 明日 (10/12) 十六湖國家公園門票重要確認',
        type: 'permit',
        content: '十六湖門票已購妥 (票號: 26439385626，成人票 €23/人)，預約時段為 10/12 09:00～10:00，入園口為 Entrance 2 (Ulaz 2)。請務必於明日 08:45 前抵達停車場！'
      }
    ],
    timeline: [
      {
        time: '08:30',
        type: 'transport',
        title: '🚗 由 Villa Benvenuti 出發前往 Rijeka (里耶卡)',
        badge: '約 1 小時 10～30 分 · 75 km',
        description: '由 Kaldir 7 出發，沿風景優美的公路東行前往克羅埃西亞第三大城兼最大海港里耶卡 (Rijeka)。',
        duration: '約 1 小時 20 分'
      },
      {
        time: '10:00',
        type: 'parking',
        title: '🅿 抵達里耶卡停車：Parkiralište Delta',
        badge: '約 €0.80／小時',
        description: '停妥車輛於市中心便利的 Delta 大型收費停車場，步行 3 分鐘即可抵達歷史悠久的 Korzo 步行大道。',
        duration: '10 分鐘',
        address: 'Delta, Rijeka, Croatia',
        mapQuery: 'Parkiraliste Delta Rijeka'
      },
      {
        time: '10:15',
        type: 'activity',
        title: '🚶 里耶卡市區漫步：Korzo ＆ Riva 海濱長廊',
        badge: '哈布斯堡典雅港都',
        description: '漫步於熱鬧繁華的 Korzo 步行街，欣賞宏偉的城市鐘樓 (City Clock Tower)、古羅馬城門與典雅奧匈帝國風格建築，並沿著 Riva 海濱欣賞亞得里亞海港景色。',
        duration: '約 1.5 小時',
        address: 'Korzo, 51000, Rijeka',
        mapQuery: 'Korzo Rijeka'
      },
      {
        time: '11:45',
        type: 'transport',
        title: '🚗 由 Rijeka 前往 Rastoke 水車村',
        badge: '車程約 2 小時～2 小時 20 分 · 130 km',
        description: '啟程由里耶卡經公路穿越內陸山區前往著名瀑布童話小鎮 Rastoke 水車村。',
        duration: '約 2 小時 10 分'
      },
      {
        time: '14:00',
        type: 'activity',
        title: '🌊 Rastoke Village (水車村散步三大重點)',
        badge: '營業約 08:00～20:00 · 停車 Zone 1 約 €2/小時',
        description: '散步重點：1. 入口石橋 (Main Stone Bridge) 眺望全村瀑布群；2. 溪流穿屋景觀 (Watermills Viewpoint) 欣賞溪流自木屋底部穿流而過之奇景；3. 木橋觀景點 (Wooden Bridge) 近距離感受奔騰水花。',
        duration: '約 1 小時',
        address: 'Rastoke 25b, 47240 Slunj, Karlovac County, Croatia',
        mapQuery: 'Rastoke Slunj'
      },
      {
        time: '15:00',
        type: 'food',
        title: '🍴 水車村餐廳推薦：Konoba Pod rastockim krovom',
        badge: '水車屋頂下傳統美味',
        description: '坐落於瀑布溪流邊的傳統客棧，在水車磨坊屋頂下品嚐招牌香烤高山新鮮河鱒魚與傳統玉米麵包。',
        address: 'Rastoke 25, 47240 Slunj',
        mapQuery: 'Konoba Pod rastockim krovom Slunj'
      },
      {
        time: '16:00',
        type: 'transport',
        title: '🚗 Rastoke 停留後前往十六湖住宿',
        badge: '停留約 25～35 分鐘後啟程 · 車程約 25 分鐘',
        description: '啟程前往位於 Rakovica 的十六湖森林度假別墅 Charming house Maša。',
        duration: '約 25 分鐘'
      },
      {
        time: '16:30',
        type: 'accommodation',
        title: '🏨 入住：Charming house Maša (2晚連住)',
        badge: '5人獨棟包棟 · 戶外 Jacuzzi 桑拿',
        description: '入住寧靜森林度假別墅，配備專屬戶外熱水按摩池 (Jacuzzi)、芬蘭桑拿烤箱、完整廚房與私人庭院。Booking.com 訂單：6233.309.152。',
        address: 'Korita 39, 47245 Rakovica, Croatia',
        phone: '+385 91 155 2051',
        mapQuery: 'Charming house Masa Rakovica'
      }
    ]
  },

  // ==========================================
  // Day 15: 10/12 (MON) ｜ PLITVICE LAKES 十六湖國家公園
  // ==========================================
  {
    dayNum: 15,
    date: '2026/10/12',
    dateDisplay: '10/12 (一)',
    month: '10',
    day: '12',
    weekday: '星期一 / MON',
    cityRegion: 'Plitvice Lakes (十六湖國家公園)',
    themeTitle: '十六湖經典 H 路線 8.9km 深度健行 (上湖群＋渡輪＋大瀑布)',
    englishDestination: 'PLITVICE LAKES NATIONAL PARK (ROUTE H)',
    chineseSubtitle: '十六湖經典 H 路線 8.9km 深度健行 (上湖群＋渡輪＋大瀑布)',
    hotelName: 'Charming house Maša',
    hotelRoomType: '續住第 2 晚 · 森林別墅',
    hotelAddress: 'Korita 39, 47245 Rakovica, Croatia',
    hotelNote: '續住第 2 晚 · 森林別墅',
    region: 'croatia',
    highlights: ['門票 09:00–10:00 Entrance 2', '路線 H 約 8.9 km', 'St2 接駁車至 St3', '上湖區健行至 P2', 'P2 搭船至 P3', '下湖區 Veliki Slap 大瀑布', '峽谷回程至 St1', 'St1 搭回 St2'],
    todayRoute: [
      '門票確認：2026/10/12 09:00～10:00 Entrance 2 (票價 €23)',
      '行程路線約 8.9 km／4～6 小時 (經典 H 路線全覽)',
      '① Entrance 2 → St2 (依 H 路線前往 St2)',
      '② St2 → St3 (搭乘園區接駁車，St3 上廁所整理後開走)',
      '③ St3 → 湖區 → P2 (沿木棧道經上湖群至 P2，稍作休息)',
      '④ P2 → P3 (搭乘電動渡輪橫越 Kozjak 湖)',
      '⑤ P3 下船 → 休息 (休息區有 WC、餐飲補充體力)',
      '⑥ P3 → 下湖區 → Veliki Slap 大瀑布 (先抵大瀑布再接回程)',
      '⑦ 大瀑布 → 峽谷上方 → St1 (沿 H 回程上坡至峽谷東側至 St1)',
      '⑧ St1 → St2 → 用餐 → 取車 (搭回 St2，飯店區用餐後回停車場)'
    ],
    drivingRoute: {
      from: 'Charming house Maša (Korita 39)',
      to: 'Plitvice Lakes Entrance 2 停車場',
      distance: '約 15 km',
      duration: '約 15 分鐘',
      parkingSpot: 'Entrance 2 Parking (計時收費約 €1.50/小時)',
      routeNote: '建議提早於 08:30 由木屋出發，08:45 前抵達 Entrance 2 停車場停妥車輛步行至驗票閘門。'
    },
    timeline: [
      {
        time: '08:30',
        type: 'transport',
        title: '🚗 出發前往十六湖 Entrance 2 停車場',
        badge: '車程約 15 分鐘 · 15 km',
        description: '由 Rakovica 出發沿 D1 景觀公路前往十六湖國家公園 Entrance 2。',
        duration: '15 分鐘'
      },
      {
        time: '09:00',
        type: 'activity',
        title: '🎫 ① Entrance 2 準時入園 ➜ 步行至 St2',
        badge: '門票：2026/10/12 09:00～10:00 · €23',
        description: '出示電子票 QR Code 驗票入園（票號：26439385626）。從 Entrance 2 依「路線 H」標示前往園區接駁車站 St2。',
        duration: '約 20 分鐘',
        address: 'Plitvička Jezera Entrance 2',
        mapQuery: 'Plitvice Entrance 2'
      },
      {
        time: '09:25',
        type: 'transport',
        title: '🚌 ② St2 搭乘全景接駁車 ➜ 抵達最高點 St3',
        badge: '全景列車 Panorama Train',
        description: '搭乘園區全景接駁車上山抵達最高站點 St3。St3 站設有洗手間，可先上廁所、整理隨身裝備後正式開始健行。',
        duration: '約 25 分鐘'
      },
      {
        time: '09:50',
        type: 'walk',
        title: '🚶 ③ St3 ➜ 上湖群階梯湖泊步道 ➜ P2 碼頭',
        badge: '上湖區精華步道 · 約 4.5 km',
        description: '依 H 路線木棧道輕鬆緩步下行，穿梭於 Prošćansko 湖、Galovac 瀑布群等 12 座碧綠清澈湖泊之間，抵達 Kozjak 湖畔的 P2 碼頭。P2 設有 WC，可稍作休息。',
        duration: '約 2 小時'
      },
      {
        time: '12:00',
        type: 'ferry',
        title: '⛴ ④ P2 碼頭搭乘電動渡輪 ➜ 橫越 Kozjak 湖至 P3',
        badge: '電動接駁船',
        description: '搭乘環保電動渡輪平穩橫越十六湖面積最大的 Kozjak 湖，微風拂面飽覽兩岸翠綠森林倒影，直達 P3 碼頭。',
        duration: '約 20 分鐘'
      },
      {
        time: '12:20',
        type: 'food',
        title: '🍴 ⑤ P3 下船 ➜ 休息區休整與補給',
        badge: 'WC · 餐飲空間 · 補充熱量',
        description: 'P3 休息區設有寬敞草坪、野餐木桌、熟食部 (漢堡、香腸、咖啡) 與洗手間。建議在此上廁所並享用自備乾糧或熱食，養足體力後再往下湖區與大瀑布前進。',
        duration: '約 45 分鐘'
      },
      {
        time: '13:05',
        type: 'walk',
        title: '🚶 ⑥ P3 ➜ 下湖區 ➜ Veliki Slap (大瀑布)',
        badge: '78 米高大瀑布',
        description: '沿「H」與「Big Waterfall / Veliki Slap」指示前進，穿越石灰岩峽谷木棧道，先抵達克羅埃西亞最高落差的 78 公尺 Veliki Slap 大瀑布，感受水氣磅礴震撼，再接回程路線。',
        duration: '約 1.5 小時'
      },
      {
        time: '14:35',
        type: 'walk',
        title: '🚶 ⑦ 大瀑布 ➜ 峽谷上方觀景步道 ➜ St1 車站',
        badge: '走 H 回程上坡至峽谷東側',
        description: '由大瀑布依 H 路線沿之字形上坡小徑登上峽谷東側上方，俯瞰下湖區如藍寶石般的如畫全景，步行前往接駁車站 St1。',
        duration: '約 45 分鐘'
      },
      {
        time: '15:20',
        type: 'transport',
        title: '🚌 ⑧ St1 ➜ 搭車回 St2 ➜ 用餐 ➜ 取車返回木屋',
        badge: '完成 8.9km 健行 · 飯店區用餐',
        description: '搭乘接駁車回 St2 後，可往飯店／Entrance 2 區用餐與上 WC（周邊推薦：Waterfall Restaurant／Hotel Jezero、Poljana Restaurant、Kozjak Café & Pastry 或 Black River）。最後沿 Entrance 2 / Parking 標示回停車場取車回木屋。',
        duration: '約 1.5 小時'
      },
      {
        time: '17:30',
        type: 'accommodation',
        title: '🏡 回到 Charming house Maša (放鬆熱水浴與桑拿)',
        badge: '續住第 2 晚 · 完美放鬆',
        description: '回到森林木屋，享受戶外熱水按摩池 (Jacuzzi) 與桑拿，洗滌全日健行疲憊。',
        address: 'Korita 39, 47245 Rakovica, Croatia'
      }
    ]
  },

  // ==========================================
  // Day 16: 10/13 (TUE) ｜ PLITVICE → ZADAR → SPLIT
  // ==========================================
  {
    dayNum: 16,
    date: '2026/10/13',
    dateDisplay: '10/13 (二)',
    month: '10',
    day: '13',
    weekday: '星期二 / TUE',
    cityRegion: 'Plitvice ➜ Zadar (扎達爾) ➜ Split (斯普利特)',
    themeTitle: '十六湖 ➜ 札達爾海洋風琴與羅馬古城 ➜ 斯普利特',
    englishDestination: 'PLITVICE → ZADAR → SPLIT',
    chineseSubtitle: '十六湖 ➜ 札達爾海洋風琴與羅馬古城 ➜ 斯普利特',
    hotelName: 'AC Hotel Split',
    hotelRoomType: '萬豪海景房 · 3間客房/5人 · 2晚連住 · 克國第1高樓',
    hotelAddress: 'Ul. Domovinskog rata 61A, 21000 Split, Croatia',
    hotelNote: 'Dalmatia Tower · 萬豪高樓海景房 · 頂樓泳池 · 2晚連住',
    region: 'croatia',
    highlights: ['札達爾 Zadar', 'Sea Organ 海洋風琴', 'Greeting to the Sun', 'Land Gate 陸門', 'Roman Forum 羅馬廣場', '聖多納圖斯教堂', '札達爾主教座堂', 'Providur / 4 Kantuna', '入住 AC Hotel Split'],
    todayRoute: [
      'Charming house Maša 退房出發',
      '自駕前往亞得里亞海濱名城 Zadar 扎達爾 (約 1.5 小時)',
      '主要景點漫步：Sea Organ 海洋風琴、向太陽致敬、Land Gate 陸門',
      '古蹟巡禮：羅馬廣場 Roman Forum、聖多納圖斯教堂、札達爾主教座堂',
      '午餐推薦：Providur Restaurant & Wine Bar / Restoran 4 Kantuna / The Well',
      '自駕沿高速公路前往斯普利特 (Split)',
      '入住 AC Hotel Split (萬豪旗下克國第一高樓 Dalmatia Tower)'
    ],
    drivingRoute: {
      from: 'Rakovica (十六湖木屋)',
      to: 'Split (斯普利特 AC Hotel Split)',
      distance: '約 280 km (全日累計)',
      duration: '約 3.5 小時 (分段行駛)',
      parkingSpot: 'Zadar: Parking Ravnice / Split: AC Hotel Split 地下停車場',
      routeNote: 'Rakovica 至 Zadar 約 135 km (1.5 小時)；Zadar 沿 A1 高速公路至 Split 約 160 km (1 小時 40 分)。'
    },
    timeline: [
      {
        time: '09:00',
        type: 'transport',
        title: '🚗 Charming house Maša 退房出發前往 Zadar (扎達爾)',
        badge: '約 135 km · 車程約 1.5 小時',
        description: '整理行李啟程，自駕沿 D1 / E71 號公路南下奔向蔚藍亞得里亞海濱古城札達爾。',
        duration: '約 1 小時 30 分'
      },
      {
        time: '10:45',
        type: 'activity',
        title: '🌊 Sea Organ 海洋風琴 ＆ Greeting to the Sun 向太陽致敬',
        badge: '海浪推動管道發出天籟音樂',
        description: '【Sea Organ 海洋風琴】位於札達爾濱海步道，利用海浪推動管道發出音樂。聲音會隨浪潮與風力變化，坐在大理石階梯上聆聽大自然演奏。【向太陽致敬】直徑 22 米的多層太陽能玻璃板圓盤，與海風琴交相輝映。',
        duration: '約 1 小時',
        address: 'Obala kralja Petra Krešimira IV, 23000 Zadar',
        mapQuery: 'Sea Organ Zadar'
      },
      {
        time: '11:45',
        type: 'activity',
        title: '🏛 Land Gate 陸門 ＆ 羅馬廣場 Roman Forum',
        badge: '奧古斯都大帝建造 · 西元前 1 世紀',
        description: '【Land Gate 陸門】威尼斯文藝復興式雄偉城門；【Roman Forum 羅馬廣場】由羅馬皇帝奧古斯都在西元前 1 世紀下令建造，曾是古札達爾的政治、宗教與商業中心。',
        duration: '約 45 分鐘',
        address: 'Trg Petra Zoranića, 23000 Zadar',
        mapQuery: 'Roman Forum Zadar'
      },
      {
        time: '12:30',
        type: 'activity',
        title: '⛪ 聖多納圖斯教堂 ＆ 札達爾主教座堂 (聖安娜斯塔西婭大教堂)',
        badge: '克羅埃西亞最大羅馬式教堂 · 可登鐘樓',
        description: '【聖多納圖斯教堂】西元 9 世紀圓形前羅馬式教堂；【札達爾主教座堂／聖安娜斯塔西婭大教堂】建於 12～13 世紀，是克羅埃西亞最大的羅馬式教堂，擁有雙玫瑰花窗與高塔，可登鐘樓俯瞰札達爾舊城與亞得里亞海。',
        duration: '約 45 分鐘',
        address: 'Trg Svete Stošije 2, 23000 Zadar',
        mapQuery: 'Zadar Cathedral'
      },
      {
        time: '13:15',
        type: 'food',
        title: '🍴 扎達爾午餐精選：Providur / Restoran 4 Kantuna / The Well',
        badge: '達爾馬提亞老城口碑餐廳',
        description: '【Providur Restaurant & Wine Bar】老城精品餐酒館，海鮮與在地葡萄酒；【Restoran 4 Kantuna】老城四角巷內人氣名店，烤魚與手工寬麵；【The Well】古井廣場旁地中海風味料理。',
        duration: '約 1 小時 15 分'
      },
      {
        time: '14:45',
        type: 'transport',
        title: '🚗 由 Zadar 自駕前往 Split (斯普利特)',
        badge: '約 160 km · 車程約 1 小時 40 分',
        description: '沿 A1 高速公路南下直達克羅埃西亞南部歷史名城斯普利特。',
        duration: '約 1 小時 40 分'
      },
      {
        time: '16:30',
        type: 'accommodation',
        title: '🏨 入住：AC Hotel Split by Marriott (2晚連住)',
        badge: 'Dalmatia Tower · 萬豪官方預訂 · 頂樓泳池',
        description: '坐落於克羅埃西亞最高建築「達爾馬提亞大樓 (Dalmatia Tower)」，萬豪旗下 AC Hotel Split 擁有震撼的 360 度亞德里亞海與斯普利特歷史古城全景。配備全景落地窗、頂樓恆溫泳池、178 SPA 水療中心與高級餐飲。',
        address: 'Ul. Domovinskog rata 61A, 21000 Split, Croatia',
        phone: '+385 21 688 888',
        mapQuery: 'AC Hotel Split'
      }
    ]
  },

  // ==========================================
  // Day 17: 10/14 (WED) ｜ SPLIT → TROGIR → SPLIT
  // ==========================================
  {
    dayNum: 17,
    date: '2026/10/14',
    dateDisplay: '10/14 (三)',
    month: '10',
    day: '14',
    weekday: '星期三 / WED',
    cityRegion: 'Split ➜ Trogir (特羅吉爾) ➜ Split (斯普利特)',
    themeTitle: '漫遊世界遺產特羅吉爾 ➜ 戴克里先宮與 Green Market',
    englishDestination: 'SPLIT → TROGIR → SPLIT',
    chineseSubtitle: '漫遊世界遺產特羅吉爾 ➜ 戴克里先宮與 Green Market',
    hotelName: 'AC Hotel Split',
    hotelRoomType: '萬豪海景房 · 續住第 2 晚 · 頂樓泳池',
    hotelAddress: 'Ul. Domovinskog rata 61A, 21000 Split, Croatia',
    hotelNote: '續住第 2 晚 · 萬豪海景房 · 頂樓泳池',
    region: 'croatia',
    highlights: ['特羅吉爾 Trogir', '聖勞倫斯大教堂 Radovan 雕刻', 'Kamerlengo 卡梅爾倫戈城堡', 'T1 Parking', '戴克里先宮 Diocletian\'s Palace', '聖杜金主教座堂', 'Green Market 傳統市集', 'Riva 海濱長廊', 'Jadrolinija 渡輪碼頭'],
    todayRoute: [
      '自駕前往 Trogir 特羅吉爾 (約 30 分鐘車程)',
      '停放於 T1 Parking (24 小時開放)',
      '特羅吉爾主要景點：聖勞倫斯大教堂 (Radovan’s Portal)、老城區、海濱步道、Kamerlengo Fortress',
      '之後返回 Split 斯普利特',
      '戴克里先宮 Diocletian’s Palace (約 08:00～19:00)',
      '聖杜金主教座堂 Cathedral of St. Domnius',
      'Green Market 採買新鮮特產 (蜂蜜、起司、橄欖油、風乾火腿)',
      'Riva 海濱步道漫步 ＆ Jadrolinija 渡輪碼頭探勘',
      '續住 AC Hotel Split'
    ],
    drivingRoute: {
      from: 'Split (AC Hotel Split)',
      to: 'Trogir (特羅吉爾 T1 Parking)',
      distance: '約 28 km (單程)',
      duration: '約 30 分鐘',
      parkingSpot: 'Trogir: T1 Parking (Ul. Kardinala Alojzija Stepinca)',
      routeNote: '特羅吉爾位於斯普利特以西約 30 分鐘車程，舊城於 1997 年列入 UNESCO 世界文化遺產。'
    },
    timeline: [
      {
        time: '09:00',
        type: 'transport',
        title: '🚗 出發前往 UNESCO 世界文化遺產古城：Trogir (特羅吉爾)',
        badge: '約 28 km · 車程約 30 分鐘',
        description: '特羅吉爾是斯普利特以西約 30 分鐘車程的中世紀海港小鎮，舊城於 1997 年列入 UNESCO 世界文化遺產。',
        duration: '約 30 分鐘'
      },
      {
        time: '09:35',
        type: 'parking',
        title: '🅿 抵達特羅吉爾停車：T1 Parking',
        badge: '24 小時開放 · 步行過木橋即入老城',
        description: '地址：Ul. Kardinala Alojzija Stepinca, 21220 Trogir。24 小時開放，位於島外大型主要停車場，過橋即是歷史古城。',
        duration: '10 分鐘',
        address: 'Ul. Kardinala Alojzija Stepinca, 21220 Trogir',
        mapQuery: 'T1 Parking Trogir'
      },
      {
        time: '09:45',
        type: 'activity',
        title: '⛪ 聖勞倫斯大教堂 (Cathedral of St. Lawrence)',
        badge: 'UNESCO 核心建築 · Radovan’s Portal 著名雕刻',
        description: '特羅吉爾最著名地標之一，也是 UNESCO 世界文化遺產核心建築。西元 1240 年大師 Radovan 創作的羅馬式雕刻大門「Radovan’s Portal」為歐洲雕刻史顛峰傑作。可登 47 米鐘樓俯瞰全島。',
        duration: '約 1 小時',
        address: 'Trg Ivana Pavla II, 21220 Trogir',
        mapQuery: 'Cathedral of St. Lawrence Trogir'
      },
      {
        time: '10:45',
        type: 'activity',
        title: '🚶 特羅吉爾老城區石板巷弄 ＆ 海濱步道漫步',
        badge: '中世紀迷宮石城 · 棕櫚海濱',
        description: '漫步於保存完好的中世紀石造巷道、人民廣場、敞廊與棕櫚樹環繞的海濱散步道。',
        duration: '約 1 小時',
        address: 'Trogir Old Town',
        mapQuery: 'Trogir Old Town'
      },
      {
        time: '11:45',
        type: 'activity',
        title: '🏰 Kamerlengo Fortress (卡梅爾倫戈城堡)',
        badge: '古城西南角代表地標',
        description: '位於 Trogir 古城西南角，由威尼斯人在 15 世紀初興建的堅固防禦要塞，是老城最具代表性的地標之一，可登上城牆眺望亞得里亞海。',
        duration: '約 45 分鐘',
        address: 'Kula Kamerlengo, 21220 Trogir',
        mapQuery: 'Kamerlengo Fortress Trogir'
      },
      {
        time: '12:45',
        type: 'transport',
        title: '🚗 由 Trogir 返回 Split (斯普利特)',
        badge: '車程約 30 分鐘 · 28 km',
        description: '由 T1 Parking 出發開車返回斯普利特市區，展開古羅馬皇城與在地市集巡禮。',
        duration: '約 30 分鐘'
      },
      {
        time: '13:15',
        type: 'food',
        title: '🍴 午餐：Buffet Fife / Konoba Marjan (達爾馬提亞傳統美味)',
        badge: '在地人推薦家常酒館 · 必點黑墨魚燉飯',
        description: '推薦：① Buffet Fife (Trg Franje Tuđmana 4, 營業 07:00–23:00)，靠近海濱長廊的超人氣在地餐館，份量十足、價格親民，必點黑墨魚燉飯、烤鮮魚與達爾馬提亞燉牛肉 (Pašticada)；② Konoba Marjan (Radmilovića 13)，溫馨小酒館，海鮮新鮮道地。',
        address: 'Trg Franje Tuđmana 4 / Radmilovića 13, Split',
        mapQuery: 'Buffet Fife Split'
      },
      {
        time: '14:00',
        type: 'shopping',
        title: '🧺 Green Market (Pazar 傳統露天市集)',
        badge: '地道達爾馬提亞物產集散地',
        description: '位於戴克里先宮銀門外，斯普利特最熱鬧的生活市集：新鮮蔬果、橄欖油、起司、蜂蜜、風乾火腿 (Pršut)、紀念品與當地香料。',
        duration: '約 45 分鐘',
        address: 'Ul. Stari pazar, 21000 Split',
        mapQuery: 'Green Market Split'
      },
      {
        time: '14:45',
        type: 'food',
        title: '🍦 Luka Ice Cream & Cakes (Split 第一名手工冰淇淋)',
        badge: '超人氣天然冰淇淋 · 每日手作',
        description: '位於老城區巷弄內，斯普利特評價最高的手工冰淇淋店，主打天然無添加食材，開心果 (Pistachio)、薰衣草蜂蜜、黑巧克力與當季水果雪酪是必點招牌。',
        address: 'Štafilićeva ul. 4, 21000 Split',
        openingHours: '10:00–22:00',
        mapQuery: 'Luka Ice Cream & Cakes Split'
      },
      {
        time: '14:30',
        type: 'activity',
        title: '🏛 戴克里先宮 (Diocletian’s Palace)',
        badge: '古羅馬帝國遺產 · 08:00～19:00',
        description: '地址：Diocletian’s Palace, Split。時間：約 08:00～19:00。西元 305 年羅馬皇帝戴克里先退位後的宏偉宮殿，歷經千百年已與城市生活融合，參觀列柱廊中庭、地下宮殿與歷史四座城門。',
        duration: '約 1.5 小時',
        address: 'Diocletian\'s Palace, 21000 Split',
        mapQuery: 'Diocletian\'s Palace Split'
      },
      {
        time: '16:00',
        type: 'activity',
        title: '⛪ 聖杜金主教座堂 (Cathedral of St. Domnius)',
        badge: '原為戴克里先皇帝陵墓 · 7世紀改為教堂',
        description: '原為戴克里先皇帝陵墓，7 世紀改為教堂，是仍在使用的古老天主教堂之一，也是 Split 的地標與 UNESCO 遺產核心。',
        duration: '約 45 分鐘',
        address: 'Ul. Kraj Svetog Duje 5, 21000 Split',
        mapQuery: 'Cathedral of Saint Domnius Split'
      },
      {
        time: '17:00',
        type: 'activity',
        title: '🌴 Riva 海濱長廊漫步 ＆ Jadrolinija 渡輪碼頭探勘',
        badge: '夕陽海景 · 為明日渡輪做準備',
        description: '漫步於棕櫚樹與露天咖啡座點綴的 Riva 海濱散步道，並步行至旁邊的 Jadrolinija 渡輪碼頭了解明日車輛排隊登船動線。',
        duration: '約 1 小時',
        address: 'Obala Hrvatskog narodnog preporoda, 21000 Split',
        mapQuery: 'Riva Split'
      },
      {
        time: '18:30',
        type: 'accommodation',
        title: '🏨 返回住宿：AC Hotel Split by Marriott (續住第 2 晚)',
        badge: '萬豪海景房 · 頂樓泳池休憩',
        description: '返回萬豪酒店享受頂樓恆溫泳池與海景高樓夜景，為明日跳島行程養精蓄銳。',
        address: 'Ul. Domovinskog rata 61A, 21000 Split, Croatia'
      }
    ]
  },

  // ==========================================
  // Day 18: 10/15 (THU) ｜ HVAR ISLAND (赫瓦爾島)
  // ==========================================
  {
    dayNum: 18,
    date: '2026/10/15',
    dateDisplay: '10/15 (四)',
    month: '10',
    day: '15',
    weekday: '星期四 / THU',
    cityRegion: 'Hvar Island (赫瓦爾島)',
    themeTitle: '雅德羅利尼亞渡輪直抵 ＆ 赫瓦爾老城石板漫步 ＆ 傳統 Peka 饗宴',
    englishDestination: 'SPLIT → HVAR ISLAND',
    chineseSubtitle: 'Split 渡輪直抵 Stari Grad ＋ 赫瓦爾老城步行 1.5km ＋ 詩人宅邸 ＆ 傳統石屋 Peka',
    hotelName: 'Three Little Birds',
    hotelRoomType: '5位成人獨棟泳池別墅 · 1晚 · 附廚房洗衣機',
    hotelAddress: 'Vrbanj, 21460 Vrbanj, Hvar Island, Croatia',
    hotelNote: '已付款 · 入住 15:00–23:00 · 退房 10/16 10:00 · +385 91 174 1531',
    region: 'croatia',
    highlights: ['Jadrolinija 635 渡輪 (08:30➜10:20)', 'Hvar 老城經典步行 1.5km', '聖史蒂芬主教座堂', '特弗爾達利堡 Tvrdalj', 'Konoba Kokot 傳統 Peka', '入住 Three Little Birds'],
    todayRoute: [
      'Split 碼頭搭乘 Jadrolinija 635 渡輪 (08:30 → 10:20 抵達 Stari Grad)',
      '自駕前往赫瓦爾老城，車輛停放於 Dolac 1 公共停車場',
      '赫瓦爾老城步行巡禮：Dolac 1 停車場 → 聖史蒂芬主教座堂 → 聖史蒂芬廣場 → 軍械庫與劇院 → Riva 海濱 → 方濟會修道院',
      'Bistro Ero 享用在地美味克羅埃西亞烤肉小吃',
      '前往 Stari Grad 參觀詩人宅邸「特弗爾達利堡 (Tvrdalj)」',
      '小鎮伴手禮採買 (TOMMY 超市、Božić ulje 橄欖油、Lavanda 薰衣草、Pavičić Vina 家庭酒莊)',
      'Konoba Kokot 享用羊肉／章魚／小牛肉傳統 Peka 鐵鐘烤肉與山羊起司',
      '入住 Three Little Birds 泳池度假別墅'
    ],
    importantAlerts: [
      {
        title: '⛴ Jadrolinija 635 渡輪登船提醒',
        type: 'ferry',
        content: 'Split → Stari Grad 航程約 110 分鐘，推薦搭乘 08:30 → 10:20 班次。建議開車提早 45～60 分鐘抵達 Split 碼頭排隊等待引導登船。備選班次：06:00, 14:30, 20:30。'
      },
      {
        title: '🍖 Konoba Kokot 傳統 Peka 預約注意',
        type: 'warning',
        content: '達爾馬提亞傳統鐵鐘蓋悶烤 Peka（羊肉、章魚、小牛肉）製作耗時，建議至少提前一天預訂！營業時間：18:00–00:00，預算約 €25～35/人。'
      }
    ],
    timeline: [
      {
        time: '08:30',
        type: 'ferry',
        title: '⛴ Jadrolinija 635 渡輪：Split ➜ Stari Grad',
        badge: '航程 110 分鐘 · 08:30 開航',
        description: '08:30 由 Split 碼頭出發，10:20 抵達赫瓦爾島 Stari Grad 港口。航程平穩，可於甲板欣賞亞德里亞海島嶼風光。備選班次：06:00, 14:30, 20:30。',
        duration: '約 110 分鐘',
        address: 'Trajektna luka Split, 21000 Split',
        mapQuery: 'Trajektna luka Split'
      },
      {
        time: '10:45',
        type: 'parking',
        title: '🅿 Hvar City Center Parking (Dolac 1 公共停車場)',
        badge: '老城外圍停車場 · 座標 5CFW+72',
        description: '停妥車輛後步行進入赫瓦爾老城行人徒步區，展開老城步行行程。',
        address: 'Dolac, 21450 Hvar, 克羅埃西亞',
        mapQuery: 'Dolac Hvar parking'
      },
      {
        time: '11:00',
        type: 'walk',
        title: '🚶 HVAR 赫瓦爾老城步行行程 (往返約 1.5～2 公里)',
        badge: '經典徒步環線 · 1.5～2 km',
        description: 'Dolac 1 停車場 ➜ 聖史蒂芬主教座堂 ➜ 聖史蒂芬廣場 ➜ 軍械庫／歷史劇院外觀 ➜ Riva 海濱 ➜ 方濟會修道院外觀 ➜ 原路返回聖史蒂芬廣場。',
        duration: '約 1.5 小時'
      },
      {
        time: '11:15',
        type: 'activity',
        title: '⛪ 聖史蒂芬主教座堂 (St. Stephen’s Cathedral)',
        badge: '老城核心地標 · 文藝復興與巴洛克風格',
        description: '座落於赫瓦爾老城核心「聖史蒂芬廣場」東側端點。始建於 16 世紀、17 世紀完工，結合文藝復興與達爾馬提亞巴洛克風格。',
        duration: '約 30 分鐘',
        ticketPrice: '€2 / 人',
        openingHours: '09:00–12:30、17:00–19:30',
        address: 'Trg svetog Stjepana 26, 21450 Hvar, Croatia',
        mapQuery: 'Cathedral of St Stephen Hvar'
      },
      {
        time: '12:30',
        type: 'food',
        title: '🍴 Bistro Ero (赫瓦爾在地烤肉與平價小吃)',
        badge: '克羅埃西亞烤肉 · 平價道地',
        description: '提供在地美味 Ćevapi 烤肉串、地中海風味小吃與冷飲，出餐快速且份量實在。',
        openingHours: '12:00–16:00',
        address: 'Ive Miličića 13, 21450 Hvar, 克羅埃西亞',
        mapQuery: 'Bistro Ero Hvar'
      },
      {
        time: '14:00',
        type: 'activity',
        title: '🏰 特弗爾達利堡 (Tvrdalj of Petar Hektorović)',
        badge: '文藝復興詩人宅邸 · 魚池拱廊庭園',
        description: '位於 Stari Grad 斯塔里格勒，是詩人 Petar Hektorović 的文藝復興時期石造宅邸。最值得看的是內部引入海水的活魚海水池、石造拱廊與詩意庭園。',
        duration: '約 1 小時',
        ticketPrice: '€5 / 人',
        openingHours: '10:00–14:00、17:00–20:00',
        address: 'Ive Miličića 13, 21460 Stari Grad, 克羅埃西亞',
        mapQuery: 'Tvrdalj Castle Stari Grad'
      },
      {
        time: '15:30',
        type: 'shopping',
        title: '🛍 HVAR 採買・伴手禮・酒莊巡禮',
        badge: '橄欖油 · 薰衣草 · 特產酒莊',
        description: '① TOMMY (Stari Grad 渡輪港旁分店，Trajektno pristanište 2)；② Božić ulje (Svirče 105A，在地頂級橄欖油)；③ Lavanda Hvar (Jelsa 750，薰衣草伴手禮)；④ Pavičić Vina (Vrbanj 169，家庭酒莊品酒)；⑤ Alevia Hvar (Vrboska 1, Velo Grablje，開放 08:00–00:00，Soul Food 咖啡館)。',
        address: 'Stari Grad / Vrbanj / Jelsa / Svirče, Hvar'
      },
      {
        time: '17:00',
        type: 'accommodation',
        title: '🏨 入住：Three Little Birds 獨棟泳池別墅',
        badge: '5 位成人包棟 · 附廚房私人泳池洗衣機',
        description: '入住位於 Vrbanj 的獨棟度假別墅。入住時間 15:00–23:00，退房時間 10/16 10:00。附設免費私人停車。電話：+385 91 174 1531。',
        address: 'Vrbanj, 21460 Vrbanj, Hvar Island, Croatia',
        mapQuery: 'Three Little Birds Vrbanj Hvar'
      },
      {
        time: '18:30',
        type: 'food',
        title: '🍷 Konoba Kokot (達爾馬提亞傳統石屋 Peka 大餐)',
        badge: 'Traditional Dalmatian Konoba · 必吃鐵鐘悶烤',
        description: '島上極負盛名的傳統 Konoba。必吃特色：羊肉 Peka (Lamb Peka)、章魚 Peka (Octopus Peka)、小牛肉 Peka (Veal Peka)、野豬料理 (Wild Boar) 與在地手工山羊起司 (Goat Cheese)。預算約 €25～35/人（Peka 建議提前至少一天預訂）。',
        openingHours: '18:00–00:00',
        address: 'Dol, 21462 Dol, Hvar Island, Croatia',
        mapQuery: 'Konoba Kokot Dol Hvar'
      }
    ]
  },

  // ==========================================
  // Day 19: 10/16 (FRI) ｜ HVAR → STON → TIVAT (黑山蒙特內哥羅)
  // ==========================================
  {
    dayNum: 19,
    date: '2026/10/16',
    dateDisplay: '10/16 (五)',
    month: '10',
    day: '16',
    weekday: '星期五 / FRI',
    cityRegion: 'Hvar ➜ Ston ➜ Tivat (跨國黑山蒙特內哥羅)',
    themeTitle: 'Sućuraj 渡輪回本土 ＆ 斯通千年城牆 ＆ 鮮甜歐洲扁牡蠣 ＋ 跨國入境黑山港',
    englishDestination: 'HVAR → STON → TIVAT (MONTENEGRO)',
    chineseSubtitle: '07:40 出發 ＋ 09:30 渡輪回本土 ＋ 斯通享用珍貴扁牡蠣 ＋ 跨越邊境入住頂級 SIRO',
    hotelName: 'SIRO Porto Montenegro',
    hotelRoomType: '雙臥室奢華公寓 · 5位成人 · 2晚連住 · 含早餐',
    hotelAddress: '1 Blaža Jovanovića, Seljanovo, Tivat, Montenegro 85320',
    hotelNote: '已確認 · Agoda 預訂付訖 (US$942.97) · 含每日早餐 · 頂級遊艇港',
    region: 'croatia',
    highlights: ['Sućuraj 632 渡輪 (09:30➜10:00)', 'Ston 斯通城牆防禦工事', 'Mali Ston 歐洲扁牡蠣 Ostrea Edulis', '克蒙邊境通關', 'Kamenari–Lepetane 車渡', '入住 SIRO Porto Montenegro'],
    todayRoute: [
      '07:40 Three Little Birds (Vrbanj) 出發，車程約 1 小時 20 分穿越島脊',
      '09:00 抵達島東端 Sućuraj Ferry Port 排隊候船',
      '09:30 搭乘 Jadrolinija 632 渡輪跨海，約 10:00 抵達本土 Drvenik (航程 30 分鐘)',
      '自駕經濱海公路與佩萊沙治公路，約 1 小時 20 分於 11:20 抵達 Ston',
      '11:20～13:30 Ston／Mali Ston：走訪斯通城牆與聖布萊斯教堂，享用 Mali Ston 鮮甜歐洲扁牡蠣午餐',
      '13:30 離開 Ston，自駕經杜布羅夫尼克外圍前往邊境 (車程約 2.5～3 小時)',
      '辦理 Croatia ➜ Montenegro 跨國邊境通關手續 (預留 30～60 分鐘)',
      '搭乘 Kamenari–Lepetane 車渡橫跨 Verige 峽灣海峽',
      '約 16:30～17:30 抵達 Tivat，入住 SIRO Porto Montenegro 奢華公寓 (共 5 人)'
    ],
    importantAlerts: [
      {
        title: '⛴ Sućuraj 渡輪班次與車程掌握',
        type: 'ferry',
        content: '由 Vrbanj 前往 Sućuraj 碼頭路程約 80 分鐘且多彎道，請於 07:40 準時出發，確保於 09:00 前抵達碼頭排隊搭乘 09:30 船班（若錯過需等到 13:00）。航程約 30 分鐘。備選班次：06:30, 13:00, 15:00。'
      },
      {
        title: '🛂 克蒙跨國陸路海關通關查驗',
        type: 'traffic',
        content: '由克羅埃西亞（申根）進入蒙特內哥羅（非歐盟國家），邊防關卡需查驗全員護照、租車綠卡（Green Card）保險單與車輛行照。通關時間約預留 30～60 分鐘。'
      }
    ],
    timeline: [
      {
        time: '07:40',
        type: 'transport',
        title: '🚗 07:40 出發：Three Little Birds ➜ Sućuraj 渡輪港',
        badge: '車程約 1 小時 20 分 · 橫越島東公路',
        description: '整理退房出發，沿 116 號公路穿越赫瓦爾島山脊前往島東端碼頭 Sućuraj。',
        duration: '約 1 小時 20 分'
      },
      {
        time: '09:30',
        type: 'ferry',
        title: '⛴ Jadrolinija 632 渡輪：Sućuraj ➜ Drvenik (回到本土)',
        badge: '航程 30 分鐘 · 09:30 開航 10:00 抵達',
        description: '搭乘 632 號渡輪返回克羅埃西亞本土 Drvenik 碼頭。備選班次：06:30, 13:00, 15:00。',
        duration: '30 分鐘',
        address: 'Trajektno pristanište Sućuraj',
        mapQuery: 'Ferry Port Sucuraj'
      },
      {
        time: '11:20',
        type: 'activity',
        title: '🏰 斯通古城 ＆ 斯通城牆 (Stonske Zidine)',
        badge: '歐洲第二長城 · 14 世紀防禦工事',
        description: '14 世紀杜布羅夫尼克共和國興建的大型防禦工事，城牆沿山勢連接 Ston 與 Mali Ston，保護珍貴的千年古鹽田。是 Ston 最具代表性的地標，不必走完整段。',
        duration: '約 1 小時',
        address: '20230, Ston, Croatia',
        mapQuery: 'Ston City Walls Croatia'
      },
      {
        time: '11:45',
        type: 'activity',
        title: '⛪ 聖布萊斯教堂 (Crkva sv. Vlaha)',
        badge: '斯通古城守護聖人教堂',
        description: '座落於 Ston 核心主街，歷史悠久，供奉杜布羅夫尼克與斯通的守護聖人。',
        address: 'Placa 17, 20230 Ston, Croatia',
        mapQuery: 'Crkva sv Vlaha Ston'
      },
      {
        time: '12:15',
        type: 'food',
        title: '🦪 午餐：Mali Ston 歐洲扁牡蠣 (Ostrea Edulis)',
        badge: '世界頂級扁牡蠣 · 現剖鮮美甘甜',
        description: '特色：Mali Ston 出產的牡蠣是珍貴的 OSTREA EDULIS 歐洲扁牡蠣。因海灣特殊鹽分比例與內雷特瓦河沖積礦物質滋養，風味鮮甜獨特。推薦餐廳：① Kapetanova kuća (Obala dr. Ante Starčevića 9, Mali Ston，營業 11:00–23:00)；② Oysters ANTONIO (Zamaslina 4, 20230 Ston，營業 12:00–22:00)。',
        address: 'Mali Ston / Ston, Croatia',
        mapQuery: 'Kapetanova kuca Mali Ston'
      },
      {
        time: '13:30',
        type: 'transport',
        title: '🚗 13:30 離開 Ston ➜ 前往黑山蒙特內哥羅 (含通關與車渡)',
        badge: '車程約 2.5～3 小時 · 跨國邊境通關',
        description: '離開 Ston，途經南達爾馬提亞景觀公路前往邊境關卡。沿途備案加油站：INA 加油站 (Magistrala 5, 21330 Gradac，營業 06:00–22:00)。邊境通關預留 30～60 分鐘。',
        duration: '約 2.5～3 小時'
      },
      {
        time: '16:00',
        type: 'ferry',
        title: '⛴ Kamenari–Lepetane 車渡 (橫跨 Verige 峽灣海峽)',
        badge: '跨海峽車渡 · 航程約 10 分鐘',
        description: '經由 Verige 最窄海峽搭乘頻繁往返的汽車渡輪橫跨海灣抵達 Tivat 側，省去 40 公里繞灣山路。',
        address: 'Lepetane, Montenegro',
        mapQuery: 'Lepetane Ferry Montenegro'
      },
      {
        time: '17:00',
        type: 'accommodation',
        title: '🏨 約 16:30～17:30 抵達：SIRO Porto Montenegro (2 晚連住)',
        badge: '黑山港頂級奢華寓所 · 5人雙臥室',
        description: '住宿 10/16～10/18，共 5 人。坐落於 Porto Montenegro 超級遊艇碼頭，結合極致健康、運動水療與海灣景致。含 5 人每日早餐。',
        address: '1 Blaža Jovanovića, Seljanovo, Tivat, Montenegro 85320',
        phone: '+382 32 660 000',
        mapQuery: 'SIRO Porto Montenegro Tivat'
      }
    ]
  },

  // ==========================================
  // Day 20: 10/17 (SAT) ｜ TIVAT → PERAST → KOTOR → TIVAT (黑山精華日)
  // ==========================================
  {
    dayNum: 20,
    date: '2026/10/17',
    dateDisplay: '10/17 (六)',
    month: '10',
    day: '17',
    weekday: '星期六 / SAT',
    cityRegion: 'Tivat ➜ Perast ➜ Kotor (科托爾灣峽灣雙城)',
    themeTitle: '佩拉斯特巴洛克古鎮 ＆ 岩上聖母島 ＆ 科托爾威尼斯老城巡禮',
    englishDestination: 'TIVAT → PERAST → KOTOR → TIVAT',
    chineseSubtitle: '峽灣高處觀景台 ＋ 岩上聖母島乘船 ＋ 科托爾老城五大地標 ＋ 傳統海鮮料理',
    hotelName: 'SIRO Porto Montenegro',
    hotelRoomType: '續住第 2 晚 · 雙臥室奢華公寓 · 含早餐',
    hotelAddress: '1 Blaža Jovanovića, Seljanovo, Tivat 85320, Montenegro',
    region: 'croatia',
    highlights: ['Panorama View Point 峽灣觀景台', 'Perast 佩拉斯特巴洛克古鎮', 'Our Lady of the Rocks 岩上聖母島', 'Kotor 老城五大地標 (海門/鐘樓/大教堂)', 'Konoba Scala Santa 海鮮', 'Tivat 魚市場'],
    todayRoute: [
      '09:00 SIRO Porto Montenegro 出發，前往 Lepetane 碼頭',
      '約 09:20～09:40 Lepetane → Kamenari 車渡 (途中經過 Verige 海峽)',
      '約 10:15～10:45 抵達 Panorama View Point 觀景台 (拍攝 Perast／科托爾灣景觀)',
      '約 11:15 抵達 Perast 北側停車場 (Parking Hotel Heritage Grand Perast)',
      '11:15～14:00 Perast 海濱散步、參觀聖尼古拉教堂，並搭小船往返「岩上聖母島 (Our Lady of the Rocks)」',
      '下午前往 Kotor 科托爾世界遺產古城巡禮：海門、武器廣場、鐘樓、聖特里芬主教座堂、聖盧克教堂',
      'Kotor 享用海鮮名店 Konoba Scala Santa (淡菜 Buzara、烤鮮魚、黑墨魚燉飯) 或 Konoba Portun',
      '走訪 Tivat 魚市場 (Riblja pijaca) 感受黑山在地海港市集',
      '返回 SIRO Porto Montenegro 享受港灣奢華夜色'
    ],
    importantAlerts: [
      {
        title: '⛵ 岩上聖母島小船往返提醒',
        type: 'ferry',
        content: '從 Perast 海濱搭乘接駁小木船前往岩上聖母島約 5～10 分鐘，島上停留時間約 30～45 分鐘，10 月船班依現場確認（每人約 €5～10 來回）。'
      },
      {
        title: '🅿 Perast 佩拉斯特停車規定',
        type: 'parking',
        content: 'Perast 古鎮沿海街道全面禁止非住戶車輛開入，請將車輛停放在北側指定收費停車場 Parking Hotel Heritage Grand Perast，再步行進入古鎮海濱。'
      }
    ],
    timeline: [
      {
        time: '09:00',
        type: 'transport',
        title: '🚗 09:00 出發：SIRO ➜ 前往 Lepetane 車渡碼頭',
        badge: '車渡橫跨 Verige 海峽',
        description: '出發前往車渡碼頭，約 09:20～09:40 搭乘 Lepetane → Kamenari 車渡，航程中經過壯麗的 Verige 峽灣海峽。',
        duration: '約 40 分鐘',
        address: '1 Blaža Jovanovića, Seljanovo, Tivat 85320, Montenegro'
      },
      {
        time: '10:15',
        type: 'activity',
        title: '📷 Panorama View Point 觀景台 (俯瞰峽灣與古鎮)',
        badge: '黑山必拍壯麗全景 · 座標 42°29\'05.3"N 18°41\'33.3"E',
        description: '座落於高處最佳展望點（附近：Krke, Montenegro），眺望佩拉斯特古鎮、外海雙子島與科托爾峽灣壯闊群山。停留時間約 30 分鐘。',
        duration: '約 30 分鐘',
        address: '42°29\'05.3"N 18°41\'33.3"E, Krke, Montenegro',
        mapQuery: '42.484806, 18.692583'
      },
      {
        time: '11:15',
        type: 'parking',
        title: '🅿 抵達 Perast 北側停車場 (Parking Hotel Heritage Grand Perast)',
        badge: '古鎮外圍專用停車場',
        description: '停妥車輛後沿海濱石板路步行進入佩拉斯特古城區。',
        address: 'Marka Martinovića, Perast 85336, Montenegro',
        mapQuery: 'Parking Hotel Heritage Grand Perast'
      },
      {
        time: '11:30',
        type: 'walk',
        title: '🚶 Perast 佩拉斯特古鎮海濱散步 ＆ 聖尼古拉教堂',
        badge: '科托爾灣巴洛克小鎮 · 停留約 40～60 分鐘',
        description: '科托爾灣內的小型巴洛克古鎮，沿海濱步行即可欣賞石造宮殿、教堂鐘樓與海灣景色，不需要安排長距離步行。重點：海濱步道、St. Nicholas Church 聖尼古拉教堂外觀 (Trg Sv. Nikole)、船碼頭。',
        duration: '約 50 分鐘',
        address: 'Trg Sv. Nikole, 85336 Perast, Montenegro',
        mapQuery: 'St Nicholas Church Perast'
      },
      {
        time: '12:20',
        type: 'ferry',
        title: '⛵ 搭船探訪：Our Lady of the Rocks (岩上聖母島)',
        badge: '傳奇海中人工島 · 船程 5～10 分鐘',
        description: '位於 Perast 外海的人工島。從 Perast 海濱搭小船約 5～10 分鐘即可抵達。島上停留約 30～45 分鐘，可參觀聖母教堂與藍色圓頂博物館，飽覽海灣全景。',
        duration: '約 45 分鐘',
        address: 'Perast, Bay of Kotor, Montenegro',
        mapQuery: 'Our Lady of the Rocks Perast'
      },
      {
        time: '14:00',
        type: 'activity',
        title: '🏰 Kotor 科托爾世界遺產古城巡禮 (海門、廣場、鐘樓與大教堂)',
        badge: '威尼斯防禦工事城牆 · UNESCO 遺產',
        description: '① 海門 (Sea Gate，古城主要入口，建於 1555 年威尼斯統治時期，全天免費)；② 武器廣場 (Arms Square，古城核心大廣場)；③ 鐘樓 (Clock Tower，建於 1602 年地標)；④ 聖特里芬主教座堂 (St. Tryphon Cathedral，始建於 1166 年最重要宗教建築，Trg Sv. Tripuna)；⑤ 聖盧克教堂 (St. Luke’s Church，建於 1195 年羅馬式教堂，Trg Sv. Luke)。',
        duration: '約 1.5 小時',
        address: 'Trg od Oružja, 85330 Kotor, Montenegro',
        mapQuery: 'Kotor Old Town Montenegro'
      },
      {
        time: '15:30',
        type: 'food',
        title: '🍴 Kotor 美味海鮮餐廳：Konoba Scala Santa / Konoba Portun',
        badge: '在地黑山傳統海鮮 · 必點淡菜 Buzara',
        description: '推薦：① Konoba Scala Santa (Old Town, 營業 10:00–23:00)，必點淡菜 Buzara、烤鮮魚、黑墨魚燉飯；② Konoba Portun (168 Donji put, Dobrota，海灣餐廳，營業 09:00–00:00)，必點烤章魚、烤蝦、鮮魚、海鮮拼盤。',
        address: 'Old Town, Kotor 85330 / Dobrota, Kotor',
        mapQuery: 'Konoba Scala Santa Kotor'
      },
      {
        time: '17:30',
        type: 'shopping',
        title: '🐟 Riblja pijaca｜Tivat 魚市場 ＆ 港灣散步',
        badge: 'Trg Magnolia 市場區 · 在地海鮮蔬果',
        description: 'Trg Magnolia 市場區的傳統市場，可購買當季鮮魚、蝦、貝類、海鮮與新鮮蔬果。營業時間：週一～週六約 07:00–19:00。',
        address: 'CMHX+PMX, 21. Novembra, Tivat, Montenegro',
        mapQuery: 'Riblja pijaca Tivat'
      }
    ]
  },

  // ==========================================
  // Day 21: 10/18 (SUN) ｜ TIVAT → CAVTAT → DUBROVNIK (君臨城啟程)
  // ==========================================
  {
    dayNum: 21,
    date: '2026/10/18',
    dateDisplay: '10/18 (日)',
    month: '10',
    day: '18',
    weekday: '星期日 / SUN',
    cityRegion: 'Tivat ➜ Cavtat ➜ Dubrovnik (杜布羅夫尼克)',
    themeTitle: '卡弗塔特天然良港漫步 ＆ 領取 Dubrovnik Pass ＆ 入住普洛切三臥公寓',
    englishDestination: 'TIVAT → CAVTAT → DUBROVNIK',
    chineseSubtitle: '09:00 退房 ＋ 蒙克邊境通關 ＋ 卡弗塔特良港海鮮午餐 ＋ 抵達君臨城入住 Tirkiz',
    hotelName: 'Tirkiz Apartment',
    hotelRoomType: '三臥室公寓 (5位成人) · 3晚連住 · 附廚房洗衣機',
    hotelAddress: '29 Ulica Lukše Beritića, 20000 Dubrovnik, Croatia',
    hotelNote: '已付款 · 入住 15:00–22:00 · 退房 10/21 03:00–10:00 · +385 99 296 0954',
    region: 'croatia',
    highlights: ['Montenegro ➜ Croatia 邊境通關', 'Cavtat 天然良港度假小鎮', 'Konoba Kolona 地中海料理', '入住 Tirkiz Apartment (3晚)', '領取 Dubrovnik Pass 實體公車券'],
    todayRoute: [
      '09:00～10:00 SIRO Porto Montenegro 享用早餐、整理行李並辦理退房',
      '上午 Tivat → 邊境：辦理 Montenegro／Croatia 跨國通關手續 (預留約 30～60 分鐘)',
      '中午抵達克羅埃西亞南端知名的天然良港度假勝地 Cavtat (卡弗塔特)',
      '車輛停放於 Cavtat Parking Lot，漫步清澈平靜的海灣良港',
      '於 Konoba Kolona 享用道地傳統海鮮與地中海料理午餐',
      '自駕前往君臨城杜布羅夫尼克 (Dubrovnik)',
      '約 15:00 入住 Tirkiz Apartment (29 Ulica Lukše Beritića，3 晚連住)',
      '前往 Pile Gate (派勒門外窗口) 出示 Dubrovnik Pass QR Code 領取實體公車乘車券'
    ],
    importantAlerts: [
      {
        title: '🛂 蒙克邊境通關時間預留',
        type: 'traffic',
        content: '由黑山出境、入境克羅埃西亞（歐盟申根區），邊境查驗護照與車輛租賃保險綠卡較嚴格，假日可能遇車潮，請預留 30～60 分鐘通關時間。'
      },
      {
        title: '🎫 Dubrovnik Pass 實體公車券領取窗口',
        type: 'general',
        content: '位置在杜布羅夫尼克古城西側「Pile Gate 派勒門外面」，就在公車站旁窗口。營業時間每日 07:00–23:00，電話 +385 20 414 583。出示 Pass QR Code 即可領取實體公車乘車券。'
      }
    ],
    timeline: [
      {
        time: '09:30',
        type: 'accommodation',
        title: '🏨 09:00～10:00 SIRO Porto Montenegro 早餐／整理行李・退房',
        badge: '退房整備 · 出發前往邊境',
        description: '享用 SIRO 精緻早餐，退房啟程前往黑山與克羅埃西亞邊界。',
        duration: '30 分鐘',
        address: '1 Blaža Jovanovića, Seljanovo, Tivat 85320'
      },
      {
        time: '10:30',
        type: 'transport',
        title: '🛂 Tivat ➜ 邊境：辦理 Montenegro／Croatia 邊境通關',
        badge: '跨國通關查驗 · 預留約 30～60 分鐘',
        description: '出境蒙特內哥羅、進入克羅埃西亞。請備妥全員護照與車輛保險綠卡。',
        duration: '約 45 分鐘'
      },
      {
        time: '11:45',
        type: 'parking',
        title: '🅿 抵達 Cavtat (卡弗塔特) ＆ Cavtat Parking Lot 停車',
        badge: '天然良港 · 停車費 €2 / HR',
        description: '海灣小鎮卡弗塔特是由群山與許多小海灣環抱的天然良港，港內海水平靜、清澈見底。車輛停放於 Cavtat Parking Lot (€2/HR；隔壁的 Studenac 商店提供購物服務，提供購物免費停車一小時優惠)。',
        address: 'Cavtat Parking Lot, 20210 Cavtat, Croatia',
        mapQuery: 'Cavtat Parking Lot'
      },
      {
        time: '12:15',
        type: 'food',
        title: '🍴 午餐：Konoba Kolona (傳統海鮮與地中海料理)',
        badge: '海灣老牌 Konoba · 鮮美道地',
        description: '座落於海灣安靜巷弄，提供在地捕撈的新鮮烤魚、烤章魚、地中海燉菜與現拌生菜沙拉。營業時間：12:00–23:00。',
        address: 'Put Tihe 2, 20210 Cavtat, Croatia',
        openingHours: '12:00–23:00',
        mapQuery: 'Konoba Kolona Cavtat'
      },
      {
        time: '14:15',
        type: 'transport',
        title: '🚗 自駕：Cavtat ➜ 杜布羅夫尼克 (約 25 分鐘)',
        badge: '亞德里亞海濱大道',
        description: '沿 D8 公路向北行駛，沿途眺望無垠海景與杜城古堡外觀。',
        duration: '約 25 分鐘'
      },
      {
        time: '15:00',
        type: 'accommodation',
        title: '🏨 約 15:00 入住：Tirkiz Apartment (3 晚連住 · 5人公寓)',
        badge: '已全額付款 · 廚房洗衣機 · 3 臥室',
        description: '入住杜布羅夫尼克普洛切區三臥室公寓。入住時間 10/18 15:00–22:00，退房時間 10/21 03:00–10:00。配備 3 間獨立臥室、全套廚房與洗衣機。電話：+385 99 296 0954。',
        address: '29 Ulica Lukše Beritića, 20000 Dubrovnik, Croatia',
        mapQuery: '29 Ulica Lukse Beritica Dubrovnik'
      },
      {
        time: '16:30',
        type: 'activity',
        title: '🎫 領取 Dubrovnik Pass 實體公車券 ＆ 老城夕陽漫步',
        badge: 'Pile Gate 窗口兌換 · 每日 07:00–23:00',
        description: '前往杜布羅夫尼克古城西側「Pile Gate 派勒門外」公車站旁窗口，出示 Dubrovnik Pass QR Code 領取實體公車乘車券。傍晚漫步史特拉敦大道感受君臨城黃昏石板路的浪漫金光。電話：+385 20 414 583。',
        address: 'Pile Gate, 20000 Dubrovnik, Croatia',
        mapQuery: 'Pile Gate Dubrovnik'
      }
    ]
  },

  // ==========================================
  // Day 22: 10/19 (MON) ｜ DUBROVNIK (君臨城經典徒步 ＆ 登山纜車)
  // ==========================================
  {
    dayNum: 22,
    date: '2026/10/19',
    dateDisplay: '10/19 (一)',
    month: '10',
    day: '19',
    weekday: '星期一 / MON',
    cityRegion: 'Dubrovnik (杜布羅夫尼克老城 ＆ 塞爾德山)',
    themeTitle: '君臨城老城精華步行 ＆ 洛夫里耶納茨要塞 ＆ 纜車登 Srd 山全景夕陽',
    englishDestination: 'DUBROVNIK OLD TOWN & MT. SRĐ',
    chineseSubtitle: 'Dubrovnik Pass 三日卡核心景點 ＋ 紅堡懸崖要塞 ＋ 纜車登頂眺望亞德里亞海夕陽',
    hotelName: 'Tirkiz Apartment',
    hotelRoomType: '續住第 2 晚 · 3臥室公寓',
    hotelAddress: '29 Ulica Lukše Beritića, 20000 Dubrovnik, Croatia',
    region: 'croatia',
    highlights: ['Dubrovnik Pass 三日卡 €50', '老城精華步行 1.4km (噴泉/修道院/總督宮/大教堂)', 'Fort Lovrijenac 洛夫里耶納茨要塞 (GOT紅堡)', 'Dubrovnik Cable Car 登 Srd 山', 'Restaurant Pjerin 精緻海景晚餐'],
    todayRoute: [
      '早晨前往 Gruž 市場旁 Pekara Mare 購買剛出爐新鮮烘焙麵包',
      '展開古城精華步行路線 (約 1.4 公里／30 分鐘徒步路程)',
      '步行景點：Pile Gate 皮勒城門 ➜ 奧諾弗里奧大噴泉 ➜ 方濟會修道院 ➜ 斯邦札宮 ➜ 總督宮 ➜ 杜布羅夫尼克大教堂 ➜ 耶穌會階梯 ➜ 派勒海灣',
      '參觀立於 37 公尺懸崖上的「Fort Lovrijenac 洛夫里耶納茨要塞」(憑 Pass 免費進入，《權力遊戲》紅堡取景地)',
      '午餐：Bon Appetit Bistro - Pizzeria (Gruž 市場旁平價人氣店)',
      '傍晚搭乘 Dubrovnik Cable Car 登山纜車（或搭 Uber 約 €25）登 Srd 山頂',
      '山頂 Panorama 觀景台飽覽老城紅瓦海灣與落日餘暉',
      '晚餐：Restaurant Pjerin (Ul. Vlaha Bukovca 6，精緻海景正式晚宴)'
    ],
    importantAlerts: [
      {
        title: '🎫 Dubrovnik Pass 三日卡 (€50) 核心權益',
        type: 'general',
        content: '三日卡 €50 主要包含：城牆 (City Walls)、總督宮 (Rector’s Palace)、斯邦札宮 (Sponza Palace) 展覽、文化歷史博物館、方濟會修道院博物館、大教堂寶庫、民俗博物館、Libertas 實體公車乘車券。'
      },
      {
        title: '🚡 Dubrovnik Cable Car 纜車價格與 Uber 替代方案',
        type: 'cablecar',
        content: '登山纜車成人來回 €30、單程 €17（山下站：Dubrovnik Cable Car Lower Station，山頂站：Panorama Restaurant）。Uber 叫車單程約 €20～25，4～5 人同行搭 Uber 叫車比較便宜划算。'
      }
    ],
    timeline: [
      {
        time: '08:30',
        type: 'food',
        title: '🥐 早餐：Pekara Mare (Gruž 市場旁美味麵包店)',
        badge: '在地麵包店 · 營業 06:00–21:00',
        description: '購買新鮮麵包、鹹派、烘焙點心與熱咖啡，可外帶至海濱享用。',
        address: 'Obala Stjepana Radića 17, Dubrovnik',
        mapQuery: 'Pekara Mare Dubrovnik'
      },
      {
        time: '09:15',
        type: 'walk',
        title: '🚶 古城精華步行景點巡禮 (約 1.4 公里／30 分鐘)',
        badge: '君臨城歷史動線 · 步行約 1.4 km',
        description: 'Pile Gate 皮勒城門 ➜ Onofrio’s Fountain 奧諾弗里奧大噴泉 ➜ Franciscan Monastery 方濟會修道院 ➜ Sponza Palace 斯邦札宮 ➜ Rector’s Palace 總督宮 ➜ Dubrovnik Cathedral 杜布羅夫尼克大教堂 ➜ Jesuit Staircase 耶穌會階梯 ➜ Dubrovnik West Harbour 派勒海灣。',
        duration: '約 2 小時'
      },
      {
        time: '11:15',
        type: 'activity',
        title: '🏰 Fort Lovrijenac 洛夫里耶納茨要塞 (GOT 紅堡取景地)',
        badge: '37 公尺懸崖要塞 · 「自由不可賣」題字 · 持 Pass 免費',
        description: '矗立於海拔 37 公尺的懸崖上，是杜布羅夫尼克最具代表性的防禦工事。建於 11 世紀，城門上刻有「自由不可賣，即使是黃金」題字。從要塞俯瞰舊城與亞得里亞海，也是《權力遊戲》中「紅堡」的取景地。持城牆門票或 Dubrovnik Pass 可免費進入。',
        duration: '約 1 小時',
        address: 'Ul. od Tabakarije 29, 20000 Dubrovnik',
        ticketPrice: '持 Dubrovnik Pass 免費',
        openingHours: '09:00–15:00',
        mapQuery: 'Fort Lovrijenac Dubrovnik'
      },
      {
        time: '12:30',
        type: 'food',
        title: '🍴 午餐：Bon Appetit Bistro - Pizzeria',
        badge: 'Gruž 市場旁平價餐廳 · 營業 08:00–23:00',
        description: 'Gruž 市場旁深受在地人喜愛的平價美味餐廳。特色：義大利麵、披薩、吐司、咖啡與冰涼在地飲品。',
        address: 'Obala Stjepana Radića 31, Dubrovnik',
        openingHours: '08:00–23:00',
        mapQuery: 'Bon Appetit Bistro Dubrovnik'
      },
      {
        time: '16:00',
        type: 'cablecar',
        title: '🚡 Dubrovnik Cable Car 登山纜車登 Srd 山 (或 Uber 叫車)',
        badge: '經典絕景夕陽 · 來回 €30 / 或 Uber 約 €25',
        description: '登山纜車山下站出發直達海拔 412 米的 Srd 山頂（或 5 人叫 Uber 直達約 €25）。在 Panorama Restaurant 觀景台俯瞰老城紅瓦海灣與洛克魯姆島夕陽金光。',
        duration: '約 1.5 小時',
        address: 'Dubrovnik Cable Car Lower Station / Srd Hill',
        mapQuery: 'Dubrovnik Cable Car'
      },
      {
        time: '18:30',
        type: 'food',
        title: '🍷 晚餐：Restaurant Pjerin (精緻海景正式晚宴)',
        badge: '海景正式晚餐 · 營業 18:30–23:30',
        description: '坐落於岩壁海邊的高級餐廳，俯瞰杜布羅夫尼克古城燦爛夜景。特色：高級地中海料理、現流海鮮、精緻海景與頂級白酒。',
        address: 'Ul. Vlaha Bukovca 6, Dubrovnik',
        openingHours: '18:30–23:30',
        mapQuery: 'Restaurant Pjerin Dubrovnik'
      }
    ]
  },

  // ==========================================
  // Day 23: 10/20 (TUE) ｜ DUBROVNIK (千年城牆巡禮 ＆ 宮殿巡訪)
  // ==========================================
  {
    dayNum: 23,
    date: '2026/10/20',
    dateDisplay: '10/20 (二)',
    month: '10',
    day: '20',
    weekday: '星期二 / TUE',
    cityRegion: 'Dubrovnik (世界遺產古城牆 ＆ 歷史宮殿)',
    themeTitle: '千年古城牆 2 公里全景壯麗巡禮 ＆ 斯邦札宮 ＆ 歐洲最古老藥房',
    englishDestination: 'WALLS OF DUBROVNIK & PALACES',
    chineseSubtitle: '登上敏雀塔俯瞰全景 ＋ 斯邦札宮 ＋ 總督宮官邸 ＋ 1317年古老藥房 ＋ 在地 Konoba 晚宴',
    hotelName: 'Tirkiz Apartment',
    hotelRoomType: '續住第 3 晚 · 3臥室公寓',
    hotelAddress: '29 Ulica Lukše Beritića, 20000 Dubrovnik, Croatia',
    region: 'croatia',
    highlights: ['杜布羅夫尼克古城牆 (全長 2km · 最高 25m)', '敏雀塔 Minceta Tower (最高點視野)', 'Sponza Palace 斯邦札宮', 'Rector’s Palace 總督宮', '方濟會修道院 1317 年古老藥房', 'Konoba Galijun 晚餐推薦'],
    todayRoute: [
      '早晨前往主要入口 Pile Gate 旁，登上世界聞名的「杜布羅夫尼克古城牆」',
      '城牆巡禮路線：Pile Gate → Minceta Tower (最高堡壘) → Bokar Fortress，全長約 2 公里',
      '參觀老城大地震倖存名勝「Sponza Palace 斯邦札宮」',
      '走訪拉古薩共和國行政中心與總督官邸「Rector’s Palace 總督宮」',
      '探訪「Franciscan Monastery 方濟會修道院」，參觀 1317 年歐洲最古老營業藥房之一',
      '走訪 Tommy Hipermarket Gruž 與 Gruž 市場採買伴手禮，或於 Lapad 拉帕德半島海濱步道漫步',
      '晚餐：Konoba Galijun (海鮮、牛排、在地 Konoba 盛宴)'
    ],
    importantAlerts: [
      {
        title: '🧱 杜布羅夫尼克古城牆參觀提醒',
        type: 'warning',
        content: '城牆全長約 2 公里，高度最高約 25 公尺。路線：Pile Gate → Minceta Tower → Bokar Fortress。入口主要且方便的位於 Pile Gate 旁。憑 Dubrovnik Pass 可免費通行。城牆全程單向逆時針前行，階梯較多，請備妥遮陽帽與飲用水。'
      }
    ],
    timeline: [
      {
        time: '09:00',
        type: 'walk',
        title: '🧱 杜布羅夫尼克古城牆 (Walls of Dubrovnik) 壯麗巡禮',
        badge: '全長約 2 公里 · 最高 25 公尺 · Dubrovnik Pass 涵蓋',
        description: '歷史可追溯到 13 世紀，大部分現存結構建於 15、16 世紀。城牆設有多座堡壘、瞭望塔與角樓，其中最著名的是 Minceta Tower。路線：Pile Gate → Minceta Tower → Bokar Fortress。主要且方便的入口位於 Pile Gate 旁。',
        duration: '約 2 小時',
        address: 'Pile Gate Entrance, Dubrovnik',
        mapQuery: 'Walls of Dubrovnik Pile Gate'
      },
      {
        time: '11:30',
        type: 'activity',
        title: '🏛 Sponza Palace｜斯邦札宮 (Dubrovnik Pass)',
        badge: '哥德與文藝復興交融 · 1667 大地震倖存瑰寶',
        description: '老城區內一座非常美麗且具有重要歷史意義的建築，融合哥德式和文藝復興建築風格，也是少數在 1667 年大地震中倖存的建築之一。昔日曾為海關與金庫，現為文獻展覽中心。',
        duration: '約 45 分鐘',
        address: 'Stradun 2, 20000 Dubrovnik',
        openingHours: '09:00–15:00',
        mapQuery: 'Sponza Palace Dubrovnik'
      },
      {
        time: '12:15',
        type: 'activity',
        title: '🏛 Rector’s Palace｜總督宮',
        badge: '拉古薩共和國權力中心 · 總督官邸',
        description: '杜布羅夫尼克歷史上最重要的建築之一，曾是拉古薩共和國政府中心，也是總督官邸。融合哥德、文藝復興與巴洛克風格，內部中庭浮雕與展覽極為精彩。',
        duration: '約 1 小時',
        address: 'Ul. Pred Dvorom 3, 20000 Dubrovnik',
        openingHours: '09:00–18:00',
        mapQuery: 'Rectors Palace Dubrovnik'
      },
      {
        time: '13:30',
        type: 'activity',
        title: '🌿 Franciscan Monastery｜方濟會修道院 (Dubrovnik Pass)',
        badge: '1317 年歐洲最古老持續營業藥房之一',
        description: '建於 14 世紀。著名的 1317 年藥房，是歐洲最古老且持續營運的藥房之一。修道院迴廊優雅幽靜，館內展示珍貴藥典與古代器具。',
        duration: '約 45 分鐘',
        address: 'Stradun 2, 20000 Dubrovnik',
        openingHours: '09:00–15:00',
        mapQuery: 'Franciscan Monastery Dubrovnik'
      },
      {
        time: '15:00',
        type: 'shopping',
        title: '🛒 杜布羅夫尼克周邊採買 ＆ Lapad 拉帕德半島散步',
        badge: '超市 · 生鮮市場 · 海濱黃昏步道',
        description: '① Tommy Hipermarket Gruž (Vukovarska ul. 36，營業 07:00–21:00，生鮮、飲料、伴手禮)；② Gruž 市場 (Obala Stjepana Radića 21，營業 06:00–13:00，蔬果魚貨起司)；③ Lapad 拉帕德半島 (Uvala Lapad，全天開放，海濱步道、咖啡廳、海景、黃昏散步)。',
        address: 'Vukovarska ul. 36 / Uvala Lapad, Dubrovnik',
        mapQuery: 'Tommy Hipermarket Gruz'
      },
      {
        time: '17:30',
        type: 'food',
        title: '🥩 晚餐推薦：Konoba Galijun',
        badge: '在地推薦 · 海鮮與牛排 · 營業 17:00–22:00',
        description: '深受喜愛的在地 Konoba。特色：阿里斯塔海鮮拼盤、厚切炭烤牛排與在地家常地中海料理，氛圍溫馨道地。',
        address: 'Gorava ul. 41, Donje Obuljeno, 20236 Mokošica',
        openingHours: '17:00–22:00',
        mapQuery: 'Konoba Galijun Dubrovnik'
      }
    ]
  },

  // ==========================================
  // Day 24: 10/21 (WED) ｜ DUBROVNIK → BERGAMO → MALPENSA (飛抵米蘭)
  // ==========================================
  {
    dayNum: 24,
    date: '2026/10/21',
    dateDisplay: '10/21 (三)',
    month: '10',
    day: '21',
    weekday: '星期三 / WED',
    cityRegion: 'Dubrovnik ✈ Milan Bergamo (BGY) ➜ Malpensa',
    themeTitle: 'UNI RENT 還車 ＋ 瑞安航空飛往米蘭 ＋ Hertz 取車入住百年經典旅宿',
    englishDestination: 'DUBROVNIK → BERGAMO → MALPENSA',
    chineseSubtitle: 'DBV 機場還車 ＋ Ryanair FR5935 (14:25➜16:00) ＋ BGY 取車入住 Osteria della Pista',
    hotelName: 'Hotel Osteria della Pista dal 1875',
    hotelRoomType: '2間客房 (雙人房 2人 ＋ 三人房 3人) · 5位成人 · 2晚連住 · 含早餐',
    hotelAddress: 'Via Verbano 1, 21011 Casorate Sempione (VA), Italy',
    hotelNote: '百年經典旅宿 (dal 1875) · 距 MXP 機場 10 分鐘 · 附免費停車與每日早餐 · +39 0331 295054',
    region: 'italy',
    highlights: ['UNI RENT 還車 (12:30)', 'Ryanair FR5935 (14:25➜16:00)', '抵達 BGY 貝加莫機場', 'Hertz BGY 取車 (17:00)', '入住 Hotel Osteria della Pista (2晚)'],
    todayRoute: [
      '08:00～09:00 早餐・整理行李',
      '10:00～10:30 取行李・辦理退房',
      '10:30～11:15 前往 DBV (Dubrovnik Airport 杜布羅夫尼克機場)',
      '11:15～12:15 機場報到、辦理手續',
      '12:30 UNI RENT 還車 (Dubrovnik Airport)',
      '14:25 Ryanair FR5935 班機起飛 (座位：20D／20G)',
      '16:00 抵達 BGY (Milan Bergamo Airport 米蘭貝加莫機場)',
      '17:00 Hertz BGY 櫃檯取車 (Ground Floor 抵達區)',
      '17:30 離開 BGY，自駕前往米蘭馬爾彭薩周邊',
      '19:00 抵達 Hotel Osteria della Pista dal 1875 (2 晚／5 人)'
    ],
    importantAlerts: [
      {
        title: '✈ Ryanair FR5935 登機關鍵流程與時間節點',
        type: 'traffic',
        content: '10/21 14:25 起飛。① 13:45 行李截止；② 13:55 登機門關閉；③ 建議 13:40 前抵達 Gate。流程：先在 Ryanair App 完成線上報到 ➜ 抵達 DBV Departures ➜ 非歐盟旅客／必要時至櫃檯辦理 Document Check ➜ 通過安檢後直接前往 Gate。座位：20D／20G。'
      },
      {
        title: '🚗 Hertz｜BGY 機場取車指引',
        type: 'traffic',
        content: '時間：17:00。櫃檯：Ground Floor 抵達區。流程：下機 ➜ Arrivals ➜ 領取行李 ➜ 找 Hertz 櫃檯辦理取車 ➜ 依指示前往停車場取車 ➜ 離場前確認車況（合約單號：L717EEC42A9，已含 SuperCover 全險）。'
      }
    ],
    timeline: [
      {
        time: '08:00',
        type: 'food',
        title: '☕ 08:00～09:00 早餐・整理行李',
        badge: '全套行李打包整備',
        description: '享用早餐，清點全員護照、登機證與隨身貴重物品。'
      },
      {
        time: '10:00',
        type: 'accommodation',
        title: '🏨 10:00～10:30 取行李・退房',
        badge: '告別君臨城 Tirkiz Apartment',
        description: '退房鎖門，行李裝車出發前往 DBV 機場。',
        address: '29 Ulica Lukše Beritića, 20000 Dubrovnik'
      },
      {
        time: '10:30',
        type: 'transport',
        title: '🚗 10:30～11:15 前往 DBV (Dubrovnik Airport 杜布羅夫尼克機場)',
        badge: '車程約 45 分鐘',
        description: '沿 D8 濱海公路前往杜布羅夫尼克機場，途中於機場前加油站將油箱加滿。',
        duration: '45 分鐘',
        address: 'Dobrota 24, 20213, Čilipi, Croatia'
      },
      {
        time: '11:15',
        type: 'transport',
        title: '✈ 11:15～12:15 機場報到、辦理手續',
        badge: 'Ryanair App 報到 ＆ Document Check',
        description: '至出境大廳櫃檯辦理托運行李與非歐盟護照 Document Check。',
        duration: '1 小時'
      },
      {
        time: '12:30',
        type: 'transport',
        title: '🚗 12:30 UNI RENT 還車 (Dubrovnik Airport)',
        badge: '圓滿完成克羅埃西亞 14 天自駕',
        description: '於機場租車中心 UNI RENT 專用還車停車場完成車況驗收與退車手續。',
        address: 'Dubrovnik Airport Car Rental Center, Čilipi',
        mapQuery: 'Uni Rent Dubrovnik Airport'
      },
      {
        time: '14:25',
        type: 'transport',
        title: '🛫 14:25 Ryanair FR5935 起飛 (DBV ➜ BGY)',
        badge: '座位：20D／20G · 16:00 降落 BGY',
        description: '14:25 準時由 DBV 起飛，16:00 降落米蘭貝加莫機場 (BGY)。13:45 行李截止、13:55 登機門關閉。飛行時間約 1 小時 35 分鐘。',
        duration: '1 小時 35 分鐘'
      },
      {
        time: '17:00',
        type: 'transport',
        title: '🚗 17:00 Hertz｜BGY 機場取車',
        badge: 'Ground Floor 抵達區 · 17:30 離開 BGY',
        description: '流程：下機 ➜ Arrivals ➜ 領取行李 ➜ 找 Hertz 櫃檯辦理取車 ➜ 依指示前往停車場取車 ➜ 離場前確認車況。約 17:30 啟程前往馬爾彭薩。',
        address: 'Milan Bergamo Airport (BGY) Arrivals Ground Floor',
        mapQuery: 'Hertz Milan Bergamo Airport'
      },
      {
        time: '19:00',
        type: 'accommodation',
        title: '🏨 19:00 抵達：Hotel Osteria della Pista dal 1875',
        badge: '百年經典旅宿 · 2 晚／5 人 · 機場 10 分鐘',
        description: '入住 10/21 14:00～23:30，退房 10/23 10:30。創立於 1875 年的百年歷史經典旅宿，坐落於米蘭馬爾彭薩機場 (MXP) 周邊小鎮 Casorate Sempione，車程僅約 10 分鐘。提供傳統義大利餐廳、每日早餐、免費機場接駁與免費停車。電話：+39 0331 295054。',
        address: 'Via Verbano 1, 21011 Casorate Sempione (VA), Italy',
        phone: '+39 0331 295054',
        mapQuery: 'Hotel Osteria della Pista Casorate Sempione'
      }
    ]
  },

  // ==========================================
  // Day 25: 10/22 (THU) ｜ MILAN (米蘭周邊購物 ＆ 頂級名品 OUTLET)
  // ==========================================
  {
    dayNum: 25,
    date: '2026/10/22',
    dateDisplay: '10/22 (四)',
    month: '10',
    day: '22',
    weekday: '星期四 / THU',
    cityRegion: 'Milan (米蘭周邊購物 ＆ 美食放鬆)',
    themeTitle: '義大利最大 Serravalle Designer Outlet ＆ 現代大型商場 ＆ 義式美饌',
    englishDestination: 'MILAN SHOPPING & OUTLET',
    chineseSubtitle: '國際精品 30%～70% 折扣 ＋ 大型超市採買伴手禮 ＋ 溫馨義大利鄉村晚宴',
    hotelName: 'Hotel Osteria della Pista dal 1875',
    hotelRoomType: '續住第 2 晚 · 2間客房 · 含 5 人早餐',
    hotelAddress: 'Via Verbano 1, 21011 Casorate Sempione (VA), Italy',
    region: 'italy',
    highlights: ['Serravalle Designer Outlet (義大利最大)', 'Merlata Bloom Milano 新商場', 'Il Centro Arese 歐洲最大購物中心之一', 'Prealpina 加油備案', 'Trattoria del Mare 披薩海鮮晚餐'],
    todayRoute: [
      '飯店享用美味早餐',
      '自駕前往義大利最大 Serravalle Designer Outlet (約 1 小時 15 分鐘／約 100 公里)',
      '盡情選購 Prada、Gucci、Burberry、Moncler、Armani、Nike 等名品 (全年 30%～70% 折扣)',
      '米蘭周邊備選購物商場：Merlata Bloom Milano (2023新開幕，IPER 大型超市、MiScusi 新鮮手工義麵) 或 Il Centro Arese (歐洲最大購物中心之一)',
      'Casorate Sempione 住宿周邊加油備案：Prealpina Carburanti',
      '晚餐推薦：Trattoria del Mare (披薩海鮮) 或 La Taverna di dü Matt',
      '返回 Hotel Osteria della Pista 整理行李與檢查購物退稅單據'
    ],
    importantAlerts: [
      {
        title: '🛍 購物退稅單據保存重要提醒',
        type: 'shopping',
        content: '單張發票商品金額超過 €70（通常 €70.01 起）才可辦理退稅。在 Outlet 或商場結帳時請主動索取 Tax Free 退稅單，並核對姓名與護照號碼，將收據與退稅單釘妥妥善保存，明日於 MXP 機場辦理。'
      }
    ],
    timeline: [
      {
        time: '10:00',
        type: 'shopping',
        title: '🛍 Serravalle Designer Outlet (義大利最大 OUTLET)',
        badge: '義大利最大名牌折扣城 · 營業 10:00–20:00',
        description: '距離住宿約 1 小時 15 分鐘／約 100 公里。品牌包含：Prada、Gucci、Burberry、Moncler、Armani、Dolce & Gabbana、Nike、Adidas 等。全年約提供 30%～70% 折扣。',
        duration: '約 3～4 小時',
        address: 'Via della Moda 1, 15069 Serravalle Scrivia AL, Italy',
        openingHours: '10:00–20:00',
        mapQuery: 'Serravalle Designer Outlet'
      },
      {
        time: '14:30',
        type: 'shopping',
        title: '🏬 備選大型商場：Merlata Bloom Milano / Il Centro Arese',
        badge: '大型購物娛樂中心 · 大型超市 IPER',
        description: '① Merlata Bloom Milano (Via Gottlieb Wilhelm Daimler 61, 20156 Milano MI，營業 09:00～22:00，2023 年新開幕，館內有 IPER La grande i 大型超市、MiScusi 新鮮手工義大利麵、多間餐廳與咖啡店)；② Il Centro Arese (Via Giuseppe Eugenio Luraghi 11，營業 09:00～22:00，義大利最大、歐洲最知名購物中心之一，館內有 Iper 大型超市、餐廳、商店)。',
        address: 'Milano / Arese',
        mapQuery: 'Merlata Bloom Milano'
      },
      {
        time: '18:00',
        type: 'gas',
        title: '⛽ Prealpina Carburanti (加油站備案)',
        badge: '明日還車加油備用',
        description: '位於 Casorate Sempione 住宿附近的加油站，可預先將油箱加滿。',
        address: 'Via Roma, 21011 Casorate Sempione VA, 義大利',
        mapQuery: 'Prealpina Carburanti Casorate Sempione'
      },
      {
        time: '18:45',
        type: 'food',
        title: '🍴 晚餐推薦：Trattoria del Mare / La Taverna di dü Matt',
        badge: '義大利料理／披薩／海鮮 · 營業 18:45–23:00',
        description: '推薦：① Trattoria del Mare (Via Sorgana 2, 21019 Somma Lombardo，營業 18:45–23:00，義大利道地披薩與新鮮海鮮)；② La Taverna di dü Matt (Via Raffaello Sanzio 6/8, 20020 Vanzaghello MI)。',
        address: 'Via Sorgana 2, 21019 Somma Lombardo (VA)',
        openingHours: '18:45–23:00',
        mapQuery: 'Trattoria del Mare Somma Lombardo'
      }
    ]
  },

  // ==========================================
  // Day 26: 10/23 (FRI) ｜ MALPENSA 米蘭機場 ➜ 還車 ➜ 退稅 ➜ 平安返台
  // ==========================================
  {
    dayNum: 26,
    date: '2026/10/23',
    dateDisplay: '10/23 (五)',
    month: '10',
    day: '23',
    weekday: '星期五 / FRI',
    cityRegion: 'Milan Malpensa (MXP) ✈ Taipei',
    themeTitle: 'MXP T1 還車 (P2 Floor -1) ＆ 12號櫃檯退稅全攻略 ＆ 平安返台',
    englishDestination: 'MILAN MALPENSA (MXP) ✈ TAIPEI',
    chineseSubtitle: 'MXP T1 Hertz 還車 ＋ 先退稅再托運行李 ＋ 帶著27天滿滿回憶平安歸國',
    hotelName: '搭乘國際班機 / 平安返抵溫暖的家',
    hotelRoomType: '長榮/阿聯酋客機',
    hotelAddress: 'Aeroporto di Milano-Malpensa Terminal 1, Ferno VA, Italy',
    hotelNote: '旅程圓滿成功 · 滿載珍貴回憶',
    region: 'italy',
    highlights: ['MXP T1 Hertz 還車 (P2 Floor -1)', '米蘭機場 12 號櫃檯退稅', '先退稅再托運行李原則', '滿滿 27 天義大利巴爾幹精彩回憶'],
    todayRoute: [
      'Hotel Osteria della Pista 享用早餐、整理行李並辦理退房',
      '開車前往米蘭馬爾彭薩機場 (MXP) 第一航廈 (T1)',
      'MXP T1 還車：沿 Autonoleggi／Car Hire 指標進入 P2 FLOOR -1 完成 Hertz 還車',
      '前往 T1 出境大廳 12 號櫃檯附近辦理各家退稅手續 (Global Blue、Planet)',
      '完成退稅與海關確認後，前往航空公司櫃檯辦理登機與托運行李',
      '通過安檢與護照查驗，搭機啟程返台，旅程圓滿落幕！'
    ],
    importantAlerts: [
      {
        title: '🔴 米蘭退稅流程關鍵備忘：先退稅，再托運行李！',
        type: 'general',
        content: '① 單張發票商品金額超過 €70（通常 €70.01 起）才可退稅。② 歐盟退稅必須在「最後離開歐盟的機場」辦理（例如米蘭 → 巴黎 → 台北，則在巴黎辦退稅；若直飛或經杜拜中轉，則在米蘭辦退稅）。③ 建議提早 2～3 小時到機場辦理，以免排隊耽誤班機。④ 到 12 號櫃檯附近可找到 Malpensa 機場各家退稅櫃檯，包括 Global Blue、Planet。⑤ **重要提醒：先退稅，再到航空公司櫃檯辦理托運行李！**'
      },
      {
        title: '🚗 MXP T1 還車指引 (Hertz Car Return)',
        type: 'traffic',
        content: 'Hertz Car Return 位於 P2・FLOOR -1。依指示：① 看到 T1 後跟著 Autonoleggi／Car Hire；② 進入 P2 Floor -1；③ 找 Hertz 專用區；④ 完成還車驗收。'
      }
    ],
    timeline: [
      {
        time: '08:30',
        type: 'food',
        title: '🥐 早餐：Hotel Osteria della Pista 享用精緻義式早餐',
        badge: '經典義大利早餐 · 熱卡布奇諾與可頌',
        description: '飯店附贈美味早餐：新鮮烘焙可頌、帕瑪火腿、義式起司、優格、現煮濃縮咖啡與熱卡布奇諾，元氣滿滿準備返程。',
        duration: '約 1 小時'
      },
      {
        time: '10:00',
        type: 'accommodation',
        title: '🏨 Hotel Osteria della Pista 退房出發前往 MXP 機場',
        badge: '退房整備 · 車程僅約 10 分鐘',
        description: '辦理退房，車程僅約 10 分鐘即可抵達米蘭馬爾彭薩機場 T1 航廈。'
      },
      {
        time: '10:30',
        type: 'transport',
        title: '🚗 MXP T1 還車 (Hertz Car Return P2・FLOOR -1)',
        badge: 'P2 Floor -1 · Hertz 專用區',
        description: '依照指示：看到 T1 後跟著 Autonoleggi／Car Hire 指標 ➜ 進入 P2 Floor -1 ➜ 找 Hertz 專用區 ➜ 完成還車驗收。',
        address: 'Malpensa Airport Terminal 1 P2 Floor -1',
        mapQuery: 'Hertz Malpensa Terminal 1'
      },
      {
        time: '11:15',
        type: 'activity',
        title: '💶 米蘭退稅手續辦理 (T1 出境大廳 12 號櫃檯附近)',
        badge: '滿 €70 可退 · 先退稅再托運行李！',
        description: '到 12 號櫃檯附近可找到 Malpensa 機場各家退稅櫃檯，包括 Global Blue 與 Planet。出示退稅單、護照、登機手續或電子機票，經電子海關驗證（Otello）或蓋章。提醒：先退稅，再到航空公司櫃檯辦理托運行李。',
        duration: '約 1 小時',
        address: 'Aeroporto di Milano-Malpensa Terminal 1 Check-in 12',
        mapQuery: 'Aeroporto di Milano Malpensa Terminal 1'
      },
      {
        time: '12:15',
        type: 'food',
        title: '☕ MXP T1 出境大廳／登機區義式輕食 (Briciole / Venchi 冰淇淋)',
        badge: '現烤帕尼尼 · 義大利國寶巧克力冰淇淋',
        description: '辦妥托運與安檢後，於 T1 候機區享受義大利最後美味：Briciole 現烤披薩與帕尼尼三明治，以及 Venchi 頂級義式冰淇淋 (Gelato) 與香醇 Espresso。',
        duration: '約 45 分鐘'
      },
      {
        time: '12:45',
        type: 'transport',
        title: '✈ 航空公司櫃檯托運行李 ＆ 登機安檢出境',
        badge: '行李托運 · 出境通關',
        description: '至航空公司櫃檯托運行李、領取登機證，通過安檢與證照查驗。'
      },
      {
        time: '14:00',
        type: 'transport',
        title: '🛫 搭機啟程返台 ＆ 平安返家圓滿成功！',
        badge: '旅程圓滿落幕 · 滿滿精彩回憶',
        description: '搭乘國際班機平安返抵台北桃園機場，27 天義大利阿爾卑斯、多洛米蒂白雲石、斯洛維尼亞雙湖、克羅埃西亞君臨城與黑山遊艇港壯遊圓滿成功！'
      }
    ]
  }
];
