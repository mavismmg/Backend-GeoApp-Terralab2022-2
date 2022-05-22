import { Router } from "express";
import { GeoController } from "./controllers/GeoController";
import { UsersController } from "./controllers/UsersController";

const routes = Router();

const geoController = new GeoController();
const usersController = new UsersController();

routes.post("/locations", geoController.create);
routes.post('/users', usersController.create)

export { routes };