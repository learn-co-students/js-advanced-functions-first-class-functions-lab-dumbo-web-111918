// function returnFirstTwoDrivers(array){return array.slice(0,2);}
const returnFirstTwoDrivers = function(array){return array.slice(0,2);};
const returnLastTwoDrivers = function(array){return array.slice(-2);};
selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers]

function createFareMultiplier(num){
    return function(fare){
        return fare * num; 
    }
}; 

const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

function fetchSpecifiedDrivers(array,func){
    if (func === returnFirstTwoDrivers){
        return returnFirstTwoDrivers(array);
    }
    else if (func === returnLastTwoDrivers){
        return returnLastTwoDrivers(array);
    }
    }