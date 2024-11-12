function processList(text) {
  // Разделяме текста на отделни редове
  let arr = text.split('\n').map(item => item.trim());

  // Премахваме "общи приятели" и цифрата преди това
  return arr
    .map(item => item.replace(/\d+\s*общи приятели/, '').trim())
    .filter(item => item !== ''); // Филтрираме празните низове
}

function findNewFriends(oldList, newList) {
  const oldFriends = processList(oldList);
  const newFriends = processList(newList);

  // Намираме новите приятели, които не са в стария списък
  const newEntries = newFriends.filter(friend => !oldFriends.includes(friend));
  const newOldEntr=oldFriends.filter(friend => !newFriends.includes(friend));

  console.log('Нови приятели:', newEntries);
  console.log('Премахнати стари:', newOldEntr)
  console.log(oldFriends.length, newFriends.length)

}
const oldInputText = `
Rositsa Gatova
13 общи приятели
Darena Slavcheva
128 общи приятели
Елена Томова
54 общи приятели
Надежда Котрукова Бояджиева
54 общи приятели
Даниела Тенева
1 общ приятел
Чичо Митко
48 общи приятели
Ивайло Стойчев
9 общи приятели
Хари Белев
3 общи приятели
Станислав Павлов
1 общ приятел

`;

const newInputText = `
Елена Томова
54 общи приятели
Rositsa Gatova
13 общи приятели
Надежда Котрукова Бояджиева
54 общи приятели
Станислав Павлов
1 общ приятел
Хари Белев
3 общи приятели
Даниела Тенева
1 общ приятел
Ивайло Стойчев
9 общи приятели
Чичо Митко
48 общи приятели
Yoanna-Mariya Sheyredova
18 общи приятели
`;

findNewFriends(oldInputText, newInputText);
