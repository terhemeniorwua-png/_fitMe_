import { useState, useEffect } from 'react'
import './App.css'
import Header from './components/Header_Footer/Header'
import Footer from './components/Header_Footer/Footer'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import Hero from './components/Home/Hero'
import NearByRestaurants from './components/Home/Nearby -restaurants'
import SearchByRest from './components/Home/SearchByRes'
import OnYourMind from './components/Home/Taste'
import SearchResults from './components/FunctionalResults/SearchResult'

function App() {
  
  
      let [error, setError] = useState(null)
      let [products, setProducts] = useState('')

      let [search, setSearch] = useState(false)
  
  
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

         <Header products={products} setProducts={setProducts} setSearch={setSearch}/>
    
        <Switch>
         {
          !search? (
             <Route>
                <Hero products={products} setProducts={setProducts} setSearch={setSearch}/>
                <NearByRestaurants error={error} products={products}/>
                <SearchByRest products={products} setProducts={setProducts} setSearch={setSearch}/>
                <OnYourMind product={products}/>
              </Route>
          ): (

            <Route>
              <SearchResults products={products}/>
            </Route>
          )
         }



        </Switch>

        <Footer />
     </Router>
    </>
  )
}

export default App
