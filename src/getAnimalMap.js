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

const expected = {
  NE: [
    { lions: ['Zena', 'Maxwell', 'Faustino', 'Dee'] },
    { giraffes: ['Gracia', 'Antone', 'Vicky', 'Clay', 'Arron', 'Bernard'] },
  ],
  NW: [
    { tigers: ['Shu', 'Esther'] },
    { bears: ['Hiram', 'Edwardo', 'Milan'] },
    { elephants: ['Ilana', 'Orval', 'Bea', 'Jefferson'] },
  ],
  SE: [
    { penguins: ['Joe', 'Tad', 'Keri', 'Nicholas'] },
    { otters: ['Neville', 'Lloyd', 'Mercedes', 'Margherita'] },
  ],
  SW: [
    { frogs: ['Cathey', 'Annice'] },
    { snakes: ['Paulette', 'Bill'] },
  ],
};

function getByName() {
  const organizedAnimals = species.reduce((accSpc, curSpc) => {
    const { name, location } = curSpc;
    const { residents } = curSpc;

    if (accSpc[location] === undefined) {
      accSpc[location] = [];
    }

    let specie = {};
    specie[name] = [];

    //rever este segundo reduce
    curSpc.residents.reduce((accRes, curRes) => {
      const resName = curRes.name;

      specie[name].push(resName);

      return accRes;
    }, [])

    accSpc[location].push(specie);

    return accSpc;
  }, {})
  return organizedAnimals
}

function getAnimalMap(options) {
  if (options === undefined || options.includeNames === undefined) {
    return getOnlyByLocation();
  }
  return getByName();
}

console.log(getAnimalMap({ includeNames: true }));

module.exports = getAnimalMap;
