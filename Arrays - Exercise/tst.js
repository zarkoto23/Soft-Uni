function fun(arr) {
    let outputString = "";
   for (let i = 0; i < arr.length; i++) {
     let current = arr[i];
     if ((current > arr[i + 1]) && current > arr[arr.length - 1]) {
 
       outputString += current + " ";
     }
 
     if (i == arr.length - 1) {
 
       outputString += arr[i];
 
     }
 
   }
 
   console.log(outputString);
 
 }
 fun(([14, 24, 3, 19, 15, 17]))