var uName = document.getElementById("name");
var email = document.getElementById("email");
var password = document.getElementById("password");



var user = [];
if (localStorage.getItem('data') == null) {
    user = []
} else {
    user = JSON.parse(localStorage.getItem('data'))
}

function checkInput(){
    if(uName.value.length>0 && email.value.length>0 && password.value.length>0){
        
        document.getElementById("error").classList.add("d-none")
        document.getElementById("success").classList.remove("d-none")
        document.getElementById("exist").classList.add("d-none")
        return true
    }
    
        else{
            document.getElementById("error").classList.remove("d-none");
            document.getElementById("success").classList.add("d-none");
            return false
            }
    }

    function checkData(){
        for(var i=0;i<user.length;i++){
            if(user[i].mail==email.value){
                document.getElementById("exist").classList.remove("d-none");
                return true;
            }
        }
}

function addData(){
    
    if( checkInput()==true ){
            var userData={
                name:uName.value,
                mail: email.value,
                password: password.value
            }
            
            user.push(userData);
            localStorage.setItem("data",JSON.stringify(user))
            clearData();
        }
}

function clearData(){
    uName.value="";
    email.value="";
    password.value=""
}





// checkData()

/* function signUp() {
    if (isEmpty() == false) {
        document.getElementById('exist').innerHTML = '<span class="text-danger m-3">All inputs is required</span>'
        return false
    }
    // to store all value as object
    var signUp = {
        name: signupName.value,
        email: signupEmail.value,
        password: signupPassword.value,
    }
    if (signUpArray.length == 0) {
        signUpArray.push(signUp)
        localStorage.setItem('users', JSON.stringify(signUpArray))
        document.getElementById('exist').innerHTML = '<span class="text-success m-3">Success</span>'
        return true
    }
    if (isEmailExist() == false) {
        document.getElementById('exist').innerHTML = '<span class="text-danger m-3">email already exists</span>'

    } else {
        signUpArray.push(signUp)
        localStorage.setItem('users', JSON.stringify(signUpArray))
        document.getElementById('exist').innerHTML = '<span class="text-success m-3">Success</span>'

    } */
// }




function logIn(){
    
}


