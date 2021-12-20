import { render, screen } from '@testing-library/react';
import Login from './App';

describe('home test', () => {
  it('element test', () => {
    render(<Login />);
    const linkElement = screen.getByText(/Forgot your password?/i);
    expect(linkElement).toBeInTheDocument();
  })
});
