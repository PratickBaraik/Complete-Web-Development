type mathOperation = (a: number, b: number) => number;

function validateNumber(a: number, b: number): void {
  if (typeof a !== "number" || typeof b !== "number") {
    throw new Error("Invalid input: arguments must be numbers");
  }

  if (Number.isNaN(a) || Number.isNaN(b)) {
    throw new Error("Invalid input: arguments cannot be NaN");
  }
}

const addFn: mathOperation = (a, b) => {
  validateNumber(a, b);
  return a + b;
};

const subFn: mathOperation = (a, b) => {
  validateNumber(a, b);
  return a - b;
};

const mulFn: mathOperation = (a, b) => {
  validateNumber(a, b);
  return a * b;
};

const divFn: mathOperation = (a, b) => {
  validateNumber(a, b);

  if (b === 0) {
    throw new Error("Invalid input: division by zero is not allowed");
  }
  return a / b;
};

const modFn: mathOperation = (a, b) => {
  validateNumber(a, b);

  if (b === 0) {
    throw new Error("Invalid input: modulus by zero is not allowed");
  }
  return a % b;
};

const operationRegistry: Record<string, mathOperation> = {
  add: addFn,
  subtract: subFn,
  multiple: mulFn,
  divide: divFn,
  modulus: modFn,
};

function calculate(operation: string, a: number, b: number): number {
  const operationFn = operationRegistry[operation];
  if (!operationFn) {
    throw new Error(`Operation "${operation}" is not supported`);
  }
  return operationFn(a, b);
}

function executeWithLogging(operation: string, a: number, b: number): number {
  console.log(`Executing operation: ${operation} with arguments: ${a}, ${b}`);
  const result = calculate(operation, a, b);
  console.log(`Result: ${result}`);
  return result;
}

function runTests(): void {
  console.log("-- Running tests for calculator app --");
  executeWithLogging("add", 10, 20);
  executeWithLogging("subtract", 10, 20);
  executeWithLogging("multiple", 10, 20);
  executeWithLogging("divide", 10, 20);
  executeWithLogging("modulus", 10, 20);
}

// program entry point
runTests();
