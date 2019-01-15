let sport = ['football', 'hockey', 'baseball'];

/*console.log('***forEach***');
sport.forEach(i => console.log(i));

console.log('***for***');
for(let i = 0; i < sport.length; i++) {
    console.log(sport[i]);
}

console.log('***for...in***');
for(let key in sport) {
    console.log(sport[key]);
}

console.log('***for...of***');
for(let key of sport) {
    console.log(key);
}*/

let iterator = sport[Symbol.iterator]();

/*console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

console.log(iterator.next().done);*/

let next = iterator.next();
while (!next.done){
    console.log(next.value);
    next = iterator.next();
}










let countGenerator = {
    generate() {
        return this[Symbol.iterator]();
    },

    [Symbol.iterator](){
        let count = 0;

        return {
            next() {
                let value = Math.ceil(Math.random() * 100);
                let done = count > 9;
                count += 1;

                return {value, done}
            }
        }
    }
};

/*for (let i of countGenerator) {
    console.log(i);
}*/
//let random = countGenerator[Symbol.iterator]();
let random = countGenerator.generate();
console.log(random.next().value);







class ArrayIterator {
    constructor(array) {
        this.array = array.map(item => item).sort();
        this.index = 0;
    }

    next() {
        let result = { value: undefined, done: true};
        if (this.index < this.array.length) {
            result.value = this.array[this.index];
            result.done = false;
            this.index += 1;
        }

        return result;
    }
}


class Tasklist {
    constructor() {
        this.tasks = [];
    }

    addTask(...tasks) {
        this.tasks = this.tasks.concat(tasks)
    }

    [Symbol.iterator]() {
        return new ArrayIterator(this.tasks);
    }
}


let tasklist = new Tasklist();
tasklist.addTask('Write', 'Go', 'By', 'Show');

for (let i of tasklist) {
    console.log(i);
}


