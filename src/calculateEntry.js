const data = require('../data/zoo_data');

function countEntrants(entrants) {
  const counted = entrants.reduce((acc, cur, i) => {
    if (i === 0) {
      acc.child = 0;
      acc.adult = 0;
      acc.senior = 0;
    }
    if (cur.age < 18) {
      acc.child += 1;
      return acc;
    }
    if (cur.age >= 50) {
      acc.senior += 1;
      return acc;
    }
    acc.adult += 1;
    return acc;
  }, {});
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
console.log(countEntrants(entradas));

function calculateEntry(entrants) {
  // seu código aqui
}

module.exports = { calculateEntry, countEntrants };
