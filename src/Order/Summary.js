import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from "react-router-dom";
import style from './Summary.module.css';
import DisplayOptions from './DisplayOptions';

import TotalPrice from "./TotalPrice";

class Summary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      submittedSuccessfully: false
    }
  }

  handleSubmit() {
    this.setState({
      submittedSuccessfully: true
    });
  }

  render() {
    const {
      options,
      products,
      selectedOptions,
      selectedProductId,
      userInfo,
      categories
    } = this.props;

    const displayCarInfo = () => {
      if (selectedProductId === null) {
        return <div>You didn't select any car</div>
      }
      const product = products[selectedProductId];
      const category = categories[product.categoryId];

      return (
        <div className={style.carInfo}>
          <img className={style.carImage} src={category.img.lg} alt={category.id}/>
          <div className={style.describe}>
            <h2>{product.title}</h2>
            <div>year: {product.year}</div>
          </div>
        </div>
      )
    };
    const buildUserInfo = () => {
      if (userInfo === null || userInfo.length === 0) {
        return <div>You didn't fill in your information</div>
      }

      return(
        <div>
          <div className={style.onelineUserInfo}>
            <div className={style.userTitle}>Name</div>
            <div>{userInfo.buyerName}</div>
          </div>
          <div>
            <div className={style.userTitleLong}>Shipment Information</div>
            <div className={style.valueInfo}>
              <div>{userInfo.ShipmentStreetAddress}</div>
              <div className={style.onelineUserInfo}>
                <div className={style.sigleItem}>{userInfo.ShipmentCity}</div>
                <div className={style.sigleItem}>{userInfo.ShipmentState}</div>
                <div className={style.sigleItem}>{userInfo.ShipmentZipeCode}</div>
              </div>
            </div>
          </div>
          <div>
            <div className={style.userTitleLong}>Billing Information</div>
            <div className={style.valueInfo}>
              <div>{userInfo.BillingStreetAddress}</div>
              <div className={style.onelineUserInfo}>
                <div className={style.sigleItem}>{userInfo.BillingCity}</div>
                <div className={style.sigleItem}>{userInfo.BillingState}</div>
                <div className={style.sigleItem}>{userInfo.BillingZipeCode}</div>
              </div>
            </div>
          </div>
          <div className={style.onelineUserInfo}>
            <div className={style.userTitle}>Phone Number</div>
            <div>
              <div>{userInfo.phoneNumber}</div>
            </div>
          </div>
          <div className={style.onelineUserInfo}>
            <div className={style.userTitle}>Cell Number</div>
            <div>
              <div>{userInfo.cellNumber}</div>
            </div>
          </div>
          <div className={style.onelineUserInfo}>
            <div className={style.userTitle}>Date of Birth</div>
            <div>
              <div>{userInfo.dateOfBirth}</div>
            </div>
          </div>
        </div>
      )
    };

    return this.state.submittedSuccessfully
      ? (<Redirect to="/order/thank-you" />)
      : (
      <form className={style.summaryPage} onSubmit={this.handleSubmit.bind(this)}>

        <div className={style.displayCarInforAndOptions}>
            <div className={style.selectedOption}>
                <h2>Selected car information</h2>
                <hr/>
                {displayCarInfo()}
            </div>
        {/* This will iterate through all the selected options so you can see what the user chose. */}

          <div className={style.displayOptions}>
            <h2>Selected options for your car</h2>
            <hr/>
            {
              Object.keys(selectedOptions).map((option) => {
                const originalOption = options[option];
                const selectedValue = selectedOptions[option];

                return (
                  <div key={option} className={style.oneline}>
                    <h4 className={style.optionTitle}>{originalOption.name}</h4>
                    <DisplayOptions option={originalOption.name} value={selectedValue}/>
                  </div>
                );
              })
            }
          </div>

        </div>
        {/* This will iterate through all the user info so you can see what the user entered. */}
        <ul className={style.userInfo}>
            <h2 className={style.informationHeader}>Your Information</h2>
            <hr/>
            {buildUserInfo()}
        </ul>

        <TotalPrice
          options={options}
          product={products[selectedProductId]}
          selectedOptions={selectedOptions}
        />

        <fieldset className={style.fieldSet}>
          <input className={style.button} type="submit" value="Submit order" />
        </fieldset>
      </form>
    )
  }
}

Summary.propTypes = {
  options: PropTypes.object.isRequired,
  products: PropTypes.object.isRequired,
  selectedOptions: PropTypes.object.isRequired,
  selectedProductId: PropTypes.string
};

export default Summary;
