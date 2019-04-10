import { omit } from 'lodash';
import categories from '../data/categories.json';
import options from '../data/options.json';
import products from '../data/products.json';

export default (
  state={
    categories,
    error: {
      'submitFirstStep': 'Please make sure you have filled out all required fields',
      'color': 'You must select one color',
      'numSeats': 'You must set the number of seats',
      'interiorFabricColor': 'You must set the interior fabric color',
      'dashboardColor': 'You must choose the dashboard color',
      'dashboardLightsColor': 'You must choose the dashboard lights color',
      'hubcapsMaterial': 'You must choose the hubcaps material',
      'numExhausts': 'You must set the number of exhausts',
      'spareTire': 'You must choose the spare tire',
      'engine': 'You must choose the engine',
      'floormatsColor': 'You must choose the floormats color',
    },
    userInfoError:{
        'submitSecondStep': 'Please make sure you have filled out all required fields',
        'buyerName': 'You must fill in your name',
        'ShipmentStreetAddress': 'You must fill in your shipment street address',
        'ShipmentCity': 'You must fill in your shipment city',
        'ShipmentState': 'You must fill in your shipment state',
        'ShipmentZipeCode': 'You must fill in your shipment zipe code',
        'BillingStreetAddress': 'You must fill in your billing street address',
        'BillingCity': 'You must fill in your billing city',
        'BillingState': 'You must fill in your billing state',
        'BillingZipeCode': 'You must fill in your billing zipe code',
        'phoneNumber': 'You must fill in your phone number',
        'cellNumber': 'You must fill in your cell number',
        'dateOfBirth': 'You must fill in your date of birth',
    },
    userInfoHasError:true,
    hasError: true,
    options,
    products,
    selectedOptions: {},
    selectedProductId: null,
    viewedProducts: [],
    userInfo:{}
  },
  action={}
) => {
  switch (action.type) {
    case 'SELECT_PRODUCT':
      let selectedOptions;

      const selectedProduct = state.products[action.payload.id];
      switch (selectedProduct.categoryId) {
        case 'limousine':
          selectedOptions = {
            numSeats: 8
          };
          state.error = {
            'submitFirstStep': 'Please make sure you have filled out all required fields',
            'color': 'You must select one color',
            'interiorFabricColor': 'You must set the interior fabric color',
            'dashboardColor': 'You must choose the dashboard color',
            'dashboardLightsColor': 'You must choose the dashboard lights color',
            'hubcapsMaterial': 'You must choose the hubcaps material',
            'numExhausts': 'You must set the number of exhausts',
            'spareTire': 'You must choose the spare tire',
            'engine': 'You must choose the engine',
            'floormatsColor': 'You must choose the floormats color',
          };
          break;
          case 'sportsCar':
          selectedOptions = {
            numSeats: 2
          };
          state.error = {
            'submitFirstStep': 'Please make sure you have filled out all required fields',
            'color': 'You must select one color',
            'interiorFabricColor': 'You must set the interior fabric color',
            'dashboardColor': 'You must choose the dashboard color',
            'dashboardLightsColor': 'You must choose the dashboard lights color',
            'hubcapsMaterial': 'You must choose the hubcaps material',
            'numExhausts': 'You must set the number of exhausts',
            'spareTire': 'You must choose the spare tire',
            'engine': 'You must choose the engine',
            'floormatsColor': 'You must choose the floormats color',
          };
          break;
        case 'taxi':
          selectedOptions = {
            color: '#ffff00'
          };
          state.error = {
            'submitFirstStep': 'Please make sure you have filled out all required fields',
            'numSeats': 'You must set the number of seats',
            'interiorFabricColor': 'You must set the interior fabric color',
            'dashboardColor': 'You must choose the dashboard color',
            'dashboardLightsColor': 'You must choose the dashboard lights color',
            'hubcapsMaterial': 'You must choose the hubcaps material',
            'numExhausts': 'You must set the number of exhausts',
            'spareTire': 'You must choose the spare tire',
            'engine': 'You must choose the engine',
            'floormatsColor': 'You must choose the floormats color',
          };
          break;
        case 'fireEngine':
          selectedOptions = {
            color: '#ff0000',
            numSeats: 2,
            hasTintedWindows: false,
            hasRadio: false,
            hasCigaretteLighters: false
          };
          state.error = {
            'submitFirstStep': 'Please make sure you have filled out all required fields',
            'interiorFabricColor': 'You must set the interior fabric color',
            'dashboardColor': 'You must choose the dashboard color',
            'dashboardLightsColor': 'You must choose the dashboard lights color',
            'hubcapsMaterial': 'You must choose the hubcaps material',
            'numExhausts': 'You must set the number of exhausts',
            'spareTire': 'You must choose the spare tire',
            'engine': 'You must choose the engine',
            'floormatsColor': 'You must choose the floormats color',
          };
          break;
        case 'jeep':
          selectedOptions = {
            hasTintedWindows: false,
            hasAirConditioning: false
          };
          state.error = {
            'submitFirstStep': 'Please make sure you have filled out all required fields',
            'color': 'You must select one color',
            'numSeats': 'You must set the number of seats',
            'interiorFabricColor': 'You must set the interior fabric color',
            'dashboardColor': 'You must choose the dashboard color',
            'dashboardLightsColor': 'You must choose the dashboard lights color',
            'hubcapsMaterial': 'You must choose the hubcaps material',
            'numExhausts': 'You must set the number of exhausts',
            'spareTire': 'You must choose the spare tire',
            'engine': 'You must choose the engine',
            'floormatsColor': 'You must choose the floormats color',
          };
          break;
        default:
          selectedOptions = {};
          state.error = {
            'submitFirstStep': 'Please make sure you have filled out all required fields',
            'color': 'You must select one color',
            'numSeats': 'You must set the number of seats',
            'interiorFabricColor': 'You must set the interior fabric color',
            'dashboardColor': 'You must choose the dashboard color',
            'dashboardLightsColor': 'You must choose the dashboard lights color',
            'hubcapsMaterial': 'You must choose the hubcaps material',
            'numExhausts': 'You must set the number of exhausts',
            'spareTire': 'You must choose the spare tire',
            'engine': 'You must choose the engine',
            'floormatsColor': 'You must choose the floormats color',
          };
      }

      return {
        ...state,
        selectedProductId: action.payload.id,
        selectedOptions,
      };
    case 'VIEW_PRODUCT':
      return {
        ...state,
        viewedProducts: [action.payload.id, ...state.viewedProducts]
      };
    case 'REMOVE_OPTION':
      return {
        ...state,
        selectedOptions: omit(state.selectedOptions, [action.payload.id])
      };
    case 'SET_OPTION':
      return {
        ...state,
        selectedOptions: {
          ...state.selectedOptions,
          ...action.payload
        }
      };
    case 'SET_INFO':
      return {
        ...state,
        userInfo: {
          ...state.userInfo,
          ...action.payload
        }
      };
      case 'REMOVE_INFO':
        return {
            ...state,
            userInfo: omit(state.userInfo, [action.payload.id])
        };
    case 'SET_ERROR':
      let error=state.error;
      const errorId = Object.keys(action.payload)[0];
      error[errorId] = action.payload[errorId];
      return {
        ...state,
        error: error,
        hasError: true,
      };
    case 'REMOVE_ERROR':
      if (!action.payload || !action.payload.errorName) {
        return state;
      }

      let currentError = omit(state.error, [action.payload.errorName]);
      if (Object.keys(currentError).length === 1 && Object.keys(currentError)[0] === 'submitFirstStep') {
        currentError = omit(currentError, ['submitFirstStep']);
      }

      return {
        ...state,
        error: currentError,
        hasError: Object.keys(currentError).length !== 0
      };
      case 'SET_SUBMIT_USERINFO_ERROR':
        let userError=state.userInfoError;
        const userErrorId = Object.keys(action.payload)[0];
        userError[userErrorId] = action.payload[userErrorId];
        return {
          ...state,
          userInfoError: userError,
          userInfoHasError: true,
        };
      case 'REMOVE_SUBMIT_USERINFO_ERROR':
        if (!action.payload || !action.payload.errorName) {
          return state;
        }
        let currentUserInfoError = omit(state.userInfoError, [action.payload.errorName]);
        if (Object.keys(currentUserInfoError).length === 1 && Object.keys(currentUserInfoError)[0] === 'submitSecondStep') {
            currentUserInfoError = omit(currentUserInfoError, ['submitSecondStep']);
        }
        return {
          ...state,
          userInfoError: currentUserInfoError,
          userInfoHasError: Object.keys(currentUserInfoError).length !== 0
        };
    default:
      return state
  }
}
