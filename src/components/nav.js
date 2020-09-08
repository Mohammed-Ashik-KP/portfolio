import React ,{useContext, useState} from 'react';
import '../index.css'
import home from '../assets/icons/home.svg'
import about from '../assets/icons/about.svg'
import portfolio from '../assets/icons/portfolio.svg'
import contact from '../assets/icons/contact.svg'
import { Link } from 'react-router-dom';
import  { MenuContext }  from './context'

const Nav = (props) => {
    const{ menu , setMenu } = useContext(MenuContext);
    const [open,setOpen] = useState(false);

  const handleMenu =()=>{
        setOpen(!open)
  }
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
                    <li className={menu === "home" ? 'nav-items selected': 'nav-items'}  onClick={ ()=>{setMenu("home")}}><Link to="/" style={{"textDecoration":"none","color":"inherit"}}><img src={home} alt=""/>Home</Link></li>
                    <li className={menu === "about" ? 'nav-items selected': 'nav-items'}  onClick={ ()=>{setMenu("about")}}><Link to="/about" style={{"textDecoration":"none","color":"inherit"}}><img src={about} alt=""/>About</Link></li>
                    <li className={menu === "portfolio" ? 'nav-items selected': 'nav-items'} onClick={ (e)=>{setMenu("portfolio")}}><Link to="/portfolio" style={{"textDecoration":"none","color":"inherit"}}><img src={portfolio} alt=""/>Portfolio</Link></li>
                    <li className={menu === "contact" ? 'nav-items selected': 'nav-items'} onClick={ (e)=>{setMenu("contact")}}><Link to="/contact" style={{"textDecoration":"none","color":"inherit"}}><img src={contact} alt=""/>Contact</Link></li>
                   </div>
                </ul>
            </div>
            <div className="menu_icon-sm" onClick={handleMenu}>
                        <span className={open?'bar':''}></span>
                        <span className={open?'bar':''}></span>
                        <span className={open?'bar':''}></span>
            
            <div className={open ? 'nav-group-sm' : '.nav-group-sm-hidden'}>
                {open? (<ul>
                    <li className={menu === "home" ? 'nav-items selected': 'nav-items'}  onClick={ ()=>{setMenu("home")}}><Link to="/" style={{"textDecoration":"none","color":"inherit"}}><img src={home} alt=""/>Home</Link></li>
                    <li className={menu === "about" ? 'nav-items selected': 'nav-items'}  onClick={ ()=>{setMenu("about")}}><Link to="/about" style={{"textDecoration":"none","color":"inherit"}}><img src={about} alt=""/>About</Link></li>
                    <li className={menu === "portfolio" ? 'nav-items selected': 'nav-items'}  onClick={ ()=>{setMenu("portfolio")}}><Link to="/portfolio" style={{"textDecoration":"none","color":"inherit"}}><img src={portfolio} alt=""/>Portfolio</Link></li>
                    <li className={menu === "contact" ? 'nav-items selected': 'nav-items'}  onClick={ ()=>{setMenu("contact")}}><Link to="/contact" style={{"textDecoration":"none","color":"inherit"}}><img src={contact} alt=""/>Contact</Link></li>
                </ul>):''} 
            </div>
            </div>
        </React.Fragment>
     );
}
 
export default Nav;