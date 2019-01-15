class Task {
    constructor(title = Task.getDefaultTitle()) {
        this.title = title;
        this.sleep = '-sleep-';
        this._done = false;
        Task.count += 1;
        console.log('-Create new task-');
    }

    static get count() {
        if(!this._count) {
            this._count = 0;
        }
        return this._count;
    }
    static set count(value) {
        this._count = value;
    }

    get done() {
        return this._done === true ? '___ready___' : '___not ready___';
    }
    set done(value) {
        if (value !== undefined && typeof value === 'boolean') {
            this._done = value;
        } else {
            console.error('Error!');
        }
    }

    complete() {
        this.done = true;
        console.log(`-Task ${this.title} ready!!!-`);
    }

    static getDefaultTitle() {
        return '-!!no task!!-';
    }
}

//Task.count = 0;

let task = new Task('-clean room-');
let task2 = new Task('-by beer-');
let task3 = new Task();

console.log(task.done, task._done);


console.log(typeof Task);
console.log(task instanceof Task);
console.log(typeof task);

console.log(task.sleep);
console.log(task.title);
console.log(task2.title);
console.log(task3.title);

console.log(Task.count);
task2.complete();

task.complete();
console.log(task.done, task._done);