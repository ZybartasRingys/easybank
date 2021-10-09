const toggleBtn = document.getElementById("btn");
const mobLinks = document.getElementById("mlinks");

toggleBtn.addEventListener("click", function () {
  mobLinks.classList.toggle("active");
});
