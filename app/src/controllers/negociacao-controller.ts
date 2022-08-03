import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { MensagemView } from "../views/mensagem-view.js";
import { NegociacoesView } from "../views/negociacoes-view.js";
import { DiasDaSemana } from "../enums/dias-da-semana.js";
import { logarTempoDeExecucao } from "../decorators/logar-tempo-de-execucao.js";
import { NegociacoesService } from "../services/negociacoes-service.js";

export class NegociacaoController {
    private inputData: HTMLInputElement;
    private inputQuantidade: HTMLInputElement;
    private inputValor: HTMLInputElement;
    private negociacoes: Negociacoes = new Negociacoes();
    private negociacoesView: NegociacoesView = new NegociacoesView('#negociacoesView', true);
    private mensagemView: MensagemView = new MensagemView('#mensagemView');
    private negociacoesService: NegociacoesService = new NegociacoesService();

    constructor() {
       this.inputData = document.querySelector('#data') as HTMLInputElement; 
       this.inputQuantidade = document.querySelector('#quantidade') as HTMLInputElement; 
       this.inputValor = document.querySelector('#valor') as HTMLInputElement;
       this.negociacoesView.update(this.negociacoes);
    }

    @logarTempoDeExecucao(true)
    public adiciona(): void {
        const negociacao = Negociacao.criaDe(
            this.inputData.value,
            this.inputQuantidade.value,
            this.inputValor.value,
        );
        if (!this.ehDiaUtil(negociacao.data)) {
            this.mensagemView.update('Apenas negociações em dias úteis são aceitas!');
            return;
        }
        this.negociacoes.adicionaNegociacao(negociacao);
        this.negociacoesView.update(this.negociacoes);
        this.mensagemView.update('Negociação adicionada com sucesso!');
        this.limparFormulario();
    }

    public importarDados(): void {
        this.negociacoesService
            .obterNegociacoes()
            .then(negociacoes => {
                for(let negociacao of negociacoes) {
                    this.negociacoes.adicionaNegociacao(negociacao);
                }
                this.negociacoesView.update(this.negociacoes);
            });
    }

    private ehDiaUtil(data: Date): boolean {
        return data.getDay() > DiasDaSemana.DOMINGO && data.getDay() < DiasDaSemana.SABADO;
    }

    public limparFormulario(): void {
        this.inputData.value = '';
        this.inputQuantidade.value = '';
        this.inputValor.value = '';
        this.inputData.focus();
    }
}