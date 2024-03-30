function pyramid(size, step) {
    let marbleTot = 0;
    let stoneTot = 0;
    let stepTotal = 0;
    let stoneD = 0;
    let marbleD = 0;
    let lapisD = 0;
    let sizeCounter = size;
    let lapisTot = 0;
    let goldTot = 0;
    let stoneTemp = 0;
    let marbleTemp = 0;
    let lapisTemp = 0;
  
    while (sizeCounter > 0) {
      stepTotal++;
      if (sizeCounter - 2 > 0) {
        stoneD = (sizeCounter - 2) * (sizeCounter - 2) * step;
        stoneTot += stoneD;
        stoneTemp = (sizeCounter - 2) * (sizeCounter - 2);
        if (stepTotal % 5 === 0) {
          lapisD = (sizeCounter * sizeCounter - stoneTemp) * step;
          lapisTot += lapisD;
          lapisTemp = sizeCounter * sizeCounter - stoneD;
          sizeCounter--;
          sizeCounter--;
          continue;
        } else {
          marbleD = (sizeCounter * sizeCounter - stoneTemp) * step;
          marbleTot += marbleD;
          marbleTemp = sizeCounter * sizeCounter - stoneTemp;
        }
      } else {
        goldTot = sizeCounter * sizeCounter * step;
      }
      sizeCounter--;
      sizeCounter--;
    }
   console.log(`Stone required: ${Math.ceil(stoneTot)}`)
   console.log(`Marble required: ${Math.ceil(marbleTot)}`)
   console.log(`Lapis Lazuli required: ${Math.ceil(lapisTot)}`)
   console.log(`Gold required: ${Math.ceil(goldTot)}`)
   console.log(`Final pyramid height: ${Math.floor(stepTotal * step)}`)
  
  }
  pyramid(23, 0.5);
  