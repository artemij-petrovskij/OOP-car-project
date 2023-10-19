import { User } from '../../entities/User/User'
import { addUserDto } from './dto/addUser.dto'
export interface UserRepository {
    add(dto: addUserDto): User;
}