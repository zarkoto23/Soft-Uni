function propose() {
  const promise = new Promise((resolve, reject) => {
    console.log("marry me ?");
    setTimeout(() => {
      if (Math.random() <0.5) {
        resolve("just married");
      } else {
        reject("bad proposal");
      }
    }, 3000);
  });
  return promise;
}

async function grup() {
  console.log('predi')
try{
  const result=await propose()
  console.log(result);
  
  console.log('sled')
}
catch{
  console.log('madafak')
}
}
grup()




