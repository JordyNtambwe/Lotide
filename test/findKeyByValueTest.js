const assert = require('chai').assert;
const findKeyByValue = require("../findKeyByValue");

describe("#findKeyByValue", () => {

  const bestTVShowsByGenre = {
    sci_fi: "The Expanse",
    comedy: "Brooklyn Nine-Nine",
    drama: "The Wire",
    };

  it("should return drama for (findKeyByValue(bestTVShowsByGenre, 'The Wire')", () => {
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, 'The Wire'), "drama");
  });
  it("should return undefined for (findKeyByValue(bestTVShowsByGenre, 'That '70s Show')", () => {
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, 'The Wire'), "drama");
  });

});