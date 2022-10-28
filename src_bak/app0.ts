// const userName = 'Max';
// // userName = 'Maximilian'; // const 是常數的意思，針對原始型別，是不能修改值的
// let age = 30;

// age = 29;

// // var // 是舊有javascript variable的意思，現在不推薦使用

// const addNum = (a: number, b:number): number => {
//     return a + b;
// };

// const addNum2 = (a: number, b:number = 1): number => a + b;
// const addNum3 = (a: number = 1, b:number): number => a + b;

// const printOutput: (a: number | string) => void = output => console.log(output)

// const button = document.querySelector('button');

// if(button){
//     button.addEventListener('click', event => console.log(event))
// }

// console.log(addNum(2, 5)); // 7
// console.log(addNum2(2, 5)); // 7
// console.log(addNum2(2)); // 3
// console.log(addNum3(2)); // 會出錯，在typescript中，這樣不會讓input的2自動跑到b上面，要注意
// printOutput(addNum(3, 7)); // 10

const hobbies = ['Sports', 'Cooking'];
const activeHobbies = ['Hiking'];

activeHobbies.push(...hobbies);
const newActiveHobbies1 = activeHobbies.concat(hobbies);
const newActiveHobbies2= ["Hiking", ...hobbies];

console.log(activeHobbies); // ['Hiking', 'Sports', 'Cooking']
console.log(newActiveHobbies1); // ['Hiking', 'Sports', 'Cooking', 'Sports', 'Cooking']
console.log(newActiveHobbies2); // ['Hiking', 'Sports', 'Cooking']

const person = {
    personName: 'Max',
    age: 30
};

const copiedPerson = person; // 共享參考(共用記憶體)
const copiedPerson2 = { ...person }; // 產生全新的物件

const add = (...numbers: number[]):number => {
    // solution: 1
    // return numbers.reduce((curResult, curValue) => {
    //     return curResult + curValue;
    // }, 0)
        
    // solution: 2
    // let result = 0;
    // numbers.forEach((number) => result += number)
    // return result;
    
    // solution: 3
    // let result = 0;
    // for (let number of numbers) {
    //     result += number
    // }
    // return result;
        
        
    // solution: 4
    let result = 0;
    for (let i=0; i<numbers.length; i++){
        result += numbers[i];
    }
    return result;
};

const addedNumbers = add(5, 10, 2, 3.7)
console.log(addedNumbers); // 20.7

// const hobby1 = newActiveHobbies1[0];
// const hobby2 = newActiveHobbies1[1];
const [hobby1, hobby2, ...remainingHobbies] = newActiveHobbies1; // 解構賦值
console.log(hobby1); // Sports
console.log(hobby2); // Cooking
console.log(remainingHobbies); // ['Cooking', 'Sports', 'Cooking']

const person2 = {
    firstName: 'Max',
    lastName: 'Lee',
    age: 30
};

// const { firstName, lastName, age } = person2;
// console.log(firstName); // Max
// console.log(lastName); // Lee
// console.log(age); // 30

const { firstName: userName1, lastName: userName2, age } = person2;
console.log(userName1); // Max
console.log(userName2); // Lee
console.log(age); // 30