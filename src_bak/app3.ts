// // 自定義函數
// type AddFuc = (a: number, b:number) => number;
// interface AddFuncProps {
//     (a: number, b: number): number
// }

// let addFunc: AddFuncProps = (n1: number, n2: number): number => {
//     return n1 + n2;
// }
// let addFunc2: AddFuc = (n1: number, n2: number): number => {
//     return n1 + n2;
// }

// interface HeightProps {
//     height: number;
// }

// interface AgeProps {
//     age: number
// }

// // 代表job是可選的參數(可有可無都可以)
// interface JobsProps {
//     job?: string
// }

// interface PersonProps extends AgeProps, HeightProps, JobsProps {
//     // private name: string;
//     readonly name: string;
//     greet(phrase: string): void;
// }

// class Person implements PersonProps {
//     constructor(
//         readonly name: string, 
//         public age: number, 
//         public height: number, 
//         public job?: string
//         ) {
//         this.job = job || "";
//     }

//     greet(phrase: string){
//         console.log(`${phrase} ${this.name}.`)
//         console.log(`${phrase} ${this.age} years old.`)
//         console.log(`${phrase} ${this.height} cm.`)
//         if(this.job){
//             console.log(`${phrase} a ${this.job}.`)
//         }
//     }
// }

// const max = new Person('Max', 35, 180, "doctor"); // 最後一個job是可有可無的參數
// // max.name = "Lisa"; // 會出錯，因為name 是readonly，不可以修改
// max.greet("Hi, I'm");// Hi, I'm Max. Hi, I'm 35 years old. Hi, I'm 180 cm. Hi, I'm a doctor.

// const lisa = new Person('Lisa', 25, 160); // 最後一個job是可有可無的參數
// lisa.greet("Hi, I'm");// Hi, I'm Lisa. Hi, I'm 25 years old. Hi, I'm 160 cm. 

// ////////////////////////////////////////////////////////////

// // const anna = new Person('Anna', 30);
// // anna.greet("Hi, I'm");// Hi, I'm Anna. Hi, I'm 30 years old.

// ////////////////////////////////////////////////////////////

// // let user1: Greetable = {
// //     name: "Tommy",
// //     age: 30,
// //     greet(phrase: string){
// //         console.log(`${phrase} ${this.name}.`)
// //     }
// // }

// // user1.greet("Hi, I'm"); // Hi, I'm Tommy.
