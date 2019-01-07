// Code your solution in this file!
const returnFirstTwoDrivers = function (drivers) {
  const result = [];
  result[0] = drivers[0];
  result[1] = drivers[1];
  return result;
};
const returnLastTwoDrivers = function (drivers) {
  const result = [];
  result[0] = drivers[drivers.length - 2];
  result[1] = drivers[drivers.length - 1];
  return result;
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier (multiplier) {
  return function (fare) {
     return fare * multiplier;
  };
}

function createFareMultiplier (multiplier) {
  return function (fare) {
     return fare * multiplier;
  };
}

const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

function fetchSpecifiedDrivers (arrayOfDrivers, func) {
  return func(arrayOfDrivers);
}

