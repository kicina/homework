import { useState } from 'react'
import { cards } from './data.js'
import './App.css'
import Card from './components/card/Card'

function App() {

  const [count, setcount1] = useState(0)

  const [className, setclassName] = useState('black')

  const handleshow = () => {
    if(className === 'black'){
      setclassName('white')
      document.body.style.background = "white"
    }else{
      setclassName('black')
      document.body.style.background = "black"
    }
  }

  

  return (
    <div className={className}>
      {cards.map(el => (
      <Card imgsrc={el.src} key={el.id} title={el.title} desc={el.desc} />
      ))}

    <h1>{count} count</h1>

       <button onClick={() => {
         setcount1(count + 1)

         console.log(count, 'count')
       }} >
         increment
       </button>

              <button onClick={() => {
         setcount1(count - 1)

         console.log(count, 'count')
       }} >
         decrement
       </button> 

       <br />
       <br />

<button onClick={handleshow}>dark/light</button> 
   </div> 
  )
}


export default App
