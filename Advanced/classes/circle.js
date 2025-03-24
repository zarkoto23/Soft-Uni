class Circle{

  constructor(radius){
    this._radius=radius
  }
  get r(){
    return this._radius
  }
  set r(value){
    if(value<0){
      throw new RangeError('Radius must be positive number')
    }if(!typeof(value)!='number')
      throw new TypeError('Radius must be a type Number')
  }
  get d(){
    return this._radius*2
  }
  set d(value){
    this._radius=value/2
  }

  get area(){
    return Math.PI * this._radius ** 2;
  }
}
const myCircle=new Circle(2)
console.log(myCircle.r)
console.log(myCircle.d)
console.log(myCircle.area)
