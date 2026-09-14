const fs = require('fs');
const { execSync } = require('child_process');

function ascii(file, x, y, w, h) {
  const raw = execSync(`convert "public/cars_raw_pristine/${file}" -crop ${w}x${h}+${x}+${y} -resize 50x12! -colorspace Gray gray:-`);
  const chars = ' .:-=+*#%@';
  console.log(`\n=== ${file} [${w}x${h}+${x}+${y}] ===`);
  for (let r = 0; r < 12; r++) {
    let line = '';
    for (let c = 0; c < 50; c++) {
      const val = raw[r * 50 + c];
      const charIdx = Math.floor((val / 256) * chars.length);
      line += chars[Math.min(chars.length - 1, charIdx)];
    }
    console.log(line);
  }
}

// Check front center of corolla altis
ascii('corolla_altis.jpg', 600, 480, 200, 80);
ascii('corolla_altis.jpg', 500, 480, 200, 80);
ascii('corolla_altis.jpg', 680, 480, 200, 80);

// Check toyota yaris
ascii('toyota_yaris.jpg', 600, 520, 200, 80);
ascii('toyota_yaris.jpg', 500, 520, 200, 80);

// Check suzuki alto
ascii('suzuki_alto.jpg', 550, 450, 200, 80);
ascii('suzuki_alto.jpg', 650, 450, 200, 80);

// Check bulletproof prado
ascii('bulletproof_prado_b6.jpg', 600, 520, 200, 80);
ascii('bulletproof_prado_b6.jpg', 700, 520, 200, 80);

// Check oshan x7 front
ascii('oshan_x7_front.jpg', 600, 520, 200, 80);

// Check oshan x7 rear
ascii('oshan_x7_rear.jpg', 600, 580, 200, 80);
