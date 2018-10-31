import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as cartActions from '../actions/cartAction';
import ProductCard from '../components/ProductCard';


const mapStateToProps = ({ cart }, { uuId }) => ({
  addedCount: cart.items.reduce((count, product) => count + (product.uuId === uuId ? 1 : 0), 0,),
});

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(cartActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductCard);
