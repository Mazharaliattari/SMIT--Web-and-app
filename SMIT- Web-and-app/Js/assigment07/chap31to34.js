//question01
var date = new Date()
document.write(date)

question02
var arr = ['jan','Feb','Mar','Apr','May','june','July','Agu','Sep','Oct','Nov','Dec']
var date = new Date()
var month = date.getMonth()
document.write(`Current Month: ${arr[month]}`)


//question03
var arrDay = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat']
var day = new Date()
var CurrentDay = day.getDay()
document.write(`Today is: ${arrDay[CurrentDay]}`)


//question04
var arrDay = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat']
var date = new Date()
var CurrentDay = date.getDay()
var theDay = arrDay[CurrentDay]
if (theDay === 'Sun' || theDay || 'Sat'){
    document.write(`Its Fun day`)
}


//question05
var date = new Date()
var theDate = date.getDate()
if (theDate >= 1 && theDate <= 15) {
    document.write('first fifteen day of the month')
}

//question06
var date = new Date()
document.write(date + '<br>')

var time = date.getTime()
document.write(`Elapsed Milisecond since january 1, 1970: ${time} <br>`)

var minutes = date.getTime() / (1000 * 60 * 60 )
document.write(`Elapsed Minutes since january 1, 1970: ${minutes}`)


//question07
var date = new Date()
var time = date.getHours()
if (time >= 0 && time <= 11){
    alert('Its AM')
}else{
    alert("Its PM")
}


//question08
var date = new Date('31 Dec 2020')
alert(date)


//question09
var date2 = new Date('Feb 28 , 2025').getTime()
var date1 = new Date().getTime()

var calculate = date2 - date1
var get_day =  Math.round(calculate / (1000 * 60 * 60 * 24))
document.write(`${get_day} days have passed since 1st Ramdan, 2025`)


//question10
var curDate = new Date()
var date = new Date('2015')
document.write(`on refrence date: ${date} <br>`)

var result = curDate - date
document.write(`${Math.round(result / 1000)} second had passed since begining of 2015`)













