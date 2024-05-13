const assert = require('chai').assert;
const tail = require("../tail");

const words = ["Yo Yo", "Lighthouse", "Labs"];
const results = tail(["Hello", "Lighthouse", "Labs"]);

describe("#tail", () => {
  it("original array length remains the same after tail function is called", () => {
    tail(words);
    assert.deepEqual(words.length, 3);
  });
  it("returns ['Lighthouse', 'Labs'] for tail(['Hello', 'Lighthouse', 'Labs'])", () => {
    assert.deepEqual(results, ["Lighthouse", "Labs"]);
});
  it("original array length remains the same after tail function is called", () => {
    assert.deepEqual(tail([]).length, 0);
  });

});
