import React, { Component } from 'react';
import PropTypes from 'prop-types';
import style from './OrderStep1.module.css';
import Error from '../Error/Error'
import { Link } from 'react-router-dom';



class OrderStep1 extends Component {
  constructor(props) {
    super(props);
  }

  handleSubmit() {
      this.props.checkSubmit(this.props.selectedOptions);

  }
  renderRedirect() {
    if (!this.props.hasError) {
      return <Link to="/order/2"><button>Go to Step 2</button></Link>;
    } else {
      return  <button onClick={this.handleSubmit.bind(this)}>Go to Step 2</button>;
    }
  }

  render() {
    const {
      options,
      selectedProductId,
      setProductOption,
      products,
      categories,
      selectedOptions,
      error,
      checkSubmit
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
                  <img src={category.img.sm} alt={category.id}/>
                  <div className={style.describe}>
                      <div>{product.title}</div>
                      <div>year: {product.year}</div>
                  </div>
                  <div className={style.count}>1</div>
                  <div className={style.price}>{product.hasOwnProperty('sale') ? product.sale : product.price}</div>
              </div>
              {CarOptions(selectedProductId)}
          </div>
      )
    };

      const setHasSelector = (arrtibute) => {
          return (
              <select onChange={setProductOption.bind(null, arrtibute)} defaultValue="none">
                  <option value="none" disabled>Select one</option>
                  <option value={true}>Yes</option>
                  <option value={false}>No</option>
              </select>
          )
      };

      const displayColor = (product, category) => {
        if (category.id === "taxi") {
          return (
          <input
            type="color"
            value={options.color.requirements.taxi}
            disabled
            />
          )
        } else if (category.id === "fireEngine") {
          return (
              <input
                  type="color"
                  value={options.color.requirements.taxi}
                  disabled
              />
          )
        } else {
          return (
            <input
              type="color"
              name='color'
              value= {selectedOptions.color}
              onChange={setProductOption.bind(null, 'color')}
            />
          )

        }

      };

      const displayNumberOfSeats = (product, category) => {
        if (category.id === "sportsCar") {
           return ( <div>{options.numSeats.requirements.sportsCar}</div>)
        } else if (category.id === "limousine") {
            return ( <div>{options.numSeats.requirements.limousine}</div>)
        } else if (category.id === "fireEngine") {
            return ( <div>{options.numSeats.requirements.fireEngine}</div>)
        } else {
          return (
            <input
              type="text"
              name='numSeats'
              className={style.num}
              value={selectedOptions.numSeats}
              onChange={setProductOption.bind(null, 'numSeats')}
            />
          )
        }

      };
      const displayDashboardLightsColor = () => {
        return (
            <input
                type="color"
                name='dashboardLightsColor'
                value= {selectedOptions.dashboardLightsColor}
                onChange={setProductOption.bind(null, 'dashboardLightsColor')}
            />
        )
      };

      const displayDropDownLists = (type, values) => {
          return (
              <select onChange={setProductOption.bind(null, type)}
                      defaultValue="none">
                  <option value="none">Select one</option>

                  {values.map((option, index) => {
                      return (
                          <option value={option} key={index}>
                              {option}
                          </option>
                      )})
                  }
              </select>
          )
      };

      const displayInteriorFabricColor = () => {
        return displayDropDownLists('interiorFabricColor', options.interiorFabricColor.values);
      };
      const displayDashBoardColor = () => {
        return displayDropDownLists('dashboardColor', options.dashboardColor.values);
      };
      const displayHubcapsMaterial = (product, category) => {
        return displayDropDownLists('hubcapsMaterial', options.hubcapsMaterial.values);
      };
      const selectGPS = () => {
        return (
            setHasSelector('hasGPS')
        )
      };
      const displayNumberOfExhausts = () => {//1-4
        return (
            <input
                type="text"
                name='numExhausts'
                className={style.num}
                value={selectedOptions.numExhausts}
                onChange={setProductOption.bind(null, 'numExhausts')}
            />
        )
      };
      const selectTintedWindows = (product, category) => {
          if (category.id === "fireEngine") {
              return (
                  <select onChange={setProductOption.bind(null, 'hasTintedWindows')}>
                      <option value={true} disabled>Yes</option>
                      <option value={false}>No</option>
                  </select>
              )
          } else if (category.id === "jeep") {
              return (
                  <select onChange={setProductOption.bind(null, 'hasTintedWindows')}>
                      <option value={true} disabled>Yes</option>
                      <option value={false}>No</option>
                  </select>
              )
          } else {
              return (
                  setHasSelector('hasTintedWindows')
              )
          }
      };
      const selectRadio = (product, category) => {
          if (category.id === "fireEngine") {
              return (
                  <select onChange={setProductOption.bind(null, 'hasRadio')}>
                      <option value={true} disabled>Yes</option>
                      <option value={false}>No</option>
                  </select>
              )
          } else {
              return (
                  setHasSelector('hasRadio')
              )
          }
      };

