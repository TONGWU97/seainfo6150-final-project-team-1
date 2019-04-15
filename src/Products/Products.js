import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './Products.module.css';

const Products = ({ categories, products }) => {
  // const {
  //   viewedProducts,
  //   allProducts
  // } = this.props;

  return products.map(product => {
    const category = categories[product.categoryId];
    return (
      <div key={product.id}>
        {product.available === true ?
          <div className={styles.products} key={product.id}>
            <div className={styles.picture}>
              <Link to={`/products/${product.categoryId}/${product.id}`}>
                <img className={styles.productsImage} src={category.img.sm} alt={category.id} />
              </Link>
            </div>
            <div className={styles.carInfo}>
              <ul>
                <div className={styles.list} to={`/products/${product.categoryId}/${product.id}`}>
                  <li className={styles.title}>Title: {product.title}</li>
                  <li className={styles.category}>Category: {product.categoryId}</li>
                  <li className={styles.year}>Year: {product.year}</li>
                  {product.sale == null ? <li className={styles.price}>Price: {product.price}</li> : <li className={styles.priceBefore}>Price Before: {product.price}</li>}
                  {product.sale == null ? null : <li className={styles.sale}>On Sale: {product.sale}</li>}
                  <li className={styles.description}>Description: {product.description}</li>
                  <Link className={styles.click} to={`/products/${product.categoryId}/${product.id}`}>
                    <button className={styles.detailbutton}>See Details ▶</button>
                  </Link>
                </div>
              </ul>
            </div>
          </div>
          :
          <div className={styles.products} key={product.id}>
            <div className={styles.picture}>
              <img className={styles.productsImageUnavailable} src={category.img.sm} alt={category.id} />
            </div>
            <div className={styles.carInfo}>
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
          </div>
        }
        {/* {viewedProducts.length === 0 ? <div></div>: <h2 className={styles.Title}>Viewed Products</h2>}
        <ViewedProducts
          categories={categories}
          products={
            viewedProducts.map(productId => allProducts[productId])
          }
        /> */}
      </div>
    );
  })
};

Products.propTypes = {
  products: PropTypes.array.isRequired
};

export default Products;
