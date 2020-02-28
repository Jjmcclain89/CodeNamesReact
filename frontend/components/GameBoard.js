import styled from 'styled-components';
import { useState } from 'react';
import Word from './Word';
import { Consumer } from './ThemeContext';

const StyledGameBoard = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 16px;
    min-height: 500px;
    max-width: 835px;
    border-radius: ${props => props.theme.borderRadius};
`;

const GameBoard = props => {
    const [words, setWords] = useState([
        { word: '1', team: 0 },
        { word: '2', team: 1 },
        { word: '3', team: 0 },
        { word: '4', team: 0 },
        { word: '5', team: 0 },
        { word: '6', team: 0 },
        { word: '7', team: 0 },
        { word: '8', team: 2 },
        { word: '9', team: 0 },
        { word: '10', team: 1 },
        { word: '11', team: 0 },
        { word: '12', team: 0 },
        { word: '13', team: 2 },
        { word: '14', team: 0 },
        { word: '15', team: 1 },
        { word: '16', team: 0 },
        { word: '17', team: 0 },
        { word: '18', team: 2 },
        { word: '19', team: 0 },
        { word: '20', team: 1 },
        { word: '21', team: 0 },
        { word: '22', team: 0 },
        { word: '23', team: 2 },
        { word: '24', team: 0 },
        { word: '25', team: 1 }
    ]);
    const [activeTeam, setActiveTeam] = useState(0);

    return (
        <Consumer>
            {theme => (
                <StyledGameBoard activeTeam={activeTeam} theme={theme}>
                    {words.map(word => (
                        <Word
                            word={word.word}
                            key={word.word}
                            team={word.team}
                        />
                    ))}
                </StyledGameBoard>
            )}
        </Consumer>
    );
};

export default GameBoard;
