// document.getElementById("changeColor").addEventListener("click", function () {
//   var randomColor = Math.floor(Math.random() * 16777215).toString(16);
//   document.body.style.backgroundColor = "#" + randomColor.padStart(6, "0");
// });

window.handleClick = handleClick;

export default function handleClick() {
  var randomColor = Math.floor(Math.random() * 16777215).toString(16);
  document.body.style.backgroundColor = "#" + randomColor.padStart(6, "0");
}