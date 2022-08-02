export class Negociacao {
    constructor(_data, quantidade, valor) {
        this._data = _data;
        this.quantidade = quantidade;
        this.valor = valor;
    }
    get volume() {
        return this.quantidade * this.valor;
    }
    get data() {
        const data = new Date(this._data.getTime());
        return data;
    }
    static criaDe(data, quantidade, valor) {
        const expresao = /-/g;
        const dataFormatada = new Date(data.replace(expresao, ','));
        const quantidadeProcessada = parseInt(quantidade);
        const valorProcessado = parseInt(valor);
        return new Negociacao(dataFormatada, quantidadeProcessada, valorProcessado);
    }
}
