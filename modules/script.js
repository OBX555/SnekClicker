const click = document.getElementById("click");
const moneyElement = document.getElementById("money");
const levele = document.getElementById("Level");
const xpe = document.getElementById("xp");
const xpRequirede = document.getElementById("xpRequired");
const xpContainer = document.getElementById("xpContainer");
const rankContainer = document.getElementById("rankContainer");
const ranke = document.getElementById("rank");
const upgradesContainer = document.getElementById("upgradesContainer");

let money = 0;
let xpRequired = 100;
let xp = 0;
let level = 1;
let rank = 1;


function getMoney() {
    return getLevelOf("upgrademultiplier") * (getLevelOf("upgradeclick1") + getLevelOf("upgradeclick2")) * level * Math.pow(rank, 2);
}

function refresh() {
    moneyElement.innerHTML = formatNumber(money);
    levele.innerHTML = level;
    xpe.innerHTML = formatNumber(xp);
    xpRequirede.innerHTML = formatNumber(xpRequired);
    ranke.innerHTML = rankCalc(rank);
    barLevel.setValue(Math.min(Math.floor((xp / xpRequired) * 100), 100));
    barRank.setValue(Math.min(Math.floor((level / (25 * rank)) * 100), 100));
    upgradesContainer.innerHTML = "";
    upgrades.forEach(upgrade => render(upgradesContainer, upgrade.id));
}

function checkStuff() {
    if (xp >= xpRequired) {
        while (xp >= xpRequired) {
            level++;
            xp -= xpRequired;
            xpRequired *= 1.1; // Increase XP required for next level by 70%
        }
        refresh();
    }
    if (level > 25 * rank) {
        rank++;
        level = 1;
        xp = 0;
        xpRequired = 100;
        // Reset upgrades
        upgradeLevels = {};
        money = 0; // Reset money
        refresh();
    }
}

function formatNumber(num) {
    return num.toFixed(2).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
}

click.addEventListener("click", () => {
    money += getMoney();
    refresh();
    xp += getMoney();
});

// Setup
let barLevel = new SimpleLoadableBar(xpContainer, "95%", "10px", "5px", "gray", "green");
let barRank = new SimpleLoadableBar(rankContainer, "95%", "10px", "5px", "gray", "green");


setInterval(checkStuff, 500);
refresh();

