import React, { Component } from 'react';
import Lobby from '../components/Lobby';
import GameBoard from '../components/GameBoard';

class Home extends Component {
    render() {
        // return <Lobby />;
        return <GameBoard />;
    }
}

export default Home;
