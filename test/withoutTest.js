const assert = require('chai').assert;
const without = require("../without");

describe("#without", () => {

  it("should return ['hello', 'world', 'lighthouse'] for words", () => {
    const words = ["hello", "world", "lighthouse"];
    without(words, ["lighthouse"]); 
    assert.deepEqual(words, ["hello", "world", "lighthouse"]);
  });
  it("should return [2, 3] for ([1, 2, 3], [1])", () => {
    assert.deepEqual(without([1, 2, 3], [1]), [2, 3]); 
  });
  it("should return ['1', '2'] for (['1', '2', '3'], [1, 2, '3'])", () => {
    assert.deepEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);
  });
  it("should return ['1', '2', '3'] for (['1', '2', '3'], [1, 2])", () => {
    assert.deepEqual(without(["1", "2", "3"], [1, 2]), ["1", "2", "3"]);
  });

});