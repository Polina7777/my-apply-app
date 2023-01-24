import { render, screen, fireEvent } from '@testing-library/react';
import SearchButton from './Search-button';
let onClickEvent: () => void;
beforeEach(() => {
  onClickEvent = jest.fn();
  render(<SearchButton />);
});
test('calls onClick prop when clicked', () => {
  const nativeElement = screen.getByText(/Search/i);
  expect(nativeElement).toBeInTheDocument;
});

test('calls onClick prop when clicked', () => {
  const nativeElement = screen.getByText(/Search/i);
  expect(onClickEvent).toHaveBeenCalledTimes(0);
  fireEvent.click(nativeElement);
  expect(onClickEvent).toHaveBeenCalledTimes(1);
});
