import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="bg-gray-800/30 backdrop-blur-sm border-b border-gray-700/50 sticky top-0 z-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <h1 className="text-2xl font-bold text-white tracking-tight">
          🎮 게임 데이터 비주얼라이저
        </h1>
        <p className="text-sm text-gray-400 mt-1">
          국내 게임 데이터 동향 분석 대시보드
        </p>
      </div>
    </header>
  );
};
