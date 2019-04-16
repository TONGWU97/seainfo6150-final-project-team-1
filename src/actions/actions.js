import { get, has } from 'lodash';

export const selectProductId = ({ id }) => ({
 type: 'SELECT_PRODUCT',
 payload: { id }
});

export const viewProduct = ({ id }) => ({
 type: 'VIEW_PRODUCT',
 payload: { id }
});

export const setUserInfo = ({ id, e }) => (dispatch, getState) => {
  dispatch(removeUserInfoError(id));
  const value = e.target.value;
  if (value === null || value === '') {
    dispatch(removeInfo(id));
    dispatch(setUserInfoError({errorName:id, error: 'You must fill in your name'}));
  } else {
    dispatch(setInfo({ id, value }));
  }
};
export const setUserBillingInfo = ({id, value}) => (dispatch, getState) => {
    dispatch(removeUserInfoError(id));
    if (value === null || value === '') {
        dispatch(removeInfo(id));
        dispatch(setUserInfoError({errorName:id, error: 'You must fill in your name'}));
    } else {
        dispatch(setInfo({ id, value }));
    }
};

export const setProductOption = ({ id, e }) => (dispatch, getState) => {
  dispatch(removeError(id));

  let value = e.target.hasOwnProperty('checked')
    ? e.target.checked
    : e.target.value;
  switch (id) {
    case 'color':
      dispatch(setColor(value));
      break;
    case 'numSeats':
      dispatch(setNumSeats(parseInt(value, 10)));
      break;
    case 'interiorFabricColor':
      dispatch(setInteriorFabricColor(value));
      break;
    case 'dashboardColor':
      dispatch(setDashboardColor(value));
      break;
    case 'dashboardLightsColor':
      dispatch(setDashboardLightsColor(value));
      break;
    case 'hubcapsMaterial':
      dispatch(setHubcapsMaterial(value));
      break;
    case 'hasGPS':
      dispatch(setHasGPS(value));
      break;
    case 'numExhausts':
      dispatch(setNumExhausts(parseInt(value, 10)));
      break;
    case 'hasTintedWindows':
      dispatch(setHasTintedWindows(value));
      break;
    case 'hasRadio':
      dispatch(setHasRadio(value));
      break;
    case 'radioType':
      dispatch(setRadioType(value));
      break;
    case 'hasGloveBox':
      dispatch(setHasGloveBox(value));
      break;
    case 'hasCupholders':
      dispatch(setHasCupholders(value));
      break;
    case 'numCupholders':
      dispatch(setNumCupholders(parseInt(value, 10)));
      break;
    case 'hasCigaretteLighters':
      dispatch(setHasCigaretteLighters(value));
      break;
    case 'numCigaretteLighters':
      dispatch(setNumCigaretteLighters(parseInt(value, 10)));
      break;
    case 'spareTire':
      dispatch(setSpareTire(value));
      break;
    case 'hasHoodOrnament':
      dispatch(setHasHoodOrnament(value));
      break;
    case 'hoodOrnament':
      value = e.target.value;
      dispatch(setHoodOrnament(value));
      break;
    case 'engine':
      dispatch(setEngine(value));
      break;
    case 'hasAirConditioning':
      dispatch(setHasAirConditioning(value));
      break;
    case 'hasTrunkMonkey':
      dispatch(setHasTrunkMonkey(value));
      break;
    case 'trunkMonkey':
      value = e.target.value;
      dispatch(setTrunkMonkey(value));
      break;
    case 'floormatsColor':
      dispatch(setFloormatsColor(value));
      break;
    case 'hasMonogrammedSteeringWheelCover':
      dispatch(setHasMonogrammedSteeringWheelCover(value));
      break;
    case 'monogram':
      dispatch(setMonogram(value));
      break;
    default:
  }
}

const removeError = (errorName) => ({
  type: 'REMOVE_ERROR',
  payload: {errorName}
});
const removeUserInfoError = (errorName) => ({
  type: 'REMOVE_SUBMIT_USERINFO_ERROR',
  payload: {errorName}
});

const removeOption = (id) => ({
  type: 'REMOVE_OPTION',
  payload: { id }
});

const setError = (errorName, error) => ({
  type: 'SET_ERROR',
  payload: {
    [`${errorName.errorName}`]: errorName.error}
});

const setUserInfoError = (errorName, error) => ({
  type: 'SET_SUBMIT_USERINFO_ERROR',
  payload: {
    [`${errorName.errorName}`]: errorName.error}
});

const setOption = ({ id, value }) => ({
  type: 'SET_OPTION',
  payload: {
    [`${id}`]: value
  }
});

