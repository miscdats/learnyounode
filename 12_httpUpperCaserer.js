/* Write an HTTP server that receives only POST requests and converts
  incoming POST body characters to upper-case and returns it to the client.

  Your server should listen on the port provided by the first argument to
  your program.
  */

//requires through2-map install
var map = require('through2-map');
var http = require('http');
var port = process.argv[2];

http.createServer(function (req, res) {
  if (req.method === 'POST') {
    req.pipe(map(function(chunk) {
      return chunk.toString().toUpperCase();
    })).pipe(res);
  }
}).listen(port);
