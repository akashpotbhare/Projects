const path = require('path');

console.log(path.sep);

const filePath=path.join('/Content/Subfolder',"utf-8","Bio.txt")

console.log(filePath)


const base=path.basename(filePath)
console.log(base)

const absolute=path.relative(__dirname,'Content','Subfolder','Bio.txt')

console.log(absolute)