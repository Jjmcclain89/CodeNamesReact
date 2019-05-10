import React from "react";
import socket from "../lib/socket";
import GameList from "./GameList";
import UserList from "./UserList";

export default class Lobby extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            userName: "",
            // client: socket(),
            gameID: 0
        };
        // this.state.client.subscribeSocket();
        this.handleChange = this.handleChange.bind(this);
        this.handleSignIn = this.handleSignIn.bind(this);
        this.handleCreateGame = this.handleCreateGame.bind(this);
        this.handleJoinGame = this.handleJoinGame.bind(this);
        this.handleStartGame = this.handleStartGame.bind(this);
    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    handleSignIn() {
        this.state.client.signIn(this.state.userName);
    }

    handleCreateGame(){
        this.state.client.createGame();
    }
    
    handleJoinGame(){
        this.state.client.joinGame(this.state.gameID);
    }
    
    handleStartGame(){
        this.state.client.startGame(this.state.gameID);
    }

    render() {
        return (
            <div className="lobby">
                <div>
                    <a href="/">home</a>
                </div>
                <br />
                <div>
                    <input
                        id="userName"
                        name="userName"
                        type="text"
                        onChange={this.handleChange}
                        value={this.state.userName}
                    />
                    <button onClick={this.handleSignIn}>Sign In</button>
                </div>
                <div>
                    <button onClick={this.handleCreateGame}>New Game</button>
                </div>
                <div>
                    <input
                        id="gameID"
                        name="gameID"
                        type="number"
                        onChange={this.handleChange}
                        value={this.state.gameID}
                    />
                    <button onClick={this.handleJoinGame}>Join Game</button>
                </div>
                <div>
                    <button onClick={this.handleStartGame}>Start Game</button>
                </div>
            </div>
        );
    }
}
