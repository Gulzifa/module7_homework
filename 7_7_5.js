function finderUniqeArrNumbers(array) {
    const filteredArray = array.filter(function (num, index) {
        return array.indexOf(num) === index
    });
    return filteredArray.sort((a, b) => a - b);
}

const array1 = [5, 2, 8, 1, 3, 4, 7, 6, 2, 5];
const uniqArr = finderUniqeArrNumbers(array1);
console.log(uniqArr);