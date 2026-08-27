

const Button = ({value, fuctionality, disable}) => {
    return ( 
        <>
        
            <button
            onClick={fuctionality}
            className="py-3 w-full text-white rounded-lg font-bold bg-amber-600 hover:cursor-pointer"
            >{value}</button>
        </>
     );
}
 
export default Button;