// Intermediate Algorithm Scripting: Convert HTML Entities
// Convert the characters &, <, >, " (double quote),
// and ' (apostrophe), in a string to their corresponding HTML entities.


// convertHTML("Dolce & Gabbana") should return Dolce &amp; Gabbana.
// convertHTML("Hamburgers < Pizza < Tacos") should return Hamburgers &lt; Pizza &lt; Tacos.
// convertHTML("Sixty > twelve") should return Sixty &gt; twelve.
// convertHTML('Stuff in "quotation marks"') should return Stuff in &quot;quotation marks&quot;.
// convertHTML("Schindler's List") should return Schindler&apos;s List.
// convertHTML("<>") should return &lt;&gt;.
// convertHTML("abc") should return abc.

// MY CODE

function convertHTML(str) {
    if(str === null) {return}
    const arr = str.split("")

    return arr.map(function(symbol){
    if (symbol === "&"){return "&amp;"}
    if (symbol === "<"){return "&lt;"}
    if (symbol === ">"){return "&gt;"}
    if (symbol === '"'){return "&quot;"}
    if (symbol === "'"){return "&apos;"}
    return symbol
    }).join('')
}
    
    convertHTML("Dolce & Gabbana");
    
// FIRST IF STATEMENT LOOKS IF THER IS NOT UNDEFINED GOING IN THE FUNCTION

console.log(convertHTML("Dolce & Gabbana"));
console.log(convertHTML("Hamburgers < Pizza < Tacos"));
console.log(convertHTML("Sixty > twelve"));
console.log(convertHTML('Stuff in "quotation marks"'));
console.log(convertHTML("Schindler's List"));
console.log(convertHTML("<>"));
console.log(convertHTML("abc"));
    