const setInfo = ({ id, value }) => ({
  type: 'SET_INFO',
  payload: {
    [`${id}`]: value
  }
});
const removeInfo = (id) => ({
  type: 'REMOVE_INFO',
  payload: {id}
});

const normalizeBoolean = (value) => {
  return value === 'on' || value === 'yes' || value;
}

const setColor = (color) => (dispatch, getState) => {
  const { options, products, selectedProductId } = getState();
  const selectedProduct = products[selectedProductId];
  if (Object.keys(options.color.requirements).includes(selectedProduct.type)) {
    color = options.color.requirements[selectedProduct.type];
  }
  dispatch(setOption({ id: 'color', value: color }));
}

const setNumSeats = (numSeats) => (dispatch, getState) => {
  const { options, products, selectedProductId } = getState();
  const selectedProduct = products[selectedProductId];
  const maximumNumSeats = options.numSeats.requirements.maximumNum;
  const minimumNumSeats = options.numSeats.requirements.minimumNum;

  if (Object.keys(options.numSeats.requirements).includes(selectedProduct.type)) {
    numSeats = options.numSeats.requirements[selectedProduct.type];
  }
  if (isNaN(numSeats)) {
    numSeats = 0
  }
  if (numSeats > maximumNumSeats) {
    dispatch(setError({errorName: 'numSeats', error: `Vehicles can have a maximum of ${maximumNumSeats} seats.`}));
  } else if (numSeats < minimumNumSeats) {
    dispatch(setError({errorName: 'numSeats', error: `Vehicles can have a minimum of ${minimumNumSeats} seats.`}));
  } else {
    dispatch(removeError('numSeats'))
  }
  dispatch(setOption({ id: 'numSeats', value: numSeats }));
}

const setInteriorFabricColor = (interiorFabricColor) => (dispatch, getState) => {
  dispatch(setOption({ id: 'interiorFabricColor', value: interiorFabricColor }));
}

const setDashboardColor = (dashboardColor) => (dispatch, getState) => {
  dispatch(setOption({ id: 'dashboardColor', value: dashboardColor }));
}

const setDashboardLightsColor = (dashboardLightsColor) => (dispatch, getState) => {
  dispatch(setOption({ id: 'dashboardLightsColor', value: dashboardLightsColor }));
}

const setHubcapsMaterial = (hubcapsMaterial) => (dispatch, getState) => {
  dispatch(setOption({ id: 'hubcapsMaterial', value: hubcapsMaterial }));
}

const setHasGPS = (hasGPS) => (dispatch, getState) => {
  const value = normalizeBoolean(hasGPS);
  if (value === 'true') {
    dispatch(setOption({ id: 'hasGPS', value }));
  } else {
    dispatch(removeOption('hasGPS'));
  }
}

const setNumExhausts = (numExhausts) => (dispatch, getState) => {
  const { options } = getState();
  const maximumNumExhausts = options.numExhausts.requirements.maximumNum;
  const minimumNumExhausts = options.numExhausts.requirements.minimumNum;

  if (numExhausts > maximumNumExhausts) {
    dispatch(setError({errorName: 'numExhausts', error: `Vehicles can have a maximum of ${maximumNumExhausts} exhausts.`}));
  } else if (numExhausts < minimumNumExhausts) {
    dispatch(setError({errorName: 'numExhausts', error: `Vehicles can have a minimum of ${minimumNumExhausts} exhausts.`}));
  } else {
      dispatch(removeError('numExhausts'))
  }

  dispatch(setOption({ id: 'numExhausts', value: numExhausts }));
}

const setHasTintedWindows = (hasTintedWindows) => (dispatch, getState) => {
  const { options, products, selectedProductId } = getState();
  const selectedProduct = products[selectedProductId];
  const hasProductRequirement = has(options.hasTintedWindows.requirements, selectedProduct.type);

  if (hasProductRequirement) {
    hasTintedWindows = get(options.hasTintedWindows.requirements, selectedProduct.type)

    if (!hasTintedWindows) {
      dispatch(setError({errorName:'hasTintedWindows', error: 'The selected vehicle does not support tinted windows.'}));
    } else {
        dispatch(removeError('hasTintedWindows'))
    }
  }

  const value = normalizeBoolean(hasTintedWindows);
  if (value === 'true') {
    dispatch(setOption({ id: 'hasTintedWindows', value }));
  } else {
    dispatch(removeOption('hasTintedWindows'));
  }
}

