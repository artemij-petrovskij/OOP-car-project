class User {
    public name: string = ''
    constructor(name: string) {
        this.name = name
    }
    public greeting() {
        return `Hello, my name is ${this.name}`
    }
}

export { User };