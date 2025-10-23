    const auth = {
    email: "admin@erxes.io",
    password: "1234"
};

const mailinput = document.getElementById("username");
const passinput = document.getElementById("password");
const button = document.getElementById("loginBtn");
  const bold = document.getElementById("message");
const a = () => {
  
    if (auth.email === mailinput.value && auth.password === passinput.value) {
        bold.innerText = "Amjilttai";
    } else {
        bold.innerText = "Buruu"; 
    }
};

button.addEventListener("click", a);