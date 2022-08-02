export class Negociacao {

    constructor(
        private _data: Date, 
        public readonly quantidade: number, 
        public readonly valor: number
    ) {}

    get volume (): number {
        return this.quantidade * this.valor;
    }

    get data(): Date {
        const data = new Date(this._data.getTime());
        return data;
    }

    public static criaDe(data: string, quantidade: string, valor: string): Negociacao {
        const expresao = /-/g;
        const dataFormatada = new Date(data.replace(expresao, ','));
        const quantidadeProcessada = parseInt(quantidade);
        const valorProcessado = parseInt(valor);
        return new Negociacao(
            dataFormatada,
            quantidadeProcessada,
            valorProcessado,
        );
    }
}