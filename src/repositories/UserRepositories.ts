import { EntityRepository, Repository } from "typeorm"
import { User } from "../entities/User"

@EntityRepository(User)
class UsersReporsitories extends Repository<User>{

}

export { UsersReporsitories }