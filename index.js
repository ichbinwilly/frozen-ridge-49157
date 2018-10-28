//event.js 文件
var EventEmitter = require('events').EventEmitter; 
var event = new EventEmitter(); 
event.on('some_event', function() { 
    console.log('some_event triggered'); 
}); 
setTimeout(function() { 
    event.emit('some_event'); 
}, 5000); 

//blocking example
var fs = require("fs");
var data = fs.readFileSync('input.txt');
console.log(data.toString());
console.log("程序?行?束!");