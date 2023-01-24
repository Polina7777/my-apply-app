import { render, screen } from '@testing-library/react';
import Footer from './Footer';

describe('find footer element', () => {
  test('find footer element', () => {
    render(<Footer />);
    const linkElement = screen.getByText(/React.Component by Polina7777/i);
    expect(linkElement).toBeInTheDocument();
  });
});
