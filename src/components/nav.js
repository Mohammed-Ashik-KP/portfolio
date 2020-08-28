import React from 'react';
import '../index.css'
import home from '../assets/icons/home.svg'
import about from '../assets/icons/about.svg'
import portfolio from '../assets/icons/portfolio.svg'
import contact from '../assets/icons/contact.svg'
const Nav = () => {
    return ( 
        <React.Fragment>

            <div className="nav_menu">
                <ul>
                    <div className="menu_icon">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <li className="nav-items"><img src={home} alt=""/>Home</li>
                    <li className="nav-items"><img src={about} alt=""/>About</li>
                    <li className="nav-items"><img src={portfolio} alt=""/>Portfolio</li>
                    <li className="nav-items"><img src={contact} alt=""/>Contact</li>
                </ul>
            </div>

        </React.Fragment>
     );
}
 
export default Nav;