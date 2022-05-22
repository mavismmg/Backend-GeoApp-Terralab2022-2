import { EntityRepository, Repository } from "typeorm";
import { Geo } from "../entities/Geo"

@EntityRepository(Geo)
export class GeoRepository extends Repository<Geo> {};