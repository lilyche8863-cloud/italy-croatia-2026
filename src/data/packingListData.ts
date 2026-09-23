export interface PackingItem {
  id: string;
  category: 'docs' | 'carryon' | 'electronics' | 'alpine' | 'daily' | 'custom';
  title: string;
  subtitle?: string;
  assignee: '全員' | '春香' | '小許' | '麗安' | '頭家娘' | '小花';
  isMustHave: boolean;
  notes?: string;
  defaultChecked?: boolean;
}

export const PACKING_CATEGORIES = [
  { id: 'all', label: '全部項目', icon: '🎒' },
  { id: 'docs', label: '重要證件與票券', icon: '📄', desc: '護照、國際駕照、租車單、住宿券、景點門票' },
  { id: 'alpine', label: '多洛米蒂山區衣物', icon: '🏔️', desc: '三層洋蔥穿法、防風防雨衝鋒衣、羊毛底層、健行鞋' },
  { id: 'carryon', label: '隨身物品與常備藥', icon: '💊', desc: '保溫瓶、太陽眼鏡、暈車暈船藥、高山適應、保濕' },
  { id: 'electronics', label: '3C 電子與充電設備', icon: '🔌', desc: '義大利歐洲轉接頭、大功率快充、車充支架、eSIM' },
  { id: 'daily', label: '平地生活與泳具', icon: '👕', desc: '休閒便服、免洗內衣褲、泳衣泳帽(水療桑拿)' },
  { id: 'custom', label: '私人自訂清單', icon: '✍️', desc: '個人特別補充之專屬私物' }
] as const;

