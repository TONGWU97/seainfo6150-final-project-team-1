import styles from'./Home.module.css';
import ViewedProducts from '../ViewedProducts/ViewedProducts';


class Home extends React.Component {
  render() {
    const {
      categories,
      products,
      viewedProducts,

    } = this.props;
    console.log("viewed products", viewedProducts)
    return (
      <div>
        <h1 className={styles.Title}>Home</h1>
        <link href="./Home.module.css" rel="stylesheet" type="text/css" />
        <div className={styles.WelcomePage}>
          <img id={styles.HomeImage} src="https://images.unsplash.com/photo-1551952237-954a0e68786c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" alt="Welcome" />
          <div className={styles.Welcome}> Welcome </div>
        </div>
        <h2 className={styles.Title}>Viewed Products</h2>

        {/* start 5 most recently viewed products */}
        <ViewedProducts
          categories={categories}
          products={
            viewedProducts.map(productId => products[productId])
          }
        />      

    </div>
      )
  }
}

export default Home;
