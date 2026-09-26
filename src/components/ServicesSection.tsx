import React, { useState } from 'react';
import { TAILORED_SERVICES, FAQS } from '../data/fleetData';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { openWhatsApp } from '../utils/whatsapp';
import { Vehicle } from '../types';
import { SectionHeader } from './SectionHeader';

interface ServicesSectionProps {
  isFullPage?: boolean;
  onOpenSpecs?: (vehicle: Vehicle) => void;
  onOpenBooking?: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  isFullPage = false,
  onOpenBooking,
}) => {
  const [openFaqId, setOpenFaqId] = useState<string | null>('faq-1');

  const toggleFaq = (id: string) => {
    setOpenFaqId(openFaqId === id ? null : id);
  };

  const handleBookService = (serviceTitle: string) => {
    openWhatsApp(
      `Assalam-o-Alaikum PAK E DRIVE, I would like to book or inquire about your '${serviceTitle}' service.`
    );
  };

  return (
    <div id="services-section-wrapper">
      {/* Reusable Section Header for Full Page */}
      {isFullPage && (
        <SectionHeader 
          title="Our Chauffeur &amp; Car Rental Services" 
          currentPageName="Services" 
        />
      )}

      {/* Main Container */}
      <div 
        style={{
          fontFamily: 'Georgia, serif',
          fontStyle: 'italic',
        }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16"
      >
        
        {/* On Home page: Standard Section Heading */}
        {!isFullPage && (
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-[#111111]">
              Tailored Car Rental Services in Pakistan
            </h2>
            <p className="text-xs sm:text-sm text-neutral-600 mt-2 font-normal">
              From wedding entrances and luxury sedans to airport VIP pickups and long-distance intercity touring.
            </p>
          </div>
        )}

        {/* Services Grid: White card with thin light-grey border #E5E5E5 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {TAILORED_SERVICES.map((serv) => {
            const isWedding = serv.id === 'wedding-rental';
            const isLuxurySuv = serv.id === 'luxury-suv';

            return (
              <div
                key={serv.id}
                id={`service-card-${serv.id}`}
                className="bg-white rounded-xl border border-[#E5E5E5] p-6 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  {/* Icons removed 100% as requested */}

                  <h3 
                    style={{
                      fontFamily: isWedding 
                        ? 'Georgia, serif' 
                        : isLuxurySuv 
                          ? 'Times New Roman, serif' 
                          : undefined,
                      fontSize: isLuxurySuv ? '20px' : undefined,
                    }}
                    className="text-lg font-bold text-[#111111] tracking-tight"
                  >
                    {serv.title}
                  </h3>
                  
                  <p 
                    style={{
                      fontFamily: isWedding ? 'Times New Roman, serif' : undefined,
                      fontSize: isWedding ? '11px' : undefined,
                    }}
                    className="text-xs text-neutral-600 mt-2 leading-relaxed font-normal"
                  >
                    {serv.description}
                  </p>

                  {/* Bullet points */}
                  <div className="space-y-1.5 mt-3 pt-3 border-t border-[#E5E5E5]">
                    {serv.bullets.slice(0, 3).map((b, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-[#222222]">
                        <span className="text-[#0D919C] font-bold">•</span>
                        <span>{b}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Button */}
                <div className="pt-4 mt-4 border-t border-[#E5E5E5]">
                  <button
                    onClick={() => handleBookService(serv.title)}
                    style={{
                      backgroundColor: isWedding ? '#50b9bc' : '#3ca19a',
                    }}
                    className="w-full hover:opacity-90 text-white font-bold text-xs py-2.5 rounded-[7px] transition-colors cursor-pointer shadow-xs text-center"
                  >
                    Book Service
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* FAQ Accordion Section on Full Services Page */}
        {isFullPage && (
          <div className="mt-16 pt-12 border-t border-[#E5E5E5]">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#111111]">
                Everything You Need to Know
              </h3>
            </div>

            <div className="max-w-3xl mx-auto space-y-3">
              {FAQS.map((faq) => {
                const isOpen = openFaqId === faq.id;
                return (
                  <div
                    key={faq.id}
                    className="bg-white rounded-xl border border-[#E5E5E5] overflow-hidden transition-colors"
                  >
                    <button
                      onClick={() => toggleFaq(faq.id)}
                      className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 cursor-pointer"
                    >
                      <span className="text-sm font-bold text-[#111111]">
                        {faq.question}
                      </span>
                      {isOpen ? (
                        <ChevronUp className="w-4 h-4 text-[#0D919C] shrink-0" />
                      ) : (
                        <ChevronDown className="w-4 h-4 text-neutral-400 shrink-0" />
                      )}
                    </button>
                    {isOpen && (
                      <div className="px-5 pb-5 pt-1 text-xs text-neutral-600 leading-relaxed border-t border-[#E5E5E5]">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
