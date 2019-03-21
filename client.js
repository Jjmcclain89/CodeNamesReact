var socket = io.connect('http://localhost:3000');

socket.on('news', function (data) {
    console.log(data);
});

const createGame = () => {
    console.log('newGame');
    socket.emit('newGame', { userID: 0 });
}
console.log("hey");