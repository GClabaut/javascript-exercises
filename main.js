const arr = [1, 2, 3, 4, 5];

// function isEven(num) {
//     return num % 2 === 0;
// }

// const evenArr = arr.filter(isEven);
// console.log(evenArr)

// const multiply = evenArr.map((num) => {
//     return num * 3
// });
// console.log(multiply)

// const tripleEvenNumber = multiply.reduce((total, currentItem) => {
//     return total + currentItem;
// });
// console.log(tripleEvenNumber)

function sumOfTriple(array) {
    return array
      .filter((num) => num % 2 === 0)
      .map((num) => num * 3)
      .reduce((acc, curr) => acc + curr);
}

console.log(sumOfTriple(arr))