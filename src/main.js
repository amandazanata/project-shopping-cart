import { searchCep } from './helpers/cepFunctions';
import { fetchProductsList } from './helpers/fetchFunctions';
import { createProductElement } from './helpers/shopFunctions';
import './style.css';

document.querySelector('.cep-button').addEventListener('click', searchCep);
const sectionProduct = document.querySelector('.products');

// <-----Cria elemento e adiciona a classe loading + texto com aviso de carregando...----->
const aguardaCarregar = () => {
  const paragrafo = document.createElement('p');
  paragrafo.classList.add = 'loading';
  paragrafo.textContent = 'carregando...';

  sectionProduct.appendChild(paragrafo);

  return sectionProduct;
};

// Requisito 4 - Remove elemento com a classe loading
const removeParagrafo = () => {
  const rmvLoading = document.getElementsByClassName('.loading')[0];
  rmvLoading.remove();

  return rmvLoading;
};

// Requisitos 1 e 5 - Função para gerar lista de produtos e erro de requisição de API
const trataErro5 = () => {
  const elemento = document.createElement('p');
  elemento.classList.add = 'error';
  elemento.textContent = 'Algum erro ocorreu, recarregue a página e tente novamente';

  sectionProduct.appendChild(elemento);

  return sectionProduct;
};

const trataAPI = async () => {
  try {
    aguardaCarregar();
    const listaDeProdutos = await fetchProductsList('computador');
    listaDeProdutos.forEach((product) => { // requisito 1
      const produtcts = createProductElement(product);
      sectionProduct.appendChild(produtcts);
    });
    removeParagrafo();
  } catch (error) {
    trataErro5();
  }
};

window.onload = () => {
  trataAPI();
};

console.log(await fetchProductsList('computador'));
