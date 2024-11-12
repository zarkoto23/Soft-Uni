function solve(arr){
class Cat{
  name;
  age;

  constructor(name,age){
    this.name=name
    this.age=age
  }
  meow(){
    console.log(`${this.name}, age ${this.age} says Meow`)
  }
}

for (const cat of arr) {
  const [name, age]=cat.split(' ')

  const catttt=new Cat(name, age)
  catttt.meow()
}
}

solve(['Mellow 2', 'Tom 5'])