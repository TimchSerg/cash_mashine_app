import React, { Component } from 'react';

import axios from 'axios';

import Menu from '../components/Menu';
import ProductCard from '../containers/ProductCard';
import CardProduct from '../containers/CardProduct';
//import CardPrice from '../containers/CardPrice';

import '../css/App.css';

import '../store';

class App extends Component {

  componentDidMount(){
    const { setProducts } = this.props;
    const url = '/goods.json';
    const tokenStr = 'a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11';

    axios({
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${tokenStr}`
      },
      url: url
    })
        .then(({ data }) => {
          setProducts(data);
      })
      .catch(error => console.log(error));
  }

  render() {
    const { products } = this.props;

    return (
      <div className="container">
        <Menu />
        <div className="products_list">
            {!products
            ? 'Загрузка...'
            : products.map(product => (
                <ProductCard key={product.uuId} {...product}/>
              ))}
        </div>
        <CardProduct />
      </div>


    );
  }
}

export default App;