const setHasRadio = (hasRadio) => (dispatch, getState) => {
  const { options, products, selectedProductId } = getState();
  const selectedProduct = products[selectedProductId];
  const hasProductRequirement = has(options.hasRadio.requirements, selectedProduct.type);

  if (hasProductRequirement) {
    hasRadio = get(options.hasRadio.requirements, selectedProduct.type);

    if (!hasRadio) {
      dispatch(setError({errorName:'hasRadio', error: 'The selected vehicle does not support radios.'}));
    } else {
      dispatch(removeError('hasRadio'))
    }
  }

  const value = normalizeBoolean(hasRadio);
  if (value === 'true') {
    dispatch(setOption({ id: 'hasRadio', value }));
  } else {
    dispatch(removeOption('hasRadio'));
  }
}

const setRadioType = (radioType) => (dispatch, getState) => {
  dispatch(setOption({ id: 'radioType', value: radioType }));
}

const setHasGloveBox = (hasGloveBox) => (dispatch, getState) => {
  const value = normalizeBoolean(hasGloveBox);
  if (value === 'true') {
    dispatch(setOption({ id: 'hasGloveBox', value }));
  } else {
    dispatch(removeOption('hasGloveBox'));
  }
}

const setHasCupholders = (hasCupholders) => (dispatch, getState) => {
  const value = normalizeBoolean(hasCupholders);
  if (value === 'true') {
    dispatch(setOption({ id: 'hasCupholders', value }));
  } else {
    dispatch(removeOption('hasCupholders'));
    dispatch(removeOption('numCupholders'));
  }
}

const setNumCupholders = (numCupholders) => (dispatch, getState) => {
  const { options } = getState();
  const maximumNumCupholders = options.numCupholders.requirements.maximumNum;

  if (numCupholders > maximumNumCupholders) {
    dispatch(setError({errorName:'numCupholders', error: `Vehicles can have a maximum of ${maximumNumCupholders} cupholders.`}));
  } else if (numCupholders < 0) {
    dispatch(setError({errorName:'numCupholders', error: `Vehicles cannot have negative number of cupholders.`}));
  } else {
      dispatch(removeError('numCupholders'))
  }

  dispatch(setOption({ id: 'numCupholders', value: numCupholders }));
}

const setHasCigaretteLighters = (hasCigaretteLighters) => (dispatch, getState) => {
  const { options, products, selectedProductId } = getState();
  const selectedProduct = products[selectedProductId];
  const hasProductRequirement = has(options.hasCigaretteLighters.requirements, selectedProduct.type);

  if (hasProductRequirement) {
    hasCigaretteLighters = get(options.hasCigaretteLighters.requirements, selectedProduct.type)

    if (!hasCigaretteLighters) {
      dispatch(setError({errorName:'hasCigaretteLighters', error: 'The selected vehicle does not support cigarette lighters.'}));
    } else {
        dispatch(removeError('hasCigaretteLighters'))
    }
  }

  const value = normalizeBoolean(hasCigaretteLighters);
  if (value === 'true') {
    dispatch(setOption({ id: 'hasCigaretteLighters', value }));
  } else {
    dispatch(removeOption('hasCigaretteLighters'));
    dispatch(removeOption('numCigaretteLighters'));
  }
}

const setNumCigaretteLighters = (numCigaretteLighters) => (dispatch, getState) => {
  dispatch(setOption({ id: 'numCigaretteLighters', value: numCigaretteLighters }));
}

const setSpareTire = (spareTire) => (dispatch, getState) => {
  dispatch(setOption({ id: 'spareTire', value: spareTire }));
}

const setHasHoodOrnament = (hasHoodOrnament) => (dispatch, getState) => {
  const value = normalizeBoolean(hasHoodOrnament);
  if (value === 'true') {
    const { options } = getState();
    dispatch(setOption({ id: 'hasHoodOrnament', value }));
    dispatch(setOption({ id: 'hoodOrnament', value: options.hoodOrnament.values['battleship'].id }));
  } else {
    dispatch(removeOption('hasHoodOrnament'));
  }
}

const setHoodOrnament = (hoodOrnament) => (dispatch, getState) => {
  dispatch(setOption({ id: 'hoodOrnament', value: hoodOrnament }));
}

const setEngine = (engine) => (dispatch, getState) => {
  dispatch(setOption({ id: 'engine', value: engine }));
}

