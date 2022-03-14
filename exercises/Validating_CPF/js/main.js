class ValidateCPF {
    constructor(cpf) {
        this.cpf = cpf;
        this.init();
    }

    init() {
        this.validate();
    }

    validate() {
        console.log(this.cpf);
        const cpfClear = this.cpf.replace(/\D+/g, "");
        const newCPF = this.createNewCPF(cpfClear);
        
        return cpfClear === newCPF ? console.log("CPF Válido") : console.log("CPF Inválido");
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
}


const btnCheckCPF = document.querySelector("section .field #btn-checkCpf");

btnCheckCPF.addEventListener("click", () => {
    const numberCPF = document.querySelector("section .field #cpf").value;
    const validatingCPF = new ValidateCPF(numberCPF);
});



