Simple use of exports,

```js
// --  hello.js
exports.anything = function() {
  console.log('I am anything.');
};
```


```js
// -- hello-runner.js
const hello = require('./hello');

// let's see what's there in hello variable
console.log(hello); // {anything: Function}

hello.anything(); // I am anything.
```


Similar use of module.exports

```js

// --  hello.js
module.exports.anything = function() {
  console.log('I am anything.');
};
```

```js
// -- hello-runner.js
const hello = require('./hello');

// let's see what's there in hello variable
console.log(hello); // {anything: Function}

hello.anything(); // I am anything.
```

Similar output.

So, what the difference ? 🤔


Exports is just module.exports's little helper. Your module returns module.exports to the caller ultimately, not exports. All exports does is collect properties and attach them to module.exports

BUT...

### IF module.exports doesn't have something on it already. If there's something attached to module.exports already, everything on exports is ignored.


```js
// -- hello.js
module.exports = {
  hi: function() {
    console.log('hi');
  },
};

// ALERT - this won't be exported.
exports.bye = function() {
  console.log('bye');
};
```


What if we assign a value to module.exports or exports ?


```js
// hello.js file
module.exports = {a: 1}
```


```js
// hello-runner.js

const hello = require('./hello');

console.log(hello); // {a: 1}
```

This works. but, direct assignment to exports variable doesn't work.

```js
// hello.js file
exports = {a: 1}
```

```js
// hello-runner.js
const hello = require('./hello');
console.log(hello); // { } 💥💥💥
```

^^ We haven't exported anything because exports variable has been reassigned and it's not referencing to the module.exports.



```js
// -- hello.js file
exports.hi = function(){
  console.log('hi');
}

module.exports.bye = function(){
  console.log('bye');
}
```

This works. We have exported both `hi` and `bye` functions.

More details - http://www.hacksparrow.com/node-js-exports-vs-module-exports.html


