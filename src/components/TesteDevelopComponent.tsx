import React from 'react';

interface TesteDevelopComponentProps {
  title?: string;
  description?: string;
}

const TesteDevelopComponent: React.FC<TesteDevelopComponentProps> = ({ 
  title = "🚀 Teste Develop Branch", 
  description = "Componente criado a partir da branch develop" 
}) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-400 via-pink-500 to-red-500 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full transform hover:scale-105 transition-transform duration-200">
        <div className="text-center">
          <div className="mb-4">
            <span className="text-4xl">🎯</span>
          </div>
          <h1 className="text-2xl font-bold text-gray-800 mb-2">
            {title}
          </h1>
          <p className="text-gray-600 mb-6">
            {description}
          </p>
          <div className="space-y-3">
            <button className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-200 shadow-lg">
              Ação Principal
            </button>
            <button className="w-full border-2 border-gray-300 text-gray-700 font-semibold py-3 px-6 rounded-lg hover:bg-gray-50 transition-all duration-200">
              Ação Secundária
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TesteDevelopComponent;