export class User {
    name: string;
    email: string;
    password: string;
    role: string;
    constructor(user: {name: string, email: string, password: string, role: string}) {
        this.name = user.name
        this.email = user.email
        this.password = user.password
        this.role = user.role
    }
}
