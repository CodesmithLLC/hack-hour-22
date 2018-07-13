/**
 * Create a stack.Then create a queue using two stacks.
 */
const stack1 =[], stack2 =[];

function Stack(val) {
    let last = this.shift();  
    this.unshift(val);
    return last;  
}


/**
* Queue Class
*/


function Queue() {
    function Enqueue(val){
        stack1.push(val);
    }

    function dequeue() {
        if (stack2.length === 0){
            if (stack1.length === 0){
                return 'no elements to queue'
            }
            while (stack1.length >0){
                const blegh = stack1.pop();
                stack2.push(blegh);
            }
            return stack2.pop();
        }
    }
}

module.exports = {Stack: Stack, Queue: Queue};
