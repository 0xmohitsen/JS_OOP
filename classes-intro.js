// class initalization and implementaion
class Product {
    // constructor declaration
    constructor(name, price) {
        // it is used to create objects
        // it gets called first at the time of object creation
        this.name = name; // data member
        this.price = price; // data member
    }

    // member function
    getPrice() { // getter member function
        // use this keyword to access data member inside member functions
        return this.price;
    }

    setPrice(price) { // setter member function
        // use this keyword to access data member inside member functions
        this.price = price;
    }

    getName() { // getter member function
        // use this keyword to access data member inside member functions
        return this.name;
    }

    setName(name) { // setter member function
        // use this keyword to access data member inside member functions
        this.name = name;
    }

    displayProduct() { 
        console.log(`Product Name : ${this.name}\nProduct Price : ${this.price}`);
    }
}

// object creation
const product1 = new Product("Iphone", 120000);
console.log(product1);

// to access the member functions use dot(.) operator
product1.displayProduct(); 

const price = product1.getPrice();
console.log(price);

product1.setPrice(130000);
console.log(product1.getPrice());