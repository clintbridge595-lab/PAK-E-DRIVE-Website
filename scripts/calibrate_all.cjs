const fs = require('fs');
const { execSync } = require('child_process');

// Exact coordinates calibrated for all vehicle images:
// If an image has no plate (e.g. side profile or interior), set enabled: false so original pristine image is kept.
const plateMap = {
  "bulletproof_v8_b6.jpg": { x: 412, y: 524, w: 196, h: 52, rx: 6, enabled: true },
  "bulletproof_prado_b6.jpg": { x: 404, y: 554, w: 204, h: 74, rx: 6, enabled: true },
  "bulletproof_revo_b6.jpg": { x: 426, y: 592, w: 190, h: 58, rx: 6, enabled: true },
  "bulletproof_fortuner_b6.jpg": { x: 436, y: 576, w: 236, h: 60, rx: 6, enabled: true },
  "fortuner_legender.jpg": { x: 380, y: 580, w: 264, h: 64, rx: 6, enabled: true },
  "land_cruiser_v8.jpg": { x: 300, y: 562, w: 196, h: 56, rx: 6, enabled: true },
  "toyota_prado.jpg": { x: 826, y: 526, w: 182, h: 60, rx: 6, enabled: true },
  "hilux_revo.jpg": { x: 498, y: 324, w: 198, h: 68, rx: 6, enabled: true },
  "corolla_altis.jpg": { x: 326, y: 410, w: 206, h: 48, rx: 5, enabled: true },
  "toyota_yaris.jpg": { x: 530, y: 692, w: 168, h: 60, rx: 6, enabled: true },
  "honda_civic.jpg": { x: 576, y: 422, w: 186, h: 44, rx: 5, enabled: true },
  "honda_brv.jpg": { x: 398, y: 480, w: 178, h: 42, rx: 5, enabled: true },
  "copen_convertible.jpg": { x: 1022, y: 650, w: 148, h: 76, rx: 6, enabled: true },
  "audi_wedding.jpg": { x: 678, y: 464, w: 220, h: 56, rx: 6, enabled: true },
  "hiace_grand_cabin.jpg": { x: 810, y: 484, w: 180, h: 72, rx: 6, enabled: true },
  "changan_karvaan.jpg": { x: 916, y: 516, w: 216, h: 68, rx: 6, enabled: true },
  "suzuki_alto.jpg": { x: 330, y: 726, w: 84, h: 36, rx: 4, enabled: true },
  "toyota_noah.jpg": { x: 785, y: 386, w: 174, h: 60, rx: 6, enabled: true },
  "oshan_x7.jpg": { x: 680, y: 438, w: 178, h: 48, rx: 6, enabled: true },
  "oshan_x7_angle.jpg": { x: 680, y: 438, w: 178, h: 48, rx: 6, enabled: true },
  "oshan_x7_front.jpg": { x: 236, y: 354, w: 162, h: 78, rx: 6, enabled: true },
  "oshan_x7_rear.jpg": { x: 398, y: 650, w: 146, h: 44, rx: 6, enabled: true },
  "oshan_x7_side.jpg": { enabled: false } // Side view: strictly NO plate, keep car original!
};

fs.writeFileSync('src/data/plateCoordinates.json', JSON.stringify(plateMap, null, 2));
console.log('Saved calibrated plateCoordinates.json');
