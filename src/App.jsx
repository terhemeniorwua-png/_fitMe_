import { useState, useEffect } from 'react'
import './App.css'
import Header from './components/Header_Footer/Header'
import Footer from './components/Header_Footer/Footer'
import { Route, Routes, useNavigate } from 'react-router-dom'
import Hero from './components/Home/Hero'
import NearByRestaurants from './components/Home/Nearby -restaurants'
import SearchByRest from './components/Home/SearchByRes'
import OnYourMind from './components/Home/Taste'
import SearchResults from './components/FunctionalResults/SearchResult'
import ProductDetails from './components/FunctionalResults/productDetails'
import SignIn from './components/SignIn/SignIn'

function App() {
  
  let navigate = useNavigate()
  
      let [loggedIn, setLoggedIn] = useState(false)
      let [error, setError] = useState(null)
      let [products, setProducts] = useState('')
      let [search, setSearch] = useState(false)
      let [selectedProduct, setSelectedProduct] = useState(null)
  
  
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
        setSelectedProduct(productClicked)
       navigate(`/product/${id}`)
      }


  return (
    <>
        {
          loggedIn? 
          (
            <Routes>
              
            <Route
            path='/'
            element={
                <SignIn setLoggedIn={setLoggedIn}/>
            }
          />
          </Routes>
        ):
          
       <div>
         <Header
        products={products}
        setProducts={setProducts}
        setSearch={setSearch}
      />

      <Routes>

        <Route
          path="/"
          element={
            <>
              <Hero
                products={products}
                setProducts={setProducts}
                setSearch={setSearch}
              />

              <NearByRestaurants
                error={error}
                products={products}
                func={handleDetails}
              />

              <SearchByRest
                products={products}
                setProducts={setProducts}
                setSearch={setSearch}
              />

              <OnYourMind
                product={products}
                handleDetails={handleDetails}
              />
            </>
          }
        />

        <Route
          path="/search"
          element={
            <SearchResults products={products} />
          }
        />

        <Route
          path="/product/:id"
          element={
            <ProductDetails
              product={selectedProduct}
            />
          }
        />

      </Routes>


      <Footer />

      </div>

         }
    </>
  );
}

export default App;