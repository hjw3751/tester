import type { Game, Metric, DataPoint } from './types';

export const GAME_METRICS: Metric[] = [
  { key: 'dau', name: '일일 활성 사용자', unit: '명' },
  { key: 'mau', name: '월간 활성 사용자', unit: '명' },
  { key: 'sessionTime', name: '평균 세션 시간', unit: '분' },
  { key: 'revenue', name: '월 매출', unit: '억원' },
];

// 12개월 전부터 현재까지의 날짜 문자열('YYYY-MM') 배열을 생성하는 헬퍼 함수
const getLast12Months = (): string[] => {
  const months: string[] = [];
  const today = new Date();
  for (let i = 11; i >= 0; i--) {
    const date = new Date(today.getFullYear(), today.getMonth() - i, 1);
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    months.push(`${year}-${month}`);
  }
  return months;
};

// 주어진 값 배열과 날짜 배열을 이용해 DataPoint 배열을 생성하는 헬퍼 함수
const createChartData = (values: number[]): DataPoint[] => {
  const dates = getLast12Months();
  if (values.length !== dates.length) {
    console.error("Data values and date range do not match.");
    return [];
  }
  return dates.map((date, index) => ({
    date,
    value: values[index],
  }));
};


export const GAMES_DATA: Game[] = [
  {
    id: 'maplestory',
    name: '메이플스토리',
    genre: 'MMORPG',
    data: {
      // 여름/겨울방학 시즌에 급증하는 패턴 반영
      dau: createChartData([280000, 310000, 550000, 520000, 300000, 290000, 320000, 610000, 580000, 410000, 350000, 320000]),
      mau: createChartData([2500000, 2700000, 4000000, 3800000, 2900000, 2800000, 3000000, 4500000, 4200000, 3500000, 3100000, 2900000]),
      sessionTime: createChartData([150, 160, 220, 210, 160, 155, 165, 240, 230, 180, 170, 160]),
      revenue: createChartData([450, 480, 700, 680, 500, 480, 510, 800, 750, 600, 550, 520]),
    },
  },
  {
    id: 'lost-ark',
    name: '로스트아크',
    genre: 'MMORPG',
    data: {
      // 대규모 업데이트 시점에 상승, 이후 안정화되는 패턴
      dau: createChartData([220000, 210000, 200000, 280000, 260000, 230000, 220000, 320000, 300000, 250000, 240000, 230000]),
      mau: createChartData([1800000, 1700000, 1600000, 2100000, 2000000, 1800000, 1750000, 2300000, 2200000, 1900000, 1850000, 1800000]),
      sessionTime: createChartData([180, 175, 170, 210, 200, 180, 185, 230, 220, 190, 185, 180]),
      revenue: createChartData([300, 280, 270, 400, 380, 320, 310, 450, 420, 350, 330, 320]),
    },
  },
  {
    id: 'pubg',
    name: '배틀그라운드',
    genre: '배틀로얄',
    data: {
      // F2P 이후 꾸준히 높은 사용자 수 유지, 이벤트/시즌에 따라 소폭 변동
      dau: createChartData([400000, 420000, 410000, 450000, 430000, 400000, 390000, 480000, 460000, 410000, 420000, 410000]),
      mau: createChartData([3500000, 3700000, 3600000, 3900000, 3800000, 3600000, 3500000, 4100000, 4000000, 3700000, 3800000, 3600000]),
      sessionTime: createChartData([80, 85, 82, 90, 88, 80, 78, 95, 92, 85, 86, 83]),
      revenue: createChartData([350, 370, 360, 410, 390, 350, 340, 450, 430, 380, 390, 370]),
    },
  },
  {
    id: 'blue-archive',
    name: '블루 아카이브',
    genre: '수집형 RPG',
    data: {
      // 신규 캐릭터/스토리 업데이트 시 매출 및 사용자 급증 패턴
      dau: createChartData([50000, 48000, 80000, 75000, 55000, 52000, 90000, 85000, 60000, 58000, 120000, 100000]),
      mau: createChartData([400000, 380000, 550000, 520000, 420000, 410000, 600000, 580000, 450000, 440000, 700000, 650000]),
      sessionTime: createChartData([60, 58, 70, 68, 62, 60, 75, 72, 65, 63, 85, 80]),
      revenue: createChartData([80, 75, 150, 130, 90, 85, 180, 160, 100, 95, 250, 220]),
    },
  },
];
