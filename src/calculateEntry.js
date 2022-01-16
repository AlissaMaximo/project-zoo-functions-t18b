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

function calculateEntry(entrants) {
  if (entrants === undefined) { return 0; }
  const isEmpty = Object.keys(entrants).length === 0;
  if (isEmpty === true) { return 0; }
  const entrantsObj = countEntrants(entrants);
  return entrantsObj.child * 20.99 + entrantsObj.adult * 49.99 + entrantsObj.senior * 24.99;
}

module.exports = { calculateEntry, countEntrants };

/*
Referência para função countEntrants:
https://www.programiz.com/javascript/examples/add-key-object

Referência para função calculateEntry:
https://bobbyhadz.com/blog/javascript-check-if-object-is-empty
*/
