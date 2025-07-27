import React from 'react';

interface TesteComponentProps {
  titulo?: string;
  descricao?: string;
}

const TesteComponent: React.FC<TesteComponentProps> = ({ 
  titulo = "🚀 Pong Agent", 
  descricao = "Componente criado automaticamente" 
}) => {
  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
      <div className="md:flex">
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
            {titulo}
          </div>
          <p className="mt-2 text-gray-500">
            {descricao}
          </p>
          <div className="mt-4">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Ação
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TesteComponent;