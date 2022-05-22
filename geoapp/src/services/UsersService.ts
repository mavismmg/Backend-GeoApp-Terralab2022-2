import { getCustomRepository, Repository } from "typeorm";
import { User } from "../entities/User";
import { UsersRepository } from "../repositories/UsersRepository";

export class UsersService {
    private usersRepository : Repository<User>;

    constructor() {
        this.usersRepository = getCustomRepository(UsersRepository);
    }

    async create(email: string, username: string) {
        const userExists = await this.usersRepository.findOne({
            email
        });

        if (userExists) {
            return userExists;
        };

        const user = this.usersRepository.create({
            email,
            username
        });

        await this.usersRepository.save(user);

        return user;
    };

    async findByEmail(email: string) {
        const users = await this.usersRepository.findOne({
            email
        });

        return users;
    };

    async delete(email: string) {
        await this.usersRepository.createQueryBuilder()
        .delete()
        .from(User)
        .where("email = :email", { email })
        .execute();
    };
};