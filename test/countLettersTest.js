const assert = require('chai').assert;
const countLetters = require('../countLetters');

describe("#countLetters", () => {

  const result = countLetters("lighthouse in the house");

  it("should return 4 for ['h']", () => {
    assert.strictEqual(result['h'], 4);
  });
  it("should return undefined for ['a']", () => {
    assert.strictEqual(result['a'], undefined);
  });
  it("should return 2 for ['o']", () => {
    assert.strictEqual(result['o'], 2);
  });

});