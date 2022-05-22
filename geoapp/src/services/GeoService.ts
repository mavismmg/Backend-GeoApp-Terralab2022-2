import { getCustomRepository, Repository } from "typeorm";
import { Geo } from "../entities/Geo.js";
import { GeoRepository } from "../repositories/GeoRepository";

interface IGeoCreate {
    latitude: string;
    longitude: string;
    desc?: string;
};

export class GeoService {
    private geoRepository: Repository<Geo>;

    constructor() {
        this.geoRepository = getCustomRepository(GeoRepository);
    };

    async create({ latitude, longitude, desc } : IGeoCreate) {
        const location = await this.geoRepository.create({
            latitude,
            longitude,
            desc
        })

        await this.geoRepository.save(location);

        return location;
    };

    async listByLocation(email: string) {
        const list = await this.geoRepository.find({
            where: { email }
        });

        return list;
    };
};