import { UserRepository } from "../../repositories/UserRepository/UserRepository";

export class UserService {
    constructor(readonly userRepository: UserRepository) { }

    async createNewUser(dto: any) {
        const newUser = this.userRepository.add({ email: dto.email, password: dto.password })
    }
}

//const test = new imlp(new 'email', 'pass')