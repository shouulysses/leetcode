/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
 
function Deque()
{
 this.stac=new Array();
 this.popback=function(){
  return this.stac.pop();
 }
 this.pushback=function(item){
  this.stac.push(item);
 }
 this.popfront=function(){
  return this.stac.shift();
 }
 this.pushfront=function(item){
  this.stac.unshift(item);
 }
 this.front=function(){
     return this.stac[0];
 }
 this.back=function(){
     return this.stac[this.stac.length-1];
 }
} 

var maxSlidingWindow = function(nums, k) {
    var deque = new Deque();
    var answer = [];
    // base case
    if(k < 2){
        answer = nums;
    }else{
        for(var i = 0; i < k; i++)
        {
            //storing only necessary materials, the location of the max number, and the second biggest
            while(deque.front() != null && nums[i] >= nums[deque.back()])
            {
                deque.popback();
            }
            deque.pushback(i);
        }
        for(var j = k; j < nums.length; j++)
        {
            answer.push(nums[deque.front()]);
            //storing only necessary materials, the location of the max number, and the second biggest
            while(deque.front() != null && nums[j] >= nums[deque.back()])
            {
                deque.popback();
            }
            //when the original max number is no long within the window, remove it
            if(deque.front() != null && deque.front() <= j-k)
            {
                deque.popfront();
            }
            deque.pushback(j);
        }
        answer.push(nums[deque.front()]);
    }
    return answer;
};
