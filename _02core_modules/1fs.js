var fs=require('_02core_modules/1fs')
fs.writeFileSync('./1.txt','hellow1')
console.log(fs.readFileSync('./1.txt').toString())