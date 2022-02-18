import Daemon from '../daemon';
import Magician from '../magician';


test('first attack 100, distance 4 and stoned = true', () => {
  const first = new Daemon('first');
  first.stoned = true;
  first.attack = 100;
  first.availableAttack = 4;
  expect(first.availableAttack).toBe(60);
});

test('second attack 200, distance 2 and stoned = true', () => {
  const second = new Magician('second');
  second.stoned = true;
  second.attack = 200;
  second.availableAttack = 2;
  expect(second.availableAttack).toBe(175);
});

test('next attack 1000, distance > 5 and stoned = false', () => {
  const next = new Magician('next');
  next.attack = 1000;
  next.availableAttack = 6;
  expect(next.availableAttack).toBe(0);
});

test('ftest attack 1000, distance = 4 and stoned = false', () => {
  const ftest = new Daemon('ftest');
  ftest.attack = 100;
  ftest.availableAttack = 4;
  expect(ftest.availableAttack).toBe(70);
});