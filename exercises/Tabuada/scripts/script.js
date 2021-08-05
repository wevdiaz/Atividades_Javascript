const timesTable = document.getElementById("times-table");
const mainNumber = document.querySelector(".field div #main-number");
const buttonTimesTable = document.querySelector(".field #calculate");
const buttonClear = document.querySelector(".field #clear");


function calculateMultipliation(number, digit) {
   const span = document.createElement("span"); 
   span.innerText = number * digit;
   return span;
}

function createItem(number, digit) {
    const li = document.createElement("li");
    li.innerText = `${number} X ${digit} = `;
    return li;
}

function clearTimesTable() {
    const listResult = document.querySelector("#times-table ul");
    timesTable.classList.remove("result");
    if (listResult) {
        timesTable.removeChild(listResult);
    }
}

buttonTimesTable.addEventListener("click", (e) => {
    clearTimesTable();

    const listResult = document.createElement("ul");
    const value = Number(mainNumber.value);
    let i = 0;    
        
    if (mainNumber.value === "" || isNaN(value)) {
        clearTimesTable();
        return alert("Digite um valor");
    }

    while (i <= 10) {    
        let item = createItem(value, i);
        let result = calculateMultipliation(value, i);
        item.appendChild(result);
        listResult.appendChild(item);
        i++;
    }
    timesTable.appendChild(listResult);
    timesTable.classList.add("result");
});

buttonClear.addEventListener("click", () => {
    clearTimesTable();
    mainNumber.value = "";
});





