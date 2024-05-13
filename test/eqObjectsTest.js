const assert = require('chai').assert;
const eqObjects = require("../eqObjects");

describe("#eqObjects", () => {

  const anotherShirtObject = { size: "medium", color: "red" };
  const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
  const longSleeveMultiColorShirtObject = { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
  const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };
  const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
  const shirtObject = { color: "red", size: "medium" };

  it("should return true for (shirtObject, anotherShirtObject)", () => {
    assert.strictEqual(eqObjects(shirtObject, anotherShirtObject), true);
  });
  it("should return false for (shirtObject, longSleeveShirtObject)", () => {
    assert.strictEqual(eqObjects(shirtObject, longSleeveShirtObject), false);
  });
  it("should return true for (multiColorShirtObject, anotherMultiColorShirtObject)", () => {
    assert.strictEqual(eqObjects(multiColorShirtObject, anotherMultiColorShirtObject), true);
  });
  it("should return false for (multiColorShirtObject, longSleeveMultiColorShirtObject)", () => {
    assert.strictEqual(eqObjects(multiColorShirtObject, longSleeveMultiColorShirtObject), false);
  });

});