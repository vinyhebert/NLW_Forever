import { User } from "../entities/User"
import { getCustomRepository } from "typeorm"
import { UsersReporsitories } from "../repositories/UserRepositories"

interface IUserRequest {
    name: string;
    email: string;
    admin?: boolean //Opcional

}

class CreateUserService {
    async execute( { name, email, admin}: IUserRequest ) {
        const usersRepository = getCustomRepository(UsersReporsitories);

        if(!email) {
            throw new Error("Email incorrect")
        }

        const userAlreadyExists = await usersRepository.findOne({
            email
        })
        if(userAlreadyExists) {
            throw new Error("User already exists")
        }

        const user = usersRepository.create({
            name,
            email,
            admin,
        })

        await usersRepository.save(user);

        return user
    }
}


export { CreateUserService }