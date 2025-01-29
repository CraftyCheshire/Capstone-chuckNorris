export default function() {
 const quotes = [
    "Believe in yourself!",
    "Tech is an adventure waiting to be explored.",
    "Lifelong learning fuels progress.",
    "The only thing we have to fear is fear itself.",
    "You must be the change you wish to see in the world.",
    "Failure is simply the opportunity to begin again, this time more intelligently.",
    "Our greatest glory is not in never falling, but in rising every time we fall.",
    "An unexamined life is not worth living.",
  ];
  document.getElementById("quote").textContent =
    quotes[Math.floor(Math.random() * quotes.length)];
     
}