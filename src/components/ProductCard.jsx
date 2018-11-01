import React, {Component} from 'react';
import ReactDOM from 'react-dom';
//import axios from 'axios';

import '../css/ProductCard.css';

class ProductCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      uuId: '',
      name: '',
      quantity: '',
      quantityPrice: 0,
      amount: 0,
      boolBtn: false,
      bool: false,
      //ind: 0
    }
  }

  componentDidMount(){
    this.setState({
      name: this.props.name,
      quantity: this.props.quantity,
      price: this.props.price,
    });


  }

        handleSave(){
          this.setState({
            quantityPrice: 0,
            amount: 0,
            quantity: this.state.quantity - this.state.quantityPrice,
            //ind: this.state.ind + 1
          });
        }

  handleIncrement(){
    if(this.state.quantity > this.state.quantityPrice){
      this.setState({
        quantityPrice: this.state.quantityPrice + 1,
        amount: this.state.amount + this.state.price,
      });
    }
  }

  handleDecrement(){
    if(this.state.quantityPrice !== 0){
      this.setState({
        quantityPrice: this.state.quantityPrice - 1,
        amount: this.state.amount - this.state.price,
      });
    }
  }

//методы отвечающие за "Свободную цену"
  handleBool(){
    this.setState({
      bool: !this.state.bool,
      quantityPrice: 0,
      amount: 0,
      boolBtn: this.state.bool ? false : true,
      price: !this.state.bool ? this.state.price : this.props.price
    })

  }

  newPriceFunc(e){
    e.preventDefault();

    this.setState({
      price: Number(ReactDOM.findDOMNode(this.refs.newPrice).value),
      quantityPrice: 0,
      amount: 0,
      boolBtn: false
    })
  }



  render(){

    const product ={
      uuId: this.props.uuId,
      name: this.props.name,
      quantity: this.state.quantityPrice,
      amount: this.state.amount,
      price: this.props.price,
      isDelete: true,
      //ind: this.state.ind
    }


    return(
      <div className="product">
          <h1> <span>{this.props.name}</span></h1>
          <p>
            <span>Кол-во на складе: </span>
            {this.state.quantity} шт.
          </p>
          <p><span>Цена за 1 ед: </span>{this.state.price} рублей</p>

        <div className="free-price">
          <input
            type="checkbox"
            value="Свободная цена"
            checked={this.state.bool}
            onChange={this.handleBool.bind(this)}
          />
          <label>Свободная цена</label>
          <br/>
          {this.state.bool
          ? <form
              onSubmit={this.newPriceFunc.bind(this)}
              style={{ marginLeft: '22px' }}
            >
              <label>Укажите свою цену: </label>
              <input
                type="number"
                ref='newPrice'
              />
              <button type="submit">OK</button>
            </form>
          : '' }
        </div>


          <div className="add_to_card">
            <button
              onClick={this.handleIncrement.bind(this)}
              disabled = {this.state.boolBtn}
              >+</button>
            <span>{this.state.quantityPrice}</span>
            <button
              onClick={this.handleDecrement.bind(this)}
              disabled = {this.state.boolBtn}
              >-</button>

            <p>Полная стоимость: {(this.state.amount).toFixed(2)} р.</p>
            <br />
            <span onClick={this.handleSave.bind(this)}>
              <button
                className = "btnClick"
                onClick={this.props.addToCart.bind(this, product)}
                disabled={
                  this.state.quantityPrice > 0
                  ? false
                  : true
                }>
                Добавить в корзину
              </button>
            </span>
          </div>
      </div>
    );
  }
}


export default ProductCard;
