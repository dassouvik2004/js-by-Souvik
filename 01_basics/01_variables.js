const accountId = 15423
let accountEmail = "souvik@google.com"
var accountPassword = "12345"
let accountState;
let accountCountry;

// accountId = 2 // not allowed

accountEmail = "souvikdas1234@gmail.com"
accountPassword = "62918985"
accountState = "Kolkata"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId,accountEmail,accountPassword,accountState,accountCountry]);