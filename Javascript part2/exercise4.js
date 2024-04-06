//calculates BMI

const calculateBMI = function(weight, height) {
    return weight / (height * height);
};
const weight = 50; 
const height = 1.60;
console.log(calculateBMI(weight, height));