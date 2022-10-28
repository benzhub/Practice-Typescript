// type Admin = {
//     name: string;
//     privileges: string[];
// };

// type Employee = {
//     name: string;
//     startDate: Date;
// }

// type ElevatedEmployee = Admin & Employee;

// const el: ElevatedEmployee = {
//     name: "Max",
//     privileges: ['create-server'],
//     startDate: new Date(),
// }

// type Combinable = string | number;
// type Numeric = number | boolean;

// type Universal = Combinable & Numeric;

// function addFuc(a: number, b: number): number
// function addFuc(a: string, b: string): string
// function addFuc(a: string, b: number): string
// function addFuc(a: number, b: string): string
// function addFuc(a: Combinable, b: Combinable) {
//     if(typeof a === 'string' || typeof b === 'string') {
//         return a.toString() + b.toString();
//     }
//     return a + b;
// }

// const result = addFuc('Max', ' Schwarz');
// result.split(' ');
// const result2 = addFuc('Max ', 3);
// result2.split(' ');

// const fetchedUserData = {
//     id: 'u1',
//     name: 'Max',
//     job: { title: 'CEO', description: 'My own company' }
// };

// console.log(fetchedUserData?.job?.title)
// console.log(fetchedUserData?.job?.description)
  
// fetch("https://dog.ceo/api/breeds/image/random", { method: 'GET', redirect: 'follow'})
//     .then(response => response.json())
//     .then(result => console.log(result?.message?.title))
//     .catch(error => console.log('error', error));

///////////////////////////////////////////////////////////////////////////////////////

const userInput = '';
const storedData = userInput || 'DEFAULT';
console.log(storedData); // 'DEFAULT'

const userInput2 = '';
const storedData2 = userInput2 ?? 'DEFAULT';
console.log(storedData2); // ''

const userInput3 = undefined;
const storedData3 = userInput3 ?? 'DEFAULT';
console.log(storedData3); // 'DEFAULT'

const userInput4 = undefined;
const storedData4 = userInput4 ?? 'DEFAULT';
console.log(storedData4); // 'DEFAULT'


// type UnknownEmployee = Employee | Admin;

// function printEmployeeInformation(emp: UnknownEmployee) {
//     console.log(`Name: ${emp.name}`)
//     if ('privileges' in emp) {
//         console.log(`Privileges: ${emp.privileges}`)
//     }
//     if ('startDate' in emp) {
//         console.log(`Start Date: ${emp.startDate}`)
//     }
// }
// printEmployeeInformation(el); 
// // Name: Max
// // Privileges: create-server
// // Start Date: Tue Oct 25 2022 18:21:16 GMT+0800 (Taipei Standard Time)
// printEmployeeInformation({name: 'Dilo', startDate: new Date()}); 
// // Name: Dilo
// // Start Date: Tue Oct 25 2022 18:22:35 GMT+0800 (Taipei Standard Time)

// class Car {
//     drive() {
//         console.log('Driving...')
//     }
// }

// class Truck {
//     drive() {
//         console.log('Driving a truck...')
//     }
//     loadCargo(amount: number){
//         console.log(`Loading cargo ... ${amount}`)
//     }
// }

// type Vehicle = Car | Truck;

// const v1 = new Car();
// const v2 = new Truck();

// function useVehicle(vehicle: Vehicle) {
//     vehicle.drive();
//     if (vehicle instanceof Truck) {
//         vehicle.loadCargo(1000);
//     }
// }
// useVehicle(v1);
// // Driving...
// useVehicle(v2);
// // Driving a truck...
// // Loading cargo ... 1000

////////////////////////////////////////////
// Discriminated Unions

// interface Bird {
//     type: 'bird';
//     flyingSpeed: number;
// }

// interface Horse {
//     type: 'horse';
//     runningSpeed: number;
// }

// type Animal = Bird | Horse;

// function moveAnimal(animal: Animal) {
//     let speed;
//     switch(animal.type) {
//         case 'bird':
//             speed = animal.flyingSpeed;
//             break;
//         case 'horse':
//             speed = animal.runningSpeed;
//             break;
//     }
//     console.log(`Moving with speed: ${speed}.`)
// }
// moveAnimal({type: 'bird', flyingSpeed: 10}); // Moving with speed: 10.
// moveAnimal({type: 'horse', runningSpeed: 15}); // Moving with speed: 15.

////////////////////////////////////////////

// interface Admin {
//     name: string;
//     privileges: string[];
// };

// interface Employee {
//     name: string;
//     startDate: Date;
// }

// interface ElevatedEmployee extends Admin, Employee{}

// const el: ElevatedEmployee = {
//     name: "Max",
//     privileges: ['create-server'],
//     startDate: new Date(),
// }

// const userInputElement = document.getElementById('user-input')! as HTMLInputElement; // 與下方語法相同
// const userInputElement = <HTMLInputElement>document.getElementById('user-input')!;

// userInputElement.value = 'Hi there!';

// 與下方語法相同
// userInputElement.addEventListener('keydown', (event: Event): void => {
//     const input = event.target as HTMLInputElement;
//     if(input.value.length) console.log(input.value);
// })

// userInputElement.addEventListener('keydown', (event: Event): void => {
//     if((event.target as HTMLInputElement).value) console.log((event.target as HTMLInputElement).value);
// })


// // index properties
// interface ErrorContainer { // { email: 'Not a valid email', username: 'Must start with a charcter!' }
//     [prop: string]: number | string;
// }

// const errorBag: ErrorContainer = {
//     "email": 'test@test.com',
//     "age": 100,
//     "name": 'Lanchester'
// };