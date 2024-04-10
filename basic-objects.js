let obj1 = {
    name: "Mohit",
    age: 25,
    display: function display() {
        console.log(`${this.name} is ${this.age} years old`);
    },
    show: () => {
        console.log(this);
    }
}

console.log(obj1); // output :- { name: 'Mohit', age: 25, display: [Function: display] }
obj1.display(); // output :- Mohit is 25 years old
obj1.show(); // output :- { name: 'Mohit', age: 25, display: [Function: display] }


// but if I use arrow function rather than normal function

let obj2 = {
    name: "Krishna",
    agr: 25,
    display: () => {
        console.log(`${this.name} is ${this.agr} years old`);
    },
    show: () => {
        console.log(this);
    }
}

console.log(obj2); // output :- { name: 'Mohit', age: 25, display: [Function: display] }
obj2.display(); // output :- undefined is undefined years old
obj2.show(); // output :- {}