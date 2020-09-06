import React from 'react';
import '../index.css'
import home from '../assets/icons/home.svg'
import about from '../assets/icons/about.svg'
import portfolio from '../assets/icons/portfolio.svg'
import contact from '../assets/icons/contact.svg'
import { Link } from 'react-router-dom';
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
                    <div className="nav-group">
                    <li className="nav-items"><Link to="/" style={{"textDecoration":"none","color":"inherit"}}><img src={home} alt=""/>Home</Link></li>
                    <li className="nav-items"><Link to="/about" style={{"textDecoration":"none","color":"inherit"}}><img src={about} alt=""/>About</Link></li>
                    <li className="nav-items"><Link to="/portfolio" style={{"textDecoration":"none","color":"inherit"}}><img src={portfolio} alt=""/>Portfolio</Link></li>
                    <li className="nav-items"><Link to="/contact" style={{"textDecoration":"none","color":"inherit"}}><img src={contact} alt=""/>Contact</Link></li>
                   </div>
                </ul>
            </div>

        </React.Fragment>
     );
}
 
export default Nav;