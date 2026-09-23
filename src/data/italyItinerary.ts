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
    cityRegion: '米蘭機場 ➜ Limone sul Garda 利莫內',
    themeTitle: '米蘭機場取車 ＋ 自駕抵達加爾達湖 ＋ 利莫內老城漫步與檸檬園',
    hotelName: 'Aria Life Hotel',
    hotelRoomType: '小型套房 (Junior Suite · 2 晚連住 · 3 位成人 · 含早餐)',
    hotelAddress: 'Via Einaudi 4, 25010 Limone sul Garda, Italy',
    hotelNote: '湖景、泳池景觀、陽台／露台 · 免費私人停車',
    region: 'italy',
    highlights: ['長榮直飛 MXP', 'Hertz 機場取車', '自駕 190km', 'Aria Life Hotel (2晚)', 'Limonaia del Castèl', '老城石板小巷', '聖貝內代托教堂', 'Ristorante Gemma 湖畔晚餐'],
    todayRoute: [
      '07:35 抵達 Milan Malpensa Airport Terminal 1',
      '09:30 Hertz 取車 (T1 B1 租車區)',
      '自駕前往 Limone sul Garda (約 190 km / 2.5 hr)',
      'Aria Life Hotel 辦理入住',
      'Limone Centro 碼頭',
      'Limonaia del Castèl 檸檬園',
      '中世紀石板小巷',
      'Chiesa di San Benedetto 聖貝內代托教堂',
      '老城廣場',
      '湖畔散步',
      '冰淇淋 (LB Gelateria) / 晚餐 (Ristorante Gemma 或 La Mela d\'Oro)',
      '超市補給 (水、牛奶、水果、零食、車上飲料)',
      '返回 Aria Life Hotel 休息'
    ],
    drivingRoute: {
      from: 'Milan Malpensa Airport T1 (MXP)',
      to: 'Aria Life Hotel (Limone sul Garda)',
      distance: '約 190 km',
      duration: '約 2 小時 30 分',
      parkingSpot: 'Aria Life Hotel 專屬免費私人停車場',
      routeNote: '自 MXP 走 A4 高速公路東行，經 Brescia 東轉 SS45bis 湖濱公路北上。湖區隧道密佈，需開啟大燈。Limone 老城為 ZTL 禁行區，請直接導航至飯店停車。',
      tollNote: 'A4 高速公路過路費約 €14～16 (支援感應信用卡或現金支付)'
    },
    importantAlerts: [
      {
        title: '📑 Hertz 取車必備證件清單',
        type: 'traffic',
        content: '09:30 取車時需準備：1. 護照 2. 台灣駕照 3. 國際駕照 4. 主駕駛人信用卡。車型：Opel Corsa 或同級（自排、冷氣、無限里程），Hertz 確認號碼：L661E7E0321，預估租金：€883.37，還車地點：Trieste Downtown – Bus Station Silos (2026/10/6)。'
      },
      {
        title: '🛒 超市補給提醒',
        type: 'shopping',
        content: '9/28 建議順便補：飲用水、牛奶、水果、零食、車上飲料。目前母版尚未正式指定 Limone 的超市店名，因此網站上先寫「超市補給」，不要自行填入未確認的店家。'
      },
      {
        title: '🅿️ Limone 老城 ZTL 徒步區管制',
        type: 'parking',
        content: 'Limone 老城全區為全日行人徒步 ZTL 禁區。Aria Life Hotel 提供專屬私人免費停車，請直接導航至飯店停車，切勿駛入老城石板窄巷。'
      },
      {
        title: '🍽️ 晚餐訂位與疲勞備案',
        type: 'warning',
        content: 'Ristorante Gemma 湖畔海鮮晚餐熱門，3 人建議先訂位。若當天長途飛行後很累，可直接吃離住宿方向較方便、氣氛輕鬆的備選餐廳 La Mela d\'Oro，不一定要再進老城。'
      }
    ],
    timeline: [
      {
        time: '07:35',
        type: 'transport',
        title: '🛬 抵達 Milan Malpensa Airport Terminal 1',
        badge: '入境通關 · EVA AIR BR95',
        description: '07:35 抵達 Milan Malpensa Airport Terminal 1。入境、領行李後，前往 Terminal 1 地下一樓租車區。',
        duration: '約 1.5 小時 (入境與提領行李)',
        address: 'Malpensa Airport Terminal 1, Ferno VA, Italy',
        mapQuery: 'Aeroporto di Milano-Malpensa Terminal 1',
        ticketPrice: '機票已開票 (旅客：春香、小許、麗安)',
        importantNotice: '領完行李後，依指標搭乘手扶梯或電梯下至 Floor -1 (地下一樓) 租車專區。'
      },
      {
        time: '09:30',
        type: 'transport',
        title: '🚗 Hertz 取車 (Milan Malpensa Airport T1)',
        badge: 'Hertz · L661E7E0321',
        description: '取車地點：Milan Malpensa Airport T1。車型：Opel Corsa 或同級（自排、冷氣、無限里程）。Hertz 確認號碼：L661E7E0321。預估租金：€883.37。還車地點：Trieste Downtown – Bus Station Silos。還車日期：2026/10/6。',
        duration: '約 45 分鐘',
        address: 'Milan Malpensa Airport Terminal 1, Floor -1, Italy',
        mapQuery: 'Hertz Rent a Car Milano Malpensa Airport Terminal 1',
        phone: '+39 02 5858 1081',
        importantNotice: '取車時需準備：護照、台灣駕照正本、國際駕照、主駕駛人信用卡。取車時請繞車一周錄影檢查外觀及滿油狀態。'
      },
      {
        time: '10:15',
        type: 'transport',
        title: '🛣️ MXP ➜ Limone sul Garda 自駕',
        badge: '約 190 km · 車程約 2 小時 30 分',
        description: 'MXP → Limone sul Garda：約 190 km，車程約 2 小時 30 分。走 A4 高速公路東行，經 Brescia 東轉 SS45bis 湖濱公路北上。湖區隧道密佈，需開啟大燈。A4 過路費約 €14～16。',
        duration: '約 2 小時 30 分',
        address: 'Limone sul Garda, 25010 Brescia, Italy',
        mapQuery: 'Aria Life Hotel Limone sul Garda',
        parkingInfo: '直接導航至 Aria Life Hotel 免費私人停車場',
        importantNotice: 'Limone 老城為 ZTL 禁行區，請直接導航至飯店停車，切勿駛入老城石板窄巷。'
      },
      {
        time: '14:00',
        type: 'accommodation',
        title: '🏨 入住：Aria Life Hotel (2 晚連住)',
        badge: '小型套房 · 3 位成人 · 含早餐 · 免費私人停車',
        description: '地址：Via Einaudi 4, 25010 Limone sul Garda, Italy。入住：2026/9/28 14:00–22:00，退房：2026/9/30 07:30–10:30。3 位成人，住宿 2 晚，房型：小型套房，含早餐，免費私人停車。房間特色：湖景、泳池景觀、陽台／露台。',
        duration: '辦理入住與休息梳洗',
        address: 'Via Einaudi 4, 25010 Limone sul Garda, Italy',
        mapQuery: 'Aria Life Hotel Limone sul Garda',
        openingHours: '入住 14:00–22:00 / 退房 07:30–10:30',
        phone: '+39 0365 189 6773',
        parkingInfo: '免費私人停車設施 (不需預約)',
        ticketPrice: '含 3 人早餐'
      },
      {
        time: '15:00',
        type: 'food',
        title: '🍕 Turista Pizzeria (抵達簡餐)',
        badge: '披薩 / 義大利麵 · 輕鬆出餐',
        description: '地址：Via IV Novembre 50, Limone sul Garda。時間：約 07:00–22:00。適合第一天抵達後簡單吃披薩或義大利麵。',
        duration: '約 45 分鐘',
        address: 'Via IV Novembre 50, Limone sul Garda',
        mapQuery: 'Turista Pizzeria Limone sul Garda',
        openingHours: '約 07:00–22:00'
      },
      {
        time: '15:45',
        type: 'walk',
        title: '🚶 Limone Centro 碼頭 ＆ 湖畔散步',
        badge: '老城步行動線起點',
        description: '建議步行動線起點：Limone Centro 碼頭 → Limonaia del Castèl 檸檬園 → 中世紀石板小巷 → Chiesa di San Benedetto 聖貝內代托教堂 → 老城廣場 → 湖畔散步 → 冰淇淋／晚餐。',
        duration: '約 30 分鐘',
        address: 'Porto Centro, Limone sul Garda',
        mapQuery: 'Porto Centro Limone sul Garda',
        ticketPrice: '免費散步'
      },
      {
        time: '16:15',
        type: 'activity',
        title: '🍋 Limonaia del Castèl 檸檬園',
        badge: '門票約 €2–3 · 梯田歷史檸檬溫室',
        description: '地址：Via Orti, Limone sul Garda。門票：成人約 €2–3。Limone 是以檸檬聞名的湖畔小鎮，老城內有很多檸檬酒、檸檬糖、檸檬蛋糕與檸檬冰淇淋。登上頂層可眺望加爾達湖壯麗湖景與老城紅瓦。',
        duration: '建議停留 1 小時',
        address: 'Via Orti, Limone sul Garda',
        mapQuery: 'Limonaia del Castel Limone sul Garda',
        ticketPrice: '成人約 €2–3'
      },
      {
        time: '17:15',
        type: 'activity',
        title: '⛪ Chiesa di San Benedetto 聖貝內代托教堂',
        badge: '歷史巴洛克教堂 · 約 09:00–18:00',
        description: '地址：Piazza Don Angelo Ghezzi, 25010 Limone sul Garda。開放時間：約 09:00–18:00。半山腰巴洛克風格歷史教堂，可俯瞰老城街景與湖面。',
        duration: '約 30 分鐘',
        address: 'Piazza Don Angelo Ghezzi, 25010 Limone sul Garda',
        mapQuery: 'Chiesa di San Benedetto Limone sul Garda',
        ticketPrice: '免費參觀'
      },
      {
        time: '17:45',
        type: 'food',
        title: '🍦 LB Gelateria (義式冰淇淋)',
        badge: '老城散步途中品嚐',
        description: '地址：Via IV Novembre 32, 25010 Limone sul Garda。可安排在老城散步途中。品嚐在地手作檸檬雪酪與義式冰淇淋。',
        duration: '約 20 分鐘',
        address: 'Via IV Novembre 32, 25010 Limone sul Garda',
        mapQuery: 'LB Gelateria Limone sul Garda'
      },
      {
        time: '18:30',
        type: 'food',
        title: '🍽️ Ristorante Gemma (湖畔精緻晚餐)',
        badge: '湖畔海鮮 / 湖魚 / 手工麵 · 建議先訂位',
        description: '地址：Piazza Garibaldi 11, Limone sul Garda。時間：11:30–14:30、18:30–21:30。特色：湖畔海鮮、湖魚、手工義大利麵、披薩、肉類料理。晚餐熱門，3 人建議先訂位。',
        duration: '約 1.5 小時',
        address: 'Piazza Garibaldi 11, Limone sul Garda',
        mapQuery: 'Ristorante Gemma Limone sul Garda',
        openingHours: '11:30–14:30、18:30–21:30'
      },
      {
        time: '19:00',
        type: 'food',
        title: '🍕 晚餐備選｜La Mela d\'Oro',
        badge: '離住宿近氣氛輕鬆 · 披薩/義大利麵/海鮮',
        description: '地址：Via Tamas 9/C, Limone。料理：披薩、義大利麵、海鮮。特色是比較輕鬆，而且離住宿方向較方便。如果當天飛行後很累，可直接吃這家，不一定要再進老城。',
        address: 'Via Tamas 9/C, Limone',
        mapQuery: 'La Mela d\'Oro Limone sul Garda'
      },
      {
        time: '20:15',
        type: 'shopping',
        title: '🛒 超市補給',
        badge: '飲用水、牛奶、水果、零食、車上飲料',
        description: '9/28 建議順便補：飲用水、牛奶、水果、零食、車上飲料。目前母版尚未正式指定 Limone 的超市店名，因此網站上先寫「超市補給」，不要自行填入未確認的店家。',
        duration: '約 30 分鐘'
      },
      {
        time: '21:00',
        type: 'accommodation',
        title: '🏨 返回 Aria Life Hotel 休息',
        badge: '續住第 1 晚 · 調整時差',
        description: '回飯店陽台享受湖風，放鬆休息，準備明日渡輪與巴爾多山纜車行程。',
        address: 'Via Einaudi 4, 25010 Limone sul Garda, Italy',
        mapQuery: 'Aria Life Hotel Limone sul Garda'
      }
    ]
  },

  // ==========================================
  // DAY 2: 2026/09/29 (TUE) ｜ LIMONE → MALCESINE → MONTE BALDO
  // ==========================================
  {
    dayNum: 2,
    date: '2026/09/29',
    dateDisplay: '09/29 (二)',
    month: '09',
    day: '29',
    weekday: '星期二 / TUE',
    cityRegion: 'Limone ➜ Malcesine ➜ Monte Baldo',
    themeTitle: '這天晚上仍住 Aria Life Hotel，不換飯店｜渡輪跨湖 ＋ Monte Baldo 纜車 ＋ 斯卡利傑城堡 ＋ 湖畔步道',
    hotelName: 'Aria Life Hotel (續住第 2 晚，不換飯店)',
    hotelRoomType: '小型套房 (Junior Suite · 3 位成人 · 含早餐)',
    hotelAddress: 'Via Einaudi 4, 25010 Limone sul Garda, Italy',
    hotelNote: '車輛續停飯店私人免費停車場，今日跨湖搭渡輪不開車',
    region: 'italy',
    highlights: ['不換飯店 (續住第2晚)', '跨湖渡輪 (Limone ↔ Malcesine)', 'Monte Baldo 360°旋轉纜車', '斯卡利傑城堡 (約1300年)', '湖畔步道看夕陽', '回程約 18:05 渡輪'],
    todayRoute: [
      'Aria Life Hotel 早餐',
      'Limone Centro 碼頭',
      '渡輪前往 Malcesine (早上搭船，出發前確認確切班次)',
      'Monte Baldo 纜車 (Funivia Malcesine–Monte Baldo)',
      'Monte Baldo 觀景拍照與簡單散步',
      'Malcesine 中世紀老城',
      'Scaliger Castle 斯卡利傑城堡',
      '湖畔步道 Lungolago (散步/咖啡/冰淇淋/夕陽)',
      '午餐／下午餐：Malcesine 老城或湖畔餐廳 (母版未指定店家)',
      '約 18:05 渡輪回 Limone',
      '晚餐備選：Ristorante Gemma 或 La Mela d\'Oro',
      'Aria Life Hotel'
    ],
    drivingRoute: {
      from: 'Aria Life Hotel',
      to: 'Limone Centro 碼頭 (步行前往)',
      distance: '約 0.6 km (純步行)',
      duration: '約 8～10 分鐘',
      parkingSpot: '車輛續停 Aria Life Hotel 免費私人停車場 (今日不開車)',
      routeNote: '整日利用加爾達湖渡輪與步行移動，車輛安穩停放於飯店停車場，不用換飯店也不必搬運行李。'
    },
    importantAlerts: [
      {
        title: '⛴ 渡輪班次重要注意',
        type: 'ferry',
        content: '出發碼頭：Limone Centro。航線：Limone → Malcesine。船程：約 25 分鐘。票價：來回約 €15。回程：目前母版記錄可搭約 18:05 的 Malcesine → Limone 船班。注意：目前母版只有明確記錄回程 18:05，沒有完整記錄去程確切班次時間。因此網站請不要自行虛構去程班次，只寫「早上搭船前往 Malcesine，實際班次出發前再次確認」。'
      },
      {
        title: '🚡 Monte Baldo 纜車與天氣風勢注意',
        type: 'cablecar',
        content: '地址：Via Navene Vecchia 12, Malcesine。特色：360° 旋轉纜車，可俯瞰 Lake Garda 加爾達湖。票價：母版目前記錄來回約 €28 起。上山後以觀景、拍照、簡單散步為主，不安排長距離健行。若遇大風、雲霧或天氣不佳，就縮短山上停留時間。山頂氣溫低風勢大，請備妥防風保暖外套。'
      },
      {
        title: '🏰 城堡與湖畔步道節奏',
        type: 'general',
        content: '建議下午逛城堡，再接老城與湖畔步道 Lungolago（散步、咖啡、冰淇淋、拍照、看夕陽）。不需要再塞額外大型景點。'
      },
      {
        title: '🍽️ 餐飲彈性安排說明',
        type: 'warning',
        content: '目前母版沒有正式指定 9/29 Malcesine 的餐廳與冰淇淋店，因此網站不要自行填入未確認店家。可先寫：午餐／下午餐：Malcesine 老城或湖畔餐廳（建議料理：湖魚、海鮮、義大利麵、披薩、咖啡與甜點）。如果晚餐回 Limone 後再吃，也可以使用前一天備選：Ristorante Gemma 或 La Mela d\'Oro。'
      }
    ],
    timeline: [
      {
        time: '08:00',
        type: 'food',
        title: '🥐 Aria Life Hotel 早餐',
        badge: '飯店景觀早餐',
        description: '在飯店享用豐盛每日早餐，欣賞晨曦中的加爾達湖景致。',
        duration: '約 1 小時',
        address: 'Via Einaudi 4, 25010 Limone sul Garda, Italy',
        mapQuery: 'Aria Life Hotel Limone sul Garda'
      },
      {
        time: '早上搭船',
        type: 'ferry',
        title: '⛴ 渡輪｜Limone ➜ Malcesine (跨湖專屬卡)',
        badge: '出發碼頭：Limone Centro · 船程約 25 分',
        description: '出發碼頭：Limone Centro。航線：Limone → Malcesine。船程：約 25 分鐘。票價：來回約 €15。回程：目前母版記錄可搭約 18:05 的 Malcesine → Limone 船班。注意：目前母版只有明確記錄回程 18:05，沒有完整記錄去程確切班次時間。因此網站請不要自行虛構去程班次，只寫「早上搭船前往 Malcesine，實際班次出發前再次確認」。',
        duration: '船程約 25 分鐘',
        address: 'Porto Limone Centro ➜ Porto di Malcesine',
        mapQuery: 'Porto di Limone sul Garda',
        ticketPrice: '來回票約 €15 / 人 (碼頭售票亭購買)',
        importantNotice: '渡輪是今日唯一跨湖交通方式，車輛續停飯店不開車。請於出發當早在碼頭確認去程確切發船時間。'
      },
      {
        time: '上午',
        type: 'cablecar',
        title: '🚡 Monte Baldo 纜車 (Funivia Malcesine–Monte Baldo)',
        badge: 'Via Navene Vecchia 12 · 360° 旋轉纜車 · 來回約 €28 起',
        description: 'Funivia Malcesine–Monte Baldo。地址：Via Navene Vecchia 12, Malcesine。特色：360° 旋轉纜車，可俯瞰 Lake Garda 加爾達湖。票價：母版目前記錄來回約 €28 起。上山後以觀景、拍照、簡單散步為主，不安排長距離健行。若遇大風、雲霧或天氣不佳，就縮短山上停留時間。',
        duration: '約 2 小時 (含觀景與拍照)',
        address: 'Via Navene Vecchia 12, Malcesine',
        mapQuery: 'Funivia Malcesine-Monte Baldo',
        phone: '+39 045 740 0206',
        ticketPrice: '母版目前記錄來回約 €28 起',
        importantNotice: '山頂海拔高風勢強勁，氣溫低於湖面 8～10°C，務必隨身攜帶防風保暖外套。'
      },
      {
        time: '10:30',
        type: 'activity',
        title: '🏔️ Monte Baldo 高山觀景與簡單散步',
        badge: '海拔 1,760m · 360° 俯瞰 Lake Garda',
        description: '上山後以觀景、拍照、簡單散步為主，不安排長距離健行。若遇大風、雲霧或天氣不佳，就縮短山上停留時間。全方位俯瞰加爾達湖藍寶石水面與兩側險峻山崖。',
        duration: '約 1～1.5 小時',
        address: 'Monte Baldo, Malcesine, Italy',
        mapQuery: 'Monte Baldo Malcesine'
      },
      {
        time: '12:30',
        type: 'food',
        title: '🍽️ 午餐／下午餐：Malcesine 老城或湖畔餐廳',
        badge: '母版未指定店家 · 依當日喜好於老城或湖畔挑選',
        description: '目前母版沒有正式指定 9/29 Malcesine 的餐廳與冰淇淋店，因此網站不要自行填入未確認店家。可先寫：午餐／下午餐：Malcesine 老城或湖畔餐廳。建議料理：湖魚、海鮮、義大利麵、披薩、咖啡與甜點。',
        duration: '約 1 小時',
        address: 'Centro Storico / Lungolago, Malcesine',
        importantNotice: '母版未指定店家，旅途中在石板老城或水岸邊隨選合適餐廳享用。'
      },
      {
        time: '13:30',
        type: 'walk',
        title: '🚶 Malcesine 馬爾切西內老城',
        badge: '中世紀石板小巷 · 彩色建築 · 手工藝小店',
        description: '馬爾切西內是加爾達湖東岸的中世紀湖畔小鎮。建議動線：中世紀石板小巷 → Scaliger Castle 斯卡利傑城堡 → 湖畔步道 Lungolago。老城特色：石板小巷、彩色建築、咖啡館、手工藝小店、湖畔景色。',
        duration: '約 1 小時',
        address: 'Centro Storico, 37018 Malcesine VR, Italy',
        mapQuery: 'Centro Storico Malcesine'
      },
      {
        time: '14:45',
        type: 'activity',
        title: '🏰 Scaliger Castle 斯卡利傑城堡',
        badge: '矗立在湖畔岩岬 · 約 1300 年重建 · 歌德與自然史展',
        description: '城堡矗立在 Malcesine 湖畔岩岬，是小鎮最醒目的地標。可看到：Lake Garda、Malcesine 紅瓦老城、對岸山景、Monte Baldo。母版資料指出，城堡約於 1300 年由斯卡利傑家族重建，館內另有 Monte Baldo 與加爾達湖自然史展，也有歌德相關展示。建議下午逛城堡，再接老城與湖畔步道。',
        duration: '建議停留 1～1.5 小時',
        address: 'Via Castello, 37018 Malcesine VR, Italy',
        mapQuery: 'Castello Scaligero di Malcesine',
        openingHours: '09:30–19:30',
        ticketPrice: '成人約 €6 (現場購票)',
        importantNotice: '建議下午逛城堡，再接老城與湖畔步道。登頂主塔樓階梯較陡，請小心步行。'
      },
      {
        time: '16:30',
        type: 'walk',
        title: '🌅 湖畔步道 Lungolago',
        badge: '湖畔散步 · 咖啡 · 冰淇淋 · 拍照 · 看夕陽',
        description: '湖畔步道 Lungolago。建議傍晚安排：湖畔散步、咖啡、冰淇淋、拍照、看夕陽。不需要再塞額外大型景點。傍晚金色陽光灑在湖面，微風徐徐，十分愜意。',
        duration: '約 1～1.5 小時',
        address: 'Lungolago, 37018 Malcesine VR, Italy',
        mapQuery: 'Lungolago Malcesine',
        ticketPrice: '免費漫步'
      },
      {
        time: '18:05',
        type: 'ferry',
        title: '⛴ 渡輪回程：Malcesine ➜ Limone (母版明確記錄約 18:05)',
        badge: '母版明確記錄 18:05 船班 · 船程約 25 分',
        description: '目前母版記錄可搭約 18:05 的 Malcesine → Limone 船班返程。夕陽斜射在加爾達湖與西岸山岩峭壁上，景色極為壯觀。憑來回船票登船。',
        duration: '約 25 分鐘',
        address: 'Porto di Malcesine ➜ Porto Limone Centro',
        mapQuery: 'Porto di Malcesine'
      },
      {
        time: '19:00',
        type: 'food',
        title: '🍽️ 回 Limone 晚餐備選｜Ristorante Gemma 或 La Mela d\'Oro',
        badge: '可使用前一天備選餐廳',
        description: '如果晚餐回 Limone 後再吃，也可以使用前一天備選：Ristorante Gemma（湖畔海鮮、湖魚、手工義大利麵、披薩、肉類料理，晚餐熱門，3 人建議先訂位）或 La Mela d\'Oro（披薩、義大利麵、海鮮，離住宿方向較方便，比較輕鬆）。',
        duration: '約 1.5 小時',
        address: 'Limone sul Garda'
      },
      {
        time: '20:45',
        type: 'accommodation',
        title: '🏨 返回 Aria Life Hotel (續住第 2 晚，不換飯店)',
        badge: '這天晚上仍住 Aria Life Hotel，不換飯店',
        description: '這天晚上仍住 Aria Life Hotel，不換飯店！車輛安穩停放於飯店停車場，不用打包行李，在陽台享受微風，安穩入眠，明日準備啟程前往多洛米蒂。',
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
