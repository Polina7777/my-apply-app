import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import ErrorPage from './Error-page';

test('find Oops element', () => {
  render(<ErrorPage />, { wrapper: BrowserRouter });
  const linkElement = screen.getByText(/Oops!/i);
  expect(linkElement).toBeInTheDocument();
});
