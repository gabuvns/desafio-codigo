const kudos = require('./kudos');

test('test getKudosForUser correct Number Input', () => {
  expect(kudos.getKudosForUser(1)).toEqual([]);  
  expect(kudos.getKudosForUser(10)).toEqual(['NICE']);
  expect(kudos.getKudosForUser(30)).toEqual(['GOOD', 'NICE']);
  expect(kudos.getKudosForUser(31)).toEqual(['GOOD', 'NICE']);
  expect(kudos.getKudosForUser(40)).toEqual(['GOOD', 'GOOD']);
  expect(kudos.getKudosForUser(75)).toEqual(['GREAT', 'GOOD', 'OK']);  
  expect(kudos.getKudosForUser(100)).toEqual(['SUPER']);  
  expect(kudos.getKudosForUser(137)).toEqual(['SUPER','GOOD', 'NICE', 'OK']);
  expect(kudos.getKudosForUser(1000)).toEqual(['SUPER','SUPER','SUPER','SUPER','SUPER',
  'SUPER','SUPER','SUPER','SUPER','SUPER']);

});

test('test getKudosForUser for inputs != integer', () => {
  expect(kudos.getKudosForUser(-1)).toEqual('Points is not a valid number');  
  expect(kudos.getKudosForUser('Test string')).toEqual('Points is not a valid number'); 
  expect(kudos.getKudosForUser(true)).toEqual('Points is not a valid number');  
  expect(kudos.getKudosForUser(1.32)).toEqual('Points is not a valid number');  
  expect(kudos.getKudosForUser(NaN)).toEqual('Points is not a valid number'); 
  expect(kudos.getKudosForUser(null)).toEqual('Points is not a valid number');  
});

test('test getKudosValueMessageForUser correct message quantity', () => {
  expect(kudos.getKudosValueMessageForUser(kudos.getKudosForUser(2)))
  .toEqual('Seus kudos não renderam dinheiro nenhum.');
  
  expect(kudos.getKudosValueMessageForUser(kudos.getKudosForUser(30)))
  .toEqual('Você recebeu treze reais em retorno aos kudos GOOD, NICE!');
  
  expect(kudos.getKudosValueMessageForUser(kudos.getKudosForUser(40)))
  .toEqual('Você recebeu dezesseis reais em retorno aos kudos GOOD, GOOD!');
  
  expect(kudos.getKudosValueMessageForUser(kudos.getKudosForUser(75)))
  .toEqual('Você recebeu vinte e cinco reais em retorno aos kudos GREAT, GOOD, OK!');
  
  expect(kudos.getKudosValueMessageForUser(kudos.getKudosForUser(100)))
  .toEqual('Você recebeu vinte e cinco reais em retorno aos kudos SUPER!');
});


test('test getKudosForUser for inputs !=  string array', () => {
  expect(kudos.getKudosValueMessageForUser(-1))
  .toEqual('Kudos is not an array of strings.');
  
  expect(kudos.getKudosValueMessageForUser(2))
  .toEqual('Kudos is not an array of strings.');
  
  expect(kudos.getKudosValueMessageForUser([7, 6, 7]))
  .toEqual('Kudos is not an array of strings.');

  expect(kudos.getKudosValueMessageForUser(true))
  .toEqual('Kudos is not an array of strings.');
  
  expect(kudos.getKudosValueMessageForUser(NaN))
  .toEqual('Kudos is not an array of strings.');
  
  expect(kudos.getKudosValueMessageForUser(null))
  .toEqual('Kudos is not an array of strings.');
  
});