const fs = require('fs');
const { execSync } = require('child_process');

const cars = fs.readdirSync('public/cars_backup').filter(f => f.endsWith('.jpg'));

for (const car of cars) {
  const filePath = `public/cars_backup/${car}`;
  const dim = execSync(`identify -format '%w %h' "${filePath}"`).toString().trim().split(' ');
  const w = parseInt(dim[0]);
  const h = parseInt(dim[1]);

  // Generate canny edges on lower half of car (y: h*0.4 to h*0.95)
  // License plates have dense concentration of edges with aspect ratio between 2.0 and 4.5
  const edgeFile = `/tmp/edges_${car}.png`;
  const yStart = Math.floor(h * 0.4);
  const cropH = Math.floor(h * 0.55);

  execSync(`convert "${filePath}" -crop ${w}x${cropH}+0+${yStart} -colorspace Gray -canny 0x1+10%+30% "${edgeFile}"`);

  // Count edge pixels in sliding windows (w: 120-220, h: 35-65)
  console.log(`Analyzing edges for ${car}...`);
}
