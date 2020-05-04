// JavaScript Algorithms and Data Structures Projects: Cash Register
// Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price),
// payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.

// cid is a 2D array listing available currency.

// The checkCashRegister() function should always return an object with a status key and a change key.

// Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you cannot return the exact change.

// Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.

// Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key.

// Currency Unit	Amount
// Penny	$0.01 (PENNY)
// Nickel	$0.05 (NICKEL)
// Dime	$0.1 (DIME)
// Quarter	$0.25 (QUARTER)
// Dollar	$1 (ONE)
// Five Dollars	$5 (FIVE)
// Ten Dollars	$10 (TEN)
// Twenty Dollars	$20 (TWENTY)
// One-hundred Dollars	$100 (ONE HUNDRED)
// See below for an example of a cash-in-drawer array:

// [
//     ["PENNY", 1.01],
//     ["NICKEL", 2.05],
//     ["QUARTER", 4.25],
//     ["ONE", 90],
//     ["FIVE", 55],
//     ["TEN", 20],
//     ["TWENTY", 60],
//     ["ONE HUNDRED", 100]
//     ["DIME", 3.1],
// ]
// checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]) should return an object.
// checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]) should return {status: "OPEN", change: [["QUARTER", 0.5]]}.
// checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]) should return {status: "OPEN", change: [["TWENTY", 60], ["TEN", 20], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04]]}.
// checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) should return {status: "INSUFFICIENT_FUNDS", change: []}.
// checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) should return {status: "INSUFFICIENT_FUNDS", change: []}.
// checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) should return {status: "CLOSED", change: [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]}.

// MY CODE

function checkCashRegister(price, cash, cid) {
    // add all the money in the till together
    let reducer = (currentValue, accumulator) => currentValue + accumulator;

    // makes array only containing the values
    let inTill = cid.map(function (a) {
        return a[1];
    });

    // const cidCopy = cid.map((a) => a);

    // console.log(cid);
    // console.log(cidCopy);

    //Have to do this: to get a rounded number if not result will be 335.40999999999997
    let totalTill = Math.round(inTill.reduce(reducer) * 100) / 100;

    let changeDue = cash - price;
    // looks how many of each there is
    function givenChange(cidCopy, money) {
        const putChange = [];

        let test = cidCopy.reverse();

        for (let i = 0; i < test.length; i++) {
            let value = 0;

            // if (test[i][1] === 0) {

            // }

            if (
                test[i][0] === "ONE HUNDRED" &&
                money >= 100 &&
                // money % 100 === 0 &&
                test[i][1] !== 0
            ) {
                while (money >= 100 && test[i][1] !== 0) {
                    money -= 100;
                    value += 100;
                    test[i][1] -= 100;
                }
                putChange.push(["ONE HUNDRED", value]);
            }

            if (
                test[i][0] === "TWENTY" &&
                money >= 20 &&
                // money % 20 === 0 &&
                test[i][1] !== 0
            ) {
                while (money >= 20 && test[i][1] !== 0) {
                    money -= 20;
                    value += 20;
                    test[i][1] -= 20;
                }
                putChange.push(["TWENTY", value]);
            }

            if (
                test[i][0] === "TEN" &&
                money >= 10 &&
                // money % 10 === 0 &&
                test[i][1] !== 0
            ) {
                while (money >= 10 && test[i][1] !== 0) {
                    money -= 10;
                    value += 10;
                    test[i][1] -= 10;
                }
                putChange.push(["TEN", value]);
            }

            if (
                test[i][0] === "FIVE" &&
                money >= 5 &&
                // money % 5 === 0 &&
                test[i][1] !== 0
            ) {
                while (money >= 5 && test[i][1] !== 0) {
                    money -= 5;
                    value += 5;
                    test[i][1] -= 5;
                }
                putChange.push(["FIVE", value]);
            }

            if (
                test[i][0] === "ONE" &&
                money >= 1 &&
                // money % 1 === 0 &&
                test[i][1] !== 0
            ) {
                while (money >= 1 && test[i][1] !== 0) {
                    money -= 1;
                    value += 1;
                    test[i][1] -= 1;
                }
                putChange.push(["ONE", value]);
            }

            if (
                test[i][0] === "QUARTER" &&
                money >= 0.25 &&
                // money % 0.25 === 0 &&
                test[i][1] !== 0
            ) {
                while (money >= 0.25 && test[i][1] !== 0) {
                    money -= 0.25;
                    value += 0.25;
                    test[i][1] -= 0.25;
                }
                putChange.push(["QUARTER", Math.round(value * 100) / 100]);
            }

            if (
                test[i][0] === "DIME" &&
                money >= 0.1 &&
                // money % 0.1 === 0 &&
                test[i][1] !== 0
            ) {
                while (money >= 0.1 && test[i][1] !== 0) {
                    money -= 0.1;
                    value += 0.1;
                    test[i][1] -= 0.1;
                }
                putChange.push(["DIME", Math.round(value * 100) / 100]);
            }

            if (
                test[i][0] === "NICKEL" &&
                money >= 0.05 &&
                // money % 0.05 === 0 &&
                test[i][1] !== 0
            ) {
                while (money >= 0.05 && test[i][1] !== 0) {
                    money -= 0.05;
                    value += 0.05;
                    test[i][1] -= 0.05;
                }
                putChange.push(["NICKEL", Math.round(value * 100) / 100]);
            }

            if (
                test[i][0] === "PENNY" &&
                money >= 0.01 &&
                // money % 0.01 === 0 &&
                test[i][1] !== 0
            ) {
                while (money >= 0.0 && test[i][1] !== 0) {
                    money -= 0.01;
                    value += 0.01;
                    test[i][1] -= 0.01;
                    // console.log(value);
                }
                putChange.push(["PENNY", Math.round(value * 100) / 100]);
            }
        }
        console.log("putChange" + putChange[0][1]);
        return putChange;
    }

    const change = {
        status: "",
        change: [],
    };
    console.log(cid);

    if (totalTill === changeDue) {
        change.status = "CLOSED";
        change.change = cid;
        console.log(change);
        return change;
    }

    let theChange = givenChange(cid, changeDue);
    console.log("the " + theChange);

    console.log(totalTill + " & " + changeDue);

    if (
        (theChange[0][1] < changeDue && theChange[0][0] === "PENNY") ||
        totalTill < changeDue
    ) {
        change.status = "INSUFFICIENT_FUNDS";
        change.change = [];
        // return change;
        console.log(change);
    }

    if (totalTill > changeDue && theChange.length !== 0) {
        change.status = "OPEN";
        change.change = theChange;
        // console.log("hello " + change.change[0][1] + "hey " + changeDue);
        // return change;
        console.log(change);
    }

    // if (totalTill < changeDue) {
    //     change.status = "INSUFFICIENT_FUNDS";
    //     // return change;
    //     console.log(change);
    // }

    console.log(`Cash due: ${changeDue}`);
    console.log(`In the till 'totalTill' : ${totalTill}`);
    console.log(`In the till exectly 'inTill': ${inTill}`);
    console.log(change);
}

