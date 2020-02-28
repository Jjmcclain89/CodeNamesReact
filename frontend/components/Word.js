import styled from 'styled-components';
import { Consumer } from './ThemeContext';

const fontColors = {
    light: `#E0E0E0`,
    dark: `#1F1010`
}
const StyledWord = styled.div`
    width: 150px;
    height: 100px;
    margin: 5px;
    padding: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${props => props.theme.colors.teams[props.team]};
    border: 2px solid #8E610B;
    border-radius: ${props => props.theme.borderRadius};
    span {
        font-size: 1.5rem;
        text-align: center;
        border-bottom: 1px solid #4A4A4A;
        color: ${props => props.team == 4 ? fontColors.light : fontColors.dark};
        text-shadow: 1px 1px #4A4A4A;
    }
`;

const Word = ({ word, team }) => {
    return (
        <Consumer>
            {theme => {
                return (
                    <StyledWord theme={theme} team={team}>
                        <span>{word}</span>
                    </StyledWord>
                );
            }}
        </Consumer>
    );
};

export default Word;
