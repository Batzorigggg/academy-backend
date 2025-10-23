const h1 = document.getElementById("title");
let count = 0;

const button1 = document.getElementById("nmh");

const button2 = document.getElementById("hsh");

button1.addEventListener("click", () => {
  tooluur.innerText = count ++;
});

button2.addEventListener("click", () => {
  tooluur.innerText = count --;
});