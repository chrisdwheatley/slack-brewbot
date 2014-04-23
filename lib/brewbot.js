'use strict';

var url = require('url');
var http = require('http');

var args = require('minimist')(process.argv.slice(2));

var portDecider = function portDeciderFn(args) {
  if (args.p) {
    return args.p
  } else if (args.port) {
    return args.port
  } else {
    return '8080';
  };
};

var server = http.createServer(function(req, res) {
    
  var uri = url.parse(req.url).pathname;
  var date = new Date();
  var people = args._;
  
  /**
   * choose a random person from the array of people passed through
   * in the command line arguments
   */
  var person = people[Math.floor(Math.random() * people.length)];
  
  /**
   * add the chosen person to a string of pre built responses
   */
  var responses = [
    person + ', I choose you!',
    person + ', I choo choo choose you.',
    'You\'re the chosen one, ' + person + '.',
    '3...\n2...\n1...\n' + person + ' it\s you!',
    'It\'s your lucky day ' + person + '!'
  ];
  
  /**
   * choose a random response to output
   */
  var response = responses[Math.floor(Math.random() * responses.length)];
  
  /**
   * generic responses
   */
  var helpResponse = 'See https://github.com/swirlycheetah/slack-brewbow for instructions.';
  var errorResponse = 'Sorry, the url associated to this command doesn\'t exist. Please check your team integration settings.';
  
  /**
   * allow multiple responses depending upon the uri requested through slack
   */
  if(uri === '/') {
    res.end(JSON.stringify({ "text": response }));
    console.log('Request made at ' + date + '. ' + person + ' was chosen.');
  } else if(uri === '/help') {
    res.end(JSON.stringify({ "text": helpResponse }));
    console.log('Help request made at ' + date + '.');
  } else {
    res.end(JSON.stringify({ "text": errorResponse }));
    console.log('Error request made at ' + date + '.');
  }
  
  res.writeHead(200, {'Content-Type': 'application/json'});
    
});

server.listen(portDecider(args));
