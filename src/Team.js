export default class Team {
  constructor() {
    this[Symbol.iterator] = function iterator() {
      const keys = Object.keys(this)
      const size = keys.length;
      const $this = this;
      let counter = 0
      return {
        next() {
          if (counter <= size) {
            return {
              done: false,
              value: $this[keys[counter++]],
            };
          }
          return {
            done: true,
          };
        },
      };
    };
  }
}

const x = new Team();
  x.Character1 = {
    name: 'Лучник',
    type: 'Bowman',
    health: 50,
    level: 1,
    attack: 40,
    defence: 10,
  }
  x.Character2 = {
    name: 'Асасин',
    type: 'Assasin',
    health: 50,
    level: 1,
    attack: 40,
    defence: 10,
  }

  for (const teamate of x) {
    console.log(teamate);
  }
