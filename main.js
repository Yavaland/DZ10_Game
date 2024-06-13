function startGame() {
  const board = [
    [" ", " ", " "],
    [" ", " ", " "],
    [" ", " ", " "],
  ];

  let currentPlayer = "X";

  let moves = 0;

  while (true) {
    printBoard(board);
    const row = prompt(`Игрок ${currentPlayer}, введите строку (0, 1 или 2):`);
    const col = prompt(`Игрок ${currentPlayer}, введите столбец (0, 1 или 2):`);

    if (row === null || col === null) {
      alert("Игра завершена.");
      break;
    }

    // Преобразование строкового ввода в числа
    const r = parseInt(row);
    const c = parseInt(col);

    // Проверка корректности ввода и пустоты выбранной ячейки
    if (r >= 0 && r <= 2 && c >= 0 && c <= 2 && board[r][c] === " ") {
      // Установка хода на игровом поле
      board[r][c] = currentPlayer;
      // Увеличение счетчика ходов
      moves++;

      // Проверка на наличие победителя
      if (checkWinner(board, currentPlayer)) {
        printBoard(board);
        alert(`Игрок ${currentPlayer} победил!`);
        break;
        // Проверка на ничью
      } else if (moves === 9) {
        printBoard(board);
        alert("Ничья!");
        break;
      }

      // Смена текущего игрока
      currentPlayer = currentPlayer === "X" ? "O" : "X";
    } else {
      alert("Некорректный ввод, попробуйте снова.");
    }
  }
}

// Функция для вывода игрового поля в консоль
function printBoard(board) {
  console.clear(); // Очистка консоли
  console.log("  0 1 2");
  for (let i = 0; i < 3; i++) {
    console.log(i + " " + board[i].join("|"));
  }
}

// Функция для проверки победителя
function checkWinner(board, player) {
  // Проверка строк
  for (let i = 0; i < 3; i++) {
    if (
      board[i][0] === player &&
      board[i][1] === player &&
      board[i][2] === player
    ) {
      return true;
    }
  }
  // Проверка столбцов
  for (let i = 0; i < 3; i++) {
    if (
      board[0][i] === player &&
      board[1][i] === player &&
      board[2][i] === player
    ) {
      return true;
    }
  }
  // Проверка диагоналей
  if (
    board[0][0] === player &&
    board[1][1] === player &&
    board[2][2] === player
  ) {
    return true;
  }
  if (
    board[0][2] === player &&
    board[1][1] === player &&
    board[2][0] === player
  ) {
    return true;
  }
  return false;
}
