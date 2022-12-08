import Team from '../Team';

test('should iterate', () => {
  const x = new Team({
    char1: {
      name: 'Лучник',
      type: 'Bowman',
      health: 50,
      level: 1,
      attack: 40,
      defence: 10,
    },
  });
  for (const teamate of x) {
    console.log(x.char1);
  }
  expect(teamate).toEqual({
    name: 'Лучник',
    type: 'Bowman',
    health: 50,
    level: 1,
    attack: 40,
    defence: 10,
  });
});
