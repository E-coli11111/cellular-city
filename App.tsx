
import React, { useState, useEffect, useCallback } from 'react';
import { SlideLayout } from './components/SlideLayout';
import { CharacterProfile } from './components/CharacterProfile';
import { SLIDES, CHARACTERS } from './constants';
import { SlideType } from './types';
import { 
  Briefcase, 
  Palette, 
  Sprout, 
  Activity, 
  Smartphone, 
  Video, 
  Hash, 
  MapPin, 
  CheckCircle,
  Layers,
  Zap,
  MessageSquare,
  Quote
} from 'lucide-react';

// 导入所有图片
import jinGaoyuan1 from './pictures/金高源1.png';
import jinGaoyuan2 from './pictures/金高源2.png';
import muFangyu1 from './pictures/穆方钰1.png';
import muFangyu2 from './pictures/穆方钰2.png';
import shuiJingjing1 from './pictures/水晶晶1.png';
import shuiJingjing2 from './pictures/水晶晶2.png';
import shangQing1 from './pictures/尚清1.png';
import shangQing2 from './pictures/尚清2.png';
import wuShu1 from './pictures/吴叔1.png';
import wuShu2 from './pictures/吴叔2.png';

// 根据角色名称匹配图片的函数
const getCharacterImages = (characterName: string): string[] => {
  const imageMap: Record<string, string[]> = {
    '金高源': [jinGaoyuan1, jinGaoyuan2],
    '穆方钰': [muFangyu1, muFangyu2],
    '水晶晶': [shuiJingjing1, shuiJingjing2],
    '尚清': [shangQing1, shangQing2],
    '关叔': [wuShu1, wuShu2], // 关叔对应吴叔的图片
    '吴叔': [wuShu1, wuShu2],
  };
  
  return imageMap[characterName] || [];
};

