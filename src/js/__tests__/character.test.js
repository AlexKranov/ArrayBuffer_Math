import character from '../character';

test('Validation', () => {
  const result = new character('Character', 'Swordsman');
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
  expect(() => new character('X', 'Daemon')).toThrowError('неверное имя');
});

test('long name', () => {
  expect(() => new character('CharacterXX', 'Daemon')).toThrowError('неверное имя');
});

test('invalid type', () => {
  expect(() => new character('Character', '1111111')).toThrowError('неверный тип');
});