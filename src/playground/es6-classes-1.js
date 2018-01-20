class Person {
    constructor (name = 'Anonymous', age = 0) {
        this.name = name;
        this.age = age;
    }

    getGreeting() {
        return `Hi. I'm ${ this.name }!`;
    }

    getDescription() {
        return `${this.name} is ${this.age} year(s) old.`;
    }
}

class Student extends Person {
    constructor (name = 'Anonymous', age = 0, major) {
        super(name, age);
        this.major = major;
    }

    hasMajor() {
        return !!this.major;
    }

    getDescription() {
        let description = super.getDescription();

        if(this.hasMajor()) {
            description += ` Their major is ${this.major}.`;
        }

        return description;
    }
}

class Traveler extends Person {
    constructor (name = 'Anonymous', age = 0, homeLocation = 'Nowhere') {
        super(name, age);
        this.homeLocation = homeLocation;
    }

    hasHomeLocation() {
        return !!this.homeLocation;
    }

    getGreeting() {
        let greeting = super.getGreeting();

        if(this.hasHomeLocation()) {
            greeting += ` I'm visiting from ${this.homeLocation}.`;
        }

        return greeting;
    }
}

const meStudent = new Student('Kar Martirosyan', 28, 'Computer Science');
console.log(meStudent.getDescription());

const me = new Traveler('Kar Martirosyan', 28, 'Yerevan');
console.log(me.getGreeting());

const a = new Student();
console.log(a.getDescription());