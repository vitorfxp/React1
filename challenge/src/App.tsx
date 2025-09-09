import './App.css'
import Car from './Components/Car'

function App() {
    const myCars = [
      {name: "Fusca",km: 11000, color: "Branco"},
      {name: "t-cross",km: 34000, color: "Branco"},
      {name: "Camaro",km: 15000, color: "azul"},
      {name: "Onix",km: 10700, color: "cinza"},
    ]

  return (
    <div className='App'>
      <h1>Showroom estilizado</h1>
      <div className='car-container'>
        {myCars.map((car) => (
          <Car name={car.name} km={car.km} cor={car.color} newCar/>
        ))}
      </div>
    </div>
  )
}

export default App
