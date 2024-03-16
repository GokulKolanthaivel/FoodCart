import { Link } from "react-router-dom";
import './Header.css'

export default function Header (){
    return(<>
         <nav>
                <ul>
                    <li id="home" ><Link  to={'/home'} > Home </Link></li>
                    <li id="setting" ><Link >Settings</Link></li>
                    <li id="cart" ><Link to={'/cart'} >Cart</Link></li>
                </ul>
            </nav>
    </>)
}