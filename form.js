
function validate(){
    let mail = document.getElementById("mail");
let mailex=/^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;

    if(mailex.test(mail.value.trim())){
        
     a= true;
    }else{
        alert("invalid email")
        return false;
    }
}
function phvalidate(){
    let num = document.getElementById("number");
  let phnno=/^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/;
 if(phnno.test(num.value)){
        b= true; 

    }else{
        alert("invalid phone number")
        return false;
    }
}
function checkpaswd(){
        let timeout;

        // traversing the DOM and getting the input and span using their IDs
    
        let password = document.getElementById('PassEntry')
        let strengthBadge = document.getElementById('StrengthDisp')
    
        // The strong and weak password Regex pattern checker
    
        let strongPassword = new RegExp('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})')
        let mediumPassword = new RegExp('((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{6,}))|((?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9])(?=.{8,}))')
        
        function StrengthChecker(PasswordParameter){
            // We then change the badge's color and text based on the password strength
    
            if(strongPassword.test(PasswordParameter)) {
                strengthBadge.style.backgroundColor = "green"
                strengthBadge.textContent = 'Strong'
            } else if(mediumPassword.test(PasswordParameter)){
                strengthBadge.style.backgroundColor = 'blue'
                strengthBadge.textContent = 'Medium'
            } else{
                strengthBadge.style.backgroundColor = 'red'
                strengthBadge.textContent = 'Weak'
            }
        }
    
        // Adding an input event listener when a user types to the  password input 
    
        password.addEventListener("input", () => {
    
            //The badge is hidden by default, so we show it
    
            strengthBadge.style.display= 'block'
            clearTimeout(timeout);
    
            //We then call the StrengChecker function as a callback then pass the typed password to it
    
            timeout = setTimeout(() => StrengthChecker(password.value), 500);
    
            //Incase a user clears the text, the badge is hidden again
    
            if(password.value.length !== 0){
                strengthBadge.style.display != 'block'
            } else{
                strengthBadge.style.display = 'none'
            }
        }); 
}
function confirmpas(){
   let conpas=document.getElementById("conpas")
   let pas=document.getElementById("PassEntry")
   if(pas.value===''){
       alert("password can't be empty")
       return false;
   }
   else if(conpas.value===pas.value){
       c=true;

   }else{
       alert("passwords don't match")
       return false;
   }
};
