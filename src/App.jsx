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
import ProductDetails from './components/FunctionalResults/productDetails'

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

      // console.log(products)


      const handleDetails = (id) =>{
        // console.log(id)
        let productClicked = products.recipes.find(product => product.id === id)
        setProducts(productClicked)
      }


  return (
    <>
     <Router>

         <Header products={products} setProducts={setProducts} setSearch={setSearch}/>
    
        <Switch>
         {
          !search? (
             <Route>
                <Hero products={products} setProducts={setProducts} setSearch={setSearch}/>
                <NearByRestaurants error={error} products={products} func={handleDetails}/>
                <SearchByRest products={products} setProducts={setProducts} setSearch={setSearch}/>
                <OnYourMind product={products} handleDetails={handleDetails}/>
              </Route>
          ): (

            <Route>
              <SearchResults products={products}/>
            </Route>
          )
         }

         <Route>
            <ProductDetails product={products}/>
         </Route>

        </Switch>

        <Footer />
     </Router>
    </>
  )
}

export default App
