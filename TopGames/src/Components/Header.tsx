import { NavLink } from "react-router-dom"
import "./../assets/styles/header.css"
import Logo from "./../assets/images/logo2.svg"
const Header = () => {
    return (
        <>
            <header>
                <div className="container">

                    <nav>
                       <div className="logo">
                       <NavLink to="/"> <img src={Logo} alt="Logo" /></NavLink>
                       </div>
                       
                       

                        <ul>
                            <li>
                                <NavLink to="/">Hotel Casinos</NavLink>
                            </li>
                            <li>
                                <NavLink to="contactus">Contact Us</NavLink>
                            </li>
                            <li>
                                <NavLink to="aboutus">About Us</NavLink>
                            </li>
                        </ul>
                    </nav>
                </div>

            </header>
        </>
    )
}

export default Header