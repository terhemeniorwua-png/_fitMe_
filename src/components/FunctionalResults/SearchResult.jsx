
const SearchResults = ({products}) => {
    // console.log(products)

    let display = `"${products}"`
    return ( 
        <>
            <div>
                <h1>Search results for {display}</h1>

                <div className="flex items-center gap-10 text-sm ">
                    <button className="bg-[#FC8019] rounded-3xl text-white ">Dishes</button>
                    <button className="border border-[#FC8019] rounded-3xl">Restaurant</button>
                </div>


            </div>
        </>
     );
}
 
export default SearchResults;