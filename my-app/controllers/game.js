let enemyHealth = 100;
let chuckHealth = 100;

const enemyHealthEl = document.getElementById('enemy-health');
const chuckHealthEl = document.getElementById('chuck-health');
const attackButton = document.getElementById('attack-button');
const factEl = document.getElementById('fact');

const getChuckFact = async () => {
  const response = await fetch('https://api.chucknorris.io/jokes/random');
  const data = await response.json();
  return data.value;
};

attackButton.addEventListener('click', async () => {
  if (enemyHealth > 0 && chuckHealth > 0) {
    const fact = await getChuckFact();
    factEl.textContent = `"${fact}"`;

    const chuckDamage = Math.floor(Math.random() * 20) + 10;
    const enemyDamage = Math.floor(Math.random() * 15) + 5;

    enemyHealth -= chuckDamage;
    chuckHealth -= enemyDamage;

    enemyHealth = Math.max(0, enemyHealth);
    chuckHealth = Math.max(0, chuckHealth);
    enemyHealthEl.textContent = `Health: ${enemyHealth}`;
    chuckHealthEl.textContent = `Health: ${chuckHealth}`;

    if (enemyHealth === 0) {
      factEl.textContent = 'Chuck Norris wins!';
      attackButton.disabled = true;
    } else if (chuckHealth === 0) {
      factEl.textContent = 'Chuck Norris never loses... But he took a nap!';
      attackButton.disabled = true;
    }
  }
});
