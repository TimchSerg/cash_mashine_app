import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as cartActions from '../actions/cartAction';
import ProductCard from '../components/ProductCard';


const mapStateToProps = ({ cart }, { uuId }) => ({
  addedQuantity: cart.items.reduce((count, product) => count + (product.uuId === uuId ? product.quantityPrice : 0), 0),
});

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(cartActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductCard);
