import { EntityRepository, Repository } from "typeorm";
import { Geo } from "../entities/Geo.test"

@EntityRepository(Geo)
export class GeoRepository extends Repository<Geo> {};