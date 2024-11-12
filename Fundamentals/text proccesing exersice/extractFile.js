function solve(str) {
  let splited = str.split("\\");
  let file = splited[splited.length - 1];
  let idx = file.lastIndexOf(".");

  let ext = file.substring(idx + 1);
  let finalFile = file.substring(0, idx);
  console.log(`File name: ${finalFile}`);
  console.log(`File extension: ${ext}`);
}

solve("C:\\Internal\\training-internal\\Temp.late.pptx");
