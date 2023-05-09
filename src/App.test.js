import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const levelElement = screen.getByText(/Level 0/i);
  expect(levelElement).toBeInTheDocument();
});
