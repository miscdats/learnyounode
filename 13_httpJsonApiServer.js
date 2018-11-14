/*  Write an HTTP server that serves JSON data when it receives a GET request
  to the path '/api/parsetime'. Expect the request to contain a query string
  with a key 'iso' and an ISO-format time as the value.

  For example:

  /api/parsetime?iso=2013-08-10T12:10:15.474Z

  The JSON response should contain only 'hour', 'minute' and 'second'
  properties. For example:

     {
       "hour": 14,
       "minute": 23,
       "second": 15
     }

  Add second endpoint for the path '/api/unixtime' which accepts the same
  query string but returns UNIX epoch time in milliseconds (the number of
  milliseconds since 1 Jan 1970 00:00:00 UTC) under the property 'unixtime'.
  For example:

     { "unixtime": 1376136615474 }

  Your server should listen on the port provided by the first argument to
  your program.
*/

var http = require('http');
var url = require('url');
var port = process.argv[2];

http.createServer(function (request, response) {
  var urlObject = url.parse(request.url, true),
  pathName = urlObject.pathname,
  startTime = urlObject.query.iso,
  result;
  if (pathName === '/api/unixtime') {
    result = getUnixTimeStamp(startTime);
  }
  else if (pathName === '/api/parsetime') {
    result = getTimeObj(startTime);
  }
  if (result) {
    response.writeHead(200, {'Content-Type': 'application/JSON'});
    response.end(JSON.stringify(result));
  }
  else {
    response.writeHead(404);
    response.end();
  }
}).listen(port)

function getUnixTimeStamp(startTime) {
  return {
    unixtime: getTimeStamp(startTime)
  };
}

function getTimeStamp(startTime) {
  return Date.parse(startTime);
}

function getTimeObj(startTime) {
  var date = new Date(getTimeStamp(startTime));
  return {
    hour: date.getHours(),
    minute: date.getMinutes(),
    second: date.getSeconds()
  };
}
