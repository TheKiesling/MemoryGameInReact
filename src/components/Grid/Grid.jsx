import React, {useState, useEffect} from 'react'
import { Card } from '../Card/Card'
import './Grid.css'

const Grid = ({move, win}) => {

    const imgCards = [
      "/Bulbasaur.png",
      "/Charizard.png",
      "/Ditto.png",
      "/Eevee.png",
      "/Lucario.png",
      "/Pikachu.png",
      "/Snorlax.png",
      "/Squirtle.png"
    ]

    const [cards, setCards] = useState([])
    const [flippedCards, setFlippedCards] = useState([])

    const generateCards = () => {
      const cardImgs = [...imgCards, ...imgCards]
      const suffledImgs = cardImgs.sort(() => Math.random() - 0.5)
      const newCards = suffledImgs.map((img) => ({
        id: Math.random(),
        img,
        show: true
      }))
      setCards(newCards)
    }

    const flipCard = (id) => {
        if (flippedCards.length === 2) {
          return
        }
    
        const newFlippedCards = [...flippedCards, id]
        setFlippedCards(newFlippedCards)

        setCards((oldCards) => {
          const flippedCard = [...oldCards];
          const index = flippedCard.findIndex((card) => id === card.id)
          flippedCard[index].show = false
    
          if (newFlippedCards.length === 2) {
            setTimeout(() => {
              const [card1, card2] = newFlippedCards;
              const index1 = flippedCard.findIndex((card) => card1 === card.id)
              const index2 = flippedCard.findIndex((card) => card2 === card.id)
    
              if (flippedCard[index1].img === flippedCard[index2].img) {
                flippedCard[index1].show = false
                flippedCard[index2].show = false

                if (flippedCard.filter((card) => card.show === true).length === 0) 
                  win()

              } else {
                flippedCard[index1].show = true
                flippedCard[index2].show = true
              }

              move()
    
              setFlippedCards([])
              setCards(flippedCard)
            }, 1000)
          }
    
          return flippedCard
        })
      }

    useEffect(() => {
        generateCards()
    }, [])

    return( 
    <ul className="grid">
        {cards.map((card) => <Card {...card} flipCard = {flipCard}/>)}        
    </ul>)
}

export { Grid }