import { render, screen } from '@testing-library/react';
import App from './App';

test('renders without crashing', () => {
  render(<App />);
  const element = screen.getByText(/Home/i); // Looks for 'Home' in the DOM
  expect(element).toBeInTheDocument();
});
