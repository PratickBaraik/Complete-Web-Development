function add(num1: number, num2: number): number {
  return num1 + num2;
}

function subtract(num1: number, num2: number): number {
  return num1 - num2;
}

function multiple(num1: number, num2: number): number {
  return num1 * num2;
}

function divide(num1: number, num2: number): number {
  return num1 / num2;
}

function operate(num1: number, num2: number, operation: string): number {
  if (operation === "add") {
    return add(num1, num2);
  } else if (operation === "subtract") {
    return subtract(num1, num2);
  } else if (operation === "multiple") {
    return multiple(num1, num2);
  } else if (operation === "divide") {
    return divide(num1, num2);
  } else {
    return 0;
  }
}

console.log(operate(19, 23, "add"));
