import {getFlyingSuperHeroes} from '../super-heroes';

test('returns super heroes that can fly', () => {
  const flyingSuperHeroes = getFlyingSuperHeroes();
  expect(flyingSuperHeroes).toMatchSnapshot();
});
