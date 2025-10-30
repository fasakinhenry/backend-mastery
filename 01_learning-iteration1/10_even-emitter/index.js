const EventEmitter = require('events');

const myFirstEmitter = new EventEmitter();

// Register a listener for the events
myFirstEmitter.on('greet', (name) => {
    console.log(`Hello ${name}`);
});

myFirstEmitter.emit('greet', "Fasakin Henry")
