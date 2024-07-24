const leapYears = function(year) {
    const divBy400 = year % 400 == 0;
    const divBy100 = year % 100 == 0;
    const divBy4 = year % 4 == 0;
    return divBy400 || (divBy4 && !divBy100);
};

// Do not edit below this line
module.exports = leapYears;
