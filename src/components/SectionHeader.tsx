import React from 'react';
import { ArrowLeft } from 'lucide-react';

interface SectionHeaderProps {
  title: string;
  currentPageName: string;
  subtitle?: string;
  onBackToHome?: () => void;
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  currentPageName,
  subtitle,
  onBackToHome,
  className = '',
}) => {
  return (
    <div className={`bg-[#0D919C] text-white py-12 sm:py-16 text-center ${className}`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-2 font-['Poppins',sans-serif]">
          {title}
        </h1>
        {subtitle && (
          <p className="text-teal-100 text-sm sm:text-base max-w-2xl mx-auto mb-3">
            {subtitle}
          </p>
        )}
        <div className="text-xs sm:text-sm text-teal-100 font-medium flex items-center justify-center gap-1.5">
          <span>Home</span>
          <span className="mx-1 text-teal-200">/</span>
          <span className="text-white font-bold">{currentPageName}</span>
        </div>

        {onBackToHome && (
          <div className="mt-4">
            <button
              onClick={onBackToHome}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-white hover:text-teal-100 bg-white/10 hover:bg-white/20 px-3.5 py-1.5 rounded-[6px] transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Return to Home</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
