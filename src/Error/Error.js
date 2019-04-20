import React from 'react';
import style from './Error.module.css'

const Error = ({ error }) => (
  <div className={style.errorDisplay}>{error}</div>
);

export default Error;
