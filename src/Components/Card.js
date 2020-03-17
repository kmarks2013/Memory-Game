import React, { Component } from 'react'
import CardFront from './CardFront'
import CardBack from './CardBack'

export default class Card extends Component {

    state = {
        cardFaceUp: false
    }
   
    flipOneCard = (img) => {
        this.setState({
            cardFaceUp: true
        })
        this.props.choosenCards(img)
    }
   
    reverseCard = () => {
        setTimeout(()=> {
            this.setState({
                cardFaceUp: false
            })
        }, 500)
    }

    render() {
       const {img} = this.props
        return (
            <>
            {this.state.cardFaceUp || img.faceUp ?  
            <CardFront img={img} reverseCard={this.reverseCard}/>
             : 
            <CardBack img={img} flipOneCard={this.flipOneCard}/> }
            </>
        )
    }
}



