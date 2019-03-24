import React, { useState } from "react";
import { openSocketToServer, logIn } from "../lib/socket";
import GameList from "./GameList";
import UserList from "./UserList";

function Lobby(props) {
    const [socket, setSocket] = useState(openSocketToServer());
    const [user, setUser] = useState({ userName: "lol" });

    function handleLogIn() {
        logIn(socket, user);
    }

    return (
        <div className="lobby">
            <div>Lobby!</div>
            <GameList />
            <UserList />
            <button onClick={handleLogIn}>Log In</button>
        </div>
    );
}

export default Lobby;
