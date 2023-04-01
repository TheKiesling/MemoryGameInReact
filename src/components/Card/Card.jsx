import React from 'react'
import './Card.css'

const Card = ({ id, img, show, flipCard }) => (
    <li key = {id} onClick={() => show && flipCard(id)} className = { show ? 'show' : 'hide' }>
      <img src= {img}></img>
    </li>
  )

export { Card }