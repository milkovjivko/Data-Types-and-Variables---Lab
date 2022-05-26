function amazingNum(num) {
        let numToString = String(num);
        let result = 0;
    
        for(let i = 0; i < numToString.length; i++) {
            let num = Number(numToString[i]);
            result += num;
        }

        console.log(`${num} Amazing? ${result.toString().includes("9")  
        ?"True"
        : "False"}`);
}
amazingNum(1233)