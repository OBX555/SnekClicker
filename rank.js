const rmap = [
    "H",
    "G",
    "F",
    "E",
    "D",
    "C",
    "B",
    "A",
    "S",
    "SS",
    "SSS",
    "P"
]

function rankCalc(find){
    let plus = 0;
    let rank = 0;
    for (let i = 0; i < find; i++){
        plus++;
        if(plus > rank){
            rank++;
            plus = 0;
        }
    }
    let _ = "";
    for (let i = 0; i < plus; i++){
        _ += "+";
    }
    return rmap[rank] + _;
}