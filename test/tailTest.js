const assert = require('chai').assert;
const tail = require("../tail");

describe("#tail", () => {
  it("original array length remains the same after tail function is called", () => {
    const words = ["Yo Yo", "Lighthouse", "Labs"];
    tail(words);
    assert.deepEqual(words.length, 3);
  });
  it("returns ['Lighthouse', 'Labs'] for tail(['Hello', 'Lighthouse', 'Labs'])", () => {
    const results = tail(["Hello", "Lighthouse", "Labs"]);
    assert.deepEqual(results, ["Lighthouse", "Labs"]);
});
  it("returns 0 for tail([]).length", () => {
    assert.deepEqual(tail([]).length, 0);
  });

});
