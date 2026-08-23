const fs = require('fs');
const path = require('path');

const PUBLIC_DIR = path.join(process.cwd(), 'public');
const HERO_FRAMES_DIR = path.join(PUBLIC_DIR, 'hero-frames');
const FRAME_COUNT = 240;

function validateAssets() {
  console.log('Validating assets...');
  let hasError = false;

  // 1. Check Hero Frames
  if (!fs.existsSync(HERO_FRAMES_DIR)) {
    console.error(`❌ Missing directory: ${HERO_FRAMES_DIR}`);
    hasError = true;
  } else {
    for (let i = 0; i < FRAME_COUNT; i++) {
      const fileName = `frame_${String(i).padStart(6, '0')}.png`;
      const filePath = path.join(HERO_FRAMES_DIR, fileName);
      if (!fs.existsSync(filePath)) {
        console.error(`❌ Missing hero frame: ${fileName}`);
        hasError = true;
      }
    }

    const extraFramePath = path.join(HERO_FRAMES_DIR, `frame_${String(FRAME_COUNT).padStart(6, '0')}.png`);
    if (fs.existsSync(extraFramePath)) {
      console.error(`❌ Unexpected extra frame found: ${extraFramePath}`);
      hasError = true;
    }
  }

  // 2. Check Logo
  const logoPath = path.join(PUBLIC_DIR, 'images', 'brand', 'swasthik-ayurveda-logo.png');
  if (!fs.existsSync(logoPath)) {
    console.error(`❌ Missing logo: ${logoPath}`);
    hasError = true;
  }

  if (hasError) {
    console.error('Asset validation failed.');
    process.exit(1);
  } else {
    console.log('✅ Asset validation passed.');
  }
}

validateAssets();
