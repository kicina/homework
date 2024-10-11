import React from 'react'
import './Container.css'

export default function Container({ name, age, desc = 'no desc', bg, imgsrc}) {
  return (
    <div className='container' style={{backgroundColor: bg}}>
      <img src={imgsrc} alt="" width={150} />
    <h1>name: {name}</h1>
    <h1>age: {age}</h1>
    <p>{desc}</p>
  </div>
  )
}
