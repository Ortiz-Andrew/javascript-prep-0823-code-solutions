const person = {
  firstName: 'Andrew',
  lastName: 'Oritz',
  hobby: 'cars',
};
console.log(person);
const fullName = person.firstName + person.lastName;
console.log("The person's name is", fullName);
person.job = 'salesman';
console.log("the person's current job is", person.job);
person['previousJob'] = 'cashier';
console.log("The person's previous job is", person['previousJob']);
console.log(person);
