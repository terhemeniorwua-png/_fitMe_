import { BiLogoFacebook, BiLogoInstagram, BiLogoTwitter } from 'react-icons/bi';
import logo from '/Footer-Logo.png'
import { FaTwitter } from 'react-icons/fa';
// import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const Footer = () => {
    return ( 
        <>
            <footer className="bg-[#FC8019] text-white py-20 space-y-5 pl-5">
                <div className='md:flex items-center justify-around'>
                    <img src={logo} alt="logo" />

                    <nav>
                        <ul className='max-md:pt-10 md:flex max-md:space-y-3 items-center gap-5 font-bold'>
                            <li>About us</li>
                            <li>Delivery</li>
                            <li>Help & Support</li>
                            <li>T&C</li>
                        </ul>
                    </nav>
                    <p className='text-sm'>Contact <b><a href="https://wa.me/09166354571">+2349166354571</a></b></p>
                </div>

                <p className='text-2xl flex justify-center items-center gap-5'>
                    <a href="https://web.facebook.com/philip.iorwua.9"><BiLogoFacebook /></a>
                     <a href="https://www.instagram.com/?hl=en"><BiLogoInstagram /></a>
                   <a href='https://x.com/PIorwua12080'><FaTwitter /></a>
                    
                </p>
            </footer>
        </>
     );
}
 
export default Footer;