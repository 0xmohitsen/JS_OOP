const obj1 = {
    firstName: "John",
    lastName: "Smith",
    getDetails: () => {
        console.log(this.firstName, this.lastName);
    }
}

obj1.getDetails();
// In this case, we are using arrow function to define getDetails method
// When arrow function is used with this keyword, this keyword resolve as lexical scope
// Here this is inside arrow curlies, it is not defined here so it goes to outer scope which is obj scope there it is not defined too. 
// then it goes outside obj1 in the global scope where it is defined
// So it references ultimately to global scope's object
// And in the output we get undefined because there is no property of firstName and lastName.

const obj2 = {
    name: "Akshit",
    age: 23,

    getDetails : function () {
        console.log(this.name, this.age);
    }
}

obj2.getDetails();

// In this case, we are using normal function and there it references to the calling site.
// obj2 is calling site so it will reference to the obj2 object
// and output will be :- Akshit 23

const obj3 = {
    name: "Sam",
    age: 24,

    getDetails: function (){
        // it comes to the function scope because in arrow curlies it is not defined and here is a normal function and reference to the obj3 object
        setTimeout(() => {
            // this resolves as lexical scope 
            console.log(this.name, this.age);
        }, 3000);
    }
}

obj3.getDetails();
