import { Request, Response } from "express";
import { GeoService } from "../services/GeoService";

export class GeoController {
    async create(request: Request, response: Response) {
        const { latitude, longitude, email, desc } = request.body;

        const geoService = new GeoService();

        const location = await geoService.create({
            latitude,
            longitude,
            desc
        });

        return response.json(location);
    };

    async showByLocation(request: Request, response: Response) {
        const { id } = request.params;

        const geoService = new GeoService();

        const list = await geoService.listByLocation(id);

        return response.json(list);
    };

    async delete(request: Request, response: Response) {
        const { desc } = request.params;
        const { latitude, longitude } = request.body;

        const geoService = new GeoService();

        const geo = await geoService.delete(desc);

        return response.json(geo);
    };
};