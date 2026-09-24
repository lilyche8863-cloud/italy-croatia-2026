// Unified Data Source for Travel Plan, Accommodations, Transports, and Budget

export type BookingChannel = 
  | 'Booking.com' 
  | 'Agoda' 
  | 'Marriott' 
  | 'Hotel Direct' 
  | 'Hertz' 
  | 'FlixBus' 
  | 'UNI RENT'
  | 'Ryanair'
  | 'Nacionalni park Plitvička jezera'
  | 'Dubrovnik Pass';

export interface SubRoomBooking {
  roomIndex: number;
  roomName: string;
  roomType: string;
  guests: string;
  guestsCount: number;
  channel: BookingChannel;
  confirmationCode: string;
  bookingRef?: string;
  price: number;
  currency: 'EUR' | 'USD';
  ratePlan?: string;
  breakfast: string;
  notes?: string;
}

export interface AccommodationItem {
  id: string;
  phase: 'italy' | 'croatia';
  name: string;
  nameEn?: string;
  location: string;
  shortLocation: string; // e.g. 'Limone sul Garda', 'Alpe di Siusi', 'Vodo Cadore'
  roomSummary: string; // e.g. '3人 · 1房', '3人 · 2房', '5人 · 2筆訂房'
  googleMapsQuery: string; // e.g. 'Aria Life Hotel, Limone sul Garda'
  dates: string; // e.g. '09/28 (一) - 09/30 (三)'
  datesDisplay: string; // e.g. '09/28–09/30'
  checkInDate: string; // '2026/09/28'
  checkOutDate: string; // '2026/09/30'
  checkInTime: string;
  checkOutTime: string;
  nights: number;
  guestsCount: number;
  guestsText: string;
  roomsCount: number;
  roomType: string;
  channel: BookingChannel;
  secondaryChannel?: BookingChannel;
  bookingCode: string;
  pinCode?: string;
  bookingRef?: string;
  currency: 'EUR' | 'USD';
  totalAmount: number;
  paidAmount?: number;
  remainingAmount?: number;
  cityTaxAmount?: number;
  cityTaxNote?: string;
  paymentStatus: string;
  paymentMethod: string;
  meals: string;
  mealType: 'breakfast' | 'half_board' | 'none';
  hasParking: boolean;
  hasWasher: boolean;
  hasDryer: boolean;
  hasKitchen: boolean;
  hasElevator: boolean;
  isWheelchairAccessible: boolean;
  hasPool?: boolean;
  hasSauna?: boolean;
  hasHotTub?: boolean;
  amenityHighlights: string[];
  refundableDeposit?: string;
  notice?: string;
  guestName?: string;
  gpsCoords?: string;
  address: string;
  phone?: string;
  email?: string;
  mapUrl: string;
  desc?: string;
  subRooms?: SubRoomBooking[];
  splitMembers: string[];
}

export interface TransportItem {
  id: string;
  phase: 'italy' | 'croatia';
  category: 'Transit' | 'Flight' | 'Ticket';
  title: string;
  channel: BookingChannel;
  confirmationCode: string;
  datesText: string;
  pickupTime?: string;
  pickupLocation?: string;
  pickupAddress?: string;
  dropoffTime?: string;
  dropoffLocation?: string;
  dropoffAddress?: string;
  vehicleModel?: string;
  currency: 'EUR';
  totalAmount: number;
  depositAmount?: number; // 可退還押金 (不計入旅費)
  splitMembers: string[];
  notes: string;
  features?: string[];
  coverage?: string;
}

export const ALL_MEMBERS = ['小許', '春香', '麗安', '頭家娘', '小花'];
export const ITALY_3_MEMBERS = ['小許', '春香', '麗安'];
export const CROATIA_5_MEMBERS = ['小許', '春香', '麗安', '頭家娘', '小花'];

