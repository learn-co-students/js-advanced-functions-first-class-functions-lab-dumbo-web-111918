// Code your solution in this file!


const returnFirstTwoDrivers = function(drivers){
	//return drivers.slice(0,2);

  //To use spread operator, do this below. Don't declare t
  //the arrNew beforehand. Declare it below with the []
	 const arrNew = [...drivers.slice(0,2)];
   return arrNew;

	//or push
	//arrNew = []
	// arrNew.push(drivers[0], drivers[1]);
	//   return arrNew;

};

const returnLastTwoDrivers = function(drivers){
	return drivers.slice(-2);
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];


function createFareMultiplier (aNum){
	return function (fare){
	  //const fare = 1;
	  return aNum * fare;
	}
};

 const fareDoubler = createFareMultiplier(2);

 const fareTripler = createFareMultiplier(3);

  function fetchSpecifiedDrivers(drivers, func) {
  	return func(drivers);
  }
