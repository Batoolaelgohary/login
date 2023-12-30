var uName = document.getElementById("name");
var email = document.getElementById("email");
var password = document.getElementById("password");





var user = [];
if (localStorage.getItem('data') == null) {
    user = []
} else {
    user = JSON.parse(localStorage.getItem('data'))
}

function isEmpty(){
    if(email.value.length>0 && password.value.length>0){
        document.getElementById("error").classList.add("d-none")
        return true
    }
    else{
        document.getElementById("error").classList.remove("d-none")
    }
}

var userName =""; 
function checkEmail() { 
    for(var i=0;i<user.length;i++){
        if(user[i].mail===email.value && user[i].password===password.value){
            document.getElementById("exist").classList.add("d-none")
            userName = user[i].name;
            return true;
        }
        else{
            document.getElementById("exist").classList.remove("d-none")
        }
    }
}



function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

var userNameFromURL = getQueryParam("userNameFromURL");
var decodedUserName = userNameFromURL ? decodeURIComponent(userNameFromURL) : '';


        // Update the value in HTML filw dynamically
        var welcomeUsernameElement = document.getElementById("welcomeUsername");    
        if (welcomeUsernameElement) {
            welcomeUsernameElement.textContent = decodedUserName;
        }

function logIn(){
    if(isEmpty() &&  checkEmail() ){

        var userNameFromURL = encodeURIComponent(userName);

        window.location="./home.html?userNameFromURL=" + encodeURIComponent(userNameFromURL);
    }
    
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
            if(user[i].mail===email.value){
                document.getElementById("exist").classList.remove("d-none");
                document.getElementById("success").classList.add("d-none");
                return true;
            }
            
        }
}

function addData(){
    
    

    if( checkInput()==true && !checkData()){
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











