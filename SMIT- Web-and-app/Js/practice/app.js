// // function expand(){
// //     var fullpara = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti nihil perferendis eaque atque laudantium, minima dicta temporibus ratione in debitis. Quaerat ullam eos, debitis quam soluta magni dolorum odio unde.'
// //     var shortpara = "Lorem ipsum dolor sit, amet consectetur"
// //     var seelink = document.getElementById('seelink')
// //     var para = document.getElementById('para')

// //     if(seelink.innerText === 'See More'){
// //         para.innerText = fullpara
// //         seelink.innerText = 'See Less'
// //     }else{
// //         para.innerText = shortpara
// //         seelink.innerText = "See More"
// //     }

// //}

// // function cheakInput(){
// //     console.log(event.target.value)
// //     if (!event.target.value){
// //         event.target.style.border ='2px solid red'
// //     }

// //     if(event.target.value.trim() === ''){
// //         event.target.style.border ='2px solid red'

// //     }
// // }

// // function submit(){
// //     var gender = document.getElementsByName('gender')
// //     var genderselec;
// //     for(var i =0; i < gender.length; i++){
// //         if (gender[i].chaked){
// //             genderselec = gender[i].value
// //         }
// //     }
// //     console.log(genderselec)
// // }

// function submit() {
//     // var firstName = document.getElementById("firstName");
//     // var secondName = document.getElementById("secondName");
  
//     var gender = document.getElementsByName("gender");
  
//     var hobbiesList = document.getElementsByName("hobbies");
//     var genderSelection;
//     var hobbiesArr = [];
  
//     for (var i = 0; i < gender.length; i++) {
//       if (gender[i].checked) {
//         genderSelection = gender[i].value;
//       }
//     }
  
//     for (var i = 0; i < hobbiesList.length; i++) {
//       if (hobbiesList[i].checked) {
//         hobbiesArr.push(hobbiesList[i].value);
//       }
//     }
  
//     console.log(genderSelection);
//     console.log(hobbiesArr);
//   }


