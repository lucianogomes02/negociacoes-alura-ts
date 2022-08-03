import { logarTempoDeExecucao } from "../decorators/logar-tempo-de-execucao.js";

export abstract class View<Tipo> {
    protected elemento: HTMLElement
    private escapar: boolean = false

    constructor(seletor: string, escapar?: boolean) {
        const elemento = document.querySelector(seletor);
        if (elemento) {
            this.elemento = elemento as HTMLElement;
        } else {
            throw Error(`Seletor ${seletor} não exite no DOM!`);
        }

        if (escapar) {
            this.escapar = escapar;
        }
        
    }

    protected abstract template(modelo: Tipo): string;

    @logarTempoDeExecucao()
    public update(modelo: Tipo): void {
        let template = this.template(modelo);
        if (this.escapar) {
            template = template.replace(/<script>[\s\S]*?<\/script>/, '');
        }
        this.elemento.innerHTML = template;
    }
}