import React from 'react';
import style from './NotFound.module.css';

const NotFound = () => (
<div>
  <div className = {style.notfound}>
    <img className = {style.notfound_img} src = "https://gifimage.net/wp-content/uploads/2018/11/car-icon-gif-2.gif" alt='NotFound'/>
  </div>

    <div className = {style.notfound_text}>
      <h1>404</h1>
      <p>404.That's an error.</p>
      <p>The request of URL was found on this sever.</p>
    </div>
  </div>


)

export default NotFound;
