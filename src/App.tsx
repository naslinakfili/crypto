import './App.css'
import{ Routes, Route } from 'react-router-dom'
import Dashboard01 from "./dashboard"
import Utama from "./utama"
import Portofolio from "./portofolio"
import Leverage from "./leverage"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard01 />} />
        <Route path="/Utama" element={<Utama />} />
        <Route path="/Portofolio" element={<Portofolio />} />
        <Route path="/Leverage" element={<Leverage />} />
      </Routes>
    </>
  )
}

export default App
