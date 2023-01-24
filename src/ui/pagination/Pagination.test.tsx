import { fireEvent, render, screen } from '@testing-library/react';
import Pagination from './Pagination';

test('It should find left arrow', async () => {
  render(<Pagination maxPage={0} page={0} changePage={jest.fn()} isLoading={false} />);
  const leftArrow = screen.getByLabelText('left');
  fireEvent.click(leftArrow);
  expect(leftArrow).toHaveBeenCalled;
});
test('It should find left arrow', async () => {
  render(<Pagination maxPage={0} page={0} changePage={jest.fn()} isLoading={false} />);
  const rightArrow = screen.getByLabelText('right');
  fireEvent.click(rightArrow);
  expect(rightArrow).toHaveBeenCalled;
});
