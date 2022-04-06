import GeraCPF from "./modules/GeraCPF";

import './assets/css/style.css';

(function(){
    const novoCPFGerado = document.querySelector(".container .cpf-gerado");
    const gera = new GeraCPF();
    const cpf = gera.geraNovoCPF();
    novoCPFGerado.textContent = cpf;
})()
