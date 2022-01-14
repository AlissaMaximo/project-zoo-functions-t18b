const data = require('../data/zoo_data');

/* 
é gerente: {
      id: burlId, ----------:> '0e7b460e-acf4-4e17-bcb3-ee472265db83'
      firstName: 'Burl',
      lastName: 'Bethea',
      managers: [stephanieId],
      responsibleFor: [
        lionId,
        tigersId,
        bearsId,
        'ef3778eb-2844-4c7c-b66c-f432073e1c6b'],
    },

    {
      id: olaId, -------------:> 'fdb2543b-5662-46a7-badc-93d960fdc0a8'
      firstName: 'Ola',
      lastName: 'Orloff',
      managers: [stephanieId],
      responsibleFor: [
        ottersId,
        frogsId,
        snakesId,
        elephantsId,
      ],
    },

    {
      id: stephanieId, --------------:> '9e7d4524-363c-416a-8759-8aa7e50c0992'
      firstName: 'Stephanie',
      lastName: 'Strauss',
      managers: [],
      responsibleFor: [
        ottersId,
        '01422318-ca2d-46b8-b66c-3e9e188244ed',
      ],
    },

    {
      id: 'b0dc644a-5335-489b-8a2c-4e086c7819a2',
      firstName: 'Emery',
      lastName: 'Elser',
      managers: [stephanieId],
      responsibleFor: [
        lionId,
        bearsId,
        elephantsId,
      ],
    },
*/

function isManager(id) {
  // seu código aqui
  let managers = ['0e7b460e-acf4-4e17-bcb3-ee472265db83', 'fdb2543b-5662-46a7-badc-93d960fdc0a8', '9e7d4524-363c-416a-8759-8aa7e50c0992', 'b0dc644a-5335-489b-8a2c-4e086c7819a2'];

  if (id === managers.find(element => element === id)) {
    return true;
  } else {
    return false;
  }
}

function getRelatedEmployees(managerId) {
  /*Tabata Souto me ajudou ao recomendar o filter e map.*/
  if (isManager(managerId) === true) {
    let collaborators = data.employees.filter(employee => employee.managers.find(manager => manager === managerId) === managerId);
    let collaboratorsNames = [];

    collaboratorsFirstNames = collaborators.map(collaborator => collaborator.firstName);
    collaboratorsLastNames = collaborators.map(collaborator => collaborator.lastName);

    let length = collaboratorsFirstNames.length;

    for (let i = 0; i < length; i += 1) {
      collaboratorsNames.push(`${collaboratorsFirstNames[i]} ${collaboratorsLastNames[i]}`);
    }

    return collaboratorsNames;
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}

console.log(getRelatedEmployees('9e7d4524-363c-416a-8759-8aa7e50c0992'));

module.exports = { isManager, getRelatedEmployees };
