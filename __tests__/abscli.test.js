let { Greeter } = require('./../greet');
test('My Greeter', () => {
  expect(Greeter('Arpit')).toBe('Hello Arpit');
});
