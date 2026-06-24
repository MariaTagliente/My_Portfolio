import { RouterProvider } from 'react-router'
import './App.css'
import Navbar from './Components/Navbar'
import Homepage from './Components/Homepage'
import Hero from './Components/HeroComponents/Hero'

function App() {

  return (
    <>
      <div className="min-h-screen bg-(--violetMedium)">
        <Navbar/>
        <Hero/>
        <Homepage/>
      </div>
    </>
  )
}

export default App
