import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faBars, faX } from '@fortawesome/free-solid-svg-icons'
import logo from '../assets/myLogo.jpg'
import { useMediaQuery } from 'react-responsive';
import { useState } from 'react';
import Menu from './Menu';
import Nav from './Nav'

function Header() {
    const isLargeScreen = useMediaQuery({ query: '(min-width: 640px)' });
    const [clicked, setClicked] = useState(false)

    return (
        <header>
            <div className="container col-10">
                {!isLargeScreen &&
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                }
                <img src={logo} alt="logo" />
                {isLargeScreen && 
                    <div>
                        <Nav />
                        <ul>
                            <li>Contact Us</li>
                            <li>Career</li>
                            <span>|</span>
                            <li> <FontAwesomeIcon icon={faMagnifyingGlass} /> </li>
                        </ul>
                    </div>
                }
                {
                    !clicked && !isLargeScreen &&
                    <div className='icon' onClick={() => setClicked(!clicked)}>
                        <FontAwesomeIcon icon={faBars} />
                    </div>
                    
                }
                {
                    clicked && !isLargeScreen &&
                    <div className='icon' onClick={() => setClicked(!clicked)}>
                    <FontAwesomeIcon icon={faX} />
                    </div>
                }
            </div>
            {!isLargeScreen &&
                <Menu clicked={clicked}/>
            }
        </header>
    )
}

export default Header