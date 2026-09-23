import { DayItinerary } from './itineraryTypes';
import { ITALY_ITINERARY_DAYS } from './italyItinerary';
import { CROATIA_ITINERARY_DAYS } from './croatiaItinerary';

export * from './itineraryTypes';
export { ITALY_ITINERARY_DAYS } from './italyItinerary';
export { CROATIA_ITINERARY_DAYS } from './croatiaItinerary';

// 只保留 9/27 - 10/6 日行程，其餘日期全部排除，並徹底清除所有 AI 推薦餐廳/冰淇淋/教堂/散步點
export const ITINERARY_DAYS: DayItinerary[] = [
  ...ITALY_ITINERARY_DAYS.filter(d => d.date >= '2026/09/27' && d.date <= '2026/10/05'),
  ...CROATIA_ITINERARY_DAYS.filter(d => d.date === '2026/10/06')
];
