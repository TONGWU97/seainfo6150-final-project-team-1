import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';

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
      <div>
        <span>{product.title}</span>
        <img src={category.img.lg} />
        <ul>
            <li>category: {product.categoryId}</li>
            <li>year: {product.year}</li>
            <li>price: {product.price}</li>
            <li>sale: {product.sale}</li>
            <li>title: {product.title}</li>
            <li>description: {product.description}</li>
          </ul>
        {/* start order button */}
        <button><Link to="/order/1" onClick={selectProductId.bind(null, product.id)}>Order</Link></button>
        {/* end order button */}
      </div>
    );
  }

}

export default ProductDetail;
