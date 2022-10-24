import words from "./words.js";

function binarySearch(needle, haystack) {
    let lookingatword = haystack.length / 2;
    let startofsearchrange = 0;
    let endingofsearchrang = haystack.length - 1; //?
    lookingatword = Math.round(lookingatword);
    while (startofsearchrange !== endingofsearchrang) {
        lookingatword = Math.round(lookingatword);
        startofsearchrange = Math.round(startofsearchrange);
        endingofsearchrang = Math.round(endingofsearchrang);
       console.log("looking between", startofsearchrange, "and",endingofsearchrang, "currently checking",lookingatword);
        if (haystack[lookingatword] == needle) {
            return true;
        }
        else {
            if (needle < haystack[lookingatword]) {
                endingofsearchrang = lookingatword-1;
                lookingatword = ((lookingatword + startofsearchrange) / 2);
            }
            else if (needle > haystack[lookingatword]) {
                startofsearchrange = lookingatword;
                lookingatword = (endingofsearchrang + lookingatword) / 2;

            }
            else { console.log("something is wrong"); }
        }

    }
    return false;
}

export default function (word) {
    return binarySearch(word, words);
}