import { Negociacao } from "../models/negociacao.js";
export class NegociacaoController {
    constructor() {
        this.inputData = document.querySelector('#data');
        this.inputQuantidade = document.querySelector('#quantidade');
        this.inputValor = document.querySelector('#valor');
    }
    adiciona() {
        const negociacao = this.criarNegociacao();
        console.log(negociacao);
        this.limparFormulario();
    }
    criarNegociacao() {
        const expresao = /-/g;
        const data = new Date(this.inputData.value.replace(expresao, ','));
        const quantidade = parseInt(this.inputQuantidade.value);
        const valor = parseInt(this.inputValor.value);
        return new Negociacao(data, quantidade, valor);
    }
    limparFormulario() {
        this.inputData.value = '';
        this.inputQuantidade.value = '';
        this.inputValor.value = '';
        this.inputData.focus();
    }
}
