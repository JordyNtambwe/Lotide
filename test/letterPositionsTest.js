const assert = require('chai').assert;
const letterPositions = require("../letterPositions");

describe("letterPositions", () => {

  const result = letterPositions("lighthouse in the house");

  it("should return [9, 16, 22] for result['e']", () => {
    assert.deepEqual(result['e'], [9, 16, 22]);
  });
  it("should return [3, 5, 15, 18] for result['h']", () => {
    assert.deepEqual(result['h'], [3, 5, 15, 18]);
  });
  it("should return [2] for result['g']", () => {
    assert.deepEqual(result['g'], [2]);
  });
  it("should return [8, 21] for result['s']", () => {
    assert.deepEqual(result.s, [8, 21]);
  });

});