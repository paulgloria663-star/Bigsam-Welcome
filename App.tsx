
import React, { useState } from 'react';
import Header from './components/Header';
import TaleGenerator from './components/TaleGenerator';
import ErrorModal from './components/ErrorModal';
import { WHATSAPP_LINK } from './constants';

const App: React.FC = () => {
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleError = (msg: string) => {
    setErrorMessage(msg);
  };

  return (
    <div className="flex items-center justify-center p-4 py-12">
      <div className="max-w-md w-full bg-white rounded-[2.5rem] overflow-hidden shadow-[0_30px_60px_-12px_rgba(0,0,0,0.25),0_18px_36px_-18px_rgba(0,0,0,0.3)] relative">
        <Header />
        
        <div className="p-8 md:p-10 text-center">
          <h1 className="serif-font text-4xl text-gray-900 leading-tight mb-6">
            Official <span className="text-red-600">Invitation</span>
          </h1>

          <div className="space-y-5 text-gray-700 leading-relaxed mb-8">
            <p className="text-lg">Well, well, well... look who's back in the kitchen!</p>
            <p className="text-md font-medium text-gray-900">
              BigSam's Tasty Tales is busy whisking up new stories and foodie adventures just for you.
            </p>
          </div>

          <TaleGenerator onError={handleError} />

          {/* WhatsApp Action */}
          <div className="space-y-4">
            <a 
              href={WHATSAPP_LINK} 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-full py-5 px-6 bg-[#ed1c24] hover:bg-red-700 text-white font-black rounded-2xl transition-all shadow-xl shadow-red-100 active:scale-95 text-lg uppercase tracking-wider"
            >
              Chat with BigSam
            </a>
            <p className="text-sm font-bold text-gray-400">07013960803</p>
          </div>
        </div>

        <div className="bg-gray-50 p-6 flex justify-between items-center px-10 border-t border-gray-100">
          <div className="flex space-x-2">
            <span className="w-3 h-3 bg-[#ed1c24] rounded-full"></span>
            <span className="w-3 h-3 bg-yellow-400 rounded-full"></span>
          </div>
          <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Est. 2026</span>
        </div>
      </div>

      <ErrorModal message={errorMessage} onClose={() => setErrorMessage(null)} />
    </div>
  );
};

export default App;
