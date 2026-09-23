export type TimelineItemType = 
  | 'activity' 
  | 'food' 
  | 'accommodation' 
  | 'transport' 
  | 'parking' 
  | 'cablecar' 
  | 'ferry' 
  | 'walk' 
  | 'shopping' 
  | 'gas' 
  | 'warning';

export interface RestaurantCardData {
  name: string; // 餐廳名稱
  type: string; // 餐廳類型
  recommendedDishes: string; // 推薦料理
  businessHours: string; // 店家營業時間
  lunchHours: string; // 午餐供餐時間
  dinnerHours: string; // 晚餐供餐時間
  closedDays: string; // 休息日
  phone: string; // 電話
  address: string; // 完整地址
  googleMapsQuery: string; // Google Maps 查詢名稱
  websiteUrl?: string; // 官網
  reservationInfo: string; // 訂位說明
  reservationUrl?: string; // 訂位連結
  notes?: string; // 備註
}

export interface DrivingRouteInfo {
  from: string; // 出發地
  to: string; // 目的地
  distance: string; // 預估距離 (e.g. 約 190 km)
  duration: string; // 預估車程 (e.g. 約 2 小時 15 分)
  parkingSpot: string; // 停車地點
  routeNote?: string; // 路線提醒 (e.g. 經 A4 / A22 高速公路，湖濱隧道需全天開大燈)
  tollNote?: string; // 過路費資訊
}

export interface ImportantAlert {
  title: string;
  type: 'traffic' | 'parking' | 'cablecar' | 'ferry' | 'permit' | 'warning' | 'shopping' | 'general';
  content: string;
}

export interface TimelineNode {
  time: string;
  type: TimelineItemType;
  title: string;
  badge?: string;
  description: string;
  duration?: string; // 建議停留時間 (e.g. 建議停留 1.5 ~ 2 小時 / 待確認)
  address?: string; // 完整地址
  mapQuery?: string; // Google Maps 導航查詢字串
  ticketPrice?: string; // 票價 (e.g. 成人約 €2～3 / 免費參觀 / 纜車往返 €39.50)
  parkingInfo?: string; // 停車資訊 (e.g. 附免費私人停車場 / 需停指定收費場)
  openingHours?: string; // 營業時間
  phone?: string; // 電話
  importantNotice?: string; // 重要提醒
  photoUrl?: string; // 景點照片網址
  actionLabel?: string;
  actionRoute?: string;
  restaurantCard?: RestaurantCardData; // 統一格式餐飲資訊卡
}

export interface DayItinerary {
  dayNum: number;
  date: string; // "09/28 (一)" 或 "2026/09/28"
  dateDisplay: string; // "09/28 (一)"
  month: string; // "09"
  day: string; // "28"
  weekday: string; // "星期一 / MON"
  cityRegion: string; // "Limone sul Garda · 加爾達湖"
  themeTitle: string; // "檸檬小鎮 · 初抵加爾達湖畔"
  englishDestination?: string; // "LIMONE SUL GARDA"
  chineseSubtitle?: string; // "抵達義大利 ＋ 取車自駕前往檸檬小鎮"
  hotelName: string; // "Aria Life Hotel"
  hotelRoomType?: string; // "Suite 小型套房 · 含早餐"
  hotelAddress?: string; // "Via Einaudi 4, 25010 Limone sul Garda, Italy"
  hotelNote?: string;
  todayRoute: string[]; // 今日路線: ["MXP 機場", "Hertz 取車", "Aria Life Hotel", "舊港口碼頭", ...]
  drivingRoute?: DrivingRouteInfo; // 開車路線 (距離、車程、停車地點)
  importantAlerts?: ImportantAlert[]; // 重要交通／停車／纜車醒目提示框
  region: 'italy' | 'croatia';
  highlights: string[];
  isFlexibleDate?: boolean;
  timeline: TimelineNode[];
}
