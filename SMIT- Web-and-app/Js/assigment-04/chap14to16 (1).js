//question no1
var literalNotation = []

literalNotation [0] = 'ali'
literalNotation [1] = 'amir'
literalNotation [2] = 'amir'
literalNotation [3] = 'nasir'
literalNotation [4] = 'hamdi'
console.log(literalNotation)

// //question no2
var objectNotation = new Array

objectNotation [0] = 'zafar'
objectNotation [1] = 'fakhar'
objectNotation [2] = 'mahar'
objectNotation [3] = 'jamal'
objectNotation [4] = 'rahib'

console.log(objectNotation)

// //question3
var stringArry = ['my name is mazhar ali']
console.log(stringArry)


// //question4
var numberArry = [1,2,3,4,5,]
console.log(numberArry)

// //question5
var boleanArry = [true,false]
console.log(boleanArry)


// //question6
var mixedArry = [true,false,'ali' , 'amir' , 'baqir' , 1 ,2,3,4,5]
console.log(mixedArry)


//question7
var qualification = ['Qualificaton', '1) SSC' , '2) HSC' ,'3) BSC' ,'4) B.Com' ,'5) MS' ,'6) M.Phil.' ,'7) PhD' ,]
document.write( '<h2>' + qualification[0] + '<br>' +'<br>' + '</h2>')
document.write(qualification[1] + '<br>')
document.write(qualification[2] + '<br>')
document.write(qualification[3] + '<br>')
document.write(qualification[4] + '<br>')
document.write(qualification[5] + '<br>')
document.write(qualification[6] + '<br>')

//question08
var studenName = ['Michael', 'Jhon', 'Tony']

var score1 = +prompt(' Mark of student ' + studenName[0])
var score2 = +prompt(' Mark of student ' + studenName[1])
var score3 = +prompt(' Mark of student ' + studenName[2])

var percentage = [score1 / 500 * 100, score2 / 500 * 100, score3 / 500 * 100]
document.write(`
    Score of ${studenName[0]} is ${score1}. Percentage: ${percentage[0]}% <br>
    Score of ${studenName[1]} is ${score2}. Percentage: ${percentage[1]}% <br>
    Score of ${studenName[2]} is ${score3}. Percentage: ${percentage[2]}% <br>

    `)


//question09

var colorName = ["red",'green',"yellow","blue"]
document.write(`${colorName} <br/><br/>`)

// //a
var color_addStart = prompt('What color do you want to add in begining')
colorName.unshift(color_addStart + '<br>')
document.write(colorName)

// //b
var color_addEnd = prompt("What color do you want to add in End")
colorName.push(color_addEnd)
document.write(colorName + '<br>')

// //c 
colorName.unshift('white','black','brown')
document.write(colorName + '<br>')

// //d
colorName.shift()
document.write(colorName + '<br>')

// //e
colorName.pop()
document.write(colorName + '<br>')

// //f
var user_index = prompt('Please Tell your desired index to add color')
var user_color = prompt('Please Tell your desired color name you wanna add')
colorName.splice(user_index,0,user_color)
document.write(colorName)

//g 
var index_number = prompt('Please Tell your desired index to delete color')
var delete_color = prompt('how many color do you want to delete')
colorName.splice(index_number,delete_color,)
document.write(colorName)

// //question10
var score = [320,230,480,120]
document.write(`<h3> Scores of student : ${score} <br/> </h3>`)

score.sort()
document.write(`<h3>Orderd Scores of student : ${score}  <br/> </h3>`)

// //question11
var cityList = ['karachi','lahore','islamabad','quetta','peshawar']
document.write(`Cities List:<br/> ${cityList} <br/><br/>`)

var copyCity = cityList.slice(2,4)
document.write('Selected city list: '+ '<br>' + copyCity + '<br><br>')

// //question12
var arrpara = ['this','is','my','cat']
document.write(`Array:<br> ${arrpara}<br><br> `)

var updatearr = arrpara.join(' ')
document.write(`String:<br> ${updatearr}`)


//question13
document.write('Devices' + "<br>")

var copmuter = ['keyboard','Mouse','printer','monitor']
document.write(copmuter + '<br> <br>')

document.write(`Out:<br> ${copmuter.shift()} <br> `)

document.write(`Out:<br> ${copmuter.shift()} <br> `)

document.write(`Out:<br> ${copmuter.shift()} <br> `)

document.write(`Out:<br> ${copmuter.shift()} <br><br><br> `)


// //question14
document.write('Devices' + "<br>")

var copmuter = ['keyboard','Mouse','printer','monitor']
document.write(copmuter + '<br> <br>')

document.write(`Out:<br> ${copmuter.pop()} <br> `)

document.write(`Out:<br> ${copmuter.pop()} <br> `)

document.write(`Out:<br> ${copmuter.pop()} <br> `)

document.write(`Out:<br> ${copmuter.pop()} <br> `)


// //question15

var phoneManufacture = ['Apple','Samsung',"Motorola",'Nokia','Sony','Haier']
document.write(`
    
    <form>

        <lable>Chose a compny</lable>
        <select>
            <option>${phoneManufacture[0]}</option>
            <option>${phoneManufacture[1]}</option>
            <option>${phoneManufacture[2]}</option>
            <option>${phoneManufacture[3]}</option>
            <option>${phoneManufacture[4]}</option>
            <option>${phoneManufacture[5]}</option>
        </select>
    
    </form>
    
    
    `)
