import { Router } from "express";
import deviceService from "../services/deviceService.js";
import { isAuth } from "../middlewares/authMiddleware.js";

const homeController = Router();

//routes setup
homeController.get("/", async (req, res) => {
  const lastDevices = await deviceService.getLatest();

  res.render("home", { pageTitle: "Home", devices: lastDevices });
});

homeController.get("/about", (req, res) => {
  res.render("about");
});

homeController.get("/profile", isAuth, async (req, res) => {
  const ownDevices = await deviceService.getAll({ owner: req.user.id });
  const preferedDevices = await deviceService.getAll({
    preferedBy: req.user.id,
  });

  res.render("profile", { ownDevices, preferedDevices });
});

export default homeController;
