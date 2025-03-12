import { isSymmetric } from "../chekFor.js";
import { expect } from "chai";

describe('isSymetricArr',()=>{
  it('happy path',()=>{
    const input=[1,1,2,2,1,1]
    expect(isSymmetric(input)).to.be.true
  })
  it('invalid input',()=>{
    expect(isSymmetric('121')).to.be.false
  })
  it('invalid input',()=>{
    expect(isSymmetric('asa')).to.be.false
  })
  it('invalid input',()=>{
    expect(isSymmetric(1,2,1)).to.be.false
  })
  it('invalid input',()=>{
    expect(isSymmetric(NaN)).to.be.false
  })
  it('invalid input',()=>{
    expect(isSymmetric([1,2,'1'])).to.be.false
  })


})