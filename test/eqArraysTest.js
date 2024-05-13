const assert = require('chai').assert;
const eqArrays = require("../eqArrays");

describe("#eqArrays", () => {

  it("should return true for ([1, 2, 3], [1, 2, 3])", () => {
    assert.strictEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
  });
  it("should return false for ([1, 2, 3], [1, 2, 4])", () => {
    assert.strictEqual(eqArrays([1, 2, 3], [1, 2, 4]), false);
  });
  it("should return false for ([1, 2, 3], [1, '2', 3])", () => {
    assert.strictEqual(eqArrays([1, 2, 3], [1, '2', 3]), false);
  });
  it("should return true for (['1', '2', '3'], ['1', '2', '3'])", () => {
    assert.strictEqual(eqArrays(['1', '2', '3'], ['1', '2', '3']), true);
  });

});