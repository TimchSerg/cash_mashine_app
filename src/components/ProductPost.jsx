import React from 'react';

import '../css/ProductPost.css';


const ProductPost = ({ name, quantity, amount, uuId, isDelete, removeFromCart, ind }) => {

  return (
      <div className="product-post">
          <h1> <span>{ name }</span> <span onClick={removeFromCart.bind(this, uuId)}>X</span></h1>
          <p>
            <span>Кол-во: { quantity } шт</span>
          </p>
          <p><span>Стоимость: </span>{ amount } р.</p>

      </div>
    );
}


export default ProductPost;