checkCashRegister(3.26, 100, [
    ["PENNY", 1.01],
    ["NICKEL", 2.05],
    ["DIME", 3.1],
    ["QUARTER", 4.25],
    ["ONE", 90],
    ["FIVE", 55],
    ["TEN", 20],
    ["TWENTY", 60],
    ["ONE HUNDRED", 100],
]);

// checkCashRegister(19.5, 20, [
//     ["PENNY", 0.5],
//     ["NICKEL", 0],
//     ["DIME", 0],
//     ["QUARTER", 0],
//     ["ONE", 0],
//     ["FIVE", 0],
//     ["TEN", 0],
//     ["TWENTY", 0],
//     ["ONE HUNDRED", 0],
// ]);

// // WORKS
// // checkCashRegister(3.26, 100, [
// //     ["PENNY", 1.01],
// //     ["NICKEL", 2.05],
// //     ["DIME", 3.1],
// //     ["QUARTER", 4.25],
// //     ["ONE", 90],
// //     ["FIVE", 55],
// //     ["TEN", 20],
// //     ["TWENTY", 60],
// //     ["ONE HUNDRED", 100],
// // ]);
// /*
// {status: "OPEN",
// change: [
// ["TWENTY", 60],
// ["TEN", 20],
// ["FIVE", 15],
// ["ONE", 1],
// ["QUARTER", 0.5],
// ["DIME", 0.2],
// ["PENNY", 0.04]
// ]}
// */
// WORKS;
// checkCashRegister(19.5, 20, [
//     ["PENNY", 0.01],
//     ["NICKEL", 0],
//     ["DIME", 0],
//     ["QUARTER", 0],
//     ["ONE", 1],
//     ["FIVE", 0],
//     ["TEN", 0],
//     ["TWENTY", 0],
//     ["ONE HUNDRED", 0],
// ]);

// WORKS
// checkCashRegister(19.5, 20, [
//     ["PENNY", 1.01],
//     ["NICKEL", 2.05],
//     ["DIME", 3.1],
//     ["QUARTER", 4.25],
//     ["ONE", 90],
//     ["FIVE", 55],
//     ["TEN", 20],
//     ["TWENTY", 60],
//     ["ONE HUNDRED", 100],
// ]);
