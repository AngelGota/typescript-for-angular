function addNumbers(a: number, b: number) {
  return a + b;
}

const addNumbersArrow = (a: number, b: number) => {
  return `${a + b}`;
};

function multiply(first: number, second?: number, base: number = 2): number {
  return first * base;
}

const result = addNumbers(1, 2);
const result2 = addNumbersArrow(1, 2);
const multiplyResult: number = multiply(2, 2);

console.log({ result, result2, multiplyResult });

export {};
