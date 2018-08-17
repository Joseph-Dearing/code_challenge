
function stringy(ten) {
  /*We are preforming a stringy function above, a "stringy"
  also know as "string" is basically a set of words
  like names, objects, and etc*/
  var a = "";
  /*The function above is used to start our new string*/
  for(var i = 0; i < ten; i++) {
    a += i % 2 === 1? "0" : "1";
  }
  
  return a;
}

  /*So the function above we have the var i which is 0. 
  Since it's value is 0 it is less then ten. With the i++ that 
  comes afterwards is used to increment it's value which basically 
  means to increase it's value by 1. Thus i remainer is now 1 and
  2 and 1 are equal in value and type because they provide a true
  function of the ternary operator of ?. So now we will console log our 
  numbers 0 and 1 to the board which should return true in the console log
  which would be positive.*/

  /*We are returning the var a because that is the new string 
  that we have created that we would to return the console log*/


console.log(stringy(6) == "101010");
console.log(stringy(4) == "1010");
console.log(stringy(12) == "101010101010");

/*So we are now console logging the stringy (4) for example brings 
back 4 charcters or numbers, and stringy(6) brings back 6 charcters or
numbers basically.*/