function Product(name) {
    this.name = name;
}

const p1 = new Product("Apple");

console.log(p1);

// Now I'll make changes to the Product function

Product.prototype.display = function display() {
    console.log('Product name is', this.name);
}

p1.display(); // output :- Product name is Apple

const isThatEqual = p1.__proto__ === Product.prototype;
console.log(isThatEqual);

// *********IMPORTANT*********

/*So when you create an function or class , JS creates an object itself which is empty internally + creates a property names prototype inside the function/class that points to the empty JS object or value of prototype is this JS object.

This JS object has linking to the other prototypes.JS
This JS object has property name constructor that points to the Function/class itself.

So when you create a object from the function/class using new keyword it follow 4 step process.
1. creates brand new empty object.
2. it creates a linkage with function.prototype
3. it executes the function so it executes constructor property first and assigns this property to newly created empty object.
4. it returns the pointed object.

Now this object has product property and behavior.Function

after this If i make changes to the function/class using function.prototype that changes will be available for already created objects that is done in the above example.

We can manually access that function.prototype using __proto__ method.*/