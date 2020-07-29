# Ray

An array re-implementation challenge.

Fork, clone, and `jest --watch-all` your way to glory.

### Introduction




### Tips

* This is a difficult assignment, but really, really cool to be able to do. Don't get too down on yourself, and DO give yourself a pat on the back no matter how far you get with it.
* Check MDN's documentation, it's very clear and helpful, and covers every single array method. [The MDN page on arrays](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) has some absolutely fantastic refresher on how arrays work, as well as links on the side to how every array method works (under "Array.prototype.push", "Array.prototype.includes", and so on).


### General Guidelines

* Don't make an array at any point in this project. We're going to roll our own, here!
* That said, you'll need square brackets for bracket notation, because variable and property names can't otherwise start with a number. You can't do any of the below:

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

* So if you can use numbers as property names by surrounding them with square brackets (which is what arrays are actually doing!), and you can refer to `this` and know it's our array-like object, then are you going to ace this assignment, or...


### Tasks

Tasks can be completed in any order, but they're in our recommended order. Here are some task-specific hints.

1. `length` is the easiest, and the only property we set directly. What should it start at? The key is going to be making sure that our other methods change the `.length` property appropriately.
2. `push` is the next easiest. You'll want to 1) take in a value, 2) set that value at the first index you haven't used yet, 3) and increment your `length` property by one. The key is that, if we're always incrementing `length` correctly, the next index/key for adding a value will be that `length` property!
3. `pop` has a different kind of challenge, as you'll be removing a value instead of adding one. You'll have to: 1) remove the value at the end (making sure you're deleting the key as well!), 2) decrement the `length` by 1, 3) return the value you removed. Oh, but you DID save that value, right? If not, time to make some changes back there!
4. `.includes` and `.indexOf` are totally different. We're going to have to loop through all of our indices, in order, so that we can find where/whether the given value occurs. Where should our `i` start? Where should it end?
4. `unshift` and `shift` are entirely different. Sure, you're adding and removing, but you'll have to adjust the indices of the other values. If you add at index 0 with `unshift`, you'll need to `push` what WAS at index 0 to index 1, what was at index 1 to index 2, and so on. Loops to the rescue! `shift` is similar, but also... different. You'll need to remove from index 0 (saving it to return!), and then move everything DOWN one index.


### Stretch Goals

That was all hard enough, but if you finish, there are many, MANY array methods worth implementing. We have no tests for these, so you'll have to try them out manually! Here are the ones we'd recommend trying out:

* `lastIndexOf`
* `reverse`
* `slice`
* `concat`
* `join`
* `fill`
