import { render, screen } from '@testing-library/react';
import Login from './App';
import Suport from './pages/Suport';

describe('home test', () => {
  it('new password', () => {
    render(<Login />);
    const linkElement = screen.getByText(/Forgot your password?/i);
    expect(linkElement).toBeInTheDocument();
  });

  it('login section', () => {
    render(<Login />);
    const linkElement = screen.getByText(/I already have an account!/i);
    expect(linkElement).toBeInTheDocument();
  });

  it('create section', () => {
    render(<Login />);
    const linkElement = screen.getByText(/Sign in with:/i);
    expect(linkElement).toBeInTheDocument();
  });
});

describe('main screen test', () => {
  it('new password', () => {
    render(<Suport />);
    const linkElement = screen.getByText(/Procurar ou começar uma nova conversa/i);
    expect(linkElement).toBeInTheDocument();
  });

  it('Suport section', () => {
    render(<Suport />);
    const linkElement = screen.getByText(/Digite uma Mensagem/i);
    expect(linkElement).toBeInTheDocument();
  });
});
