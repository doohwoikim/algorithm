function validAnagram(first, second) {
    if(first.length !== second.length) {
        return false;
    }

    const lookup = {};

    for(let i = 0; i < first.length; i++){
        let letter = first[i];
        lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
    }

    for(let i = 0; i < second.length; i++){
        let letter = second[i];
        !lookup[letter] ? false : lookup[letter] -= 1;
    }
    return true;
}

function validAnagram(str1, str2) {
    if (str1.length !== str2.length) {
        return false;
    }

    let str1Counter = {}
    let str2Counter = {}

    for (let val of str1) {
        str1Counter[val] = (str1Counter[val] || 0) + 1
    }

    for (let val of str2) {
        str2Counter[val] = (str2Counter[val] || 0) + 1
    }

    for (let key in str1Counter) {
        if (!(key in str2Counter)) {
            return false;
        }
        if (str2Counter[key] !== str1Counter[key]) {
            return false;
        }
    }
    return true;
}

console.log(validAnagram('anagrams', 'nagaramm'))
