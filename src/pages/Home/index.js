import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { MdAddShoppingCart } from 'react-icons/md';
import { ProductList } from './styles';
import api from '../../services/api';
import { formatPrice } from '../../util/format';

import * as CartActions from '../../store/modules/cart/actions';

const Home = () => {
  const [products, changeProducts] = useState([]);
  const amount = useSelector(state =>
    state.cart.reduce((theAmount, product) => {
      theAmount[product.id] = product.amount;

      return theAmount;
    }, {})
  );
  const dispatch = useDispatch();

  const requestData = async () => {
    const response = await api.get('products');
    changeProducts(
      response.data.map(el => ({ ...el, priceFormated: formatPrice(el.price) }))
    );
  };

  useEffect(() => {
    requestData();
  }, []);

  const handleAddProduct = id => {
    dispatch(CartActions.addToCartRequest(id));
  };

  return (
    <ProductList>
      {products.map(product => (
        <li key={product.id}>
          <img src={product.image} alt={product.title} />
          <strong>{product.title}</strong>
          <span>{product.priceFormated}</span>
          <button type="button" onClick={() => handleAddProduct(product.id)}>
            <div>
              <MdAddShoppingCart size={16} color="#FFF" />
              {amount[product.id] || 0}
            </div>
            <span>ADICIONAR AO CARRINHO</span>
          </button>
        </li>
      ))}
    </ProductList>
  );
};

export default Home;