// Helper to render icons based on string name
const IconMap: Record<string, React.ReactNode> = {
  Briefcase: <Briefcase size={28} />,
  Palette: <Palette size={28} />,
  Sprout: <Sprout size={28} />,
  Activity: <Activity size={28} />,
  Smartphone: <Smartphone size={28} />,
  Video: <Video size={28} />,
  Hash: <Hash size={28} />,
  MapPin: <MapPin size={28} />,
};

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  // State to store auto-matched images from pictures folder (keyed by character ID)
  const [autoImages, setAutoImages] = useState<Record<string, string[]>>({});

  // 初始化时自动匹配图片
  useEffect(() => {
    const matchedImages: Record<string, string[]> = {};
    CHARACTERS.forEach(character => {
      const images = getCharacterImages(character.name);
      if (images.length > 0) {
        matchedImages[character.id] = images;
      }
    });
    setAutoImages(matchedImages);
  }, []);

  const nextSlide = useCallback(() => {
    if (currentSlide < SLIDES.length - 1) {
      setCurrentSlide(prev => prev + 1);
    }
  }, [currentSlide]);

  const prevSlide = useCallback(() => {
    if (currentSlide > 0) {
      setCurrentSlide(prev => prev - 1);
    }
  }, [currentSlide]);

  const goToSlide = (index: number) => {
    if (index >= 0 && index < SLIDES.length) {
      setCurrentSlide(index);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown' || e.key === 'Space') {
        nextSlide();
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        prevSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  const renderSlideContent = () => {
    const slide = SLIDES[currentSlide];

    switch (slide.type) {
      case SlideType.COVER:
        return (
          <div className="flex flex-col items-center justify-center h-full w-full relative ">
            {/* Decorative Background Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 border-r-4 border-t-4 border-manhwa-ink opacity-20"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 border-l-4 border-b-4 border-manhwa-ink opacity-20"></div>
            
            <div
              className="relative z-10 bg-white border-4 border-manhwa-ink shadow-comic-lg p-20 md:p-20 text-center transform rotate-1
                         max-w-[calc(100%-2rem)] max-h-[calc(100%-2rem)]"
            >
              <div className="absolute -top-8 -left-8 bg-manhwa-accent-red text-white px-6 py-2 font-bold text-xl border-2 border-manhwa-ink shadow-comic transform -rotate-3">
                PITCH DECK
              </div>

              <div className="mb-8 flex justify-center">
                 <div className="p-6 border-4 border-manhwa-ink rounded-full bg-manhwa-paper relative overflow-hidden">
                    <Layers size={64} className="text-manhwa-ink relative z-10" />
                    <div className="absolute inset-0 bg-halftone opacity-50"></div>
                 </div>
              </div>

              <h1 className="text-6xl md:text-9xl font-black font-serif tracking-tighter text-manhwa-ink mb-4 leading-[0.9]">
                {slide.title}
              </h1>
              <div className="h-2 bg-manhwa-ink w-32 mx-auto mb-6"></div>
              <p className="text-2xl md:text-3xl font-serif italic text-slate-600">
                {slide.subtitle}
              </p>
              
              <div className="mt-16 flex flex-col items-center font-mono text-sm border-t-2 border-manhwa-ink pt-6 w-fit mx-auto px-10">
                <span className="font-bold uppercase tracking-widest mb-1">Presented By</span>
                <span className="text-lg font-black">{slide.data.author}</span>
                <span className="text-slate-500">{slide.data.date}</span>
              </div>
            </div>
          </div>
        );

      case SlideType.TOC:
        return (
          <div className="w-full max-w-5xl mx-auto h-full flex flex-col justify-center">
            <div className="mb-12 flex items-baseline space-x-4 border-b-4 border-manhwa-ink pb-4">
                <h2 className="text-6xl font-black font-serif text-manhwa-ink">CONTENTS</h2>
                <span className="text-xl font-mono text-manhwa-accent-red font-bold">/ 目录</span>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border-2 border-manhwa-ink bg-white shadow-comic">
              {slide.content?.map((item, idx) => (
                <div key={idx} className={`
                  flex items-center p-6 border-b-2 md:border-b-0 border-manhwa-ink cursor-default transition-all hover:bg-manhwa-accent-blue hover:text-white group
                  ${idx % 2 === 0 ? 'md:border-r-2 border-manhwa-ink' : ''}
                  ${idx >= (slide.content?.length || 0) - 2 ? 'border-b-0' : 'md:border-b-2'}
                `}>
                  <span className="text-4xl font-black font-serif mr-6 opacity-30 group-hover:opacity-100 group-hover:text-white transition-all">
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                  <span className="text-lg font-bold uppercase tracking-wide group-hover:translate-x-2 transition-transform">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        );

      case SlideType.TEXT_LIST:
        return (
          <div className="w-full h-full flex flex-col px-4">
            <div className="mb-8 border-l-[12px] border-manhwa-ink pl-6 py-2 bg-white shadow-sm">
              <h2 className="text-5xl font-black font-serif text-manhwa-ink mb-2 uppercase">{slide.title}</h2>
              {slide.subtitle && <p className="text-xl font-serif italic text-slate-500">{slide.subtitle}</p>}
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 flex-1 overflow-y-auto pb-8 mt-4">
              {slide.data.sections.map((section: any, idx: number) => (
                <div key={idx} className="relative bg-white border-2 border-manhwa-ink p-6 ml-4 mt-6 shadow-comic group hover:-translate-y-1 transition-transform duration-300">
                  {/* Panel Number */}
                  <div className="absolute -top-4 -left-4 w-8 h-8 bg-manhwa-ink text-white flex items-center justify-center font-black border-2 border-white shadow-sm transform group-hover:rotate-12 transition-transform">
                    {idx + 1}
                  </div>
                  
                  <h3 className="text-2xl font-black mb-4 border-b-2 border-manhwa-ink pb-2 flex items-center">
                    {section.title}
                  </h3>
                  
                  {section.points && (
                    <ul className="space-y-4">
                      {section.points.map((p: string, i: number) => (
                        <li key={i} className="flex items-start space-x-3">
                          <Zap size={16} className="mt-1.5 text-manhwa-accent-red flex-shrink-0" />
                          <span className="font-medium leading-relaxed text-slate-800">{p}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                  
                  {section.highlight && (
                    <div className="mt-6 p-4 bg-manhwa-ink text-white font-serif italic text-lg relative">
                        <Quote className="absolute -top-3 -left-3 text-manhwa-accent-red bg-white rounded-full p-1 border-2 border-manhwa-ink" size={24}/>
                        "{section.highlight}"
                    </div>
                  )}
                </div>
              ))}
              
               {slide.data.imagePlaceholder === 'map' && (
                <div className="md:col-span-2 mt-2 bg-white border-2 border-manhwa-ink p-2 shadow-comic relative overflow-hidden h-64 group">
                    {/* Map Visualization styling */}
                    <div className="absolute inset-0 bg-[radial-gradient(#1a1a1a_1px,transparent_1px)] [background-size:16px_16px] opacity-20"></div>
                    <div className="w-full h-full border-2 border-manhwa-ink flex flex-col items-center justify-center relative z-10">
                        <div className="flex space-x-8 mb-4">
                             {['Dermis', 'Basal', 'Circulation', 'Memory'].map((layer, i) => (
                                <div key={i} className="flex flex-col items-center">
                                    <div className="w-16 h-16 border-2 border-manhwa-ink bg-white flex items-center justify-center mb-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)] transform group-hover:translate-y-1 transition-all">
                                        <Layers size={24} />
                                    </div>
                                    <span className="font-bold text-xs uppercase bg-manhwa-ink text-white px-2 py-0.5">{layer}</span>
                                </div>
                             ))}
                        </div>
                        <div className="bg-white px-4 py-2 border-2 border-manhwa-ink font-black text-xl uppercase tracking-widest">
                            World Map: Cellular City
                        </div>
                    </div>
                </div>
              )}
            </div>
          </div>
        );

      case SlideType.GRID_CARDS:
        return (
           <div className="w-full h-full flex flex-col px-4">
             <div className="mb-10 border-l-[12px] border-manhwa-ink pl-6 py-2 bg-white shadow-sm">
              <h2 className="text-5xl font-black font-serif text-manhwa-ink mb-2 uppercase">{slide.title}</h2>
              {slide.subtitle && <p className="text-xl font-serif italic text-slate-500">{slide.subtitle}</p>}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 flex-1 pb-8">
              {slide.data.map((card: any, idx: number) => (
                <div key={idx} className="group relative h-full">
                   {/* Background Offset */}
                   <div className="absolute inset-0 bg-manhwa-ink translate-x-2 translate-y-2 group-hover:translate-x-3 group-hover:translate-y-3 transition-transform"></div>
                   
                   {/* Card Content */}
                   <div className="relative h-full bg-white border-2 border-manhwa-ink p-6 flex flex-col justify-between transition-transform group-hover:-translate-y-1 group-hover:-translate-x-1">
                      <div>
                        <div className="flex justify-between items-start mb-4 border-b-2 border-slate-200 pb-4">
                            <div className="text-manhwa-ink bg-manhwa-paper p-2 border-2 border-manhwa-ink rounded-full">
                                {IconMap[card.icon] || <Activity />}
                            </div>
                            <span className="font-black text-4xl text-slate-200 font-serif">0{idx + 1}</span>
                        </div>
                        <h3 className="text-2xl font-black text-manhwa-ink mb-2 uppercase font-sans">{card.title}</h3>
                      </div>
                      <div className="mt-4 bg-slate-50 p-3 border-l-4 border-manhwa-accent-blue">
                          <p className="text-slate-700 font-medium">{card.desc}</p>
                      </div>
                   </div>
                </div>
              ))}
            </div>
          </div>
        );

      case SlideType.CHARACTER:
        // 使用自动匹配的图片
        const autoImageList = autoImages[slide.data.id] || [];
        return (
          <CharacterProfile 
            data={slide.data} 
            availableImages={autoImageList}
          />
        );

      case SlideType.TIMELINE:
        return (
           <div className="w-full h-full flex flex-col px-4">
             <div className="mb-8 border-l-[12px] border-manhwa-ink pl-6 py-2 bg-white shadow-sm">
              <h2 className="text-5xl font-black font-serif text-manhwa-ink mb-2 uppercase">{slide.title}</h2>
              {slide.subtitle && <p className="text-xl font-serif italic text-slate-500">{slide.subtitle}</p>}
            </div>

            <div className="relative flex-1 overflow-y-auto pr-4 pb-10">
              {/* Central Line */}
              <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-manhwa-ink"></div>

              <div className="space-y-12 relative">
                {slide.data.map((item: any, idx: number) => (
                  <div key={idx} className={`flex flex-col md:flex-row gap-8 items-center ${idx % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                    
                    {/* Time Bubble (Center) */}
                    <div className="absolute left-0 md:left-1/2 w-16 h-16 -ml-0 md:-ml-8 bg-manhwa-ink text-white border-4 border-white rounded-full flex items-center justify-center shadow-comic z-10">
                        <span className="font-bold text-xs text-center leading-tight">{item.time.split(' - ')[0]}</span>
                    </div>

                    {/* Content Box */}
                    <div className="ml-12 md:ml-0 w-full md:w-[calc(50%-4rem)]">
                        <div className="bg-white border-2 border-manhwa-ink p-5 shadow-comic hover:scale-105 transition-transform duration-300 relative">
                            {/* Triangle pointer */}
                            <div className={`hidden md:block absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-white border-l-2 border-b-2 border-manhwa-ink transform rotate-45 ${idx % 2 === 0 ? '-right-2.5 border-l-0 border-b-0 border-r-2 border-t-2' : '-left-2.5'}`}></div>
                            
                            <h4 className="text-xl font-black text-manhwa-ink mb-1 uppercase">{item.title}</h4>
                            <p className="text-slate-600 font-serif italic">{item.desc}</p>
                        </div>
                    </div>
                    
                    {/* Spacer for opposite side */}
                    <div className="hidden md:block w-[calc(50%-4rem)]"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      
      case SlideType.SUMMARY:
        return (
          <div className="flex flex-col items-center justify-center h-full text-center max-w-5xl mx-auto relative">
             {/* Background Splash */}
             <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-slate-200 via-white to-white opacity-50 -z-10"></div>

            <div className="mb-12 relative inline-block">
                <div className="absolute inset-0 bg-manhwa-accent-red transform rotate-2 border-2 border-manhwa-ink"></div>
                <h2 className="relative z-10 bg-white px-8 py-4 text-6xl font-black font-serif border-2 border-manhwa-ink text-manhwa-ink">
                SUMMARY
                </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full px-4">
               {slide.data.points.map((point: string, idx: number) => (
                 <div key={idx} className="p-8 bg-white border-2 border-manhwa-ink shadow-comic flex items-start text-left group hover:bg-manhwa-ink hover:text-white transition-colors duration-300">
                    <div className="bg-manhwa-paper border-2 border-manhwa-ink p-2 mr-4 group-hover:bg-manhwa-accent-red group-hover:border-white transition-colors">
                        <CheckCircle className="text-manhwa-ink group-hover:text-white" size={24} />
                    </div>
                    <span className="text-xl font-bold leading-relaxed font-serif">{point}</span>
                 </div>
               ))}
            </div>

            <div className="mt-16 flex items-center justify-center space-x-2 bg-manhwa-paper px-6 py-2 rounded-full border border-manhwa-ink opacity-60">
              <div className="w-2 h-2 bg-manhwa-ink rounded-full animate-pulse"></div>
              <span className="text-sm font-mono font-bold">TRANSMISSION END</span>
            </div>
          </div>
        )

      default:
        return <div>Unknown Slide Type</div>;
    }
  };

  return (
    <SlideLayout
      currentSlideIndex={currentSlide}
      totalSlides={SLIDES.length}
      onNext={nextSlide}
      onPrev={prevSlide}
      onGoTo={goToSlide}
      slides={SLIDES}
    >
      {renderSlideContent()}
    </SlideLayout>
  );
}

export default App;
