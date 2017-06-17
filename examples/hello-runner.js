//hello.js
const hello = require('./hello');

// let's see what's there in hello variable
console.log(hello); // this ll be empty object {}

// this line with throw error.
hello.hi();

hello.bye();
