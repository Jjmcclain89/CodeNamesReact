export default class ClientManager {
    constructor() {
        this.clients = new Map();
    }

    addClient(client) {
        this.clients.set(client.id, client);
    }

    clientSignIn(client, user) {
        this.clients.set(client.id, { ...client, user });
    }

    removeClient(client) {
        this.clients.delete(client.id);
    }

    getClients() {
        return this.clients.keys();
    }

    getUsers() {
        return this.clients
            .values()
            .filter(client => client.user)
            .map(client => client.user.userName);
    }
}
