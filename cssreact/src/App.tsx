import './App.css'
import MyComponent from './components/MyComponents'
import Tittle from './components/Tittle'

function App() {
  const n = 15
  const redTitle = true

  return (
    <div>
      <h1>Css + React</h1>
      <MyComponent/>
      <p>Este é o paragrafo do app.js</p>
      <p style ={{color: "blue", padding: "25px", borderTop: "2px solid red"}}>
        este elemento foi estilizado inline
      </p>
      <p style={n > 10 ? ({color: "purple"}) : ({color: "blue"})}>
        css inline dinamico
      </p>
      <h2 className={redTitle ? "red-tittle" : "tittle" }>Esse titulo vai ter classe dinamica</h2>
      <Tittle/>
    </div>
  )
}

export default App
