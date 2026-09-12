const fs = require('fs');
const { execSync } = require('child_process');

const cars = [
  'bulletproof_v8_b6.jpg',
  'bulletproof_prado_b6.jpg',
  'bulletproof_revo_b6.jpg',
  'bulletproof_fortuner_b6.jpg',
  'fortuner_legender.jpg',
  'land_cruiser_v8.jpg',
  'toyota_prado.jpg',
  'hilux_revo.jpg',
  'corolla_altis.jpg',
  'toyota_yaris.jpg',
  'honda_civic.jpg',
  'honda_brv.jpg',
  'copen_convertible.jpg',
  'audi_wedding.jpg',
  'hiace_grand_cabin.jpg',
  'changan_karvaan.jpg',
  'suzuki_alto.jpg',
  'toyota_noah.jpg',
  'oshan_x7.jpg',
  'oshan_x7_angle.jpg',
  'oshan_x7_front.jpg',
  'oshan_x7_rear.jpg',
  'oshan_x7_side.jpg'
];

fs.mkdirSync('/tmp/slices', { recursive: true });

// For each car, let's analyze where a license plate might be located.
// A license plate is a rectangular element on the front or rear bumper.
// In photographed/rendered cars, license plates are often:
// 1. Rectangular holder (black or silver frame)
// 2. White or yellow background with numbers/letters or text (like "LAND CRUISER", "PRADO", or registration digits)
// 3. Or a blank black/white plate bracket.
console.log('Scanning cars...');
for (const car of cars) {
  const filePath = `public/cars_backup/${car}`;
  const dim = execSync(`identify -format '%w %h' "${filePath}"`).toString().trim().split(' ');
  const w = parseInt(dim[0]);
  const h = parseInt(dim[1]);

  // Let's find white/yellow/bright patches with aspect ratio 2:1 to 5:1 in the lower bumper area
  // y between 0.45*h and 0.85*h
  // Let's create a thresholded image of bright pixels (luminance > 160)
  const threshCmd = `convert "${filePath}" -crop ${w}x${Math.floor(h*0.45)}+0+${Math.floor(h*0.45)} -colorspace Gray -threshold 60% /tmp/slices/thresh_${car}.png`;
  execSync(threshCmd);
}
console.log('Thresholded crops done.');
