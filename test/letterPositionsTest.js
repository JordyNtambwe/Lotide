const assertArraysEqual = require('../assertArraysEqual')
const letterPositions = require('../letterPositions')

// TEST CODE
assertArraysEqual((letterPositions("hello").e), [1]);
assertArraysEqual((letterPositions("hello").l), [2, 3]);
assertArraysEqual((letterPositions("hello").h), [1]);