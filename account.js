
document.querySelector("form").addEventListener("submit", dataInput)

var userDataArr = [];

function dataInput(){

  let email = document.getElementById("email").value;
  let userFirstName = document.getElementById("firstName").value;
  let userLastName = document.getElementById("lastName").value;
  let password = document.getElementById("password").value;

  let user = {
    email : email,
    firstName : userFirstName,
    lastName : userLastName,
    password : password
  };

  userDataArr.push(user)

 
  localStorage.setItem("userDetails", JSON.stringify(userDataArr));
  // console.log("user added");
  window.location.href = "./sign_in.html";
  alert("Signup Successful")

};


