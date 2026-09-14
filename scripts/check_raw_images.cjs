const fs = require('fs');

const rawFiles = fs.readdirSync('src/assets/images');
console.log('Found raw images:', rawFiles);
