const palindromes = function (str) {

    // Remove any character that is not a letter or number.
    str = str.replaceAll(/[^a-zA-Z0-9]/g, "");
    
    let l = 0;
    let r = str.length - 1;
    while (l <= r) {
        if (str[l].toLowerCase() != str[r].toLowerCase()) {
            return false;
        }
        l++;
        r--;
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
