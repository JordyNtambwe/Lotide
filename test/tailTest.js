const assert = require('chai').assert;
const tail = require("../tail");
const assertEqual = require("../assertEqual");

const words = ["Yo Yo", "Lighthouse", "Labs"];
const results = tail(["Hello", "Lighthouse", "Labs"]);

describe("#tail", () => {
  it("returns 3 for [Yo Yo, Lighthouse, Labs]", () => {
    assert.strictEqual(words.length, 3);
  });
  it("returns Lighthouse for tail([Hello, Lighthouse, Labs])", () => {
    assert.strictEqual(results[1], "Labs");
  });
  it("returns 0 for tail([Hello, Lighthouse, Labs])", () => {
    assert.strictEqual(tail([]).length, 0);
  });

});
