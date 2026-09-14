const fs = require('fs');
const { execSync } = require('child_process');

function scanGrid(file, startX, endX, startY, endY, stepX, stepY, w, h) {
  console.log(`\nScanning ${file}...`);
  for (let y = startY; y <= endY; y += stepY) {
    for (let x = startX; x <= endX; x += stepX) {
      try {
        const out = execSync(`convert "public/cars_raw_pristine/${file}" -crop ${w}x${h}+${x}+${y} /tmp/probe.png && tesseract /tmp/probe.png stdout --psm 6 2>/dev/null`, { encoding: 'utf-8' }).trim();
        if (out.length >= 2 && !/^[_\-=~.]+$/.test(out)) {
          console.log(`  Hit at [x:${x}, y:${y}, w:${w}, h:${h}]: "${out.replace(/\n/g, ' ')}"`);
        }
      } catch (e) {}
    }
  }
}

// Probe around expected front bumper areas (usually y: 400-650, x: 200-1100)
scanGrid('corolla_altis.jpg', 300, 1000, 350, 650, 100, 60, 150, 60);
scanGrid('toyota_yaris.jpg', 300, 1000, 350, 650, 100, 60, 150, 60);
scanGrid('suzuki_alto.jpg', 300, 1000, 350, 650, 100, 60, 150, 60);
scanGrid('bulletproof_prado_b6.jpg', 300, 1000, 350, 650, 100, 60, 150, 60);
scanGrid('oshan_x7_front.jpg', 400, 900, 350, 650, 100, 60, 150, 60);
scanGrid('oshan_x7_rear.jpg', 500, 900, 500, 700, 80, 50, 150, 60);
scanGrid('oshan_x7_angle.jpg', 600, 1000, 450, 650, 80, 50, 150, 60);
