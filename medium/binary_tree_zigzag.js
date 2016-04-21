/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
 
// A double-end queue, deque is used 
function Deque()
{
     this.stac=[];
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
     this.size=function(){
        return this.stac.length
     }
} 
 
var zigzagLevelOrder = function(root) {
    var answer = [];
    var level = 1;
    var buf = [];
    var queue = new Deque();
    // identify whether it goes from left or right
    var fromLeft = true;
    // only works when root is not null
    if(root !== null){
        var last = root;
        queue.pushback(root);
    }
    // works until there is nothing in the deque
    while(queue.size() !== 0){
        // get the element from left or right depends on which way it is 
        var current = fromLeft ? queue.popfront() : queue.popback();
        buf.push(current.val);
        if(fromLeft)
        {
            if(current.left !== null){
                queue.pushback(current.left);
            }
            if(current.right !== null){
                queue.pushback(current.right);
            }
        }else{
            if(current.right !== null){
                queue.pushfront(current.right);
            }
            if(current.left !== null){
                queue.pushfront(current.left);
            }
    }
    // if we are reaching the last element in a level, we get a new last element fro the next level
    if(current == last){
        answer.push(buf);
        buf = [];
        last = fromLeft ? queue.stac[0] : queue.stac[queue.size()-1];
        fromLeft = !fromLeft;
      }
    }
    return answer;
};
