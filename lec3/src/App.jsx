import './App.css'

function App() {

const handleclick = () => {
  console.log('clicked')
  
}

const circlehover = () => {
    alert('giorgi chomakhidze nerdia')
  
}
  return (
    <div>
      <h1>hello world</h1>
      <div className='circle' onMouseOver={circlehover}></div>
      <button className='button' onClick={handleclick} >click me</button>
    </div>
  )
}

export default App
