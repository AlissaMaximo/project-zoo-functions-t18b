const data = require('../data/zoo_data');

function getEmployeeByName(emplName) {
  const end = data.employees.find((emp) => emp.firstName === emplName || emp.lastName === emplName);

  if (end === undefined) {
    return end;
  }

  return end;
}

module.exports = getEmployeeByName;
