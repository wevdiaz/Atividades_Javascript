const buttonsColors = document.querySelectorAll(".container .btn");



function clearClass() {
    const body = document.querySelector("body");
    body.removeAttribute("class");
}

function changeBackground(buttons) {
    for (button of buttons) {

        button.addEventListener("click", (e) => {
            const newBackground = e.target.dataset.color;
            clearClass();
    
            const body = document.querySelector("body");
            body.classList.add(newBackground);            
        });
    }
}

changeBackground(buttonsColors);