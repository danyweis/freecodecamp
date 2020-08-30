// Intermediate Algorithm Scripting: Map the Debris
// Return a new array that transforms the elements' average altitude into their orbital 
// periods (in seconds).

// The array will contain objects in the format {name: 'name', avgAlt: avgAlt}.

// You can read about orbital periods on Wikipedia.

// The values should be rounded to the nearest whole number. The body being orbited is 
// Earth.

// The radius of the earth is 6367.4447 kilometers, and the GM value of earth is 
// 398600.4418 km3s-2.


// orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]) should return [{name: "sputnik", orbitalPeriod: 86400}].
// orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, 
// {name: "moon", avgAlt: 378632.553}]) should return [{name : "iss", orbitalPeriod: 5557}, 
// {name: "hubble", orbitalPeriod: 5734}, {name: "moon", orbitalPeriod: 2377399}].

// MY CODE

function orbitalPeriod(arr) {
    var GM = 398600.4418;
    var earthRadius = 6367.4447;

    function findOrbit(earthR, avgA){
        return earthR + avgA
    }

    for (let i = 0; i < arr.length; i++){
        arr[i].orbitalPeriod = Math.round(Math.PI*2*Math.sqrt(Math.pow(findOrbit(earthRadius, arr[i].avgAlt), 3)/ GM))
        delete arr[i].avgAlt
    }
    return arr;
}
/* 
calculation after Wikipedia is 2π√a³/u
USED

1 created function
    which will return a (a = earthRadius + avgAlt)
2 a will be power 3 (Math.pow(function, 3))
3 and a divided by u (u is given = GM)
4 a and u will be passed in Math.sqrt
5 which again will be multiplied by pi and 2

*/
console.log(
orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]));]
console.log(
orbitalPeriod([
{name: "iss", avgAlt: 413.6}, 
{name: "hubble", avgAlt: 556.7}, 
{name: "moon", avgAlt: 378632.553}
]))