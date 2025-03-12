import { sum } from "../sumOfNumbers.js";
import {expect} from "chai"


describe('Happy path',()=>{
  it('Should return the real sum', ()=>{
  const input=[1,2,3]
  const realResult=6
  const result=sum(input)
  expect(realResult).to.equal(result)
})
})
