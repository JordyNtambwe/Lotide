const assertEqual = require('../assertEqual');
const eqArrays   = require('../eqArrays');

// TEST CODE
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true)
assertEqual(eqArrays([1, 2, 3], [1, 2, 4]), false)
assertEqual(eqArrays([], []), true)
assertEqual(eqArrays(["test", "123"], ["test", "123"]), true)
assertEqual(eqArrays(["test", "123"], ["tes", "123"]), false)