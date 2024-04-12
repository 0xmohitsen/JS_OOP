// We'll learn bind method

const fruitData = {
    name: "Apple",
    price: 100,

    display: function () {
        console.log(`${this.name} is ${this.price} rupees per kg`);
    }
}

const obj1 = function () {
    // here we are using this keyword and it will reference to the calling site which is obj1 and obj1 is a global variable so eventually this will reference to the global object.
    this.display();
}

// obj1(); // output :- TypeError: this.display is not a function

// Now how can I bind this keyword with fruitData object

const fruitData1 = {
    name: "Apple",
    price: 100,

    display: function () {
        console.log(`${this.name} is ${this.price} rupees per kg`);
    }
}

const obj2 = function (num1, num2) {
    // here we are using this keyword and it will reference to the calling site which is obj1 and obj1 is a global variable so eventually this will reference to the global object.
    console.log(num1+num2)
    this.display();
}

const execute = obj2.bind(fruitData1,1,2);

execute();