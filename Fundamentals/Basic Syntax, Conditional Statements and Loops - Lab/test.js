function sumAndMultiplication(input) {
    let n = Number(input[0]);
    for (let a = 1; a <= 9; a++) {
        for (let b = 9; b >= a; b--) {
            for (let c = 0; c <= 9; c++) {
                for (let d = 9; d >= c; d--) {
                    let sum = a + b + c + d;
                    let product = a * b * c * d;
                    if (sum === product && n % 10 === 5) {
                        console.log(`${a}${b}${c}${d}`);
                        return;
                    } else if (product % sum === 0 && product / sum === 3 && n % 3 === 0) {
                        console.log(`${d}${c}${b}${a}`);
                        return;
                    }
                }
            }
        }
    }
    console.log("Nothing found")
}

sumAndMultiplication(["123"])