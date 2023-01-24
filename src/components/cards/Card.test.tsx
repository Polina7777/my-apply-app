// import { fireEvent, render, screen } from '@testing-library/react';

// import { Character } from 'api/api-layout/general-api-page/General-api-page-interface';
// import Cards from './Cards';

// const mockPersonalData: Character = {
//   episode: ['sdvdv'],
//   gender: 'Male',
//   id: 1,
//   image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
//   location: { name: 'Citadel of Ricks', url: 'https://rickandmortyapi.com/api/location/3' },
//   name: 'Rick Sanchez',
//   origin: { name: 'Earth (C-137)', url: 'https://rickandmortyapi.com/api/location/1' },
//   species: 'Human',
//   status: 'Alive',
//   type: 'Human',
// };

// test('It should find pagination', async () => {
//   render(<Cards getCharacterFilterById={jest.fn()} searchString={''} />);
//   const pagination = screen.queryByLabelText('character-card-pagination');
//   expect(pagination).toBeInTheDocument;
// });
// test('It should find loader', async () => {
//   render(<Cards getCharacterFilterById={jest.fn()} searchString={''} />);
//   const loader = screen.queryByLabelText('character-card-loader');
//   expect(loader).toBeInTheDocument;
// });
// test('It should find Character-card', async () => {
//   render(<Cards getCharacterFilterById={jest.fn()} searchString={''} />);
//   const characterCard = screen.queryByLabelText('character-card');
//   expect(characterCard).toBeInTheDocument;
// });
// test('It should find leftArrow', async () => {
//   render(<Cards getCharacterFilterById={jest.fn()} searchString={''} />);
//   const rightArrow = screen.getByLabelText('right');
//   fireEvent.click(rightArrow);
//   const leftArrow = screen.getByLabelText('left');
//   expect(leftArrow).toBeInTheDocument;
// });
// test('It should call function', async () => {
//   render(<Cards getCharacterFilterById={jest.fn()} searchString={''} />);
//   const divElement = await screen.findAllByLabelText('filtered-click');
//   fireEvent.click(divElement[0]);
//   expect(jest.fn()).toBeCalled;
// });
