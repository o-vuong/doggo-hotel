import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Base64 encoded 1x1 transparent PNG
const placeholderIcon = 'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=';

const sizes = [192, 512];
const publicIconsDir = path.join(__dirname, '../public/icons');

if (!fs.existsSync(publicIconsDir)) {
  fs.mkdirSync(publicIconsDir, { recursive: true });
}

for (const size of sizes) {
  const iconPath = path.join(publicIconsDir, `icon-${size}x${size}.png`);
  fs.writeFileSync(iconPath, Buffer.from(placeholderIcon, 'base64'));
  console.log(`Created placeholder icon: ${iconPath}`);
} 