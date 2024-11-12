function solve(arr) {
  // Стъпка 1: Обект за съхранение на термини и дефиниции
  let termsDict = {};

  // Стъпка 2: Обработка на входните данни
  for (let jsonString of arr) {
    // Преобразуване на JSON стринг в обект
    let termDef = JSON.parse(jsonString);

    // Получаване на първия (и единствен) ключ и стойност
    let key = Object.keys(termDef)[0];
    let value = termDef[key];

    // Добавяне или обновяване на дефиницията в обекта
    termsDict[key] = value;
  }

  // Стъпка 3: Преобразуване на обекта в масив и сортиране по ключ
  let sortedEntries = Object.entries(termsDict).sort(([keyA], [keyB]) => keyA.localeCompare(keyB));

  // Стъпка 4: Извеждане на резултата
  for (let [key, value] of sortedEntries) {
    console.log(`Term: ${key} => Definition: ${value}`);
  }
}

solve([
  '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
  '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
  '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
  '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
  '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}',
]);
