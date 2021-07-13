const form = document.getElementById("form");
const answer = document.getElementById("result-imc");

function checkWeightAndHeightIsNan(weight, height) {
    if (isNaN(Number(weight)) || weight === "") {
        answer.classList.add("alert");
        return answer.innerHTML = `O valor do peso é inválido`
     }
     if (isNaN(Number(height)) || height === "") {
         console.log(weight, height)
         answer.classList.add("alert");
         return answer.innerHTML = `O valor da altura é inválido`
     }     
}

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const weight = document.getElementById("weight").value;
    const height = document.getElementById("height").value;

    const isNotValid = checkWeightAndHeightIsNan(weight, height);

    if (isNotValid) {
        return answer.innerHTML = isNotValid;
    }else {
        answer.classList.remove("alert");
        answer.classList.remove("attention");
    }    
    
    const imc = Number(weight) / ( Number(height) * Number(height));    

    if ( imc < 18.5) {        
        answer.classList.add("answer");
        answer.innerHTML = `IMC: ${imc.toFixed(2)} -  Você está abaixo do peso`;
    }
    else if(imc >= 18.5 && imc <= 24.9) {
        answer.classList.add("answer");
        answer.innerHTML = `IMC: ${imc.toFixed(2)} -  Você está com o peso normal`;
    }
    else if (imc >= 25 && imc <= 29.9) {
        answer.classList.add("attention");
        answer.innerHTML = `IMC: ${imc.toFixed(2)} -  Você está com sobrepeso`;
    }
    else if (imc >= 30 && imc <= 34.9) {
        answer.classList.add("alert");
        answer.innerHTML = `IMC: ${imc.toFixed(2)} - Atenção, Você está com Obesidade grau 1`;
    }
    else if (imc >= 35 && imc <= 39.9) {
        answer.classList.add("alert");
        answer.innerHTML = `IMC: ${imc.toFixed(2)} - Atenção, Você está com Obesidade grau 2`;
    }
    else if (imc >= 40) {
        answer.classList.add("alert");
        answer.innerHTML = `IMC: ${imc.toFixed(2)} - Atenção, Você está com Obesidade grau 3`;
    }
    
});
