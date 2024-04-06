// input and returns the median value


function madianValue(array) {
    let sortedArray = array.sort((a, b) => a - b);
    let medianNumber = 0;
  
    for (let i = 0; i < sortedArray.length; i++) {
      if (sortedArray.length % 2 == 0) {
        medianNumber = sortedArray.length / 2;
        return (array[medianNumber - 1] + array[medianNumber]) / 2;
      } else {
        return Math.ceil(sortedArray.length / 2);
      }
    }
  }
  console.log(madianValue([1, 2, 3, 4, 5, 6, 7, 8, 9]));