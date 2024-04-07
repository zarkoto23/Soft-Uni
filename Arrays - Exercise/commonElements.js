function asd(arr1,arr2){

let commonElements = arr1.filter(elk => arr2.includes(elk));

commonElements.forEach(elk => {
    console.log(elk);
});

}
asd(['Hey', 'hello', 2, 4, 'Peter', 'e'],
['Petar', 10, 'hey', 4, 'hello', '2']
)
