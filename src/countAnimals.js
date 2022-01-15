const data = require('../data/zoo_data');

function countAnimals(animal) {
  if (animal === undefined) {
    const names = data.species.map((specie) => specie.name);
    const qty = data.species.map((specie) => specie.residents.length);
    const final = {};

    names.forEach((aName, i) => { final[aName] = qty[i]; });

    return final;
  }

  if (animal.sex === undefined) {
    return data.species.find((spc) => spc.name === animal.specie).residents.length;
  }

  return data.species.find((spc) => spc.name === animal.specie)
    .residents.filter((resident) => resident.sex === animal.sex).length;
}

/*
NENHUM ARGUMENTO RETORNA: {
  lions: 4,
  tigers: 2,
  todos os outros animais e qtds
}
^ tem que pegar o name de cada objeto no array, e pegar o length de residents.
fazer um array de nomes
fazer um array de números
Referência: https://stackoverflow.com/questions/39127989/create-an-object-from-an-array-of-keys-and-an-array-of-values

COM O ARGUMENTO { specie: 'penguins' } RETORNA:
um número, a quantidade de pinguins no zoológico;
^ achar (find() ?) o objeto do array species que contém o name penguins
desse objeto pegar o length de residents nele.

COM O ARGUMENTO { specie: 'giraffes', sex: 'female' } RETORNA
um número, a quantidade de girafas do sexo feminino.
^ achar (find() ?) o objeto do array species que contém o name giraffes
verificar nos residents quais são do sex female, e os que forem true colocar em um novo array e verificar seu length.
*/

module.exports = countAnimals;
