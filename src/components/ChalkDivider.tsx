import React from 'react';
import { Sparkles } from 'lucide-react';

interface ChalkDividerProps {
  label?: string;
  icon?: React.ReactNode;
  align?: 'center' | 'left';
}

export const ChalkDivider: React.FC<ChalkDividerProps> = ({
  label,
  icon,
  align = 'center',
}) => {
  return (
    <div
      className={`my-6 flex items-center gap-3 select-none ${
        align === 'center' ? 'justify-center' : 'justify-start'
      }`}
    >
      <div className="h-[1px] w-12 sm:w-20 bg-gradient-to-r from-transparent via-[#E5B842]/60 to-[#E5B842]" />
      <div className="flex items-center gap-2 text-[#E5B842]">
        {icon ? icon : <Sparkles className="w-3.5 h-3.5 animate-pulse text-[#E5B842]" />}
        {label && (
          <span className="font-display tracking-[0.2em] text-xs font-bold uppercase text-[#E5B842]">
            {label}
          </span>
        )}
      </div>
      <div className="h-[1px] w-12 sm:w-20 bg-gradient-to-l from-transparent via-[#E5B842]/60 to-[#E5B842]" />
    </div>
  );
};
