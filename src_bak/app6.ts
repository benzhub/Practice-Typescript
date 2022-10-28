// interface CourseGoal {
//     title: string;
//     description: string;
//     completeUntil: Date;
// }

// // Partial 將引用的interface裡面的Property都變成optional
// function createCourseGoal(
//     title: string, 
//     description: string, 
//     // completeUntil: Date // 因為使用Partial所以optional
// ): CourseGoal {
//     let courseGoal: Partial<CourseGoal> = {};
//     courseGoal.title = title;
//     courseGoal.description = description;
//     // courseGoal.completeUntil = completeUntil;
//     return courseGoal as CourseGoal;
// }

// const names: Readonly<string[]> = ['Max', 'Anna']; // 無法再對Array操作，因為它變成Readonly
// // names.push('Lisa'); // Property 'push' does not exist on type 'readonly string[]'.
// // names.pop('Anna'); // Property 'pop' does not exist on type 'readonly string[]'.


// Union Types 可以讓型別多樣化，但是比較容易讓型別混亂
// Generic Types 也可以讓型別多樣化，且具有彈性，也較不易讓型別混亂，但Union Types還是有個自的用途
class DataStorage {
    // 如果讓Array的類型可以是多種，那麼放入Array的型別就可以混雜，容易造成型別混亂
    private data: (string | number | boolean)[] = [];
    // 如果讓Array的類型單一，那麼放入Array的型別就難以修改，這樣在撰寫時，較難有彈性
    // private data: string[] | number[] | boolean[] = [];
    constructor(public readonly id: number, public weight: number) {}
    // 使用string[] | number[] | boolean[]
    // 會讓塞入Array的類型只能單一且必須預設好，此種寫法較沒有彈性
    addItem(item: string | number | boolean) {
        this.data.push(item)
    }

    removeItem(item: string | number | boolean) {
        if (this.data.indexOf(item) === -1) {
            return;
        }
        this.data.splice(this.data.indexOf(item), 1); // -1
    }

    getItems() {
        return [this.id, ...this.data, this.weight];
    }
}

const textStorage = new DataStorage(1, 60);
textStorage.addItem('Max');
textStorage.addItem('Lisa');
textStorage.removeItem('Max');
console.log(textStorage.getItems()); // [1, 'Lisa', 60]

const textStorage2 = new DataStorage(2, 55);
textStorage2.addItem(1);
textStorage2.addItem(2);
textStorage2.removeItem(1);
console.log(textStorage2.getItems()); // [2, 2, 55]

const textStorage3 = new DataStorage(3 , 100);
textStorage3.addItem(1);
textStorage3.addItem("2");
textStorage3.addItem("Lisa");
textStorage3.addItem("Max");
textStorage3.addItem(10);
textStorage3.removeItem(1);
textStorage3.removeItem("Max");
console.log(textStorage3.getItems()); // [3, '2', 'Lisa', {name: 'Linda'}, 10, 100]


