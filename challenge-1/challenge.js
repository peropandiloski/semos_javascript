let name = prompt("What is your name?"); //Pero
let firstCharName = name.slice(0,1); // take first char of the name
let upperCaseFirstCHar = firstCharName.toUpperCase(); // make first char always to be UPPERCASE p==>P
let restOfName = name.slice(1, name.lenght); // rest of name => ero
restOfName = restOfName.toLowerCase(); // rest of name all chars goes to lower case
let capitalisedName = upperCaseFirstCHar + restOfName;

alert('Hello ' + capitalisedName);

