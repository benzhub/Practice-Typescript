abstract class Department {
    static fiscalYear = 2020;
    // public readonly id: string;
    // public name: string;
    // private employees: string[] = [];
    protected employees: string[] = [];

    constructor(protected readonly id: string, public name: string) {
        // this.name = n;
        // console.log(this.fiscalYear); // 靜態屬性不 可以再構造函數裡面使用this，使用this會出錯
        // console.log(Department.fiscalYear); // 靜態屬性要在內部調用的話，就必須直接使用class名進行調用
    }

    static createEmployee(name: string) {
        return { name }
    }

    abstract describe(this: Department): void; 

    addEmployee(employee: string) {
        // validation etc
        this.employees.push(employee)
    }

    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);

    }
}

// ITDepartment繼承Department
class ITDepartment extends Department {
    constructor(id: string, public admins: string[]) {
        super(id, "IT")
        if(admins.length > 0) {
            admins.forEach(admin => this.addEmployee(admin))
        }
    }

    // 因為父類的describe是抽象方法，所以繼承之後，一定要強制覆蓋
    describe() {
        console.log(`IT Department - ID: ${this.id}`)
    }

    showAdmin() {
        console.log(`Admins: ${this.admins}`)
    }
}

class AccountingDepartment extends Department {
    private lastReport: string;
    // 把類本身封裝到一個私有靜態屬性中
    // 1. 可以在類中內部使用
    // 2. 因為單例模式中，全部都共用同一個物件，這樣做可以防止被篡改
    private static instance: AccountingDepartment;

    get mostRecentReport() {
        if(this.lastReport){
            return this.lastReport;
        }
        throw new Error("No Report Found.")
    }

    set mostRecentReport(value: string) {
        if(!value) {
            throw new Error("Please pass in a valid value!")
        }
        this.addReport(value)
    }

    // 使用私有構造函數的話，class就不能new出新的實例，已達到設計模式中的單例模式效果
    private constructor(id: string, private reports: string[]) {
        super(id, "Accounting")
        this.lastReport = reports[0]
    }  

    static getInstance() {
        // 檢查物件的instance是否已經被實例化過，如果有的話，就返回原本的，行程單例模式
        if (AccountingDepartment.instance) {
            return this.instance;
        }
        // 因為在類本身裡面，所以可以使用new 實例化
        this.instance = new AccountingDepartment('b2', []);
        return this.instance;
    }

    // 因為父類的describe是抽象方法，所以繼承之後，一定要強制覆蓋
    describe() {
        console.log(`Accounting Department - ID: ${this.id}`)
    }

    // overriding (method 覆寫)
    addEmployee(name: string): void {
        if(name === 'Max') {
            return 
        }
        this.employees.push(name); // 父類的private 不能被子類使用，子類要可以使用要改成protected
    }

    addReport(text: string) {
        this.reports.push(text);
        this.lastReport = text;
    }

    printReport(){
        console.log(this.reports);
    }
}
////////////////////////////////////////////////////////////////////////
// 單例模式與私有構造函數
// 不能使用new 實例化新的物件出來，要使用原本的物件進行操作
const accounting = AccountingDepartment.getInstance();
const accounting2 = AccountingDepartment.getInstance();
console.log(accounting === accounting2); // true

////////////////////////////////////////////////////////////////////////

// // abstract 抽象類與抽象方法
// const it = new ITDepartment("A1", ["Lily", "Emma", "Jocelyn"]);
// it.describe(); // IT Department - ID: A1
// const accounting = new AccountingDepartment("B1", ["Jason", "Lisa", "Betty"]);
// accounting.describe(); // Accounting Department - ID: B1

////////////////////////////////////////////////////////////////////////

// // Static Method 不用new 一個新物件就可以直接使用
// const employee1 = Department.createEmployee("Anna")
// console.log(employee1); // {name: 'Anna'}
// console.log(Department.fiscalYear); // 2020

////////////////////////////////////////////////////////////////////////

// // Getter & Setter
// const accounting2 = new AccountingDepartment('b2', []);
// // accounting.mostRecentReport = ""; // 會出錯 Uncaught Error: Please pass in a valid value!
// accounting2.mostRecentReport = "One Day At a Time";

// console.log(accounting2.mostRecentReport); // One Day At a Time

////////////////////////////////////////////////////////////////////////

// const IT = new ITDepartment("A1", ["Lily", "Emma", "Jocelyn"]);
// IT.showAdmin(); // Admins: Lily,Emma,Jocelyn
// IT.printEmployeeInformation(); // 3 ['Lily', 'Emma', 'Jocelyn']

// const accounting = new AccountingDepartment('b2', []);
// accounting.addEmployee('Max');
// accounting.addEmployee('Matthew');
// accounting.printEmployeeInformation(); // 1 ['Matthew']
// // accounting.addReport("Something went wrong...");
// accounting.printReport(); // ['Something went wrong...']



// const accounting = new Department("A1", "Department");
// // accounting.id = "A2"; // Cannot assign to 'id' because it is a read-only property.

// accounting.describe(); // ID: A1, Department: Accounting

// accounting.addEmployee("Emma")
// accounting.addEmployee("Josh")
// accounting.addEmployee("Jason")
// accounting.addEmployee("Joey")
// // accounting.employees[4] = "Donaldson"; // 會出錯，因為employee是private
// accounting.name = "NEW NAME";
// console.log(accounting.name); // NEW NAME // 可以修改，因為name是public
// accounting.printEmployeeInformation(); // 4 ['Emma', 'Josh', 'Jason', 'Joey']




// // const accounting = new Department("Accounting");
// // console.log(accounting.name); // Accounting
// // accounting.describe(); // Department: Accounting

// // const accountingCopy = { describe: accounting.describe };
// // accountingCopy.describe(); // Department: undefined

// // const accountingCopy2 = { name: 'accountingCopy2', describe: accounting.describe };
// // accountingCopy2.describe(); // Department: accountingCopy2