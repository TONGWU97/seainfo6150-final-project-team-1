import React from 'react';
import PropTypes from 'prop-types';
import style from './TotalPrice.module.css'

const TotalPrice = ({ options, selectedOptions, product }) => {
  if (!product) {
    return null;
  }

  let price = product.sale || product.price;

  const premiumOptionsIds = new Set(Object.values(options).filter(option => option.premium).map(option => option.id));

  const selectedOptionsIds = new Set (Object.keys(selectedOptions));

  const selectedPremiumOptionsIds = new Set(
    [...premiumOptionsIds].filter(x => selectedOptionsIds.has(x)))

  return (
    <div className={style.totalPrice}>
      {
        [...selectedPremiumOptionsIds].map(id =>
          <div key={id} className={style.premiumOptions}><span>{options[id].name}</span> add 50</div>
        )
      }
      <div className={style.total}><span>Total:</span> { price + [...selectedPremiumOptionsIds].length*50 }</div>
    </div>
  );
};

TotalPrice.propTypes = {
  options: PropTypes.object.isRequired,
  selectedOptions: PropTypes.object.isRequired,
  product: PropTypes.object
};

export default TotalPrice;
