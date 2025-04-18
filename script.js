// Upgrade table for levels
const upgradeTable = {
  1: { power_points: 0, coins: 0 },
  2: { power_points: 20, coins: 20 },
  3: { power_points: 30, coins: 35 },
  4: { power_points: 50, coins: 75 },
  5: { power_points: 80, coins: 140 },
  6: { power_points: 130, coins: 290 },
  7: { power_points: 210, coins: 480 },
  8: { power_points: 340, coins: 800 },
  9: { power_points: 550, coins: 1250 },
  10: { power_points: 890, coins: 1875 },
  11: { power_points: 1440, coins: 2800 }
};

// Function to calculate and display results
function calculateResults() {
  const start = parseInt(document.getElementById("start_level").value);
  const end = parseInt(document.getElementById("end_level").value);
  const gadgets = parseInt(document.getElementById("gadgets").value);
  const starPowers = parseInt(document.getElementById("star_powers").value);
  const gears = parseInt(document.getElementById("gears").value);
  const epicGears = parseInt(document.getElementById("epic_gears").value);
  const mythicGears = parseInt(document.getElementById("mythic_gears").value);
  const hypercharge = parseInt(document.getElementById("hypercharge").value);
  const brawlers = parseInt(document.getElementById("brawlers").value);

  // Validation for valid level range
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
    <p><img src="https://static.wikia.nocookie.net/brawlstars/images/4/41/Power_Points.png/revision/latest/scale-to-width-down/90?cb=20200917152433" alt="Power Points"> Total Power Points (for ${brawlers} brawler(s)): <strong>${totalPP}</strong></p>
    <p><img src="https://static.wikia.nocookie.net/brawlstars/images/f/f0/Coins.png/revision/latest/scale-to-width-down/90?cb=20200917152103" alt="Coins"> Total Coins (for ${brawlers} brawler(s)): <strong>${totalCoins}</strong></p>
  `;
}

// Add event listener for the calculate button
document.getElementById("calculateBtn").addEventListener("click", calculateResults);
