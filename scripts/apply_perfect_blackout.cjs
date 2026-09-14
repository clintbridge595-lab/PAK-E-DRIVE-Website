const fs = require('fs');
const { execSync } = require('child_process');

const exactPlates = {
  "audi_wedding.jpg": { x: 875, y: 525, w: 230, h: 75, enabled: true },
  "bulletproof_fortuner_b6.jpg": { x: 785, y: 530, w: 230, h: 80, enabled: true },
  "bulletproof_prado_b6.jpg": { x: 710, y: 545, w: 235, h: 75, enabled: true },
  "bulletproof_revo_b6.jpg": { x: 665, y: 580, w: 230, h: 75, enabled: true },
  "bulletproof_v8_b6.jpg": { x: 615, y: 510, w: 230, h: 70, enabled: true },
  "changan_karvaan.jpg": { x: 910, y: 525, w: 185, h: 85, enabled: true },
  "copen_convertible.jpg": { x: 1075, y: 635, w: 190, h: 80, enabled: true },
  "corolla_altis.jpg": { x: 630, y: 485, w: 175, h: 75, enabled: true },
  "fortuner_legender.jpg": { x: 635, y: 500, w: 230, h: 75, enabled: true },
  "hiace_grand_cabin.jpg": { x: 925, y: 495, w: 210, h: 75, enabled: true },
  "hilux_revo.jpg": { x: 505, y: 355, w: 220, h: 75, enabled: true },
  "honda_brv.jpg": { x: 425, y: 535, w: 210, h: 70, enabled: true },
  "honda_civic.jpg": { x: 535, y: 435, w: 200, h: 70, enabled: true },
  "land_cruiser_v8.jpg": { x: 795, y: 580, w: 230, h: 75, enabled: true },
  "oshan_x7.jpg": { x: 300, y: 535, w: 210, h: 70, enabled: true },
  "oshan_x7_angle.jpg": { x: 300, y: 535, w: 210, h: 70, enabled: true },
  "oshan_x7_front.jpg": { x: 605, y: 645, w: 220, h: 70, enabled: true },
  "oshan_x7_rear.jpg": { x: 345, y: 630, w: 205, h: 65, enabled: true },
  "oshan_x7_side.jpg": { enabled: false }, // Side view: NO license plate, completely pristine!
  "suzuki_alto.jpg": { x: 375, y: 580, w: 150, h: 60, enabled: true },
  "toyota_noah.jpg": { x: 805, y: 405, w: 190, h: 70, enabled: true },
  "toyota_prado.jpg": { x: 770, y: 380, w: 205, h: 70, enabled: true },
  "toyota_yaris.jpg": { x: 575, y: 630, w: 190, h: 70, enabled: true }
};

fs.writeFileSync('src/data/plateCoordinates.json', JSON.stringify(exactPlates, null, 2));

console.log('Processing all 23 car images from clean pristine raw sources...');

for (const [filename, box] of Object.entries(exactPlates)) {
  const src = `public/cars_raw_pristine/${filename}`;
  const dest = `public/cars/${filename}`;

  if (!fs.existsSync(src)) {
    console.warn(`File missing: ${src}`);
    continue;
  }

  if (box.enabled === false) {
    fs.copyFileSync(src, dest);
    console.log(`[Clean Original Restored - No Plate] ${filename}`);
    continue;
  }

  const x1 = box.x;
  const y1 = box.y;
  const x2 = box.x + box.w;
  const y2 = box.y + box.h;

  // Solid black blackout strip over plate - 100% opaque pure black
  // Draw sleek solid black rounded rectangle with fine border
  const cmd = `convert "${src}" \
    -fill "#050505" -stroke "#111111" -strokewidth 2 \
    -draw "roundrectangle ${x1},${y1} ${x2},${y2} 4,4" \
    -quality 95 "${dest}"`;

  try {
    execSync(cmd);
    console.log(`[Blackout Plate Applied] ${filename} at [${x1},${y1} to ${x2},${y2}]`);
  } catch (err) {
    console.error(`Error on ${filename}:`, err.message);
  }
}

console.log('Finished blackout plate processing on all cars successfully.');
