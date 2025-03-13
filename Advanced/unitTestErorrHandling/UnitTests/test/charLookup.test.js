import { expect } from "chai";
import { lookupChar } from "../charLookup.js";

describe("invalid input", () => {
  it("invalid type of input", () => {
    expect(lookupChar(1, 4)).to.be.equal(undefined);
    expect(lookupChar("asd", "2")).to.be.equal(undefined);
    expect(lookupChar({pesho:'gosho'})).to.be.equal(undefined);
    expect(lookupChar(['asd',2])).to.be.equal(undefined);
    expect(lookupChar("asd", 1.5)).to.be.equal(undefined);



  });

  it("invalid value of input", () => {
    expect(lookupChar("asd", 3)).to.be.equal("Incorrect index");
    expect(lookupChar("asd", 4)).to.be.equal("Incorrect index");
    expect(lookupChar("asd", -1)).to.be.equal("Incorrect index");

  });
  it("happy path", () => {
    expect(lookupChar("asd", 2)).to.be.equal("d");
    expect(lookupChar("asd", 1)).to.be.equal("s");
    expect(lookupChar("asd", 0)).to.be.equal("a");
  });
});
