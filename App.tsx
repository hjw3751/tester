import React, { useState, useMemo } from 'react';
import { Header } from './components/Header';
import { GameSelector } from './components/GameSelector';
import { MetricSelector } from './components/MetricSelector';
import { DataChart } from './components/DataChart';
import { GAMES_DATA, GAME_METRICS } from './constants';
import type { Game, Metric } from './types';

const App: React.FC = () => {
  const [selectedGame, setSelectedGame] = useState<Game>(GAMES_DATA[0]);
  const [selectedMetric, setSelectedMetric] = useState<Metric>(GAME_METRICS[0]);

  const chartData = useMemo(() => {
    return selectedGame.data[selectedMetric.key] || [];
  }, [selectedGame, selectedMetric]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-slate-800 text-white flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto p-4 md:p-8 flex flex-col lg:flex-row gap-8">
        <aside className="lg:w-1/4 xl:w-1/5 flex-shrink-0 space-y-8">
          <GameSelector
            games={GAMES_DATA}
            selectedGame={selectedGame}
            onSelectGame={setSelectedGame}
          />
          <MetricSelector
            metrics={GAME_METRICS}
            selectedMetric={selectedMetric}
            onSelectMetric={setSelectedMetric}
          />
        </aside>
        <section className="flex-grow lg:w-3/4 xl:w-4/5">
          <DataChart 
            data={chartData} 
            gameName={selectedGame.name}
            metricName={selectedMetric.name}
            metricUnit={selectedMetric.unit}
          />
        </section>
      </main>
    </div>
  );
};

export default App;
