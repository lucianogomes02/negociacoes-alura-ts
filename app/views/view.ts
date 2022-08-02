export abstract class View<Tipo> {
    protected elemento: HTMLElement
    private escapar: boolean = false

    constructor(seletor: string, escapar?: boolean) {
        this.elemento = document.querySelector(seletor);
    }

    protected abstract template(modelo: Tipo): string;

    public update(modelo: Tipo): void {
        let template = this.template(modelo);
        if (this.escapar) {
            template = template.replace(/<script>[\s\S]*?<\/script>/, '');
        }
        this.elemento.innerHTML = template;
    }
}