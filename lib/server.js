var http = require('http');

var people = ['Chris', 'Nick', 'Jamie'];

var server = http.createServer(function(req, res) {
  res.writeHead(200, {'Content-Type': 'application/json'});
  res.end(JSON.stringify({"text": people[Math.floor(Math.random() * people.length)]}));
});

server.listen(8080, '0.0.0.0');
