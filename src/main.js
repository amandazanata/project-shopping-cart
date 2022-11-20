import { searchCep } from './helpers/cepFunctions';
import { fetchProductsList } from './helpers/fetchFunctions';
import { createProductElement } from './helpers/shopFunctions';
import './style.css';

document.querySelector('.cep-button').addEventListener('click', searchCep);

// variáveis globais
const sectionProduct = document.querySelector('.products');
const sectionContainer = document.querySelector('.container');
const paragrafo = document.createElement('p');

// Cria elemento e adiciona a classe loading + texto com aviso de carregando...
const aguardaCarregar = () => {
  paragrafo.classList.add = 'loading';
  paragrafo.textContent = 'carregando...';

  sectionProduct.appendChild(paragrafo);

  return sectionProduct;
};

// Requisito 4 - Remove elemento com a classe loading
const removeParagrafo = () => {
  paragrafo.remove();
};

// Requisitos 1 e 5 - Função para gerar lista de produtos e erro de requisição de API
const trataErro5 = () => {
  const elemento = document.createElement('p');
  elemento.classList.add = 'error';
  elemento.textContent = 'Algum erro ocorreu, recarregue a página e tente novamente';

  sectionContainer.appendChild(elemento);
};

const trataAPI = async () => {
  aguardaCarregar();
  try {
    const listaDeProdutos = await fetchProductsList('computador');
    listaDeProdutos.forEach((product) => { // requisito 1
      const produtcts = createProductElement(product);
      sectionProduct.appendChild(produtcts);
      removeParagrafo();
    });
  } catch (error) {
    console.log('erro');
    removeParagrafo();
    trataErro5();
  }
};

window.onload = () => {
  trataAPI();
};

console.log(await fetchProductsList('computador'));
