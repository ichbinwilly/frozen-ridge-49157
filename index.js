var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: false}));

// setting middleware of static file
app.use('/images', express.static(__dirname + '/images'));

var server = app.listen(5000, function () {
    console.log('Node server is running..');
});

//event.js ¤å¥ó
var EventEmitter = require('events').EventEmitter; 
var event = new EventEmitter(); 

event.on('some_event', function() { 
    console.log('some_event triggered'); 
}); 
setTimeout(function() { 
    event.emit('some_event'); 
}, 5000); 

var EventEmitter = require('events');

var crazy = new EventEmitter();

crazy.on('event1', function () {
    console.log('event1 fired!');
    process.nextTick(function () {
        crazy.emit('event2');
    });
});

crazy.on('event2', function () {
    console.log('event2 fired!');
    process.nextTick(function () {
        crazy.emit('event3');
    });

});

crazy.on('event3', function () {
    console.log('event3 fired!');
    process.nextTick(function () {
        crazy.emit('event1');
    });
});

crazy.emit('event1');
