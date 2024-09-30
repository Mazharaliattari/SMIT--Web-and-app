
//question no 01
var character = prompt('Enter the character')
if (character.charCodeAt() >=97 && character.charCodeAt() <= 122){
    alert(character + ' is a lowercase latter')
}else if(character.charCodeAt () >=65 && character.charCodeAt() <=132){
    alert(character + ' is a uppercase latter')
}else if(character.charCodeAt() >=48 && character.charCodeAt() <=57){
    alert(character + ' is a number') 
}else{
    alert(character + ' you have typed a wrong character')
}

//question no 02
var intiger1 = +prompt('Enter the Integer 1')
var intiger2 = +prompt('Enter the Integer 2')

if(intiger1 > intiger2){
    alert('The larger integer is ' + intiger1)
}else if (intiger2 > intiger1 ){
    alert("The larger Integer is " + intiger2)
}else if(intiger1 === intiger2){
    alert('both integer ' + intiger1 + ' & ' + intiger2 + ' is ' + ' equal')
}else{
    alert('invalid number')
}

//question no 03
var userinput = +prompt('Enter the positive, nagitive, zero number')

if(userinput > 0){
    alert('you have typed a positive number' )
}else if (userinput < 0){
    alert('you have typed a nagitive number' )

}else if (userinput === 0 ){
    alert('you have typed a zero number' )

} 

//question no 04
var userinput = prompt('Enter the cherecter')

if (userinput ==="a" || userinput === 'e' || userinput === "i" || userinput === "o" || userinput === "u" ){
    alert('the ' + userinput + ' vowel')
}else{
    alert('The ' + userinput + " not a vowel")
}

//question no 05

var user_pasword = "admin12345"
var userinput = prompt('enter the password')

if (userinput === ""){
    alert ('Please enter your password')
}else if (userinput === "admin12345"){
    alert('Correct! The password you entered matches the original password.')
}else{
    alert('incorrect password')
}


// question no 06
var greeting;
var hour = 13;
if (hour < 18) {
    greeting = "Good day";
}
else{
    greeting = "Good evening";
}

console.log(greeting)

