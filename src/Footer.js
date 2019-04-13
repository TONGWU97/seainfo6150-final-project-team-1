import React from 'react';
import style from './Footer.module.css'
const Footer = () => (
    <div>
        <div className={style.footer}>
            <div className={style.copyRight}>©2019, Team 1 (Wenhui Liu, Yuwei Chang, Tong Wu, Yue Xiao)</div>
            <ul className={style.list}>
                <li><a className={style.item} href='contact'>Contact</a></li>
                <span></span>
                <li>Email:contact@vechicledealer.com</li>
                <li>Phone:(206)382-4327</li>
                <li>401 Terry Street, Seattle, WA 98109</li>
            </ul>
        </div>
    </div>
);

export default Footer;
/*change the footer to show contact information and add a buutton for returnning to the top
    Order shipping address 和 home address加一个选项same
*/
