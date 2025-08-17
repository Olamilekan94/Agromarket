import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Components/Home/Home'
import Weather from './Components/Weather/Weather'
import Crops from './Components/Crops/Crops'
import Prices from './Components/Prices/Prices'
import About from './Components/About/About'



const App = () => {
  return (
    <>
    <Router>
      <Routes>
         <Route path='/' element={<Home />} />
         <Route path='/weather' element={<Weather />} />
         <Route path='/crops' element={<Crops />} />
         <Route path='/prices' element={<Prices />} />
         <Route path='/about' element={<About />} />


      </Routes>
    </Router>
   </>
  )
}

export default App;