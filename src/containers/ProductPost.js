import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as cartActions from '../actions/cartAction';
import ProductPost from '../components/ProductPost';

let a= 0;

const mapStateToProps = ({ cart }) => ({
  items: cart.items,
  ind: a++,
});

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(cartActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductPost);
