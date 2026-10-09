const fs = require('fs');
const sharp = require('sharp');
const path = require('path');

const publicLogoDir = path.join(__dirname, '../public/logo');
const publicDir = path.join(__dirname, '../public');
const srcImagesDir = path.join(__dirname, '../src/assets/images');

if (!fs.existsSync(publicLogoDir)) fs.mkdirSync(publicLogoDir, { recursive: true });
if (!fs.existsSync(srcImagesDir)) fs.mkdirSync(srcImagesDir, { recursive: true });

// 1. Icon Mark SVG (Square 512x512)
// Matches user's uploaded icon: Midnight Navy Squircle + White P Monogram with Dynamic Swooping Road
const iconSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="512" height="512">
  <!-- Rounded Rect Squircle Background -->
  <rect x="32" y="32" width="448" height="448" rx="112" ry="112" fill="#101b2b"/>
  
  <!-- Monogram P with Highway Road Arch -->
  <g fill="#ffffff">
    <!-- Upper Body & Bowl of P -->
    <path d="
      M 132 140 
      L 290 140 
      C 362 140 404 182 404 246 
      C 404 310 362 352 290 352 
      L 220 352 
      L 220 294 
      L 282 294 
      C 324 294 346 274 346 246 
      C 346 218 324 198 282 198 
      L 186 198 
      L 186 280 
      C 162 298 144 322 132 350 
      Z
    "/>
    
    <!-- Dynamic Ascending Road Swoosh -->
    <path d="
      M 132 404 
      C 132 356 156 312 206 270 
      C 246 236 294 224 330 220 
      C 334 220 336 224 332 228 
      C 286 248 244 280 212 322 
      C 188 354 176 386 172 404 
      Z
    "/>

    <!-- Lower Stem Base Column -->
    <path d="
      M 132 404 
      L 172 404 
      C 174 380 184 354 200 330 
      C 176 348 152 374 132 404 
      Z
    "/>
  </g>
</svg>`;

// 2. Full Horizontal Logo SVG (Dark Text for White/Light backgrounds)
// ViewBox: 0 0 1000 280
const horizontalLogoDarkSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 280" width="1000" height="280">
  <defs>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@800;900&amp;family=Plus+Jakarta+Sans:wght@700;800;900&amp;display=swap');
      .brand-title {
        font-family: 'Plus Jakarta Sans', 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        font-weight: 900;
        fill: #101b2b;
        font-size: 82px;
        letter-spacing: -0.01em;
      }
      .brand-subtitle {
        font-family: 'Plus Jakarta Sans', 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        font-weight: 700;
        fill: #101b2b;
        font-size: 40px;
        letter-spacing: 0.32em;
      }
    </style>
  </defs>

  <!-- Left Icon Mark: 220x220 -->
  <g transform="translate(10, 30)">
    <rect width="220" height="220" rx="55" ry="55" fill="#101b2b"/>
    <g transform="translate(-10, -10) scale(0.47)" fill="#ffffff">
      <!-- Upper Body & Bowl of P -->
      <path d="
        M 132 140 
        L 290 140 
        C 362 140 404 182 404 246 
        C 404 310 362 352 290 352 
        L 220 352 
        L 220 294 
        L 282 294 
        C 324 294 346 274 346 246 
        C 346 218 324 198 282 198 
        L 186 198 
        L 186 280 
        C 162 298 144 322 132 350 
        Z
      "/>
      
      <!-- Dynamic Ascending Road Swoosh -->
      <path d="
        M 132 404 
        C 132 356 156 312 206 270 
        C 246 236 294 224 330 220 
        C 334 220 336 224 332 228 
        C 286 248 244 280 212 322 
        C 188 354 176 386 172 404 
        Z
      "/>

      <!-- Lower Stem Base Column -->
      <path d="
        M 132 404 
        L 172 404 
        C 174 380 184 354 200 330 
        C 176 348 152 374 132 404 
        Z
      "/>
    </g>
  </g>

  <!-- Typography Right Side -->
  <text x="270" y="132" class="brand-title">PAK E DRIVE</text>
  <text x="274" y="212" class="brand-subtitle">CAR RENTAL</text>
</svg>`;

// 3. Full Horizontal Logo SVG (Light Text for Dark backgrounds)
const horizontalLogoLightSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 280" width="1000" height="280">
  <defs>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@800;900&amp;family=Plus+Jakarta+Sans:wght@700;800;900&amp;display=swap');
      .brand-title-light {
        font-family: 'Plus Jakarta Sans', 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        font-weight: 900;
        fill: #ffffff;
        font-size: 82px;
        letter-spacing: -0.01em;
      }
      .brand-subtitle-light {
        font-family: 'Plus Jakarta Sans', 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        font-weight: 700;
        fill: #cbd5e1;
        font-size: 40px;
        letter-spacing: 0.32em;
      }
    </style>
  </defs>

  <!-- Left Icon Mark: 220x220 -->
  <g transform="translate(10, 30)">
    <rect width="220" height="220" rx="55" ry="55" fill="#101b2b" stroke="#334155" stroke-width="3"/>
    <g transform="translate(-10, -10) scale(0.47)" fill="#ffffff">
      <path d="
        M 132 140 
        L 290 140 
        C 362 140 404 182 404 246 
        C 404 310 362 352 290 352 
        L 220 352 
        L 220 294 
        L 282 294 
        C 324 294 346 274 346 246 
        C 346 218 324 198 282 198 
        L 186 198 
        L 186 280 
        C 162 298 144 322 132 350 
        Z
      "/>
      <path d="
        M 132 404 
        C 132 356 156 312 206 270 
        C 246 236 294 224 330 220 
        C 334 220 336 224 332 228 
        C 286 248 244 280 212 322 
        C 188 354 176 386 172 404 
        Z
      "/>
      <path d="
        M 132 404 
        L 172 404 
        C 174 380 184 354 200 330 
        C 176 348 152 374 132 404 
        Z
      "/>
    </g>
  </g>

  <!-- Typography Right Side -->
  <text x="270" y="132" class="brand-title-light">PAK E DRIVE</text>
  <text x="274" y="212" class="brand-subtitle-light">CAR RENTAL</text>
