document.addEventListener('DOMContentLoaded', () => {
    const cells = document.querySelectorAll('.cell');
    let currentPlayer = 'X';
    const board = Array(9).fill(null);
    const winningCombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    function handleClick(e) {
        const cell = e.target;
        const index = cell.getAttribute('data-index');

        if (board[index] !== null) {
            return;
        }

        cell.textContent = currentPlayer;
        board[index] = currentPlayer;

        if (checkWin()) {
            alert('winner is '+ currentPlayer);
            resetGame();
            return;
        }

        if (board.every(cell => cell !== null)) {
            alert('It\'s a tie!');
            resetGame();
            return;
        }

        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }

    function checkWin() {
        return winningCombinations.some(combination => {
            return combination.every(index => {
                return board[index] === currentPlayer;
            });
        });
    }

    function resetGame() {
        board.fill(null);
        cells.forEach(cell => {
            cell.textContent = '';
        });
        currentPlayer = 'X';
    }

    cells.forEach(cell => {
        cell.addEventListener('click', handleClick);
    });
});