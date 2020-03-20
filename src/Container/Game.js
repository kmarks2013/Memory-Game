import React, { Component } from 'react'
import CardList from '../Components/CardList';
import Winner from '../Components/Winner'
import Timer from '../Components/Timer'

const shuffleArray = (array)=> {
  let i = array.length - 1;
  for (; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}

const imgs =[
  {id:1,url:'../images/apple.png', faceUp:false},
  {id:2 ,url:'../images/facebook.png', faceUp:false},
  {id:3,url:'../images/github.png',faceUp:false },
  {id:4 ,url:'../images/google.png', faceUp:false},
  {id:5,url:'../images/instagram.png',faceUp:false},
  {id:6 ,url:'../images/linkedin.png',faceUp:false},
  {id:7,url:'../images/medium.png',faceUp:false},
  {id:8 ,url:'../images/netflix.png',faceUp:false},
  {id:9,url:'../images/slack.png', faceUp:false},
  {id:10 ,url:'../images/snapchat.png',faceUp:false},
  {id:11,url:'../images/twitter.png',faceUp:false},
  {id:12 ,url:'../images/windows.png',faceUp:false}
];

let newObjects = [...imgs,...imgs]
const images= shuffleArray(newObjects)
// const images= newObjects

class Game extends Component {
 state = {
   gameStatus: "winner", // need to change this back to play
   moves: 0,
   timer: 0
 }

 start =
 setInterval(
     () => this.setState({ timer: this.state.timer + 1}),
       1000
 );

componentDidMount= () =>{
 if(this.state.gameStatus === "play"){
     return this.start
  }
}

componentDidUpdate= () => {
 if(this.state.gameStatus ==="winner"){
     clearInterval(this.start)
 }
}

 redirect = (page) => {
  if (this.state.gameStatus === 'winner'){
    this.setState({
        gameStatus: page,
        moves: 0,
        timer: 0
    })
  }
  else {
    this.setState({
      gameStatus: page
    })
  }
 }

 setMoves = () => {
    this.setState({
      moves : this.state.moves + 1
    })
 }

 renderGame = () => {
   switch (this.state.gameStatus){
    case "play":
      return <div className="cards">
          <CardList images={images} redirect={this.redirect} setMoves={ this.setMoves}  moves={this.state.moves}/>
        </div>
    case "winner":
      return <div >
          <Winner redirect={this.redirect} moves={this.state.moves} />
      </div>
   }
 }

 render() {   
  return(
   <div className="game">
         <Timer  gameStatus={this.state.gameStatus}/>
         {this.renderGame()}
   </div>
    )
   }
 }

export default Game