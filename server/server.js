var http = require('http');
var fs = require("fs");


function send404(response) {
    response.writeHead(404, {'Content-Type': 'text/html'})
    response.write('你访问的网页不存在')
    response.end()
}

http.createServer((request, response) => {
    // console.log(request.url)
    // response.writeHead(200, {'Content-Type': 'text/plain'})
    // response.write("hello world")
    // response.end()
    if (request.method == 'GET' && request.url == '/') {
        console.log(111111111);
        fs.createReadStream('./index.html').pipe(response)
    } else {
        send404(response)
    }


}).listen(8080);

console.log("server is running...");