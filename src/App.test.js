import { render, screen } from '@testing-library/react';
import App from './App';

describe('App component', () => {
  render(<App />);

  it('should be rendered', () => {
    const appComponent = screen.getByTestId('app-container')
    expect(appComponent).toBeDefined()
  }) 
});
