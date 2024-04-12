const obj1 = {
    a: 1,
    b: 2,

    display: function () {
        console.log(this.a, this.b);
    }
}

const newObj = Object.create(obj1); // this static method creates a new object, using an existing object as the prototype of the newly created object.

console.log(newObj); // gives empty object {}

newObj.display(); // gives 1 2

// Difference between object created by this 

const obj3 = obj1; // here obj3 will point to the same obj1 object,, it will not create a new object or it creates a reference to the same object that obj1 points to.

obj3.c = 4; // updated the existing obj1 object. 

console.log(obj1); // output:- { a: 1, b: 2, display: [Function: display], c: 4 }