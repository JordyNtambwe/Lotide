const assertArraysEqual   = require('../assertArraysEqual');

// TEST CODE
assertArraysEqual([1, 2, 3], [1, 2, 3]); // should pass
assertArraysEqual([1, 2, 3], [1, 2, 4]); // should fail
assertArraysEqual([], []); // should pass
assertArraysEqual(["test", "123"], ["test", "123"]); // should pass
assertArraysEqual(["test", "123"], ["tes", "123"]);