function asd(centuries){
    let a=centuries*100
    let b=Math.trunc(a*365.2422)
    let c=b*24
    let d=c*60

    console.log(`${centuries} centuries = ${a.toFixed()} years = ${b.toFixed()} days = ${c.toFixed()} hours = ${d.toFixed()} minutes`)
}asd(5)