import { Link } from 'react-router-dom';
import styles from './ProductsForHome.module.css';
import React from 'react';
import PropTypes from 'prop-types';


const ProductsForHome = ({ categories, products}) => {
  return products.map(product => {
    const category = categories[product.categoryId];
    return (
      <div className={styles.products} key={product.id}>
      {product.available === true ?
        <div>
          <span>
            <Link className={styles.AllProducts} to={`/products/${product.categoryId}/${product.id}`}>
            <img className={styles.productsImage} src={category.img.sm} alt={category.id}/>
            <div className={styles.HiddenText}> 
              <ul>
                <li className={styles.year}>Year: {product.year}</li>
                <li className={styles.category}>Category: {product.categoryId}</li>
                <li className={styles.description}> {product.description}</li>
              </ul>
            </div>
            </Link>
          </span>
          <div>
            <ul>
            <Link className={styles.list} to={`/products/${product.categoryId}/${product.id}`}>
            <li className={styles.title}>{product.title}</li>
            {product.sale == null ? <li className={styles.price}>Price: ${product.price}</li> : <li className={styles.priceBefore}>Price Before: ${product.price}</li>}
            {product.sale == null ? null : <li className={styles.sale}>On Sale: ${product.sale}</li>}
            
            </Link>
          </ul>
          </div>
        </div>

        :

        <div className={styles.products} key={product.id}>
            <span>
              <img className={styles.productsImageUnavailable} src={category.img.sm} alt={category.id}/>
            </span>
            <ul>
            <li className={styles.unavailable}>Sorry, this car is unavailable now.</li>
              <div className={styles.unavailableText}>
                
                <li className={styles.title}>{product.title}</li>
                {product.sale == null ? <li></li> : <li className={styles.priceBefore}>Price Before: {product.price}</li>}
                <li className={styles.price}>Price: ${product.price}</li>
              </div>
            </ul>
          </div>
      }
     
      </div>
    );
  })
};

ProductsForHome.propTypes = {
  products: PropTypes.array.isRequired
};


export default ProductsForHome;
