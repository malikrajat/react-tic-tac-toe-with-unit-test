import React, {useState} from 'react';

import SellColum from './sellColum';
// console.log('board-main');
let BoardSells = [[], [], []]
const Board = () => {
    // console.log('Board-inside');
    let [turn, setTurn] = useState('X');
    let [winner, setWinner] = useState('')

    const changeTurn = (col, row) => {
        BoardSells[row][col] = turn
        // console.log('change turn');
        setTurn(turn === 'X' ? 'O' : 'X')
        // console.log(BoardSells);
        checkForWind()
        
    }
    const checkForWind = () => {
        for(let i = 0; i< BoardSells.length; i++) {
            // row check
            let first = BoardSells[i][0];
            let second = BoardSells[i][1];
            let third = BoardSells[i][2];
            if (first === second && second === third && first !== undefined){
                setWinner(first)
                // console.log(first, second, third, 'colomn');
            }
            // colomn check
            let fifth = BoardSells[0][i];
            let sixth = BoardSells[1][i];
            let seven = BoardSells[2][i];
            if (fifth === sixth && sixth === seven & fifth !== undefined){
                setWinner(fifth)
                // console.log(fifth, sixth, seven, 'row');
            }    
        }
        // diagonal check first
        let firstDia = BoardSells[0][0];
        let secondDia = BoardSells[1][1];
        let thirdDia = BoardSells[2][2];
        if (firstDia === secondDia && secondDia === thirdDia & firstDia !== undefined){
            setWinner(firstDia)
            // console.log(firstDia, secondDia, thirdDia, 'dia');
        } 

        // diagonal check first
        let fifthDia = BoardSells[2][0];
        let sixthDia = BoardSells[1][1];
        let sevenDia = BoardSells[2][0];
        if (fifthDia === sixthDia && sixthDia === sevenDia & fifthDia !== undefined){
            setWinner(fifthDia)
            // console.log(fifthDia, sixthDia, sevenDia, 'dia');
        } 
    }
    return(
        <>
            <div>
                Winner is : {winner}
            </div>
            <div className="row">
                <SellColum row={0} col={0} turn={turn} setTurn={changeTurn}/>
                <SellColum row={0} col={1} turn={turn} setTurn={changeTurn}/>
                <SellColum row={0} col={2} turn={turn} setTurn={changeTurn}/>
            </div>

            <div className="row">
                <SellColum row={1} col={0} turn={turn} setTurn={changeTurn}/>
                <SellColum row={1} col={1} turn={turn} setTurn={changeTurn}/>
                <SellColum row={1} col={2} turn={turn} setTurn={changeTurn}/>
            </div>

            <div className="row">
                <SellColum row={2} col={0} turn={turn} setTurn={changeTurn}/>
                <SellColum row={2} col={1} turn={turn} setTurn={changeTurn}/>
                <SellColum row={2} col={2} turn={turn} setTurn={changeTurn}/>
            </div>
        </>
    )
}
export default Board;