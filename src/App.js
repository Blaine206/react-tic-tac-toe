import React, { useState } from 'react';
import './App.css';

import Board from './components/Board';

const PLAYER_1 = 'X';
const PLAYER_2 = 'O';

const generateSquares = () => {
  const squares = [];

  let currentId = 0;

  for (let row = 0; row < 3; row += 1) {
    squares.push([]);
    for (let col = 0; col < 3; col += 1) {
      squares[row].push({
        id: currentId,
        value: '',
      });
      currentId += 1;
    }
  }

  return squares;
}

const App = () => {
  // This starts state off as a 2D array of JS objects with
  // empty value and unique ids.
  const [squares, setSquares] = useState(generateSquares());
  const [currentPlayer, setPlayer] = useState(PLAYER_1)
  // Player is a state (changes) - and is always getter/setter
  // const onClickCallback // figuring out how to make a new set of squares (soft copy) setSquares to a new square
  const updateSquare = updatedSquare => {
  // updatedSquare is the input
    const newSquares = []
    squares.forEach(row => {
      const newRow = []
      row.forEach(square => {
        if (square.id === updatedSquare.id){
          newRow.push({
            id : updatedSquare.id,
            value : currentPlayer
          })
        }else{
          newRow.push(square)
        }
          
        // If the square.id === updatedSquare.id
        // one of the players X/O thingys
        // setPlayer to opposite player
      })
      newSquares.push(newRow)
    })
    setSquares(newSquares)
    setPlayer(currentPlayer === PLAYER_2 ? PLAYER_1 : PLAYER_2)
    
    // we're tapped into the square

    // id : props.id
    // value : props.value
  }


  // Wave 2
  // You will need to create a method to change the square 
  //   When it is clicked on.
  //   Then pass it into the squares as a callback


  const checkForWinner = () => {
    // Complete in Wave 3
    // You will need to:
    // 1. Go accross each row to see if 
    //    3 squares in the same row match
    //    i.e. same value
    // 2. Go down each column to see if
    //    3 squares in each column match
    // 3. Go across each diagonal to see if 
    //    all three squares have the same value.

  }

  const resetGame = () => {
    // Complete in Wave 4
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Tic Tac Toe</h1>
        <h2>The winner is ... -- Fill in for wave 3 </h2>
        <button>Reset Game</button>
      </header>
      <main>
        <Board squares={squares} onClickCallback={updateSquare} />
      </main>
    </div>
  );
}

export default App;
