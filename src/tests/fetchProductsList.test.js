import './mocks/fetchSimulator';
import { fetchProductsList } from '../helpers/fetchFunctions';
import computadorSearch from './mocks/search';

// implemente seus testes aqui
describe('Teste a função fetchProductsList', () => {
  it('fetchProductsList é uma função', () => {
    expect(typeof fetchProductsList).toBe('function');
  });

  it('fetch é chamado ao executar fetchProductsList', () => {
    return fetchProductsList('computador').then(data => {
    expect(data).toMatch('fetch');
    });
  });

  it('fetch é chamado com o endpoint correto ao executar fetchProductsList', () => {
    return fetchProductsList('computador').then(data => {
    expect(data).toMatch('https://api.mercadolibre.com/sites/MLB/search?q=computador');
    });
  });

  // it('...', () => {
  // });
});
