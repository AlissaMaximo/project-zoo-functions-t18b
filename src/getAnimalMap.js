const { species } = require('../data/zoo_data');

// Primeiro item.
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

function getAnimalMap(options) {
  if (options === undefined || options.includeNames === undefined) {
    return getOnlyByLocation();
  }
  return getByName();
}

console.log(getAnimalMap({ includeNames: true }));

module.exports = getAnimalMap;

/*
Referência para getByName():
https://stackoverflow.com/questions/40250139/push-object-into-array
*/
