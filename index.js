// Code your solution in this file!
const returnFirstTwoDrivers = drivers => {return drivers.slice(0,2)}

const returnLastTwoDrivers = drivers => {return drivers.slice(-2)}

selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = function(num){
  return function(value){
    return (num * value);
  };
}

const fareDoubler = createFareMultiplier(2)
const fareTripler = createFareMultiplier(3)

function fetchSpecifiedDrivers(drivers, chooseDrivers){
  return chooseDrivers(drivers)
}
