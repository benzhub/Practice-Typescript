"use strict";
const hobbies = ['Sports', 'Cooking'];
const activeHobbies = ['Hiking'];
activeHobbies.push(...hobbies);
const newActiveHobbies1 = activeHobbies.concat(hobbies);
const newActiveHobbies2 = ["Hiking", ...hobbies];
console.log(activeHobbies);
console.log(newActiveHobbies1);
console.log(newActiveHobbies2);
const person = {
    personName: 'Max',
    age: 30
};
const copiedPerson = person;
const copiedPerson2 = Object.assign({}, person);
const add = (...numbers) => {
    let result = 0;
    for (let i = 0; i < numbers.length; i++) {
        result += numbers[i];
    }
    return result;
};
const addedNumbers = add(5, 10, 2, 3.7);
console.log(addedNumbers);
const [hobby1, hobby2, ...remainingHobbies] = newActiveHobbies1;
console.log(hobby1);
console.log(hobby2);
console.log(remainingHobbies);
const person2 = {
    firstName: 'Max',
    lastName: 'Lee',
    age: 30
};
const { firstName: userName1, lastName: userName2, age } = person2;
console.log(userName1);
console.log(userName2);
console.log(age);
//# sourceMappingURL=app.js.map