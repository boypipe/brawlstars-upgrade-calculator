document.getElementById("calculateBtn").addEventListener("click", function() {
  let startLevel = parseInt(document.getElementById("start_level").value);
  let endLevel = parseInt(document.getElementById("end_level").value);
  let gadgets = parseInt(document.getElementById("gadgets").value);
  let starPowers = parseInt(document.getElementById("star_powers").value);
  let gears = parseInt(document.getElementById("gears").value);
  let epicGears = parseInt(document.getElementById("epic_gears").value);
  let mythicGears = parseInt(document.getElementById("mythic_gears").value);
  let hypercharge = parseInt(document.getElementById("hypercharge").value);
  let brawlers = parseInt(document.getElementById("brawlers").value) || 1; // Default to 1 if empty

  // Power Points and Coins per level data
  const levelsData = [
    { powerPoints: 0, coins: 0 },
    { powerPoints: 20, coins: 20 },
    { powerPoints: 30, coins: 35 },
    { powerPoints: 50, coins: 75 },
    { powerPoints: 80, coins: 140 },
    { powerPoints: 130, coins: 290 },
    { powerPoints: 210, coins: 480 },
    { powerPoints: 340, coins: 800 },
    { powerPoints: 550, coins: 1250 },
    { powerPoints: 890, coins: 1875 },
    { powerPoints: 1440, coins: 2800 },
  ];

  // Handle edge case: If no level is selected, skip the level cost calculations
  if (!isNaN(startLevel) && !isNaN(endLevel) && startLevel < endLevel) {
    let powerPointsCost = 0;
    let coinsCost = 0;

    for (let i = startLevel; i < endLevel; i++) {
      powerPointsCost += levelsData[i].powerPoints;
      coinsCost += levelsData[i].coins;
    }

    let totalCost = (coinsCost + gadgets * 1000 + starPowers * 2000 + gears * 1000 +
                     epicGears * 1500 + mythicGears * 2000 + hypercharge * 5000) * brawlers;

    document.getElementById("results").innerHTML = `
      <h2>Upgrade Calculation</h2>
      <p><strong>Power Points:</strong> ${powerPointsCost * brawlers}</p>
      <p><strong>Coins:</strong> ${coinsCost * brawlers}</p>
      <p><strong>Total Cost:</strong> ${totalCost} Coins</p>
    `;
  } else {
    document.getElementById("results").innerHTML = `
      <h2>Error</h2>
      <p>Please ensure you select valid current and desired levels.</p>
    `;
  }
});
