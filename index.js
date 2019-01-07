// Code your solution in this file!
const returnFirstTwoDrivers = function(drivers) {
    return [drivers[0], drivers[1]]
};

const returnLastTwoDrivers = function(drivers) {
    return [drivers[drivers.length-2], drivers[drivers.length-1]]
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(int) {
    return function fareMultiplier(fare) { return fare * int }
};

const fareDoubler = function(fare) {
    return createFareMultiplier(2)(fare)
};

const fareTripler = function(fare) {
    return createFareMultiplier(3)(fare)
};

const fareQuadrupler = function(fare) {
    return createFareMultiplier(4)(fare)
};

const fareQuintupler = function(fare) {
    return createFareMultiplier(5)(fare)
};

function fetchSpecifiedDrivers(drivers, fun) {
    return (fun(drivers))
}
