import openSocket from 'socket.io-client';

const BACKEND_URL = `localhost:2323`;

export const openSocketToServer = () => {
    const socket = openSocket(BACKEND_URL);
    socket.on("serverState", (data) => {
        console.log(data);
    })
    return socket;
} 

export const logIn = (socket, user) => {
    socket.emit("logIn", user);
}