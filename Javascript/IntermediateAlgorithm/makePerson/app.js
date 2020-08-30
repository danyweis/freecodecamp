// Intermediate Algorithm Scripting: Make a Person
// Fill in the object constructor with the following 
// methods below:

// getFirstName()
// getLastName()
// getFullName()
// setFirstName(first)
// setLastName(last)
// setFullName(firstAndLast)
// Run the tests to see the expected output for each method. 
// The methods that take an argument must accept only one 
// argument and it has to be a string. These methods must 
// be the only available means of interacting with the object.

// Object.keys(bob).length should return 6.
// bob instanceof Person should return true.
// bob.firstName should return undefined.
// bob.lastName should return undefined.
// bob.getFirstName() should return "Bob".
// bob.getLastName() should return "Ross".
// bob.getFullName() should return "Bob Ross".
// bob.getFullName() should return "Haskell Ross" after bob.setFirstName("Haskell").
// bob.getFullName() should return "Haskell Curry" after bob.setLastName("Curry").
// bob.getFullName() should return "Haskell Curry" after bob.setFullName("Haskell Curry").
// bob.getFirstName() should return "Haskell" after bob.setFullName("Haskell Curry").
// bob.getLastName() should return "Curry" after bob.setFullName("Haskell Curry").

// MY CODE

var Person = function(firstAndLast) {
    // Complete the method below and implement the others similarly
    let arrName = firstAndLast.split(" ")

    this.getFullName = function( ) {
        return  arrName[0] + ' ' + arrName[1];
    },

    this.getFirstName = function() {
        return  arrName[0];
    },

    this.getLastName = function() {
        return  arrName[1];
    },

    this.setFullName = function(name) {
        arrName[0] = name.split(" ")[0],
        arrName[1] = name.split(" ")[1];
    },

    this.setFirstName = function(name) {
        arrName[0] = name;
    },

    this.setLastName = function(name) {
        arrName[1] = name;
    };
    
};

var bob = new Person('Bob Ross');
bob.getFullName();


  // console.log('before : ' + bob.getFullName());
  // console.log(bob.getFirstName());
  // // console.log(bob.getLastName());

  // bob.setFullName("Haskell Curry");
  // bob.setFirstName("Haskell");
  // bob.setLastName("Curry");

  // console.log('after : ' + bob.getFullName());
  // console.log(bob.getFirstName());
  // console.log(bob.getLastName()); 