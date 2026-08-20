import { BiLock, BiSearch } from 'react-icons/bi';
import logo from '/Logo.png'
import { useState } from 'react';

const Header = () => {

    const [inputValue, setInputValue] = useState('')


    return ( 
        <>
            <div className='grid grid-cols-2 pl-5 md:px-20 pt-5'>
        {/* logo */}

                <div>
                    <img src={logo} alt="Logo" />
                </div>

{/* search bar */}


{/* Mobile */}
        <div>

             <div className='relative md:hidden'>
                <BiSearch className='absolute -right-24 md:hidden rotate-90 text-4xl'/>
             </div>

            <div className='border rounded p-1 px-2 flex items-center w-[90%] hidden'>
                        <input
                         type="search" 
                         placeholder='Enter item or restaurant you are looking for' className='border-0 outline-0 text-[12px] w-[95%] '
                         value={inputValue}
                         onChange={(e)=>setInputValue(e.target.value)}
                         />

                        <BiSearch className='rotate-90 text-xl'/>
                    </div>


        {/* Desktop */}
                <div className='flex items-center gap-5 max-md:hidden pl-20'>
                    <div className='border rounded p-1 px-2 flex items-center w-[90%]'>
                        <input
                         type="search" 
                         placeholder='Enter item or restaurant you are looking for' className='border-0 outline-0 text-[12px] w-[95%]'
                         value={inputValue}
                         onChange={(e)=>setInputValue(e.target.value)}
                         />

                        <BiSearch className='rotate-90 text-xl'/>
                    </div>
                    <div>
                        <BiLock className='text-2xl'/>
                    </div>
                    <button className='bg-black text-white text-sm px-5 py-1 rounded'>Search</button>
                </div>
                 </div>
            </div>
        </>
     );
}
 
export default Header;