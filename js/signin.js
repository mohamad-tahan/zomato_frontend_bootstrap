let type = 0;
function signin() {
  let login = document.getElementById("s");

  /*When the user fills the values and submits, send the values to the url to save them in the db*/
  login.addEventListener("click", function (e) {
    e.preventDefault();
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    let data = {
      email: email,
      password: password,
    };

    fetch("http://127.0.0.1:8000/api/signIn", {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-type": "application/json; charset=UTF-8" },
    })
      .then((response) => response.json())
      .then((json) => {
        
          if (json.status == "Not Found"){
              alert("User not found");
          }
          else {
        if (json.type == 0) {
          location.href = "./signup.html";
        //   console.log(json.type);
        //   console.log(json);
        } else {
          location.href = "";
        }
    }
      }
      )
      .catch((err) => console.log(err));

    
  });
}
signin();
