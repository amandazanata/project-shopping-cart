/* import { searchCep } from './helpers/cepFunctions'; */
import { getSavedCartIDs } from './helpers/cartFunctions';
import { fetchProduct, fetchProductsList } from './helpers/fetchFunctions';
import { createProductElement, createCartProductElement } from './helpers/shopFunctions';
import './style.css';

/* document.querySelector('.cep-button').addEventListener('click', searchCep); */

// variáveis globais
const sectionProduct = document.querySelector('.products');
const criaParagrafo = document.createElement('p');
const criaH1 = document.createElement('h1');
const cartOl = document.querySelector('.cart__products');

// Requisito 4 - Cria elemento e adiciona a classe loading + texto com aviso de carregando...
const aguardaCarregar = () => {
  criaParagrafo.classList.add('loading');
  criaParagrafo.innerText = 'carregando...';

  sectionProduct.appendChild(criaParagrafo);
};

// Requisito 5 - Função para gerar lista de produtos e erro de requisição de API
const trataErro5 = () => {
  criaH1.classList.add('error');
  criaH1.innerText = 'Algum erro ocorreu, recarregue a página e tente novamente';
  sectionProduct.appendChild(criaH1);
};

// Requisito 4 - Remove elemento com a classe loading
const removeParagrafo = () => {
  criaParagrafo.remove();
};

const trataAPI = async () => {
  try {
    // chama função para exibir carregando...
    aguardaCarregar();
    const listaDeProdutos = await fetchProductsList('computador');
    // requisito 3 - Gera lista de produtos 'computador'
    listaDeProdutos.forEach((product) => {
      const products = createProductElement(product);
      /*  console.log(listaDeProdutos); */
      // Remove a função carregando...
      removeParagrafo();
      sectionProduct.appendChild(products);
    });
  } catch (error) {
    // Chama a função para exibir erro caso falhe a requisição
    trataErro5();
  }
};
trataAPI();

getSavedCartIDs().map(async (elemento) => { // requisito 9 - getSavedCartIDs(); usar map
  const produto = await fetchProduct(elemento);
  const retorno = await Promise // promise.all
    .all([cartOl.appendChild(createCartProductElement(produto))]);
  return retorno;
});
