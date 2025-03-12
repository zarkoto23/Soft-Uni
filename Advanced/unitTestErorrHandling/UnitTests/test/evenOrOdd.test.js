import { isOddOrEven } from "../evenOrOdd.js";
import { expect, should } from "chai";

describe("happy path", () => {
  it("Should be undefined", () => {
    expect(isOddOrEven(NaN)).to.be.equal(undefined);
    expect(isOddOrEven(123)).to.be.equal(undefined);
    expect(isOddOrEven(1223)).to.be.equal(undefined);
    expect(isOddOrEven(["lapai"])).to.be.equal(undefined);
    expect(isOddOrEven([{ pesho: 'gosho', gosho: "tosho" }])).to.be.equal(
      undefined
    );
  });
  it("should be even", () => {
    expect(isOddOrEven("asdf")).to.be.equal("even");
  });
  it("should be odd", () => {
    expect(isOddOrEven("asd")).to.be.equal("odd");
  });
});
