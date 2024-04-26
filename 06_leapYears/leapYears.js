const leapYears = function(year) {
    // four = year % 4;
    // hundred = year % 100;
    // fourHundred = year % 400;
    // if (hundred === 0 && fourHundred === 0) {
    //     return true;
    // } else if (hundred === 0 && four === 0) {
    //     return false;
    // } else if (four === 0) {
    //     return true;
    // } else {
    //     return false;
    // }

    return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);

}

// Do not edit below this line
module.exports = leapYears;