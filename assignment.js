//  https://github.com/fahim-cmd/problem-s-assignment-3

function kilometerToMeter(kilometer) {

    if (kilometer > 0) {
        const meter = kilometer * 1000;  // 1 kilometer = 1000 meter
        return meter;
    }
    else if (kilometer == undefined || kilometer <= 0) {
        return "Your value is undefined";
    }
}


function budgetCalculator(watch, phone, laptop) {

    if (watch, phone, laptop > 0) {
        const watchPrice = watch * 50;
        const phonePrice = phone * 100;
        const laptopPrice = laptop * 500;

        const totalBudget = watchPrice + phonePrice + laptopPrice;
        return totalBudget;
    }
    else {
        return "Unaccepted value";
    }
}


function hotelCost(remaining) {

    if (remaining > 0) {
        let rent = 0;
        if (remaining <= 10) {
            rent = remaining * 100;
        }
        else if (remaining <= 20) {
            const rentFirst10 = 10 * 100;
            const stayingDays = remaining - 10;
            const rentSecond10 = stayingDays * 80;
            rent = rentFirst10 + rentSecond10;
        }
        else {
            const rentFirst10 = 10 * 100;
            const rentSecond10 = 10 * 80;
            const newStayingDays = remaining - 20;
            const rentInfinite = newStayingDays * 50;
            rent = rentFirst10 + rentSecond10 + rentInfinite;
        }
        return rent;
    }
    else {
        return "Invalid value";
    }
}


function megaFriend(name) {

    if (name < 0 || name == "") {
        return "Something went wrong: ERROR";
    }
    else {
        let longestName = name[0];

        for (var i = 0; i < name.length; i++) {
            const nameLength = name[i].length;
            if (nameLength > longestName.length) {
                longestName = name[i];
            }
        }
        return longestName;
    }
}



