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
import SignUpPage from './components/SignIn/SignInPage'
import SignUp from './components/SignIn/SignUp'
import SecureCheckout from './components/FunctionalResults/SecureCheckout'
import Cart from './components/FunctionalResults/Cart'
import { Link } from "react-router-dom";
import Button from './components/Utilities/Button'

function App() {
  
  let navigate = useNavigate()
  
      let [loggedIn, setLoggedIn] = useState(false)
      let [error, setError] = useState(null)
      let [products, setProducts] = useState({ recipes: [] })
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


       let [cart, setCart]  = useState([])

        const handleCartDisplay = (e) =>{
          // console.log('clicked')
        document.getElementById('cart').classList.toggle('hidden')
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
              <SecureCheckout cartItems={cart}
              />}
              />
              
            <Route
            path='./'
            element={
                <SignUpPage setLoggedN={setLoggedIn}
                />

                
            }
            />
            
              <Route
            path='/signUp'
            element={

                <SignUp />
                
            }
          />
          </Routes>
        ):
          
       <div>
         <Header
        products={products}
        setProducts={setProducts}
        setSearch={setSearch}
        cart={cart}
        func={handleCartDisplay}
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
            <SearchResults 
            products={products} 
             func={handleDetails}
            />
            
          }
            
        />
        
  
      {/* {console.log(products)} */}

        <Route
          path="/product/:id"
          element={
            <ProductDetails
              product={selectedProduct}
              cart={cart}
              setCart={setCart}
              handleCartDisplay={handleCartDisplay}
            />

          }
        />

         <Route
          path='/checkout'
          element={
             <div>
                  <div className="px-5">
                
                    <h2 className="text-xl font-semibold md:px-16">Secure Checkout</h2>
                <hr />
                </div>

                <div className=" max-md:flex max-md:flex-col-reverse grid md:grid-cols-[2fr_1fr] gap-5 md:gap-36 px-5 lg:px-16 md:pt-5">
                  <div>
                    <SecureCheckout />
                  </div>
                  <div>
                    <Cart cart={cart}/>
                     <div>
                           <div className="flex justify-between pb-5 pr-2 pt-5">
                              <div className="space-y-2">
                               < p className="font-bold text-xl px-5">Total</p> 
                               </div>
                                 <p className="font-bold text-xl">${cart.reduce((total, item)   =>total += item.reviewCount, 0)}</p>
                            </div>



                        <Link>
                            <Button 
                            value='Proceed to payment'
                            path='/signUp'
                        />
                        </Link>
                    </div>
                     
                  </div>

             </div>
            
            </div>
          }
        />

        

      </Routes>


      <Footer />

      </div>

         }

        {console.log(products)}
    </>
  );
}

export default App;