import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { NegociacoesView } from "../views/negociacoes-view.js";

export class NegociacaoController {
    private inputData: HTMLInputElement;
    private inputQuantidade: HTMLInputElement;
    private inputValor: HTMLInputElement;
    private negociacoes: Negociacoes = new Negociacoes();
    private negociacoesView: NegociacoesView = new NegociacoesView('#negociacoesView');

    constructor() {
       this.inputData = document.querySelector('#data'); 
       this.inputQuantidade = document.querySelector('#quantidade'); 
       this.inputValor = document.querySelector('#valor');
       this.negociacoesView.update(this.negociacoes);
    }

    adiciona(): void {
        const negociacao = this.criarNegociacao();
        this.negociacoes.adicionaNegociacao(negociacao);
        this.negociacoesView.update(this.negociacoes);
        this.limparFormulario();
    }

    criarNegociacao(): Negociacao {
        const expresao = /-/g;
        const data = new Date(this.inputData.value.replace(expresao, ','));
        const quantidade = parseInt(this.inputQuantidade.value);
        const valor = parseInt(this.inputValor.value);
        return new Negociacao(
            data,
            quantidade,
            valor,
        );
    }

    limparFormulario(): void {
        this.inputData.value = '';
        this.inputQuantidade.value = '';
        this.inputValor.value = '';
        this.inputData.focus();
    }
}