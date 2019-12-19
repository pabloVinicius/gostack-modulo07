import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { MdAddShoppingCart } from 'react-icons/md';
import { ProductList } from './styles';
import api from '../../services/api';
import { formatPrice } from '../../util/format';

const Home = ({ dispatch }) => {
  const [products, changeProducts] = useState([]);

  const requestData = async () => {
    const response = await api.get('products');
    changeProducts(
      response.data.map(el => ({ ...el, priceFormated: formatPrice(el.price) }))
    );
  };

  useEffect(() => {
    requestData();
  }, []);

  const handleAddProduct = product => {
    dispatch({
      type: 'ADD_TO_CART',
      product,
    });
  };

  return (
    <ProductList>
      {products.map(product => (
        <li key={product.id}>
          <img src={product.image} alt={product.title} />
          <strong>{product.title}</strong>
          <span>{product.priceFormated}</span>
          <button type="button" onClick={() => handleAddProduct(product)}>
            <div>
              <MdAddShoppingCart size={16} color="#FFF" />
            </div>
            <span>ADICIONAR AO CARRINHO</span>
          </button>
        </li>
      ))}
    </ProductList>
  );
};

Home.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect()(Home);
