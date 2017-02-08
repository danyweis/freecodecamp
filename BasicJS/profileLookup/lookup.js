//  Setup
var contacts = [
  {
    "firstName": "Akira",
    "lastName": "Laine",
    "number": "0543236543",
    "likes": ["Pizza", "Coding", "Brownie Points"]
  },
  {
    "firstName": "Harry",
    "lastName": "Potter",
    "number": "0994372684",
    "likes": ["Hogwarts", "Magic", "Hagrid"]
  },
  {
    "firstName": "Sherlock",
    "lastName": "Holmes",
    "number": "0487345643",
    "likes": ["Intriguing Cases", "Violin"]
  },
  {
    "firstName": "Kristian",
    "lastName": "Vos",
    "number": "unknown",
    "likes": ["Javascript", "Gaming", "Foxes"]
  }
];


function lookUpProfile(firstName, prop) {
// Only change code below this line
  var myFirstName = [];
  for (var i = 0; i < contacts.length; i++) {


  //  console.log(myFirstName);
    if ( firstName === contacts[i].firstName) {
         //  TEST


      if (prop === "lastName") {
        return contacts[i].lastName;
      } else if (prop === "number") {
        return contacts[i].number;
      } else if (prop === "likes"){
        return contacts[i].likes;
      } else {
        return "No such property";
      }
    }

    else if (firstName !== contacts[i].firstName) {
      myFirstName.push(firstName);
    }
  }
  if (i >= contacts.length) {
    return "No such contact";
  }
// Only change code above this line
}

// Change these values to test your function
lookUpProfile("kristian", "likes");
