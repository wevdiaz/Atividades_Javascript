const calculate = {
    display: document.querySelector("#display input[name='display']"),

    init() {
        this.clickButtonNum(); 
        this.clearDisplay();
        this.deleteOne(); 
        this.selectOperator(); 
        this.makeCalcule();          
        
    },

    clickButtonNum() {
        const buttonsNum = document.querySelectorAll("table .btn-num");
        
        for(let button of buttonsNum) {
            button.addEventListener("click", (e) => {
                this.clearStatusStyle();
                this.display.value = this.display.value + e.target.innerHTML;                 
            });
        }
    },

    clearDisplay() {
        const btnDel = document.querySelector("table .btn-del");

        btnDel.addEventListener("click", () => {
            this.display.value = ""
        });
    },

    deleteOne() {
        const btnDeleteOne = document.querySelector("table .btn-clear");
        btnDeleteOne.addEventListener("click", () => {
            this.display.value = this.display.value.slice(0, -1);            
        });
        
    },

    selectOperator() {        
        const buttonsOperator = document.querySelectorAll("table .btn-operator");

        for(let button of buttonsOperator) {
            button.addEventListener("click", (e) => {

                this.clearStatusStyle();

                const operator = e.target.textContent;                
                const value = this.display.value;
                const lastDigit = value[value.length - 1]; 

                if (operator == lastDigit) {                    
                    return;
                }
                
                this.display.value += operator;
                                                                       
            });
        }
    },

    makeCalcule() {
        const btnResult = document.querySelector("table .btn-equa");

        btnResult.addEventListener("click", () => {
           try {
                const expression = this.display;
                const result = eval(expression.value);
                this.display.value = result;
                this.checkStatusResult(result);                
                
           }catch(err) {
               console.error(err);
               alert("Não foi possível realizar essa expressão");
               this.display.value = "";
           }
        });
    },

    checkStatusResult(result) {
        const styleStatus = result > 0 ? "positive" : "negative";        
        this.display.classList.add(`${styleStatus}`);
    },

    clearStatusStyle() {
        this.display.removeAttribute("class");
    }    
    
}


calculate.init();