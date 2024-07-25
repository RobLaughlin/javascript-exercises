const fibonacci = function(n) {
    n = parseInt(n);
    if (n === 0) { return 0; }
    if (n < 0) { return "OOPS"; }
    
    let fibSeq = [1,1];
    while (fibSeq.length < n) {
        const end = fibSeq.length - 1;
        fibSeq.push(fibSeq[end] + fibSeq[end - 1]);
    }
    return fibSeq[fibSeq.length - 1];
};

// Do not edit below this line
module.exports = fibonacci;
