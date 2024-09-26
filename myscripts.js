const element = document.getElementById("chuckBtn");
element.addEventListener("click", myFunction);

function myFunction() {
    document.getElementById("demo").innerHTML = "Chuck Norris is cooler than your grandma.";
}

localStorage.setItem('firstName', 'Obaseki Nosa');
localStorage.setItem("lastName", "");
localStorage.setItem("email", "");
localStorage.getItem("firstName");
localStorage.getItem("lastName");
localStorage.getItem("email");
document.getElementById("subscribe").innerHTML = localStorage.getItem("firstName");
