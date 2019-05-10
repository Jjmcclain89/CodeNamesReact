import User from "../components/User";

export default class ClientManager {
    constructor() {
        this.users = new Map();
    }

    addClient(client) {
        let id = client.id,
            user = new User({ id, client });
        this.users.set(client.id, user);
        console.log(`Client "${client.id}" connected.`);
        client.join('test');
    }

    clientSignIn(client, { userName }) {
        this.users.get(client.id).userName = userName;
        console.log(`${userName} has signed in.`);
    }

    removeClient(client) {
        this.users.delete(client.id);
        console.log(`Client "${client.id}" disconnected.`);
    }

    getUserByID(id) {
        return this.users.get(id);
    }

    getClientIDs() {
        return new Array(...this.users.keys());
    }

    getUsers(getOnlyNames = false) {
        return Array.from(this.users.values())
            .filter(u => u.userName)
            .map(u => (getOnlyNames ? u.userName : u));
    }
}
