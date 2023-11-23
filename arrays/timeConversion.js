// Function Description

// Complete the timeConversion function in the editor below. It should
// return a new string representing the input time in 24 hour format.

// timeConversion has the following parameter(s):

// string s: a time in  hour format
// Returns

// string: the time in  hour format

let s1 = "12:05:45AM";
let strAux = s1.substring(0, 2);
    
    if (s1[8] === "P"){
        if (strAux === "12"){
            console.log(s1.substring(0, 8));
        }
        strAux = String(Number(strAux) + 12);
        console.log(strAux + s1.substring(2, 8));
    }

    else if (s1[8] === "A" && strAux === "12"){
        strAux = strAux = "00";
        console.log(strAux + s1.substring(2, 8));
    }

    else
    console.log(s1.substring(0, 8));
