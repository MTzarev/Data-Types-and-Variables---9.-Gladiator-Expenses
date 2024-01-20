function gladiatorExpenses(lostFights, helmetPrice, swordPrice, shieldPrice, armorPrice) {
    let expences = 0;
    let shieldBreaks = 0;
    for (let curLostFight = 1; curLostFight <= lostFights; curLostFight++) {
        if (curLostFight % 2 === 0) {
            expences += helmetPrice;
        }
        if (curLostFight % 3 === 0) {
            expences += swordPrice;
        }
        if (curLostFight % 6 === 0) {
            expences += shieldPrice
            shieldBreaks++;
        }

        if (shieldBreaks === 2) {
            expences += armorPrice;
            shieldBreaks = 0;
        }
    }



    console.log(`Gladiator expenses: ${expences.toFixed(2)} aureus`);
}
//gladiatorExpenses(7,2,3,4,5);
gladiatorExpenses(23, 12.50, 21.50, 40, 200)