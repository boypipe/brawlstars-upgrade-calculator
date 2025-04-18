document.getElementById('calculate').addEventListener('click', function () {
    const startLevel = parseInt(document.getElementById('start_level').value);
    const endLevel = parseInt(document.getElementById('end_level').value);
    const gadgets = parseInt(document.getElementById('gadgets').value) || 0;
    const starPowers = parseInt(document.getElementById('star_powers').value) || 0;
    const gears = parseInt(document.getElementById('gears').value) || 0;
    const epicGears = parseInt(document.getElementById('epic_gears').value) || 0;
    const mythicGears = parseInt(document.getElementById('mythic_gears').value) || 0;
    const hypercharge = parseInt(document.getElementById('hypercharge').value) || 0;
    const brawlers = parseInt(document.getElementById('brawlers').value) || 1;

    if ((startLevel && endLevel && endLevel >= startLevel && startLevel >= 1 && endLevel <= 11) || (!startLevel && !endLevel)) {
        const powerPointsCost = [0, 20, 30, 50, 80, 130, 210, 340, 550, 890, 1440];
        const coinsCost = [0, 20, 35, 75, 140, 290, 480, 800, 1250, 1875, 2800];

        let totalPowerPoints = 0;
        let totalCoins = 0;

        if (startLevel && endLevel) {
            for (let i = startLevel; i < endLevel; i++) {
                totalPowerPoints += powerPointsCost[i];
                totalCoins += coinsCost[i];
            }
        }

        let totalCost = (totalCoins * brawlers) + (gadgets * 1000 + starPowers * 2000 + gears * 1000 + epicGears * 1500 + mythicGears * 2000 + hypercharge * 5000);

        document.getElementById('total_cost').innerText = `Total Power Points: ${totalPowerPoints} 
        \nTotal Coins: ${totalCoins} 
        \nTotal Cost: ${totalCost} Coins`;
        document.getElementById('result').style.display = 'block';
    } else {
        alert('Error Please ensure you select valid current and desired levels.');
    }
});

document.getElementById('reset').addEventListener('click', function () {
    document.getElementById('result').style.display = 'none';
    document.getElementById('calc-form').reset();
});
