//finds the largest number 

const numbers = [ 41,3,4,20,8,10,30,5,40];
let largest = 0;

for (let i = 0; i < numbers.length; i++){
    if (numbers[i] > largest){
        largest = numbers[i];
    }
}

console.log("The largest number is ", largest);