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

const plateCoords = JSON.parse(fs.readFileSync('src/data/plateCoordinates.json', 'utf8'));

for (const car of cars) {
  const box = plateCoords[car];
  console.log(`\n--- ${car} ---`);
  if (!box) {
    console.log('No coords defined');
    continue;
  }
  // Let's get average color and brightness of the defined box in backup
  const stat = execSync(`convert "public/cars_backup/${car}" -crop ${box.w}x${box.h}+${box.x}+${box.y} -colorspace Gray -format "%[mean] %[standard_deviation] %[min] %[max]" info:`).toString().trim();
  console.log(`Box: ${box.x},${box.y} ${box.w}x${box.h} | Gray mean & stddev: ${stat}`);
}
