import {
    loadLocalSave,
    newSave,
} from "https://tyuxx.github.io/tyuLIB/versions/4/lib/ddcGame/gameSave.js";

var gameData = {};
let save =
    loadLocalSave("clickerggaem") || newSave(gameData, "1", "clickerggaem");
gameData = save.data || {};
money = gameData.money || 0;
level = gameData.level || 1;
xp = gameData.xp || 0;
xpRequired = gameData.xpRequired || 100;
rank = gameData.rank || 1;
upgradeLevels = gameData.upgradeLevels || {};
refresh();

setInterval(() => {
    gameData = {
        money: money,
        level: level,
        xp: xp,
        xpRequired: xpRequired,
        rank: rank,
        upgradeLevels: upgradeLevels
    }
    save.data = gameData;
    save.saveToLocal();
}, 10000);