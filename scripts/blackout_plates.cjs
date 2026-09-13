const fs = require('fs');
const { execSync } = require('child_process');

const plateData = JSON.parse(fs.readFileSync('src/data/plateCoordinates.json', 'utf8'));

console.log(`Processing ${Object.keys(plateData).length} car images with sleek black license plates...`);

for (const [filename, box] of Object.entries(plateData)) {
  const sourcePath = `public/cars_backup/${filename}`;
  const targetPath = `public/cars/${filename}`;

  if (!fs.existsSync(sourcePath)) {
    console.warn(`Source not found: ${sourcePath}`);
    continue;
  }

  // If disabled (e.g. side profile, no plate), restore clean original!
  if (box.enabled === false) {
    fs.copyFileSync(sourcePath, targetPath);
    console.log(`✓ Restored clean original (no plate): ${filename}`);
    continue;
  }

  const x1 = box.x;
  const y1 = box.y;
  const x2 = box.x + box.w;
  const y2 = box.y + box.h;
  const rx = box.rx || 5;
  const ry = box.rx || 5;

  // Solid black luxury plate with subtle bevel/border
  // Draw sleek solid black rounded rectangle directly over plate
  const cmd = `convert "${sourcePath}" \
    -fill "#0a0a0a" -stroke "#1c1c1c" -strokewidth 1 \
    -draw "roundrectangle ${x1},${y1} ${x2},${y2} ${rx},${ry}" \
    -quality 95 "${targetPath}"`;

  try {
    execSync(cmd);
    console.log(`✓ Successfully blacked out plate on ${filename} (${box.w}x${box.h} at ${box.x},${box.y})`);
  } catch (err) {
    console.error(`✗ Error processing ${filename}:`, err.message);
  }
}

console.log('All car plates successfully processed and blacked out!');
