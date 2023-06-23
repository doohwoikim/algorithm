// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 * 
Input: s = "anagram", t = "nagaram"
Output: true

Input: s = "rat", t = "car"
Output: false
 */
var isAnagram = function (s, t) {
    var newS = s.split("").sort();
    var newT = t.split("").sort();

    if (newS.length !== newT.length) {
        return false;
    }

    for (var i = 0; i < newS.length; i++) {
        if (newS[i] !== newT[i]) {
            return false
        }
    }
    return true;
};