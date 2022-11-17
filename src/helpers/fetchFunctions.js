export const fetchProduct = async (ProductID) => {
  if (!fetchProduct) {
    throw new Error('ID não informado');
  }
  const resposta = await fetch(`https://api.mercadolibre.com/items/${ProductID}`);
  const data = await resposta.json();
  console.log(data);
  return data;
};

export const fetchProductsList = async (produto) => {
  if (!fetchProductsList) {
    throw new Error('Termo de busca não informado');
  }
  const APIget = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${produto}`);
  const result = await APIget.json();
  console.log(result);
  return result;
};
