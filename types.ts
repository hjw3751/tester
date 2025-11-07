export interface DataPoint {
  date: string; // ex: '2023-01'
  value: number;
}

export type MetricKey = 'dau' | 'mau' | 'sessionTime' | 'revenue';

export interface Game {
  id: string;
  name: string;
  genre: string;
  data: {
    [key in MetricKey]?: DataPoint[];
  };
}

export interface Metric {
  key: MetricKey;
  name: string;
  unit: string;
}
