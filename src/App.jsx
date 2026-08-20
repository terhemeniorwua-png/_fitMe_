import { useState } from 'react'
import './App.css'
import Header from './components/Header_Footer/Header'
import Footer from './components/Header_Footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Header />
    <Footer />
    </>
  )
}

export default App
