const fs = require('fs');
const { execSync } = require('child_process');

const carsToTest = [
  'bulletproof_v8_b6.jpg',
  'bulletproof_prado_b6.jpg',
  'bulletproof_fortuner_b6.jpg',
  'fortuner_legender.jpg',
  'land_cruiser_v8.jpg',
  'hilux_revo.jpg',
  'copen_convertible.jpg',
  'hiace_grand_cabin.jpg',
  'changan_karvaan.jpg',
  'suzuki_alto.jpg',
  'oshan_x7_front.jpg'
];

for (const car of carsToTest) {
  const filePath = `public/cars_backup/${car}`;
  // Let's run edge + connected components with lower area threshold (150)
  const cmd = `convert "${filePath}" -crop 1376x400+0+320 -colorspace Gray -threshold 55% -define connected-components:verbose=true -define connected-components:area-threshold=250 -connected-components 8 null:`;
  try {
    const out = execSync(cmd).toString();
    const lines = out.split('\n').filter(l => l.includes(':'));
    console.log(`\n=== ${car} ===`);
    for (const l of lines) {
      const m = l.match(/(\d+)x(\d+)\+(\d+)\+(\d+)\s+[\d\.]+,\s*[\d\.]+\s+(\d+)\s+gray\((\d+)\)/);
      if (m) {
        const boxW = parseInt(m[1]);
        const boxH = parseInt(m[2]);
        const boxX = parseInt(m[3]);
        const boxY = parseInt(m[4]) + 320;
        const aspect = boxW / boxH;
        if (aspect >= 1.7 && aspect <= 5.5 && boxW >= 70 && boxW <= 280 && boxH >= 18 && boxH <= 85) {
          console.log(`  Candidate: x:${boxX}, y:${boxY}, w:${boxW}, h:${boxH} (aspect: ${aspect.toFixed(2)}, gray: ${m[6]})`);
        }
      }
    }
  } catch (err) {
    console.error(`Error on ${car}:`, err.message);
  }
}
