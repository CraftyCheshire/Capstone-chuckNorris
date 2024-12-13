function myFunction() {
    fetch('https://api.chucknorris.io/jokes/random')
        .then(response => response.json())
        .then(data => {
            document.getElementById("norrisGrandma").innerText = data.value;
        })
        .catch(error => {
            document.getElementById("norrisGrandma").innerText = 'Error fetching joke!';
            console.error('Error:', error);
        });
}
