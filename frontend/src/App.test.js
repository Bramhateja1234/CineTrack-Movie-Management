import { render, screen } from '@testing-library/react';
import App from './App';

test('renders CineVault navigation', () => {
  render(<App />);
  const linkElement = screen.getByText(/CineVault/i);
  expect(linkElement).toBeInTheDocument();
});
