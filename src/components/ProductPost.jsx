import React from 'react';

import '../css/ProductPost.css';


const ProductPost = ({ name, quantity, amount, uuId, isDelete, }) => {

  return (
      <div className="product-post">
          <h1> <span>{ name }</span></h1>
          <p>
            <span>Кол-во: { quantity } шт</span>
          </p>
          <p><span>Стоимость: </span>{ amount } р.</p>
          <button >Удалить</button>
      </div>
    );
}


export default ProductPost;
