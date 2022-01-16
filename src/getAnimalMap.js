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

// Quinto item.
function getBySex(sex) {
  const organizedAnimals = species.reduce((accSpc, curSpc) => {
    const { name, location } = curSpc;
    const accumulatorSpecie = accSpc;
    const specie = {};
    specie[name] = [];

    if (accumulatorSpecie[location] === undefined) {
      accumulatorSpecie[location] = [];
    }
    curSpc.residents.forEach((resident) => {
      if (resident.sex === sex) {
        specie[name].push(resident.name);
      }
    });
    accumulatorSpecie[location].push(specie);
    return accumulatorSpecie;
  }, {});
  return organizedAnimals;
}

// Sexto item.
function getComplete(sex) {
  const sexOrganized = getBySex(sex);

  Object.keys(sexOrganized).forEach((location) => {
    sexOrganized[location].forEach((specie) => specie[Object.keys(specie)[0]].sort());
  });

  const organizedAnimals = sexOrganized;

  return organizedAnimals;
}

function giveHelp(options) {
  if (options.sorted === true && options.sex !== undefined) {
    return getComplete(options.sex);
  }
  if (options.sorted === true) {
    return getSortedNames();
  }
  if (options.sex !== undefined) {
    return getBySex(options.sex);
  }
  return getByName();
}

// FUNÇÃO PRINCIPAL.
function getAnimalMap(options) {
  if (options === undefined || options.includeNames === undefined) {
    return getOnlyByLocation();
  }
  return giveHelp(options);
}

console.log(getAnimalMap({ includeNames: true, sex: 'female', sorted: true }));

module.exports = getAnimalMap;

/*
Referência para getByName():
https://stackoverflow.com/questions/40250139/push-object-into-array
https://eslint.org/docs/rules/no-param-reassign
https://www.geeksforgeeks.org/how-to-push-an-array-into-the-object-in-javascript/

Referência para getSortedNames():
https://www.geeksforgeeks.org/how-to-get-the-first-key-name-of-a-javascript-object/
https://stackoverflow.com/questions/43807515/eslint-doesnt-allow-for-in
https://stackoverflow.com/questions/983267/how-to-access-the-first-property-of-a-javascript-object
https://www.geeksforgeeks.org/how-to-get-the-first-key-name-of-a-javascript-object/

*/
