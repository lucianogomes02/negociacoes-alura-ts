import { Negociacao } from "../models/negociacao.js";

export class NegociacaoController {
    private inputData: HTMLInputElement;
    private inputQuantidade: HTMLInputElement;
    private inputValor: HTMLInputElement;

    constructor() {
       this.inputData = document.querySelector('#data'); 
       this.inputQuantidade = document.querySelector('#quantidade'); 
       this.inputValor = document.querySelector('#valor');
    }

    adiciona() {
        const expresao = /-/g;
        const data = new Date(this.inputData.value.replace(expresao, ','));
        const quantidade = parseInt(this.inputQuantidade.value);
        const valor = parseInt(this.inputValor.value);
        const negociacao = new Negociacao(
            data,
            quantidade,
            valor,
        );
        console.log(negociacao);
    }
}