function rightPlace (firstword , char , secoundWord) {
    let res = "";
    let res2 = firstword.replace("_",char);
    for(let i = 0; i < firstword.length; i++) {
        let currentChar = firstword[i];
        if (currentChar === "_") {
            res += char;
        } else {
            res += currentChar;
        }
    }
    if (res === secoundWord) {
        console.log("Matched");
    } else {
        console.log("Not Matched");
    }
}
rightPlace ('Str_ng', 'I', 'Strong')