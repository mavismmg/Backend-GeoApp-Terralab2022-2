import { Entity, EntityRepository, Repository } from "typeorm";
import { User } from "../entities/User.test"

@EntityRepository(User)
export class UsersRepository extends Repository<User> {};