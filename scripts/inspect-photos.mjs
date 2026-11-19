import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const baseDir = 'src/assets/photographs';
const dirs = fs.readdirSync(baseDir, { withFileTypes: true }).filter(d => d.isDirectory());

async function inspect() {
  for (const d of dirs) {
    const dirPath = path.join(baseDir, d.name);
    const files = fs.readdirSync(dirPath).filter(f => /\.(jpg|jpeg|png|webp)$/i.test(f));
    console.log(`\n=== FOLDER: ${d.name} (${files.length} files) ===`);
    for (const f of files) {
      const fullPath = path.join(dirPath, f);
      try {
        const meta = await sharp(fullPath).metadata();
        const ratio = (meta.width / meta.height).toFixed(2);
        let orientation = 'square';
        if (ratio > 1.15) orientation = 'landscape';
        else if (ratio < 0.85) orientation = 'portrait';
        console.log(`  ${f} -> ${meta.width}x${meta.height} [ratio: ${ratio}] (${orientation})`);
      } catch (err) {
        console.log(`  ${f} -> ERROR ${err.message}`);
      }
    }
  }
}

inspect();
