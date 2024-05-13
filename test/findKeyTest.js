const assert = require('chai').assert;
const assertEqual = require("../assertEqual");
const findKey = require("../findKey");

describe("#findKey", () => {

const result = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2);

assertEqual(result, "noma");

  it("should return noma for result", () => {
    assert.strictEqual(result, "noma");
  });

});