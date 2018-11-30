var http = require('http');

http.createServer(function(req,res){
	res.writeHead(200, {'Content-Type': 'text/plain' });
	res.end('Hello world!');
}).listen(32087);

console.log('Server started on localhost:32087; press Ctrl-C to terminate....');
