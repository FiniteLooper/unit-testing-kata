## Unit Testing

A way to validate that individual "units" of your code produce the expected results with a given set of inputs.

A quick example. Given this code:

```js
function addNumbers(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Invalid input!');
  }
  return a + b;
}
```

We could write unit tests to verify what the behavior should do and should not do

```js
it('should add valid numbers together', () => {
  expect(addNumbers(1, 1)).toEqual(2);
  expect(addNumbers(1, 2)).toEqual(3);
  expect(addNumbers(2, 2)).toEqual(4);
  expect(addNumbers(1, -1)).toEqual(0);
});

it('should throw errors for invalid input', () => {
  expect(addNumbers()).toThrow('Invalid input!');
  expect(addNumbers(1)).toThrow('Invalid input!');
  expect(addNumbers('foo', 'bar')).toThrow('Invalid input!');
});
```

This way whenever our code is updated we can run all these tests to validate that the previous/expected behavior still exists.
Essentially this is testing our business logic and NOT the implementation logic!

### Tips!

You can "focus" a test temporarily by prefixing the `it` function with an `f`. This means that ONLY focused tests will run when these are set.

```js
//only THIS test will run because it is focused!
fit('should add valid numbers together', () => {
  expect(addNumbers(1, 1)).toEqual(2);
});

it('should throw errors for invalid input', () => {
  expect(addNumbers()).toThrow('Invalid input!');
});
```

You can to the opposite by prefixing with an `x` to temporarily exclude that test

```js
//only THIS test will NOT run because it is excluded!
xit('should add valid numbers together', () => {
  expect(addNumbers(1, 1)).toEqual(2);
});

it('should throw errors for invalid input', () => {
  expect(addNumbers()).toThrow('Invalid input!');
});
```

You can do the same for `describe` blocks as well: `fdescribe` and `xdescribe`

These are useful when writing tests, but they should not go into the code repository this way.

### Frameworks

We will be using:

- Jasmine as our testing framework: https://jasmine.github.io
- Karma as our test runner: http://karma-runner.github.io
  - This uses a plugin to execute our code in the Chrome browser here

Angular uses these same frameworks by default, but there are many others to choose from.

## End-To-End Testing (E2E)

This is outside of the scope of this kata, but it's worth mentioning what this is.

> End-to-end testing is a software testing technique that verifies the functionality and performance of an entire software application from start to finish by simulating real-world user scenarios and replicating live data. Its objective is to identify bugs that arise when all components are integrated, ensuring that the application delivers the expected output as a unified entity.

This is what tests the full implementation or workflow, not individual units of code. Basically an example would be: log in, switch users, go to a timesheet, enter data, approve the timesheet, then log out. If all of these things happened as we expected, our test has passed! These can be very difficult to set up, but there is obviously a lot of value in doing so!

---

# [⬅ PREV (ReadMe)](README.md) | [NEXT (Luhn) ➡](02-Luhn.md)
