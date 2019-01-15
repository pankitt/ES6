class User {
    constructor(name = 'Cat') {
        this._name = name;
    }

    get name() {
        return this._name;
    }
    set name(val) {
        this._name = val;
    }

    show() {
        console.log(`${this._name}`)
    }

     static notShow() {
       return this.see = 'Car';
    }
}

class Clone extends User {
    constructor(name) {
        super(name)
    }
    notShow() {
        super.notShow();
    }
}


let user1 = new Clone();
console.log(user1.name); // get
user1.name = 'Dog';
user1.show(); // set

user1.notShow();    // static ERROR!!!
console.log(user1.see);