import { connectDB } from './lib/db';
import ClientManager from './managers/ClientManager';
import GameManager from './managers/GameManager';
import createHandlers from './lib/handlers';
import Game from './components/Game';
import { testGuessWord } from '../tests/tests';

const app = require('express')();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const port = 2323;
const clientManager = new ClientManager();
const gameManager = new GameManager();

io.on('connection', client => {
	const { handleSignIn, handleDisconnect } = createHandlers(
		client,
		clientManager,
		gameManager
	);

	clientManager.addClient(client);
	console.log(`Client "${client.id}" connected.`);

	client.on('signIn', handleSignIn);

	client.on('disconnect', handleDisconnect);

	client.on('createGame', handleCreateGame);

	client.on('joinGame', handleJoinGame);

    client.on('startGame', handleStartGame);
    
    client.on('giveClue', handleGiveClue);
});

server.listen(port, () => console.log(`listening on localhost:${port}`));

// testGuessWord();
