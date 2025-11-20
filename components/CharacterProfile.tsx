
import React from 'react';
import { CharacterData } from '../types';
import { Quote, Target, ShoppingBag, MapPin, Fingerprint, Zap } from 'lucide-react';

interface CharacterProfileProps {
  data: CharacterData;
  availableImages?: string[]; // 自动匹配的图片列表
}

export const CharacterProfile: React.FC<CharacterProfileProps> = ({ data, availableImages = [] }) => {
  // 获取前两张图片
  const image1 = availableImages[0];
  const image2 = availableImages[1];
  
  // 为每张图片生成随机的旋转角度（轻微）
  const rotation1 = Math.random() * 4 - 2; // -2 到 2 度
  const rotation2 = Math.random() * 4 - 2;

  return (
    <div className="flex flex-col lg:flex-row gap-4 h-full items-stretch justify-center p-2 overflow-y-auto md:overflow-hidden">
      
      {/* Left Column: Images (60%) */}
      <div className="lg:w-3/5 w-full flex flex-col gap-4">
        
        {/* Two Images Side by Side */}
        <div className="flex-1 flex gap-6 min-h-[500px]">
          {/* First Image with Pins */}
          <div className="flex-1 relative bg-transparent overflow-visible flex items-center justify-center">
            {image1 ? (
              <div 
                className="relative"
                style={{ 
                  '--rotation': `${rotation1}deg`,
                  animation: 'sway 3s ease-in-out infinite'
                } as React.CSSProperties}
              >
                {/* Photo Frame Effect */}
                <div className="relative bg-white p-3 shadow-[12px_12px_0px_0px_rgba(0,0,0,0.15),0_0_20px_rgba(0,0,0,0.1)] border-[3px] border-manhwa-ink">
                  <img 
                    src={image1} 
                    alt={`${data.name} 1`} 
                    className="max-w-full max-h-[600px] w-auto h-auto object-contain block"
                  />
                  
                  {/* Pins - 四个角，更立体的效果 */}
                  <div className="absolute -top-2 -left-2 w-4 h-4 bg-gray-800 rounded-full shadow-[3px_3px_0px_0px_rgba(0,0,0,0.4)] z-10 border border-gray-900">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-yellow-400 rounded-full shadow-inner"></div>
                    <div className="absolute top-0 left-0 w-full h-full rounded-full bg-gradient-to-br from-gray-300 to-transparent opacity-30"></div>
                  </div>
                  <div className="absolute -top-2 -right-2 w-4 h-4 bg-gray-800 rounded-full shadow-[3px_3px_0px_0px_rgba(0,0,0,0.4)] z-10 border border-gray-900">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-yellow-400 rounded-full shadow-inner"></div>
                    <div className="absolute top-0 left-0 w-full h-full rounded-full bg-gradient-to-br from-gray-300 to-transparent opacity-30"></div>
                  </div>
                  <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-gray-800 rounded-full shadow-[3px_3px_0px_0px_rgba(0,0,0,0.4)] z-10 border border-gray-900">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-yellow-400 rounded-full shadow-inner"></div>
                    <div className="absolute top-0 left-0 w-full h-full rounded-full bg-gradient-to-br from-gray-300 to-transparent opacity-30"></div>
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-4 h-4 bg-gray-800 rounded-full shadow-[3px_3px_0px_0px_rgba(0,0,0,0.4)] z-10 border border-gray-900">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-yellow-400 rounded-full shadow-inner"></div>
                    <div className="absolute top-0 left-0 w-full h-full rounded-full bg-gradient-to-br from-gray-300 to-transparent opacity-30"></div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="h-full flex items-center justify-center bg-gray-100 border-2 border-manhwa-ink p-4">
                <span className="text-6xl font-black font-serif text-gray-400">{data.name[0]}</span>
              </div>
            )}
           </div>

          {/* Second Image with Pins */}
          {image2 && (
            <div className="flex-1 relative bg-transparent overflow-visible flex items-center justify-center">
              <div 
                className="relative"
                style={{ 
                  '--rotation': `${rotation2}deg`,
                  animation: 'sway 3.5s ease-in-out infinite',
                  animationDelay: '0.5s'
                } as React.CSSProperties}
              >
                {/* Photo Frame Effect */}
                <div className="relative bg-white p-3 shadow-[12px_12px_0px_0px_rgba(0,0,0,0.15),0_0_20px_rgba(0,0,0,0.1)] border-[3px] border-manhwa-ink">
                  <img 
                    src={image2} 
                    alt={`${data.name} 2`} 
                    className="max-w-full max-h-[600px] w-auto h-auto object-contain block"
                  />
                  
                  {/* Pins - 四个角，更立体的效果 */}
                  <div className="absolute -top-2 -left-2 w-4 h-4 bg-gray-800 rounded-full shadow-[3px_3px_0px_0px_rgba(0,0,0,0.4)] z-10 border border-gray-900">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-yellow-400 rounded-full shadow-inner"></div>
                    <div className="absolute top-0 left-0 w-full h-full rounded-full bg-gradient-to-br from-gray-300 to-transparent opacity-30"></div>
                  </div>
                  <div className="absolute -top-2 -right-2 w-4 h-4 bg-gray-800 rounded-full shadow-[3px_3px_0px_0px_rgba(0,0,0,0.4)] z-10 border border-gray-900">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-yellow-400 rounded-full shadow-inner"></div>
                    <div className="absolute top-0 left-0 w-full h-full rounded-full bg-gradient-to-br from-gray-300 to-transparent opacity-30"></div>
                   </div>
                  <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-gray-800 rounded-full shadow-[3px_3px_0px_0px_rgba(0,0,0,0.4)] z-10 border border-gray-900">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-yellow-400 rounded-full shadow-inner"></div>
                    <div className="absolute top-0 left-0 w-full h-full rounded-full bg-gradient-to-br from-gray-300 to-transparent opacity-30"></div>
                      </div>
                  <div className="absolute -bottom-2 -right-2 w-4 h-4 bg-gray-800 rounded-full shadow-[3px_3px_0px_0px_rgba(0,0,0,0.4)] z-10 border border-gray-900">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-yellow-400 rounded-full shadow-inner"></div>
                    <div className="absolute top-0 left-0 w-full h-full rounded-full bg-gradient-to-br from-gray-300 to-transparent opacity-30"></div>
                   </div>
                </div>
                    </div>
                </div>
              )}
           </div>

        {/* Name Label */}
        <div className="bg-manhwa-ink text-white p-4 shadow-comic">
          <h1 className="text-3xl font-black font-serif uppercase tracking-tighter leading-none">
            {data.name}
          </h1>
          <p className="text-manhwa-accent-red font-bold font-mono text-sm uppercase mt-1">
            {data.role}
          </p>
        </div>
      </div>

      {/* Right Column: Detailed Dossier (40%) */}
      <div className="lg:w-2/5 w-full flex flex-col gap-3">
        
        {/* Header Block: Quote & World Role */}
        <div className="bg-white border-2 border-manhwa-ink p-4 shadow-comic relative">
          <div className="absolute -left-2 top-4 w-2 h-6 bg-manhwa-accent-red border-l-2 border-t-2 border-b-2 border-manhwa-ink"></div>
          
          <div className="flex items-center text-xs font-bold text-slate-400 mb-2 space-x-2 uppercase tracking-wider">
            <MapPin size={12} />
            <span className="text-xs">{data.worldRole}</span>
          </div>
          
          <div className="flex gap-3">
             <Quote className="text-manhwa-ink flex-shrink-0 fill-current opacity-20" size={28} />
             <p className="text-base font-serif italic font-bold text-manhwa-ink leading-snug">
               {data.quote}
             </p>
          </div>
        </div>

        {/* Dossier Grid */}
        <div className="grid grid-cols-1 gap-3 flex-1">
          
          {/* Bio & Personality */}
          <div className="bg-manhwa-paper border-2 border-manhwa-ink p-4 flex flex-col gap-2">
             <div className="flex items-center gap-2 border-b-2 border-manhwa-ink pb-2 mb-1">
                <Fingerprint size={16} />
                <h3 className="font-black font-mono text-xs uppercase">Personnel File</h3>
             </div>
             
             <div className="flex flex-wrap gap-1.5 mb-2">
                {data.keywords.map(k => (
                  <span key={k} className="text-xs font-bold bg-white border border-manhwa-ink px-1.5 py-0.5 shadow-[1px_1px_0px_0px_#000]">
                    {k}
                  </span>
                ))}
             </div>
             
             <p className="text-xs font-serif text-slate-800 leading-relaxed text-justify">
               {data.bio}
             </p>
          </div>

          {/* Abilities & Issues */}
          <div className="bg-white border-2 border-manhwa-ink p-4 flex flex-col gap-2 relative overflow-hidden">
             <div className="absolute -right-4 -top-4 w-16 h-16 bg-yellow-300 rounded-full border-2 border-manhwa-ink z-0"></div>
             
             <div className="relative z-10 flex flex-col gap-3">
                <div>
                    <div className="flex items-center gap-2 mb-1">
                        <Zap size={16} className="text-manhwa-accent-blue"/>
                        <h3 className="font-black font-mono text-xs uppercase">Special Skills</h3>
                    </div>
                    <p className="text-xs font-bold text-manhwa-ink leading-tight">
                        {data.skills}
                    </p>
                </div>

                <div className="border-t border-dashed border-manhwa-ink pt-2">
                    <div className="flex items-center gap-2 mb-1 text-manhwa-accent-red">
                        <Target size={16} />
                        <h3 className="font-black font-mono text-xs uppercase">Target Issue</h3>
                    </div>
                    <p className="text-xs font-medium text-slate-700">
                        {data.skinIssues}
                    </p>
                </div>
             </div>
          </div>
        </div>

        {/* Product Footer */}
        <div className="bg-manhwa-ink text-white border-2 border-manhwa-ink p-3 flex items-center justify-between shadow-comic-hover">
            <div className="flex items-center gap-2">
                <ShoppingBag size={16} className="text-manhwa-accent-red" />
                <span className="font-black font-mono uppercase tracking-wider text-xs">Recommended Protocol</span>
            </div>
            <div className="flex gap-3 text-xs font-bold">
                {data.products.map((p, i) => (
                    <span key={i} className="border-b-2 border-manhwa-accent-red pb-0.5">{p}</span>
                ))}
            </div>
        </div>

      </div>
    </div>
  );
};
