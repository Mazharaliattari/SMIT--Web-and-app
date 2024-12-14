function signup() {
    getName = document.getElementById('signup-name').value
    getemail = document.getElementById('signup-email').value
    getpassword = document.getElementById('signup-password').value

    if (getName.trim() !== "") {
        if (getemail.trim() !== "") {
            if (getpassword.trim() !== "") {
            } else {
                alert('please Enter password')
            }
        } else {
            alert("Please Enter Email")
        }
    } else {
        alert('Please Enter Your Name')
    }
}

function login(){
    loginEmail = document.getElementById("login-email").value
    loginPassword = document.getElementById("login-password").value
    if(loginEmail.toLowerCase() === getemail){
        if(loginPassword === getpassword){
            window.location.href = 'welcome.html'
        }else{
            
            alert("Please Enter a Valid Password")
        }
    }else{
        alert('Please Enter Valid Email')
    }
}