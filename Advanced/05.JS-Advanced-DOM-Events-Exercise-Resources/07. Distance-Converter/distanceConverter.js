function attachEventsListeners() {

  const units={
    km: 1000,
    m: 1,
    cm: 0.01,
    mm: 0.001,
    mi: 1609.34,
    yrd: 0.9144,
    ft: 0.3048,
    in: 0.0254,

  }

    const btn=document.querySelector('#convert')
    btn.addEventListener('click',(e)=>{
      const inputDistance = Number(document.querySelector('#inputDistance').value);
        const fromUnit = document.querySelector('#inputUnits').value;
        const toUnit = document.querySelector('#outputUnits').value;

    const distanceInMetters=inputDistance*units[fromUnit]

    const result=distanceInMetters/units[toUnit]

    const output=document.querySelector('#outputDistance')
    output.value=result




    })
}