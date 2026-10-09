const body = document.body;
const themeBtn = document.getElementById("themeBtn");
const savedTheme = localStorage.getItem("portfolio-theme");

if (savedTheme === "dark") {
  body.classList.add("dark");
  themeBtn.querySelector("span").textContent = "light_mode";
}

themeBtn.addEventListener("click", () => {
  body.classList.toggle("dark");
  const dark = body.classList.contains("dark");
  themeBtn.querySelector("span").textContent = dark ? "light_mode" : "dark_mode";
  localStorage.setItem("portfolio-theme", dark ? "dark" : "light");
});

document.getElementById("year").textContent = new Date().getFullYear();
