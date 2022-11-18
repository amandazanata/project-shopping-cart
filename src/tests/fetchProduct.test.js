import './mocks/fetchSimulator';
import { fetchProduct } from '../helpers/fetchFunctions';
import product from './mocks/product';

// implemente seus testes aqui
describe('Teste a função fetchProduct', () => {
  it('fetchProduct é uma função', () => {
    expect(typeof fetchProduct).toBe('function');
  });

  it('Execute a função fetchProduct com o argumento do produto "MLB1405519561" e teste se fetch foi chamada', async () => {
    await fetchProduct('MLB1405519561');
    expect(fetch).toHaveBeenCalled();
    });

    it('Teste se, ao chamar a função fetchProduct com o argumento do produto "MLB1405519561", a função fetch utiliza o endpoint correto', async () => {
      const search = 'https://api.mercadolibre.com/items/MLB1405519561';
      await fetchProduct('MLB1405519561');
      expect(fetch).toHaveBeenCalledWith(search);
      });


  it('fetchProduct com o argumento do produto "MLB1405519561" é uma estrutura de dados igual ao objeto produto', async () => {
    expect(await fetchProduct('MLB1405519561')).toMatchObject(product);
  });

  it('fetchProduct sem argumento, retorna um erro com a mensagem: Termo de busca não informado', async () => {
    await expect(fetchProduct()).rejects.toThrow(Error);
  });
});
