// Logger is the function's name and also it is a decorator.
// This function is a Decorator Factory. It's just like a Factory, Can Make different Products.
function Logger(logString: string) {
    console.log('Decorator Factory')
    return function(constructor: Function) {
        console.log(logString)
        console.log(constructor)
    }
}

function WithTemplate1(template: string, hookId: string) {
    return function(_: Function) { // use underscore be a variable, it's mean your will not to use this variable in function
        const hookEl = document.getElementById(hookId)
        if (hookEl) {
            hookEl.innerHTML = template;
        }
    }
}

// The Framework Angular use Decorator function to build template and views.
function WithTemplate2(template: string, hookId: string) {
    console.log('Template Factory')
    return function<T extends {new(...args: any[]): {name: string}}>(originalConstructor: T) { 
        return class extends originalConstructor {
            constructor(..._: any[]){ // use underscore be a variable, it's mean your will not to use this variable in function
                super();
                console.log('Rendering template')
                const hookEl = document.getElementById(hookId)
                if (hookEl) {
                    hookEl.innerHTML = template;
                    hookEl.querySelector('h2')!.textContent = this.name
                }
            }
        }
    }
}


// Let this decorator function can pass parameters.
@Logger('LOGGING - PERSON')
// @WithTemplate1('<h2>My Person Object</h2>', 'app')
@WithTemplate2('<h2>My Person Object</h2>', 'app')
class Person {
    name = 'Max';

    constructor() {
        console.log('Creating person object...')
    }
}

const pers = new Person();

console.log(pers);
////////////////////////////////////////////
// Decorator Factory
// Template Factory
// LOGGING - PERSON
// class extends originalConstructor {
//             constructor(..._) {
//                 super();
//                 console.log('Rendering template');
//                 const hookEl = document.getElementById(hookId…
// Creating person object...
// Rendering template
// Person {name: 'Max'}

////////////////////////////////////////////
// LOGGING - PERSON
// class Person {
//     constructor() {
//         this.name = 'Max';
//         console.log('Creating person object...');
//     }
// }
// Creating person object...
// Person {name: 'Max'}

////////////////////////////////////////////
// These Decorator Functions's Execution Order and Results
// Decorator Factory
// app7.js:24 Template Factory
// app7.js:37 Creating person object...
// app7.js:11 LOGGING - PERSON
// app7.js:12 class Person {
//     constructor() {
//         this.name = 'Max';
//         console.log('Creating person object...');
//     }
// }
// app7.js:37 Creating person object...
// app7.js:45 Person {name: 'Max'}

// function Log(target: any, propertyName: string | Symbol) {
//     console.log('Property decorator!')
//     console.log(target, propertyName)
// }

// function Log2(target: any, name: string, descriptor: PropertyDescriptor) {
//     console.log('Accessor decorator!')
//     console.log(target)
//     console.log(name)
//     console.log(descriptor)
// }

// function Log3(target: any, name: string | Symbol, descriptor: PropertyDescriptor) {
//     console.log('Method decorator!')
//     console.log(target)
//     console.log(name)
//     console.log(descriptor)
// }

// function Log4(target: any, name: string | Symbol, position: number) {
//     console.log('Method decorator!')
//     console.log(target)
//     console.log(name)
//     console.log(position)
// }

// // This decorator will run when you define this Class
// // This decorator will not run when you use this Class to make a new Object.
// class Product {
//     @Log
//     title: string;
//     private _price: number;

//     @Log2
//     set price(val: number) {
//         if(val > 0) {
//             this._price = val;
//         } else {
//             throw new Error('Invalid price - should be positive!')
//         }
//     }

//     constructor(t: string, p: number) {
//         this.title = t;
//         this._price = p;
//     }

//     @Log3
//     getPriceWithTax(@Log4 tax: number){
//         return this._price * ( 1 + tax)
//     }

// }

// const p1 = new Product('Book', 19); // This decorator will not run when you use this Class to make a new Object.
// const p2 = new Product('Book 2', 29); // This decorator will not run when you use this Class to make a new Object.
////////////////////////////////////////////////////////
// The Class and Decorator Fucntion Execution order and results.
// Property decorator!
//{constructor: ƒ, getPriceWithTax: ƒ} 'title'
//Accessor decorator!
//{constructor: ƒ, getPriceWithTax: ƒ}
//price
//{get: undefined, enumerable: false, configurable: true, set: ƒ}
//Method decorator!
//{constructor: ƒ, getPriceWithTax: ƒ}
//getPriceWithTax
//0
//Method decorator!
//{constructor: ƒ, getPriceWithTax: ƒ}
//getPriceWithTax
//{writable: true, enumerable: false, configurable: true, value: ƒ}