const setHasAirConditioning = (hasAirConditioning) => (dispatch, getState) => {
  const { options, products, selectedProductId } = getState();
  const selectedProduct = products[selectedProductId];
  const hasProductRequirement = has(options.hasAirConditioning.requirements, selectedProduct.type);

  if (hasProductRequirement) {
    hasAirConditioning = get(options.hasAirConditioning.requirements, selectedProduct.type)

    if (!hasAirConditioning) {
      dispatch(setError({errorName:'hasAirConditioning', error: 'The selected vehicle does not support air conditioning.'}));
    } else {
        dispatch(removeError('hasAirConditioning'))
    }
  }

  const value = normalizeBoolean(hasAirConditioning);
  if (value === 'true') {
    dispatch(setOption({ id: 'hasAirConditioning', value }));
  } else {
    dispatch(removeOption('hasAirConditioning'));
  }
}


const setHasTrunkMonkey = (hasTrunkMonkey) => (dispatch, getState) => {
  const value = normalizeBoolean(hasTrunkMonkey);
  if (value === 'true') {
    const { options } = getState();
    dispatch(setOption({ id: 'hasTrunkMonkey', value }));
    dispatch(setOption({ id: 'trunkMonkey', value: options.trunkMonkey.values['capuchin'].id }));
  } else {
    dispatch(removeOption('hasTrunkMonkey'));
    dispatch(removeOption('trunkMonkey'));
  }
}

const setTrunkMonkey = (trunkMonkey) => (dispatch, getState) => {
  dispatch(setOption({ id: 'trunkMonkey', value: trunkMonkey }));
}

const setFloormatsColor = (floormatsColor) => (dispatch, getState) => {
  dispatch(setOption({ id: 'floormatsColor', value: floormatsColor }));
}


const setHasMonogrammedSteeringWheelCover = (hasMonogrammedSteeringWheelCover) => (dispatch, getState) => {
  const value = normalizeBoolean(hasMonogrammedSteeringWheelCover);
  if (value === 'true') {
    dispatch(setOption({ id: 'hasMonogrammedSteeringWheelCover', value }));
  } else {
    dispatch(removeOption('hasMonogrammedSteeringWheelCover'));
    dispatch(removeOption('monogram'));
  }
}

const setMonogram = (monogram) => (dispatch, getState) => {
  const { options } = getState();
  const maximumNumMonogramLetters = options.monogram.requirements.maximumNum;

  if (!(/[a-zA-Z]/).test(monogram)) {
    dispatch(setError({errorName:'monogram', error: `Monograms can only be letters`}));
  }else if (monogram.length < maximumNumMonogramLetters || monogram.length > maximumNumMonogramLetters) {
    dispatch(setError({errorName:'monogram', error: `Vehicles must have ${maximumNumMonogramLetters} letters in the monogram.`}));
  } else {
      dispatch(removeError('monogram'))
  }

  dispatch(setOption({ id: 'monogram', value: monogram }));
}

export const checkSubmit = (selectedOptions) => (dispatch, getState) => {
    let hasErrorInSubmitFirstStep = false;
    if (!selectedOptions.hasOwnProperty('color')){
        hasErrorInSubmitFirstStep = true;
        dispatch(setError({errorName:'color', error: 'You must select one color'}));
    }
    if (!selectedOptions.hasOwnProperty('numSeats')){
        hasErrorInSubmitFirstStep = true;
        dispatch(setError({errorName:'numSeats', error: 'You must set the number of seats'}));
    }
    if (!selectedOptions.hasOwnProperty('interiorFabricColor')){
        hasErrorInSubmitFirstStep = true;
        dispatch(setError({errorName:'interiorFabricColor', error: 'You must set the interior fabric color'}));
    }
    if (!selectedOptions.hasOwnProperty('dashboardColor')){
        hasErrorInSubmitFirstStep = true;
        dispatch(setError({errorName:'dashboardColor', error: 'You must choose the dashboard color'}));
    }
    if (!selectedOptions.hasOwnProperty('dashboardLightsColor')){
        hasErrorInSubmitFirstStep = true;
        dispatch(setError({errorName:'dashboardLightsColor', error: 'You must choose the dashboard lights color'}));
    }
    if (!selectedOptions.hasOwnProperty('hubcapsMaterial')){
        hasErrorInSubmitFirstStep = true;
        dispatch(setError({errorName:'hubcapsMaterial', error: 'You must choose the hubcaps material'}));
    }
    if (!selectedOptions.hasOwnProperty('numExhausts')){
        hasErrorInSubmitFirstStep = true;
        dispatch(setError({errorName:'numExhausts', error: 'You must set the number of exhausts'}));
    }
    if (!selectedOptions.hasOwnProperty('spareTire')){
        hasErrorInSubmitFirstStep = true;
        dispatch(setError({errorName:'spareTire', error: 'You must choose the spare tire'}));
    }
    if (!selectedOptions.hasOwnProperty('engine')){
        hasErrorInSubmitFirstStep = true;
        dispatch(setError({errorName:'engine', error: 'You must choose the engine'}));
    }
    if (!selectedOptions.hasOwnProperty('floormatsColor')){
        hasErrorInSubmitFirstStep = true;
        dispatch(setError({errorName:'floormatsColor', error: 'You must choose the floormats color'}));
    }
    if (!hasErrorInSubmitFirstStep) {
      // if (selectedOptions.numSeats < 0)
        dispatch(removeError('submitFirstStep'));
    }

};

