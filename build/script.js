"use strict";
/*ATIVIDADE 1
Crie uma um programa de saúde, nesse programa desenvolva uma Arrow functions que calcula o imc de pacientes,
a função deverá receber os  seguintes parâmetros, peso e altura.*/
Object.defineProperty(exports, "__esModule", { value: true });
var PromptSync = require("prompt-sync");
var prompt = PromptSync();
var weight = Number(prompt('Type ur weight: '));
var height = Number(prompt('Type ur height: '));
var bmi = function (height, weight) {
    return weight / (Math.pow(height, 2));
};
var bmiresult = bmi(weight, height);
console.log("Your Body Mass Index is: ".concat(bmiresult));
