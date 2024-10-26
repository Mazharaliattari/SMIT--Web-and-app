//question1
var empty_arr = [ [],[],[] ] 

//question2
var multiArr = [ [0,1,2,3],[1,0,1,2],[2,1,0,1] ]
for(var i = 0; i < 3; i++){
    document.write(` ${multiArr[i]} <br><br>`)
}


// //question3
for(var i = 1; i <= 10; i++){
    document.write(`${i} <br>`)
}

//question4
var tableNumber = prompt('Enter any number for multiplaction')
var tableLengnth = prompt('Enter the length for table')
document.write(`Multiplaction Table of ${tableNumber} <br/> length ${tableLengnth} <br><br>`)

for (var i = 1; i <= tableLengnth; i++ ){
    document.write(`${tableNumber} X ${i} = ${tableNumber * i} <br>`)
}

// //question5
 var fruits = ['apple', 'banana', 'mango', 'orange','strawberry']
for(var i = 0; i < fruits.length; i++) {
    document.write(fruits[i] + '<br>'+'<br>')
}
for(var i = 0; i < fruits.length; i++){
    document.write(`alemnt at index ${i} ${fruits [i]} <br>`)
}

// //question6

//a
document.write(`<h3>Counting:</h3><br>`)
for(var i = 1; i < 16; i++){
    document.write(`${i} `)
}
// //b
document.write(`<h3>Reserve Cunting:</h3>`) 
for(var i = 10; i >= 1; i--){
    document.write(`${i} `)
}
// //c
document.write(`<br><h3>Even </h3>`)
for(var i = 0; i <= 20; i++){
    if(i % 2 === 0){
        document.write(`${i} `)
    }
}
// //d
document.write(`<br><h3>Odd </h3>`)
for(var i = 0; i <= 20; i++){
    if(i % 2 !== 0){
        document.write(`${i} `)
    }
}
// //e
document.write(`<br><h3>Series</h3>`)
for(var i = 1; i <= 20; i++){
    if(i % 2 === 0){
        document.write(`${i}k,`)
    } 
}


//question7
var items = ["cake", "apple pie", "cookie", "chips", "patties"]
var userInput = prompt("What do you want to order sir/maa'm")
var itemFound = false

for( var i = 0; i < items.length; i++){
    if (userInput === items[i]){
        itemFound = true
        break;
    }
}
if(itemFound === true){
    document.write(`${userInput} is available at index ${i} in our bakery  `)

}
else{
    document.write(`${userInput} is not available in our bakery`)

}

//question8
var A = [24, 53, 78, 91, 12]
document.write(`Array items: ${A} <br>`)
var largestNum = 0
for (var i = 0; i < A.length; i++) {
    if (A[i] > largestNum) {
        largestNum = A[i]
    }
}

document.write(` The largest Number is ${largestNum} `)



//qustion9
var A = [24, 53, 78, 91, 12]
document.write(`Array items: ${A} <br>`)

var smallestNum = 1000
for (var i = 0; i < A.length; i++) {
    if (A[i] < smallestNum) {
        smallestNum = A[i]
    }
}

document.write(` The smallest Number is ${smallestNum} `)

//qustion10
for(var i = 1; i <=20; i++){
    document.write(`${i*5} <br>`)
}









