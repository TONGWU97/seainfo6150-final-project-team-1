import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ProductsForHome from './ProductsForHome';
import styles from './AllProducts.module.css';
import ViewedProducts from '../ViewedProducts/ViewedProducts.js';

class AllProducts extends Component {
  render() {
    const {
      categories,
      products,
      viewedProducts,
      allProducts
    } = this.props;

    return (
      <div>
      <div className={styles.grid_style}>
        <ProductsForHome categories={categories} products={products} />
        {viewedProducts.length === 0 ? <div></div>: <h2 className={styles.Title}>Viewed Products</h2>}
        </div>
        <br/>
        <div>
        <ViewedProducts className={styles.ViewedProducts}
          categories={categories}
          products={
            viewedProducts.map(productId => allProducts[productId])
          }
        />
        </div>
       </div>
      
    )
  }
}

  AllProducts.propTypes = {
    products: PropTypes.array.isRequired
  };



  export default AllProducts;

