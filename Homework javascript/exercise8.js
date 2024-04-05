//uses a loop to calculate the sum of all numbers in an array

let number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sum = 0;
for (let index = 0; index < 10; index++) {
  sum = sum + number[index];
}
console.log(sum);