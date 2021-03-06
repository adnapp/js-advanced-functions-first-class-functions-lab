// Code your solution in this file!

const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0,2)
}

const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(-2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier= function(fareMuptiplier) {
    return function(value){
       return fareMuptiplier * value
    }
}

const fareDoubler = function (fare){
    return createFareMultiplier(fare)(2)
}
const fareTripler = function (fare){
    return createFareMultiplier(fare)(3)
}

const selectDifferentDrivers = function (arr, func) {
    return func(arr)
}