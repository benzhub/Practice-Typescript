// // // // const names = ["Max", "iMax"]

// // // const names: Array<string> = []; // string[]
// // // // names[0].split(' ')

// // // const promise: Promise<string> = new Promise((resolve, reject) => {
// // //     setTimeout(() => {
// // //         resolve('This is done!')
// // //     }, 2000)
// // // })

// // // promise.then((data) => {
// // //     data.split(' ');
// // // })

// // /////////////////////////////////////////////////////////////////////
// // // Creating A Generic Function
// // function mergeFunc<T extends Object, U  extends Object>(objA: T, objB: U) {
// //     return Object.assign(objA, objB);
// // }

// // const mergeObj = mergeFunc({name: "Max", hobbies: ['Sports']}, {height: 180});
// // console.log(mergeObj)
// // console.log(mergeObj.name); // Max
// // console.log(mergeObj.hobbies); // ['Sports']
// // console.log(mergeObj.height); // 180



// // interface Length2 {
// //     readonly length: number;
// //     run: (people: string) => void;
// // }

// // class Test2 implements Length2 {
// //     constructor(public length: number) {
// //         this.length = length;
// //     }
// //     run(people: string) {
// //         console.log(people)
// //     }
    
// // }

// // interface Length {
// //     length: number;
// // }

// // function countAndprint<T extends Length>(element: T): [T, string] {
// //     let descriptionText = 'Got no Value.'
// //     if (element.length === 1) {
// //         descriptionText = `Got 1 element.`
// //     } else if (element.length > 1) {
// //         descriptionText = `Got ${element.length} elements.`
// //     }
// //     return [element, descriptionText]
// // }

// // console.log(countAndprint('Hi there!')); // ['Hi there', 'Got 8 elements.']
// // console.log(countAndprint(['Sports', 'Cooking'])); // [Array(2), 'Got 2 elements.']
// // // console.log(countAndprint(10)); // Argument of type 'number' is not assignable to parameter of type 

// // function extractAndConvert<T extends Object, U extends keyof T>(obj: T, key: U) {
// //     return `Value: ${obj[key]}`;
// // }

// // extractAndConvert({name: 'Max'}, 'name')

// class DataStorage<T> {
//     private data: Array<T | number> = [];
//     constructor(public readonly id: number, public weight: number) {}

//     addItem(item: T) {
//         this.data.push(item)
//     }

//     removeItem(item: T) {
//         if (this.data.indexOf(item) === -1) {
//             return;
//         }
//         this.data.splice(this.data.indexOf(item), 1); // -1
//     }

//     getItems() {
//         return [this.id, ...this.data, this.weight];
//     }
// }

// const textStorage = new DataStorage<string>(1, 60);
// textStorage.addItem('Max');
// textStorage.addItem('Lisa');
// textStorage.removeItem('Max');
// console.log(textStorage.getItems()); // [1, 'Lisa', 60]

// const textStorage2 = new DataStorage<number>(2, 55);
// textStorage2.addItem(1);
// textStorage2.addItem(2);
// textStorage2.removeItem(1);
// console.log(textStorage2.getItems()); // [2, 2, 55]

// const textStorage3 = new DataStorage<number | string | Object>(3 , 100);
// textStorage3.addItem(1);
// textStorage3.addItem("2");
// textStorage3.addItem("Lisa");
// textStorage3.addItem("Max");
// textStorage3.addItem({name: 'Linda'});
// textStorage3.addItem(10);
// textStorage3.removeItem(1);
// textStorage3.removeItem("Max");
// console.log(textStorage3.getItems()); // [3, '2', 'Lisa', {name: 'Linda'}, 10, 100]


