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

  // Let's test if there is a plate or text
  // We can downscale or analyze edge density and high contrast boxes
  // License plates have sharp edges and high variance
  // Let's create an edge density map
  const rawEdges = execSync(`convert "${filePath}" -colorspace Gray -canny 0x1+15%+35% gray:-`, { maxBuffer: 10 * 1024 * 1024 });
  // rawEdges is a buffer of size w * h
  
  // Find region with highest edge density for typical plate sizes:
  // w in [90, 240], h in [25, 75], aspect ratio between 2.2 and 4.8
  // Search y from h*0.4 to h*0.9, x from w*0.1 to w*0.9
  let bestScore = 0;
  let bestBox = null;

  const yMin = Math.floor(h * 0.42);
  const yMax = Math.floor(h * 0.88);
  const xMin = Math.floor(w * 0.12);
  const xMax = Math.floor(w * 0.88);

  const stepX = 8;
  const stepY = 6;

  // Test standard plate sizes
  const plateSizes = [
    { pw: 120, ph: 36 },
    { pw: 150, ph: 44 },
    { pw: 180, ph: 50 },
    { pw: 210, ph: 56 },
    { pw: 100, ph: 32 }
  ];

  for (const { pw, ph } of plateSizes) {
    for (let y = yMin; y < yMax - ph; y += stepY) {
      for (let x = xMin; x < xMax - pw; x += stepX) {
        let edgeCount = 0;
        // Count edge pixels inside box
        for (let dy = 0; dy < ph; dy += 2) {
          const rowOffset = (y + dy) * w;
          for (let dx = 0; dx < pw; dx += 2) {
            if (rawEdges[rowOffset + x + dx] > 128) {
              edgeCount++;
            }
          }
        }

        // We also want the perimeter of the box to have contrasting edges (the plate border)
        // Score is edge density
        const totalSamples = (ph / 2) * (pw / 2);
        const density = edgeCount / totalSamples;

        // Bumper area bias (lower-middle is more likely)
        const centerY = (y + ph / 2) / h;
        const centerX = (x + pw / 2) / w;
        const distFromCenter = Math.abs(centerX - 0.5);

        // Score
        const score = density;
        if (score > bestScore) {
          bestScore = score;
          bestBox = { x, y, w: pw, h: ph, density };
        }
      }
    }
  }

  console.log(`${car} (${w}x${h}): Best edge box at x:${bestBox?.x}, y:${bestBox?.y}, ${bestBox?.w}x${bestBox?.h} (density: ${(bestBox?.density * 100).toFixed(1)}%)`);
}
