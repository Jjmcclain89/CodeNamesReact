import { createGlobalStyle } from 'styled-components';

const colors = {
    tan: `linear-gradient(#FBBA67, #C16C00)`,
    blue: `linear-gradient(#334462, #4074D0)`,
    red: `linear-gradient(#ED213A, #93291E)`,
    black: `linear-gradient(#000000, #434343)`,
    silver: `linear-gradient(#FFFFFF, #434343)`
}

export const theme = {
    colors: {
        teams: {
            0: colors.tan,
            1: colors.blue,
            2: colors.red,
            3: colors.silver,
            4: colors.black,
        },
        background: `linear-gradient(#B58D35, #FFCD8E)`
    },
    maxWidth: '1000px',
    borderRadius: '8px'
};

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');
  html {
    box-sizing: border-box;
    font-size: 16px;
    
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    padding: 0;
    margin: 0;
    line-height: 2;
    font-family: 'Roboto';
    background: ${theme.colors.background};
    height: 100vh;
  }
  a {
    text-decoration: none;
    color: ${theme.colors.black};
  }
`;
