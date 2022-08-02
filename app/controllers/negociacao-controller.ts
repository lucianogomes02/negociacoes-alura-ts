import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { MensagemView } from "../views/mensagem-view.js";
import { NegociacoesView } from "../views/negociacoes-view.js";

export class NegociacaoController {
    private inputData: HTMLInputElement;
    private inputQuantidade: HTMLInputElement;
    private inputValor: HTMLInputElement;
    private negociacoes: Negociacoes = new Negociacoes();
    private negociacoesView: NegociacoesView = new NegociacoesView('#negociacoesView');
    private mensagemView: MensagemView = new MensagemView('#mensagemView');

    constructor() {
       this.inputData = document.querySelector('#data'); 
       this.inputQuantidade = document.querySelector('#quantidade'); 
       this.inputValor = document.querySelector('#valor');
       this.negociacoesView.update(this.negociacoes);
    }

    public adiciona(): void {
        const negociacao = this.criarNegociacao();
        this.negociacoes.adicionaNegociacao(negociacao);
        this.negociacoesView.update(this.negociacoes);
        this.mensagemView.update('Negociação adicionada com sucesso!');
        this.limparFormulario();
    }

    private criarNegociacao(): Negociacao {
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

    public limparFormulario(): void {
        this.inputData.value = '';
        this.inputQuantidade.value = '';
        this.inputValor.value = '';
        this.inputData.focus();
    }
}