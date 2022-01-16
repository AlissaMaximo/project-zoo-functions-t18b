const data = require('../data/zoo_data');

// Primeiro item.
function getOnlyByLocation() {
  return data.species.reduce((acc, cur) => {
    const { name, location } = cur;

    if (acc[location] === undefined) {
      acc[location] = [];
    }
    acc[location].push(name);

    return acc;
  }, {});
}

function getAnimalMap(options) {
  if (options === undefined || options.includeNames === undefined) {
    return getOnlyByLocation();
  }
}

module.exports = getAnimalMap;
