import authController from "./src/controllers/authController.js";
import castController from "./src/controllers/castController.js";
import homeController from "./src/controllers/homeController.js";
import movieControllerRouter from "./src/controllers/movieController.js";

import { Router } from "express";

const routes = Router();

routes.use(homeController);
routes.use("/movies", movieControllerRouter);
routes.use('/casts',castController)
routes.use('/auth', authController)

export default routes;
