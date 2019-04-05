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
      <div className={styles.productDetail}>
        <h1>{product.title}</h1>
        <img src={category.img.lg} />
        <table>
          <caption>{product.description}</caption>
          <br/>
          <thead>
            <tr>
              <th>category</th>
              <th>year</th>
              <th>price</th>
              <th>sale</th>
            </tr>
          </thead>
          <tbody>
            <tr>
            <td>{product.categoryId}</td>
            <td>{product.year}</td>
            <td>{product.price}</td>
            <td>{product.sale}</td>
          </tr>
          </tbody>
        </table>
        {/* start order button */}
        <Link to="/order/1" onClick={selectProductId.bind(null, product.id)}><button>Order</button></Link>
        {/* end order button */}
      </div>
    );
  }

}

export default ProductDetail;
