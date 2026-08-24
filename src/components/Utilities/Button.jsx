

const Button = ({value, fuctionality}) => {
    return ( 
        <>
        
            <button
            onClick={fuctionality}
            className="py-3 w-full text-white rounded-3xl font-bold bg-amber-600 hover:cursor-pointer"
            >{value}</button>
        </>
     );
}
 
export default Button;