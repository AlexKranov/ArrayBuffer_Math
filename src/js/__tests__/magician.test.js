import magician from '../magician';

test('Arguments', () => {
  const result = new magician('Character');
  expect(result).toEqual({
    name: 'Character',
    type: 'Magician',
    health: 100,
    attack: 10,
    defence: 40,
    level: 1,
  });
});