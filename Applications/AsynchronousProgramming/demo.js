function proposal() {
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

proposal()
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log("problem catch");
  });

const proposalOne = proposal();
const proposalTwo = proposal();
const proposalThree = proposal();
const proposalFour = proposal();

const grup = Promise.all([
  proposalOne,
  proposalTwo,
  proposalThree,
  proposalFour,
]).then((result) => console.log(result))
.catch((errr) => console.log(errr))
.finally(()=>console.log('asdasdas'))
