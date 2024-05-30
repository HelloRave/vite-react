import { render, screen } from '@testing-library/react';
import App from './Root';
import { BrowserRouter } from 'react-router-dom';

describe('App', () => {
  it('renders the App component', () => {
    render(<App />, {wrapper: BrowserRouter});

    screen.debug();
  });
});
