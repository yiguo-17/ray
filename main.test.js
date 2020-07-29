const Ray = require('./main.js');

let ray;

beforeEach(() => {
  ray = Ray();
})

describe('Ray', () => {
  it('returns an object', () => {
    expect(typeof Ray()).toBe('object');
  })
})

describe('Ray.length', () => {
  it(`begins at 0`, () => {
    expect(ray.length).toBe(0);
  })
})

describe('Ray.push', () => {
  it(`is a method`, () => {
    expect(typeof ray.push).toBe('function')
  })

  it(`puts the given value as a value in the returned object`, () => {
    ray.push(3);
    expect(Object.values(ray).includes(3)).toBe(true);
    ray.push(5);
    expect(Object.values(ray).includes(5)).toBe(true);
  })

  it(`increments the length by 1`, () => {
    ray.push(7);
    expect(ray.length).toBe(1);
    ray.push(11);
    expect(ray.length).toBe(2);
    ray.push(11);
    expect(ray.length).toBe(3);
  })

  it(`puts the given value at the first available number key`, () => {
    ray.push(7);
    expect(ray[0]).toBe(7);
    ray.push(11);
    expect(ray[1]).toBe(11);
  })
})

describe('Ray.pop', () => {
  it(`is a method`, () => {
    expect(typeof ray.pop).toBe('function')
  })

  it(`decrements the length by 1`, () => {
    ray[0] = 5;
    ray[1] = 5;
    ray.length = 2;
    ray.pop();
    expect(ray.length).toBe(1)
    ray.pop();
    expect(ray.length).toBe(0)
  })


  it(`removes the value at the highest used number key`, () => {
    ray[0] = 5;
    ray[1] = 7;
    ray.length = 2;
    ray.pop();
    expect(ray[0]).toBe(5)
    expect(ray[1]).toBe(undefined);
    ray.pop();
    expect(ray[0]).toBe(undefined);
  })

  it(`returns the removed value`, () => {
    ray[0] = 15;
    ray[1] = 51;
    ray.length = 2;
    const removed1 = ray.pop();
    expect(removed1).toBe(51)
    const removed2 = ray.pop();
    expect(removed2).toBe(15);
  })
})

describe('Ray.unshift', () => {
  it(`is a method`, () => {
    expect(typeof ray.unshift).toBe('function')
  })

  it(`puts the given value as a value in the returned object`, () => {
    ray.unshift(3);
    expect(Object.values(ray).includes(3)).toBe(true);
    ray.unshift(5);
    expect(Object.values(ray).includes(5)).toBe(true);
  })

  it(`increments the length by 1`, () => {
    ray.unshift(7);
    expect(ray.length).toBe(1);
    ray.unshift(11);
    expect(ray.length).toBe(2);
    ray.unshift(11);
    expect(ray.length).toBe(3);
  })

  it(`puts the given value at index 0`, () => {
    ray.unshift(7);
    expect(ray[0]).toBe(7);
    ray.unshift(11);
    expect(ray[0]).toBe(11);
  })

  it(`pushes all other values to the next index`, () => {
    ray.unshift(7);
    ray.unshift(11);
    ray.unshift(12);
    expect(ray[0]).toBe(12);
    expect(ray[1]).toBe(11);
    expect(ray[2]).toBe(7);
  })
})

describe('Ray.shift', () => {
  it(`is a method`, () => {
    expect(typeof ray.shift).toBe('function')
  })

  it(`decrements the length by 1`, () => {
    ray[0] = 5;
    ray[1] = 'hello';
    ray[2] = false;
    ray.length = 3;
    ray.shift();
    expect(ray.length).toBe(2);
    ray.shift();
    expect(ray.length).toBe(1);
    ray.shift();
    expect(ray.length).toBe(0);
  })

  it(`removes the value and key at the previous last index`, () => {
    ray[0] = 7;
    ray[1] = 11;
    ray.length = 2;
    ray.shift();
    expect(ray[1]).toBe(undefined);
  })

  it(`pushes all elements but the first to a key one lower`, () => {
    ray[0] = 7;
    ray[1] = 11;
    ray[2] = 12;
    ray.length = 3;
    ray.shift();
    expect(ray[0]).toBe(11);
    expect(ray[1]).toBe(12);
    ray.shift();
    expect(ray[0]).toBe(12);
  })

  it(`returns the removed element`, () => {
    ray[0] = 15;
    ray[1] = 51;
    ray.length = 2;
    const removed1 = ray.shift();
    expect(removed1).toBe(15)
    const removed2 = ray.shift();
    expect(removed2).toBe(51);
  })
})
