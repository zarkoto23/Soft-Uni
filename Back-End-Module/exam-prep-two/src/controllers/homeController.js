import { Router } from "express";

const homeController=Router()

//routes setup
homeController.get("/", (req, res) => {
  res.render("home");
});


export default homeController