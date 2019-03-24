import React, { useState } from "react";

function GameList(props){
    const [gameList, setGameList] = useState([{id:0},{id:1}]);

    return (
        <ul>
            {gameList.map(game => <li key={game.id}>{game.id}</li>)}
        </ul>
    )
}

export default GameList;