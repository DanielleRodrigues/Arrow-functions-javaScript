/*ATIVIDADE 1
Crie uma um programa de saúde, nesse programa desenvolva uma Arrow functions que calcula o imc de pacientes, 
a função deverá receber os  seguintes parâmetros, peso e altura.*/

import PromptSync = require('prompt-sync')
const prompt = PromptSync()

const weight = Number(prompt('Type ur weight: '));
const height = Number(prompt('Type ur height: '));

const bmi = ( height:number, weight: number,) => { 
    return weight / (Math.pow(height, 2));
}

const bmiresult =bmi(weight, height)
console.log(`Your Body Mass Index is: ${bmiresult}.`) // perguntar como arredonda