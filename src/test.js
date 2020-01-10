var http = require('http')

app = http.createServer(function(req, res){
   res.end('Hello world')
}).listen(3003 )
