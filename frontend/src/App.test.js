import { render, screen } from '@testing-library/react';
import Login from './App';

describe('home test', () => {
  it('new password', () => {
    render(<Login />);
    const linkElement = screen.getByText(/Forgot your password?/i);
    expect(linkElement).toBeInTheDocument();
  })
  it('login section', () => {
    render(<Login />);
    const linkElement = screen.getByText(/I already have an account!/i);
    expect(linkElement).toBeInTheDocument();
  })
});
