class ValidateCPF {
    constructor(cpf) {
        this.cpf = cpf;
        this.fieldAlert = document.querySelector(".field");
        this.input = document.querySelector(".field #cpf");

        this.init();
    }

    init() {
        this.validate();
    }

    validate() {
        this.clearMessage(this.fieldAlert);

        const cpfClear = this.cpf.replace(/\D+/g, "");

        if (cpfClear === "") {
            this.input.focus();
            return this.createDiv(this.fieldAlert, "Insira um CPF para verificação", "error");
        }

        const newCPF = this.createNewCPF(cpfClear);
        const result = cpfClear === newCPF ? "CPF Válido" : "CPF Inválido";
        const classAlertField = result === "CPF Válido" ? "valid" : "error";

        this.createDiv(this.fieldAlert, result, classAlertField);
        
    }

    createNewCPF(cpfFormated) {
        const cpfWithoutDigit = cpfFormated.slice(0, -2);
        const digit01 = this.createDigit(cpfWithoutDigit);
        const digit02 = this.createDigit(cpfWithoutDigit + digit01);
        const newCPF = cpfWithoutDigit + digit01 + digit02;
        return newCPF;
    }

    createDigit(cpfWithoutDigit){
        let total = 0;
        let cpfReverse = cpfWithoutDigit.length + 1;

        for (let digit of cpfWithoutDigit) {
            total = total + cpfReverse * Number(digit);
            cpfReverse --;
        }

        const digit = 11 - (total % 11);
        return digit <= 9 ? String(digit) : "0";
    }

    createDiv(fieldAlert, message, oneClass){
        const div = document.createElement("div");
        div.innerHTML = message;
        div.classList.add(oneClass);

        fieldAlert.appendChild(div);
    };

    clearMessage(fieldAlert) {
        const message = fieldAlert.querySelector("div");

        if (message) {
            message.remove();
        }
    }
}


const btnCheckCPF = document.querySelector("section .field #btn-checkCpf");

btnCheckCPF.addEventListener("click", () => {
    const numberCPF = document.querySelector("section .field #cpf").value;
    const validatingCPF = new ValidateCPF(numberCPF);
});



