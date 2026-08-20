import banana from '/Banana.png'
import apple from '/Apple.png'
import food1 from '/src/assets/Food1.png'
import food2 from '/src/assets/Food2.png'
import bg from '/bg-graphics.png'
import { BiSearch } from 'react-icons/bi'
import { useState } from 'react'

const Hero = () => {

    const [inputValue, setInputValue] = useState('')
    return ( 
        <>


                <div className='grid grid-cols-2 py-20 pl-20'>

                    <div>

                    <h1 className='text-4xl font-semibold'>
                        <img src={bg} alt="" className='absolute top-36 left-0'/>

                        Premium <span className="text-[#FC8019]">quality</span> <span className='block'>Food for your <img src={banana} alt="banana" className="inline"/> <span className="text-[#FC8019]"> healthy</span> <img src={apple} alt="Apple" className="inline"/> & Daily Life</span>
                        </h1>

                        <p className='pr-20'>
                            <small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus itaque qui veritatis sunt provident culpa, inventore fuga maxime quae nisi pariatur, dicta beatae repellat magni saepe id nobis doloribus eaque?</small>
                        </p>

                             <div className='flex items-center gap-5 mt-5 pr-20'>
                                <div className='border rounded p-2 px-2 flex items-center w-[72%]'>
                                    <input
                                     type="search" 
                                     placeholder='Enter item or restaurant you are looking for' className='border-0 outline-0 text-[12px] w-[95%]'
                                     value={inputValue}
                                     onChange={(e)=>setInputValue(e.target.value)}
                                     />
            
                                </div>
                                <button className='bg-black text-white text-sm px-5 py-2 rounded'>Get Started</button>
                            
                             </div>
                             <p className='py-5'>
                                <small>Popular cities in India</small>
                             </p>

                             <ul className='flex items-center justify-between pr-36 text-sm'>
                                <li>Hyderabad</li>
                                <li className='text-[#FC8019]'>Chemical</li>
                                <li>Mumbai</li>
                                <li className='text-[#FC8019]'>Langalara</li>
                                <li>Delhi</li>
                                <li className='text-[#FC8019]'>Kalkata</li>
                             </ul>
                    </div>


{/* Images */}
                    <div className='flex items-center gap-10'>
                        <img src={food1} alt="Food" className='h-110'/>
                        <img src={food2} alt="Food" className='h-96'/>
                    </div>

                </div>

        </>
     );
}
 
export default Hero;