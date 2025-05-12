document.addEventListener('DOMContentLoaded', () => {
    let cookieCount = 0;
    let upgradeLevel = 0;
    let upgradeLevel2 = 0;
    let cookiesPerClick = 1;
    let passiveRate = 0;
    let totalClicks = 0;

    const cookieImage = document.getElementById('cookieImage');
    const cookieCountDisplay = document.getElementById('cookieCount');
    const upgradeButton = document.getElementById('upgradeButton');
    const upgradeButton2 = document.getElementById('upgradeButton2');
    const passiveDisplay = document.getElementById('cookiesPerSecond');

    const generators = [
        { id: 'Auto Clicker', rate: 1, cost: 50, count: 0 },
        { id: 'Cookie Factory', rate: 5, cost: 250, count: 0 },
        { id: 'Cookie Bank', rate: 10, cost: 1000, count: 0 },
        { id: 'Cookie Farm', rate: 25, cost: 5000, count: 0 },
        { id: 'Cookie Mine', rate: 50, cost: 10000, count: 0 },
        { id: 'Cookie Lab', rate: 100, cost: 20000, count: 0 },
        { id: 'Cookie Planet', rate: 250, cost: 50000, count: 0 },
        { id: 'Cookie Universe', rate: 500, cost: 100000, count: 0 },
        { id: 'Cookie Galaxy', rate: 1000, cost: 250000, count: 0 },
        { id: 'Cookie Dimension', rate: 5000, cost: 500000, count: 0 },
        { id: 'Cookie Multiverse', rate: 10000, cost: 1000000, count: 0 },
        { id: 'Cookie Infinity', rate: 25000, cost: 2500000, count: 0 },
        { id: 'Cookie Eternity', rate: 50000, cost: 5000000, count: 0 },
        { id: 'THE LAST UPGRADE', rate: 0, cost: 10, count: 0, isReset: true }
    ];

    cookieImage.addEventListener('click', () => {
        cookieCount += cookiesPerClick;
        totalClicks++;
        updateDisplay();
        checkAchievements();
    });

    upgradeButton.addEventListener('click', () => {
        const upgradeCost = (upgradeLevel + 1) * 10;
        if (cookieCount >= upgradeCost) {
            cookieCount -= upgradeCost;
            upgradeLevel++;
            cookiesPerClick++;
            updateDisplay();
        } else {
            alert(`You need ${upgradeCost - cookieCount} more cookies to upgrade!`);
        }
    });

    upgradeButton2.addEventListener('click', () => {
        const upgradeCost2 = (upgradeLevel2 + 1) * 125;
        if (cookieCount >= upgradeCost2) {
            cookieCount -= upgradeCost2;
            upgradeLevel2++;
            cookiesPerClick *= 2;
            updateDisplay();
        } else {
            alert(`You need ${upgradeCost2 - cookieCount} more cookies for the 2x upgrade!`);
        }
    });

    function updateDisplay() {
        cookieCountDisplay.textContent = `Cookies: ${cookieCount}`;
        passiveDisplay.textContent = `Cookies per Second: ${passiveRate}`;
    }

    function addGeneratorButtons() {
        const column = document.querySelectorAll('.column')[2];
        const buttons = column.querySelectorAll('button');
        generators.forEach((gen, i) => {
            const btn = buttons[i + 2]; 
            btn.addEventListener('click', () => {
                if (cookieCount >= gen.cost) {
                    if (gen.isReset) {
                        if (confirm("Are you sure you want to reset EVERYTHING?")) {
                            resetGame();
                            alert("Everything has been reset!");
                        }
                    } else {
                        cookieCount -= gen.cost;
                        gen.count++;
                        passiveRate += gen.rate;
                        if (!gen.originalCost) gen.originalCost = gen.cost;
                        gen.cost = Math.floor(gen.cost * 1.5);
                        btn.textContent = `${gen.id} (${gen.count}) - ${gen.cost} Cookies`;
                        updateDisplay();
                        checkAchievements();
                    }
                } else {
                    alert(`You need ${gen.cost - cookieCount} more cookies for ${gen.id}`);
                }
            });
        });
    }

    function resetGame() {
        cookieCount = 0;
        upgradeLevel = 0;
        upgradeLevel2 = 0;
        cookiesPerClick = 1;
        passiveRate = 0;
        totalClicks = 0;

        generators.forEach(gen => {
            gen.count = 0;
            if (gen.originalCost) {
                gen.cost = gen.originalCost;
            }
        });

        resetButtons();
        updateDisplay();
        resetAchievements();
    }

    function resetButtons() {
        const column = document.querySelectorAll('.column')[2];
        const buttons = column.querySelectorAll('button');
        generators.forEach((gen, i) => {
            const btn = buttons[i + 2];
            btn.textContent = `${gen.id} (${gen.count}) - ${gen.cost} Cookies`;
        });
    }

    function checkAchievements() {
        if (totalClicks >= 100) {
            document.getElementById('achv-click100').classList.remove('locked');
            document.getElementById('achv-click100').classList.add('unlocked');
        }

        if (cookieCount >= 1000) {
            document.getElementById('achv-cookies1000').classList.remove('locked');
            document.getElementById('achv-cookies1000').classList.add('unlocked');
        }

        const autoClicker = generators.find(g => g.id === 'Auto Clicker');
        if (autoClicker && autoClicker.count > 0) {
            document.getElementById('achv-autoClicker').classList.remove('locked');
            document.getElementById('achv-autoClicker').classList.add('unlocked');
        }
    }

    function resetAchievements() {
        document.getElementById('achv-click100').classList.remove('unlocked');
        document.getElementById('achv-click100').classList.add('locked');

        document.getElementById('achv-cookies1000').classList.remove('unlocked');
        document.getElementById('achv-cookies1000').classList.add('locked');

        document.getElementById('achv-autoClicker').classList.remove('unlocked');
        document.getElementById('achv-autoClicker').classList.add('locked');
    }

    setInterval(() => {
        if (passiveRate > 0) {
            cookieCount += passiveRate;
            updateDisplay();
            checkAchievements();
        }
    }, 1000);

    addGeneratorButtons();
    updateDisplay();
});
