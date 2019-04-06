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
          <Link to={`/products/${product.categoryId}/${product.id}`}>
            <img className={styles.productsImage} src={category.img.sm} />
          </Link>
        </span>
        <div>
        <ul>
          <Link className={styles.list} to={`/products/${product.categoryId}/${product.id}`}>
            <li className={styles.title}>title: {product.title}</li>
            <li className={styles.category}>category: {product.categoryId}</li>
            <li className={styles.year}>year: {product.year}</li>
            {product.sale == null ? <li className={styles.price}>price: {product.price}</li> : <li className={styles.priceBefore}>price before: {product.price}</li>}
            {product.sale == null ? null : <li className={styles.sale}>on sale: {product.sale}</li>}
            <li className={styles.description}>description: {product.description}</li>
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
