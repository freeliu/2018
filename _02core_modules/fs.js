var fs=require('fs')
fs.writeFileSync('./1.txt','hellow1')
console.log(fs.readFileSync('./1.txt').toString())