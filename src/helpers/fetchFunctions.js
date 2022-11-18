export const fetchProduct = async (ProductID) => {
  if (!ProductID) {
    throw new Error('ID não informado');
  }
  const resposta = await fetch(`https://api.mercadolibre.com/items/${ProductID}`);
  const data = await resposta.json();
  return data;
};

export const fetchProductsList = async (produto) => {
  if (!produto) {
    throw new Error('Termo de busca não informado');
  }
  const APIget = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${produto}`);
  const result = await APIget.json();
  return result.results;
};
