const obj1 = {
    a: 1,
    b: 2
}

// obj1 bucket is constant that we can not change. but obj1 is referencing to the obj {a:1 , b:2} which is in heap memory and mutable.

obj1.a=2; // updated the obj1 property.
console.log(obj1); // output:- { a: 2, b: 2 }

// Seal method
Object.seal(obj1); // after applying this we can update the exiting one but can not add new properties.

obj1.b = 3; // updated the obj1 property.
console.log(obj1); // output:- { a: 2, b: 3 }

// Freeze method
Object.freeze(obj1); // after applying this we neither add new properties nor update the exiting ones

obj1.b = 4; // there will be no effect of this. 
console.log(obj1); // output:- { a: 2, b: 3 }
