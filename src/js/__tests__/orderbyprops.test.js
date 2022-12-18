import orderByProps from '../app';

test('order By Props', () => {
  const obj = { name: 'мечник', health: 10, level: 2, attack: 80, defence: 40, };

  const correct = [{"name": "мечник"}, {"level": 2}, {"attack": 80}, {"defence": 40}, {"health": 10}];

  expect(orderByProps(obj, ['name', 'level'])).toStrictEqual(correct);
});
