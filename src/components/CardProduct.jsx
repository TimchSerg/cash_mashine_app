import React, { Component } from 'react';
import axios from 'axios';

import ProductPost from '../containers/ProductPost';
//import CardPrice from '../containers/CardPrice'

import './CardProduct';
import '../css/CardPrice.css';


class CardProduct extends Component {
  constructor(propa) {
    super();

  }

  handlePostSell(){
    const { items } = this.props;

    const url = 'http://localhost:4000/sell';
    const tokenStr = 'a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11';

    const arrayPrice = items.map(item => {
      return {
        uuId: item.uuId,
        name: item.name,
        quantity: item.quantity,
        amount: item.amount,
      };
    });

axios({
    	method: 'POST',
    	headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${tokenStr}`
      },
    	url: url,
    	data: {
        type: 'SELL',
        datetime: new Date(),
        goods_list: arrayPrice
      }

      })
      .then(function (response) {
        if(response.status === 200){
          console.log(response);
          alert('ОК! Продажа прошла')
        }else if(response.status >= 500){
          alert('Продажа не прошла!');
        }
	       console.log(response);
	      })
    	.catch(function (error) {
    	    console.log(error);
    	});

        //console.log(arrayPrice);

  }


  render(){
    const { items, totalPrice, count, removeAllCart } = this.props;
    //console.log(items);


    return (
      <div className="product_card">


            {items.map((item, index) => <ProductPost key = {index}  {...item}/>)}

            <div className="card-price">
              <hr />
              <ul>
                <li>Полная стоимость: <b>{ (totalPrice).toFixed(2) }</b></li>
                <li>Кол-во наименований: <b>{ count }</b></li>
              </ul>
              <div className="btnSell">
                <span onClick={this.handlePostSell.bind(this)}>
                  <button onClick={removeAllCart.bind(this)}>Оформить заказ</button>
                </span>
                  <button onClick={removeAllCart.bind(this)}>Очистить корзину</button>
              </div>

              <hr />
            </div>
      </div>
    );
  }
}
export default CardProduct;
