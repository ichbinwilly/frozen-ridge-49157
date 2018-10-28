//event.js ¤å¥ó
var EventEmitter = require('events').EventEmitter; 
var event = new EventEmitter(); 
event.on('some_event', function() { 
    console.log('some_event triggered'); 
}); 
setTimeout(function() { 
    event.emit('some_event'); 
}, 5000); 

//blocking example
console.log("Sync example");
var fs = require("fs");
var data = fs.readFileSync('input.txt');
console.log(data.toString());
console.log("program finished");

//non-blocking example
console.log("Async example");
fs.readFile('input.txt', function (err, data) {
    if (err) return console.error(err);
    console.log(data.toString());
});

console.log("program finished");
