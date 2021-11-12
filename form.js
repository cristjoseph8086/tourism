let num = document.getElementById("number");
let mail = document.getElementById("mail");
let pwd = document.getElementById("pass");
var x= /^(?=.[a-z])(?=.[A-Z])(?=.\d)(?=.[@$!%?&])[A-Za-z\d@$!%?&]{8,}$/
var mailex=/^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;
var phnno=/^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/;
let strongPassword = new RegExp('(?=.[a-z])(?=.[A-Z])(?=.[0-9])(?=.[^A-Za-z0-9])(?=.{8,})')
let mediumPassword = new RegExp('((?=.[a-z])(?=.[A-Z])(?=.[0-9])(?=.[^A-Za-z0-9])(?=.{6,}))|((?=.[a-z])(?=.[A-Z])(?=.*[^A-Za-z0-9])(?=.{8,}))')
let a,b,c,d,e;
function validate(){
    if(mailex.test(mail.value.trim())){
        
        a= true;
    }else{
        alert("invalid email")
    }
    if(phnno.test(num.value)){
        b= true; 

    }else{
        alert("invalid phone number")
    }
    if(strongPassword.test(pwd.value)){
        pwd.style.border="2px solid green";
        d=true;
    }
    else if(mediumPassword.test(pwd.value)){
        pwd.style.border="2px solid orange";
        
    }
    else{
        pwd.style.border="2px solid red";
        
    }
    if(a===true && b===true && c===true && d===true&& e===true){
        return true;
    }else{
        return false;
    }
}