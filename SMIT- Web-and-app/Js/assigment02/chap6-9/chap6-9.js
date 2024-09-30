//question no 01
var a = 10
document.write('Result:<br>The value Of is: ' + a + '<br>') 
document.write('......................................'+ '<br>') 

a = ++a
document.write('The Value of ++a is: ' + a + '<br>')
document.write('Now the Value of a is: ' + a + '<br><br><br>')

a = a++ 
document.write('The Value of a++ is: ' + a + '<br>')
document.write('Now the Value of a is: ' + ++a + '<br><br><br>')

a = --a 
document.write('The Value of --a is: ' + a + '<br>')
document.write('Now the value of --a is: ' + a + '<br><br><br>')

a = a--
document.write('The Value of a-- is: ' + a + '<br>')
document.write('Now the value of a is: ' + --a + '<br><br><br>')

//question no 02
var a = 2
var b = 1 
var result = --a - --b + ++b + b--
        //     1  -  0 +   1 + 1
document.write('a is 1' + '<br>' + 'b is 2 ' + '<br>' + 'result is ' + result + '<br><br><br>')    


// //question no 03
var user_input = prompt('Please Enter Your Name')
alert('Welcome to the web page')



// // //question no 05
var user_input = +prompt(' enter the any one number for table ' , 5)
document.write(user_input + ' x1= ' + user_input*1 + '<br>')
document.write(user_input + ' x2= ' + user_input*2 + '<br>')
document.write(user_input + ' x3= ' + user_input*3 + '<br>')
document.write(user_input + ' x4= ' + user_input*4 + '<br>')
document.write(user_input + ' x5= ' + user_input*5 + '<br>')
document.write(user_input + ' x6= ' + user_input*6 + '<br>')
document.write(user_input + ' x7= ' + user_input*7 + '<br>')
document.write(user_input + ' x8= ' + user_input*8 + '<br>')
document.write(user_input + ' x9= ' + user_input*9 + '<br>')
document.write(user_input + ' x10= ' + user_input*10 + '<br>')

//question no 6
var subject1 = prompt('Enter the Subject name' )
var subject1_marks = +prompt('Enter the marks obtained in'+ subject1)

var subject2 = prompt('Enter the Subject name' )
var subject2_marks = +prompt('Enter the marks obtained in '+ subject2)

var subject3 = prompt('Enter the Subject name' )
var subject3_marks = +prompt('Enter the marks obtained in ' + subject3)

var each_subject_total = 100

var subject1_per = (subject1_marks/each_subject_total)*100
var subject2_per = (subject2_marks/each_subject_total)*100
var subject3_per = (subject3_marks/each_subject_total)*100

var obtained_total = (subject1_marks+subject2_marks+subject3_marks)
var total_marks = 300
var final_percentage = (obtained_total/total_marks)*100

document.write(`
    <table>
        <tr>
            <th>Subjet</th>
            <th>Total Marks</th>
            <th>Obtained</th>
            <th>percentag</th>
        </tr> 
        <tr>
            <td>${subject1}</td>
            <td>${each_subject_total}</td>
            <td>${subject1_marks}</td>
            <td>${subject1_per}%</td>
        </tr>
        <tr>
            <td>${subject2}</td>
            <td>${each_subject_total}</td>
            <td>${subject2_marks}</td>
            <td>${subject2_per}%</td>
        </tr>
        <tr>
            <td>${subject3}</td>
            <td>${each_subject_total}</td>
            <td>${subject3_marks}</td>
            <td>${subject3_per}%</td>
        </tr>  
        tr>
            <th></th>
            <th>${total_marks}</th>
            <th>${obtained_total}</th>
            <th>${final_percentage}%</th>
        </tr>  
    </table>
    `)
 
