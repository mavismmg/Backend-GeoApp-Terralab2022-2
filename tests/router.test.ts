import { Router } from "express";
import { GeoController } from "./controllers/GeoController.test";
import { UsersController } from "./controllers/UsersController.test";

const routes = Router();

const geoController = new GeoController();
const usersController = new UsersController();

routes.post("/locations", geoController.create);
routes.post('/users', usersController.create)

export { routes };