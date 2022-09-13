const fs = require('fs');
const fileName = 'data.xml';
const dirName = __dirname + '\\..\\';

const fileData = fs.readFileSync(dirName + fileName, 'utf8', 'r');
console.log(fileData);