export const checkUserInfoSubmit = (userInfo) => (dispatch, getState) => {
  let hasErrorInSubmitSecondStep = false;
  if (!userInfo.hasOwnProperty('buyerName') || userInfo.buyerName === null || userInfo.buyerName.length === 0){
    hasErrorInSubmitSecondStep = true;
    dispatch(setUserInfoError({errorName:'buyerName', error: 'You must fill in your name'}));
  }
  if (!userInfo.hasOwnProperty('ShipmentStreetAddress') || userInfo.ShipmentStreetAddress === null || userInfo.ShipmentStreetAddress.length === 0){
    hasErrorInSubmitSecondStep = true;
    dispatch(setUserInfoError({errorName:'ShipmentStreetAddress', error: 'You must fill in your shipment street address'}));
  }
  if (!userInfo.hasOwnProperty('ShipmentCity') || userInfo.ShipmentCity === null || userInfo.ShipmentCity.length === 0){
    hasErrorInSubmitSecondStep = true;
    dispatch(setUserInfoError({errorName:'ShipmentCity', error: 'You must fill in your shipment city'}));
  }
  if (!userInfo.hasOwnProperty('ShipmentState') || userInfo.ShipmentState === null || userInfo.ShipmentState.length === 0){
    hasErrorInSubmitSecondStep = true;
    dispatch(setUserInfoError({errorName:'ShipmentState', error: 'You must fill in your shipment state'}));
  }
  if (!userInfo.hasOwnProperty('ShipmentZipeCode') || userInfo.ShipmentZipeCode === null || userInfo.ShipmentZipeCode.length === 0){
    hasErrorInSubmitSecondStep = true;
    dispatch(setUserInfoError({errorName:'ShipmentZipeCode', error: 'You must fill in your shipment zipe code'}));
  }
  if (!userInfo.hasOwnProperty('BillingStreetAddress') || userInfo.BillingStreetAddress === null || userInfo.BillingStreetAddress.length === 0){
    hasErrorInSubmitSecondStep = true;
    dispatch(setUserInfoError({errorName:'BillingStreetAddress', error: 'You must fill in your billing street address'}));
  }
  if (!userInfo.hasOwnProperty('BillingCity') || userInfo.BillingCity === null || userInfo.BillingCity.length === 0){
    hasErrorInSubmitSecondStep = true;
    dispatch(setUserInfoError({errorName:'BillingCity', error: 'You must fill in your billing city'}));
  }
  if (!userInfo.hasOwnProperty('BillingState') || userInfo.BillingState === null || userInfo.BillingState.length === 0){
    hasErrorInSubmitSecondStep = true;
    dispatch(setUserInfoError({errorName:'BillingState', error: 'You must fill in your billing state'}));
  }
  if (!userInfo.hasOwnProperty('BillingZipeCode') || userInfo.BillingZipeCode === null || userInfo.BillingZipeCode.length === 0){
    hasErrorInSubmitSecondStep = true;
    dispatch(setUserInfoError({errorName:'BillingZipeCode', error: 'You must fill in your billing zipe code'}));
  }
  if (!userInfo.hasOwnProperty('phoneNumber') || userInfo.phoneNumber === null || userInfo.phoneNumber.length === 0){
    hasErrorInSubmitSecondStep = true;
    dispatch(setUserInfoError({errorName:'phoneNumber', error: 'You must fill in your phone number'}));
  }
  if (!userInfo.hasOwnProperty('cellNumber') || userInfo.cellNumber === null || userInfo.cellNumber.length === 0){
    hasErrorInSubmitSecondStep = true;
    dispatch(setUserInfoError({errorName:'cellNumber', error: 'You must fill in your cell number'}));
  }
  if (!userInfo.hasOwnProperty('dateOfBirth') || userInfo.dateOfBirth === null || userInfo.dateOfBirth.length === 0){
    hasErrorInSubmitSecondStep = true;
    dispatch(setUserInfoError({errorName:'dateOfBirth', error: 'You must fill in your date of birth'}));
  }
  if (!hasErrorInSubmitSecondStep) {
    // if (selectedOptions.numSeats < 0)
    dispatch(removeUserInfoError('submitSecondStep'));
  }
};
