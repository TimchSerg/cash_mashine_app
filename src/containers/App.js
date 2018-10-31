import { connect } from 'react-redux';
import { setProducts } from '../actions/productAction';
import App from '../components/App';


const mapStateToProps = ({ product }) => ({
  products: product.items,
  isReady: product.isReady
});

const mapDispatchToProps = dispatch => ({
  setProducts: products => dispatch(setProducts(products))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
