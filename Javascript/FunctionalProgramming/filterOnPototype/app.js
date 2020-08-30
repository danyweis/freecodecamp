// Functional Programming: Implement the filter Method on a Prototype

// It would teach us a lot about the filter method if we try to implement 
// a version of it that behaves exactly like Array.prototype.filter(). 
// It can use either a for loop or Array.prototype.forEach().

// Note: A pure function is allowed to alter local variables defined within its scope, 
// although, it's preferable to avoid that as well.

// Write your own Array.prototype.myFilter(), which should behave exactly like Array.prototype.filter(). 
// You may use a for loop or the Array.prototype.forEach() method.

// new_s should equal [23, 65, 5].

// Your code should not use the filter method.

//  ==>  GIVEN CODE  <==

var s = [23, 65, 98, 5];

Array.prototype.myFilter = function(callback){

  // Only change code below this line

  var newArray = [];

  this.forEach(x => {   // WITH THIS I CREATE A forEach TO LOOP OVER THE ARRAY
    if(x % 2 === 1){    // IF THE CURRENT VALUE % 2 === 1 (IN ODD) 
      newArray.push(x)  // PUSH IN THE NEW ARRAY AND LIKE THAT THE OLD ARRAY STAYS UNMODIFIED
    }
    
    });
  // Only change code above this line
  return newArray;

};

var new_s = s.myFilter(function(item){
  return item % 2 === 1;
});
