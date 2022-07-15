//let line=document.querySelector(".line")
let lines = document.querySelectorAll(".line")

function increasWidth() {
  for (i = 0; i < lines.length; i++) {
    lines[i].classList.toggle("increase")
  }
}
setInterval(increasWidth, 700)
let logoText = document.querySelectorAll(".logo-text")
function changecolor() {
  for (i = 0; i < logoText.length; i++) {
    logoText[i].classList.toggle("light-active")
  }
}
setInterval(changecolor, 700)

