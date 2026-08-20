import { useState } from 'react'
import './App.css'
import Header from './components/Header_Footer/Header'
import Footer from './components/Header_Footer/Footer'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import Hero from './components/Home/Hero'
import NearByRestaurants from './components/Home/Nearby -restaurants'
import SearchByRest from './components/Home/SearchByRes'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Router>

         <Header />
    
        <Switch>
          <Route>
                <Hero />
                <NearByRestaurants URL='https://dummyjson.com/recipes'/>
                <SearchByRest />
          </Route>



        </Switch>

        <Footer />
     </Router>
    </>
  )
}

export default App
