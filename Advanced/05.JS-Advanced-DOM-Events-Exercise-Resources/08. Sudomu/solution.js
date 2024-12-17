function solve(){

document.addEventListener('DOMContentLoaded', () => {
  function solve() {
    const quickCheckButton = document.querySelectorAll('button')[0];
    const clearButton = document.querySelectorAll('button')[1];

    function isValid(board) {
      for (let i = 0; i < 9; i++) {
        let row = new Set();
        for (let j = 0; j < 9; j++) {
          const value = board[i][j];
          if (value !== "" && row.has(value)) {
            return false;
          }
          if (value !== "") {
            row.add(value);
          }
        }
      }

      for (let j = 0; j < 9; j++) {
        let col = new Set();
        for (let i = 0; i < 9; i++) {
          const value = board[i][j];
          if (value !== "" && col.has(value)) {
            return false;
          }
          if (value !== "") {
            col.add(value);
          }
        }
      }

      for (let i = 0; i < 9; i += 3) {
        for (let j = 0; j < 9; j += 3) {
          let block = new Set();
          for (let x = 0; x < 3; x++) {
            for (let y = 0; y < 3; y++) {
              const value = board[i + x][j + y];
              if (value !== "" && block.has(value)) {
                return false;
              }
              if (value !== "") {
                block.add(value);
              }
            }
          }
        }
      }
      return true;
    }

    function getBoard() {
      let board = [];
      const rows = document.querySelectorAll('tbody tr');
      rows.forEach(row => {
        let rowData = [];
        row.querySelectorAll('input').forEach(input => {
          const value = input.value ? parseInt(input.value) : "";
          rowData.push(value);
        });
        board.push(rowData);
      });
      return board;
    }

    quickCheckButton.addEventListener('click', () => {
      const board = getBoard();
      const valid = isValid(board);
      const message = document.querySelector('#check p');
      if (valid) {
        message.style.color = 'green';
        message.textContent = 'You solve it! Congratulations!';
      } else {
        message.style.color = 'red';
        message.textContent = "NOP! You are not done yet...";
      }
    });

    clearButton.addEventListener('click', () => {
      const inputs = document.querySelectorAll('tbody input');
      inputs.forEach(element => {
        element.value = '';
      });
      const message = document.querySelector('#check p');
      message.textContent = '';
    });
  }

});
}