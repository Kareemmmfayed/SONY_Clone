import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import logo from '../assets/myLogo.jpg'

function Header() {
    return (
        <header>
            <div className="container">
                <img src={logo} alt="logo" />
                <div>
                    <ul>
                        <li>Home</li>
                        <li>Businesses & Products</li>
                        <li>About Sony Group</li>
                        <li>Technology</li>
                        <li>Employees</li>
                        <li>Sustainability</li>
                        <li>Design</li>
                        <li>Investor Relations</li>
                    </ul>
                    <ul>
                        <li>Contact Us</li>
                        <li>Career | </li>
                        <li> <FontAwesomeIcon icon={faMagnifyingGlass} /> </li>
                    </ul>
                </div>
            </div>
        </header>
    )
}

export default Header