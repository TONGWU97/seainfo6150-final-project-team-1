import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './Products.module.css';


const Products = ({ categories, products }) => {
  return products.map(product => {
    const category = categories[product.categoryId];
    return (
      <div className={styles.grid_box}>
        <div className={styles.grid_item} key={product.id}>
            <Link to={`/products/${product.categoryId}/${product.id}`}>
              <img src={category.img.sm} />
            </Link>

            <ul>
              <Link className={styles.item} to={`/products/${product.categoryId}/${product.id}`}>
                <li className={styles.price}>price: {product.price}</li>
                {product.sale == null ? <li></li>: <li className={styles.sale}> sale: {product.sale}</li>}
                <li className={styles.description}>{product.description}</li>
              </Link>
            </ul>  
      </div>
      </div>
    );
  })
};

Products.propTypes = {
  products: PropTypes.array.isRequired
};

export default Products;
