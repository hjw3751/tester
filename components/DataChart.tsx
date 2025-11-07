import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import type { DataPoint } from '../types';

interface DataChartProps {
  data: DataPoint[];
  gameName: string;
  metricName: string;
  metricUnit: string;
}

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-gray-900/80 backdrop-blur-sm p-3 border border-gray-700 rounded-lg shadow-xl">
        <p className="label text-gray-300">{`${label}월`}</p>
        <p className="intro text-blue-400 font-semibold">{`${payload[0].name} : ${payload[0].value.toLocaleString()}${payload[0].unit}`}</p>
      </div>
    );
  }
  return null;
};

export const DataChart: React.FC<DataChartProps> = ({ data, gameName, metricName, metricUnit }) => {
  return (
    <div className="bg-gray-800/50 rounded-xl p-4 md:p-6 shadow-lg h-[60vh] lg:h-full flex flex-col">
      <div className="mb-4">
        <h3 className="text-xl md:text-2xl font-bold text-white">
          {gameName} - {metricName}
        </h3>
        <p className="text-gray-400">월별 추이 데이터</p>
      </div>
      {data.length > 0 ? (
        <div className="flex-grow">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={data}
              margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
            >
              <defs>
                <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#4a5568" />
              <XAxis 
                dataKey="date" 
                tick={{ fill: '#a0aec0' }} 
                stroke="#4a5568"
                tickFormatter={(tick) => tick.substring(5) + '월'}
              />
              <YAxis 
                tick={{ fill: '#a0aec0' }} 
                stroke="#4a5568"
                tickFormatter={(value) => typeof value === 'number' ? value.toLocaleString() : value}
                domain={['auto', 'auto']}
              />
              <Tooltip content={<CustomTooltip />} />
              <Legend wrapperStyle={{ color: '#E2E8F0' }} />
              <Line 
                type="monotone" 
                dataKey="value" 
                name={metricName}
                stroke="#3b82f6" 
                strokeWidth={3}
                dot={{ r: 4, fill: '#3b82f6', stroke: '#1a202c', strokeWidth: 2 }}
                activeDot={{ r: 8, fill: '#3b82f6', stroke: '#fff' }}
                unit={metricUnit}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      ) : (
         <div className="flex-grow flex items-center justify-center">
            <p className="text-gray-500">이 게임에 대한 데이터를 표시할 수 없습니다.</p>
        </div>
      )}
    </div>
  );
};
