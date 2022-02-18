import Character from '../character';

test('Validation', () => {
  const result = new Character('Character', 'Swordsman');
  expect(result).toEqual({
    name: 'Character',
    type: 'Swordsman',
    health: 100,
    attack: null,
    defence: null,
    level: 1,
  });
});

test('short name', () => {
  expect(() => new Character('X', 'Daemon')).toThrowError('неверное имя');
});

test('long name', () => {
  expect(() => new Character('CharacterXX', 'Daemon')).toThrowError('неверное имя');
});

test('invalid type', () => {
  expect(() => new Character('Character', '1111111')).toThrowError('неверный тип');
});