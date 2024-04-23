import { NavLink } from "react-router-dom"
import Logo from "./../assets/images/logo2.svg"
import "./../assets/styles/footer.css"

const Footer = () => {
  return (
    <>
    <footer>
        <ul >
            <li>
                <img src={Logo} alt="" />
            </li>
        </ul>


        <ul className="secondlink">
            <li>
               <NavLink to="/">Contact Us</NavLink> 
            </li>
            <li>
               <NavLink to="/">About Us</NavLink> 
            </li>
            <li>
               <NavLink to="/">Terms & Conditions</NavLink> 
            </li>
        </ul>

        <span>2024 © All Rights Reserved</span>
    </footer>
    </>
  )
}

export default Footer