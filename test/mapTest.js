const assert = require('chai').assert;
const map = require("../map");

describe("#map", () => {

  it("should return ['g', 'c', 't', 'm', 't'] for (words, word => word[0])", () => {
    const words = ["ground", "control", "to", "major", "tom"];
    const expected = ["g", "c", "t", "m", "t"];
    assert.deepEqual(map(words, word => word[0]), expected);
  });

});