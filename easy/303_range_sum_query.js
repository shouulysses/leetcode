/**
 * @constructor
 * @param {number[]} nums
 */
var NumArray = function(nums) {
    total = [];
    var sum = 0
    for(var x = 0; x < nums.length; x++)
    {
        sum += nums[x];
        total.push(sum);
    }
};

/**
 * @param {number} i
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function(i, j) {
    return total[j] - (i > 0 ? total[i-1] : 0)
};


/**
 * Your NumArray object will be instantiated and called as such:
 * var numArray = new NumArray(nums);
 * numArray.sumRange(0, 1);
 * numArray.sumRange(0, 2);
 */
