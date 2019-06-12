import React, { useState, useEffect } from 'react'
import Board from './components/board'
import Nav from './components/nav'

import initializeDeck from './deck'

export default function App() {
  const [cards, setCards] = useState([])
  const [flipped, setFlipped] = useState([])
  const [solved, setSolved] = useState([])
  const [dimension, setDimension] = useState(400)
  const [disabled, setDisabled] = useState(false)

  useEffect(() => {
    resizeBoard()
    setCards(initializeDeck())
  }, [])


  useEffect(() => {
    preloadImages()
  }, cards)

  useEffect(() => {
    const resizeListener = window.addEventListener('resize', resizeBoard)

    return () => window.removeEventListener('resize', resizeListener)
  })

  const preloadImages = () =>
    cards.map((card) => {
      const src = `/img/${card.type}.png`
      new Image().src = src
    })

  const resizeBoard = () => {
    setDimension(
      Math.min(
        document.documentElement.clientWidth,
        document.documentElement.clientHeight,
      ),
    )
  }

  const sameCardClickedTwice = (id) => flipped.includes(id)

  const isAMatch = (id) => {
    const clickedCard = cards.find((card) => card.id === id)
    const flippedCard = cards.find((card) => flipped[0] === card.id)
    return flippedCard.type === clickedCard.type
  }

  const resetCards = () => {
    setFlipped([])
    setDisabled(false)
  }

  const handleClick = (id) => {
    setDisabled(true)
    if (flipped.length === 0) {
      setFlipped((flipped) => [...flipped, id])
      setDisabled(false)
    } else {
      if (sameCardClickedTwice(flipped, id)) return
      setFlipped((flipped) => [...flipped, id])
      if (isAMatch(id)) {
        setSolved([...solved, ...flipped, id])
        resetCards()
      } else {
        setTimeout(resetCards, 2000)
      }
    }
  }

  return (
    <div>
      <Nav />

      <Board
        cards={cards}
        flipped={flipped}
        solved={solved}
        dimension={dimension}
        handleClick={handleClick}
        disabled={disabled}
      />
    </div>
  )
}