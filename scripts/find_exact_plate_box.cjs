const fs = require('fs');
const { execSync } = require('child_process');

function inspectArea(file, cropBox, w = 50, h = 14) {
  const [cw, ch, cx, cy] = cropBox;
  const raw = execSync(`convert "public/cars_raw_pristine/${file}" -crop ${cw}x${ch}+${cx}+${cy} -resize ${w}x${h}! -colorspace Gray gray:-`);
  const chars = ' .:-=+*#%@';
  console.log(`\n=== ${file} [${cw}x${ch}+${cx}+${cy}] ===`);
  for (let r = 0; r < h; r++) {
    let line = '';
    for (let c = 0; c < w; c++) {
      const val = raw[r * w + c];
      const charIdx = Math.floor((val / 256) * chars.length);
      line += chars[Math.min(chars.length - 1, charIdx)];
    }
    console.log(line);
  }
}

// Let's test candidate boxes for cars:
const testBoxes = {
  "corolla_altis.jpg": [240, 90, 640, 480],
  "toyota_yaris.jpg": [300, 120, 500, 640],
  "honda_civic.jpg": [300, 100, 380, 560],
  "honda_brv.jpg": [300, 100, 340, 530],
  "land_cruiser_v8.jpg": [300, 100, 280, 540],
  "toyota_prado.jpg": [300, 100, 800, 500],
  "hilux_revo.jpg": [300, 100, 710, 680],
  "fortuner_legender.jpg": [300, 100, 360, 560],
  "bulletproof_v8_b6.jpg": [300, 100, 380, 500],
  "bulletproof_prado_b6.jpg": [300, 100, 380, 530],
  "bulletproof_revo_b6.jpg": [300, 100, 380, 560],
  "bulletproof_fortuner_b6.jpg": [300, 100, 410, 550],
  "changan_karvaan.jpg": [300, 100, 400, 340],
  "copen_convertible.jpg": [300, 120, 980, 620],
  "audi_wedding.jpg": [300, 100, 1040, 670],
  "hiace_grand_cabin.jpg": [300, 100, 780, 460],
  "suzuki_alto.jpg": [200, 80, 310, 700],
  "toyota_noah.jpg": [300, 100, 160, 570],
  "oshan_x7.jpg": [300, 100, 220, 550],
  "oshan_x7_angle.jpg": [300, 100, 220, 550],
  "oshan_x7_front.jpg": [300, 100, 660, 580],
  "oshan_x7_rear.jpg": [300, 100, 340, 620]
};

for (const [f, box] of Object.entries(testBoxes)) {
  if (fs.existsSync(`public/cars_raw_pristine/${f}`)) {
    inspectArea(f, box);
  }
}
