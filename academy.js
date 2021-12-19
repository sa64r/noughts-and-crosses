// Make your changes to store and update game state in this file

// Take the row and column number between 0 and 2 
// (inclusive) and update the game state.
let playerOneTurn = true;
let gameBoard =  [[null, null, null], [null, null, null], [null, null, null]]
let gameOver = false;
let playerNames = [];

function takeTurn(row, column) {
    console.log("takeTurn was called with row: "+row+", column:"+column);
    
    if(gameBoard[row][column] === null && !gameOver){ //ensures you cannot overwrite a square
        if(playerOneTurn){
            gameBoard[row][column] = "nought"
            playerOneTurn = false
        }else{
            gameBoard[row][column] = "cross"
            playerOneTurn = true
        }
    }

}

// Return either "noughts", "crosses" or "nobody" if the game is over.
// Otherwise return null to continue playing.
function checkWinner() {
    console.log("checkWinner was called");

    // if(playerNames.length === 0){
    //     playerNames[0] = window.prompt("What is player 1's name:","Player 1")
    //     playerNames[1] = window.prompt("What is player 2's name:","Player 2")
    // }

    
    for(let i = 0; i < 3; i++){
        //checking horizontal wins
        if(gameBoard[i][0] === gameBoard[i][1] && gameBoard[i][1] === gameBoard[i][2] && gameBoard[i][0] !== null){
            if(gameBoard[i][0] === "nought"){
                gameOver = true
                return "noughts"
            }else{
                gameOver = true
                return "crosses"
            }
        }
        //checking vertical wins
        if(gameBoard[0][i] === gameBoard[1][i] && gameBoard[1][i] === gameBoard[2][i] && gameBoard[0][i] !== null){
            if(gameBoard[0][i] === "nought"){
                gameOver = true
                return "noughts"
            }else{
                gameOver = true
                return "crosses"
            }
        }
    }

    //checking diagonal wins
    //leading diagonal
    if(gameBoard[0][0]===gameBoard[1][1] && gameBoard[1][1] === gameBoard[2][2] && gameBoard[0][0]!== null){
        if(gameBoard[0][0] === "nought"){
            gameOver = true
            return "noughts"
        }else{
            gameOver = true
            return "crosses"
        }
    }

    //other diagonal
    if(gameBoard[0][2]===gameBoard[1][1] && gameBoard[1][1] === gameBoard[2][0] && gameBoard[0][2]!== null){
        if(gameBoard[0][0] === "nought"){
            gameOver = true
            return "noughts"
        }else{
            gameOver = true
            return "crosses"
        }
    }
    
    // HANDLES DRAWS
    let isDraw = true
    loop:
    for(let i = 0; i < 3; i++){
        for(let j =0; j < 3; j++){
            if(gameBoard[i][j]===null){
                isDraw = false
                break loop
            }
        }
    }
    if(isDraw){
        gameOver = true
        return "nobody"
    }

    return null;
}

// Set the game state back to its original state to play another game.
function resetGame() {
    console.log("resetGame was called");
    gameOver = false
    playerOneTurn = true;
    gameBoard = [[null, null, null], [null, null, null], [null, null, null]];

}

// Return the current board state with either a "nought" or a "cross" in
// each position. Put a null in a position that hasn't been played yet.
function getBoard() {
    console.log("getBoard was called");
    return gameBoard;
}

if (typeof exports === 'object') {
    console.log("Running in Node")
    // Node. Does not work with strict CommonJS, but only CommonJS-like 
    // environments that support module.exports, like Node.
    module.exports = {
        takeTurn,
        checkWinner,
        resetGame,
        getBoard,
    }
} else {
    console.log("Running in Browser")
}
