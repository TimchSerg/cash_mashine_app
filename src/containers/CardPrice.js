import { connect } from 'react-redux';
import { setProducts } from '../actions/productAction';
import CardPrice from '../components/CardPrice';


const mapStateToProps = ({ cart }) => ({
  totalPrice: cart.items.reduce((total, product) => total + product.amount, 0),
  count: cart.items.length,
});

const mapDispatchToProps = dispatch => ({
  setProducts: products => dispatch(setProducts(products))
});

export default connect(mapStateToProps, mapDispatchToProps)(CardPrice);
