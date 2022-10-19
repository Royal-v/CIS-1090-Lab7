import words from "./words.js";

function getPositionInAlphabet(word){
    //This is something you have not seen before. Don't worry.
    return word.charCodeAt(0) - "a".charCodeAt(0);
}

function createIndexForDictionary(d){
    let index = [0];
    let position = 0;
    for( let i = 1; i <= 26; i++){
        while ( position < d.length && getPositionInAlphabet(d[position]) < i )
            position++;
        index[i] = position;
    }
    return index;
}

function indexSearch(needle, haystack, index){
    //❓ Question 6 TODO: Finish this code
    let i = index[getPositionInAlphabet(needle)];
    let b = index[getPositionInAlphabet(needle)+1];
    while(i< haystack.length){
        if (needle == haystack[i]){
            return true
        }
        else if(i == b)
        {return false}
        else {
            i++}
    }

    return false;
}

let index = createIndexForDictionary(words);

export default function(word){
    return indexSearch(word, words, index);
}
