import { User } from '../../entities/User/User'
import { addUserDto } from '../UserRepository/dto/addUserDto'

export interface UserRepository {
    add(dto: addUserDto): User;
}