// 12 處官方確認住宿資料 (Single Source of Truth)
export const ACCOMMODATIONS: AccommodationItem[] = [
  // 1. Aria Life Hotel (09/28 - 09/30 · 2晚 · 3人)
  {
    id: 'stay-aria-life',
    phase: 'italy',
    name: 'Aria Life Hotel',
    nameEn: 'Aria Life Hotel, Limone sul Garda',
    location: '加爾達湖 · 利莫內－蘇爾加達',
    shortLocation: 'Limone sul Garda',
    roomSummary: '3人 · 1房',
    googleMapsQuery: 'Aria Life Hotel, Limone sul Garda',
    dates: '09/28 (一) - 09/30 (三)',
    datesDisplay: '09/28–09/30',
    checkInDate: '2026/09/28',
    checkOutDate: '2026/09/30',
    checkInTime: '14:00～22:00',
    checkOutTime: '07:30～10:30',
    nights: 2,
    guestsCount: 3,
    guestsText: '3 位成人',
    roomsCount: 1,
    roomType: '小型套房 (Junior Suite)',
    channel: 'Booking.com',
    bookingCode: '5378.289.674',
    pinCode: '7405',
    guestName: 'HSU CHEN HUNG (3位成人)',
    currency: 'EUR',
    totalAmount: 320.00,
    paidAmount: 320.00,
    remainingAmount: 0.00,
    cityTaxAmount: 12.00,
    cityTaxNote: '€2.00／人／晚 × 3人 × 2晚 ＝ €12.00 (已含於 €320.00 總額)',
    paymentStatus: '已付款 · 線上扣款付訖',
    paymentMethod: 'Booking.com 線上扣款付訖 EUR 320.00 (已含 2 晚房費與城市稅 €12.00)',
    meals: '包含每日早餐',
    mealType: 'breakfast',
    hasParking: true,
    hasWasher: false,
    hasDryer: false,
    hasKitchen: false,
    hasElevator: true,
    isWheelchairAccessible: false,
    hasPool: true,
    amenityHighlights: ['免費私人停車', 'Wi-Fi 免費', '有電梯', '湖景與泳池景觀', '含每日早餐'],
    notice: '預訂確認碼：5378.289.674。住客：HSU CHEN HUNG (3位成人)。已全額扣款付訖 EUR 320.00。不需預約：住宿場所設有私人免費停車設施；住宿全館提供免費 WiFi；客房享湖景與泳池景觀、陽台/露台、空調、電梯直達；不可攜帶寵物。',
    address: 'Via Einaudi 4, 25010 利莫內－蘇爾加達 (Limone sul Garda), Italy',
    phone: '+39 0365 189 6773',
    gpsCoords: 'N 045° 48.429, E 10° 47.157',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=Aria+Life+Hotel+Limone+sul+Garda',
    desc: '坐落於加爾達湖畔檸檬小鎮利莫內－蘇爾加達（Limone sul Garda），緊鄰湖岸全景。小型套房（Junior Suite）含每日美味早餐，配備私人衛浴、陽台/露台、湖景與泳池雙景致、獨立空調、冰箱、電梯直達與免費私人停車場。',
    splitMembers: ITALY_3_MEMBERS,
  },

  // 2. Hotel Santner (09/30 - 10/03 · 3晚 · 3人)
  {
    id: 'stay-santner',
    phase: 'italy',
    name: 'Hotel Santner',
    nameEn: 'Hotel Santner Alpine Sport & Relax, Alpe di Siusi',
    location: 'Alpe di Siusi · 多洛米蒂休斯高原',
    shortLocation: 'Alpe di Siusi',
    roomSummary: '3人 · 2房',
    googleMapsQuery: 'Hotel Santner, Alpe di Siusi',
    dates: '09/30 (三) - 10/03 (六)',
    datesDisplay: '09/30–10/03',
    checkInDate: '2026/09/30',
    checkOutDate: '2026/10/03',
    checkInTime: '15:00',
    checkOutTime: '10:00',
    nights: 3,
    guestsCount: 3,
    guestsText: '3 位成人',
    roomsCount: 2,
    roomType: 'Single Room HB + Classic Room HB (2間房)',
    channel: 'Hotel Direct',
    bookingCode: 'R2635/2026',
    currency: 'EUR',
    totalAmount: 1141.50, // 房價 €1,110.00 + 城市稅 €31.50
    paidAmount: 500.00,
    remainingAmount: 641.50, // 房價剩餘 €610 + 城市稅 €31.50
    cityTaxAmount: 31.50,
    cityTaxNote: '€3.50／人／晚 × 3 位成人 × 3 晚 ＝ €31.50',
    paymentStatus: '已付訂金 €500.00 · 現場尚付 €641.50',
    paymentMethod: '訂金已付 €500.00；現場支付房價剩餘 €610.00 ＋ 城市稅 €31.50',
    meals: 'HB / Half Board 一泊二食 (含每日早餐與精緻晚餐)',
    mealType: 'half_board',
    hasParking: true,
    hasWasher: false,
    hasDryer: false,
    hasKitchen: false,
    hasElevator: true,
    isWheelchairAccessible: false,
    hasPool: true,
    hasSauna: true,
    amenityHighlights: ['多洛米蒂核心', '一泊二食 (HB 早晚餐)', '高山水療水世界', '免費停車', '通行證需提前申請'],
    notice: '房價已含每日精緻早餐與晚餐 (HB Half Board)，飲品另計；位於休斯高原自然保護區核心。租車車牌與廠牌確認後，請 Email 飯店取得 Driving Permit 通行證。',
    address: 'Via Joch 6, 39040 Alpe di Siusi, Italy',
    phone: '+39 0471 727913',
    email: 'info@hotelsantner.com',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=Hotel+Santner+Alpe+di+Siusi',
    desc: '矗立於歐洲最大高山草原休斯高原（Alpe di Siusi）的心臟地帶，推開窗戶即可眺望多洛米蒂標誌性山峰 Santner 峭壁。提供一泊二食頂級阿爾卑斯美饌與高山療癒桑拿。',
    subRooms: [
      {
        roomIndex: 1,
        roomName: '房間 1 · Single Room HB',
        roomType: 'Single Room HB (單人房)',
        guests: '1 位成人',
        guestsCount: 1,
        channel: 'Hotel Direct',
        confirmationCode: 'R2635/2026-R1',
        price: 360.00,
        currency: 'EUR',
        breakfast: 'HB 一泊二食',
        notes: '3 晚 €360.00 (含每日早晚餐)'
      },
      {
        roomIndex: 2,
        roomName: '房間 2 · Classic Room HB',
        roomType: 'Classic Room HB (經典雙人房)',
        guests: '2 位成人',
        guestsCount: 2,
        channel: 'Hotel Direct',
        confirmationCode: 'R2635/2026-R2',
        price: 750.00,
        currency: 'EUR',
        breakfast: 'HB 一泊二食',
        notes: '3 晚 €750.00 (含每日早晚餐)'
      }
    ],
    splitMembers: ITALY_3_MEMBERS,
  },

  // 3. Chalet del Capriolo (10/03 - 10/06 · 3晚 · 3人)
  {
    id: 'stay-capriolo',
    phase: 'italy',
    name: 'Chalet del Capriolo',
    nameEn: 'Chalet del Capriolo, Vodo Cadore',
    location: 'Vodo Cadore · 多洛米蒂',
    shortLocation: 'Vodo Cadore',
    roomSummary: '3人 · 1公寓',
    googleMapsQuery: 'Chalet del Capriolo, 108 Via Nazionale, Vodo Cadore',
    dates: '10/03 (六) - 10/06 (二)',
    datesDisplay: '10/03–10/06',
    checkInDate: '2026/10/03',
    checkOutDate: '2026/10/06',
    checkInTime: '16:00～19:00',
    checkOutTime: '08:00～09:00',
    nights: 3,
    guestsCount: 3,
    guestsText: '3 位成人',
    guestName: 'CHEN CHIUNG HUA (3位成人)',
    roomsCount: 1,
    roomType: '頂樓公寓 (Penthouse Apartment · 1間)',
    channel: 'Booking.com',
    bookingCode: '5916.383.549',
    pinCode: '3570',
    currency: 'EUR',
    totalAmount: 856.20,
    paidAmount: 856.20,
    remainingAmount: 0.00,
    cityTaxAmount: 13.50,
    cityTaxNote: '城市稅 TWD 496 (約 €13.50 · 3位成人 × 3晚)，已含於 EUR 856.20 總額內',
    paymentStatus: '已付款 · 線上扣款付訖',
    paymentMethod: 'Booking.com 線上扣款付訖 EUR 856.20 (約 TWD 31,473，含 10% 稅、清潔費 €100 與城市稅)',
    refundableDeposit: 'EUR 200 損壞押金 (約 TWD 7,351，入住以信用卡刷預授權，退房後 7 天無損全額退還)',
    meals: '不含餐 (附全套現代化廚房、微波爐、烤箱、洗碗機與用餐區)',
    mealType: 'none',
    hasParking: true,
    hasWasher: true,
    hasDryer: true,
    hasKitchen: true,
    hasElevator: false,
    isWheelchairAccessible: false,
    amenityHighlights: ['頂樓景觀公寓', '全套廚房與洗碗機', '洗衣機與獨立烘衣機', '免治馬桶', '免費私人停車(不需預約)', '全館免費 WiFi'],
    notice: '住客：CHEN CHIUNG HUA (3位成人)。入住時間 16:00～19:00，退房時間 08:00～09:00。入住時需出示附照片身分證件與信用卡，並以信用卡支付 EUR 200 損壞押金（約 TWD 7,351，退房後 7 天無損全額退款）。不需預約免費私人停車。僅可走樓梯抵達高樓層公寓。取消或未如期入住須付全額。',
    address: '108 Via Nazionale, 32040 Vodo Cadore, Italy',
    phone: '+39 0435 489207',
    gpsCoords: 'N 046° 25.304, E 12° 14.443',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=Chalet+del+Capriolo+108+Via+Nazionale+32040+Vodo+Cadore',
    desc: '坐落於多洛米蒂東側山谷 Vodo Cadore 的靜謐景觀頂樓公寓，被壯麗的多洛米蒂山脈與 Boite 河谷環繞，鄰近 Cortina d\'Ampezzo。提供全套現代化廚房、洗碗機、烤箱、洗衣烘衣設備、免治馬桶與免費私人專屬停車。',
    splitMembers: ITALY_3_MEMBERS,
  },

  // 4. MANDA Heritage Hotel (10/06 - 10/07 · 1晚 · 5人 · 2間房)
  {
    id: 'stay-manda-zagreb',
    phase: 'croatia',
    name: 'MANDA Heritage Hotel',
    nameEn: 'MANDA Heritage Hotel, Zagreb',
    location: '札格雷布 (Zagreb) · 下城區',
    shortLocation: 'Zagreb',
    roomSummary: '5人 · 2筆訂房',
    googleMapsQuery: 'MANDA Heritage Hotel, Zagreb',
    dates: '10/06 (二) - 10/07 (三)',
    datesDisplay: '10/06–10/07',
    checkInDate: '2026/10/06',
    checkOutDate: '2026/10/07',
    checkInTime: '15:00～00:00',
    checkOutTime: '00:00～11:00',
    nights: 1,
    guestsCount: 5,
    guestsText: '5 位成人',
    roomsCount: 2,
    roomType: '2 間套房 (雙臥室套房 4人 ＋ 單臥室套房 1人)',
    channel: 'Agoda',
    bookingCode: 'Agoda 2筆訂單 (#1765102246 / #1765100933)',
    currency: 'EUR',
    totalAmount: 331.14, // €134.78 + €196.36 = €331.14
    paidAmount: 331.14,
    remainingAmount: 0.00,
    paymentStatus: '已確認 · Agoda 線上付訖 (2間/5人)',
    paymentMethod: 'Agoda 線上付款 (€134.78 + €196.36 ＝ €331.14)',
    meals: '包含 5 位成人每日早餐',
    mealType: 'breakfast',
    hasParking: false,
    hasWasher: false,
    hasDryer: false,
    hasKitchen: false,
    hasElevator: true,
    isWheelchairAccessible: false,
    amenityHighlights: ['市中心下城區', '2間套房(雙臥+單臥)', '含5位早餐', '免費 Wi-Fi', '電梯直達'],
    notice: '兩筆 Agoda 訂單均含早餐、免費 Wi-Fi、飲用水、咖啡／茶。單臥室套房為禁菸房 (Non-Smoking) 且附 Twin Beds；雙臥室套房為 4 位成人。住客：CHENCHIUNG HUA。',
    address: 'Draškovićeva ulica 15a, 10000 Zagreb, Croatia',
    phone: '+385 1 4875 555',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=MANDA+Heritage+Hotel+Dra%C5%A1kovi%C4%87eva+ulica+15a+Zagreb',
    desc: '坐落於札格雷布市中心下城區歷史核心，緊鄰耶拉其洽總督廣場與石門。客房裝潢高雅現代，設有電梯、空調與高品質寢具，提供豐盛早餐。',
    subRooms: [
      {
        roomIndex: 1,
        roomName: '房間 1 · 1 位成人 (單臥套房)',
        roomType: 'One-Bedroom Suite (單臥室套房)',
        guests: '1 位成人',
        guestsCount: 1,
        channel: 'Agoda',
        confirmationCode: '1765102246',
        price: 134.78,
        currency: 'EUR',
        breakfast: '含早餐',
        notes: 'Booking ID: 1765102246 · 1 位成人 · 1 晚 · 含早餐 · €134.78'
      },
      {
        roomIndex: 2,
        roomName: '房間 2 · 4 位成人 (雙臥套房)',
        roomType: 'Two-Bedroom Suite (雙臥室套房)',
        guests: '4 位成人',
        guestsCount: 4,
        channel: 'Agoda',
        confirmationCode: '1765100933',
        price: 196.36,
        currency: 'EUR',
        breakfast: '含早餐',
        notes: 'Booking ID: 1765100933 · 4 位成人 · 1 晚 · 含早餐 · €196.36'
      }
    ],
    splitMembers: CROATIA_5_MEMBERS,
  },

  // 5. Park Hotel Bled (10/07 - 10/08 · 1晚 · 5人 · 3間房)
  {
    id: 'stay-park-hotel-bled',
    phase: 'croatia',
    name: 'Park Hotel Bled',
    nameEn: 'Sava Hotels & Resorts - Hotel Park, Bled',
    location: '布萊德 (Bled) · 斯洛維尼亞',
    shortLocation: 'Bled',
    roomSummary: '5人 · 3房',
    googleMapsQuery: 'Park Hotel Bled',
    dates: '10/07 (三) - 10/08 (四)',
    datesDisplay: '10/07–10/08',
    checkInDate: '2026/10/07',
    checkOutDate: '2026/10/08',
    checkInTime: '15:00～22:00',
    checkOutTime: '07:00～11:00',
    nights: 1,
    guestsCount: 5,
    guestsText: '5 位成人',
    roomsCount: 3,
    roomType: '3 間房 (雙人房附陽台 2人 + 湖景雙人房 1人 + 雙人房附陽台 2人)',
    channel: 'Booking.com',
    bookingCode: '5467.373.177',
    pinCode: '4721',
    guestName: 'CHIUNG HUA CHEN (5位成人)',
    currency: 'EUR',
    totalAmount: 530.48,
    paidAmount: 530.48,
    remainingAmount: 0.00,
    paymentStatus: '已付款 · 線上扣款付訖',
    paymentMethod: 'Booking.com 線上扣款付訖 (EUR 530.48)',
    meals: '包含 5 位成人每日早餐',
    mealType: 'breakfast',
    hasParking: true,
    hasWasher: false,
    hasDryer: false,
    hasKitchen: false,
    hasElevator: true,
    isWheelchairAccessible: true,
    hasPool: true,
    hasSauna: true,
    amenityHighlights: ['布萊德湖畔首排', '3間客房/5人', '包含每日早餐', '正宗奶油蛋糕發源地', '有電梯', '室內溫泉泳池'],
    notice: '預訂確認碼：5467.373.177。5位成人、3間客房 (2間陽台雙人房 + 1間湖景雙人房)，全含早餐。坐落於布萊德湖正前方，是傳奇布萊德傳統奶油蛋糕原創誕生地。住宿附近提供私人停車設施 (每日 €12，無法預約)。',
    address: 'Cesta Svobode 15, 4260 Bled, Slovenia',
    phone: '+386 4 579 18 00',
    gpsCoords: 'N 046° 22.063, E 14° 6.552',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=Hotel+Park+Cesta+Svobode+15+Bled',
    desc: '坐落於斯洛維尼亞人間仙境布萊德湖正前方首排水岸，享有布萊德城堡與阿爾卑斯湖景。館內提供全景室內溫水溫泉泳池與著名 Original Bled Cream Cake。',
    splitMembers: CROATIA_5_MEMBERS,
  },

  // 6. Villa Benvenuti (10/08 - 10/11 · 3晚 · 5人 · 1 Villa)
  {
    id: 'stay-villa-benvenuti',
    phase: 'croatia',
    name: 'Villa Benvenuti',
    nameEn: 'Villa Benvenuti, Motovun (Istria)',
    location: '莫托文 (Motovun) · 伊斯特利亞半島',
    shortLocation: 'Motovun · Istria',
    roomSummary: '5人 · 1 Villa',
    googleMapsQuery: 'Villa Benvenuti, Motovun',
    dates: '10/08 (四) - 10/11 (日)',
    datesDisplay: '10/08–10/11',
    checkInDate: '2026/10/08',
    checkOutDate: '2026/10/11',
    checkInTime: '16:00～21:00',
    checkOutTime: '08:00～10:00',
    nights: 3,
    guestsCount: 5,
    guestsText: '5 位成人',
    roomsCount: 1,
    roomType: '豪華 Villa (Luxury Villa · 5位成人包棟)',
    channel: 'Booking.com',
    bookingCode: '5942.025.866',
    pinCode: '3245',
    guestName: 'CHEN CHIUNG HUA (5位成人)',
    currency: 'EUR',
    totalAmount: 636.85,
    paidAmount: 636.85,
    remainingAmount: 0.00,
    paymentStatus: '已付款 · 線上扣款付訖',
    paymentMethod: 'Booking.com 線上扣款付訖 EUR 636.85',
    refundableDeposit: 'EUR 300 損壞押金 (入住以現金支付，退房檢查後全額退款)',
    meals: '不含餐 (附設全套獨立廚房與料理設備)',
    mealType: 'none',
    hasParking: true,
    hasWasher: true,
    hasDryer: true,
    hasKitchen: true,
    hasElevator: false,
    isWheelchairAccessible: false,
    hasPool: true,
    amenityHighlights: ['豪華獨棟 Villa', '洗衣機', '烘衣機', '全套廚房', '免費私人停車', '私人泳池花園'],
    notice: '預訂確認碼：5942.025.866。住客：CHEN CHIUNG HUA (5位成人)。實付總額 €636.85 已扣款付訖。入住時需以現金支付 EUR 300 損壞押金（退房檢查無誤後全額退還）。配備洗衣機、烘衣機、廚房、私人泳池與免費私人停車場。',
    address: 'Kaldir 7, 52424 Motovun, Croatia',
    phone: '+385 98 707 017',
    gpsCoords: 'N 045° 18.900, E 13° 50.991',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=Villa+Benvenuti+Kaldir+7+Motovun',
    desc: '坐落於克羅埃西亞松露之鄉莫托文（Motovun）靜謐葡萄園與橄欖樹山丘間的頂級景觀別墅。全棟獨立使用，配備私人泳池、全套廚房、洗烘衣設備與壯麗山城景致。',
    splitMembers: CROATIA_5_MEMBERS,
  },

  // 7. Charming house Maša (10/11 - 10/13 · 2晚 · 5人 · 1 Villa)
  {
    id: 'stay-charming-masa',
    phase: 'croatia',
    name: 'Charming house Maša',
    nameEn: 'Charming house Maša, Rakovica',
    location: '拉科維察 (Rakovica) · 十六湖國家公園區',
    shortLocation: 'Rakovica · Plitvice',
    roomSummary: '5人 · 1 Villa',
    googleMapsQuery: 'Charming house Maša, Rakovica',
    dates: '10/11 (日) - 10/13 (二)',
    datesDisplay: '10/11–10/13',
    checkInDate: '2026/10/11',
    checkOutDate: '2026/10/13',
    checkInTime: '16:00～22:00',
    checkOutTime: '08:00～10:00',
    nights: 2,
    guestsCount: 5,
    guestsText: '5 位成人',
    roomsCount: 1,
    roomType: '雙臥室 Villa (2-Bedroom Villa · 5位成人包棟)',
    channel: 'Booking.com',
    bookingCode: '6233.309.152',
    pinCode: '2390',
    guestName: 'CHEN CHIUNG HUA (5位成人)',
    currency: 'EUR',
    totalAmount: 419.29,
    paidAmount: 419.29,
    remainingAmount: 0.00,
    paymentStatus: '已付款 · 線上扣款付訖',
    paymentMethod: 'Booking.com 線上扣款付訖 EUR 419.29 (原價 €460.00 扣除 Booking.com 補貼 -€40.71)',
    meals: '不含餐 (附設全套獨立廚房與烤箱烤肉設施)',
    mealType: 'none',
    hasParking: true,
    hasWasher: true,
    hasDryer: false,
    hasKitchen: true,
    hasElevator: false,
    isWheelchairAccessible: false,
    hasSauna: true,
    hasHotTub: true,
    amenityHighlights: ['雙臥室獨立別墅', '洗衣機', '全套廚房', '免費私人停車', '熱水按摩池 (Jacuzzi)', '私人桑拿'],
    notice: '預訂確認碼：6233.309.152。住客：CHEN CHIUNG HUA (5位成人)。實付總額 €419.29 已線上扣款付訖。附設熱水按摩池、桑拿烤箱、戶外露台、花園山景、洗衣機、全套廚房與免費私人停車場（不需預約）。',
    address: 'Korita 39, 47245 Rakovica, Croatia',
    phone: '+385 91 155 2051',
    gpsCoords: 'N 044° 57.833, E 15° 38.278',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=Charming+house+Ma%C5%A1a+Rakovica',
    desc: '坐落於十六湖國家公園周邊拉科維察 (Rakovica) 的溫馨度假別墅，坐擁壯麗山林景緻。配備專屬熱水按摩浴池、桑拿房與全套料理廚房，是探索十六湖國家公園的放鬆居所。',
    splitMembers: CROATIA_5_MEMBERS,
  },

  // 8. AC Hotel Split (10/13 - 10/15 · 2晚 · 5人 · 3間房)
  {
    id: 'stay-ac-hotel-split',
    phase: 'croatia',
    name: 'AC Hotel Split',
    nameEn: 'AC Hotel Split by Marriott, Dalmatia Tower',
    location: '斯普利特 (Split) · 萬豪第一高樓',
    shortLocation: 'Split',
    roomSummary: '5人 · 3房',
    googleMapsQuery: 'AC Hotel Split',
    dates: '10/13 (二) - 10/15 (四)',
    datesDisplay: '10/13–10/15',
    checkInDate: '2026/10/13',
    checkOutDate: '2026/10/15',
    checkInTime: '15:00',
    checkOutTime: '12:00',
    nights: 2,
    guestsCount: 5,
    guestsText: '5 位成人',
    roomsCount: 3,
    roomType: '3 間海景客房 (2 間標準大床 + 1 間高級雙床)',
    channel: 'Marriott',
    bookingCode: '萬豪 3 筆訂單 (#81029448 / #93685936 / #81018796)',
    currency: 'EUR',
    totalAmount: 1191.00, // €362.52 + €379.44 + €449.04 = €1,191.00
    paidAmount: 0.00,
    remainingAmount: 1191.00,
    paymentStatus: '信用卡擔保 · 現場/退房付款',
    paymentMethod: '萬豪官方預訂信用卡擔保 (現場/退房以信用卡支付 EUR 1,191.00，3筆獨立訂單)',
    meals: '兩間含早餐 (Autumn in the Heights) ＋ 一間會員房價',
    mealType: 'breakfast',
    hasParking: true,
    hasWasher: false,
    hasDryer: false,
    hasKitchen: false,
    hasElevator: true,
    isWheelchairAccessible: true,
    hasPool: true,
    hasSauna: true,
    amenityHighlights: ['Dalmatia Tower 第一高樓', '3間客房/5人', '全海景高樓房', '頂樓海景泳池', '178 SPA 水療', '電梯直達'],
    notice: '坐落於克羅埃西亞第一高樓 Dalmatia Tower，俯瞰亞德里亞海與斯普利特全景；館內提供頂樓無邊際泳池、178 SPA 水療與全天候健身中心。',
    address: 'Ul. Domovinskog rata 61A, 21000, Split, Croatia',
    phone: '+385 21 688 888',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=AC+Hotel+Split',
    desc: '坐落於克羅埃西亞最高建築「達爾馬提亞大樓 (Dalmatia Tower)」，萬豪旗下 AC Hotel Split 擁有震撼的 360 度亞德里亞海與斯普利特歷史古城全景。配備全景落地窗、頂樓恆溫泳池、178 SPA 水療中心與高級餐飲。',
    subRooms: [
      {
        roomIndex: 1,
        roomName: '房間 1 · 1 位成人 (標準大床海景房)',
        roomType: 'Standard King, Sea View',
        guests: '1 位成人',
        guestsCount: 1,
        channel: 'Marriott',
        confirmationCode: '81029448',
        price: 362.52,
        currency: 'EUR',
        ratePlan: 'Autumn In The Heights',
        breakfast: '含早餐 (Autumn In The Heights)',
        notes: 'Confirmation: 81029448 · Standard King · Sea View · 1 位成人 · Rate: Autumn In The Heights · €362.52'
      },
      {
        roomIndex: 2,
        roomName: '房間 2 · 2 位成人 (標準大床海景房)',
        roomType: 'Standard King, Sea View',
        guests: '2 位成人',
        guestsCount: 2,
        channel: 'Marriott',
        confirmationCode: '93685936',
        price: 379.44,
        currency: 'EUR',
        ratePlan: 'Member Rate Flexible',
        breakfast: '萬豪會員方案',
        notes: 'Confirmation: 93685936 · Standard King · Sea View · 2 位成人 · Rate: Member Rate Flexible · €379.44'
      },
      {
        roomIndex: 3,
        roomName: '房間 3 · 2 位成人 (高級雙床海景房)',
        roomType: 'Superior Twin, Sea View',
        guests: '2 位成人',
        guestsCount: 2,
        channel: 'Marriott',
        confirmationCode: '81018796',
        price: 449.04,
        currency: 'EUR',
        ratePlan: 'Autumn In The Heights',
        breakfast: '含早餐 (Autumn In The Heights)',
        notes: 'Confirmation: 81018796 · Superior Twin · Sea View · 2 位成人 · Rate: Autumn In The Heights · €449.04'
      }
    ],
    splitMembers: CROATIA_5_MEMBERS,
  },

  // 9. Three Little Birds (10/15 - 10/16 · 1晚 · 5人 · 1 Villa)
  {
    id: 'stay-three-little-birds',
    phase: 'croatia',
    name: 'Three Little Birds',
    nameEn: 'Three Little Birds Villa, Vrbanj (Hvar)',
    location: 'Vrbanj, Hvar · 赫瓦爾島',
    shortLocation: 'Vrbanj · Hvar',
    roomSummary: '5人 · 1 Villa',
    googleMapsQuery: 'Three Little Birds, Vrbanj, Hvar',
    dates: '10/15 (四) - 10/16 (五)',
    datesDisplay: '10/15–10/16',
    checkInDate: '2026/10/15',
    checkOutDate: '2026/10/16',
    checkInTime: '15:00～20:00',
    checkOutTime: '10:00 前',
    nights: 1,
    guestsCount: 5,
    guestsText: '5 位成人',
    roomsCount: 1,
    roomType: 'Villa with Private Pool (私人泳池獨棟別墅 · 5位成人)',
    channel: 'Booking.com',
    bookingCode: '6208.171.806',
    pinCode: '2882',
    guestName: 'CHEN CHIUNG HUA (5位成人)',
    currency: 'EUR',
    totalAmount: 352.75,
    paidAmount: 352.75,
    remainingAmount: 0.00,
    paymentStatus: '已付款 · 線上扣款付訖',
    paymentMethod: 'Booking.com 線上扣款付訖 EUR 352.75 (5 位成人包棟獨棟別墅全額付訖)',
    meals: '不含餐 (附設全套獨立廚房與洗碗機)',
    mealType: 'none',
    hasParking: true,
    hasWasher: true,
    hasDryer: false,
    hasKitchen: true,
    hasElevator: false,
    isWheelchairAccessible: true,
    hasPool: true,
    amenityHighlights: ['洗衣機', '廚房', '私人泳池', '免費私人停車', '輪椅可通行'],
    notice: '預訂確認碼：6208.171.806。住客：CHEN CHIUNG HUA (5位成人)。實付總額 €352.75 已扣款付訖。5 位成人包棟，附設私人泳池、廚房、洗衣機、洗碗機；整間位於地面樓層且輪椅可通行；免費私人停車。',
    address: 'Vrbanj, 21460 弗班吉 (Vrbanj), Hvar Island, Croatia',
    phone: '+385 91 174 1531',
    gpsCoords: 'N 043° 9.917, E 16° 38.657',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=Three+Little+Birds+Vrbanj+Hvar',
    desc: '坐落於赫瓦爾島寧靜優雅的傳統小鎮 Vrbanj，融合達爾馬提亞古老石屋風情與現代舒適設施。擁有專屬私人泳池與戶外休憩庭園。',
    splitMembers: CROATIA_5_MEMBERS,
  },

  // 10. SIRO Porto Montenegro (10/16 - 10/18 · 2晚 · 5人 · 1 公寓) —— USD 幣別！
  {
    id: 'stay-siro-montenegro',
    phase: 'croatia',
    name: 'SIRO Porto Montenegro',
    nameEn: 'SIRO Porto Montenegro, Tivat',
    location: 'Tivat, Montenegro · 黑山/蒙特內哥羅',
    shortLocation: 'Tivat · Montenegro',
    roomSummary: '5人 · 1公寓',
    googleMapsQuery: 'SIRO Porto Montenegro, Tivat',
    dates: '10/16 (五) - 10/18 (日)',
    datesDisplay: '10/16–10/18',
    checkInDate: '2026/10/16',
    checkOutDate: '2026/10/18',
    checkInTime: '15:00',
    checkOutTime: '11:00',
    nights: 2,
    guestsCount: 5,
    guestsText: '5 位成人',
    roomsCount: 1,
    roomType: 'SIRO Apartment – 2 Bedroom (雙臥室奢華公寓 · 5位成人)',
    channel: 'Agoda',
    bookingCode: 'Booking ID: 1766436518',
    bookingRef: '260883590',
    currency: 'USD',
    totalAmount: 942.97,
    paidAmount: 942.97,
    remainingAmount: 0.00,
    paymentStatus: '已確認 · Agoda 預訂付訖 (USD)',
    paymentMethod: 'Agoda 線上支付 (US$942.97)',
    meals: '包含 5 位成人每日早餐',
    mealType: 'breakfast',
    hasParking: true,
    hasWasher: false,
    hasDryer: false,
    hasKitchen: true,
    hasElevator: true,
    isWheelchairAccessible: true,
    hasPool: true,
    hasSauna: true,
    amenityHighlights: ['Porto Montenegro 核心', '雙臥室奢華公寓', '含每日早餐', '黑山超級遊艇港', '頂級健身水療中心'],
    notice: '此筆訂單以 USD 美元計價：US$942.97 (Booking ID: 1766436518 / Ref: 260883590)。雙臥室奢華公寓，5位成人含早餐；泳池自 10/15 起季節性關閉。',
    address: 'Porto Montenegro, 85320 Tivat, Montenegro',
    phone: '+382 32 660 000',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=SIRO+Porto+Montenegro+Tivat',
    desc: '坐落於蒙特內哥羅世界級黑山港（Porto Montenegro）遊艇超級碼頭，柯茲納集團旗下頂級旅宿。結合極致健康、運動科技水療與海灣景致。',
    splitMembers: CROATIA_5_MEMBERS,
  },

  // 11. Tirkiz Apartment (10/18 - 10/21 · 3晚 · 5人 · 1 公寓)
  {
    id: 'stay-tirkiz-dubrovnik',
    phase: 'croatia',
    name: 'Tirkiz Apartment',
    nameEn: 'Tirkiz Apartment, Dubrovnik',
    location: 'Dubrovnik · 杜布羅夫尼克 (普洛切區)',
    shortLocation: 'Dubrovnik',
    roomSummary: '5人 · 1公寓',
    googleMapsQuery: '29 Ulica Lukše Beritića, Dubrovnik',
    dates: '10/18 (日) - 10/21 (三)',
    datesDisplay: '10/18–10/21',
    checkInDate: '2026/10/18',
    checkOutDate: '2026/10/21',
    checkInTime: '15:00～22:00',
    checkOutTime: '03:00～10:00',
    nights: 3,
    guestsCount: 5,
    guestsText: '5 位成人 (住客：CHIUNG HUA CHEN)',
    roomsCount: 1,
    roomType: '三臥室公寓 (Three-Bedroom Apartment · 5位成人)',
    channel: 'Booking.com',
    bookingCode: '5454.355.858',
    pinCode: '3263',
    currency: 'EUR',
    totalAmount: 1226.93,
    paidAmount: 1226.93,
    remainingAmount: 0.00,
    paymentStatus: '已付款 · 線上扣款付訖',
    paymentMethod: 'Booking.com 線上扣款付訖 EUR 1,226.93 (三臥室公寓 3 晚全額付訖)',
    meals: '不含餐 (附設全套廚房、烤箱、微波爐、洗碗機與咖啡機)',
    mealType: 'none',
    hasParking: true,
    hasWasher: true,
    hasDryer: true,
    hasKitchen: true,
    hasElevator: true,
    isWheelchairAccessible: false,
    amenityHighlights: ['海景與古城景觀', '3間獨立臥室/5人', '洗衣機與烘衣機', '全套廚房與洗碗機', '免費私人停車', '各客房獨立空調'],
    notice: '5 位成人三臥室海景公寓；免費私人停車設施（不需預約）；配備洗衣機、烘衣機、廚房、洗碗機、微波爐、烤箱與各客房獨立空調。不可退款方案。',
    address: '29 Ulica Lukše Beritića, 20000 杜布羅夫尼克 (Ploče, Dubrovnik), 克羅埃西亞',
    phone: '+385 99 296 0954',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=29+Ulica+Luk%C5%A1e+Beriti%C4%87a+Dubrovnik',
    desc: '坐落於杜布羅夫尼克普洛切（Ploče）歷史城區高處（GPS: N 042° 38.681, E 18° 6.824），坐擁亞德里亞海、景點景觀與古城壯麗全景。配備私人免費停車位、洗衣機、獨立烘衣機、洗碗機與各房間獨立空調。',
    splitMembers: CROATIA_5_MEMBERS,
  },

  // 12. Hotel Osteria della Pista (10/21 - 10/23 · 2晚 · 5人 · 2間房)
  {
    id: 'stay-osteria-della-pista',
    phase: 'croatia',
    name: 'Hotel Osteria della Pista',
    nameEn: 'Hotel Osteria della Pista dal 1875, Casorate Sempione',
    location: '米蘭機場周邊 · 卡索雷特塞皮翁',
    shortLocation: 'Casorate Sempione · Milan MXP',
    roomSummary: '5人 · 2房',
    googleMapsQuery: 'Hotel Osteria della Pista, Via Verbano 1, 21011 Casorate Sempione',
    dates: '10/21 (三) - 10/23 (五)',
    datesDisplay: '10/21–10/23',
    checkInDate: '2026/10/21',
    checkOutDate: '2026/10/23',
    checkInTime: '14:00～23:30',
    checkOutTime: '10:30 前',
    nights: 2,
    guestsCount: 5,
    guestsText: '5 位成人',
    roomsCount: 2,
    roomType: '2 間客房 (雙人房 2人 ＋ 三人房 3人)',
    channel: 'Booking.com',
    bookingCode: '6261.889.385',
    pinCode: '7623',
    currency: 'EUR',
    totalAmount: 682.18, // €320.40 + €430.00 = €750.40 - €68.22 (Booking.com 支付) = €682.18
    paidAmount: 682.18,
    remainingAmount: 0.00,
    paymentStatus: '已確認 · Booking.com 扣款付訖',
    paymentMethod: 'Booking.com 扣款付訖 (€682.18，含稅原價 €750.40 扣除 Booking.com 支付 -€68.22)',
    meals: '兩間客房均包含每日早餐',
    mealType: 'breakfast',
    hasParking: true,
    hasWasher: false,
    hasDryer: false,
    hasKitchen: false,
    hasElevator: true,
    isWheelchairAccessible: false,
    amenityHighlights: ['百年經典旅宿 (dal 1875)', '含 5 人每日早餐', '免費公共停車(不需預約)', '機場免費接駁車 (至 23:00)', '有電梯直達高樓層', '全館免費 WiFi'],
    notice: '預訂確認碼：6261.889.385。5 位成人、2 間客房（雙人房 2人 + 三人房 3人），均含每日早餐。入住 14:00～23:30，退房 10:30 前。飯店提供米蘭 MXP 機場接駁專車服務至晚上 23:00。不需預約免費公共停車。',
    address: 'Via Verbano 1, 21011 Casorate Sempione (VA), Italy',
    phone: '+39 0331 295054',
    gpsCoords: 'N 045° 40.453, E 08° 44.404',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=Hotel+Osteria+della+Pista+Casorate+Sempione',
    desc: '創立於 1875 年的百年歷史經典旅宿，坐落於米蘭馬爾彭薩機場 (MXP) 周邊小鎮 Casorate Sempione，車程僅約 10 分鐘。提供熱情貼心的義式待客服務、傳統義大利餐廳、每日美味早餐、免費機場接駁專車（服務至 23:00）與免費停車，是出境返台前夕最溫馨放鬆的落腳處。',
    subRooms: [
      {
        roomIndex: 1,
        roomName: '房間 1 · 雙人房 (2 位成人)',
        roomType: '雙人房 (Double Room · 1張加大雙人床)',
        guests: 'CHEN CHIUNG HUA (2 位成人)',
        guestsCount: 2,
        channel: 'Booking.com',
        confirmationCode: '6261.889.385-R1',
        price: 291.27,
        currency: 'EUR',
        breakfast: '含早餐',
        notes: '住客: CHEN CHIUNG HUA (2人) · 客房 €291.27 + 10%加值稅 €29.13 = €320.40'
      },
      {
        roomIndex: 2,
        roomName: '房間 2 · 三人房 (3 位成人)',
        roomType: '三人房 (Triple Room · 1張單人床 + 1張加大雙人床)',
        guests: 'CHIUNG HUA CHEN (3 位成人)',
        guestsCount: 3,
        channel: 'Booking.com',
        confirmationCode: '6261.889.385-R2',
        price: 390.91,
        currency: 'EUR',
        breakfast: '含早餐',
        notes: '住客: CHIUNG HUA CHEN (3人) · 客房 €390.91 + 10%加值稅 €39.09 = €430.00'
      }
    ],
    splitMembers: CROATIA_5_MEMBERS,
  }
];

