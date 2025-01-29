document.getElementById("subscribeBtn").addEventListener("click", function () {
  var firstName = document.getElementById("firstName").value;
  var lastName = document.getElementById("lastName").value;
  var email = document.getElementById("email").value;

  localStorage.setItem("firstName", firstName);
  localStorage.setItem("lastName", lastName);
  localStorage.setItem("email", email);

  document.getElementById("subscribe").innerHTML =
    "Subscribed: " +
    localStorage.getItem("firstName") +
    " " +
    localStorage.getItem("lastName") +
    " (" +
    localStorage.getItem("email") +
    "), you will receive weekly emails keeping you updated on the life of Chuck Norris";
});
