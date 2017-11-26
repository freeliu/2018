let http = require('http')

http.createServer((request, response) => {
    console.log(request.url)
    response.writeHead(200, {'Content-Type': 'text/plain'})
    response.write("hello world")
    response.end()
}).listen(8082)

console.log("server is running...")