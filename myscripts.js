const element = document.getElementById("chuckBtn");
element.addEventListener("click", myFunction);

function myFunction() {
    document.getElementById("demo").innerHTML = "Chuck Norris is cooler than your grandma.";
}