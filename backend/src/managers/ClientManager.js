export default class ClientManager {
    constructor() {
        this.users = new Map();
    }

    addClient(client) {
        this.users.set(client.id, { client });
    }

    clientSignIn(client, userInfo) {
        this.users.set(client.id, { client, ...userInfo });
    }

    removeClient(client) {
        this.users.delete(client.id);
    }

    getUserByID(id){
        return this.users.get(id)
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
