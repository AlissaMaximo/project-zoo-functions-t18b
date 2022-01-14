const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  /*
  Buscar as espécies pelo id - percorrer o array de espécies. Cada espécie é um objeto.
  Pegar o objeto pelo id. Se no objeto a condição der true, retorna na HOF o objeto inteiro (item do array).
  Ter um array com as espécies p cada id.
  No final, retornar esse array.
  Lilian Azevedo me auxiliou.
  */

  const speciesArr = data.species
    .filter((itemFilter) => itemFilter.id === ids.find((itemFind) => itemFind === itemFilter.id));

  return speciesArr;
}

module.exports = getSpeciesByIds;
