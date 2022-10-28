// enum Role {
//     ADMIN = 'ADMIN',
//     READ_ONLY = 100,
//     AUTHOR = 'AUTHOR'
// };

// const person: {
//     name: string;
//     age: number;
//     hobbies: string[];
//     role: Role
// } = {
//     name: 'Maximilian',
//     age: 30,
//     hobbies: ['Sports', 'Cooking'],
//     role: Role.AUTHOR,
// };

// person.role.push('admin');
// person.role[1] = 10; // 會出錯，因為在person物件中的role有定義元組中indexof 1的位址，類型必須是string，不可以改成number類型

// let favoriteActivities: string[];
// favoriteActivities = ['Sports', 1]; // 會出錯，陣列裡面必須都是string

// console.log(person.name);

// for(const hobby of person.hobbies){
//     console.log(hobby.toUpperCase())
// }