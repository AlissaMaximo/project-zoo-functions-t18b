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

    if (accSpc[location] === undefined) {
      accSpc[location] = [];
    }

    let specie = {};

    //rever este segundo reduce
    specie[name] = curSpc.residents.reduce((accRes, curRes) => {
      const resName = curRes.name;
      /* console.log('resName: '+resName); // cada vez mostra o nome do residente, de todos os animais.
      console.log('specie name: '+name); //mostra a espécie atual.
      console.log(accSpc); //mostra a ideia do objeto final.
      console.log(specie); //mostra o objeto da espécie atual.*/
      accRes.push(resName);
      /* console.log(accRes); //mostra no final do ciclo um array com os nomes de cada residente para cada espécie. */
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


/*
Referência para getByName():
https://stackoverflow.com/questions/40250139/push-object-into-array
*/