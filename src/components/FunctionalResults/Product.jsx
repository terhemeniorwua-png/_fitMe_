import { FaRegHeart, FaSearch } from 'react-icons/fa';
import list from '/list.png'
import { FaStar } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';


const Product = ({img, name, product, setProducts, setSearch, rating, cuisine, caloriesPerServing, cookTimeMinutes, reviewCount}) => {


    const [input, setInput] = useState('')

    let navigate = useNavigate()



    const handelSearch = (e) =>{
        console.log(product)
        if(e.target){
         
       let itemsMatched= product && product.recipes.filter(item =>{
            let itemName = item.name.toLowerCase()
            let inpute = input.toLowerCase()

            return itemName.includes(inpute)
            // console.log(itemName.includes(input)) 
           
        })
// console.log(itemsMatched)
        setProducts({recipes: itemsMatched})
        setSearch(true)
        setInput('')
        navigate('/search')



    //  alert('Fetch failed!')
   
    }
    }



    return ( 
        <>
            <div className="grid lg:grid-cols-3 lg:gap-20 px-10 lg:px-44 items-center justify-center bg-black text-white max-md:mt-5 py-10">
                 <div>
                    <img src={img} alt={name} className="w-full"/>
                </div>
                 

                    <div className="max-md:py-5 space-y-10 md:space-y-5">
                        <h1 className="font-semibold text-2xl">{name}</h1>
                        <p>{cuisine}</p>




                    <div className="flex justify-center items-center gap-2">
                            <div className="border-l border-gray-300 h-10"></div>

                            <div className="flex flex-col text-[10px]">
                                <p className="flex items-center">
                                    <FaStar className="text-green-600"/>
                                    <span className="text-gray-300 font-medium">{rating} </span>
                                </p>
                                <p className="text-gray-300 font-medium">{caloriesPerServing}+ rating</p>
                            </div>

                            <div className="border-r border-gray-300 h-10"></div>
                   

                           
                            <div className="text-[10px]">
                                <p className="text-gray-300 font-medium">{cookTimeMinutes} mins</p>
                                <p className="text-gray-300 font-medium">Delivery Time</p>
                            </div>




                            <div className="flex justify-center items-center gap-2">
                                <div className="border-l border-gray-300 h-10"></div>
                                <div className="flex flex-col text-[10px]">
                                    <p className="flex items-center">
                                        <span className="text-gray-300 font-medium">${reviewCount} </span>
                                    </p>
                                    <p className="text-gray-300 font-medium">Cost for two</p>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="border border-dashed border-amber-600 p-5 rounded-2xl space-y-5">
                        <h2 className="text-amber-600">Offers</h2>
                        <p className='text-[10px] flex items-center'>
                            <img src={list} alt="icon" />
                            <span className='pl-2'>50% off up to ₹100 | Use code TRYNEW</span>
                        </p>
                         <p className='text-[10px] flex items-center'>
                            <img src={list} alt="icon" />
                            <span className='pl-2'>20% off | Use code PARTY</span>
                        </p>
                    </div>
            </div>

            {/* SEARCH + FAVOURITE */}

          <div className="z-10 flex translate-y-5 items-center gap-3 justify-center relative bottom-14">
            <div className="flex h-9.5 w-full max-w-75 items-center rounded-lg bg-white px-3 shadow-lg">
              <input
                type="text"
                value={input}
                onChange={(e)=>{setInput(e.target.value)}}
                placeholder="Search for dish"
                className="w-full bg-transparent px-1 text-[9px] text-gray-700 outline-none placeholder:text-gray-400"
              />

              <FaSearch size={13} className="shrink-0 text-gray-500" onClick={(e)=>{handelSearch(e)}}/>
            </div>

            <button
              className="
                flex
                h-9.5
                shrink-0
                items-center
                gap-2
                rounded-lg
                bg-white
                px-4
                text-[10px]
                text-gray-500
                shadow-lg
              "
            >
              <FaRegHeart size={12} onClick={(e)=>{
                e.currentTarget.classList.toggle('text-red-500')
              }}/>

              <span className="hidden sm:block">Favourite</span>
            </button>
          </div>

        </>
     );
}
 
export default Product;