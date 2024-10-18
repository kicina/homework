import React from 'react'
import './Card.css'

export default function Card({ title, imgsrc, desc = 'no desc'}) {
  return (
    <div className='card'>
    <img src={imgsrc} alt="" width={150} />
    <h1>{title}</h1>
    <p>{desc}</p>
  </div>
  )
}
