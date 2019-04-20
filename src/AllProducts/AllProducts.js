import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ProductsForHome from './ProductsForHome';
import styles from './AllProducts.module.css';

class AllProducts extends Component {
  render() {
    const {
      categories,
      products,
    } = this.props;

    return (
      <div>
      <div className={styles.productsDisplay}>
        <div className={styles.grid_style}>
          <ProductsForHome categories={categories} products={products} />
        </div>
        {/*{viewedProducts.length === 0 ? <div></div>*/}
            {/*: <h2 className={styles.Title}>Viewed Products</h2>}*/}
        </div>
        <br/>
        <div>
          <div>
        {/*<ViewedProducts className={styles.ViewedProducts}*/}
          {/*categories={categories}*/}
          {/*products={*/}
            {/*viewedProducts.map(productId => allProducts[productId])*/}
          {/*}*/}
        {/*/>*/}
          </div>
        </div>
       </div>
      
    )
  }
}

  AllProducts.propTypes = {
    products: PropTypes.array.isRequired
  };



  export default AllProducts;

