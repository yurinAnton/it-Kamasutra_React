import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";


const Header = (props) => {
    return (<header className={s.header}>

        <div className={s.header_Logo}>
            <img src="https://png.pngtree.com/element_pic/16/11/02/bd886d7ccc6f8dd8db17e841233c9656.jpg" />
            <span>SOCIAL NETWORK</span>
        </div>

        <div className={s.loginBlock}>
            {props.isAuth ? props.login
                : <NavLink to={'/login'}> Login </NavLink>
            }
        </div>

         </header>
    )
}

export default Header;