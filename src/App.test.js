import { render, screen } from '@testing-library/react';
import App from './App';

test('renders portfolio title and QA Intern badge', () => {
  render(<App />);
  const roleElement = screen.getByText(/Software Quality Assurance Intern \/ QA Enthusiast/i);
  expect(roleElement).toBeInTheDocument();
});
