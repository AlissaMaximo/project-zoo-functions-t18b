const { species } = require('../data/zoo_data');

// Primeiro e segundo itens.
function getOnlyByLocation() {
  return species.reduce((acc, cur) => {
    const { name, location } = cur;

    if (acc[location] === undefined) {
      acc[location] = [];
    }
    acc[location].push(name);

    return acc;
  }, {});
}

// Terceiro item.
function getByName() {
  const organizedAnimals = species.reduce((accSpc, curSpc) => {
    const { name, location } = curSpc;
    const accumulatorSpecie = accSpc;
    const specie = {};
    specie[name] = [];

    if (accumulatorSpecie[location] === undefined) {
      accumulatorSpecie[location] = [];
    }
    curSpc.residents.forEach((resident) => {
      specie[name].push(resident.name);
    });
    accumulatorSpecie[location].push(specie);
    return accumulatorSpecie;
  }, {});
  return organizedAnimals;
}

// Quarto item.
function getSortedNames() {
  const nameList = getByName();

  Object.keys(nameList).forEach((location) => {
    nameList[location].forEach((specie) => specie[Object.keys(specie)[0]].sort());
  });

  const organizedAnimals = nameList;

  return organizedAnimals;
}

function getAnimalMap(options) {
  if (options === undefined || options.includeNames === undefined) {
    return getOnlyByLocation();
  }
  /* if (options.sorted === true && options.sex !== undefined) {

  } */
  if (options.sorted === true) {
    return getSortedNames();
  }
  /* if (options.sex === true) {

  } */
  return getByName();
}

console.log(getAnimalMap({ includeNames: true, sorted: true }));

module.exports = getAnimalMap;

/*
Referência para getByName():
https://stackoverflow.com/questions/40250139/push-object-into-array
https://eslint.org/docs/rules/no-param-reassign
https://www.geeksforgeeks.org/how-to-push-an-array-into-the-object-in-javascript/

Referência para getSortedNames():
https://www.geeksforgeeks.org/how-to-get-the-first-key-name-of-a-javascript-object/
*/
