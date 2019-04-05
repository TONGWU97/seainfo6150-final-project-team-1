import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './Products.module.css';

const Products = ({ categories, products }) => {
  return products.map(product => {
    const category = categories[product.categoryId];
    return (
      <div className={styles.products} key={product.id}>
        <span>
          <Link to={`/products/${product.categoryId}/${product.id}`}>
            <img src={category.img.sm} />
          </Link>
        </span>
        <ul>
        <Link to={`/products/${product.categoryId}/${product.id}`}>
            <li>category: {product.categoryId}</li>
            <li>year: {product.year}</li>
            <li>price: {product.price}</li>
            <li>sale: {product.sale}</li>
            <li>title: {product.title}</li>
            <li>description: {product.description}</li>
        </Link>
        </ul>
      </div>
      
    );
  })
};

Products.propTypes = {
  products: PropTypes.array.isRequired
};

export default Products;
