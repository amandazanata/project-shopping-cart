export const getAddress = async (cep) => {
  const response = await Promise.any([
    fetch(`https://cep.awesomeapi.com.br/json/${cep}`),
    fetch(`https://brasilapi.com.br/api/cep/v2/${cep}`),
  ]);
  const {
    logradouro, bairro, localidade, uf,
    address, district, city, state,
  } = await response.json();
  return {
    rua: logradouro || address,
    bairro: bairro || district,
    cidade: localidade || city,
    estado: uf || state,
  };
};

export const searchCep = async () => {
  const { value } = document.querySelector('.cep-input');

  const character = 8;
  if (value.length !== character) return;

  const { rua, bairro, cidade, estado, erro } = await getAddress(value)
    .catch(() => ({ erro: 'CEP não encontrado' }));

  document.querySelector('.cart__address')
    .innerText = erro || `${rua} - ${bairro} - ${cidade} - ${estado}`;
};
