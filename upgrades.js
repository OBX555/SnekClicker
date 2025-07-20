const upgrades = [
    {
        name: "Money Multiplier",
        id: "upgrademultiplier",
        multiplier: 1.5,
        exponent: 1,
        cost: 100
    },
    {
        name: "Money Per Click",
        id: "upgradeclick",
        multiplier: 1.5,
        exponent: 1,
        cost: 10
    },
];

let upgradeLevels = {};

function tryUpgrade(upgradeID) {
    const upgrade = upgrades.find(cupgrade => cupgrade.id === upgradeID);
    const level = getLevelOf(upgradeID);
    const cost = getCost(upgradeID);
    if (money >= cost) {
        money -= cost;
        upgradeLevels[upgradeID] = level + 1;
    }
}

function getCost(upgradeID) {
    const upgrade = upgrades.find(cupgrade => cupgrade.id === upgradeID);
    let cost = upgrade.cost;
    for (let i = 0; i < getLevelOf(upgradeID); i++) {
        cost *= upgrade.multiplier;
        cost = Math.pow(cost, upgrade.exponent);
    }
    return cost;
}

function getLevelOf(upgradeID) {
    return upgradeLevels[upgradeID] || 1;
}

function render(parent, upgradeID) {
    const upgrade = upgrades.find(cupgrade => cupgrade.id === upgradeID);
    const level = getLevelOf(upgradeID);
    const cost = getCost(upgradeID);
    const element = document.createElement("button");
    element.classList.add("renderedUpgrade");
    element.innerHTML = `${upgrade.name}: Level ${level} - Cost: $${formatNumber(cost)}`;
    if (money < cost) {
        element.disabled = true;
    }
    element.addEventListener("click", () => {
        tryUpgrade(upgradeID);
        refresh();
    });
    parent.appendChild(element);
}