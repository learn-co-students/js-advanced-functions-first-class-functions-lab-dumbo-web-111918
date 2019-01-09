// Code your solution in this file!
//returnFirstTwoDrivers() — Declare a variable with const that is assigned an anonymous function.
 //The assigned function should accept an array of drivers as an argument and return the first two drivers in the array.
 const returnFirstTwoDrivers = function x (drivers) {
   let onlyTwoDrivers= drivers.slice(0,2);
   return onlyTwoDrivers;

 }

returnFirstTwoDrivers(['Sally', 'Bob', 'Freddy', 'Claudia']);

const returnLastTwoDrivers = function y (drivers) {
    let lastTwoDrivers = drivers.slice(-2);
 
    return lastTwoDrivers;
}

returnLastTwoDrivers(['Sally', 'Bob', 'Freddy', 'Claudia'])


const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier (num) {
    return function (num) {
        return num * 5;
    }
}

const fareQuintupler = createFareMultiplier(5);

const fareDoubler = function (fare) {
    return fare * 2
}

const fareTripler = function (fare) {
    return fare * 3
}


function fetchSpecifiedDrivers(arrayOfDrivers, func){
    return func(arrayOfDrivers);

}