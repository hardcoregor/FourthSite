let priceBtc = prompt("What is Bitcoin price today?",);
let yourDeposit = prompt("How much $ do you have?",);

priceBtc = Number(priceBtc);
yourDeposit = Number(yourDeposit);

let result = yourDeposit / priceBtc;

console.log(`You can buy ${result} BTC`);