function test(input) {

    let num = Number(input[input.length - 1])
    let counter = ''
    input.pop();

    for (let i = 0; i < input.length; i += num) {
       
        counter += `${input[i]} `;
    };
    console.log(counter);
}


test(['dsa', 'asd', 'test', 'test', '2'])