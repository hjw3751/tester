import React from 'react';
import type { Game } from '../types';

interface GameSelectorProps {
  games: Game[];
  selectedGame: Game;
  onSelectGame: (game: Game) => void;
}

export const GameSelector: React.FC<GameSelectorProps> = ({ games, selectedGame, onSelectGame }) => {
  return (
    <div className="bg-gray-800/50 rounded-xl p-5 shadow-lg">
      <h2 className="text-lg font-semibold text-gray-200 mb-4 border-b border-gray-700 pb-3">게임 선택</h2>
      <div className="space-y-2">
        {games.map((game) => (
          <button
            key={game.id}
            onClick={() => onSelectGame(game)}
            className={`w-full text-left px-4 py-2.5 rounded-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-blue-500 ${
              selectedGame.id === game.id
                ? 'bg-blue-600 text-white font-semibold shadow-md'
                : 'bg-gray-700/50 hover:bg-gray-600/70 text-gray-300'
            }`}
          >
            <div className="flex justify-between items-center">
              <span>{game.name}</span>
              <span className="text-xs opacity-70">{game.genre}</span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};
