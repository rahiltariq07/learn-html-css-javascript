/* Qn.1:- Prompt the user to enter their full name. Generate a username for them based on the input. Start username with @, followed by their full name and ending with the full name length.
eg. user name = "rahiltariq", username should be "@rahiltariq10".*/

let fullName = prompt("enter your fullname without spaces");

let userName ="@" + fullName + fullName.length;
console.log(userName);

