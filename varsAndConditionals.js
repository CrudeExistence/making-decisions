/*
    In this file, we'll be using variables, conditionals,
    and loops to play out a fight between Jon Snow and
    Jamie Lannister.
*/ 

let banjoAttack = 20;
let guitarAttack = 30;

if (banjoAttack > guitarAttack) {
    console.log("The Banjo has the higher attack")
} else if (guitarAttack > banjoAttack) {
    console.log("The Guitar has a better attack")
} else {
    console.log("They both suck")
};

let banjoHealth = 100;
let banjoDefense = 0;

if (banjoHealth > guitarAttack ) {
    banjoHealth -= guitarAttack
    console.log(`Banjo health is now ${banjoHealth}`)
} else {
    console.log(`Banjo was slain.`)
}

banjoSaber = 25
banjoDefense += banjoSaber

for (i=0; i<5; i++) {
    let damage = guitarAttack - banjoDefense;
    banjoHealth -= damage;
    console.log(`Banjo's health is now ${banjoHealth}`)
}

while (banjoHealth > 0) {
    let damage = guitarAttack - banjoDefense;
    banjoHealth -= damage;
    if (banjoHealth > 0) {
        console.log(`Banjo's health is now ${banjoHealth}`)
    } else {
        console.log(`Banjo was slain.`)
    }
}

// if (alecSaid === "Your food smells gross") {
//     alecRelationshipScore--
//     console.log("Someone's sleeping in the doghouse")
// } else if ( alecSaid === "Good to see you're eating, hun") {
//     alecRelationshipScore++
//     console.log("Awww, he just earned brownie points") 
// } else {
//     console.log("What did he say again?")
// }

// let guitarHealth;
