import React, { useState, useEffect } from 'react';
import { MdAddShoppingCart } from 'react-icons/md';
import { ProductList } from './styles';
import api from '../../services/api';
import { formatPrice } from '../../util/format';

const Home = () => {
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

  return (
    <ProductList>
      {products.map(product => (
        <li key={product.id}>
          <img src={product.image} alt={product.title} />
          <strong>{product.title}</strong>
          <span>{product.priceFormated}</span>
          <button type="button">
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

export default Home;
