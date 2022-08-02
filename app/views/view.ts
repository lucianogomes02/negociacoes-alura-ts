export class View<Tipo> {
    protected elemento: HTMLElement

    constructor(seletor: string) {
        this.elemento = document.querySelector(seletor);
    }

    template(modelo: Tipo): string {
        throw Error('Classe filha precisa implementar template')
    }

    update(modelo: Tipo): void {
        const template = this.template(modelo);
        this.elemento.innerHTML = template;
    }
}