// ES6: Use getters and setters to Control Access to an Object
// You can obtain values from an object and set the value of a property within an object.

// These are classically called getters and setters.

//     =>  Getter functions are meant to simply return (get) the value of an object's private variable to the user without the user directly accessing the private variable.

//     =>  Setter functions are meant to modify (set) the value of an object's private variable based on the value passed into the setter function.
// This change could involve calculations, or even overwriting the previous value completely.


// class Book {
//     constructor(author) {
//         this._author = author;
//     }
//   // getter
//     get writer() {
//         return this._author;
//     }
//   // setter
//     set writer(updatedAuthor) {
//         this._author = updatedAuthor;
//     }
// }
// const lol = new Book('anonymous');
// console.log(lol.writer);  // anonymous
// lol.writer = 'wut';
// console.log(lol.writer);  // wut

// Notice the syntax used to invoke the getter and setter. They do not even look like functions. 
// Getters and setters are important because they hide internal implementation details. 
// Note: It is convention to precede the name of a private variable with an underscore (_). 
// However, the practice itself does not make a variable private.
// Use the class keyword to create a Thermostat class. The constructor accepts a Fahrenheit temperature.
// Now create a getter and a setter in the class, to obtain the temperature in Celsius.
// Remember that C = 5/9 * (F - 32) and F = C * 9.0 / 5 + 32, where F is the value of temperature in Fahrenheit, and C is the value of the same temperature in Celsius.
// Note: When you implement this, you will track the temperature inside the class in one scale, either Fahrenheit or Celsius.
// This is the power of a getter and a setter. You are creating an API for another user, who can get the correct result regardless of which one you track.
// In other words, you are abstracting implementation details from the user.


// Thermostat should be a class with a defined constructor method.
// class keyword should be used.
// Thermostat should be able to be instantiated.
// A getter should be defined.
// A setter should be defined.
// Calling the setter should set the temperature.


// MY CODE

// Only change code below this line

class Thermostat{   // WE CREATE THE CLASS THERMOSTAT
    constructotr(tempF){    // WE GIVE IT A CONSTRUCTOR WITCH TAKES A FAHRENHEIT VALUE
        this._tempF = tempF;    // CREATE A PRIVATE VALUE THIS._TEMPF
    }
    get temperature(){  // CREATE A GETTER TEMPERATURE
        return 5/9*(this._tempF - 32)  // RETURN THE VALUE OF FAHRENHEIT IN CELSIUS
    }
    set temperature(givenTemperature){  // CREATE A SETTER WITCH TAKES A VALUE
        this._tempF = givenTemperature; // AND SETS A NEW VALUE TO TEMPF
    }
}
  // Only change code above this line

const thermos = new Thermostat(76); // Setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in Celsius
thermos.temperature = 26;
temp = thermos.temperature; // 26 in Celsius