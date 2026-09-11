export const WHATSAPP_PRIMARY = '+923152292493';
export const WHATSAPP_DISPLAY = '+92 315 2292493';
export const PHONE_DISPATCH = '+92 315 2398490';

export function getWhatsAppLink(message: string): string {
  const cleanPhone = WHATSAPP_PRIMARY.replace(/[^0-9]/g, '');
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${cleanPhone}?text=${encoded}`;
}

export function openWhatsApp(message: string) {
  const url = getWhatsAppLink(message);
  window.open(url, '_blank', 'noopener,noreferrer');
}
