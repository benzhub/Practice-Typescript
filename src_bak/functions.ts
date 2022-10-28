// function add(n1: number, n2: number): number {
//     return n1 + n2;
// }

// function printResult(num: number): void {
//     console.log("Result: " + num)
// }

// function printResult2(num: number): undefined {
//     console.log("Result: " + num)
//     return;
// }

// function addAndHandle(n1: number, n2: number, cb: (num: number)=> void) {
//     const result = n1 + n2;
//     cb(result);
// }

// // let combinValues: Function;
// let combinValues2 = (n1: number, n2: number): number => n1 + n2;
// // combinValues = add;
// // combinValues = printResult;
// // combinValues = 5; // 會出錯，因為已經定義了combinValues的型別必須是Function
// console.log(combinValues2(8, 8))

// // printResult(add(5, 12));

// addAndHandle(10, 20, (result) => {
//     console.log(result);
// });