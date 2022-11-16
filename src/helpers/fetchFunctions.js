const produtos = document.querySelector('.products');

export const fetchProduct = () => {
  // seu código aqui
};

export const fetchProductsList = (query) => {
  // seu código aqui
  return fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${query}`);
  then((resposta) => resposta.json());
};
