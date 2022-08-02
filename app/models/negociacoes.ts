import { Negociacao } from "./negociacao";

export class Negociacoes {
    private negociacoes: Negociacao[] = [];

    public adicionaNegociacao(negociacao: Negociacao) {
        this.negociacoes.push(negociacao);
    }

    public listarNegociacoes(): readonly Negociacao[] {
        return this.negociacoes;
    }
}
