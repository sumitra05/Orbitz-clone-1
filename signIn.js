document.querySelector("form").addEventListener("submit", dataInput);

var userDataArr = JSON.parse(localStorage.getItem("userDetails")) || [];
console.log(userDataArr[0].password);
function dataInput() {
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

console.log(email);
console.log(password);


  for (let i = 0; i < userDataArr.length; i++) {
    if (email == userDataArr[i].email && password == userDataArr[i].password) {
      window.location.href = "./index.html";
      alert("Sign In Successful");
    } else {
      alert("Invalid Credential");
    }
  }
}
