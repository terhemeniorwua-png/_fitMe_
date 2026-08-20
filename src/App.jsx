import { useState, useEffect } from 'react'
import './App.css'
import Header from './components/Header_Footer/Header'
import Footer from './components/Header_Footer/Footer'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import Hero from './components/Home/Hero'
import NearByRestaurants from './components/Home/Nearby -restaurants'
import SearchByRest from './components/Home/SearchByRes'
import OnYourMind from './components/Home/Taste'

function App() {
  
  
      let [error, setError] = useState(null)
      let [products, setProducts] = useState('')
  
  
      const FetchApi = async ()=>{
          try{
  
              let response = await fetch('https://dummyjson.com/recipes');
              // console.log(response)
              !response.ok && (new Error('Failed to fetch'))
              let data = await response.json()
              // console.log(data)
              setProducts(data)
  
          } catch(err){
              setError(err.message)
          }
      }
  
      useEffect(()=>{
          FetchApi()
      }, [])

  return (
    <>
     <Router>

         <Header />
    
        <Switch>
          <Route>
                <Hero />
                <NearByRestaurants error={error} products={products}/>
                <SearchByRest />
                <OnYourMind product={products}/>
          </Route>



        </Switch>

        <Footer />
     </Router>
    </>
  )
}

export default App
