import React from 'react';
import PropTypes from 'prop-types';
import ProductsForHome from './ProductsForHome';
import styles from './AllProducts.module.css';



const AllProducts = ({ categories, products }) => (
  
  
  <div className={styles.grid_style}>
  <ProductsForHome categories={categories} products={products} />
  </div>

);

AllProducts.propTypes = {
  products: PropTypes.array.isRequired
};



export default AllProducts;

