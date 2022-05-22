import { Router } from "express";
import { GeoController } from "./controllers/GeoController";
import { UsersController } from "./controllers/UsersController";
import { UsersRepository } from "./repositories/UsersRepository";

const routes = Router();

const geoController = new GeoController();
const usersController = new UsersController();

routes.post("/locations", geoController.create);
routes.post('/users', usersController.create);

routes.delete("/users/:email", usersController.delete);
routes.delete("/locations/:desc", geoController.delete);

routes.get("/users/:email", usersController.findByEmail)

export { routes };