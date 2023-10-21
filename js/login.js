form1.onsubmit=()=>
{
  var s1=userName.value
  var s2=userEmail.value
  var s3=userPwd.value
  if(s1.length==0){
    alert("Please enter a user name.")
  }
  if(s2.length==0){
    alert("Please enter a email.")
  }
  if(s3.length==0){
    alert("Please enter a password.")
  }else{
    alert("Sign in successfully.")
  }
}
  
form2.onsubmit=()=>{
  var s2=userEmail1.value
  var s3=userPwd1.value
  if(s2.length==0){
  alert("Please enter a email.")
  }
  if(s3.length==0){
  alert("Please enter a password")
  }else{
  location.href='signlogin.html'
  }
}
  
const signInBtn = document.getElementById("logIn");
const signUpBtn = document.getElementById("signIn");
const fistForm = document.getElementById("form1");
const secondForm = document.getElementById("form2");
const container = document.querySelector(".container");

signInBtn.addEventListener("click", () => {
  container.classList.remove("right-panel-active");
});

signUpBtn.addEventListener("click", () => {
  container.classList.add("right-panel-active");
});

fistForm.addEventListener("submit", (e) => e.preventDefault());
secondForm.addEventListener("submit", (e) => e.preventDefault());

