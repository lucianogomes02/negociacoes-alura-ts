import { NegociacaoController } from "./controllers/negociacao-controller.js";

const controller = new NegociacaoController();
const formulario = document.querySelector('.form');
if (formulario) {
    formulario.addEventListener('submit', (evento: Event) => {
        evento.preventDefault();
        controller.adiciona();
    })
} else {
    throw Error('Não foi possível inicializar a aplicação. Verifique se o formulário existe.')
}
