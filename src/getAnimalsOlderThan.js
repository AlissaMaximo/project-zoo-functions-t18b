const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  /*
  Achar qual espécie têm o mesmo nome que o parâmetro.
  Da espécie (item do array dos dados) acessar cada residente, e de cada residente acessar cada idade. Verificar se idade maior ou igual que parâmetro.
  Retornar booleano.
  */

  let specieName = data.species.find(specieFind => specieFind.name === animal);

  return specieName.residents.every(resident => resident.age >= age);
}

module.exports = getAnimalsOlderThan;
