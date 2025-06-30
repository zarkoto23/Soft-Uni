import homeController from "./src/controllers/homeController.js";
import movieControllerRouter from "./src/controllers/movieController.js";

import { Router } from "express";

const routes = Router();

routes.use(homeController);
routes.use("/movies", movieControllerRouter);

export default routes;
