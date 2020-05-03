const { describe, it, expect } = require("./index");

describe("booleans", () => {
  it("false === false", () => {
    expect(false).toBe(false);
  });

  it("false !== true", () => {
    expect(false).notToBe(true);
  });
});
