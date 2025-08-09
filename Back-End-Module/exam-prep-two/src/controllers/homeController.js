import { Router } from "express";

const homeController = Router();

//routes setup
homeController.get("/", (req, res) => {
  res.render("home", { pageTitle: "Home" });
});

export default homeController;
