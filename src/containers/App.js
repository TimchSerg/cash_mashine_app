import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setProducts } from '../actions/productAction';
import * as cartActions from '../actions/cartAction';

import App from '../components/App';


const mapStateToProps = ({ product, cart }) => ({
  products: product.items,
  cartItems: cart.items,
  isReady: product.isReady
});

const mapDispatchToProps = dispatch => ({
  setProducts: products => dispatch(setProducts(products)),
  ...bindActionCreators(cartActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
