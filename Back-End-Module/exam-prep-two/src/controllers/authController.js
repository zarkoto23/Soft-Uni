import { Router } from "express";
import authService from "../services/authService.js";
import { isAuth } from "../middlewares/authMiddleware.js";
import { getErrorMessage } from "../utils/errorUtils.js";

const authController = Router();

authController.get("/login", (req, res) => {
  res.render("auth/login");
});
authController.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const token = await authService.login(email, password);
  res.cookie("auth", token, { httpOnly: true });
  res.redirect("/");
});

authController.get("/register", (req, res) => {
  res.render("auth/register");
});
authController.post("/register", async (req, res) => {
  const userData = req.body;
  try{
  const token = await authService.register(userData);
   res.cookie("auth", token, { httpOnly: true });
  res.redirect("/");
  }catch(error){
    res.render('auth/register',{error:getErrorMessage(error),user:userData})    
  }

 
});

authController.get("/logout", isAuth, (req, res) => {
  res.clearCookie("auth");
  res.redirect("/");
});

export default authController;