export const INITIAL_PACKING_ITEMS: PackingItem[] = [
  // ==========================================
  // ① 重要證件與票券 (DOCS)
  // ==========================================
  {
    id: 'doc-passport',
    category: 'docs',
    title: '護照正本 ＋ 影本 2 份分開存放',
    subtitle: '效期需在 2026/10/24 返國日起算 6 個月以上',
    assignee: '全員',
    isMustHave: true,
    notes: '出國前請再次檢查護照效期，並在手機備份護照照片與 PDF。'
  },
  {
    id: 'doc-driver-license',
    category: 'docs',
    title: '國際駕照 (IDP) ＋ 台灣駕照正本 (小許、春香必備)',
    subtitle: '租車取車時兩證缺一不可，務必隨身攜帶',
    assignee: '小許',
    isMustHave: true,
    notes: '小許（UNI-RENT 8人座承租人）、春香（Hertz 義大利承租人）必須備妥正本。'
  },
  {
    id: 'doc-schengen-insurance',
    category: 'docs',
    title: '申根醫療保險英文證明 (紙本＋電子檔)',
    subtitle: '涵蓋至少 3 萬歐元醫療險與緊急救援後送',
    assignee: '全員',
    isMustHave: true,
    notes: '入境歐盟申根區海關抽查必備，請彩印英文保單並存放於隨身包。'
  },
  {
    id: 'doc-credit-cards',
    category: 'docs',
    title: '海外高回饋信用卡 2~3 張 (Visa / Master)',
    subtitle: '預先開通海外刷卡、預先取得 4 位數預借現金 PIN 碼',
    assignee: '全員',
    isMustHave: true,
    notes: '歐洲部分無人加油站、自助購票機需輸入 4 位數 PIN 碼。'
  },
  {
    id: 'doc-eur-cash',
    category: 'docs',
    title: '歐元現鈔小額備用 (€5, €10, €20, 硬幣)',
    subtitle: '投幣式公廁、路邊市集、部分停車場 (如布萊埃斯湖 P3)',
    assignee: '全員',
    isMustHave: true,
    notes: '布萊埃斯湖 P3 停車場現場收現金 €10/天，需備足零錢。'
  },
  {
    id: 'doc-flight-tickets',
    category: 'docs',
    title: '四段國際航班電子機票 E-Ticket 備份',
    subtitle: '長榮 BR95、卡達/國泰、瑞安 FR5935、阿提哈德 EY082/898',
    assignee: '全員',
    isMustHave: true,
    notes: '存於手機 Wallet / Apple Books，並備份紙本行程單。'
  },
  {
    id: 'doc-flixbus',
    category: 'docs',
    title: '10/06 FlixBus N544 車票 QR Code (訂位: 338 494 7118)',
    subtitle: 'Trieste 12:20 ➜ Zagreb 15:50 (座位 4B, 4C, 4D)',
    assignee: '春香',
    isMustHave: true,
    notes: '上車需出示電子車票與護照，預計 12:05 前抵達第 2 月台。'
  },
  {
    id: 'doc-santner-permit',
    category: 'docs',
    title: 'Hotel Santner 開車上山通行證 (Driving Permit) 備份',
    subtitle: '休斯高原自然保護區管制，憑飯店許可信通行',
    assignee: '小許',
    isMustHave: true,
    notes: '出發前或取車後立即 Email 車牌與車型向飯店索取，列印隨車備查。'
  },
  {
    id: 'doc-tre-cime-pass',
    category: 'docs',
    title: '10/05 三尖峰 Rifugio Auronzo 線上預約繳費證明 QR',
    subtitle: '收費公路門票 €40 已含停車，無預約車輛禁止上山',
    assignee: '春香',
    isMustHave: true,
    notes: '春香駕駛義大利租車前往三尖峰，抵達收費站閘門直接出示 QR Code 通行。'
  },
  {
    id: 'doc-plitvice-tickets',
    category: 'docs',
    title: '10/12 十六湖國家公園 Entrance 2 09:00-10:00 門票 (5人已購)',
    subtitle: '包含接駁車 St1-St3 與觀光船 P1-P3',
    assignee: '全員',
    isMustHave: true,
    notes: '注意 St 為接駁車站，P 為船碼頭，門票需妥善存於手機離線使用。'
  },
  {
    id: 'doc-postojna-voucher',
    category: 'docs',
    title: '10/08 Postojna 鐘乳石洞 14:00 預約確認憑證 (€44方案含小火車)',
    subtitle: '斯洛維尼亞國寶級地底溶洞',
    assignee: '小許',
    isMustHave: true,
    notes: '需提前 30 分鐘抵達遊客中心兌換正式門票與語音導覽。'
  },
  {
    id: 'doc-livade-truffle',
    category: 'docs',
    title: '10/10 Livade 13:30 松露獵犬尋松露預約確認單',
    subtitle: '克羅埃西亞伊斯特利亞森林深度體驗',
    assignee: '全員',
    isMustHave: true,
    notes: '穿著輕便耐髒健行鞋，提早 15 分鐘抵達集合點。'
  },
  {
    id: 'doc-dubrovnik-pass',
    category: 'docs',
    title: 'Dubrovnik 3-Day Pass 電子憑證 (3人已購)',
    subtitle: '城牆登頂與市區公車，初搭公車由司機掃碼換紙本 QR 票',
    assignee: '小花',
    isMustHave: true,
    notes: '特別提醒：不是到 Pile Gate 窗口換票，上車由司機出紙票後妥善保留。'
  },
  {
    id: 'doc-hotel-confirmations',
    category: 'docs',
    title: '12 處住宿訂房確認單紙本 / PDF 離線檔',
    subtitle: '各住宿電話、精確官方地址、Check-in 時間一覽',
    assignee: '全員',
    isMustHave: true,
    notes: '山區或跨境邊境可能無網路，離線存檔最安心。'
  },

  // ==========================================
  // ② 多洛米蒂山區氣候與保暖衣物 (ALPINE)
  // ==========================================
  {
    id: 'alp-merino-base',
    category: 'alpine',
    title: '美麗諾羊毛 / 吸濕排汗保暖發熱衣 2~3 件',
    subtitle: '底層 (Base Layer)：排汗速乾不發臭，維持肌膚乾爽',
    assignee: '全員',
    isMustHave: true,
    notes: '多洛米蒂秋季早晚溫差極大 (0°C~12°C)，高山健行流汗後不會著涼。'
  },
  {
    id: 'alp-fleece-mid',
    category: 'alpine',
    title: '保暖刷毛抓絨衣 (Fleece) 或超輕量便攜羽絨外套',
    subtitle: '中層 (Mid Layer)：鎖住體溫的高效蓄熱層',
    assignee: '全員',
    isMustHave: true,
    notes: '登上 Seceda 刀鋒山與三尖峰時，山頂風大需立即套上中層保暖。'
  },
  {
    id: 'alp-goretex-shell',
    category: 'alpine',
    title: '防風防水透氣衝鋒外套 (Gore-Tex 或同級三合一)',
    subtitle: '外層 (Outer Layer)：阻絕阿爾卑斯冰冷刺骨強風與突來陣雨',
    assignee: '全員',
    isMustHave: true,
    notes: '連帽設計、腋下透氣拉鍊與壓膠防水口袋最佳。'
  },
  {
    id: 'alp-hiking-pants',
    category: 'alpine',
    title: '防潑水耐磨四向彈性健行長褲 2 件',
    subtitle: '抗風、透氣、延展性好，適應高山碎石階梯',
    assignee: '全員',
    isMustHave: true,
    notes: '休斯高原輕鬆健走與 Seceda、三尖峰 101 步道皆適用。'
  },
  {
    id: 'alp-thermal-tights',
    category: 'alpine',
    title: '保暖內搭發熱褲 (Thermal Leggings) 1~2 件',
    subtitle: '早晚低溫或清晨登山口可套在健行褲內層',
    assignee: '全員',
    isMustHave: false,
    notes: '視當日氣溫調整，低於 5°C 時非常實用。'
  },
  {
    id: 'alp-hiking-boots',
    category: 'alpine',
    title: '中高筒防滑防水登山健行鞋 (必備防滑大底)',
    subtitle: '保護腳踝，抓地力強，應對三尖峰與刀鋒山碎石坡',
    assignee: '全員',
    isMustHave: true,
    notes: '出發前務必先穿軟，切勿穿全新未磨合之新鞋出國以免起水泡。'
  },
  {
    id: 'alp-wool-socks',
    category: 'alpine',
    title: '美麗諾羊毛健行厚襪 3~4 雙',
    subtitle: '足底加厚避震、減緩長途健走足部疲勞、吸震排汗',
    assignee: '全員',
    isMustHave: true,
    notes: '搭配登山鞋穿著，避免摩擦起水泡。'
  },
  {
    id: 'alp-beanie',
    category: 'alpine',
    title: '防風保暖毛帽 (Beanie)',
    subtitle: '高海拔山口保護頭部、預防冷風吹襲引發高山偏頭痛',
    assignee: '全員',
    isMustHave: true,
    notes: '人體 40% 熱量由頭部散失，高山必備。'
  },
  {
    id: 'alp-buff-gloves',
    category: 'alpine',
    title: '魔術頭巾／防風保暖手套 (支援觸控手機)',
    subtitle: '頸部保暖抗風、低溫戶外拍照不用脫手套受凍',
    assignee: '全員',
    isMustHave: true,
    notes: 'Passo Sella 與三尖峰觀景台早晨必備。'
  },
  {
    id: 'alp-trekking-poles',
    category: 'alpine',
    title: '輕量可折疊登山杖 (需放託運行李，嚴禁手提上機！)',
    subtitle: '三尖峰與十六湖步道下坡減輕膝蓋 30% 負擔',
    assignee: '全員',
    isMustHave: false,
    notes: '注意：民航局規定登山杖具金屬杖尖，必須放入託運行李。'
  },

  // ==========================================
  // ③ 隨身物品與常備醫藥 (CARRYON)
  // ==========================================
  {
    id: 'car-backpack',
    category: 'carryon',
    title: '隨身輕量雙肩後背包 / 貼身防搶腰包',
    subtitle: '符合瑞安 40×30×20cm 隨身規範，裝放當日水瓶與風衣',
    assignee: '全員',
    isMustHave: true,
    notes: '市區防扒手，山區裝行動糧與隨身外套。'
  },
  {
    id: 'car-thermos',
    category: 'carryon',
    title: '輕量真空保溫水瓶 (500~700ml)',
    subtitle: '多洛米蒂山屋裝熱水、義大利與克羅埃西亞路邊泉水補給',
    assignee: '全員',
    isMustHave: true,
    notes: '山區氣候冷，一口溫熱水能大幅恢復體力。'
  },
  {
    id: 'car-sunglasses',
    category: 'carryon',
    title: 'UV400 偏光太陽眼鏡 (高山抗強光與亞德里亞海反光)',
    subtitle: '多洛米蒂白岩高山反光強烈，保護眼睛視野更清晰',
    assignee: '全員',
    isMustHave: true,
    notes: '自駕開車迎著秋季陽光亦必備。'
  },
  {
    id: 'car-motion-sickness',
    category: 'carryon',
    title: '暈車藥 ＆ 暈船藥 (多洛米蒂九彎十八拐、加爾達湖與Hvar渡輪)',
    subtitle: '連續盤山公路、黑山峽灣與外海大風浪必備救星',
    assignee: '全員',
    isMustHave: true,
    notes: '乘船或開山路前 30 分鐘服用效果最好。'
  },
  {
    id: 'car-medicine-kit',
    category: 'carryon',
    title: '個人常備綜合藥品包',
    subtitle: '感冒止痛退燒藥、胃腸腸胃藥、抗過敏止癢藥、OK繃創口貼',
    assignee: '全員',
    isMustHave: true,
    notes: '歐洲看診與買藥不便，個人慣用成藥必帶足 28 天份量。'
  },
  {
    id: 'car-sunscreen-lip',
    category: 'carryon',
    title: '高係數防曬乳 SPF50+ ＆ 潤澤護唇膏、護手霜',
    subtitle: '歐洲秋季極度乾燥＋山區高紫外線，避免嘴唇乾裂流血',
    assignee: '全員',
    isMustHave: true,
    notes: '天天塗抹，維持皮膚舒適保濕。'
  },
  {
    id: 'car-flight-pillow',
    category: 'carryon',
    title: '長途夜航三寶：立體記憶棉頸枕、3D遮光眼罩、降噪耳塞',
    subtitle: '長榮 BR95 直飛米蘭 13 小時 50 分夜航睡眠神器',
    assignee: '全員',
    isMustHave: false,
    notes: '抵達米蘭 07:35 立即取車開工，機上睡好第一天精神倍增。'
  },
  {
    id: 'car-tissues-wipes',
    category: 'carryon',
    title: '隨身酒精濕紙巾、抗菌乾洗手、隨身袖珍面紙',
    subtitle: '戶外野餐、吃冰淇淋與公共洗手間消毒清潔',
    assignee: '全員',
    isMustHave: true,
    notes: '歐洲許多收費廁所偶爾無衛生紙，隨身備用。'
  },
  {
    id: 'car-eco-bag',
    category: 'carryon',
    title: '折疊便攜環保購物袋 (輕量耐重)',
    subtitle: '超市採買 (Conad, Esselunga, Interspar, Tommy) 不提供袋子',
    assignee: '全員',
    isMustHave: true,
    notes: '放 1~2 個在隨身包，買水果、零食、麵包超好用。'
  },

  // ==========================================
  // ④ 3C 電子與充電設備 (ELECTRONICS)
  // ==========================================
  {
    id: 'ele-adapter',
    category: 'electronics',
    title: '歐洲規格雙圓孔轉接頭 (Type C/F) ＆ 義大利三細圓孔 (Type L)',
    subtitle: '義大利老飯店或民宿插座為三孔排列，需備妥專用規格',
    assignee: '全員',
    isMustHave: true,
    notes: '每人至少自備 2 個轉接頭以供手機、相機、行動電源同時使用。'
  },
  {
    id: 'ele-fast-charger',
    category: 'electronics',
    title: '多孔 GaN 氮化鎵 PD 快速充電頭 (65W~100W)',
    subtitle: '單顆插頭支援 2~3 組 Type-C + USB-A 同時快充',
    assignee: '全員',
    isMustHave: true,
    notes: '減少插座佔用，夜間回飯店迅速充飽所有設備。'
  },
  {
    id: 'ele-powerbank',
    category: 'electronics',
    title: '行動電源 10,000~20,000mAh (需隨身攜帶，嚴禁託運！)',
    subtitle: '額定能量需小於 100Wh，標示需清晰可見',
    assignee: '全員',
    isMustHave: true,
    notes: '民航法規強制規定行動電源不可託運，違者將在海關被沒收。'
  },
  {
    id: 'ele-charging-cables',
    category: 'electronics',
    title: '手機充電線、手錶充電器 ＆ 備用傳輸線各 1 條',
    subtitle: '出國旅遊充電線易遺失或折損，備用線必備',
    assignee: '全員',
    isMustHave: true,
    notes: '編織耐用線款最佳，避免山區低溫線材脆化。'
  },
  {
    id: 'ele-car-mount',
    category: 'electronics',
    title: '車用出風口手機導航支架 2 組 (小許、春香各 1 組)',
    subtitle: '自駕路線即時 Google Maps 導航必備，行車更安全',
    assignee: '小許',
    isMustHave: true,
    notes: '春香、小許各備一組，在義大利與克羅埃西亞自駕輪流導航。'
  },
  {
    id: 'ele-car-charger',
    category: 'electronics',
    title: '車用點煙器大功率雙孔快充頭 (USB-C + USB-A)',
    subtitle: '自駕途中隨時為駕駛手機與行動電源補充電力',
    assignee: '春香',
    isMustHave: true,
    notes: '兩段自駕租車（Opel Corsa、Mercedes V-Class）必備。'
  },
  {
    id: 'ele-esim-sim',
    category: 'electronics',
    title: '歐洲跨國 5G 高速吃到飽 eSIM / 實體 SIM 卡',
    subtitle: '涵蓋義大利、斯洛維尼亞、克羅埃西亞、蒙特內哥羅 (黑山)',
    assignee: '全員',
    isMustHave: true,
    notes: '注意：蒙特內哥羅非歐盟國，請確認漫遊方案有包含黑山 (Montenegro) 流量。'
  },
  {
    id: 'ele-luggage-scale',
    category: 'electronics',
    title: '隨身便攜電子行李秤 (免超重罰金利器)',
    subtitle: '掌握長榮 23kg、卡達 25kg、瑞安 20kg、阿提哈德 25kg',
    assignee: '小花',
    isMustHave: true,
    notes: '特別在 10/21 搭瑞安廉航前，先秤好每人 20kg 避免天價超重費。'
  },

  // ==========================================
  // ⑤ 平地生活與泳具日常 (DAILY)
  // ==========================================
  {
    id: 'dai-city-clothes',
    category: 'daily',
    title: '平地透氣便服與短袖／薄長袖襯衫 4~5 套',
    subtitle: '加爾達湖、布萊德湖、斯普利特、杜布羅夫尼克海岸舒適穿著',
    assignee: '全員',
    isMustHave: true,
    notes: '沿海 10 月初秋白天仍有 20°C~23°C，陽光溫和舒爽。'
  },
  {
    id: 'dai-swimwear',
    category: 'daily',
    title: '泳裝／泳褲 ＆ 泳帽',
    subtitle: 'Hotel Santner 高山水療水世界、AC Hotel Split 頂樓無邊際泳池',
    assignee: '全員',
    isMustHave: false,
    notes: '健行後回飯店泡高山恆溫水療與桑拿，極致放鬆消除肌肉酸痛。'
  },
  {
    id: 'dai-slippers',
    category: 'daily',
    title: '輕便防滑室內拖鞋 1 雙',
    subtitle: '歐洲多數飯店與景觀別墅為環保均不提供一次性拋棄式拖鞋',
    assignee: '全員',
    isMustHave: true,
    notes: '回房間換穿舒適放鬆，必備個人衛生用品。'
  },
  {
    id: 'dai-toiletries',
    category: 'daily',
    title: '個人牙刷、牙膏、旅行裝洗沐組、刮鬍刀',
    subtitle: '歐洲落實綠色環保飯店政策，房內通常不提供備品',
    assignee: '全員',
    isMustHave: true,
    notes: '自備慣用潔牙組與刮鬍刀，各公寓 Villa 均有吹風機。'
  },
  {
    id: 'dai-laundry-pods',
    category: 'daily',
    title: '旅行便攜洗衣精球 / 洗衣紙 (Chalet / Villa 洗衣使用)',
    subtitle: 'Vodo Cadore、Villa Benvenuti、Maša、Tirkiz 均有全套洗衣機',
    assignee: '麗安',
    isMustHave: true,
    notes: '旅途中共有 5 間住宿附設洗衣設備，輕裝旅行每週洗烘衣物。'
  }
];

