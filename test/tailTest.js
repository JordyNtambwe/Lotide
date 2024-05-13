const assert = require('chai').assert;
const tail = require("../tail");

const words = ["Yo Yo", "Lighthouse", "Labs"];
const results = tail(["Hello", "Lighthouse", "Labs"]);

describe("#tail", () => {
  it("returns 3 for words.length", () => {
    tail(words);
    assert.deepEqual(words.length, 3);
  });
  it("returns ['Lighthouse', 'Labs'] for tail(['Hello', 'Lighthouse', 'Labs'])", () => {
    assert.deepEqual(results, ["Lighthouse", "Labs"]);
});
  it("returns 0 for tail([]).length", () => {
    assert.deepEqual(tail([]).length, 0);
  });

});
