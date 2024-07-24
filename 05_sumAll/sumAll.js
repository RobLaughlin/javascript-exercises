const sumAll = function(a, b) {
    if (
        typeof(a) !== "number" || typeof(b) !== "number" 
        || a < 0 || b < 0
        || !Number.isInteger(a) || !Number.isInteger(b)
    ) { return "ERROR"; }

    const m = Math.max(a, b);
    const n = Math.min(a, b);

    // Use formula 1 + 2 + 3 + ... + n = n(n+1)/2
    const sum = m*(m+1)/2
    const sub = n*(n+1)/2

    return sum - sub + n;
};

// Do not edit below this line
module.exports = sumAll;
