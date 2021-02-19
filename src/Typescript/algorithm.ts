// 1.Fibonacci Sequence
export const fibonacci = (n: number): void => {
  const arr: number[] = [0, 1];
  let i: number = 1;
  while (arr.length <= n) {
    arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
    i = arr[arr.length - 1];
  }
  console.log(arr[n]);
};

// 2.Array shift
type direction = 'left' | 'right';
type numStr = number | string;
export const ArrayShift = (
  arr: Array<numStr>,
  d: direction,
  n: number
): void => {
  if (arr.length !== 0) {
    if (d === 'left') {
      for (let i = 0; i < n; i++) {
        let val: numStr = arr.shift()!;
        arr.push(val);
      }
      return console.log(arr);
    } else if (d === 'right') {
      for (let i = 0; i < n; i++) {
        let val: numStr = arr.pop()!;
        arr.unshift(val);
      }
      return console.log(arr);
    }
  } else return;
};

// 3.Second max
export const secondMax = (arr: number[]): void => {
  if (arr.length !== 0) {
    arr = arr
      .sort((a, b) => a - b)
      .filter((val, index, arr) => arr[index] !== arr[index + 1]);
    if (arr.length !== 1) console.log(arr[arr.length - 2]);
    else console.log(arr[0]);
  } else return console.log('Error!');
};

// 4.Fizzbuzz
export const fizzBuzz = (n: number): void => {
  let str: string = '';
  n % 3 === 0 && (str += 'Fizz');
  n % 5 === 0 && (str += 'Buzz');
  console.log(str);
};
