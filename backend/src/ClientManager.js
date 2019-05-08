export default class ClientManager {
    constructor(clients = []) {
        this.clients = clients;
    }
    addClient(client) {
        this.clients.push(client);
    }

    clientSignIn(client, user) {
        this.clients.push({ ...client, user });
    }

    removeClient(client) {
        this.clients = this.clients.filter(c => c.id != client.id);
    }

    getClients() {
        return this.clients.map(cl => cl.id);
    }

    getUsers() {
        return this.clients;
        // .filter(client => client.user)
        // .map(client => client.user.userName);
    }
}
