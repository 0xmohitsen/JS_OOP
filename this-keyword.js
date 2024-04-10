function Product(name) {
    this.name = name;
}

const obj1 = new Product("Ipad");
console.log(obj1); // returns this is written or not it will return the object whom this keyword is referencing

// but if there is another object rather than this ( return this)

function Product1(name) {
    this.name = name;

    return {name: "boat-watch"}
}

const obj2 = new Product1("Apple-Watch");
console.log(obj2); // it will print { name: 'boat-watch' }

// Except this 

function Product3(name) {
    this.name = name;

    return 10;
}

const obj3 = new Product3("Ipod");
console.log(obj3); // will print Product3 { name: 'Ipod' }