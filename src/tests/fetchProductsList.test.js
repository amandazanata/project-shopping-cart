import './mocks/fetchSimulator';
import { fetchProductsList } from '../helpers/fetchFunctions';
import computadorSearch from './mocks/search';

// implemente seus testes aqui
describe('Teste a função fetchProductsList', () => {
  it('fetchProductsList é uma função', () => {
    expect(typeof fetchProductsList).toBe('function');
  });

  it('fetch é chamado ao executar fetchProductsList', async   () => {
    await fetchProductsList('computador');
    expect(fetch).toHaveBeenCalled();
    });
    
    it('fetch é chamado com o endpoint correto ao executar fetchProductsList', async   () => {
      await fetchProductsList('computador');
      const getProduct = 'https://api.mercadolibre.com/sites/MLB/search?q=computador';
      expect(fetch).toHaveBeenCalledWith(getProduct);
      });

  it('Teste se o retorno da função fetchProductsList com o argumento *computador* é uma estrutura de dados igual ao objeto computadorSearch, que já está importado no arquivo.', async () => {
    expect(await fetchProductsList('computador')).toBe(computadorSearch);
  });

  it('fetchProductsList sem argumento, retorna um erro com a mensagem: Termo de busca não informado', async () => {
    expect(fetchProductsList()).rejects.toThrow(new Error('Termo de busca não informado'));
  });
});
