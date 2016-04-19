/**
 * @param {number} num
 * @return {boolean}
 */
var isPowerOfFour = function(num) {
    var binary = num.toString(2)
    binary = binary.replace(/00/g,'')
    return (binary == "1")
};
