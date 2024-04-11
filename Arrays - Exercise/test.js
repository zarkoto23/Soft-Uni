let health=80
let num=30

if (health + num > 100) {
    num = 100 - health;
    health = 100;
  } 
  console.log(num)