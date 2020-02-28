import React from 'react';
import { theme } from './styles/theme';

const ThemeContext = React.createContext(theme);

export const { Provider, Consumer } = ThemeContext;
export default ThemeContext;
