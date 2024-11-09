// var first = prompt("Enter the first Name")
// var last = prompt("Enter the last Name")
// var plus = first+ " " + last
// document.write(plus)



// var user = prompt('Ener your password')
// if (user.toUpperCase() === 'ADMIN') {
//     alert('Congratulation!')
// }
// else{
//     alert('password is wrong')
// }

// var word = 'an apple a day'
// var copy = word.slice(3,8)
// alert(copy)

// var sentence = 'A Boy Go to his School Everyday Because Going School is Compulsory'
// var findIndex = sentence.lastIndexOf('School')
// alert(findIndex)


// var firstName = 'John Doe'
// alert(firstName.charAt(5))


// var text = 'There is a Book related to the World War II , World War II';
// console.log(text)

// var updatedText1 = text.replaceAll("World War II", "the Second World War");  // Replaces All the Words
// // var updatedText2 = text.replace("World War II", "the Second World War");  // Just Replace the First Word 

// console.log(updatedText1)
// // console.log(updatedText2)


// var word = 'i go to office everday office'
// console.log(word)

// var updateWord = word.replaceAll('office','bathroom')
// console.log(updateWord)



// var num = 5.1
// console.log(Math.round(num))
// console.log(Math.floor(num))
// console.log(Math.ceil(num))


// var randomNum = Math.random()*6
// console.log(randomNum.toFixed(0))



// var num = '5.3'
// console.log(typeof(num))


// console.log(parseInt(num))

// var num1 = '5.6'
// console.log(typeof(num1))
// console.log(num1)


// var num2 = parseFloat (num1)
// console.log(typeof(num2))
// console.log(num2)


// var randomNum = Math.floor(Math.random() * 5) + 1  
// // var randomNum = Math.random() * 4
// console.log(randomNum.toFixed(3))

// var todayDate = new Date().toString()
// console.log(todayDate)

// var copydate = todayDate.slice(0,10)
// console.log(copydate)

//question04
// var text = 'Hello world'
// document.write(` String: ${text} <br> last index of ${text.lastIndexOf('l')} <br><br>`)


// //question05
// var character = 'pakistani'
// document.write(` String: ${character} <br> character at index 3: ${character.charAt(3)} <br><br>`)


//question06
// var firstName = 'Mazhar'
// var lastName = 'Ali'
// var result = firstName.concat(' ', lastName)
// alert(result)


// //question07
// var cityName = 'Hyderabad'
// document.write(`City: ${cityName} <br>`)
// var replaceCity = cityName.replace("Hyder","Islam")
// document.write(`After replacement: ${replaceCity} <br><br>`)



// //question08
// var message = 'Ali and Sami are best friends. They play cricket and football together'
// document.write(`${message.replaceAll("and",'&')} <br><br>`)



// //question09
// var valueString = '472'
// document.write(`Value: ${valueString} <br> Type: ${typeof(valueString)} <br>`) 

// var valueNumber = 472
// document.write(`Value: ${valueNumber} <br> Type: ${typeof(valueNumber)} <br><br>`) 


// //question10
// var userInput = prompt("please Enter the item")
// document.write(`User Input: ${userInput} <br> Upper Case: ${userInput.toUpperCase()} <br><br>`)


//question11
// var user = prompt('Please Inter the item')
// document.write(`User Input: ${user} <br> Upper Case: ${user.slice(0,1).toUpperCase()}${user.slice(1)} <br>`)


//question12
// var num1 = 35.36
// document.write(`Number ${num1} <br> Result: ${num1.toString().replace('.','')}`)



//question13
// var userName = prompt('Please enter your good name')

// for( var i = 0; i < userName.length; i++){

//     var foundIt = false
// if (userName[i].charCodeAt() === 33 || userName[i].charCodeAt() === 44 || userName[i].charCodeAt() === 46 || userName[i].charCodeAt() === 64){
//     foundIt = true
//     break;

// }
// }
// if(foundIt === true){
//     alert(`${userName}: is not avalid username`)   
// }else{
//     alert(`${userName}: is valid username`)
// }


//question14
// var userItem = prompt('What do you want to order sir/ma,am').toLowerCase()
// var A = ['cake', 'apple pie', 'cookie', 'chips', 'patties',]
// var foundIt = false

// for(var i = 0; i < A.length; i++){
//     if(userItem === A[i]){
//         foundIt = true
//         document.write(`${userItem} is available at index ${i} in our bakery`)


//     }
// }
// if (foundIt === false){
//     document.write(`${userItem} is not available in our bakery`)

// }


// question15
// var userpasword = prompt('Enter a password')
// if (userpasword.charCodeAt() >= 48 && userpasword.charCodeAt <=57 && ){

// }



// question16
// var university = 'University of Karachi'.split('')


// for(var i =0; i < university.length; i++){

//   document.write(`${university[i]} <br>`)
// }

// question17

// var usreInput =  prompt('Enter a country name and get there last latter')
// document.write(`user input: ${usreInput} <br>`)
// var last = usreInput.charAt(usreInput.length - 1)
// document.write(`last character of input: ${last}`)


// question18
var sentence = 'The quick brown fox jumps over the lazy dog'.toLowerCase().split(" ")
count= 0
for(var i = 0; i < sentence.length; i++ ){
  if (sentence[i] === 'the'){
    count++
  }
}
document.write(`Text:  The quick brown fox jumps over thelazy dog <br>
There are ${count} occurences of word "the"`)


