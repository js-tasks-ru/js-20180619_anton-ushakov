/**
 * Power
 * @param {number} m base
 * @param {number} n index
 * @returns {number}
 */
function pow (m, n) {
    var result = 1;
    for  ( i = 0;i<n;i++){
        result =(result * m);
    }
    
        return result;
}

console.log(pow(2,3));