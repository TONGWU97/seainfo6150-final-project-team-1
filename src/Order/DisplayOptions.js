import React from 'react';
import options from '../data/options.json';
import style from './OrderStep2.module.css';

const DisplayOptions = (optionValue) => {
    const option = optionValue.option;
    const value = optionValue.value;
    let colorNum = '#000';
    if (option === 'Color' || option === 'Dashboard Lights Color' || option === 'floormatsColor') {
        return displayColor(value, value)
    }
    if (option === 'Interior Fabric Color' || option === 'Dashboard Color') {
        if (value === 'red') {
            colorNum = '#f00'
        } else if (value === 'tan') {
            colorNum = '#d2b48c'
        } else if (value === 'gray') {
            colorNum = '#808080'
        } else if (value === 'black') {
            colorNum = '#000'
        } else if (value === 'maroon') {
            colorNum = '#800000'
        } else if (value === 'green') {
            colorNum = '#008000'
        }
        return displayColor(colorNum, value)
    }
    if (option === 'Hood Ornament') {
        return (
            <div className={style.oneline}>
                <img src={options.hoodOrnament.values[value].img} alt={options.hoodOrnament.values[value].id}/>
                <label>{value}</label>
            </div>
        )
    }
    if (option === 'Trunk Monkey') {
        return (
            <div className={style.oneline}>
                <img src={options.trunkMonkey.values[value].img.sm} alt={options.trunkMonkey.values[value].id}/>
                <label>{value}</label>
            </div>
        )
    }
    if (value === 'true' || value === true) {
        return (
            <label>Yes</label>
        )
    }
    if (value === 'false' || value === false) {
        return (
            <label>No</label>
        )
    }
    return (
        <label>{value}</label>
    )

};
const displayColor = (colorNum, value) => {
    return (
        <div className={style.oneline}>
            <input className={style.colorDisplay} type='color' value={colorNum} disabled/>
            <label>{value}</label>
        </div>
    )
};
export default DisplayOptions;