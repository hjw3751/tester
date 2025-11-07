import React from 'react';
import type { Metric } from '../types';

interface MetricSelectorProps {
  metrics: Metric[];
  selectedMetric: Metric;
  onSelectMetric: (metric: Metric) => void;
}

export const MetricSelector: React.FC<MetricSelectorProps> = ({ metrics, selectedMetric, onSelectMetric }) => {
  return (
    <div className="bg-gray-800/50 rounded-xl p-5 shadow-lg">
      <h2 className="text-lg font-semibold text-gray-200 mb-4 border-b border-gray-700 pb-3">데이터 기준</h2>
      <div className="space-y-2">
        {metrics.map((metric) => (
          <button
            key={metric.key}
            onClick={() => onSelectMetric(metric)}
            className={`w-full text-left px-4 py-2.5 rounded-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-blue-500 ${
              selectedMetric.key === metric.key
                ? 'bg-emerald-600 text-white font-semibold shadow-md'
                : 'bg-gray-700/50 hover:bg-gray-600/70 text-gray-300'
            }`}
          >
            {metric.name}
          </button>
        ))}
      </div>
    </div>
  );
};