      const selectedRadio = (product, category) => {
        if (selectedOptions.hasRadio === 'true') {
            if (category.id === "taxi" || category.id === "stationWagon") {
                return (
                    <div className={style.oneline}>
                        <h4>{options.radioType.name}</h4>
                        {displayDropDownLists('radioType', options.radioType.values.taxi)}
                    </div>
                )
            } else if (category.id === "sportsCar" || category.id === "limousine") {
                return (
                    <div className={style.oneline}>
                        <h4>{options.radioType.name}</h4>
                        {displayDropDownLists('radioType', options.radioType.values.sportsCar)}
                    </div>
                )
            } else if (category.id === "truck" || category.id === "suv" || category.id === 'jeep') {
                return (
                    <div className={style.oneline}>
                        <h4>{options.radioType.name}</h4>
                        {displayDropDownLists('radioType', options.radioType.values.truck)}
                    </div>
                )
            } else if (category.id === "sedan" ) {
                return (
                    <div className={style.oneline}>
                        <h4>{options.radioType.name}</h4>
                        {displayDropDownLists('radioType', options.radioType.values.sedan)}
                    </div>
                )
            }
        }
      };

      const selectGolveBox = () => {
        return (
          setHasSelector('hasGloveBox')
        )
      };
      const selectCupholders = () => {
        return (
          setHasSelector('hasCupholders')
        )
      };
      const selectCupholderNum = () => {
        if (selectedOptions.hasCupholders === 'true') {
            return (
              <div className={style.oneline}>
                <h4>{options.numCupholders.name}</h4>
                <input
                  name='numCupholders'
                  value={selectedOptions.numCupholders}
                  onChange={setProductOption.bind(null, 'numCupholders')}
                />
              </div>

            )
        }
      };
      const selectCigarettLighters = (product, category) => {
        if (category.id === "fireEngine") {
          return (
            <select onChange={setProductOption.bind(null, 'hasCigaretteLighters')}>
              <option value={true} disabled>Yes</option>
              <option value={false}>No</option>
            </select>
          )
        } else {
          return (
            setHasSelector('hasCigaretteLighters')
          )
        }
      };
      const cigarettlighterNum = () => {
        if (selectedOptions.hasCigaretteLighters === 'true') {
          return (
            <div className={style.oneline}>
              <h4>{options.numCigaretteLighters.name}</h4>
              <input
                name='numCigaretteLighters'
                onChange={setProductOption.bind(null, 'numCigaretteLighters')}
                value={selectedOptions.numCigaretteLighters}
                type="number"
              />
            </div>
          )
        }
      };
      const spareTireSize = () => {
        return displayDropDownLists('spareTire', options.spareTire.values);
      };
      const chooseEngine = () => {
        return displayDropDownLists('engine', options.engine.values);
      };
      const selectAriConditioning = (product, category) => {
          if (category.id === "jeep") {
              return (
                  <select onChange={setProductOption.bind(null, 'hasAirConditioning')}>
                      <option value={true} disabled>Yes</option>
                      <option value={false}>No</option>
                  </select>
              )
          } else {
              return (
                setHasSelector('hasAirConditioning')
              )
          }
      };
      const selectFloormatsColor = () => {
        return (
          <input
            type="color"
            name='floormatsColor'
            value= {selectedOptions.floormatsColor}
            onChange={setProductOption.bind(null, 'floormatsColor')}
          />
        )
      };
      const selectHoodOra = () => {
        return (
          setHasSelector('hasHoodOrnament')

        )
      };
      const hoodOraType = () => {
        if (selectedOptions.hasHoodOrnament === 'true') {
          return(
            <div className={style.oras}>
              <h4>{options.hoodOrnament.name}</h4>
              <div className={style.oraType}>
                {Object.keys(options.hoodOrnament.values).map((value, index) => {
                  return (
                    <div key={index} className={style.singleOra}>
                      <img src={options.hoodOrnament.values[value].img} alt={options.hoodOrnament.values[value].id}/>
                      <label>
                        <input
                          type='radio'
                          name='hoodOrnament'
                          value={options.hoodOrnament.values[value].id}
                          onChange={setProductOption.bind(null, 'hoodOrnament')}
                          defaultChecked={value==='battleship'}
                        />
                        {value}
                      </label>
                    </div>
                    )
                })}
              </div>
            </div>

          )
        }
      };
      const selectTrunkMonkey = () => {
        return (
          setHasSelector('hasTrunkMonkey')
        )
      };
      const setTrunkMonekyType = () => {
        if (selectedOptions.hasTrunkMonkey === 'true') {
        return(
          <div className={style.oras}>
            <h4>{options.trunkMonkey.name}</h4>
            <div className={style.oraType}>
              {Object.keys(options.trunkMonkey.values).map((value, index) => {
                return (
                  <div key={index} className={style.singleOra}>
                    <img src={options.trunkMonkey.values[value].img.sm} alt={options.trunkMonkey.values[value].id}/>
                    <label>
                    <input
                      type='radio'
                      name='trunkMonkey'
                      value={options.trunkMonkey.values[value].id}
                      onChange={setProductOption.bind(null, 'trunkMonkey')}
                      defaultChecked={value==='capuchin'}
                      />
                        {value}
                      </label>
                    </div>
                  )
              })}
              </div>
          </div>
        )
        }
      };
      const selectMonogrammedSteeringWheelCover = () => {
        return (
          setHasSelector('hasMonogrammedSteeringWheelCover')
        )
      };

