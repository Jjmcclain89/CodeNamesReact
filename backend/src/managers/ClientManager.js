import User from "../components/User";

export default class ClientManager {
    constructor() {
        this.users = new Map();
    }

    addClient(client) {
        let id = client.id,
            user = new User({ id, client });
        this.users.set(client.id, user);
    }

    clientSignIn(client, { userName }) {
        this.users.get(client.id).userName = userName;
    }

    removeClient(client) {
        this.users.delete(client.id);
    }

    getUserByID(id) {
        return this.users.get(id);
    }

    getClients() {
        return new Array(...this.users.keys());
    }

    // getUsers() {
    //     return this.clients
    //         .values()
    //         .filter(client => client.user)
    //         .map(client => client.user.userName);
    // }
}
