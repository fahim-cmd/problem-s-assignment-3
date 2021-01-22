

function kilometerToMeter(kilometer) {
    if(kilometer > 0){
        const meter = kilometer * 1000;  // 1 kilometer = 1000 meter
        return meter;
    }
    else if (kilometer == undefined || kilometer < 0){
        return "Your value is undefined";
    }
}
// const result = kilometerToMeter(-1);
// console.log(result)


//How to budget for electronics products?

function budgetCalculator(watch, phone, laptop) {
    const watchPrice = watch * 50;
    const phonePrice = phone * 100;
    const laptopPrice = laptop * 500;

    const totalBudget = watchPrice + phonePrice + laptopPrice;
   
    return totalBudget;
}
// const total = budgetCalculator(-1, -1, -1);
// // console.log(total)


// How to calculate the hotel bill??

function hotelCost(remaining) {

        if( remaining > 0){
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
            else{
                const rentFirst10 = 10 * 100;
                const rentSecond10 = 10 * 80;
                const newStayingDays = remaining - 20;
                const rentInfinite = newStayingDays * 50;
                rent = rentFirst10 + rentSecond10 + rentInfinite;
            }
            return rent;
        }
        else{
            return "Invalid value";
        }
   
}
// const output = hotelCost();
// console.log(output)


// how to find a longest name in a array?

function megaFriend(arr) {

    if(arr < 0 || arr == ""){
        return "Something went wrong: ERROR";
    }

    else{
        let longestName = arr[0];
   
        for (var i = 0; i < arr.length; i++) {
            const nameLength = arr[i].length;
            if (nameLength > longestName.length) {
                longestName = arr[i];
            }       
        }
        
        return longestName;
    }
}
// var friends = megaFriend(["sakib", "tamim iqbal", "masrafi bin murtaza"]);
// console.log(friends);

