const fs = require('fs');
const { execSync } = require('child_process');

// Let's create a list of all 23 cars and inspect their front/rear bumper
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

for (const car of cars) {
  const filePath = `public/cars_backup/${car}`;
  const dim = execSync(`identify -format '%w %h' "${filePath}"`).toString().trim().split(' ');
  const w = parseInt(dim[0]);
  const h = parseInt(dim[1]);

  console.log(`Car: ${car} (${w}x${h})`);
}
