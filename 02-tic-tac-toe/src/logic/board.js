import { WINNER_COMBOS } from './../constants.js'
export const checkWinnerFrom = (boardToCheck) => {
    for (const combo of WINNER_COMBOS) {
        const [a, b, c] = combo;
        if (
            boardToCheck[a] &&
            boardToCheck[a] == boardToCheck[b] &&
            boardToCheck[a] == boardToCheck[c]
        ) {
            return boardToCheck[a]
        }
        // si no hay ganador
    }
    return null;
};

export const checkEndGame = (newBoard) => {
    // REVISAMOS SI HAY UN EMPATE
    // SI NO HAY MAS ESPACIOS VACIOS
    // EN EL TABLERO
    return newBoard.every((square) => square != null);
};