/*  Write a TCP time server!

  Your server should listen to TCP connections on the port provided by the
  first argument to your program. For each connection you must write the
  current date & 24 hour time in the format:

     "YYYY-MM-DD hh:mm"

  followed by a newline character. Month, day, hour and minute must be
  zero-filled to 2 integers. For example:

     "2013-07-06 17:42"

  After sending the string, close the connection.
  */

var net = require('net');
var port = process.argv[2];

var server = net.createServer(function (socket) {
  socket.end(getFormattedDate() + '\n')
});
server.listen(port);

function getFormattedDate() {
  var today = new Date();
  return [today.getFullYear(),
    formatNumber(today.getMonth() + 1),
    formatNumber(today.getDate())].join('-') +
    ' ' +
    [formatNumber(today.getHours()),
    formatNumber(today.getMinutes())].join(':');
};

function formatNumber(number) {
  return number < 10 ? '0' + number : number;
};
