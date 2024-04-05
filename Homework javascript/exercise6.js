//count the odd and even numbers

var number =[8, 9, 10];
var counteven = 0;
var countodd = 0;

for (let i = 0; i< number.length; i++){
    if (number[i] % 2 ==0){
        counteven++;
    }
    else if (number[i] %2 != 0) {
        countodd++;
    }
}
console.log("Even number:", counteven);
console.log("odd number:", countodd);