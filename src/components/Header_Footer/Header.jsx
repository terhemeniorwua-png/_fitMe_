import { BiSearch, BiShoppingBag } from 'react-icons/bi';
import logo from '/Logo.png'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Header = ({products, setProducts, setSearch, cart, func}) => {
    // console.log(cart)

    let navigate = useNavigate()

    const [inputValue, setInputValue] = useState('')

    const handelSearch = (e) =>{
        // console.log('Clicked')
        if(e.target){
        
            let itemsMatched = products && products.recipes.filter(item =>{
                let itemName = item.name.toLowerCase()
                let input = inputValue.toLowerCase()

                return itemName.includes(input)
            })

            setProducts({recipes: itemsMatched})
            setSearch(true)
            setInputValue('')
            navigate('/search')
        }
    }

    return ( 
        <>
            <header className='px-5 md:px-20 pt-4 md:pt-5'>

                {/* ================= MOBILE ================= */}
                <div className='md:hidden'>

                    {/* Top mobile navigation */}
                    <div className='flex items-center justify-between'>

                        {/* Logo */}
                        <div className='shrink-0'>
                            <img 
                                src={logo} 
                                alt="Logo" 
                                className='w-28 cursor-pointer'
                                onClick={()=>{
                                    navigate('/')
                                }}
                            />
                        </div>


                        {/* Mobile actions */}
                        <div className='flex items-center gap-5'>

                            {/* Search */}
                            <button
                                type="button"
                                className='text-2xl text-gray-700 hover:text-black transition'
                                onClick={(e)=>{
                                    e.currentTarget.classList.add('hidden')
                                    document.getElementById('search').classList.remove('hidden')
                                }}
                            >
                                <BiSearch />
                            </button>


                            {/* Cart */}
                            <div 
                                className='relative cursor-pointer'
                                onClick={(e)=>{func(e)}}
                            >
                                <BiShoppingBag className='text-2xl text-gray-700' />

                                <p className='bg-amber-600 text-[9px] min-w-4 h-4 px-1 absolute flex items-center justify-center rounded-full text-white -top-2 -right-2'>
                                    {cart.length}
                                </p>
                            </div>

                        </div>

                    </div>


                    {/* Mobile search */}
                    <div 
                        className='border border-gray-200 flex justify-between items-center rounded-xl p-2 px-3 items-center w-full mt-4 hidden shadow-sm'
                        id='search'
                    >

                        <input
                            type="search" 
                            placeholder='Search for food or restaurants'
                            className='border-0 outline-0 text-[12px] w-full bg-transparent'
                            value={inputValue}
                            onChange={(e)=>setInputValue(e.target.value)}
                        />

                        <BiSearch 
                            className='rotate-90 text-xl text-gray-500 cursor-pointer shrink-0' 
                            onClick={(e) =>{handelSearch(e)}}
                        />

                    </div>

                </div>


                {/* ================= DESKTOP ================= */}
                <div className='hidden md:grid grid-cols-2 items-center gap-10 mb-5'>

                    {/* Logo */}
                    <div>
                        <img 
                            src={logo} 
                            alt="Logo" 
                            className='cursor-pointer'
                            onClick={()=>{
                                navigate('/')
                            }}
                        />
                    </div>


                    {/* Desktop controls */}
                    <div className='flex items-center gap-5'>

                        {/* Search */}
                        <div className='border rounded p-1 px-2 flex items-center flex-1'>
                            <input
                                type="search" 
                                placeholder='Enter item or restaurant you are looking for' 
                                className='border-0 outline-0 text-[12px] w-[95%]'
                                value={inputValue}
                                onChange={(e)=>setInputValue(e.target.value)}
                            />

                            <BiSearch 
                                className='rotate-90 text-xl cursor-pointer' 
                                onClick={(e) =>{handelSearch(e)}}
                            />
                        </div>


                        {/* Cart */}
                        <div className="relative cursor-pointer" onClick={(e)=>{func(e)}}>
                            <BiShoppingBag className='text-2xl'/>
                            
                            <p className='bg-amber-600 text-[10px] absolute text-center rounded-full p-1 text-white bottom-3 left-3'>
                                {cart.length}
                            </p>
                        </div>


                        {/* Sign in */}
                        <button 
                            className='bg-black text-white text-sm px-5 py-2 rounded'
                            
                        >
                            Signin
                        </button>

                    </div>

                </div>

            </header>
        </>
    );
}

export default Header;