import React from 'react';
import style from './ThankYou.module.css'

const ThankYou = () => (
    <div className={style.thankyou}>
        <img className={style.thankyouImage} src='/assets/img/background/car.gif' alt='thankyouImage'/>
        <h1>Thank You!</h1>
        <h3>Your car is on the way to your home</h3>

    </div>

);

export default ThankYou;
