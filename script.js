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
  const buffie = parseInt(document.getElementById("buffie").value) || 0;
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
  totalCoins += (buffie * 1000);
  totalPP += (buffie * 2000);

  document.getElementById("results").innerHTML = `
    <div>
      <p><img src="https://cdn-assets-eu.frontify.com/s3/frontify-enterprise-files-eu/eyJwYXRoIjoic3VwZXJjZWxsXC9maWxlXC9pb1BYVDRVcUJHNXJ0NmJqbUc5NS5wbmcifQ:supercell:hBdZ0EERz8VjNW_z9uEhL0QxqPzhK4NK6b8L5lnbCw0?width=2400" width="30"> Power Points: <strong>${totalPP}</strong></p>
      <p><img src="https://cdn-assets-eu.frontify.com/s3/frontify-enterprise-files-eu/eyJwYXRoIjoic3VwZXJjZWxsXC9maWxlXC9FVDREWWh2WENMekpQaXc5Nk50WC5wbmcifQ:supercell:MBP987-4m4cQa1vpsJuaEpTEDtXA4eW6T9rqMSjqaSg?width=2400" width="30"> Coins: <strong>${totalCoins}</strong></p>
    </div>
  `;
}

function setLevels(start, end) {
  // reset entire form
  document.getElementById("calc-form").reset();

  // clear results (same as your resetBtn logic)
  document.getElementById("results").innerHTML = "";

  // set levels
  document.getElementById("start_level").value = start;
  document.getElementById("end_level").value = end;

  // optional: enforce defaults after reset
  document.getElementById("brawlers").value = "1";

  // auto calculate
  document.getElementById("calculateBtn").click();
}

function applyPreset(values) {
  document.getElementById("calc-form").reset();
  document.getElementById("results").innerHTML = "";

  Object.entries(values).forEach(([id, value]) => {
    document.getElementById(id).value = value;
  });

  document.getElementById("calculateBtn").click();
}

//set levels
document.getElementById("lvl1to7Btn").addEventListener("click", () => setLevels(1,7));
document.getElementById("lvl1to9Btn").addEventListener("click", () => setLevels(1,9));
document.getElementById("lvl1to11Btn").addEventListener("click", () => setLevels(1,11));
document.getElementById("lvl9to11Btn").addEventListener("click", () => setLevels(9,11));

//set max bralwer
document.getElementById("maxBrawlerBtn").addEventListener("click", () => {
  applyPreset({
    start_level: "1",
    end_level: "11",
    gadgets: "1",
    star_powers: "1",
    gears: "2",
    epic_gears: "",
    mythic_gears: "",
    hypercharge: "1",
    brawlers: "1"
  });
});
