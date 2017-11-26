var path= require('path')

var p1='liu//a/index.html'

//纠错和根据操作系统选择对应的斜杠格式
console.log(path.normalize(p1))

p1=path.normalize(p1)
console.log(path.dirname(p1))
console.log(path.basename(p1))
console.log(path.extname(p1))