// 3 項官方確認主要交通支出 (Single Source of Truth)
export const TRANSPORTS: TransportItem[] = [
  // 1. 義大利 Hertz 租車 (09/28 - 10/06 · 8天 · 3人)
  {
    id: 'transit-hertz',
    phase: 'italy',
    category: 'Transit',
    title: 'Hertz 義大利租車 (MXP取 ➜ Trieste 提前還車 · 8天)',
    channel: 'Hertz',
    confirmationCode: 'L661E7E0321',
    datesText: '09/28–10/06',
    pickupTime: '2026/09/28 09:30',
    pickupLocation: 'MXP Milan Malpensa Airport Terminal 1',
    pickupAddress: 'MXP Terminal 1, Milan, Italy',
    dropoffTime: '2026/10/06 11:15 (提前還車 · 配合 12:20 FlixBus 發車)',
    dropoffLocation: 'Trieste Downtown – Bus Station Silos',
    dropoffAddress: 'Piazza della Libertà 9, 34132 Trieste, Italy',
    vehicleModel: 'Opel Corsa 或同級 · 自排',
    currency: 'EUR',
    totalAmount: 883.37,
    coverage: 'Super Cover / Excess Waiver · 單程異地還車',
    splitMembers: ITALY_3_MEMBERS,
    notes: 'Confirmation: L661E7E0321 · 09/28 09:30 MXP T1 取車 ➜ 10/06 提前於 11:15 Trieste 還車以配合 12:20 FlixBus N544 出發（原合約預約至 17:30，提早還車無額外費用）· Opel Corsa 或同級自排 · 含 Super Cover 全險與異地還車費 · €883.37',
    features: ['Opel Corsa 自排', 'Super Cover 全險', '單程還車', '提前還車銜接 FlixBus', '3人分攤 (每人 €294.46)']
  },

  // 2. FlixBus 跨國接駁 (10/06 · Trieste ➜ Zagreb · 3人)
  {
    id: 'transit-flixbus',
    phase: 'italy',
    category: 'Transit',
    title: 'FlixBus N544 跨國巴士 (Trieste ➜ Zagreb)',
    channel: 'FlixBus',
    confirmationCode: '338 494 7118',
    datesText: '10/06',
    pickupTime: '2026/10/06 12:20',
    pickupLocation: 'Trieste Bus Station Silos',
    pickupAddress: 'Piazza della Libertà 9, Trieste, Italy',
    dropoffTime: '2026/10/06 15:50',
    dropoffLocation: 'Zagreb Central Bus Station (Autobusni Kolodvor)',
    dropoffAddress: 'Av. Marina Držića 4, 10000 Zagreb, Croatia',
    currency: 'EUR',
    totalAmount: 62.13,
    splitMembers: ITALY_3_MEMBERS,
    notes: 'FlixBus Route N544 · 10/06 12:20 Trieste 出發 ➜ 15:50 Zagreb 抵達 · 3 位成人車票 · Booking Number: 338 494 7118 · 總價 €62.13',
    features: ['Route N544', '直達直通巴士', '3人分攤 (每人 €20.71)']
  },

  // 3. UNI RENT 克羅埃西亞租車 (10/07 - 10/21 · 14天 · 5人)
  {
    id: 'transit-unirent',
    phase: 'croatia',
    category: 'Transit',
    title: 'UNI RENT 克羅埃西亞租車 (Zagreb取 ➜ Dubrovnik還 · 14天)',
    channel: 'UNI RENT',
    confirmationCode: '26-ZGD-1544',
    datesText: '10/07–10/21',
    pickupTime: '2026/10/07 13:01',
    pickupLocation: 'Zagreb Downtown (ZGD)',
    pickupAddress: 'Kranjčevićeva 46, 10000 Zagreb, Croatia',
    dropoffTime: '2026/10/21 13:01',
    dropoffLocation: 'Dubrovnik Airport (DBA)',
    dropoffAddress: 'Zračna Luka Dubrovnik, Mocici, Dobrota 24, 20213 Čilipi, Croatia',
    vehicleModel: 'Mercedes V-Class 7+1 (Category LVAR) 或同級 · 自排',
    currency: 'EUR',
    totalAmount: 1596.00,
    depositAmount: 1150.00, // 授權押金 €1,150 屬可退還押金，禁止計入旅費
    coverage: 'Premium CDW + Premium WUG + Premium TP + Premium SCDW (自負額 €0) · 含 Green Card、Cross Border、Ferry Fee、One Way',
    splitMembers: CROATIA_5_MEMBERS,
    notes: 'Booking: 26-ZGD-1544 · Mercedes V-Class 7+1 (LVAR) · 14天自駕 · SCDW+WUG 零自負額全險 · 信用卡預授權 €2,746 (租金 €1,596 + 押金 €1,150) · 旅費僅計入 €1,596.00',
    features: ['Mercedes V-Class 7+1 (LVAR)', '零自負額 €0', '含綠卡與跨境許可', '含渡輪許可', '異地還車費 €0', '5人分攤 (每人 €319.20)']
  },

  // 4. 瑞安航空 FR5935 (10/21 · 杜布羅夫尼克 ➜ 米蘭貝加莫 · 5人含行李)
  {
    id: 'transit-ryanair',
    phase: 'croatia',
    category: 'Flight',
    title: 'Ryanair 瑞安航空 FR5935 (DBV ➜ BGY · 5人含行李)',
    channel: 'Ryanair',
    confirmationCode: 'V64LYT / XYCEMH',
    datesText: '10/21',
    pickupTime: '2026/10/21 14:25',
    pickupLocation: 'Dubrovnik Airport (DBV)',
    dropoffTime: '2026/10/21 16:00',
    dropoffLocation: 'Milan Bergamo Airport (BGY)',
    currency: 'EUR',
    totalAmount: 659.15,
    splitMembers: CROATIA_5_MEMBERS,
    notes: '手冊第 1 頁與第 4 頁機票確認 · Ryanair FR5935 · 10/21 14:25 DBV ➜ 16:00 BGY (直飛 1h35m) · 訂位代號: 4人 V64LYT (春香、小許、麗安、小花)，頭家娘代號: XYCEMH · 行李: 小花 20kg × 2，其餘4人各 20kg × 1 · 總價 €659.15 (5人分攤，每人 €131.83)',
    features: ['FR5935 直飛 1h35m', '5人全數含托運行李 (小花 2件)', '5人分攤 (每人 €131.83)']
  },

  // 5. 米蘭 Hertz 租車 (10/21 17:00 - 10/23 13:30 · BGY取 ➜ MXP T1還 · 2天 · 5人)
  {
    id: 'transit-hertz-milan',
    phase: 'croatia', // 屬於克羅埃西亞返程米蘭 5 人階段
    category: 'Transit',
    title: 'Hertz 米蘭機場租車 (BGY取 ➜ MXP T1還 · 2天 · L717EEC42A9)',
    channel: 'Hertz',
    confirmationCode: 'L717EEC42A9',
    datesText: '10/21–10/23',
    pickupTime: '2026/10/21 17:00',
    pickupLocation: 'Bergamo Airport (BGY P3)',
    pickupAddress: 'Orio Al Serio Airport, P3, 24050 Bergamo, Italy',
    dropoffTime: '2026/10/23 13:30',
    dropoffLocation: 'Milan Malpensa Airport - Terminal 1 (MXP T1)',
    dropoffAddress: 'Malpensa Airport Terminal 1, Ferno, 21010 Milan, Italy',
    vehicleModel: 'Standard Elite · PEUGEOT E-5008 或同級 (電動自排 · 車隊 G1)',
    currency: 'EUR',
    totalAmount: 336.42,
    coverage: 'SuperCover (SC) 零自負額全險 + 碰撞保護 + 竊盜保護 + 無限免費里程',
    splitMembers: CROATIA_5_MEMBERS,
    notes: '手冊正式合約單號: L717EEC42A9 · 承租人/駕駛人: CHANG CHUN HSIANG (春香) · BGY 10/21 17:00 取車 ➜ MXP T1 10/23 13:30 還車 · 車型 PEUGEOT E-5008 或同級 (電動自排) · 已含 SuperCover (SC) 全險 · CDP: ASIA GOLD MEMBERS (10% 折扣) · 總額 €336.42 (5人分攤，每人 €67.28)',
    features: ['PEUGEOT E-5008 (Standard Elite)', 'SuperCover (SC) 零自負額全險', '含碰撞/竊盜/無限里程', 'BGY 取車 ➜ MXP T1 還車 (2天)', '5人分攤 (每人 €67.28)']
  },

  // 6. 十六湖國家公園門票 (10/12 · Entrance 2 · 5人)
  {
    id: 'ticket-plitvice',
    phase: 'croatia',
    category: 'Ticket',
    title: '十六湖國家公園門票 Entrance 2 (5人已購 · 票號 26439385626)',
    channel: 'Nacionalni park Plitvička jezera',
    confirmationCode: '26439385626',
    datesText: '10/12 09:00–10:00',
    pickupLocation: 'Plitvice Lakes Entrance 2 (Ulaz 2)',
    currency: 'EUR',
    totalAmount: 115.00,
    splitMembers: CROATIA_5_MEMBERS,
    notes: '手冊第 1 頁與第 61 頁門票確認 · 入園時間: 10/12 09:00–10:00 (Entrance 2) · 成人票 5 人已購 (€23 × 5 = €115.00) · 票號: 26439385626 · 5人分攤 (每人 €23.00)',
    features: ['Entrance 2 (09:00-10:00)', '含全區電動船與接駁小火車', '5人分攤 (每人 €23.00)']
  },

  // 7. 杜布羅夫尼克 3 日通行證 (Dubrovnik 3-Day Pass · 3人)
  {
    id: 'ticket-dubrovnik-pass',
    phase: 'croatia',
    category: 'Ticket',
    title: 'Dubrovnik 3-Day Pass (杜布羅夫尼克三日卡 · 3人)',
    channel: 'Dubrovnik Pass',
    confirmationCode: 'Dubrovnik Pass 3-Day',
    datesText: '10/18–10/21',
    pickupLocation: 'Pile Gate 窗口出示 QR Code 兌換實體公車券',
    currency: 'EUR',
    totalAmount: 150.00,
    splitMembers: ITALY_3_MEMBERS, // 手冊第 1 頁明載 3 人，每人 €50
    notes: '手冊第 1 頁與第 88 頁 · 三日卡 3 位成人 (€50 × 3 = €150.00) · 含古城牆 (City Walls)、長官宮、斯邦札宮、方濟會修道院、Libertas 城市公車等 · 3人分攤 (每人 €50.00)',
    features: ['杜布羅夫尼克古城牆', '歷史博物館與宮殿', 'Libertas 城市公車券', '3人分攤 (每人 €50.00)']
  }
];

