// let userInput: unknown;
// let userName: string;

// userInput = 5;
// userInput = 'Max';
// userName = userInput; // 會出錯


// //////////////////////////////////
// let userInput: any;
// let userName: string;

// userInput = 5;
// userInput = 'Max';
// userName = userInput; // 正常

function generateError(message: string, code: number): never {
    throw { message: message, errorCode: code };

}

generateError('An error occruued', 500);
