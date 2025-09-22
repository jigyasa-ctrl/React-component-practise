import { useState } from "react";

function Square({value, onClick}) {
    return <div className="block" onClick={() => onClick(value)}>
        {value}
    </div>
}

function TicTacToe() {
    const [squares, setSquares] = useState(Array(9).fill(null))
    const [isXNext, setIsXNext] = useState(true)
    const [winner, setWinner] = useState("")

    const handleClick = function(i) {
        if(squares[i] || calculateWinners(squares)) return;
        // This creates a shallow copy of the squares array to avoid mutating the original state directly.
        let newSquare = squares.slice();
        newSquare[i] = isXNext ? "X" : "O"
        setSquares(newSquare)
        setIsXNext(!isXNext)
    }

    const calculateWinners = function(squares) {
        const winningLines = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,4,8],
            [2,4,6],
            [0,3,6],
            [1,4,7],
            [2,5,8]
        ]
        for(let [a,b,c] of winningLines){
            if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]){
               return setWinner(squares[a])
            }
        }
        return null;

    }
    const handleReset = function() {
        setSquares(Array(9).fill(null))
        setIsXNext(true)
        setWinner("")
    }

    return <div style={{
        display: "flex",
        flexDirection: "column"
    }}>
    <span>Winner: {winner}</span>
    <span>Next Turn : {isXNext ? "X" : "O"}</span>
    <button onClick={handleReset}>Reset</button>
    <div className="wrapper">
       {squares.map((d, i) => <Square value={d} key={i} onClick={() => handleClick(i)} />)}
    </div>
    </div>

}
export default TicTacToe;