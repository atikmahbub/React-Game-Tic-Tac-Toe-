import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

      constructor(){
        super();
        this.state = {
          turn: 'X',
          gameEnded: false,
          winner : undefined,
          winnerline:undefined,
          board: Array(9).fill(''),
          totalMoves : 0
        }

      }


      clicked(event){
        if(this.state.gameEnded == true) return;
        if( this.state.board[event.target.dataset.square] === ''){
        this.state.board[event.target.dataset.square] = this.state.turn;
        event.target.innerText = this.state.turn;
        this.setState({
          turn: this.state.turn === 'X' ? 'O' :'X',
          totalMoves: this.state.totalMoves+1
        })
       
      }

      var result = this.checkWinner();

      if(result === 'X'){
       
        this.setState({
          gameEnded:true,
          winner: 'X',
          winnerline: 'Match Won By X',
        })
      }else if(result === 'O'){
       
          this.setState({
          gameEnded:true,
          winner: 'O',
          winnerline: 'Match Won By O'
        })
      }else if(result === 'draw'){
       
          this.setState({
          gameEnded:true,
          winner: null,
          winnerline: 'Match Is Drawn'
        })
      }

      }

      checkWinner(){
        var moves = [[0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,5,8],[2,4,6],[3,4,5],[6,7,8]];  
        var board = this.state.board;
        for(let i=0;i <moves.length ; i++){
          if(board[moves[i][0]] === board[moves[i][1]] && board[moves[i][1]] === board[moves[i][2]] ){
            return board[moves[i][0]];
          }

          if(this.state.totalMoves == 8){
            return 'draw';
        }
        }
      }

  reset(){

       const newBoard = this.state.board = Array(9).fill('');
      this.setState({
          board:newBoard,
          turn: 'X',
          gameEnded: false,
          winner : undefined,
          winnerline:undefined,
          totalMoves : 0

      });

  }

  render() {
    return (
      <div id="game">
      <div id="head">
        <h1>Tic Tac Toe Game</h1>
      </div>
      <div id="status"><strong> {this.state.winnerline}</strong></div>
      <div id="board" onClick={(e)=>this.clicked(e)}>
            <div className= "square"  data-square= "0">{this.state.board[0]}</div>
            <div className= "square"  data-square= "1">{this.state.board[1]}</div>
            <div className= "square"  data-square= "2">{this.state.board[2]}</div>
            <div className= "square"  data-square= "3">{this.state.board[3]}</div>
            <div className= "square"  data-square= "4">{this.state.board[4]}</div>
            <div className= "square"  data-square= "5">{this.state.board[5]}</div>
            <div className= "square"  data-square= "6">{this.state.board[6]}</div>
            <div className= "square"  data-square= "7">{this.state.board[7]}</div>
            <div className= "square"  data-square= "8">{this.state.board[8]}</div>
      </div>
      <div id="foot"><button className="button" onClick={()=>this.reset()}>Reset</button></div>
      </div>
    );
  }
}

export default App;
