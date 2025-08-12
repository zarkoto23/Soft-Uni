import { Router } from "express";
import deviceService from "../services/deviceService.js";

const homeController = Router();

//routes setup
homeController.get("/", async(req, res) => {

const lastDevices=await deviceService.getLatest()


  res.render("home", { pageTitle: "Home",devices:lastDevices });
  
});

homeController.get('/about',(req, res)=>{
  res.render('about')
})

export default homeController;
