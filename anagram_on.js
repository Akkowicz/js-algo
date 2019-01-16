// Checks if the word is an anagram in O(n) time
// Uses the frequency counter pattern.

function validAnagram(first, second) {
    // if the two words are not of the same length
    // they're not anagrams
    if (first.length !== second.length) {
        return false;
    }

    // create an object to store letter frequency
    const freq = {};

    // iterate through the word and set increment
    // the letter frequency or set to 1 if not in the object
    for (let letter of first) {
        freq[letter] ? freq[letter] += 1 : freq[letter] = 1;
    }

    // check the second word with the object
    for (let letter of second) {
        if (freq[letter]) {
            freq[letter] -= 1;
        } else {
            return false;
        }
    }

    // anagrams
    return true;
}

// simple tests

if (validAnagram("konstantynopolitańczykowianeczka", "konstantynopolitańczykowianeczka") 
&& validAnagram("damn", "namd")
&& validAnagram("rete", "tree")
&& !validAnagram("konstantynopolitańczykowianeczka", "konstantynopolitańczykowianeczk") 
&& !validAnagram("tree", "terr")) {
    console.info("All tests OK!");
} else {
    console.warn("Tests failed!");
}