</svg>`;

// 4. White Background OpenGraph Card (1200 x 630)
const ogCardSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 630" width="1200" height="630">
  <rect width="1200" height="630" fill="#ffffff"/>
  <g transform="translate(100, 175)">
    <!-- Icon 280x280 -->
    <rect width="280" height="280" rx="70" ry="70" fill="#101b2b"/>
    <g transform="translate(-12, -12) scale(0.6)" fill="#ffffff">
      <path d="
        M 132 140 
        L 290 140 
        C 362 140 404 182 404 246 
        C 404 310 362 352 290 352 
        L 220 352 
        L 220 294 
        L 282 294 
        C 324 294 346 274 346 246 
        C 346 218 324 198 282 198 
        L 186 198 
        L 186 280 
        C 162 298 144 322 132 350 
        Z
      "/>
      <path d="
        M 132 404 
        C 132 356 156 312 206 270 
        C 246 236 294 224 330 220 
        C 334 220 336 224 332 228 
        C 286 248 244 280 212 322 
        C 188 354 176 386 172 404 
        Z
      "/>
      <path d="
        M 132 404 
        L 172 404 
        C 174 380 184 354 200 330 
        C 176 348 152 374 132 404 
        Z
      "/>
    </g>
    <!-- Text -->
    <text x="330" y="140" font-family="'Plus Jakarta Sans', 'Montserrat', sans-serif" font-weight="900" fill="#101b2b" font-size="94px" letter-spacing="-0.01em">PAK E DRIVE</text>
    <text x="334" y="235" font-family="'Plus Jakarta Sans', 'Montserrat', sans-serif" font-weight="700" fill="#101b2b" font-size="44px" letter-spacing="0.32em">CAR RENTAL</text>
  </g>
</svg>`;

async function run() {
  console.log('Writing SVGs...');
  fs.writeFileSync(path.join(publicLogoDir, 'pakedrive_icon.svg'), iconSvg);
  fs.writeFileSync(path.join(publicLogoDir, 'pakedrive_logo_horizontal.svg'), horizontalLogoDarkSvg);
  fs.writeFileSync(path.join(publicLogoDir, 'pakedrive_logo_horizontal_light.svg'), horizontalLogoLightSvg);
  fs.writeFileSync(path.join(publicDir, 'favicon.svg'), iconSvg);

  console.log('Rendering high-res PNG and JPEG assets...');
  
  // 512x512 Icon
  const iconBuffer = Buffer.from(iconSvg);
  await sharp(iconBuffer)
    .resize(512, 512)
    .png()
    .toFile(path.join(publicLogoDir, 'pakedrive_round_logo.png'));
  
  await sharp(iconBuffer)
    .resize(512, 512)
    .png()
    .toFile(path.join(srcImagesDir, 'pakedrive_round_logo.png'));

  await sharp(iconBuffer)
    .resize(512, 512)
    .png()
    .toFile(path.join(publicLogoDir, 'pakedrive_circle_badge.png'));

  // Favicons
  await sharp(iconBuffer).resize(16, 16).png().toFile(path.join(publicDir, 'favicon-16x16.png'));
  await sharp(iconBuffer).resize(32, 32).png().toFile(path.join(publicDir, 'favicon-32x32.png'));
  await sharp(iconBuffer).resize(48, 48).png().toFile(path.join(publicDir, 'favicon-48x48.png'));
  await sharp(iconBuffer).resize(192, 192).png().toFile(path.join(publicDir, 'favicon-192x192.png'));
  await sharp(iconBuffer).resize(512, 512).png().toFile(path.join(publicDir, 'favicon-512x512.png'));
  await sharp(iconBuffer).resize(180, 180).png().toFile(path.join(publicDir, 'apple-touch-icon.png'));
  await sharp(iconBuffer).resize(32, 32).png().toFile(path.join(publicDir, 'favicon.png'));

  // Horizontal Logo PNGs
  const horizBuffer = Buffer.from(horizontalLogoDarkSvg);
  await sharp(horizBuffer)
    .resize(1000, 280)
    .png()
    .toFile(path.join(publicLogoDir, 'pakedrive_logo_transparent.png'));

  await sharp(horizBuffer)
    .resize(1000, 280)
    .png()
    .toFile(path.join(srcImagesDir, 'pakedrive_logo_clean.png'));

  // OpenGraph 1200x630 Card JPEG
  const ogBuffer = Buffer.from(ogCardSvg);
  await sharp(ogBuffer)
    .resize(1200, 630)
    .jpeg({ quality: 95 })
    .toFile(path.join(publicLogoDir, 'pakedrive_logo_3d.jpg'));

  await sharp(ogBuffer)
    .resize(1200, 630)
    .jpeg({ quality: 95 })
    .toFile(path.join(srcImagesDir, 'pakedrive_logo_3d_1788880769743.jpg'));

  console.log('All logo assets successfully updated and rendered!');
}

run().catch(err => {
  console.error('Error generating logo:', err);
  process.exit(1);
});
