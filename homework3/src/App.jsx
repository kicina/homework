import './App.css'
import Container from './components/container/Container.jsx'
import { cards } from './data.js'

function App() {

  return (
    <div>
      <h1>FAMOUS PEOPLE</h1>
      {cards.map(el => (
        <Container imgsrc={el.src} key={el.id} age={el.age} name={el.name} desc={el.desc} bg={el.bg} />
      ))}
      </div>
  )
}

export default App
