import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Atlas link', () => {
  render(<App />);
  const linkElement = screen.getByText(/atlas/i);
  expect(linkElement).toBeInTheDocument();
});
