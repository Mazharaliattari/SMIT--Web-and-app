








var date = new Date(" Feb 28 , 2025").getTime();

var new_date = new Date().getTime();
console.log(date)

var result = date - new_date;
console.log(result)

    var minutes = Math.round(result / (1000 * 60));
    document.getElementById("minutes").innerHTML = `<h1> ${minutes}</h1>`
    console.log(minutes)



    var days = Math.round(result / (1000 *60 *60 *24));
    document.getElementById("days").innerHTML = `<h1> ${days}</h1>`
    console.log(days)
 


    var month = Math.round(result/(1000 *60 *60 *24 *30))
      document.getElementById("month").innerHTML = `<h1> ${month}</h1>`
    document.write(`<br>Months is: ${month}<br>`)

    var minute = Math.round(result / (1000 *60));
    document.getElementById("minutes").innerHTML = `<h1> ${minute}</h1>`



var hours = Math.round(result / (1000 *60 *60 ));
console.log(hours)
document.getElementById("hours").innerHTML = `<h1> ${hours}</h1>`;



























// var date = new Date(" Feb 28 , 2025").getTime()
// var newdate = new Date().getTime()
// var result = date - newdate


// function minutes (){
// var minutes = Math.round(result / (1000 *60))
// console.log(minutes)

// document.getElementById("minutes").innerHTML = <span> ${minutes}</span>
// }


// function days(){
// var days = Math.round(result / (1000 *60 *60 *24 ))
// console.log(days)
// document.getElementById("days").innerHTML = <span> ${days}</span>

// }


// function months(){
// var months = Math.round(result / (1000 *60 *60 *24 *30 ))
// console.log(months)
// document.getElementById("months").innerHTML = <span> ${months}</span>



// }