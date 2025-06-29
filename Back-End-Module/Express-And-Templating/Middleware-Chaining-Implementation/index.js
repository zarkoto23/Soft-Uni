import middlewareChain from "./middleware-chain.js";

middlewareChain.use((req, res, next) => {
  console.log("firstMiddle");
  req.user = "GOSHOFirst";

  next();
});

middlewareChain.use((req, res, next) => {
  console.log("secondMid");
  req.age = 20;
  next();
});

middlewareChain.use((req, res) => {
  console.log("third");
  console.log(req)
});

middlewareChain.execute([]);
