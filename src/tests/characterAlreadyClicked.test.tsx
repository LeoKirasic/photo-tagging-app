import characterAlreadyClicked from '../helpers/characterAlreadyClicked';

it('Correctly checks if character has already been clicked', () => {
  const characters = ['Waldo', 'Wizard', 'Odlaw'];

  const clicked = characterAlreadyClicked('Waldo', characters);

  expect(clicked).toBe(true);
});

it('Returns false if character has not been clicked yet', () => {
  const characters = ['Wizard', 'Odlaw'];

  const clicked = characterAlreadyClicked('Waldo', characters);

  expect(clicked).toBe(false);
});
