import banana from '/Banana.png'
import apple from '/Apple.png'
import food1 from '/src/assets/Food1.png'
import food2 from '/src/assets/Food2.png'
import bg from '/bg-graphics.png'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'



const Hero = ({products, setProducts, setSearch}) => {

    let navigate = useNavigate()

    const [inputValue, setInputValue] = useState('')


    const handelSearch = (e) =>{
        // console.log('Clicked')
        if(e.target){
         
       let itemsMatched= products && products.recipes.filter(item =>{
            let itemName = item.name.toLowerCase()
            let input = inputValue.toLowerCase()

            return itemName.includes(input)
            // console.log(itemName.includes(input)) 
           
        })
// console.log(itemsMatched)
        setProducts({reipes: itemsMatched})
        setSearch(true)
        setInputValue('')
        navigate('/search')


    //  alert('Fetch failed!')
   
    }
    }
    return ( 
        <>


                <div className='max-md:text-center grid md:grid-cols-2 py-20 md:pl-20'>
{/* Hero */}
                    <div>

                    <h1 className='text-5xl max-md:w-[90%] max-md:m-auto max-md:leading-16 md:text-4xl font-semibold'>
                        <img src={bg} alt="" className='absolute top-36 left-0'/>

                        Premium <span className="text-[#FC8019]">quality</span> <span className='md:block'>Food for your <img src={banana} alt="banana" className="inline"/> <span className="text-[#FC8019]"> healthy</span> <img src={apple} alt="Apple" className="inline"/> & Daily Life</span>
                        </h1>

                        <p className='md:pr-20 max-md:text-xl max-md:pt-10 max-md:px-5'>
                            <small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus itaque qui veritatis sunt provident culpa, inventore fuga maxime quae nisi pariatur, dicta beatae repellat magni saepe id nobis doloribus eaque?</small>
                        </p>
{/* Input search */}
                             <div className='md:flex items-center gap-5 mt-5 md:pr-20 max-md:mx-5'>
                                <div className='border rounded p-2 px-2 flex items-center md:w-[72%]'>
                                    <input
                                     type="search" 
                                     placeholder='Enter item or restaurant you are looking for' className='border-0 outline-0 text-[12px] w-[95%]'
                                     value={inputValue}
                                     onChange={(e)=>setInputValue(e.target.value)}
                                     />
            
                                </div>
                                <button className='bg-black text-white text-sm px-5 py-2 max-md:mt-3 rounded'
                                onClick={(e)=>{handelSearch(e)}}
                                >Get Started</button>
                            
                             </div>

        {/* popular cities */}
                             <p className='py-5'>
                                <small>Popular cities in India</small>
                             </p>

                             <ul className='flex items-center justify-between max-md:px-5 text-[10px] md:pr-36  md:text-sm'>
                                <li>Hyderabad</li>
                                <li className='text-[#FC8019]'>Chemical</li>
                                <li>Mumbai</li>
                                <li className='text-[#FC8019]'>Langalara</li>
                                <li>Delhi</li>
                                <li className='text-[#FC8019]'>Kalkata</li>
                             </ul>
                    </div>


{/* Images */}
                    <div className='flex max-md:mt-20 max-md:flex-col items-center md:gap-10'>
                       <div className='overflow-hidden'> <img src={food1} alt="Food" className='max-md:w-full h-110 m-auto img-hovered'/></div>
                        <div className='overflow-hidden'><img src={food2} alt="Food" className='max-md:hidden h-96 img-hovered'/></div>
                    </div>

                </div>

        </>
     );
}
 
export default Hero;