      const getMonogram = () => {
        if (selectedOptions.hasMonogrammedSteeringWheelCover === 'true') {
          return (
            <div className={style.oneline}>
              <h4>{options.monogram.name}</h4>
              <input
                onChange={setProductOption.bind(null, 'monogram')}
                value={selectedOptions.monogram}
              />
            </div>
          )
        }
      };


    const CarOptions = (id, index) => {
      const product = products[id];
      const category = categories[product.categoryId];
      return(
        <div className={style.allOptions}>
          <div className={style.options}>
            <div className={style.oneline}>
              <h4>* {options.color.name}</h4>
              {displayColor(product, category)}
            </div>
            <div className={style.oneline}>
              <h4>* {options.numSeats.name}</h4>
              {displayNumberOfSeats(product, category)}
            </div>
            <div className={style.oneline}>
              <h4>* {options.interiorFabricColor.name}</h4>
              {displayInteriorFabricColor()}
            </div>
            <div className={style.oneline}>
              <h4>* {options.dashboardColor.name}</h4>
              {displayDashBoardColor()}
            </div>
            <div className={style.oneline}>
              <h4>* {options.dashboardLightsColor.name}</h4>
              {displayDashboardLightsColor()}
            </div>
            <div className={style.oneline}>
              <h4>* {options.hubcapsMaterial.name}</h4>
              {displayHubcapsMaterial()}
            </div>
            <div className={style.oneline}>
              <h4>{options.hasGPS.name}</h4>
              {selectGPS()}
            </div>
            <div className={style.oneline}>
              <h4>* {options.numExhausts.name}</h4>
              {displayNumberOfExhausts()}
            </div>
            <div className={style.oneline}>
              <h4>{options.hasTintedWindows.name}</h4>
              {selectTintedWindows(product, category)}
            </div>
            <div className={style.oneline}>
              <h4>{options.hasRadio.name}</h4>
              {selectRadio(product, category)}
            </div>
            <div>
              {selectedRadio(product, category)}
            </div>
            <div className={style.oneline}>
              <h4>{options.hasGloveBox.name}</h4>
              {selectGolveBox()}
            </div>
            <div className={style.oneline}>
              <h4>{options.hasCupholders.name}</h4>
              {selectCupholders()}
            </div>
            <div>
              {selectCupholderNum()}
            </div>
            <div className={style.oneline}>
              <h4>{options.hasCigaretteLighters.name}</h4>
              {selectCigarettLighters(product, category)}
            </div>
            <div>
              {cigarettlighterNum()}
            </div>
            <div className={style.oneline}>
              <h4>*{options.spareTire.name}</h4>
              {spareTireSize()}
            </div>
            <div className={style.oneline}>
              <h4>*{options.engine.name}</h4>
              {chooseEngine()}
            </div>
            <div className={style.oneline}>
              <h4>{options.hasAirConditioning.name}</h4>
              {selectAriConditioning(product, category)}
            </div>
            <div className={style.oneline}>
              <h4>*{options.floormatsColor.name}</h4>
              {selectFloormatsColor()}
            </div>
          </div>
          <div className={style.options}>
            <h2>Premium options</h2>
            <div>Premium options will add an extra $50 to the base price of the vehicle.</div>
            <div className={style.oneline}>
              <h4>{options.hasHoodOrnament.name}</h4>
              {selectHoodOra()}
            </div>
            <div>
              {hoodOraType()}
            </div>
            <div className={style.oneline}>
              <h4>{options.hasTrunkMonkey.name}</h4>
              {selectTrunkMonkey()}
            </div>
            <div>
              {setTrunkMonekyType()}
            </div>
            <div className={style.oneline}>
              <h4>{options.hasMonogrammedSteeringWheelCover.name}</h4>
              {selectMonogrammedSteeringWheelCover()}
            </div>
            <div>
              {getMonogram()}
            </div>

          </div>

        </div>
      )
    };

    return (
        <div className={style.shoppingCart}>
            <h2>Shopping Cart</h2>
            <div className={style.title}>
                <h4>Photo</h4>
                <h4>Description</h4>
                <h4>Quantity</h4>
                <h4>Price</h4>
                {/*<h4>Delete</h4>*/}
            </div>
            {/*{OrderedCars()}*/}
            {orderCar()}

            {this.renderRedirect()}

            {Object.keys(error).map((key, index) => {
                return <Error key={index} error={error[key]}/>
            })}
        </div>
    )
  }
}

OrderStep1.propTypes = {
  options: PropTypes.object.isRequired,
  selectedProductId: PropTypes.string
};

export default OrderStep1;
