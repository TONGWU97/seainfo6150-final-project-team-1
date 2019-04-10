import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './ProductsForHome.module.css';

const ProductsForHome = ({ categories, products }) => {
  return products.map(product => {
    const category = categories[product.categoryId];
    return (
      <div className={styles.products} key={product.id}>
      <div>
        <span>
          <Link className={styles.AllProducts} to={`/products/${product.categoryId}/${product.id}`}>
            <img className={styles.productsImage} src={category.img.sm} alt={category.id}/>
            <div className={styles.HiddenText}> 
              <ul>
                <li className={styles.title}>{product.title}</li>
                <li className={styles.category}>Category: {product.categoryId}</li>
                <li className={styles.year}>Year: {product.year}</li>
                {product.sale == null ? <li className={styles.priceBefore}> Price Before: ${product.price}</li> : <li></li>}
              </ul>
          </div>
          </Link>
        </span>
        <div>
        <ul>
          <Link className={styles.list} to={`/products/${product.categoryId}/${product.id}`}>
            {product.sale == null ? <li className={styles.soldOut}> Sold Out </li> : <li className={styles.sale}>On Sale: ${product.sale}</li>}
            <li className={styles.description}> {product.description}</li>
          </Link>
        </ul>
        </div>
        </div>
      </div>
    );
  })
};

ProductsForHome.propTypes = {
  products: PropTypes.array.isRequired
};

export default ProductsForHome;
