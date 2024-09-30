//question no 01
var city_name = prompt("please enter the city name")
if (city_name == 'karachi'){
    alert('welcome to the city of light')
}


// // //quetion no 02
var user_gander = prompt('Enter Your gender')
if(user_gander == "male"){
    alert("Good Morning Sir")
}else if(user_gander == 'female'){
    alert('Good Morning Maam')
}


//quetion no 03
var signal_color = prompt('Enter the signal colour')

if(signal_color == 'red'){
    alert('Must stop')
}else if(signal_color == 'yellow'){
    alert('Redy to move')
}else if(signal_color == 'green'){
    alert('Move now')
}


//question no 04
var fuel = +prompt('enter your reamaning fuel in litres')
if(fuel < 0.25){
    alert('please refill the fuel in your car')
}


//question no 05
var a = 4
if (++a === 5){
    alert('given condition for variable is true')
}

var b = 82 
if(b++ === 83){
    alert('given condition for variable is false')
    
}
var c = 12
if(c++ === 13){
    alert('condition 1 is false')
}else if(c === 13){
    alert('condition 2 is true')
}else if(++c < 14 ){
    alert('condit 3 is false')
}else if(c === 14){
    alert('condition 4 is true')
}

// The B part is false (b++ === 83)
// The C part is fale  (c++ === 13)
//               false (++c < 14 )


//D
var materialCost = 20000
var laborCost = 2000
var totalCost = materialCost + laborCost

if (totalCost === materialCost+laborCost){
    alert('The cost equal')
}
// //e
if (true){
    alert('true')
}
if(false){
    alert('false')
}
// //f
if(car < cat ){
    alert('car is smaller than cat')
}

// //quesion no 6
var subject_one = +prompt('Enter the first subject Marks')
var subject_two = +prompt('Enter the second subject Marks')
var subject_three = +prompt('Enter the third subject Marks')

var total_marks = 300
var obtained_marks = (subject_one + subject_two + subject_three)
var percentage = (obtained_marks/total_marks)*100

var grade 
var remarks

if(percentage >= 80){
    grade = 'Aone'
    remarks = 'Excellent'
}else if(percentage >= 70){
    grade = "A"
    remarks = "Good"
}else if(percentage >= 60){
    grade = "B"
    remarks = 'You need to improve'
}else if(percentage < 60){
    grade = "Fail"
    remarks = 'Sorry'
}

document.write(`
    
    <h1>Total Marks</h1> <br><br>
    <p>Total Marks ${total_marks}</p>
    <p>Marks obtained ${obtained_marks}</p>
    <p>percentage ${percentage}</p>
    <p>Grade ${grade}</p>
    <p>Remarks ${remarks}</p>
    
    
    `)


//question no 07
var secreat_number = 10
var guess_number = +prompt('Enter your ectert number')
if(guess_number === secreat_number){
    alert('Bingo! Correct answer')
}else if (++guess_number === secreat_number){
    alert('Close enough to the correct answer')
}




//question no 10
var wheather_temp = +prompt('Enter the wheather temp')
if(wheather_temp > 40 ){
    alert('It is to hoot outside')
}

else if(wheather_temp > 30){
    alert('The wheather today is normal')
}

else if(wheather_temp > 20){
    alert('Today weather is cool')
}

else if(wheather_temp > 10){
    alert('OMG! Todays Weather is si cool')
}

else{
    alert('chal nikal')
}


//question no 11
var first_number = +prompt('Enter the first number for calculate')
var second_number = +prompt('Enter the second number for calculate')
var operation = prompt('Enter the math operator for calculate')

var result

if(operation === "+"){
    result = first_number + second_number
}

else if (operation === "-"){
    result = first_number - second_number
}

else if(operation === '/'){
    result = first_number / second_number
}

else if(operation === '%'){
    result = first_number % second_number
}
else{
    result = 'Invalid operation'
}
alert(result)