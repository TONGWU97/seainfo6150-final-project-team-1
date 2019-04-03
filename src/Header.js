import React from 'react';
import style from './Header.module.css';
import {Link} from 'react-router-dom';
const Header = () => (  
    <div className={style.header}>
        <Link className={style.item} to='/'> Home </Link>
        <Link className={style.item} to='/products'> Products </Link>
        <Link className={style.item} to='/about'> About </Link>
        <Link className={style.item} to='/contact'> Contact </Link>
    </div>
   
);

export default Header;