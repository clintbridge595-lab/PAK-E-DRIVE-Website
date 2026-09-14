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

// Let's test a generous bounding box for each car's plate.
// Generous bounding box ensures:
// 1) 100% of characters/numbers are covered by the black strip.
// 2) Bumper mounting frame looks like a sleek black plate frame.
// 3) ZERO numbers visible.
// 4) For oshan_x7_side.jpg, enabled: false (no plate on side view).

const definitiveBoxes = {
  // 1. bulletproof_v8_b6.jpg: Front 3/4 angle, bumper center
  "bulletproof_v8_b6.jpg": { x: 390, y: 510, w: 230, h: 75, enabled: true },
  
  // 2. bulletproof_prado_b6.jpg: Front 3/4 angle, lower bumper
  "bulletproof_prado_b6.jpg": { x: 385, y: 540, w: 230, h: 90, enabled: true },
  
  // 3. bulletproof_revo_b6.jpg: Front 3/4 angle, bumper
  "bulletproof_revo_b6.jpg": { x: 405, y: 580, w: 225, h: 80, enabled: true },
  
  // 4. bulletproof_fortuner_b6.jpg: Front bumper center
  "bulletproof_fortuner_b6.jpg": { x: 415, y: 565, w: 260, h: 80, enabled: true },
  
  // 5. fortuner_legender.jpg: Front bumper center
  "fortuner_legender.jpg": { x: 360, y: 570, w: 295, h: 85, enabled: true },
  
  // 6. land_cruiser_v8.jpg: Front bumper center
  "land_cruiser_v8.jpg": { x: 280, y: 550, w: 230, h: 75, enabled: true },
  
  // 7. toyota_prado.jpg: Front bumper center right
  "toyota_prado.jpg": { x: 805, y: 515, w: 215, h: 80, enabled: true },
  
  // 8. hilux_revo.jpg: Front bumper center right
  "hilux_revo.jpg": { x: 720, y: 695, w: 195, h: 65, enabled: true },
  
  // 9. corolla_altis.jpg: Front bumper center
  "corolla_altis.jpg": { x: 635, y: 485, w: 165, h: 70, enabled: true },
  
  // 10. toyota_yaris.jpg: Front bumper center
  "toyota_yaris.jpg": { x: 510, y: 680, w: 200, h: 80, enabled: true },
  
  // 11. honda_civic.jpg: Front bumper center
  "honda_civic.jpg": { x: 395, y: 585, w: 135, h: 50, enabled: true },
  
  // 12. honda_brv.jpg: Front bumper center
  "honda_brv.jpg": { x: 350, y: 545, w: 180, h: 60, enabled: true },
  
  // 13. copen_convertible.jpg: Front bumper right
  "copen_convertible.jpg": { x: 1000, y: 635, w: 185, h: 95, enabled: true },
  
  // 14. audi_wedding.jpg: Front bumper right
  "audi_wedding.jpg": { x: 1060, y: 695, w: 175, h: 65, enabled: true },
  
  // 15. hiace_grand_cabin.jpg: Front bumper
  "hiace_grand_cabin.jpg": { x: 795, y: 470, w: 210, h: 90, enabled: true },
  
  // 16. changan_karvaan.jpg: Front bumper lower center
  "changan_karvaan.jpg": { x: 500, y: 520, w: 190, h: 75, enabled: true },
  
  // 17. suzuki_alto.jpg: Front bumper center
  "suzuki_alto.jpg": { x: 320, y: 715, w: 105, h: 50, enabled: true },
  
  // 18. toyota_noah.jpg: Front bumper left
  "toyota_noah.jpg": { x: 175, y: 585, w: 225, h: 70, enabled: true },
  
  // 19. oshan_x7.jpg: Front bumper center
  "oshan_x7.jpg": { x: 300, y: 535, w: 200, h: 65, enabled: true },
  
  // 20. oshan_x7_angle.jpg: Front bumper angle
  "oshan_x7_angle.jpg": { x: 300, y: 535, w: 200, h: 65, enabled: true },
  
  // 21. oshan_x7_front.jpg: Direct front bumper center
  "oshan_x7_front.jpg": { x: 675, y: 590, w: 190, h: 65, enabled: true },
  
  // 22. oshan_x7_rear.jpg: Rear bumper center
  "oshan_x7_rear.jpg": { x: 350, y: 635, w: 195, h: 70, enabled: true },
  
  // 23. oshan_x7_side.jpg: Pure side profile - NO plate on side doors!
  "oshan_x7_side.jpg": { enabled: false }
};

fs.writeFileSync('src/data/definitiveBoxes.json', JSON.stringify(definitiveBoxes, null, 2));
console.log('Saved definitiveBoxes.json');
