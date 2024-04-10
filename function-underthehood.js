function Product(name, price) {
    this.name = name;
    this.price = price;
    return this; 
}

const obj1 = new Product("Iphone", 120000);
console.log(obj1); // Giving same output as we got in classes

const obj2 = Product("MackBook", 130000);
console.log(obj2); // will give global Object as an output when return this keyword is used inside Product function

// But if that is not present it will give undefined

// *********** IMPORTANT **************** 

// This keyword references to from where is it called or from the calling site.

// New keyword not only used for creating objects but also does a lot more than that 

// 4 steps process of 'new' keyword

//1. new keyword created an empty object {}
//2. it provide links 
//3. it gives this keyword reference to this newly created empty {} object
//4. it executes the function it has used to create new object.

// Difference between function and classes

//1. we can not create objects without new keyword in classes but if we don't give new keyword in function it will behave as a normal function

//2. classes are just a syntactical sugar on functions, under the hood functions are getting used.

//3. classes introduces to make it consistent with other programming languages