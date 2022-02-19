// Source: https://web.dev/serve-responsive-images/#sharp
const sharp = require('sharp');
const fs = require('fs');
const name = 'avatar';
const avatar = `./assets/${name}.png`
const directory = './assets';

sharp(avatar)
    .resize(250, 250)
    .toFile(`${directory}/${name}-small.webp`);

sharp(avatar)
    .resize(500, 500)
    .toFile(`${directory}/${name}-medium.webp`);

sharp(avatar)
    .toFile(`${directory}/${name}-large.webp`);