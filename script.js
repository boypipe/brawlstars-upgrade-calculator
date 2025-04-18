document.getElementById("calculateBtn").addEventListener("click", function () {
  const getVal = id => parseInt(document.getElementById(id).value) || 0;

  const start = parseInt(document.getElementById("start_level").value);
  const end = parseInt(document.getElementById("end_level").value);

  const gadgets = getVal("gadgets");
  const stars = getVal("star_powers");
  const gears = getVal("gears");
  const epic = getVal("epic_gears");
  const mythic = getVal("mythic_gears");
  const hyper = getVal("hypercharge");
  const brawlers = getVal("brawlers") || 1;

  const levelData = [
    { coins: 20, points: 20 },
    { coins: 35, points: 30 },
    { coins: 75, points: 50 },
    { coins: 140, points: 80 },
    { coins: 290, points: 130 },
    { coins: 480, points: 210 },
    { coins: 800, points: 340 },
    { coins: 1250, points: 550 },
    { coins: 1875, points: 890 },
    { coins: 2800, points: 1440 }
  ];

  let coins = 0, points = 0;

  if (!isNaN(start) && !isNaN(end) && start < end) {
    for (let i = start - 1; i < end - 1; i++) {
      coins += levelData[i].coins;
      points += levelData[i].points;
    }
  }

  coins += gadgets * 1000 + stars * 2000 + gears * 1000 + epic * 1500 + mythic * 2000 + hyper * 5000;

  let totalCoins = coins * brawlers;
  let totalPoints = points * brawlers;

  document.getElementById("results").innerHTML = `
    <h2>Result</h2>
    <p><img src="https://static.wikia.nocookie.net/brawlstars/images/4/41/Power_Points.png/" class="result-icon"> Power Points: <strong>${totalPoints}</strong></p>
    <p><img src="https://static.wikia.nocookie.net/brawlstars/images/f/f0/Coins.png/" class="result-icon"> Coins: <strong>${totalCoins}</strong></p>
  `;
});
