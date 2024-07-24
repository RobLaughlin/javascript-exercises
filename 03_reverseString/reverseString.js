const reverseString = function(str) {
    let reversed = "";
    for (let i = str.length; i--; i >= 0) {
        reversed += str[i];
    }

    return reversed;
};

// Do not edit below this line
module.exports = reverseString;
