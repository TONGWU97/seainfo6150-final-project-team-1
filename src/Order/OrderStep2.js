import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from "react-router-dom";
import style from './OrderStep2.module.css';
import { Link } from 'react-router-dom';
import Error from '../Error/Error'
import NumberFormat from 'react-number-format';
import DisplayOptions from './DisplayOptions';

class OrderStep2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      submittedSuccessfully: false
    }
  }

  handleSubmit() {
      this.props.checkUserInfoSubmit(this.props.userInfo);
  }
  renderRedirect() {
    if (!this.props.userInfoHasError) {
      return <Link to="/order/summary"><button>Go to summary</button></Link>;
    } else {
      return  <button onClick={this.handleSubmit.bind(this)}>Go to summary</button>;
    }
  }

  render() {
    const {
      options,
      selectedProductId,
      setUserInfo,
      products,
      categories,
      selectedOptions,
      userInfo,
      checkUserInfoSubmit,
      userInfoError
    } = this.props;

    const orderCar = () => {
      if (selectedProductId === null) {
        return <div>You didn't select any car</div>
      }

      const product = products[selectedProductId];
      const category = categories[product.categoryId];
      return (
        <div>
          <hr/>
          <div className={style.item}>
            <img src={category.img.sm} />
            <div className={style.describe}>
              <div>{product.title}</div>
              <div>year: {product.year}</div>
            </div>
            <div className={style.count}>1</div>
            <div className={style.price}>{product.hasOwnProperty('sale') ? product.sale : product.price}</div>
          </div>
          <div>
            {CarOptions(selectedProductId)}
          </div>
        </div>
      )
    };

    const CarOptions = (id, index) => {
      return (
        <div>
          <h2>Your selected options for you car</h2>
          <div className={style.allOptions}>
            {Object.keys(selectedOptions).map((option, index) => {
              const originalOption = options[option];
              const selectedValue = selectedOptions[option];
              return (
                <div key={index} className={style.oneline}>
                  <h4 className={style.optionTitle}>{originalOption.name}</h4>
                  <DisplayOptions option={originalOption.name} value={selectedValue}/>
                </div>
              )
            }) }
          </div>
        </div>
      )
    };

    const userInformation = () => {
      return (
        <div className={style.allInfo}>
          <h2>User Information</h2>
          <div className={style.inputArea}>
            <input className={style.infoItem} onChange={setUserInfo.bind(null, 'buyerName')} value={userInfo.buyerName}/>
            <span className={style.highlight}></span>
            <span className={style.bar}></span>
            <label className={style.labelTag}>Name</label>
          </div>
          <div >
            <h4>Shipment address</h4>
            <div className={style.oneline}>
              <div className={style.inputArea}>
                <input className={style.infoItem} onChange={setUserInfo.bind(null, 'ShipmentStreetAddress')} value={userInfo.ShipmentStreetAddress}/>
                <span className={style.highlight}></span>
                <span className={style.bar}></span>
                <label className={style.labelTag}>Street address</label>
              </div>
              <div className={style.inputArea}>
                {/*<div>City</div>*/}
                <input className={style.infoItem} onChange={setUserInfo.bind(null, 'ShipmentCity')} value={userInfo.ShipmentCity}/>
                <span className={style.highlight}></span>
                <span className={style.bar}></span>
                <label className={style.labelTag}>City</label>
              </div>
              <div className={style.inputArea}>
                {/*<div>State</div>*/}
                <input className={style.infoItem} onChange={setUserInfo.bind(null, 'ShipmentState')} value={userInfo.ShipmentState}/>
                <span className={style.highlight}></span>
                <span className={style.bar}></span>
                <label className={style.labelTag}>State</label>
              </div>
              <div className={style.inputArea}>
                {/*<div>Zip code</div>*/}
                <input className={style.infoItem} type='number' onChange={setUserInfo.bind(null, 'ShipmentZipeCode')} value={userInfo.ShipmentZipeCode}/>
                <span className={style.highlight}></span>
                <span className={style.bar}></span>
                <label className={style.labelTag}>Zip code</label>
              </div>
            </div>
          </div>
          <div>
            <h4>Billing address</h4>
            <div className={style.oneline}>
              <div className={style.inputArea}>
                <input className={style.infoItem} onChange={setUserInfo.bind(null, 'BillingStreetAddress')} value={userInfo.BillingStreetAddress}/>
                <span className={style.highlight}></span>
                <span className={style.bar}></span>
                <label className={style.labelTag}>Street address</label>
              </div>
              <div className={style.inputArea}>
                <input className={style.infoItem} onChange={setUserInfo.bind(null, 'BillingCity')} value={userInfo.BillingCity}/>
                <span className={style.highlight}></span>
                <span className={style.bar}></span>
                <label className={style.labelTag}>City</label>
              </div>
              <div className={style.inputArea}>
                <input className={style.infoItem} type='state' onChange={setUserInfo.bind(null, 'BillingState')} value={userInfo.BillingState}/>
                <span className={style.highlight}></span>
                <span className={style.bar}></span>
                <label className={style.labelTag}>State</label>
              </div>
              <div className={style.inputArea}>
                <input className={style.infoItem} type='number' onChange={setUserInfo.bind(null, 'BillingZipeCode')} value={userInfo.BillingZipeCode}/>
                <span className={style.highlight}></span>
                <span className={style.bar}></span>
                <label className={style.labelTag}>Zip code</label>
              </div>
            </div>
          </div>

          <div className={style.inputArea}>
            <div>
              <NumberFormat
                className={style.infoItem}
                format="(###) ###-####" mask=""
                name="phoneNumberInput"
                placeholder='Phone Number Here'
                onChange={setUserInfo.bind(null, 'phoneNumber')}
                value={userInfo.phoneNumber}/>
              <span className={style.highlight}></span>
              <span className={style.bar}></span>
              <label className={style.labelTag}>Phone number</label>
            </div>
            <p><strong>Phone Number: </strong>+1{userInfo.phoneNumber}</p>
          </div>
          <div className={style.inputArea}>
            <div>
              <NumberFormat
                className={style.infoItem}
                format="(###) ###-####" mask=""
                name="phoneNumberInput"
                placeholder='Cell Number Here'
                onChange={setUserInfo.bind(null, 'cellNumber')}
                value={userInfo.cellNumber}/>
              <span className={style.highlight}></span>
              <span className={style.bar}></span>
              <label className={style.labelTag}>Cell number</label>
            </div>
            <p><strong>Cell Number: </strong>+1{userInfo.cellNumber}</p>
          </div>
          <div className={style.inputArea}>
            <input className={style.infoItem} type='date' onChange={setUserInfo.bind(null, 'dateOfBirth')} value={userInfo.dateOfBirth}/>
            <span className={style.highlight}></span>
            <span className={style.bar}></span>
            <label className={style.labelTag}>Date of birth</label>
          </div>
      </div>
      )
    };

    return (
      <div className={style.paymentInfo}>
        <h2>Payment Info</h2>
        <div className={style.title}>
          <h4>Photo</h4>
          <h4>Description</h4>
          <h4>Quantity</h4>
          <h4>Price</h4>
        </div>

        {orderCar()}
        {userInformation()}
        {this.renderRedirect()}

        {Object.keys(userInfoError).map((key, index) => {
          return <Error key={index} error={userInfoError[key]}/>
        })}
      {/*<form onSubmit={this.handleSubmit.bind(this)}>*/}
          {/*<fieldset>*/}
              {/*<input type="submit" value="Go to summary" />*/}
          {/*</fieldset>*/}
      {/*</form>*/}
      </div>
    )



  }
}

OrderStep2.propTypes = {
  options: PropTypes.object.isRequired,
  selectedProductId: PropTypes.string
};

export default OrderStep2;
