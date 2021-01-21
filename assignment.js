

function kilometerToMeter(kilometer) {
    const meter = kilometer * 1000;  // 1 kilometer = 1000 meter
    return meter;
}
const result = kilometerToMeter(10);
console.log(result)


//How to budget for electronics products?

function budgetCalculator(watch, phone, laptop) {
    const watchPrice = watch * 50;
    const phonePrice = phone * 100;
    const laptopPrice = laptop * 500;

    const totalBudget = watchPrice + phonePrice + laptopPrice;
    return totalBudget;
}
// const total = budgetCalculator(2, 5, 2);
// // console.log(total)


// How to calculate the hotel bill??

function hotelCost(remaining) {
    if (remaining <= 10) {
        const stayingCostFirst = remaining * 100
        return stayingCostFirst;
    }
    if (remaining <= 20) {
        const stayingCostSecond = (10 * 100) + ((remaining - 10) * 80)  //sum of first and second 10days
        return stayingCostSecond;
    }
    else {
        const stayingCostThird = (10 * 100) + (10 * 80) + ((remaining - 20) * 50)
        return stayingCostThird;
    }
}
// const output = hotelCost(20);
// // console.log(output)


// how to find a longest name in a array?

function megaFriend(arr) {
    let longestName = arr[0];
    for (var i = 0; i < arr.length; i++) {
        const nameLength = arr[i].length;
        if (nameLength > longestName.length) {
            longestName = arr[i];
        }
    }
    return longestName;
}
// var friends = megaFriend(["sakib", "mushfiq", "rubel hossain"]);
// console.log(friends);