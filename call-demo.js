// we'll learn call method
const fruitData = {
    name: "Apple",
    price: 100,

    display: function () {
        console.log(`${this.name} is ${this.price} rupees per kg`);
    }
}

const obj = function (num1, num2) {
    // here we are using this keyword and it will reference to the calling site which is obj1 and obj1 is a global variable so eventually this will reference to the global object.
    console.log(num1+num2)
    this.display();
}

// call method directly calls the function with the given this value ( here fruitData is this value ) 
obj.call(fruitData, 1,2);

// Now apply is one method available

// which is almost similar to call method.

// only given arguments are in array.