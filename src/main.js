/* import { searchCep } from './helpers/cepFunctions'; */
import { fetchProductsList } from './helpers/fetchFunctions';
import { createProductElement } from './helpers/shopFunctions';
import './style.css';

/* document.querySelector('.cep-button').addEventListener('click', searchCep); */

// variáveis globais
const sectionProduct = document.querySelector('.products');
const criaParagrafo = document.createElement('p');
const criaH1 = document.createElement('h1');

// Requisito 4 - Cria elemento e adiciona a classe loading + texto com aviso de carregando...
const aguardaCarregar = () => {
  criaParagrafo.classList.add = 'loading';
  criaParagrafo.innerText = 'carregando...';

  sectionProduct.appendChild(criaParagrafo);
};

// Requisito 5 - Função para gerar lista de produtos e erro de requisição de API
const trataErro5 = () => {
  criaH1.classList.add = 'error';
  criaH1.innerText = 'Algum erro ocorreu, recarregue a página e tente novamente';
  sectionProduct.appendChild(criaH1);
};

// Requisito 4 - Remove elemento com a classe loading
const removeParagrafo = () => {
  criaParagrafo.remove();
};

const trataAPI = async () => {
  aguardaCarregar();
  try {
    const listaDeProdutos = await fetchProductsList('computador');
    removeParagrafo();
    listaDeProdutos.forEach((product) => { // requisito 3 - Gera lista de produtos 'computador'
      const products = createProductElement(product);
      sectionProduct.appendChild(products);
    });
  } catch (error) {
    trataErro5();
  }
};
trataAPI();
