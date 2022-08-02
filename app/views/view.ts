export abstract class View<Tipo> {
    protected elemento: HTMLElement

    constructor(seletor: string) {
        this.elemento = document.querySelector(seletor);
    }

    protected abstract template(modelo: Tipo): string;

    public update(modelo: Tipo): void {
        const template = this.template(modelo);
        this.elemento.innerHTML = template;
    }
}