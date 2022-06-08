/*Defining variables*/

function signup(){
let backbtn = document.getElementById("back");
backbtn.addEventListener("click", function() {

    window.location.href = "./index.html";
});

let submit_signup = document.getElementById("s");

/*When the user fills the values and submits, send the values to the url to save them in the db*/
submit_signup.addEventListener("click", function (e) {
 e.preventDefault();
  /*Defining Variables*/
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  // console.log(name);
  // console.log(email);
  // console.log(password);

  /*Append the variables set by the user to the Form Data to send them to url*/
  let data = {
    name: name,
    email: email,
    password: password,
  };

  fetch("http://127.0.0.1:8000/api/add_user", {
    method: "POST",
    body: JSON.stringify(data),
    headers: { "Content-type": "application/json; charset=UTF-8" },
  }).then((response) => response.json());


  name = "";
  email = "";
  password = "";




}



);





}


signup();