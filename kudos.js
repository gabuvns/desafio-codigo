// Como eram permitidas realizar alterações nas funções
// E pensando em um ambiente de produção, buscando a produtividade, adicionei o pacote extenso
// https://extenso.js.org/
var extenso = require('extenso')


const KUDOS_TO_POINTS = [
  { name: 'OK', value: 5 },
  { name: 'NICE', value: 10 },
  { name: 'GOOD', value: 20 },
  { name: 'GREAT', value: 50 },
  { name: 'SUPER', value: 100 },
];

// Conversão dos arrays para objeto, 
// Este objeto  foi alterada para mapear chave-valor
// Consequentemente a performance é melhorada, assim a velocidade de acesso fica O(1)
// Mapeamento do tipo de kudos para real
// const KUDOS_TO_POINTS = {
//   OK : 5,
//   NICE :10,
//   GOOD :20,
//   GREAT :50,
//   SUPER :100,
// };

const KUDOS_TO_REAL = {
  OK: 2 ,
  NICE: 5 ,
  GOOD: 8 ,
  GREAT: 15 ,
  SUPER: 25 , 
}


/* 
  Recebe: um int representando o número de pontos do usuário
  Retorna: um array contendo os kudos. Ex.: ['OK', 'GOOD'] 
*/
function getKudosForUser(points) {
  let kudosResult = [];
  let remainingPoints = points;
   // This way even if more options are added it will keep working
   for(let i of KUDOS_TO_POINTS.slice().reverse()){
    if(remainingPoints >= i.value){
      let numberOfKudos = Math.floor(remainingPoints / i.value);
      
      for(let j =0; j < numberOfKudos; j++) {
        kudosResult.push(i.name);
      } 
      
      let currentCategoryValue = numberOfKudos * i.value;
      remainingPoints -= currentCategoryValue;
    }
}
  // // This way even if more options are added it will keep working
  // for(let i of KUDOS_TO_POINTS.slice().reverse()){
  //     if(remainingPoints >= i.value){
  //       let numberOfKudos = Math.floor(remainingPoints / i.value);
        
  //       for(let j =0; j < numberOfKudos; j++) {
  //         kudosResult.push(i.name);
  //       } 
        
  //       let currentCategoryValue = numberOfKudos * i.value;
  //       remainingPoints -= currentCategoryValue;
  //     }
  // }
  return kudosResult;
} 


/* 
  Recebe: Recebe um array contendo os nomes dos kudos de um usuário. Ex.: ['OK', 'GOOD']
  Retorna: a mensagem padrão com o valor em reais dos kudos por extenso. Ex.: Parabéns, você ganhou vinte e cinco reais
*/
function getKudosValueMessageForUser(kudos) {
  let kudosString = kudos.join(', ');
  let totalValue = 0;
  
  kudos.forEach((kudoType)=>{
    totalValue+=KUDOS_TO_REAL[kudoType];
  })
  console.log(totalValue)
  
  console.log(`Você recebeu ${extenso(totalValue)} em retorno aos kudos ${kudosString}!`);
}

module.exports = {
  getKudosForUser,
  getKudosValueMessageForUser,
};

getKudosValueMessageForUser(getKudosForUser(30));