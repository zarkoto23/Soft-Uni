import { mathEnforcer } from "../mathEncoder.js";
import { expect } from "chai";

describe('mathEnforces',function(){

  describe('adFive',function(){
    it('should return correct result with a non number parameter',()=>{
      expect(mathEnforcer.addFive('hello')).to.be.undefined
      expect(mathEnforcer.addFive([1,2,3])).to.be.undefined
      expect(mathEnforcer.addFive({name:'pesho'},{gosho:'asasdd'})).to.be.undefined
    })
    it('correct result',()=>{
      expect(mathEnforcer.addFive(5)).to.be.equal(10)
      expect(mathEnforcer.addFive(1.5)).to.be.closeTo(6.5,0.01)
      expect(mathEnforcer.addFive(-5)).to.be.equal(0)
      expect(mathEnforcer.addFive(-10)).to.be.equal(-5)
    })

  })

  describe('subtractTen',function(){
    it('should return correct result with a non number parameter',()=>{
      expect(mathEnforcer.subtractTen('hello')).to.be.undefined
      expect(mathEnforcer.subtractTen([1,2,3])).to.be.undefined
      expect(mathEnforcer.subtractTen({name:'pesho'})).to.be.undefined
    })
    it('correct result',()=>{
      expect(mathEnforcer.subtractTen(5)).to.be.equal(-5)
      expect(mathEnforcer.subtractTen(1.5)).to.be.closeTo(-8.5,0.01)
      expect(mathEnforcer.subtractTen(-5)).to.be.equal(-15)
      expect(mathEnforcer.subtractTen(-10)).to.be.equal(-20)
    })

  })


  describe('sum',function(){
    it('should return correct result with a non number parameter',()=>{
      expect(mathEnforcer.sum('hello',5)).to.be.undefined
      expect(mathEnforcer.sum([1,2,3],'asd')).to.be.undefined
      expect(mathEnforcer.sum({name:'pesho'},{name:'gosho'})).to.be.undefined
      expect(mathEnforcer.sum(1,'')).to.be.undefined
      expect(mathEnforcer.sum('','')).to.be.undefined


    })
    it('correct result',()=>{
      expect(mathEnforcer.sum(5,1)).to.be.equal(6)
      expect(mathEnforcer.sum(1.5,1)).to.be.closeTo(2.5,0.01)
      expect(mathEnforcer.sum(-5,-2)).to.be.equal(-7)
      expect(mathEnforcer.sum(-10,10)).to.be.equal(0)
      expect(mathEnforcer.sum(1.5,1.6)).to.be.closeTo(3.1,0.01)

    })

  })




})