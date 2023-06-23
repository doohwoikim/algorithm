function sameFrequency(num1, num2) {
    if(num1.length !== num2.length) {
        return false;
    }

    let freqCounter1 = {}
    let freqCounter2 = {}

    for(let val of num1){
        freqCounter1[val] = (freqCounter1[val] || 0) +1
    }

    for(let val of num2){
        freqCounter2[val] = (freqCounter2[val] || 0) + 1
    }

    console.log(freqCounter1);
    console.log(freqCounter2);

    for(let key in freqCounter1) {
        if(!(key in freqCounter2)){
            return false
        }
        if(freqCounter2[key] !== freqCounter1[key]){
            return false;
        }
    }
    return true;
}

console.log(sameFrequency(182, 281))