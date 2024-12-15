function solve() {
  // Избиране на бутоните чрез querySelectorAll
  const quickCheckButton = document.querySelectorAll('button')[0];
  const clearButton = document.querySelectorAll('button')[1];

  // Функция за проверка на валидността на Судоку
  function isValid(board) {
    // Проверка на редовете
    for (let i = 0; i < 9; i++) {
      let row = new Set();
      for (let j = 0; j < 9; j++) {
        const value = board[i][j];
        if (value !== "" && row.has(value)) {
          return false;  // Няма повторение в реда
        }
        if (value !== "") {
          row.add(value);
        }
      }
    }

    // Проверка на колоните
    for (let j = 0; j < 9; j++) {
      let col = new Set();
      for (let i = 0; i < 9; i++) {
        const value = board[i][j];
        if (value !== "" && col.has(value)) {
          return false;  // Няма повторение в колоната
        }
        if (value !== "") {
          col.add(value);
        }
      }
    }

    // Проверка на 3x3 блоковете
    for (let i = 0; i < 9; i += 3) {
      for (let j = 0; j < 9; j += 3) {
        let block = new Set();
        for (let x = 0; x < 3; x++) {
          for (let y = 0; y < 3; y++) {
            const value = board[i + x][j + y];
            if (value !== "" && block.has(value)) {
              return false;  // Няма повторение в блока
            }
            if (value !== "") {
              block.add(value);
            }
          }
        }
      }
    }
    return true;  // Всичко е валидно
  }

  // Функция за извличане на стойностите от таблицата
  function getBoard() {
    let board = [];
    const rows = document.querySelectorAll('tbody tr');
    rows.forEach(row => {
      let rowData = [];
      row.querySelectorAll('input').forEach(input => {
        const value = input.value ? parseInt(input.value) : "";
        rowData.push(value);  // Добавяме стойността на полето
      });
      board.push(rowData);  // Добавяме реда към дъската
    });
    return board;
  }

  // Обработчик за бутон "Quick Check"
  quickCheckButton.addEventListener('click', (e) => {
    console.log('click1');  // Проверка дали събитието се изпълнява

    const board = getBoard();  // Извличаме текущата дъска
    const valid = isValid(board);  // Проверяваме дали е валидно
    const message = document.querySelector('#check p');
    if (valid) {
      message.style.color = 'green';
      message.textContent = 'You solve it! Congratulations!';
    } else {
      message.style.color = 'red';
      message.textContent = "NOP! You are not done yet...";
    }
  });

  // Обработчик за бутон "Clear"
  clearButton.addEventListener('click', (e) => {
    console.log('click2');  // Проверка дали събитието за "Clear" се изпълнява
    const inputs = document.querySelectorAll('tbody input');
    inputs.forEach(element => {
      element.value = '';  // Изчистваме всички полета
    });
    const message = document.querySelector('#check p');
    message.textContent = '';  // Изчистваме съобщението
  });
}