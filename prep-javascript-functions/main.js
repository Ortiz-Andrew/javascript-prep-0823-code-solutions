function addTwoNumbers(num1, num2) {
  return 2 + 2;
}
const addTwoNumbersResult = addTwoNumbers(2, 2);
console.log(addTwoNumbersResult);

function convertHoursToMinutes(hours) {
  const result = hours * 60;
  return result;
}
const minutes = convertHoursToMinutes(2);
console.log(minutes);

function getGreeting(name) {
  const result = 'Hello' + ' ' + name + '!';
  return result;
}
const greeting = getGreeting('World');
console.log(greeting);

function addAndMultiplyB5(num1, num2) {
  const result = (num1, num2) * 5;
  return result;
}
const addAndMultiplyB5Result = addAndMultiplyB5(10, 5);
console.log(addAndMultiplyB5Result);

function multiplyAndDivideBy5(num1, num2) {
  const result = (num1 * num2) / 5;
  return result;
}
const multiplyAndDivideBy5Result = multiplyAndDivideBy5(35, 10);
console.log(multiplyAndDivideBy5Result);

function subtractTwoNumbers(num1, num2) {
  const result = num1 - num2;
  return result;
}
const subtractTwoNumbersResult = subtractTwoNumbers(22, 7);
console.log(subtractTwoNumbersResult);

function getCircleCircumference(radius) {
  const result = 2 * Math.PI * radius;
  return result;
}
const getCircleCircumferenceResult = getCircleCircumference(5);
console.log(getCircleCircumferenceResult);

function getFullName(firstName, lastName) {
  const result = firstName + ' ' + lastName;
  return result;
}
const getFullNameResult = getFullName('Juan', 'Ramirez');
console.log(getFullNameResult);

function cube(number) {
  const result = number * number * number;
  return result;
}
const cubeResult = cube(5);
console.log(cubeResult);
