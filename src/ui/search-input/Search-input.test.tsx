import { fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { useAppSelector } from 'store/Hooks';
import store from 'store/Store';
import SearchInput from './Search-input';

test('It should keep value in front of the input', async () => {
  render(
    <Provider store={store}>
      <SearchInput handleChange={jest.fn(() => 'leave')} value={''} />
    </Provider>
  );
  const info = useAppSelector((state) => state.info);
  const input: HTMLInputElement = screen.getByLabelText('search-input');
  fireEvent.change(input, { target: { value: 'book' } });
  expect(jest.fn).toHaveBeenCalled();
});
test('table should render all kinds of data', () => {
  const { store } = renderWithContext(
    <SearchInput handleChange={jest.fn(() => 'leave')} value={''} />
  );
  const input: HTMLInputElement = screen.getByLabelText('search-input');
  fireEvent.change(input, { target: { value: 'book' } });
  expect(jest.fn).toHaveBeenCalled();
  store.dispatch({
    type: 'updateString',
    data: {
      /* ... */
    },
  });
  // expect() table to be full
});