// 計算匯總函式 (自動從底層明細加總，杜絕寫死不一致)
export function computeTravelPlanStats() {
  // 1. 住宿分類加總
  let accommodationEur = 0;
  let accommodationUsd = 0;

  ACCOMMODATIONS.forEach(acc => {
    if (acc.currency === 'EUR') {
      accommodationEur += acc.totalAmount;
    } else if (acc.currency === 'USD') {
      accommodationUsd += acc.totalAmount;
    }
  });

  // 2. 租車／交通／航班／門票加總 (全為 EUR，與手冊第 1 頁 Table II 完全一致合計 €3,802.07)
  let transitEur = 0;
  let flightEur = 0;
  let ticketEur = 0;

  TRANSPORTS.forEach(tr => {
    if (tr.category === 'Flight') {
      flightEur += tr.totalAmount;
    } else if (tr.category === 'Ticket') {
      ticketEur += tr.totalAmount;
    } else {
      transitEur += tr.totalAmount;
    }
  });

  const transportAndTicketsEur = transitEur + flightEur + ticketEur;

  // 3. 總計 (EUR 與 USD 分開保存)
  const totalEur = accommodationEur + transportAndTicketsEur;
  const totalUsd = accommodationUsd;

  // 4. 參考台幣換算 (EUR: 37.3, USD: 30.95)
  const EUR_TO_TWD = 37.3;
  const USD_TO_TWD = 30.95;
  const referenceTwd = Math.round(totalEur * EUR_TO_TWD + totalUsd * USD_TO_TWD);

  // 5. 每人分攤計算
  const memberBreakdown: Record<string, {
    totalEur: number;
    totalUsd: number;
    italyEur: number;
    croatiaEur: number;
    croatiaUsd: number;
    items: {
      id: string;
      title: string;
      category: 'Stay' | 'Transit' | 'Flight' | 'Ticket';
      phase: 'italy' | 'croatia';
      currency: 'EUR' | 'USD';
      itemTotal: number;
      shareAmount: number;
      sharerCount: number;
    }[];
  }> = {};

  ALL_MEMBERS.forEach(m => {
    memberBreakdown[m] = {
      totalEur: 0,
      totalUsd: 0,
      italyEur: 0,
      croatiaEur: 0,
      croatiaUsd: 0,
      items: []
    };
  });

  // 分攤住宿
  ACCOMMODATIONS.forEach(acc => {
    const sharers = acc.splitMembers;
    const count = sharers.length;
    const share = acc.totalAmount / count;

    sharers.forEach(m => {
      if (memberBreakdown[m]) {
        if (acc.currency === 'EUR') {
          memberBreakdown[m].totalEur += share;
          if (acc.phase === 'italy') {
            memberBreakdown[m].italyEur += share;
          } else {
            memberBreakdown[m].croatiaEur += share;
          }
        } else {
          memberBreakdown[m].totalUsd += share;
          memberBreakdown[m].croatiaUsd += share;
        }

        memberBreakdown[m].items.push({
          id: acc.id,
          title: acc.name,
          category: 'Stay',
          phase: acc.phase,
          currency: acc.currency,
          itemTotal: acc.totalAmount,
          shareAmount: share,
          sharerCount: count
        });
      }
    });
  });

  // 分攤租車、交通、航班與門票
  TRANSPORTS.forEach(tr => {
    const sharers = tr.splitMembers;
    const count = sharers.length;
    const share = tr.totalAmount / count;

    sharers.forEach(m => {
      if (memberBreakdown[m]) {
        memberBreakdown[m].totalEur += share;
        if (tr.phase === 'italy') {
          memberBreakdown[m].italyEur += share;
        } else {
          memberBreakdown[m].croatiaEur += share;
        }

        memberBreakdown[m].items.push({
          id: tr.id,
          title: tr.title,
          category: tr.category,
          phase: tr.phase,
          currency: tr.currency,
          itemTotal: tr.totalAmount,
          shareAmount: share,
          sharerCount: count
        });
      }
    });
  });

  return {
    accommodationEur,
    accommodationUsd,
    transitEur,
    flightEur,
    ticketEur,
    transportAndTicketsEur,
    totalEur,
    totalUsd,
    referenceTwd,
    memberBreakdown
  };
}
