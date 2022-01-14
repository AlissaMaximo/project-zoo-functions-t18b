const data = require('../data/zoo_data');

function getEmployeeByName(emplName) {
  const final = data.employees
    .find((empl) => empl.firstName === emplName || empl.lastName === emplName);

  if (final === undefined) {
    return {};
  }

  return final;
}

module.exports = getEmployeeByName;
