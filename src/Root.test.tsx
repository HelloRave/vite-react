import { render, screen } from '@testing-library/react';
import App from './Root';

describe('App', () => {
  it('renders the App component', () => {
    render(<App />);

    screen.debug();
  });
});
