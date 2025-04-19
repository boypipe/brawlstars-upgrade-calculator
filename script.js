const levelData = [
  { level: 1, pp: 0, coins: 0 },
  { level: 2, pp: 20, coins: 20 },
  { level: 3, pp: 30, coins: 35 },
  { level: 4, pp: 50, coins: 75 },
  { level: 5, pp: 80, coins: 140 },
  { level: 6, pp: 130, coins: 290 },
  { level: 7, pp: 210, coins: 480 },
  { level: 8, pp: 340, coins: 800 },
  { level: 9, pp: 550, coins: 1250 },
  { level: 10, pp: 890, coins: 1875 },
  { level: 11, pp: 1440, coins: 2800 }
];

document.getElementById("calculateBtn").addEventListener("click", calculate);
document.getElementById("resetBtn").addEventListener("click", () => {
  document.getElementById("calc-form").reset();
  document.getElementById("results").innerHTML = "";
});

function calculate() {
  const start = parseInt(document.getElementById("start_level").value);
  const end = parseInt(document.getElementById("end_level").value);
  const gadgets = parseInt(document.getElementById("gadgets").value) || 0;
  const starPowers = parseInt(document.getElementById("star_powers").value) || 0;
  const gears = parseInt(document.getElementById("gears").value) || 0;
  const epicGears = parseInt(document.getElementById("epic_gears").value) || 0;
  const mythicGears = parseInt(document.getElementById("mythic_gears").value) || 0;
  const hypercharges = parseInt(document.getElementById("hypercharge").value) || 0;
  const brawlers = parseInt(document.getElementById("brawlers").value) || 1;

  let totalPP = 0;
  let totalCoins = 0;

  // Calculate level upgrade costs (multiplied by number of brawlers)
  if (!isNaN(start) && !isNaN(end) && start >= 1 && end >= start && end <= 11) {
    for (let i = start; i < end; i++) {
      totalPP += levelData[i].pp;
      totalCoins += levelData[i].coins;
    }
    totalPP *= brawlers;
    totalCoins *= brawlers;
  }

  // Add other costs (not multiplied by number of brawlers)
  totalCoins += (gadgets * 1000) + (starPowers * 2000) + (gears * 1000);
  totalCoins += (epicGears * 1500) + (mythicGears * 2000) + (hypercharges * 5000);

  document.getElementById("results").innerHTML = `
    <div>
      <p><img src="https://static.wikia.nocookie.net/brawlstars/images/4/41/Power_Points.png/" width="30"> Power Points: <strong>${totalPP}</strong></p>
      <p><img src="https://static.wikia.nocookie.net/brawlstars/images/f/f0/Coins.png/" width="30"> Coins: <strong>${totalCoins}</strong></p>
    </div>
  `;
}

document.getElementById("maxBrawlerBtn").addEventListener("click", () => {
  document.getElementById("start_level").value = "1";
  document.getElementById("end_level").value = "11";
  document.getElementById("gadgets").value = "1";
  document.getElementById("star_powers").value = "1";
  document.getElementById("gears").value = "2";
  document.getElementById("epic_gears").value = "";
  document.getElementById("mythic_gears").value = "";
  document.getElementById("hypercharge").value = "1";
  document.getElementById("brawlers").value = "1";
});