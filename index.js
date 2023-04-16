// Iteration 1: Names and Input

let hacker1 = "My favorite teacher of all";
console.log(`The driver's name is ${hacker1}.`);

const hacker2 = "Pls report x10 Yabel, flamer";
console.log(`The navigator's name is ${hacker2}.`);




// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length}.`);
} else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
} else {
    console.log(`Wow, you both have equally long names, ${hacker1} characters!`)
}






// Iteration 3: Loops


const hacker1Upper = hacker1.toUpperCase();
console.log(hacker1Upper);
let charHacker1 = "";

for (let i = 0; i <= hacker1Upper.length-1; i ++) {
    charHacker1 += hacker1Upper[i] + " ";
}
//console.log(char.split("").join(" ")); [una altre manera que trobo més façil]
console.log(charHacker1);



let reverseName= "";

for (let i = hacker2.length-1; i >=0 ; i --) {
    reverseName += hacker2[i];
}

console.log(reverseName);


for (let i = 0; i < hacker1.length && i < hacker2.length; i ++) {
    if (hacker1[i] > hacker2[i]) {
        console.log("Yo, the navigator goes first, definitely.");
        return;
    
}   else if (hacker1[i] < hacker2[i]) {
    console.log("The driver's name goes first.");
    return;
}
    else {
        console.log("What?! You both have the same name?"); 
    }
}


// no entenc massa lo de lexicoraphical order. explicam breument 