import './App.css'
import City from './assets/city.jpg'
import CarDetais from './hooks/CarDetails'
import CondiotionalRender from './hooks/ConditionalRender'
import ListRender from './hooks/ListRender'
import Manage from './hooks/manage'
import Props from './hooks/Props'

function App() {
return(
<div>
  <h1>ReactAvançando</h1>
  <img src="/img1.jpg" alt="Paisagem" />
  <img src={City} alt="cidade a noite" />
  <div>
    <Manage/>
    <ListRender/>
    <CondiotionalRender/>
    <Props name = "Matheus"/>
    <CarDetais name = "Porsche" km = {13000} cor="Azul"/>
  </div>
</div>
  
)
}

export default App
