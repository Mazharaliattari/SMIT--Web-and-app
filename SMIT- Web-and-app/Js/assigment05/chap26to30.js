
//question01 possitive number
var user_number = +prompt('enter any number')
var round = Math.round(user_number)
var floor = Math.floor(user_number)
var ceiel = Math.ceil(user_number)
document.write(`Number: ${user_number}<br>Round of value: ${round}<br>
    Floor value: ${floor}<br>Ceiel value: ${ceiel}`)


//question02 negitive number
var user_number = +prompt('enter any number')
var round = Math.round(user_number)
var floor = Math.floor(user_number)
var ceiel = Math.ceil(user_number)
document.write(`Number: ${user_number}<br>Round of value: ${round}<br>
    Floor value: ${floor}<br>Ceiel value: ${ceiel}`)


// //question03
var user_number = +prompt('enter any number')
var absulote = Math.abs(user_number)
document.write(`The absolute value of ${user_number} is ${absulote} `)



// //question04
var random1 = Math.ceil(Math.random() * 5)
var random2 = Math.ceil(Math.random() * 5)

document.write(`Random dice value: ${random1} <br>`)
document.write(`Random dice value: ${random2}`)



// //question05
// var cooin1 = Math.floor(Math.random()*2 +1)
var cooin2 = Math.floor(Math.random() * 2 + 1)
if (cooin2 === 2) {
    document.write(`${cooin2}<br>random coin value: Head`)
} else {
    document.write(`${cooin2}<br>random coin value: Tails`)

}


// //question06
var random = Math.ceil(Math.random() * 100)

document.write(`Random number between 1 and 100: ${random}`)


// //question07
var whieght = prompt('Enter your Wheight')
var convert = parseInt(whieght)
document.write(`The whight of user is ${whieght} kilograms`)


// //question08
var ranNumber = Math.ceil(Math.random() * 10)
var userInput = prompt('Enter A number from 1 to 10')
if (userInput === ranNumber) {
    alert('congratulate user!')
} else {
    alert("try again latter")
}










