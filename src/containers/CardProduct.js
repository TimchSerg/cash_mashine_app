import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as cartActions from '../actions/cartAction';
import CardProduct from '../components/CardProduct';


const mapStateToProps = ({ cart }) => ({
  totalPrice: cart.items.reduce((total, product) => total + product.amount, 0),
  count: cart.items.length,
  items: cart.items
});

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(cartActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(CardProduct);
