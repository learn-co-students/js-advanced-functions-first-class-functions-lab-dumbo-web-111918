// Code your solution in this file!
const returnFirstTwoDrivers = function (drivers) {

return  drivers.slice(0,2)

}
const returnLastTwoDrivers = function returnLastTwoDrivers (drivers) {
  return drivers.slice(-2)
// return  drivers.slice(0,2)

}

// function selectingDrivers(x,y) {
//   var driver = ['Sally', 'Bob', 'Freddy', 'Claudia']
//   // return x.concat(y)
//   // var first = (returnFirstTwoDrivers(driver))
//   // var second = (returnLastTwoDrivers(driver))
// }
//
// var driver = ['Sally', 'Bob', 'Freddy', 'Claudia']
//
//
// selectingDrivers([returnFirstTwoDrivers], returnLastTwoDrivers(driver))
// debugger

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function gg(num) {
  return num * 4
}

function createFareMultiplier(x){
  return function(num) {
    return num * 5
  }
}

const fareQuintupler = createFareMultiplier(5);


const fareDoubler = function (fare) {
  return fare *2

}

const fareTripler = function(fare) {
  return fare* 3
}

function fetchSpecifiedDrivers(arrayOfDrivers, x) {
  return x(arrayOfDrivers)
}
