const fs = require('fs');
const { execSync } = require('child_process');

// For each image, let's search across multiple candidate bounding boxes or use edge/color density to find the plate.
// Or we can crop vertical slices across the car's front bumper to locate the exact plate rectangle!

const images = [
  'corolla_altis.jpg',
  'honda_civic.jpg',
  'honda_brv.jpg',
  'toyota_yaris.jpg',
  'suzuki_alto.jpg',
  'toyota_noah.jpg',
  'toyota_prado.jpg',
  'land_cruiser_v8.jpg',
  'hilux_revo.jpg',
  'bulletproof_v8_b6.jpg',
  'bulletproof_prado_b6.jpg',
  'bulletproof_revo_b6.jpg',
  'bulletproof_fortuner_b6.jpg',
  'copen_convertible.jpg',
  'audi_wedding.jpg',
  'hiace_grand_cabin.jpg',
  'changan_karvaan.jpg',
  'oshan_x7_front.jpg',
  'oshan_x7_rear.jpg',
  'oshan_x7_angle.jpg'
];

for (const img of images) {
  console.log(`\n================== ${img} ==================`);
  // Run tesseract with psm 6, 7, 8, 11 on the lower half of the image (where bumpers and plates are)
  // Crop y: 250 to 750
  try {
    const tsv = execSync(`convert "public/cars_raw_pristine/${img}" -crop 1376x450+0+280 /tmp/lower.png && tesseract /tmp/lower.png stdout --psm 11 tsv 2>/dev/null`, { encoding: 'utf-8' });
    const lines = tsv.split('\n');
    for (let i = 1; i < lines.length; i++) {
      const parts = lines[i].split('\t');
      if (parts.length >= 12) {
        const text = parts[11].trim();
        const conf = parseFloat(parts[10]);
        const left = parseInt(parts[6]);
        const top = parseInt(parts[7]) + 280; // offset
        const width = parseInt(parts[8]);
        const height = parseInt(parts[9]);
        if (text.length >= 2 && width < 300 && height < 120 && height > 10) {
          console.log(`  [TSV Text] "${text}" conf:${conf} at [x:${left}, y:${top}, w:${width}, h:${height}]`);
        }
      }
    }
  } catch (e) {
    console.error(e.message);
  }
}
