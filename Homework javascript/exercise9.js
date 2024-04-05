//prints all prime numbers between 1 and 100.

for (let number = 1; number <= 100; number++) {
    let isPrime = true;

    for (let divisor = 2; divisor < number; divisor++) {
      if (number % divisor === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      console.log(number);
    }
  }