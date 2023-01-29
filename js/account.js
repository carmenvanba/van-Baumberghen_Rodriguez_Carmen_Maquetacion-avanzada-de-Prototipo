//Sacar del localStorage
var account = JSON.parse(localStorage.getItem("usuario"));


//Get the nickName
var account_nickName = document.getElementById("account_nickName");
account_nickName.textContent = "@"+account.nickName;

//Get The Avatar
//Images
var img = document.createElement("img");
img.src = account.avatar;
var src = document.getElementById("profile_icon");
src.appendChild(img);



//Go To Diary
function goToDiary(){
    window.location.replace("../html/diario.html");
}