import './App.css'
import Navbar from './Components/Navbar'
import Hero from './Components/HeroComponents/Hero'
import Main from './Components/Main'

function App() {

  return (
    <>
      <div className="min-h-screen bg-(--violetMedium)">
        <Navbar/>
        <Hero/>
        <Main/>
      </div>
    </>
  )
}

export default App
