import { Negociacao } from "./negociacao";

export class Negociacoes {
    private negociacoes: Negociacao[] = [];

    adicionaNegociacao(negociacao: Negociacao) {
        this.negociacoes.push(negociacao);
    }

    listarNegociacoes(): readonly Negociacao[] {
        return this.negociacoes;
    }
}
