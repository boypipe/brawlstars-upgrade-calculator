// Function to update the results when the user clicks "Calculate"
function calculateResults() {
  // Get values from form fields
  const start = parseInt(document.getElementById("start_level").value);
  const end = parseInt(document.getElementById("end_level").value);
  const gadgets = parseInt(document.getElementById("gadgets").value);
  const starPowers = parseInt(document.getElementById("star_powers").value);
  const gears = parseInt(document.getElementById("gears").value);
  const epicGears = parseInt(document.getElementById("epic_gears").value);
  const mythicGears = parseInt(document.getElementById("mythic_gears").value);
  const hypercharge = parseInt(document.getElementById("hypercharge").value);
  const brawlers = parseInt(document.getElementById("brawlers").value);

  // Validate levels
  if (start >= end || start < 1 || end > 11) {
    document.getElementById("results").innerHTML = "<p style='color:red;'>Please select a valid level range.</p>";
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

  // Multiply the cost by the number of brawlers
  totalCoins *= brawlers;
  totalPP *= brawlers;

  // Display results
  document.getElementById("results").innerHTML = `
    <h2>Upgrade Cost</h2>
    <p>🔹 Total Power Points (for ${brawlers} brawler(s)): <strong>${totalPP}</strong></p>
    <p>🔹 Total Coins (for ${brawlers} brawler(s)): <strong>${totalCoins}</strong></p>
  `;
}

// Listen for the "Calculate" button click to update results
document.getElementById("calculateBtn").addEventListener("click", calculateResults);
