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

for (const car of cars) {
  const filePath = `public/cars_backup/${car}`;
  const dim = execSync(`identify -format '%w %h' "${filePath}"`).toString().trim().split(' ');
  const w = parseInt(dim[0]);
  const h = parseInt(dim[1]);

  // For each car, find connected components of high-contrast or bright rectangular regions
  // in the lower 60% of the image (y: h*0.4 to h*0.95)
  // Let's run connected components analysis on:
  // 1) thresholded bright areas (white/yellow plates)
  // 2) high-contrast edge bounding boxes (black plates or plates with dark surrounds)
  const yStart = Math.floor(h * 0.4);
  const cropH = Math.floor(h * 0.55);

  // We crop the lower region
  const cmd = `convert "${filePath}" -crop ${w}x${cropH}+0+${yStart} -colorspace Gray -threshold 50% -define connected-components:verbose=true -define connected-components:area-threshold=500 -connected-components 8 null:`;
  try {
    const out = execSync(cmd).toString();
    const lines = out.split('\n').filter(l => l.includes(':'));
    const candidates = [];
    for (const l of lines) {
      // Format: id: WxH+X+Y centroid area mean-color
      const m = l.match(/(\d+)x(\d+)\+(\d+)\+(\d+)\s+[\d\.]+,\s*[\d\.]+\s+(\d+)\s+gray\((\d+)\)/);
      if (m) {
        const boxW = parseInt(m[1]);
        const boxH = parseInt(m[2]);
        const boxX = parseInt(m[3]);
        const boxY = parseInt(m[4]) + yStart; // adjust to full image
        const area = parseInt(m[5]);
        const color = parseInt(m[6]);
        const aspect = boxW / boxH;

        // Typical plate aspect ratio 1.8 to 5.0, width 80 to 300, height 25 to 90
        if (aspect >= 1.8 && aspect <= 5.0 && boxW >= 80 && boxW <= 320 && boxH >= 20 && boxH <= 90) {
          candidates.push({ boxX, boxY, boxW, boxH, aspect, area, color });
        }
      }
    }
    console.log(`\n=== ${car} ===`);
    if (candidates.length === 0) {
      console.log('No bright plate candidate found with threshold 50%');
    } else {
      for (const c of candidates) {
        console.log(`  Candidate: x:${c.boxX}, y:${c.boxY}, w:${c.boxW}, h:${c.boxH} (aspect: ${c.aspect.toFixed(2)}, color: ${c.color})`);
      }
    }
  } catch (err) {
    console.error(`Error on ${car}:`, err.message);
  }
}
