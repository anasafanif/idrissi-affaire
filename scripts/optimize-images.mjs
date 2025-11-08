import { readFile, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import sharp from 'sharp';

const images = [
  { input: 'src/assets/mounir.jpg', width: 720, quality: 75 },
  { input: 'src/assets/anas.jpg', width: 720, quality: 80 },
  { input: 'src/assets/hajar_err.jpg', width: 720, quality: 75 },
];

async function optimizeImage({ input, width, quality }) {
  const absInput = resolve(input);
  const data = await readFile(absInput);
  const optimized = await sharp(data)
    .resize({ width, withoutEnlargement: true })
    .jpeg({ quality, mozjpeg: true })
    .toBuffer();

  await writeFile(absInput, optimized);
  console.log(`Optimized ${input} (${optimized.length} bytes)`);
}

async function run() {
  await Promise.all(images.map(optimizeImage));
}

run().catch((error) => {
  console.error('Failed to optimize images', error);
  process.exitCode = 1;
});

