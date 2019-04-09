import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './Products.module.css';


const Products = ({ categories, products }) => {
  return products.map(product => {
    const category = categories[product.categoryId];
    return (
      <div key={product.id}>
        {product.available === true ?
          <div className={styles.products} key={product.id}>
            <span>
              <Link to={`/products/${product.categoryId}/${product.id}`}>
                <img className={styles.productsImage} src={category.img.sm} alt={category.id} />
              </Link>
            </span>
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
          :
          <div className={styles.products} key={product.id}>
            <span>
              <img className={styles.productsImageUnavailable} src={category.img.sm} alt={category.id}/>
            </span>
            <ul>
              <div className={styles.unavailableText}>
                <li className={styles.title}>title: {product.title}</li>
                <li className={styles.category}>category: {product.categoryId}</li>
                <li className={styles.year}>year: {product.year}</li>
                {product.sale == null ? <li className={styles.price}>price: {product.price}</li> : <li className={styles.priceBefore}>price before: {product.price}</li>}
                {product.sale == null ? null : <li className={styles.saleUnavailable}>on sale: {product.sale}</li>}
                <li className={styles.description}>description: {product.description}</li>
              </div>
              <li className={styles.unavailable}>Sorry, this car is unavailable now.</li>
            </ul>
          </div>
        }
      </div>
    );
  })
};

Products.propTypes = {
  products: PropTypes.array.isRequired
};

export default Products;
