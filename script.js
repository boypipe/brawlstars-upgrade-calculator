// Function to update the results dynamically
function updateResults() {
  // Get values from form fields
  const start = parseInt(document.getElementById("start_level").value);
  const end = parseInt(document.getElementById("end_level").value);
  const gadgets = parseInt(document.getElementById("gadgets").value);
  const starPowers = parseInt(document.getElementById("star_powers").value);
  const gears = parseInt(document.getElementById("gears").value);
  const epicGears = parseInt(document.getElementById("epic_gears").value);
  const mythicGears = parseInt(document.getElementById("mythic_gears").value);
  const hypercharge = parseInt(document.getElementById("hypercharge").value);

  // Validation for start and end levels
  if (start >= end || start < 1 || end > 11) {
    document.getElementById("results").innerHTML = "<p style='color:red;'>Invalid level range.</p>";
    return;
  }

  // Calculate total Power Points and Coins
  let totalPP = 0;
  let totalCoins = 0;

  for (let lvl = start + 1; lvl <= end; lvl++) {
    if (upgradeTable[lvl]) {
      totalPP += upgradeTable[lvl].power_points;
      totalCoins += upgradeTable[lvl].coins;
    }
  }

  totalCoins += (gadgets * 1000);
  totalCoins += (starPowers * 2000);
  totalCoins += (gears * 1000);
  totalCoins += (epicGears * 1500);
  totalCoins += (mythicGears * 2000);
  totalCoins += (hypercharge * 5000);

  // Display results
  document.getElementById("results").innerHTML = `
    <h2>Upgrade Cost</h2>
    <p>🔹 Total Power Points: <strong>${totalPP}</strong></p>
    <p>🔹 Total Coins: <strong>${totalCoins}</strong></p>
  `;
}

// Listen for input changes to update results in real-time
document.querySelectorAll('input, select').forEach(input => {
  input.addEventListener('input', updateResults);
});

// Call once to initialize with default values
updateResults();
