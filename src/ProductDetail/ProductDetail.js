import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import styles from './ProductDetail.module.css';

class ProductDetail extends PureComponent {
  componentDidMount() {
    this.props.viewProduct(this.props.product.id);
  }

  render() {
    const {
      categories,
      product,
      selectProductId
    } = this.props;

    const category = categories[product.categoryId];
    return (
      <div className={styles.ProductDetail}>
        <h1>>> {product.title}</h1>
        <div className={styles.detailbox}>
          <div className={styles.detailList}>
            <ul>
              <li><span>{product.categoryId}</span><p>category</p></li>
              <li><span>{product.year}</span><p>year</p></li>
              {product.sale == null ? <li><span>{product.price}</span><p>price</p></li> : null}
              {product.sale == null ? null : <li><span>{product.sale}</span><p>sale price</p></li>}
            </ul>
            <div className={styles.description}>{product.description}</div>
          </div>
          <div className={styles.detailImage}><img src={category.img.lg} /></div>
        </div>
          {/* start order button */}
          <Link className={styles.button} to="/order/1" onClick={selectProductId.bind(null, product.id)}><button><img src="https://img.icons8.com/windows/32/000000/shop.png"/><div>Add to Cart ▶</div></button></Link>
          {/* end order button */}
      </div>
    );
  }

}

export default ProductDetail;
