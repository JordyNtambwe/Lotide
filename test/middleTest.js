const assert = require('chai').assert;
const middle = require('../middle');

describe("#middle", () => {
  it("should return [5, 6] for [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), [5, 6]);
  });
});

// // TEST CODE
// assertArraysEqual(middle([1]), []) 
// assertArraysEqual(middle([1, 2]), [])
// assertArraysEqual(middle([1, 2, 3]), [2])
// assertArraysEqual(middle([1, 2, 3, 4, 5]), [3])
// assertArraysEqual(middle([1, 2, 3, 4]), [2, 3])
// assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4])