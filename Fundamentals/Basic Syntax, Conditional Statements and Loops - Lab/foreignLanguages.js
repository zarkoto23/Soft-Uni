function asd(state){
    switch(state){
        case 'England':
        case 'USA':
            console.log('English')
        break
        case 'Spain':
        case 'Argentina':
        case 'Mexico':
            console.log('Spanish')
        break
        default:
            console.log('unknown')
    }
}
asd('USA')