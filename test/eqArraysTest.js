const assertEqual = require("../assertEqual");
const eqArrays = require("../eqArrays");

// TEST CODE
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 2, 3], [1, 2, 4]), false);
assertEqual(eqArrays([1, 2, 3], [1, "2", 3]), false);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);