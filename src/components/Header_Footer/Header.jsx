    import { BiLock, BiSearch } from 'react-icons/bi';
    import logo from '/Logo.png'
    import { useState } from 'react';
    import { useNavigate } from 'react-router-dom';

    const Header = ({products, setProducts, setSearch}) => {
        // console.log(products)

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
            setProducts({recipes: itemsMatched})
            setSearch(true)
            setInputValue('')
            navigate('/search')


        //  alert('Fetch failed!')
    
        }
        }
        return ( 
            <>
                <div className='grid grid-cols-2 pl-5 md:px-20 pt-5'>
            {/* logo */}

                    <div>
                        <img src={logo} alt="Logo" onClick={()=>{
                            navigate('/')
                        }}/>
                    </div>

    {/* search bar */}


    {/* Mobile */}
            <div>

                <div className='relative md:hidden'>
                    <BiSearch className='absolute right-5 md:hidden rotate-90 text-4xl' onClick={(e)=>{
                        e.currentTarget.classList.add('hidden')
                        document.getElementById('search').classList.remove('hidden')
                    }}/>
                </div>

                <div className='border rounded p-1 px-2 flex items-center w-[90%] hidden' id='search'>
                            <input
                            type="search" 
                            placeholder='Enter item or restaurant you are looking for' className='border-0 outline-0 text-[12px] w-[95%] '
                            value={inputValue}
                            onChange={(e)=>setInputValue(e.target.value)}
                            />

                            <BiSearch className='rotate-90 text-xl' onClick={(e) =>{handelSearch(e)}}/>
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

                            <BiSearch className='rotate-90 text-xl' onClick={(e) =>{handelSearch(e)}}/>


                        </div>
                        <div>
                            <BiLock className='text-2xl'/>
                        </div>
                        <button className='bg-black text-white text-sm px-5 py-1 rounded' onClick={(e) =>{handelSearch(e)}}>Search</button>
                    </div>
                    </div>
                </div>
            </>
        );
    }
    
    export default Header;