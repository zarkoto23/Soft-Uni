import { Router } from "express";

const routes=Router()

//routes setup
routes.get("/", (req, res) => {
  res.send("it works!");
});


export default routes