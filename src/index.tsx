import * as React from 'react';
import { render } from 'react-dom';
import { ThemeProvider } from 'emotion-theming';

import { App } from './components/App';
import { theme } from './theme';

const rootElement = document.getElementById('root');

if (rootElement) {
  render(
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>,
    rootElement,
  );
}
