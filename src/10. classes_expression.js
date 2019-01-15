// Class Declaration
/*class Task {
    constructor() {
        console.log('Creating a task');
    }
}*/

// Class Expression
let Task = class Task {
    constructor() {
        console.log('Creating a task');
    }
};

let SubTask = class extends Task {
    constructor(){
        super();
        console.log('Creating a sub task');
    }
};


let newTask = new SubTask();