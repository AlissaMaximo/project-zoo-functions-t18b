const data = require('../data/zoo_data');

function countEntrants(entrants) {
  const counted = entrants.reduce((acc, cur) => {
    const { age } = cur;

    if (age < 18) {
      if (acc.child === undefined) {
        acc.child = 0;
      }
      acc.child += 1;
    } else if (age >= 50) {
      if (acc.senior === undefined) {
        acc.senior = 0;
      }
      acc.senior += 1;
    } else {
      if (acc.adult === undefined) {
        acc.adult = 0;
      }
      acc.adult += 1;
    }

    return acc;
  }, {})

  return counted;
}
const entradas = [
  { name: 'Lara Carvalho', age: 5 },
  { name: 'Frederico Moreira', age: 5 },
  { name: 'Pedro Henrique Carvalho', age: 5 },
  { name: 'Maria Costa', age: 18 },
  { name: 'Núbia Souza', age: 18 },
  { name: 'Carlos Nogueira', age: 50 },
];

countEntrants(entradas);

function calculateEntry(entrants) {
  // seu código aqui
}

module.exports = { calculateEntry, countEntrants };
