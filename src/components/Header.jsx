import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faBars } from '@fortawesome/free-solid-svg-icons'
import logo from '../assets/myLogo.jpg'
import { useMediaQuery } from 'react-responsive';


function Header() {
    const isLargeScreen = useMediaQuery({ query: '(min-width: 640px)' });

    return (
        <header>
            <div className="container col-10">
                {!isLargeScreen &&
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                }
                <img src={logo} alt="logo" />
                {isLargeScreen && 
                    <div>
                        <ul className="chosen">
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
                            <li>Career</li>
                            <span>|</span>
                            <li> <FontAwesomeIcon icon={faMagnifyingGlass} /> </li>
                        </ul>
                    </div>
                }
                {!isLargeScreen &&
                    <FontAwesomeIcon icon={faBars} />
                }
            </div>
        </header>
    )
}

export default Header