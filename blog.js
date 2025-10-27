document.getElementById("addBtn").addEventListener("click", function () {
  const titleInput = document.getElementById("title");
  const postsList = document.getElementById("posts");
  const text = titleInput.value;

  if (text === "") {
    alert("hooson bn");
    return;
  }

  postsList.innerHTML = "";

  const li = document.createElement("li");
  const h3 = document.createElement("h3");
  const p = document.createElement("p");

  h3.textContent = text;
  p.textContent = text;

  li.appendChild(h3);
  li.appendChild(p);
  postsList.appendChild(li);

  titleInput.value = "";
});
