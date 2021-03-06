import React from 'react';
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import styles from './App.module.css';

import {
  selectProductId,
  setProductOption,
  setUserInfo,
  viewProduct,
  checkSubmit,
  checkUserInfoSubmit,
  setUserBillingInfo
} from './actions/actions';


// components
import Home from './Home/Home';
import About from './About/About';
import Contact from './Contact/Contact';
import AllProducts from './AllProducts/AllProducts';
import Categories from './Categories/Categories';
import CategoryProducts from './CategoryProducts/CategoryProducts';
// import Error from './Error/Error';
import ProductDetail from './ProductDetail/ProductDetail';
import OrderStep1 from './Order/OrderStep1';
import OrderStep2 from './Order/OrderStep2';
import Summary from './Order/Summary';
import ThankYou from './Order/ThankYou';
import NotFound from './NotFound/NotFound';

import Header from './Header';
import Footer from './Footer';
import TopButton from './TopButton';
import ViewedProducts from "./ViewedProducts/ViewedProducts";


let App = (props) => (
  <Router>
    <div className={styles.container}>

      <Header/>

      {/* start list of product category links */}
      <Categories categories={Object.values(props.categories)} />
      {/* end list of product category links */}

      <main>
        {/* start error display -- I suggest you leave this here */}
        {/*{*/}
          {/*props.error &&*/}

          {/*Object.keys(props.error).map((error, index) => {*/}
              {/*return <Error key={index} error={error} />*/}
          {/*})*/}

        {/*}*/}
        {/* end error display */}
        
        <Switch>
          <Route
            exact path='/'
            render={() => <Home {...props} />}
          />
          <Route
            exact path='/products'
            render={() => {
              const sortedProducts = Object.values(props.products).sort((a,b) => b.year - a.year);
              return (
                <AllProducts
                  categories={props.categories}
                  products={sortedProducts}
                  viewedProducts={props.viewedProducts}
                  allProducts={props.products}
                />
              );
            }}
          />
          <Route
            exact path='/products/:category'
            render={routerProps => {
              const categoryId = routerProps.match.params.category;
              const category = props.categories[categoryId];

              const products = Object.values(props.products).filter(product =>
                product.categoryId === categoryId
              );
              const sortedProducts = Object.values(products).sort((a,b) => b.year - a.year);


              return (
                <CategoryProducts
                  categories={props.categories}
                  category={category}
                  products={sortedProducts}
                />
              );
            }}
          />
          <Route
            path='/products/:category/:id'
            render={routerProps => {
              const id = routerProps.match.params.id;
              const product = props.products[id];

              return (
                <ProductDetail {...props} product={product} />
              );
            }}
          />
          <Route
            exact path='/order/1'
            render={() => <OrderStep1 {...props} />}
          />
          <Route
            exact path='/order/2'
            render={() => <OrderStep2 {...props} />}
          />
          <Route
            exact path='/order/summary'
            render={() => <Summary {...props} />}
          />
          <Route
            exact path='/order/thank-you'
            render={() => <ThankYou />}
          />
          <Route
            exact path='/about'
            render={() => <About {...props} />}
          />
          <Route
            exact path='/contact'
            render={() => <Contact {...props} />}
          />
          <Route
            render={() => <NotFound {...props} />}
          />
        </Switch>
      </main>
      <TopButton />

        {props.viewedProducts.length === 0 ? <div></div>
            : <h2 className={styles.Title}>Viewed Products</h2>}
        <ViewedProducts
            categories={props.categories}
            products={
                props.viewedProducts.map(productId => props.products[productId])
            }
        />
      
      <Footer/>
    </div>
  </Router>
);

App = connect(
  (state) => state,
  (dispatch) => {
    return {
      selectProductId: (productId, e) => dispatch(selectProductId({ id: productId })),
      setProductOption: (optionId, e) => {
        dispatch(setProductOption({ id: optionId, e }))
      },
      checkSubmit: (selectedOptions) => dispatch(checkSubmit(selectedOptions)),
      checkUserInfoSubmit:(userInfo) => dispatch(checkUserInfoSubmit(userInfo)),
      setUserInfo: (infoId, e) => {
        dispatch(setUserInfo({ id: infoId, e }))
      },
      viewProduct: (productId) => dispatch(viewProduct({ id: productId })),
      setUserBillingInfo: (id, value) => dispatch(setUserBillingInfo({id, value}))
    }
  }
)(App)

export default App;
