import { useState } from 'react';
import icon from '/Frame26.png'



const SearchByRest = ({products, setProducts, setSearch}) => {

    const [input, setInput] = useState('')


    const handelSearch = (e) =>{
        // console.log('Clicked')
        if(e.target){
        //  console.log('Clicked')
       let itemsMatched= products && products.recipes.filter(item =>{
            let itemName = item.name.toLowerCase()
            let inputValue = input.toLowerCase()

            return itemName.includes(inputValue) 
           
        })

        setProducts({reipes: itemsMatched})
        setSearch(true)
        setInput('')


    //  alert('Fetch failed!')
   
    }
    }

    return ( 
        <>
            <div className="bg-[#FC8019] py-10 mb-20 text-white flex items-center justify-center md:gap-5">
                <p className='flex items-center max-md:hidden'>
                    <b>Search by Restaurant </b>
                        <img src={icon} alt="icon"  className='ml-5'/>
                </p>
                <div className='flex items-center gap-5'>
                    
                    <div className='border rounded py-1 px-5'>
                        <input 
                        type="search"
                         name=""
                          id=""
                          placeholder='Enter item or restaurant you are looking for'
                          value={input}
                          onChange={(e)=>{setInput(e.target.value)}}
                            className='border-0 outline-0'
                          />
                    </div>

                    <button className='bg-black text-white text-sm px-5 py-1 rounded max-md:hidden'
                     onClick={(e)=>{handelSearch(e)}}
                    >Search Now</button>

                </div>
            </div>
        </>
     );
}
 
export default SearchByRest;