
import React from 'react';
import { ChevronLeft, ChevronRight, Menu, X } from 'lucide-react';
import { SlideContent } from '../types';

interface SlideLayoutProps {
  children: React.ReactNode;
  currentSlideIndex: number;
  totalSlides: number;
  onNext: () => void;
  onPrev: () => void;
  onGoTo: (index: number) => void;
  slides: SlideContent[];
}

export const SlideLayout: React.FC<SlideLayoutProps> = ({
  children,
  currentSlideIndex,
  totalSlides,
  onNext,
  onPrev,
  onGoTo,
  slides
}) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const progress = ((currentSlideIndex + 1) / totalSlides) * 100;

  return (
    <div className="relative w-full h-screen bg-manhwa-paper flex flex-col text-manhwa-ink overflow-hidden selection:bg-manhwa-ink selection:text-manhwa-paper">
      
      {/* Background Texture - Halftone */}
      <div className="absolute inset-0 bg-halftone pointer-events-none z-0"></div>
      
      {/* Comic Page Border Frame - Responsive */}
      <div className="absolute inset-2 md:inset-4 border-2 border-manhwa-ink pointer-events-none z-50 hidden md:block"></div>
      
      {/* Corner Accents */}
      <div className="absolute top-4 left-4 w-0 h-0 md:w-4 md:h-4 bg-manhwa-ink z-50 hidden md:block"></div>
      <div className="absolute top-4 right-4 w-0 h-0 md:w-4 md:h-4 bg-manhwa-ink z-50 hidden md:block"></div>
      <div className="absolute bottom-4 left-4 w-0 h-0 md:w-4 md:h-4 bg-manhwa-ink z-50 hidden md:block"></div>
      <div className="absolute bottom-4 right-4 w-0 h-0 md:w-4 md:h-4 bg-manhwa-ink z-50 hidden md:block"></div>

      {/* Header */}
      <header className="relative z-40 px-4 md:px-10 py-4 flex justify-between items-center h-16 md:h-20 shrink-0">
        <div className="flex items-center space-x-3">
          <div className="bg-manhwa-ink text-manhwa-paper px-3 py-1 font-black text-lg md:text-xl tracking-tighter transform -rotate-2 shadow-comic-hover">
            CELLULAR CITY
          </div>
        </div>
        
        <div className="flex items-center space-x-4">
           <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 bg-white border-2 border-manhwa-ink shadow-comic hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all"
          >
            <Menu size={20} />
          </button>
        </div>
      </header>

      {/* Menu Overlay */}
      {isMenuOpen && (
        <div className="absolute inset-0 z-[60] bg-manhwa-paper/95 backdrop-blur-sm flex flex-col p-8 overflow-y-auto">
          <div className="flex justify-between items-center mb-8 border-b-4 border-manhwa-ink pb-4">
            <h2 className="text-3xl md:text-4xl font-black font-serif italic">INDEX / 目录</h2>
            <button 
              onClick={() => setIsMenuOpen(false)}
              className="p-2 bg-manhwa-accent-red text-white border-2 border-manhwa-ink shadow-comic hover:shadow-none transition-all rounded-full"
            >
              <X size={24} />
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl mx-auto w-full pb-10">
            {slides.map((slide, index) => (
              <button
                key={slide.id}
                onClick={() => {
                  onGoTo(index);
                  setIsMenuOpen(false);
                }}
                className={`text-left p-4 border-2 border-manhwa-ink transition-all group relative overflow-hidden ${
                  currentSlideIndex === index 
                  ? 'bg-manhwa-ink text-manhwa-paper shadow-none translate-x-[4px] translate-y-[4px]' 
                  : 'bg-white hover:shadow-comic shadow-sm'
                }`}
              >
                <span className="absolute -right-4 -bottom-4 text-6xl font-black opacity-10 font-serif">{index + 1}</span>
                <span className={`text-xs font-bold uppercase tracking-widest mb-1 block ${currentSlideIndex === index ? 'text-manhwa-accent-red' : 'text-slate-500'}`}>
                  Chapter {index + 1}
                </span>
                <span className="font-serif text-lg font-bold">{slide.title}</span>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Main Content Area */}
      <main className="relative z-10 flex-1 flex flex-col p-4 md:p-8 lg:px-16 overflow-hidden">
        <div className="w-full max-w-7xl mx-auto h-full flex flex-col justify-center animate-fadeIn relative">
          {children}
        </div>
      </main>

      {/* Footer Controls */}
      <footer className="relative z-40 px-4 md:px-10 py-4 flex justify-between items-center h-16 md:h-20 shrink-0">
        <div className="text-sm font-bold font-mono bg-manhwa-ink text-manhwa-paper px-2 py-1 shadow-[2px_2px_0px_0px_rgba(0,0,0,0.2)]">
          PAGE {String(currentSlideIndex + 1).padStart(2, '0')}
        </div>

        <div className="flex items-center space-x-4">
          <button 
            onClick={onPrev}
            disabled={currentSlideIndex === 0}
            className="p-2 md:p-3 bg-white border-2 border-manhwa-ink shadow-comic hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none disabled:opacity-50 disabled:shadow-none disabled:cursor-not-allowed transition-all"
          >
            <ChevronLeft size={20} />
          </button>
          <button 
            onClick={onNext}
            disabled={currentSlideIndex === totalSlides - 1}
            className="p-2 md:p-3 bg-manhwa-ink text-white border-2 border-manhwa-ink shadow-comic hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none disabled:opacity-50 disabled:shadow-none disabled:cursor-not-allowed transition-all"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </footer>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 h-2 border-t-2 border-manhwa-ink w-full bg-white z-30">
          <div className="h-full bg-manhwa-ink transition-all duration-300 ease-out" style={{ width: `${progress}%` }}></div>
      </div>
    </div>
  );
};
