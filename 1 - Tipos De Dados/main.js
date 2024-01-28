let a = "teste";
const b = 36;
const c = true;
const d = 1 + "2";
const e = 2 * "2";

console.log(typeof a, typeof b, typeof c);
console.log(d, typeof d);
console.log(e, typeof e);

//Especial NuMBER
console.log(typeof(Infinity, NaN, -Infinity))

//String
console.log('texto aqui usando aspas simples');
console.log("texto aqui aspas duplas");
console.log(typeof(`texto aqui usando template literals`));
                                                //Quebra de linha na STRING
console.log('primeira linha \nsegunda linha');  //Tem que colocar o /n pr acontecer a quebra
console.log('MAtheus \nPacheco');

console.log(`A soma entre 5 e 3 é: ${5 + 3}.`)

//BOOLEANs;
console.log(true);
console.log(false);
console.log((2>20));
console.log(2>20);
console.log(200>20);
console.log(2 == '2');
console.log(2 === '2');
console.log(5 >= 1);
console.log(2 != '2');
console.log(2 !== '2');

console.log(typeof (200>20));

//BOOLEANs: Operadores Logicos

// && os dois lados precisam ser true
// || Basta um lado ser TRUe 
// !- Inverte os valor de true para  false ou false para true

console.log((5 > 3) && (4 > 1));
console.log((5 > 30) && (4 > 1));

console.log((5 > 3) || (4 > 1));
console.log((5 > 30) || (4 > 1));

console.log(!true)

//Operador ternario
console.log(5 > 2 ? 'Sim': 'Não'); //Primeiro a pergunta, depois o IF e depois ELSE
console.log(1 == '1'? 'É true': "false")
console.log(true ? 10 : 1)

//Empty Values
console.log(null);
console.log(undefined);

//Exercicios Tipos de dados
//01
console.log('String usando aspas simples');
console.log("String usando aspas duplas");
console.log(`String usando template literals`);

//02
console.log(5);
console.log(5.6);
console.log(5 + 6);

//03
console.log(5 > 3);
console.log( 5 < 3);
console.log( 5 == 3);
console.log( 5 === 3);
console.log( 5 != 3);

//04
console.log((1 > 2) && (1 == 1));
console.log((1 > 2) || (1 == 1));
console.log(!true);

//05
console.log('cinco' * 5);

