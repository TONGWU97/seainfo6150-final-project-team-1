import React from 'react';
import style from './Footer.module.css'
const Footer = () => (
    <div>
        <div className={style.footer}>
            <a className={style.item} href='/about'>About</a>
            <a className={style.item} href='contact'>Contact</a>
        </div>
    </div>
);

export default Footer;