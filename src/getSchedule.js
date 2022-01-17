const { hours, species } = require('../data/zoo_data');

// PARÂMETRO PASSADO: DIA
function getTimeAndAnimal(scheduleTarget) {
  const finalObj = {};
  const dayObj = {};
  const targetDay = scheduleTarget;
  const times = hours[targetDay];
  if (targetDay === 'Monday') {
    return { Monday: { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' } };
  }
  dayObj.officeHour = `Open from ${times.open}am until ${times.close}pm`;
  dayObj.exhibition = species.reduce((acc, cur) => {
    const { availability } = cur;
    availability.forEach((day) => {
      if (day === scheduleTarget) { acc.push(cur.name); }
    });
    return acc;
  }, []);
  finalObj[targetDay] = dayObj;
  return finalObj;
}

// PARÂMETRO PASSADO: ANIMAL
function getDay(scheduleTarget) {
  const animal = scheduleTarget;
  const specie = species.find((spc) => animal === spc.name);
  const daysExhibitioned = specie.availability;

  return daysExhibitioned;
}

function getAll() {
  const finalObj = {
    Tuesday: getTimeAndAnimal('Tuesday').Tuesday,
    Wednesday: getTimeAndAnimal('Wednesday').Wednesday,
    Thursday: getTimeAndAnimal('Thursday').Thursday,
    Friday: getTimeAndAnimal('Friday').Friday,
    Saturday: getTimeAndAnimal('Saturday').Saturday,
    Sunday: getTimeAndAnimal('Sunday').Sunday,
    Monday: getTimeAndAnimal('Monday').Monday,
  };
  return finalObj;
}

// FUNÇÃO PRINCIPAL
function getSchedule(scheduleTarget) {
  const days = Object.keys(hours);
  const animals = species.map((specie) => specie.name);

  if (scheduleTarget === undefined) { return getAll(); }

  if (scheduleTarget === days.find((day) => day === scheduleTarget)) {
    return getTimeAndAnimal(scheduleTarget);
  }

  if (scheduleTarget === animals.find((animal) => animal === scheduleTarget)) {
    return getDay(scheduleTarget);
  }

  return getAll();
}

/*
Referências:
https://betterprogramming.pub/accessing-an-objects-keys-values-and-entries-in-javascript-e7bb5d33d11c
https://stackoverflow.com/questions/1168807/how-can-i-add-a-key-value-pair-to-a-javascript-object
https://www.delftstack.com/howto/javascript/create-objects-inside-objects/
*/

module.exports = getSchedule;
