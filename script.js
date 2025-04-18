const upgradeTable = {
    2: { power_points: 20, coins: 20 },
    3: { power_points: 30, coins: 35 },
    4: { power_points: 50, coins: 75 },
    5: { power_points: 80, coins: 140 },
    6: { power_points: 130, coins: 290 },
    7: { power_points: 210, coins: 480 },
    8: { power_points: 340, coins: 800 },
    9: { power_points: 550, coins: 1250 },
    10: { power_points: 890, coins: 1875 },
    11: { power_points: 1440, coins: 2800 },
};

document.getElementById("calc-form").addEventListener("submit", function (e) {
    e.preventDefault();

    const start = parseInt(document.getElementById("start_level").value);
    const end = parseInt(document.getElementById("end_level").value);

    const gadgets = parseInt(document.getElementById("gadgets").value);
    const starPowers = parseInt(document.getElementById("star_powers").value);
    const gears = parseInt(document.getElementById("gears").value);
    const epicGears = parseInt(document.getElementById("epic_gears").value);
    const mythicGears = parseInt(document.getElementById("mythic_gears").value);
    const hypercharge = parseInt(document.getElementById("hypercharge").value);

    if (start >= end || start < 1 || end > 11) {
        document.getElementById("results").innerHTML = "<p style='color:red;'>Invalid level range.</p>";
        return;
    }

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

    document.getElementById("results").innerHTML = `
        <h2>Upgrade Cost</h2>
        <p>🔹 Total Power Points: <strong>${totalPP}</strong></p>
        <p>🔹 Total Coins: <strong>${totalCoins}</strong></p>
    `;
});
