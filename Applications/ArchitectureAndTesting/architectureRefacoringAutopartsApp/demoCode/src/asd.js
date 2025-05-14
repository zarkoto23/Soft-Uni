const views = {
    'home-nav': 'param1',
    'catalog-nav': 'param2',
    
};


 function navTo(linkId, param) {
    const view = views['catalog-nav'];
    console.log(view('param1'))
    // if (view) {
    //     const section = view(param);
    //     main.replaceChildren(section);
    // }
}
navTo()