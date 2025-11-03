let form= document.querySelector("form");
let email=document.querySelector("#email");
let password=document.querySelector("#password");

form.addEventListener("submit", function(evt){
    evt.preventDefault();

    document.querySelector("#email-error").textContent="";
    document.querySelector("#password-error").textContent="";

    const email_regex= /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const pass_regex=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    let fmsg=true;

    let isValidemail=email_regex.test(email.value);
    let isValidPass=pass_regex.test(password.value);

    if(!isValidemail){
        document.querySelector("#email-error").textContent="Invalid Email enter valid Email id";
        fmsg=false;
    }

    if(!isValidPass){
        document.querySelector("#password-error").textContent="Invalid Password enter valid Password";
        fmsg=false;
    }

    if(fmsg){
        document.querySelector(".success-message").style.display="block";
    }
})