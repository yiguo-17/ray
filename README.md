# Ray

An array re-implementation challenge.

```bash
npm install
npm test
```

### General Guidelines

* Don't make an array at any point in this project. We're going to roll our own, here!
* That said, you'll need square brackets, because variable and property names can't otherwise start with a number. You can't do any of the below:

```javascript
const 1st = `nope, variable names can't start with a number`;
someObj.2nd = 'nor can property names';
someObj.0 = `and so they certainly can't entirely be a number!`
```

But you can do this:

```javascript
someObj[0] = 'first thing';
someObj[1] = 'second thing';
```

* So if you can use indices as property names as long as you use square brackets (which is what arrays are actually doing!), what is the object whose properties/indices we're changing? Well... how can we refer to the whole object within an object's method? You'll find that answer on the internet or in your heart. 
