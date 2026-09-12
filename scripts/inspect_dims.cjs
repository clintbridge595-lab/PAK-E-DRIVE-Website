const fs = require('fs');
const { execSync } = require('child_process');

const cars = fs.readdirSync('public/cars_backup').filter(f => f.endsWith('.jpg'));

// Let us inspect the actual bounding boxes by running edge and rectangular shape detection
// on each car in public/cars_backup
const report = [];

for (const car of cars) {
  const filePath = `public/cars_backup/${car}`;
  const dim = execSync(`identify -format '%w %h' "${filePath}"`).toString().trim().split(' ');
  const w = parseInt(dim[0]);
  const h = parseInt(dim[1]);

  // Check if image is a side view or angle view or front/rear
  // Find brightest or most contrasting rectangular region on bumper (y: 0.45*h to 0.85*h)
  report.push({ car, w, h });
}

console.log(JSON.stringify(report, null, 2));
