import UserModel from '../models/user.module'

class User {

    private email: string = ''
    private password: string = ''

    constructor(email: string, password: string) {
        this.email = email
        this.password = password
    }

    public greeting() {
        return `Hello, my email is ${this.email}`
    }

    async saveUser() {
        const user = await UserModel.create({
            email: this.email,
            password: this.password
        });

    }

    async getAllUsers(){
        const allUsers = await UserModel.findAll();
        return await allUsers
    }

}

export { User };

