// // class Printer {
// //     message = 'This works!';

// //     showMessage() {
// //         console.log(this.message)
// //     }
// // }

// // const p = new Printer();


// // const button1 = document.querySelector('button')!;
// // button1.addEventListener('click', p.showMessage); // undefined // 因為此時的this是指向button
// // //////////////////////////////////////////////////////////////////
// // const button2 = document.querySelector('button')!;
// // const buttonClick = p.showMessage.bind(p); // 把this指向p物件，這樣this.message才會是p物件，而不是button
// // button2.addEventListener('click', () => {buttonClick()}); // This works!

// // function Autobind(_: any, _2: string, descriptor: PropertyDescriptor) {
// //     const originalMethod = descriptor.value;
// //     const adjDescriptor: PropertyDescriptor = {
// //         configurable: true,
// //         enumerable: false,
// //         get() {
// //             const boundFn = originalMethod.bind(this)
// //             return boundFn;
// //         }
// //     };
// //     return adjDescriptor;
// // }

// // class Printer {
// //     message = 'This works!';

// //     @Autobind
// //     showMessage() {
// //         console.log(this.message)
// //     }
// // }

// // const p = new Printer();
// // const button = document.querySelector('button');
// // button?.addEventListener('click', p.showMessage)

// //////////////////////////////////////////////////////
// interface ValidatorConfig {
//     [property: string]: {
//         [validatableProp: string]: string[] // ['required', 'positive']
//     }
// }

// const registeredValidators: ValidatorConfig = {}

// function Required(target: any, propName: string) {
//     registeredValidators[target.constructor.name] = {
//         ...registeredValidators[target.constructor.name],
//         [propName]: ['required']
//     }
// }

// function PositiveNumber(target: any, propName: string) {
//     registeredValidators[target.constructor.name] = {
//         ...registeredValidators[target.constructor.name],
//         [propName]: ['positive']
//     }
// }

// function validate(obj: any){
//     const objValidatorConfig = registeredValidators[obj.constructor.name];
//     if(!objValidatorConfig) {
//         return true;
//     }
//     let isValid = true;
//     for (const prop in objValidatorConfig) {
//         for(const validator of objValidatorConfig[prop]) {
//             switch(validator) {
//                 case 'required':
//                     isValid = isValid && !!obj[prop];
//                     break;
//                 case 'positive':
//                     isValid = isValid && obj[prop] > 0;
//                     break;
//             }
//         }
//     }
//     return isValid;
// }

// class Course {
//     @Required
//     title: string;
//     @PositiveNumber
//     price: number;
//     constructor(t: string, p: number) {
//         this.title = t;
//         this.price = p;
//     }
// }

// const courseForm = document.querySelector('form');
// courseForm?.addEventListener('submit', (event) => {
//     event.preventDefault();
//     const titleEl = document.getElementById('title')! as HTMLInputElement;
//     const priceEl = document.getElementById('price')! as HTMLInputElement;

//     const title = titleEl.value
//     const price = +priceEl.value
    

//     const createCourse = new Course(title, price);

//     if(!validate(createCourse)) {
//         alert('Invalid input, please try again!')
//         return;
//     }

//     console.log(createCourse)
// });