
function myReplace(str, before, after) {
 // si premier charactere de before maj alors fait premier de after aussi maj
if(before.charAt(0) == before.charAt(0).toUpperCase()){
  after.charAt(0).toUpperCase();
  after = after.replace(after.charAt(0), after.charAt(0).toUpperCase());
  console.log(after);
} else {
  
}
// remplace before par after 
  str = str.replace(before, after);
  
  return str;
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
