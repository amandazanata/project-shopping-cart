export const fetchProduct = () => {
  // seu código aqui
};

export const fetchProductsList = (produto) => fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${produto}`).then((resposta) => resposta.json());

fetchProductsList('computador')
  .then((APIresults) => console.log(APIresults))
  .catch((error) => console.log(error));
