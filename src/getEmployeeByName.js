const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  let result = data.employees.find(employee => employee.firstName === employeeName || employee.lastName === employeeName);

  if (result === undefined) {
    return result = {};
  }
  
  return result;
}

module.exports = getEmployeeByName;
