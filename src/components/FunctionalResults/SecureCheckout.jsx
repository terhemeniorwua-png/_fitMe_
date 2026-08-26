
import Address from "./AddressGuide";


const SecureCheckout = ({
    time,
setTime,
days,
setDays,
date,
setDate,
active,
setActive
}) => {

    // console.log(cartItems)


    return ( 

        <>
          

               

                    <Address 
                    
                        time = {time }
                        setTime = {setTime}
                        days = {days}
                        setDays = {setDays}
                        date = {date}
                        setDate = {setDate}
                        active={active}
                        setActive={setActive}
                    />


                   
            
               
                
        {/* </div> */}
        </>
     );
}
 
export default SecureCheckout;