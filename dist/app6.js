"use strict";
class DataStorage {
    constructor(id, weight) {
        this.id = id;
        this.weight = weight;
        this.data = [];
    }
    addItem(item) {
        this.data.push(item);
    }
    removeItem(item) {
        if (this.data.indexOf(item) === -1) {
            return;
        }
        this.data.splice(this.data.indexOf(item), 1);
    }
    getItems() {
        return [this.id, ...this.data, this.weight];
    }
}
const textStorage = new DataStorage(1, 60);
textStorage.addItem('Max');
textStorage.addItem('Lisa');
textStorage.removeItem('Max');
console.log(textStorage.getItems());
const textStorage2 = new DataStorage(2, 55);
textStorage2.addItem(1);
textStorage2.addItem(2);
textStorage2.removeItem(1);
console.log(textStorage2.getItems());
const textStorage3 = new DataStorage(3, 100);
textStorage3.addItem(1);
textStorage3.addItem("2");
textStorage3.addItem("Lisa");
textStorage3.addItem("Max");
textStorage3.addItem(10);
textStorage3.removeItem(1);
textStorage3.removeItem("Max");
console.log(textStorage3.getItems());
//# sourceMappingURL=app6.js.map