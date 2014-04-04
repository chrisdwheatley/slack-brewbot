'use strict';

var http = require('http');
var args = require('minimist')(process.argv.slice(2));

var server = http.createServer(function(req, res) {
  res.writeHead(200, {'Content-Type': 'application/json'});
  var date = new Date();
  var people = args._;
  var person = people[Math.floor(Math.random() * people.length)];
  var responses = [
    person + ', I choose you!',
    person + ', I choo choo choose you.',
    'You\'re the chosen one, ' + person + '.',
    '3...\n2...\n1...\n' + person + ' it\s you!',
    'It\'s your lucky day ' + person + '!'
  ];
  var response = responses[Math.floor(Math.random() * responses.length)];
  res.end(JSON.stringify({ "text": response}));
  console.log('Request made at ' + date + '. ' + person + ' was chosen.');
});

server.listen(8080, '0.0.0.0');
