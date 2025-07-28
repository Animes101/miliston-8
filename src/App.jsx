
import './App.css'
import LineChart from './Components/LineChart'
import NavBar from './Components/NavBar'
import Phones from './Components/Phones'
import PricesOprion from './Components/PricesOprion'



function App() {

  return (
    <>
      <div>
        <NavBar />
        <PricesOprion />
        <LineChart />
        <Phones />
      </div>
    </>
  )
}

export default App
