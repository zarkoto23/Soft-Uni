function asd(str, ch, strTwo){
    let miss=str.replace('_',ch)
    let result= miss===strTwo ? 'Matched':'Not Matched'
    console.log(result)
}
asd('Str_ng', 'i', 'String')