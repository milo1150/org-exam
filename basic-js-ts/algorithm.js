"use strict";
const fibonacci = (n) => {
    const arr = [0, 1];
    let i = 1;
    while (arr.length <= n) {
        arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
        i = arr[arr.length - 1];
    }
    return console.log(arr[n]);
};
const ArrayShift = (arr, d, n) => {
    if (arr.length !== 0) {
        if (d === 'left') {
            for (let i = 0; i < n; i++) {
                let val = arr.shift();
                arr.push(val);
            }
            return console.log(arr);
        }
        else if (d === 'right') {
            for (let i = 0; i < n; i++) {
                let val = arr.pop();
                arr.unshift(val);
            }
            return console.log(arr);
        }
    }
    else
        return;
};
const secondMax = (arr) => {
    if (arr.length !== 0) {
        arr = arr
            .sort((a, b) => a - b)
            .filter((val, index, arr) => arr[index] !== arr[index + 1]);
        if (arr.length !== 1)
            console.log(arr[arr.length - 2]);
        else
            console.log(arr[0]);
    }
    else
        throw new Error('Error!!!');
};
const fizzBuzz = (n) => {
    let str = '';
    n % 3 === 0 && (str += 'Fizz');
    n % 5 === 0 && (str += 'Buzz');
    return console.log(str);
};
