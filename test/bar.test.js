import { describe, it } from "node:test";
import { strictEqual } from "node:assert";

import { Bar } from "../src/bar.ts";

describe("Bar", () => {
  it("should return 'bar' when calling bar()", () => {
    const bar      = new Bar();
    const actual   = bar.getA();
    const expected = 113;
    strictEqual(actual, expected);
  });
});
