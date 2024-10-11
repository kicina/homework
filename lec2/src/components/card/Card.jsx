import React from 'react'
import './Card.css'

export default function Card({ name, age, desc = 'no desc', bg}) {
  return (
    <div className='card' style={{background, bg}}>
    <h1>name: {name}</h1>
    <h1>age: {age}</h1>
    <p>{desc}</p>
  </div>
  )
}

