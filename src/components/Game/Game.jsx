import React, {useState} from 'react'
import './Game.css'
import {Grid} from '../Grid/Grid'

const Game = () => {

  const [status, setStatus] = useState(false)
  const [moves, setMoves] = useState(0)

  const win = () => {
    setStatus(true)
  }

  const move = () => {
    setMoves(
      (oldMoves) =>  oldMoves + 1
    )
  }

  return(
    <form className = { status ? 'win' : 'game' }>
      <Grid move={move} win={win} />
      <p>Movements: {moves}</p>
    </form>
  )
  }

export { Game }