import React from 'react';
import { MdAddShoppingCart } from 'react-icons/md';
import { ProductList } from './styles';

const Home = () => {
  return (
    <ProductList>
      <li>
        <img
          src="https://img.irroba.com.br/fit-in/600x600/filters:fill(fff):quality(90)/adaption/catalog/kits/2-pares/preto-cinza.jpg"
          alt="Tênis"
        />
        <strong>Meu tênis</strong>
        <span>R$ 70,00</span>
        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" />
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src="https://img.irroba.com.br/fit-in/600x600/filters:fill(fff):quality(90)/adaption/catalog/kits/2-pares/preto-cinza.jpg"
          alt="Tênis"
        />
        <strong>Meu tênis</strong>
        <span>R$ 70,00</span>
        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" />
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src="https://img.irroba.com.br/fit-in/600x600/filters:fill(fff):quality(90)/adaption/catalog/kits/2-pares/preto-cinza.jpg"
          alt="Tênis"
        />
        <strong>Meu tênis</strong>
        <span>R$ 70,00</span>
        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" />
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src="https://img.irroba.com.br/fit-in/600x600/filters:fill(fff):quality(90)/adaption/catalog/kits/2-pares/preto-cinza.jpg"
          alt="Tênis"
        />
        <strong>Meu tênis</strong>
        <span>R$ 70,00</span>
        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" />
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
    </ProductList>
  );
};

export default Home;
