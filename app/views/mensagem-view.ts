import { View } from "./view.js";

export class MensagemView extends View{
    template(modelo: string): string {
        return `
            <p class="alert alert-info">${modelo}</p>
        `
    }

    update(modelo: string): void {
        const template = this.template(modelo);
        this.elemento.innerHTML = template;
    }
}