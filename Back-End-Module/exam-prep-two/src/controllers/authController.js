import { Router } from "express";
import authService from "../services/authService.js";
import { isAuth, isGuest } from "../middlewares/authMiddleware.js";
import { getErrorMessage } from "../utils/errorUtils.js";

const authController = Router();

authController.get("/login",isGuest, (req, res) => {
  res.render("auth/login", { pageTitle: "Login" });
});
authController.post("/login", isGuest,async (req, res) => {
  const { email, password } = req.body;
  try {
    const token = await authService.login(email, password);
    res.cookie("auth", token, { httpOnly: true });
    res.redirect("/");
  } catch (error) {
    res.render(
      "auth/login",
      { error: getErrorMessage(error), user: { email } },
      { pageTitle: "Login" }
    );
  }
});

authController.get("/register",isGuest, (req, res) => {
  res.render("auth/register", { pageTitle: "Register" });
});
authController.post("/register",isGuest, async (req, res) => {
  const userData = req.body;
  try {
    const token = await authService.register(userData);
    res.cookie("auth", token, { httpOnly: true });
    res.redirect("/");
  } catch (error) {
    res.render(
      "auth/register",
      { error: getErrorMessage(error), user: userData },
      { pageTitle: "Register" }
    );
  }
});

authController.get("/logout", isAuth, (req, res) => {
  res.clearCookie("auth");
  res.redirect("/");
});

export default authController;
