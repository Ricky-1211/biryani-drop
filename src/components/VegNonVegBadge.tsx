import React from 'react';

interface VegNonVegBadgeProps {
  isVeg: boolean;
  size?: 'sm' | 'md' | 'lg';
  showLabel?: boolean;
}

export const VegNonVegBadge: React.FC<VegNonVegBadgeProps> = ({
  isVeg,
  size = 'md',
  showLabel = false,
}) => {
  const sizeClasses = {
    sm: 'w-3.5 h-3.5 border p-[1.5px]',
    md: 'w-4 h-4 border-2 p-[2px]',
    lg: 'w-5 h-5 border-2 p-[2.5px]',
  };

  const dotClasses = {
    sm: 'w-1.5 h-1.5',
    md: 'w-2 h-2',
    lg: 'w-2.5 h-2.5',
  };

  return (
    <div className="inline-flex items-center gap-1.5">
      <div
        className={`flex items-center justify-center rounded-[3px] transition-transform ${
          sizeClasses[size]
        } ${
          isVeg
            ? 'border-emerald-500 bg-emerald-950/30'
            : 'border-red-600 bg-red-950/30'
        }`}
        title={isVeg ? 'Vegetarian' : 'Non-Vegetarian'}
      >
        <div
          className={`rounded-full ${dotClasses[size]} ${
            isVeg ? 'bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)]' : 'bg-red-600 shadow-[0_0_8px_rgba(220,38,38,0.8)]'
          }`}
        />
      </div>
      {showLabel && (
        <span
          className={`text-xs font-medium uppercase tracking-wider ${
            isVeg ? 'text-emerald-400' : 'text-red-400'
          }`}
        >
          {isVeg ? 'Veg' : 'Non-Veg'}
        </span>
      )}
    </div>
  );
};
