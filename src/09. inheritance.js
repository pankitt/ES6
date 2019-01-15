class Task {
    constructor(title = Task.getDefaultTitle()) {
        this._title = title;
        this.done = false;
        Task.count += 1;
        console.log('Create task');
    }

    get title() {
        return this._title;
    }
    set title(value) {
        this._title = value;
    }

    static getDefaultTitle() {
        return '-!!no task!!-';
    }

    complete() {
        this.done = true;
        console.log(`Task -${this._title}- ready`);
    }
}

class SubTask extends Task {
    constructor(title, parent = "no parent") {
        super(title);
        this.parent = parent;
        console.log('Create sub task');
    }

    complete() {
        super.complete();
        console.log(`Sub task -${this.title}- ready`);
    }
}

Task.count = 0;


let task = new Task('study JS');
let subtask = new SubTask('study ES6', task);
console.log(SubTask.getDefaultTitle());
console.log(SubTask.count);

let notask = new SubTask();
console.log(SubTask.count);

console.log(task);
console.log(subtask);
console.log(notask);
// console.log(subtask instanceof SubTask);
// console.log(subtask instanceof Task);

task.complete();
subtask.complete();
console.log(task);
console.log(subtask);