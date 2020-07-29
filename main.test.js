const Ray = require('./main.js')

describe('Ray', () => {
  it('returns an object', () => {
    const ray = Ray();
    expect(typeof ray).toBe('object');
  })
})

describe('Ray.length', () => {
  it(`begins at 0`, () => {
    const ray = Ray();
    expect(ray.length).toBe(0);
  })
})

describe('Ray.push', () => {
  it(`is a method`, () => {
    const ray = Ray();
    expect(typeof ray.push).toBe('function')
  })

  it(`puts the given value as a value in the returned object`, () => {
    const ray = Ray();
    ray.push(3);
    expect(Object.values(ray).includes(3)).toBe(true);
    ray.push(5);
    expect(Object.values(ray).includes(5)).toBe(true);
  })

  it(`increments the length by 1`, () => {
    const ray = Ray();
    ray.push(7);
    expect(ray.length).toBe(1);
    ray.push(11);
    expect(ray.length).toBe(2);
    ray.push(11);
    expect(ray.length).toBe(3);
  })

  it(`puts the given value at the first available number key`, () => {
    const ray = Ray();
    ray.push(7);
    expect(ray[0]).toBe(7);
    ray.push(11);
    expect(ray[1]).toBe(11);
  })
})

describe('Ray.pop', () => {
  it(`is a method`, () => {
    const ray = Ray();
    expect(typeof ray.pop).toBe('function')
  })

  it(`decrements the length by 1`, () => {
    const ray = Ray();
    ray[0] = 5;
    ray[1] = 5;
    ray.length = 2;
    ray.pop();
    expect(ray.length).toBe(1)
    ray.pop();
    expect(ray.length).toBe(0)
  })


  it(`removes the value at the highest used number key`, () => {
    const ray = Ray();
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
    const ray = Ray();
    ray[0] = 15;
    ray[1] = 51;
    ray.length = 2;
    const removed1 = ray.pop();
    expect(removed1).toBe(51)
    const removed2 = ray.pop();
    expect(removed2).toBe(15);
  })
})

describe('Ray.includes', () => {
  it('returns true if the given value is a element in the object', () => {
    const ray = Ray();
    ray[0] = 'hello';
    ray[1] = 'oh hi';
    ray[2] = 'goodnight';
    ray.length = 3;

    expect(ray.includes('hello')).toBe(true);
    expect(ray.includes('oh hi')).toBe(true);
    expect(ray.includes('goodnight')).toBe(true);
  })

  it('returns false if the given value is not an element in the object', () => {
    const ray = Ray();
    ray[0] = 'hello';
    ray[1] = 'oh hi';
    ray[2] = 'goodnight';
    ray.length = 3;

    expect(ray.includes('nope')).toBe(false);
    expect(ray.includes('not in here')).toBe(false);
    expect(ray.includes('no one here but us chickens')).toBe(false);
  })

  it('returns false even if the given value is within an element in the object', () => {
    const ray = Ray();
    ray[0] = 'hello';
    ray[1] = 'hi';
    ray[2] = 'goodnight';
    ray.length = 3;

    expect(ray.includes('hello there')).toBe(false);
    expect(ray.includes('oh hi')).toBe(false);
    expect(ray.includes('goodnight sweet prince')).toBe(false);
  })
})

describe('Ray.indexOf', () => {
  it('returns the index (key) at which the given value occurs in the object', () => {
    const ray1 = Ray();
    const ray2 = Ray();
    ray1[0] = 'Michaelangelo';
    ray1[1] = 'Leonardo';
    ray1[2] = 'Rafael';
    ray1[3] = 'Donatello';
    ray1.length = 4;
    ray2[0] = 'Gaugin';
    ray2[1] = 'Rodin';
    ray2[2] = 'Dali';
    ray2[3] = 'Degas';
    ray2[4] = 'Goya';
    ray2.length = 5;
    expect(ray1.indexOf('Rafael')).toBe(2);
    expect(ray1.indexOf('Michaelangelo')).toBe(0);
    expect(ray2.indexOf('Rodin')).toBe(1);
    expect(ray2.indexOf('Goya')).toBe(4);
  })

  it('returns -1 if the value is not at any key in the object', () => {
    const ray1 = Ray();
    const ray2 = Ray();
    ray1[0] = 'Michaelangelo';
    ray1[1] = 'Leonardo';
    ray1[2] = 'Rafael';
    ray1[3] = 'Donatello';
    ray1.length = 4;
    ray2[0] = 'Gaugin';
    ray2[1] = 'Rodin';
    ray2[2] = 'Dali';
    ray2[3] = 'Degas';
    ray2[4] = 'Goya';
    ray2.length = 5;
    expect(ray1.indexOf('Splinter')).toBe(-1);
    expect(ray1.indexOf('Warhol')).toBe(-1);
    expect(ray2.indexOf('Shredder')).toBe(-1);
    expect(ray2.indexOf('Banksy')).toBe(-1);
  })
})

describe('Ray.shift', () => {
  it(`is a method`, () => {
    const ray = Ray();
    expect(typeof ray.shift).toBe('function')
  })

  it(`decrements the length by 1`, () => {
    const ray = Ray();
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
    const ray = Ray();
    ray[0] = 7;
    ray[1] = 11;
    ray.length = 2;
    ray.shift();
    expect(ray[1]).toBe(undefined);
  })

  it(`pushes all elements but the first to a key one lower`, () => {
    const ray = Ray();
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
    const ray = Ray();
    ray[0] = 15;
    ray[1] = 51;
    ray.length = 2;
    const removed1 = ray.shift();
    expect(removed1).toBe(15)
    const removed2 = ray.shift();
    expect(removed2).toBe(51);
  })
})

describe('Ray.unshift', () => {
  it(`is a method`, () => {
    const ray = Ray();
    expect(typeof ray.unshift).toBe('function')
  })

  it(`puts the given value as a value in the returned object`, () => {
    const ray = Ray();
    ray.unshift(3);
    expect(Object.values(ray).includes(3)).toBe(true);
    ray.unshift(5);
    expect(Object.values(ray).includes(5)).toBe(true);
  })

  it(`increments the length by 1`, () => {
    const ray = Ray();
    ray.unshift(7);
    expect(ray.length).toBe(1);
    ray.unshift(11);
    expect(ray.length).toBe(2);
    ray.unshift(11);
    expect(ray.length).toBe(3);
  })

  it(`puts the given value at index 0`, () => {
    const ray = Ray();
    ray.unshift(7);
    expect(ray[0]).toBe(7);
    ray.unshift(11);
    expect(ray[0]).toBe(11);
  })

  it(`pushes all other values to the next index`, () => {
    const ray = Ray();
    ray.unshift(7);
    ray.unshift(11);
    ray.unshift(12);
    expect(ray[0]).toBe(12);
    expect(ray[1]).toBe(11);
    expect(ray[2]).toBe(7);
  })
})
