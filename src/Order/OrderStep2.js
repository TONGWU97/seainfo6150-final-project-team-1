import React, { Component } from 'react';
import PropTypes from 'prop-types';
import style from './OrderStep2.module.css';
import { Link } from 'react-router-dom';
import Error from '../Error/Error'
import NumberFormat from 'react-number-format';
import DisplayOptions from './DisplayOptions';

class OrderStep2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      submittedSuccessfully: false,
        checked: false
    }
  }

  handleCheckBox() {
    if (!this.state.checked) {
        this.props.setUserBillingInfo('BillingStreetAddress', this.props.userInfo.ShipmentStreetAddress);
        this.props.setUserBillingInfo('BillingCity', this.props.userInfo.ShipmentCity);
        this.props.setUserBillingInfo('BillingState', this.props.userInfo.ShipmentState);
        this.props.setUserBillingInfo('BillingZipeCode', this.props.userInfo.ShipmentZipeCode);
    } else {
        this.props.setUserBillingInfo('BillingStreetAddress', '');
        this.props.setUserBillingInfo('BillingCity', '');
        this.props.setUserBillingInfo('BillingState', '');
        this.props.setUserBillingInfo('BillingZipeCode', '');
    }
    this.setState({
        checked: !this.state.checked,
    });
  }

  handleSubmit() {
      this.props.checkUserInfoSubmit(this.props.userInfo);
  }
  renderRedirect() {
    if (!this.props.userInfoHasError) {
      return <Link to="/order/summary"><button className={style.buttonToNext}>Go to summary</button></Link>;
    } else {
      return  <button className={style.buttonToNext} onClick={this.handleSubmit.bind(this)}>Go to summary</button>;
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
      userInfoError,
    } = this.props;

    const checkErrorDisplay=  (item) => {
        if (userInfoError.hasOwnProperty(item) && userInfoError[item].length !== 0) {
            return (
                <Error error = {userInfoError[item]}/>
            )
        }
    };
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
            <img src={category.img.sm} alt={category.id}/>
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
          <h2 className={style.itemName}>Your selected options for you car</h2>
          <hr className={style.line}/>
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
          <h2 className={style.itemName}>User Information</h2>
          <hr className={style.line}/>
          <div className={style.inputArea}>
            <input className={style.infoItem} onChange={setUserInfo.bind(null, 'buyerName')} value={userInfo.buyerName || ''}/>
            <span className={style.highlight}></span>
            <span className={style.bar}></span>
            <label className={style.labelTag}>Name</label>
            {checkErrorDisplay('buyerName')}
          </div>

          <div >
            <h4>Shipment address</h4>
            <div className={style.oneline}>
              <div className={style.inputArea}>
                <input className={style.infoItem} onChange={setUserInfo.bind(null, 'ShipmentStreetAddress')} value={userInfo.ShipmentStreetAddress || ''}/>
                <span className={style.highlight}></span>
                <span className={style.bar}></span>
                <label className={style.labelTag}>Street address</label>
                {checkErrorDisplay('ShipmentStreetAddress')}
              </div>
              <div className={style.inputArea}>
                <input className={style.infoItem} onChange={setUserInfo.bind(null, 'ShipmentCity')} value={userInfo.ShipmentCity || ''}/>
                <span className={style.highlight}></span>
                <span className={style.bar}></span>
                <label className={style.labelTag}>City</label>
                {checkErrorDisplay('ShipmentCity')}
              </div>
              <div className={style.inputArea}>
                <input className={style.infoItem} onChange={setUserInfo.bind(null, 'ShipmentState')} value={userInfo.ShipmentState || ''}/>
                <span className={style.highlight}></span>
                <span className={style.bar}></span>
                <label className={style.labelTag}>State</label>
                {checkErrorDisplay('ShipmentState')}
              </div>
              <div className={style.inputArea}>
                <input className={style.infoItem} type='number' onChange={setUserInfo.bind(null, 'ShipmentZipeCode')} value={userInfo.ShipmentZipeCode || ''}/>
                <span className={style.highlight}></span>
                <span className={style.bar}></span>
                <label className={style.labelTag}>Zip code</label>
                {checkErrorDisplay('ShipmentZipeCode')}
              </div>
            </div>
          </div>
          <div className={style.oneline}>
            <input type="checkbox" onChange={this.handleCheckBox.bind(this)} checked={this.state.checked}/>
            <label>Same with shipment address</label>
          </div>
            {this.state.checked === false ?
              (
                <div>
                  <h4>Billing address</h4>
                  <div className={style.oneline}>
                    <div className={style.inputArea}>
                      <input className={style.infoItem} onChange={setUserInfo.bind(null, 'BillingStreetAddress')} value={userInfo.BillingStreetAddress || ''}/>
                      <span className={style.highlight}></span>
                      <span className={style.bar}></span>
                      <label className={style.labelTag}>Street address</label>
                      {checkErrorDisplay('BillingStreetAddress')}
                    </div>
                    <div className={style.inputArea}>
                      <input className={style.infoItem} onChange={setUserInfo.bind(null, 'BillingCity')} value={userInfo.BillingCity || ''}/>
                      <span className={style.highlight}></span>
                      <span className={style.bar}></span>
                      <label className={style.labelTag}>City</label>
                      {checkErrorDisplay('BillingCity')}
                    </div>
                    <div className={style.inputArea}>
                      <input className={style.infoItem} onChange={setUserInfo.bind(null, 'BillingState')} value={userInfo.BillingState || ''}/>
                      <span className={style.highlight}></span>
                      <span className={style.bar}></span>
                      <label className={style.labelTag}>State</label>
                      {checkErrorDisplay('BillingState')}
                    </div>
                    <div className={style.inputArea}>
                      <input className={style.infoItem} type='number' onChange={setUserInfo.bind(null, 'BillingZipeCode')} value={userInfo.BillingZipeCode || ''}/>
                      <span className={style.highlight}></span>
                      <span className={style.bar}></span>
                      <label className={style.labelTag}>Zip code</label>
                      {checkErrorDisplay('BillingZipeCode')}
                    </div>
                  </div>
                </div>
              ) : (
                <div>
                  <h4>Billing address</h4>
                  <div className={style.oneline}>
                    <div className={style.inputArea}>
                      <input
                        className={style.infoItem}
                        onChange={setUserInfo.bind(null, 'BillingStreetAddress')}
                        placeholder={'Street address'}
                        value={userInfo.BillingStreetAddress || ''}
                        disabled
                      />
                      <span className={style.highlight}></span>
                      <span className={style.bar}></span>
                      {/*<label className={style.labelTag}>Street address</label>*/}
                      {checkErrorDisplay('BillingStreetAddress')}
                    </div>
                    <div className={style.inputArea}>
                      <input
                        className={style.infoItem}
                        onChange={setUserInfo.bind(null, 'BillingCity')}
                        value={userInfo.BillingCity || ''}
                        placeholder='City'
                        disabled
                      />
                      <span className={style.highlight}></span>
                      <span className={style.bar}></span>
                      {/*<label className={style.labelTag}>City</label>*/}
                      {checkErrorDisplay('BillingCity')}
                    </div>
                    <div className={style.inputArea}>
                      <input
                        className={style.infoItem}
                        onChange={setUserInfo.bind(null, 'BillingState')}
                        value={userInfo.BillingState || ''}
                        placeholder='State'
                        disabled
                      />
                      <span className={style.highlight}></span>
                      <span className={style.bar}></span>
                      {/*<label className={style.labelTag}>State</label>*/}
                      {checkErrorDisplay('BillingState')}
                    </div>
                    <div className={style.inputArea}>
                      <input
                        className={style.infoItem}
                        type='number'
                        onChange={setUserInfo.bind(null, 'BillingZipeCode')}
                        value={userInfo.BillingZipeCode || ''}
                        placeholder='Zip code'
                        disabled
                      />
                      <span className={style.highlight}></span>
                      <span className={style.bar}></span>
                      {/*<label className={style.labelTag}>Zip code</label>*/}
                      {checkErrorDisplay('BillingZipeCode')}
                    </div>
                  </div>
                </div>
                )
            }

          <div className={style.inputArea}>
            <div>
              <NumberFormat
                className={style.infoItem}
                format="(###) ###-####" mask=""
                name="phoneNumberInput"
                placeholder='Phone Number Here'
                onChange={setUserInfo.bind(null, 'phoneNumber')}
                value={userInfo.phoneNumber || ''}/>
              <span className={style.highlight}></span>
              <span className={style.bar}></span>
              <label className={style.labelTag}>Phone number</label>
            </div>
            <p><strong>Phone Number: </strong>+1{userInfo.phoneNumber}</p>
            {checkErrorDisplay('phoneNumber')}
          </div>
          <div className={style.inputArea}>
            <div>
              <NumberFormat
                className={style.infoItem}
                format="(###) ###-####" mask=""
                name="phoneNumberInput"
                placeholder='Cell Number Here'
                onChange={setUserInfo.bind(null, 'cellNumber')}
                value={userInfo.cellNumber || ''}/>
              <span className={style.highlight}></span>
              <span className={style.bar}></span>
              <label className={style.labelTag}>Cell number</label>
            </div>
            <p><strong>Cell Number: </strong>+1{userInfo.cellNumber}</p>
            {checkErrorDisplay('cellNumber')}
          </div>
          <div className={style.inputArea}>
            <input className={style.infoItem} type='date' onChange={setUserInfo.bind(null, 'dateOfBirth')} value={userInfo.dateOfBirth || ''}/>
            <span className={style.highlight}></span>
            <span className={style.bar}></span>
            <label className={style.labelTag}>Date of birth</label>
            {checkErrorDisplay('dateOfBirth')}
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
            return (key === 'submitSecondStep' ? <Error key={index} error={userInfoError[key]}/>
                : null)
        })}

      </div>
    )



  }
}

OrderStep2.propTypes = {
  options: PropTypes.object.isRequired,
  selectedProductId: PropTypes.string
};

export default OrderStep2;
