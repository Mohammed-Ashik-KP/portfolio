import React, { useState } from 'react';

export const MenuContext = React.createContext();

const MenuProvider = (props)=>{
    const  [menu,setMenu] = useState('home');
return(
    <MenuContext.Provider value={{menu , setMenu}}>
    {props.children}
    </MenuContext.Provider>)
}
export default MenuProvider;