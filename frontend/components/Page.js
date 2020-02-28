import React, { Component } from 'react';
import styled from 'styled-components';
import Meta from './Meta';
import { theme, GlobalStyle } from './styles/theme';
import { Provider } from './ThemeContext';

const StyledPage = styled.div`
    /* background: ${props => props.theme.background}; */
    /* color: white; */
    /* height: 100vh; */
    
`;

const PageContent = styled.div`
    max-width: ${props => props.theme.maxWidth};
    margin: 0 auto;
    padding: 2rem;
`;

class Page extends Component {
    render() {
        return (
            <>
                <Provider value={theme}>
                    <StyledPage>
                        <GlobalStyle />
                        <Meta />
                        <PageContent>{this.props.children}</PageContent>
                    </StyledPage>
                </Provider>
            </>
        );
    }
}

export default Page;
