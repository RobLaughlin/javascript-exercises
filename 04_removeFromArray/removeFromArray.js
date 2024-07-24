const removeFromArray = function(arr, ...args) {
    let argSet = new Set(args);
    let newArr = []
    arr.forEach(element => {
        if (!argSet.has(element)) {
            newArr.push(element);
        }
    });
    return newArr;
};

removeFromArray([], 2,3,4,5)
// Do not edit below this line
module.exports = removeFromArray;
