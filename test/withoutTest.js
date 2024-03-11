const assertArraysEqual = require('../assertArraysEqual')
const without = require('../without')

//TEST CODE #1
assertArraysEqual(without([1, 2, 3], [1]), [2,3])
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"])
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2", "3"]);

// TEST CODE #2
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); 
assertArraysEqual(words, ["hello", "world", "lighthouse"]);