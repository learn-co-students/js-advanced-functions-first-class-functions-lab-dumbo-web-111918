// Code your solution in this file!
const returnFirstTwoDrivers = function (array) {
    return [array[0], array[1]]
}

const returnLastTwoDrivers = function (array) {
    return array.slice(-2)
}

selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers]

function createFareMultiplier(value) {
    return function(value){
        return value * value
    }
}

function fareDoubler(value) {
    return value * 2
}

function fareTripler(value) {
    return value * 3
}

fetchSpecifiedDrivers = function(array, func){
    return func(array)
}

// returnLastTwoDrivers(['Person', "Yo", "cool"]) 