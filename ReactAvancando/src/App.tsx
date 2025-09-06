import { useState} from 'react'
import './App.css'
import City from './assets/city.jpg'
import CarDetails from './Components/CarDetails'
import CondiotionalRender from './Components/ConditionalRender'
import Container from './Components/Container'
import ExecuteFunction from './Components/ExecuteFunction'
import Fragment from './Components/Fragments'
import ListRender from './Components/ListRender'
import Manage from './Components/manage'
import Props from './Components/Props'
import Message from './Components/Message'
import ChangeM from './Components/ChangeMessage'
import UserDetails from './Components/UserDetails'

type msg = {
  msg: string;
}



function App() {

const cars = [
  {id: 1, name: "Onix", cor: "cinza", newCar: false, km: 500000},
  {id: 2, name: "Sandero", cor: "amarelo", newCar: false, km: 4300000},
  {id: 3, name: "t-cross", cor: "cinza", newCar: true, km: 0},
  {id: 4, name: "ford ka", cor: "azul", newCar: false, km: 4398560},
  {id: 5, name: "SW4", cor: "branco", newCar: true, km: 0},
]
function showMessage () {
  console.log("Evento componente pai")
}

const [message, setMessage] = useState("")

const handleMessage = ({msg} : msg) => {
  setMessage(msg);
}

return(
<div>
  <h1>ReactAvançando</h1>
  <img src="/img1.jpg" alt="Paisagem" />
  <img src={City} alt="cidade a noite" />
  <div>
    <Manage/>
    <ListRender/>
    <CondiotionalRender/>
    {/*props*/}
    <Props name = "Matheus"/>
    {/*Destruturação em car details, e reaproveitamento de componentes*/}
    <CarDetails name = "Porsche" km = {13000} cor="Azul" newCar={false}/>
    <CarDetails name = "Porsche" km = {0} cor="Vermelho" newCar={true}/>
    <CarDetails name = "Ferrari" km = {200000} cor="Verde"  newCar={false}/>
    {/*Loop em array de objetos*/}
    {cars.map((cars) => (
      <CarDetails key={cars.id} name={cars.name} km = {cars.km} cor ={cars.cor} newCar = {cars.newCar}/>
    ))}
    <Fragment propFragment={"teste"}/>
    <Container>
      <p>amburgue</p>
    </Container>
    <ExecuteFunction myFunction ={showMessage}/>
    <Message msg = {message}/>
    <ChangeM handleMessage={handleMessage}/>
    <UserDetails/>
  </div>
</div>
  
)
}

export default App