export const AIRLINE_BAGGAGE_RULES = [
  {
    date: '09/27 (日)',
    airline: '長榮航空 EVA AIR',
    flight: 'BR95 (TPE ➜ MXP 直飛)',
    members: '春香、小許、麗安 (3人)',
    checked: '每人 2 件 × 23kg (長寬高總和 ≤ 158cm)',
    carryon: '每人 1 件 × 7kg (56 × 36 × 23cm) ＋ 1 件個人隨身小包',
    badge: '直飛長程',
    color: 'emerald'
  },
  {
    date: '10/05 (一)',
    airline: '國泰航空 ＋ 卡達航空',
    flight: 'CX423 ➜ QR817 ➜ QR215 (高雄 ➜ 香港 ➜ 多哈 ➜ 札格雷布)',
    members: '頭家娘、小花 (2人)',
    checked: '頭家娘：國泰 1×23kg、卡達商務額度 40kg；小花：全程 25kg',
    carryon: '每人手提行李 7kg ＋ 隨身手提小包',
    badge: '雙人轉機',
    color: 'purple'
  },
  {
    date: '10/21 (三)',
    airline: '瑞安航空 RYANAIR',
    flight: 'FR5935 (DBV ➜ BGY 直飛)',
    members: '春香、小許、麗安、頭家娘、小花 (全員5人)',
    checked: '小花 20kg × 2 件；其餘 4 人各 20kg × 1 件 (已預購 Plus 方案)',
    carryon: '每人 1 件隨身小包 (尺寸上限 40 × 30 × 20cm，需塞入前座下方)',
    badge: '廉航嚴格',
    color: 'amber'
  },
  {
    date: '10/23 (五)',
    airline: '阿提哈德航空 Etihad',
    flight: 'EY082 ➜ EY898 (MXP ➜ AUH ➜ TPE)',
    members: '頭家娘 (商務艙)、春香、小許、麗安 (經濟艙) · 4人',
    checked: '頭家娘：商務艙 40kg (每件 ≤ 32kg)；其餘 3 人：經濟艙每人 25kg',
    carryon: '頭家娘：手提 12kg 最多 2 件；經濟艙：每人手提 7kg',
    badge: '阿布達比轉機',
    color: 'blue'
  }
];
