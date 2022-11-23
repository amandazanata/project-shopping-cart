/* import { searchCep } from './helpers/cepFunctions'; */
import { saveCartID } from './helpers/cartFunctions';
import { fetchProduct, fetchProductsList } from './helpers/fetchFunctions';
import { createCartProductElement, createProductElement } from './helpers/shopFunctions';
import './style.css';

/* document.querySelector('.cep-button').addEventListener('click', searchCep); */

// variáveis globais
const sectionProduct = document.querySelector('.products');
const criaParagrafo = document.createElement('p');
const criaH1 = document.createElement('h1');

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
// _______________________________________________________________________

// saveCartID(); adiciona o ID do produto ao localStorage
// fetchProduct(); faz a requisição do produto para a API com o parametro ID já passado
// createCartProductElement(); Cria componentes HTML e adiciona o produto no carrinho
// feito ******** adicionar createCartProductElement() como filho de <ol class="cart__products">
// getIdFromProduct() query selector

async function getProduct() {
  const cartOl = document.querySelector('.cart__products');
  const btnCart = document.querySelectorAll('.product__add');

  btnCart.forEach((clicks) => {
    clicks.addEventListener('click', async () => {
      const retornaId = clicks.parentNode.firstChild.innerText;
      const dados = await fetchProduct(retornaId);
      // console.log(dados);
      const resultado = await fetch(`${dados.id}${dados.title}${dados.price}`);
      const criaComponente = createCartProductElement(resultado);

      cartOl.appendChild(criaComponente);
    });
    saveCartID();
  });
}
