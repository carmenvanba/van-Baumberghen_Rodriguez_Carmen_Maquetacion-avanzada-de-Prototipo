//Variables
var alertRedInput = "rgb(255, 165, 29)";
var defaultInput = "#5CE1E";


//Nick Name Validation
function nicknameValidation() {
   var nickName = document.getElementById("nickName");
   var issueArr = [];
   var validated = false;
   //reset error   
   nickName.setCustomValidity("");
   nickName.style.borderColor = defaultInput;

   if (document.getElementById("nickName").value.length == 0) {
      nickName.style.borderColor = alertRedInput;
   } else {
      if (/[-¡!@#$%^&*()_+|~=`{}\[\]:";'<>¿?,.\/]/.test(nickName.value)) {
         issueArr.push("¡No usar caracteres especiales!");
      }//Fin Si
      if (issueArr.length > 0) {
         nickName.setCustomValidity(issueArr);
         nickName.style.borderColor = alertRedInput;
         nickName.reportValidity();
      } else {
         validated = true;
      }//Fin Si
   }//Fin Si
   return validated;
}//Fin User Name Validation


//Email Validation
function emailValidation() {
   var email = document.getElementById("email");
   var issueArr = [];
   var validated = false;
   //reset error   
   email.setCustomValidity("");
   email.style.borderColor = defaultInput;

   if(document.getElementById("email").value.length==0){
       email.style.borderColor = alertRedInput;
   }else{
       if(!(/[\w\.-]+@[\w\.-]+\.\w{2,4}/.test(email.value))){
           issueArr.push("La dirección de correo electrónico debe cumplir el siguiente formato: ejemplo@email.com");
       }//Fin Si
       if (issueArr.length > 0) {
           email.setCustomValidity(issueArr.join("\n"));
           email.style.borderColor = alertRedInput;
           email.reportValidity();
       } else {
           validated = true;
       }//Fin Si
   }//Fin Si
   return validated;
}//Fin Email Validation


//Password Validation
function passwordValidation() {
   var password = document.getElementById("password");
   var issueArr = [];
   var validated = false;
    //reset error   
    password.setCustomValidity("");
    password.style.borderColor = defaultInput;

   if(document.getElementById("password").value.length==0){
       password.style.borderColor = alertRedInput;
   }else{
       if (!/^.{7,15}$/.test(password.value)) {
           issueArr.push("La contraseña debe tener entre 7 y 15 caracteres.");
       }//Fin Si
       if (!/\d/.test(password.value)) {
           issueArr.push("Debe tener al menos un número.");
       }//Fin Si
       if (!/[a-z]/.test(password.value)) {
           issueArr.push("Debe tener al menos una letra minúscula.");
       }//Fin Si
       if (!/[A-Z]/.test(password.value)) {
           issueArr.push("Debe tener al menos una letra mayúscula.");
       }//Fin Si
       if (issueArr.length > 0) {
           password.setCustomValidity(issueArr.join("\n"));
           password.style.borderColor = alertRedInput;
           password.reportValidity();
       } else {
           validated = true;
       }//Fin Si
   }//Fin Si
   return validated;
}//Fin Password Validation

//Repeat Password Validation
function repeatPasswordValidation() {
   var repeatPassword = document.getElementById("repeatPassword");
   var issueArr = [];
   var validated = false;
   //reset error   
   repeatPassword.setCustomValidity("");
   repeatPassword.style.borderColor = defaultInput;

   if(document.getElementById("repeatPassword").value.length==0){
       repeatPassword.style.borderColor = alertRedInput;
   }else{
       if (document.getElementById("repeatPassword").value != document.getElementById("password").value) {
           issueArr.push("Las contraseñas deben ser iguales.");
       }//Fin Si
       if (issueArr.length > 0) {
           repeatPassword.setCustomValidity(issueArr.join("\n"));
           repeatPassword.style.borderColor = alertRedInput;
           repeatPassword.reportValidity();
       } else {
           validated = true;
       }//Fin Si
   }//Fin Si
   return validated;
}// Fin Repeat Password Validation

//Show Password
function showPassword() {
   var pass = document.getElementById("password");
   if (pass.type === "password") {
       pass.type = "text";
   } else {
       pass.type = "password";
   }//Fin Si
}//FinShow Password

//Form Validation
function validateForm(){
   var validated = nicknameValidation() && emailValidation() 
   && passwordValidation()  && repeatPasswordValidation();
   if(validated){
       //Save the data
       localStorage.setItem("usuario", JSON.stringify(getJsonAccount()));
       //Go to the next page
       window.location.replace("../html/loreseekers.html");
   }//Fin Si
}//Fin Form Validation


//Get Json Account
function getJsonAccount(){
  return usuario = {
      nickName: document.getElementById("nickName").value,
      email: document.getElementById("email").value,
      password: document.getElementById("password").value,
      avatar: "../images/avatar.png",
   }
}//Fin Get Json Account



//Log In
function logIn(){
    //Save the data
    usuarioLogged = {
        nickName: "usuarioLogged",
        email: "usuarioLogged@gmail.com",
        password: "*",
        avatar: "../images/avatar2.png",
     }
     localStorage.setItem("usuario", JSON.stringify(usuarioLogged));
    //Go to the next page
    window.location.replace("../html/loreseekers.html");
 }//Fin Log in


